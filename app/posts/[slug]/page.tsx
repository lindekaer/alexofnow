import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { getPostBySlug, getAllPosts } from "@/lib/posts";
import { notFound } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import ReactMarkdown from "react-markdown";
import { SocialButtons } from "@/components/social-buttons";
import { Metadata } from "next";

export function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found",
      description: "The requested post could not be found.",
    };
  }

  return {
    title: `${post.title} | alexofnow`,
    description: post.excerpt,
  };
}

export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <article className="container mx-auto max-w-3xl px-4 py-12">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </time>
                  <span>•</span>
                  <span>{post.readTime}</span>
                  <span>•</span>
                  <span className="text-primary">{post.category}</span>
                </div>
              </div>
              <h1 className="text-5xl font-serif font-bold text-foreground text-balance">
                {post.title}
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
                {post.excerpt}
              </p>
              <div className="flex items-center gap-3 pt-4">
                <Avatar className="h-12 w-12">
                  <AvatarImage
                    src={post.author.avatar || "/placeholder.svg"}
                    alt={post.author.name}
                  />
                  <AvatarFallback>
                    {post.author.name.substring(0, 2).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium text-foreground">
                    {post.author.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Just a normal guy trying to live a better life.
                  </p>
                </div>
              </div>
            </div>

            <hr className="border-border" />

            <div className="prose prose-lg max-w-none">
              <ReactMarkdown>{post.content}</ReactMarkdown>
            </div>

            <hr className="border-border" />

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
