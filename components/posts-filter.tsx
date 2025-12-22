"use client";

import { PostCard } from "@/components/post-card";
import { Button } from "@/components/ui/button";
import { BlogPost } from "@/lib/posts";
import { useState } from "react";

interface PostsFilterProps {
  posts: BlogPost[];
  categories: string[];
}

export function PostsFilter({ posts, categories }: PostsFilterProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredPosts =
    selectedCategory === "All"
      ? posts
      : posts.filter((post) => post.category === selectedCategory);

  return (
    <>
      <div className="flex flex-wrap gap-2">
        <Button
          variant={selectedCategory === "All" ? "default" : "outline"}
          size="sm"
          onClick={() => setSelectedCategory("All")}
        >
          All
        </Button>
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </Button>
        ))}
      </div>

      <div className="grid gap-6">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => <PostCard key={post.slug} post={post} />)
        ) : (
          <div className="py-12 text-center">
            <p className="text-muted-foreground">No posts found in this category.</p>
          </div>
        )}
      </div>
    </>
  );
}

