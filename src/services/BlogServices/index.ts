/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

export const createBlog = async (blog: any) => {
  try {
    const cookieStore = await cookies();
    const authToken = cookieStore.get("token")?.value;

    if (!authToken) {
      throw new Error("Unauthorized: No session token found.");
    }

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/blogs/create-blog`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: authToken,
      },
      body: JSON.stringify(blog),
    });

    const data = await res.json();
    revalidateTag("BLOG"); 
    return data;
  } catch (error: any) {
    console.error("Error creating Blog:", error);
    return { success: false, message: error.message };
  }
};

export const getAllBlogs = async (page?: string, limit?: string) => {
  try {

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/blogs?limit=${limit}&page=${page}`, {
      method: "GET",
      next: { tags: ["BLOG"] }, // ✅ Keeps revalidation inside `next` property
    });

    return await res.json();
  } catch (error: any) {
    console.error("Error fetching Blogs:", error);
    return { success: false, message: error.message };
  }
};


export const getSingleBlog = async (blogId: string) => {
  try {


    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/blogs/${blogId}`, {
      method: 'GET',
      credentials: "include",
      next: {
        tags: ["BLOG"],
      },
    });

    const data = await res.json();
    return data;
  } catch (error: any) {
    console.error("Error fetching Blog:", error);
    return { success: false, message: error.message };
  }
};
export const getSingleBlogBySlug = async (slug: string) => {
  try {


    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/blogs/slug/${slug}`, {
      method: 'GET',
      credentials: "include",
      next: {
        tags: ["BLOG"],
      },
    });

    const data = await res.json();
    return data;
  } catch (error: any) {
    console.error("Error fetching Blog:", error);
    return { success: false, message: error.message };
  }
};


export const deleteBlog = async (id: string) => {
    console.log(id);
  try {
    const cookieStore = await cookies();
    const authToken = cookieStore.get("token")?.value;

    if (!authToken) {
      throw new Error("Unauthorized: No session token found.");
    }
    if (!id) {
      throw new Error("Blog id is required");
    }

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/blogs/delete-blog/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: authToken,
      },
    });

    revalidateTag("BLOG");

    if (!res.ok) {
      throw new Error(`HTTP Error: ${res.status} - ${res.statusText}`);
    }

    const text = await res.text(); // Read response as text first
    return text ? JSON.parse(text) : { success: true, message: "Blog deleted successfully" };
  } catch (error: any) {
    console.error("Error deleting Blog:", error);
    return { success: false, message: error.message };
  }
};


export const updateBlog = async (id: string, blog: any) => {
  try {
    const cookieStore = await cookies();
    const authToken = cookieStore.get("token")?.value;

    if (!authToken) {
      throw new Error("Unauthorized: No session token found.");
    }

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/blogs/update-blog/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: authToken, 
      },
      body: JSON.stringify(blog),
    });

    if (!res.ok) {
      throw new Error(`Error: ${res.status} ${res.statusText}`);
    }

    const data = await res.json();
    revalidateTag("BLOG");
    return data;
  } catch (error: any) {
    console.error("Error updating Blog:", error);
    return { success: false, message: error.message };
  }
};
