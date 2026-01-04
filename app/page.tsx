import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ProfileSection } from "@/components/profile-section";
import { PostCard } from "@/components/post-card";
import { NewsletterWidget } from "@/components/newsletter-widget";
import { getRecentPosts } from "@/lib/posts";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { seoConfig } from "@/lib/seo-config";

export const metadata = seoConfig.home;

export default function HomePage() {
  const recentPosts = getRecentPosts(3);

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <div className="container mx-auto max-w-4xl px-4">
          <ProfileSection />

          <section className="space-y-8 pt-12">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-serif font-bold text-foreground">
                Feel free to explore
              </h2>
              <Button variant="ghost" asChild>
                <Link href="/posts">View all →</Link>
              </Button>
            </div>
            <div className="grid gap-6">
              {recentPosts.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
          </section>

          <section className="py-16">
            <NewsletterWidget />
          </section>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
