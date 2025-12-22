import Link from "next/link"
import type { BlogPost } from "@/lib/posts"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

interface PostCardProps {
  post: BlogPost
}

export function PostCard({ post }: PostCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <CardHeader className="space-y-2">
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
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
        <Link href={`/posts/${post.slug}`} className="group">
          <h3 className="text-2xl font-serif font-bold text-foreground group-hover:text-primary transition-colors">
            {post.title}
          </h3>
        </Link>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground leading-relaxed">{post.excerpt}</p>
      </CardContent>
      <CardFooter>
        <Link href={`/posts/${post.slug}`} className="text-sm font-medium text-primary hover:underline">
          Read more →
        </Link>
      </CardFooter>
    </Card>
  )
}
