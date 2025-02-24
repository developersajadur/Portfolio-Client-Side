/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { createBlog } from "@/services/blog/blog.service";

const blogSchema = z.object({
  name: z.string().min(3, "Blog name must be at least 3 characters."),
  imageUrl: z.string().url("Invalid URL format."),
  description: z.string().min(10, "Description must be at least 10 characters."),
});

type BlogFormData = z.infer<typeof blogSchema>;

const CreateBlogForm = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<BlogFormData>({
    resolver: zodResolver(blogSchema),
  });

  const onSubmit = async (blogData: BlogFormData) => {
    console.log(blogData);
    setLoading(true);
    const loadingToast = toast.loading("Creating Blog...");
    try {
      const res = await createBlog(blogData);
      console.log(res);
      if (res.success) {
        toast.success(res?.message, { id: loadingToast, duration: 2000 });
        reset(); // Reset the form inputs
      } else {
        toast.error(res?.message || "Failed to create Blog", { id: loadingToast });
      }
    } catch (error: any) {
      toast.error(error.message, { id: loadingToast,  duration: 2000 });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#0C0A09] text-muted-foreground">
      <div className="w-full ">
        <h1 className="text-center text-2xl text-[#748195] mb-6">Create Blog</h1>

        <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Label htmlFor="name" className="text-[#748195]">Blog Name</Label>
            <Input id="name" className="bg-transparent border-[#748195] w-full p-3 rounded-lg" placeholder="Enter Blog name" {...register("name")} />
            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
          </div>

          <div>
            <Label htmlFor="imageUrl" className="text-[#748195]">Image URL</Label>
            <Input id="imageUrl" className="bg-transparent border-[#748195] w-full p-3 rounded-lg" placeholder="Enter Blog image URL" {...register("imageUrl")} />
            {errors.imageUrl && <p className="text-red-500 text-sm">{errors.imageUrl.message}</p>}
          </div>

          <div className="md:col-span-2">
            <Label htmlFor="description" className="text-[#748195]">Description</Label>
            <Textarea id="description" className="bg-transparent border-[#748195] w-full p-3 rounded-lg" placeholder="Enter Blog description" {...register("description")} />
            {errors.description && <p className="text-red-500 text-sm">{errors.description.message}</p>}
          </div>

          <div className="md:col-span-2">
            <Button type="submit" disabled={loading} className="bg-white w-full lg:w-fit text-black py-2 px-4 rounded-lg hover:bg-white hover:text-black">
              {loading ? "Creating..." : "Create Blog"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateBlogForm;