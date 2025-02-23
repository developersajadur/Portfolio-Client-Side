/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

export const createProject = async (project: any) => {
  try {
    const cookieStore = await cookies();
    const authToken = cookieStore.get("next-auth.session-token")?.value;

    if (!authToken) {
      throw new Error("Unauthorized: No session token found.");
    }

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/projects/create-project`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: authToken,
      },
      body: JSON.stringify(project),
    });

    const data = await res.json();
    revalidateTag("PROJECT"); // ✅ Revalidate cache after successful project creation
    return data;
  } catch (error: any) {
    console.error("Error creating project:", error);
    return { success: false, message: error.message };
  }
};

export const getAllProjects = async (page: string = "1", limit: string = "10") => {
  try {
    const cookieStore = await cookies();
    const authToken = cookieStore.get("next-auth.session-token")?.value;

    if (!authToken) {
      throw new Error("Unauthorized: No session token found.");
    }

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/projects?limit=${limit}&page=${page}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: authToken,
      },
      next: { tags: ["PROJECT"] }, // ✅ Keeps revalidation inside `next` property
    });

    return await res.json();
  } catch (error: any) {
    console.error("Error fetching projects:", error);
    return { success: false, message: error.message };
  }
};
