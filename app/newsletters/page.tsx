import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { newsletters } from "@/app/newsletters";
import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { seoConfig } from "@/lib/seo-config";

export const metadata = seoConfig.newsletters;

export default function NewslettersPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <div className="container mx-auto max-w-4xl px-4 py-12">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl font-serif font-bold text-foreground">
                Newsletters
              </h1>
              <p className="text-lg text-muted-foreground">
                Web versions of my email newsletters. Explore what I'm learning
                and sharing.
              </p>
            </div>

            <div className="grid gap-6">
              {newsletters.map((newsletter) => (
                <Card
                  key={newsletter.id}
                  className="overflow-hidden transition-all hover:shadow-md"
                >
                  <CardHeader className="space-y-2">
                    <Link
                      href={`/newsletters/${newsletter.id}`}
                      className="group"
                    >
                      <h3 className="text-2xl font-serif font-bold text-foreground group-hover:text-primary transition-colors">
                        {newsletter.title}
                      </h3>
                    </Link>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {newsletter.description}
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Link
                      href={`/newsletters/${newsletter.id}`}
                      className="text-sm font-medium text-primary hover:underline"
                    >
                      Read newsletter →
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

