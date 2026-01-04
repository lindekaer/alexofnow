import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { newsletters } from "@/app/newsletters";
import { notFound } from "next/navigation";
import { SocialButtons } from "@/components/social-buttons";
import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function generateStaticParams() {
  return newsletters.map((newsletter) => ({
    id: newsletter.id.toString(),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const { id } = await params;
  const newsletter = newsletters.find((n) => n.id === parseInt(id));

  if (!newsletter) {
    return {
      title: "Newsletter Not Found",
      description: "The requested newsletter could not be found.",
    };
  }

  return {
    title: `${newsletter.title} | alexofnow`,
    description: newsletter.description,
  };
}

export default async function NewsletterPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;
  const newsletter = newsletters.find((n) => n.id === parseInt(id));

  if (!newsletter) {
    notFound();
  }

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <article className="container mx-auto max-w-3xl px-4 py-12">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="sm" asChild>
                  <Link href="/newsletters">← Back to all newsletters</Link>
                </Button>
              </div>
              <h1 className="text-5xl font-serif font-bold text-foreground text-balance">
                {newsletter.title}
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                {newsletter.description}
              </p>
            </div>

            <div className="space-y-6">
              {newsletter.links && newsletter.links.length > 0 && (
                <div className="space-y-4">
                  <h2 className="text-2xl font-serif font-bold text-foreground">
                    Links & Resources
                  </h2>
                  <div className="space-y-4">
                    {newsletter.links.map((link, index) => (
                      <div
                        key={index}
                        className="border rounded-lg p-6 space-y-2 hover:bg-accent/50 transition-colors"
                      >
                        <a
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xl font-semibold text-primary hover:underline block"
                        >
                          {link.title}
                        </a>
                        <p className="text-muted-foreground leading-relaxed">
                          {link.description}
                        </p>
                        <a
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-muted-foreground hover:text-primary transition-colors inline-block"
                        >
                          {new URL(link.url).hostname} →
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="flex flex-col items-center gap-4 text-center py-8">
              <p className="text-muted-foreground">
                Thanks for reading! Let your voice be heard - don't hesitate to
                reach out.
              </p>
              <SocialButtons
                showYouTube={true}
                showInstagram={true}
                showTikTok={true}
                showEmail={true}
              />
            </div>
          </div>
        </article>
      </main>
      <SiteFooter />
    </div>
  );
}
