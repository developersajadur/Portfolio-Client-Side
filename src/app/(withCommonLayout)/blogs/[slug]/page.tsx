import BlogDetails from "@/components/modules/blog/BlogDetails";
import { getSingleBlogBySlug } from "@/services/BlogServices";
import React from "react";

const BlogDetailsPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;

  let blog = null;
  try {
    const data = await getSingleBlogBySlug(slug);
    // console.log(data);
    blog = data?.data;
  } catch (error) {
    console.error("Error fetching blog details:", error);
  }

  if (!blog) {
    return <p className="text-center mt-10 text-red-500">Blog not found.</p>;
  }

  return (
    <div className="container mx-auto px-4 py-10">
      <BlogDetails blog={blog} />
    </div>
  );
};

export default BlogDetailsPage;
