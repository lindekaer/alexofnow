import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { getAllPosts, getCategories } from "@/lib/posts";
import { PostsFilter } from "@/components/posts-filter";
import { seoConfig } from "@/lib/seo-config";

export const metadata = seoConfig.posts;

export default function PostsPage() {
  const allPosts = getAllPosts();
  const categories = getCategories();

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <div className="container mx-auto max-w-4xl px-4 py-12">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl font-serif font-bold text-foreground">All Posts</h1>
              <p className="text-lg text-muted-foreground">
                Explore all articles on minimalism, creativity, and intentional living.
              </p>
            </div>

            <PostsFilter posts={allPosts} categories={categories} />
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
