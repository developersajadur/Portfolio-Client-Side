/* eslint-disable @typescript-eslint/no-explicit-any */
'use server'

import { cookies } from "next/headers";


export const createProject = async (project: any) => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/projects/create-project`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
          Authorization: (await cookies()).get("next-auth.session-token")!.value,
        },
        body: JSON.stringify(project), // Ensure it's properly formatted as JSON
      });
  
      return res.json();
    } catch (error: any) {
      console.error("Error creating project:", error);
      return { success: false, message: error.message };
    }
  };
  