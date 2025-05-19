"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { TBlog } from "@/types";

const textLimit = (text: string, limit: number) =>
  text.length > limit ? text.substring(0, limit) + "..." : text;

const BlogCard: React.FC<TBlog> = ({
  name,
  description,
  imageUrl,
  slug,
  createdAt,
}) => {
  return (
    <Link href={slug ? `/blogs/${slug}` : "#"} passHref>
      <Card className="cursor-pointer hover:shadow-lg transition-all">
        <Image
          src={imageUrl}
          alt={name}
          width={400}
          height={400}
          className="w-full h-[220px] object-cover rounded-t-md"
        />
        <CardHeader className="px-4 py-2 flex flex-col h-[130px] justify-between">
          <div>
            <CardTitle className="text-md">{textLimit(name, 30)}</CardTitle>
            <CardDescription>{textLimit(description, 70)}</CardDescription>
          </div>
        </CardHeader>
        <CardContent className="px-4 py-2 space-y-1">
          {createdAt && (
            <p className="text-xs text-muted-foreground">
              Published on {new Date(createdAt).toLocaleDateString()}
            </p>
          )}
          <p className="text-xs text-muted-foreground">Read more →</p>
        </CardContent>
      </Card>
    </Link>
  );
};

export default BlogCard;
