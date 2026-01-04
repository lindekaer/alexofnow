import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";

const subscribeSchema = z.object({
  email: z.email("Please enter a valid email address"),
});

export async function POST(request: NextRequest) {
  try {
    // Random delay between 100ms and 4000ms to prevent DDOS
    const delay = Math.floor(Math.random() * 3900) + 100;
    await new Promise((resolve) => setTimeout(resolve, delay));

    const body = await request.json();

    // Validate input with Zod
    const validationResult = subscribeSchema.safeParse(body);

    if (!validationResult.success) {
      return NextResponse.json(
        {
          error: "Invalid email address",
          details: validationResult.error.issues,
        },
        { status: 400 }
      );
    }

    const { email } = validationResult.data;

    // Check if subscriber already exists
    const existingSubscriber = await prisma.subscriber.findUnique({
      where: { email },
    });

    if (existingSubscriber) {
      return NextResponse.json(
        { error: "This email is already subscribed" },
        { status: 409 }
      );
    }

    // Create new subscriber
    const subscriber = await prisma.subscriber.create({
      data: { email },
    });

    return NextResponse.json(
      {
        message: "Successfully subscribed to newsletter",
        subscriber: { id: subscriber.id, email: subscriber.email },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Newsletter subscription error:", error);
    return NextResponse.json(
      { error: "Failed to subscribe. Please try again later." },
      { status: 500 }
    );
  }
}
