/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { useParams } from "next/navigation";
import { getSingleBlog, updateBlog } from "@/services/BlogServices";

const blogSchema = z.object({
  name: z.string().min(3, "Blog name must be at least 3 characters.").optional(),
  imageUrl: z.string().url("Invalid URL format.").optional(),
  description: z.string().min(10, "Description must be at least 10 characters.").optional(),
});

type BlogFormData = z.infer<typeof blogSchema>;

const UpdateBlogForm = () => {
  const params = useParams();
  const blogId = params?.blogId as string;
  
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<BlogFormData>({
    resolver: zodResolver(blogSchema),
    defaultValues: {
      name: "",
      description: "",
      imageUrl: "",
    },
  });

  // Fetch blog data and set default values
  useEffect(() => {
    const fetchBlog = async () => {
      if (!blogId) return;

      try {
        const blog = await getSingleBlog(blogId);
        const blogData = blog.data;

        if (blogData) {
          setValue("name", blogData.name || "");
          setValue("description", blogData.description || "");
          setValue("imageUrl", blogData.imageUrl || "");
        }
      } catch (error: any) {
        console.error("Error fetching blog:", error);
        toast.error("Failed to fetch blog details.");
      }
    };

    fetchBlog();
  }, [blogId, setValue]);

  const onSubmit = async (data: BlogFormData) => {
    if (!blogId) {
      toast.error("Invalid blog ID.");
      return;
    }

    try {
      setLoading(true);
      const res = await updateBlog(blogId, data);

      if (res.success) {
        toast.success("Blog updated successfully!");
      } else {
        toast.error(res.message || "Failed to update blog.");
      }
    } catch (error: unknown) {
      console.error("Update Error:", error);
      toast.error("Failed to update blog.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#0C0A09] text-muted-foreground">
      <div className="w-full">
        <h1 className="text-center text-2xl text-[#748195] mb-6">Update Blog</h1>

        <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Label htmlFor="name" className="text-[#748195]">Blog Name</Label>
            <Input
              id="name"
              className="bg-transparent border-[#748195] w-full p-3 rounded-lg"
              placeholder="Enter blog name"
              {...register("name")}
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
          </div>

          <div>
            <Label htmlFor="imageUrl" className="text-[#748195]">Image URL</Label>
            <Input
              id="imageUrl"
              className="bg-transparent border-[#748195] w-full p-3 rounded-lg"
              placeholder="Enter blog image URL"
              {...register("imageUrl")}
            />
            {errors.imageUrl && <p className="text-red-500 text-sm">{errors.imageUrl.message}</p>}
          </div>

          <div className="md:col-span-2">
            <Label htmlFor="description" className="text-[#748195]">Description</Label>
            <Textarea
              id="description"
              className="bg-transparent border-[#748195] w-full p-3 rounded-lg"
              placeholder="Enter blog description"
              {...register("description")}
            />
            {errors.description && <p className="text-red-500 text-sm">{errors.description.message}</p>}
          </div>

          <div className="md:col-span-2">
            <Button
              type="submit"
              disabled={!blogId || loading}
              className="bg-white w-full lg:w-fit text-black py-2 px-4 rounded-lg hover:bg-gray-300 transition"
            >
              {loading ? "Updating..." : "Update Blog"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateBlogForm;
