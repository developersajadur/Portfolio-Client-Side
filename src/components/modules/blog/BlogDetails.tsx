"use client";

import React from "react";
import Image from "next/image";
import { TBlog } from "@/types";

interface Props {
  blog: TBlog;
}

const BlogDetails: React.FC<Props> = ({ blog }) => {
  return (
    <article className="max-w-4xl mx-auto dark:bg-zinc-900 rounded-lg shadow p-6">
      {/* Blog Image */}
      <div className="relative w-full h-64 md:h-[400px] rounded overflow-hidden mb-6">
        <Image
          src={blog.imageUrl}
          alt={blog.name}
          fill
          className="object-cover rounded"
        />
      </div>

      {/* Blog Title and Date */}
      <div className="mb-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">{blog.name}</h1>
        <p className="text-sm text-muted-foreground">
          Published on{" "}
          {blog.createdAt && new Date(blog.createdAt).toLocaleDateString()}
        </p>
      </div>

      {/* Blog Description */}
      <div
        className="prose dark:prose-invert text-muted-foreground max-w-none prose-headings:scroll-m-20 prose-headings:text-2xl prose-p:leading-7 prose-img:rounded-lg prose-li:my-1 prose-ol:list-decimal prose-ul:list-disc"
        dangerouslySetInnerHTML={{ __html: blog.description }}
      />
    </article>
  );
};

export default BlogDetails;
