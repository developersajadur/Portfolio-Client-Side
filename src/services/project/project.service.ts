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

export const getAllProjects = async (page?: string, limit?: string) => {
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


export const getSingleProject = async (projectId: string) => {
  try {
    const cookieStore = await cookies();
    const authToken = cookieStore.get("next-auth.session-token")?.value;

    if (!authToken) {
      throw new Error("Unauthorized: No session token found.");
    }

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/projects/${projectId}`, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        Authorization: authToken,
      },
      credentials: "include",
      next: {
        tags: ["PROJECT"],
      },
    });

    const data = await res.json();
    return data;
  } catch (error: any) {
    console.error("Error fetching project:", error);
    return { success: false, message: error.message };
  }
};


export const deleteProject = async (id: string) => {
  try {
    const cookieStore = await cookies();
    const authToken = cookieStore.get("next-auth.session-token")?.value;

    if (!authToken) {
      throw new Error("Unauthorized: No session token found.");
    }
    if (!id) {
      throw new Error("Project id is required");
    }

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/projects/delete-project/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: authToken,
      },
    });

    revalidateTag("PROJECT");

    if (!res.ok) {
      throw new Error(`HTTP Error: ${res.status} - ${res.statusText}`);
    }

    const text = await res.text(); // Read response as text first
    return text ? JSON.parse(text) : { success: true, message: "Project deleted successfully" };
  } catch (error: any) {
    console.error("Error deleting project:", error);
    return { success: false, message: error.message };
  }
};


export const updateProject = async (id: string, project: any) => {
  try {
    const cookieStore = await cookies();
    const authToken = cookieStore.get("next-auth.session-token")?.value;

    if (!authToken) {
      throw new Error("Unauthorized: No session token found.");
    }

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/projects/update-project/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: authToken, 
      },
      body: JSON.stringify(project),
    });

    if (!res.ok) {
      throw new Error(`Error: ${res.status} ${res.statusText}`);
    }

    const data = await res.json();
    revalidateTag("PROJECT");
    return data;
  } catch (error: any) {
    console.error("Error updating project:", error);
    return { success: false, message: error.message };
  }
};
