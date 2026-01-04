"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

export function NewsletterWidget() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("/api/newsletter/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to subscribe");
      }

      toast({
        title: "Successfully subscribed!",
        description: "Thank you for joining the newsletter.",
      });

      setEmail("");
    } catch (error) {
      toast({
        title: "Subscription failed",
        description:
          error instanceof Error ? error.message : "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full space-y-6">
      <div className="space-y-2 text-center">
        <h3 className="text-3xl font-serif font-bold text-foreground">
          Join my newsletter
        </h3>
        <p className="text-lg text-muted-foreground">
          Get updates on what I'm learning and sharing.
        </p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto"
      >
        <div className="flex-1">
          <Label htmlFor="newsletter-email" className="sr-only">
            Email
          </Label>
          <Input
            id="newsletter-email"
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={isLoading}
            className="h-11"
          />
        </div>
        <Button
          type="submit"
          disabled={isLoading}
          className="h-11 sm:w-auto w-full"
        >
          {isLoading ? "Subscribing..." : "Subscribe"}
        </Button>
      </form>
    </div>
  );
}
