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
import { getSingleProject, updateProject } from "@/services/project/project.service";
import { useParams } from "next/navigation";

const projectSchema = z.object({
  name: z.string().min(3, "Project name must be at least 3 characters."),
  description: z.string().min(10, "Description must be at least 10 characters."),
  technologies: z.string().min(2, "At least one technology is required."),
  liveUrl: z.string().url("Invalid URL format.").optional(),
  clientSideUrl: z.string().url("Invalid URL format.").optional(),
  serverSideUrl: z.string().url("Invalid URL format.").optional(),
  imageUrl: z.string().url("Invalid URL format.").optional(),
});

type ProjectFormData = z.infer<typeof projectSchema>;

const UpdateProjectForm = () => {
  const { projectId } = useParams();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<ProjectFormData>({
    resolver: zodResolver(projectSchema),
    defaultValues: {
      name: "",
      description: "",
      technologies: "",
      liveUrl: "",
      clientSideUrl: "",
      serverSideUrl: "",
      imageUrl: "",
    },
  });

  // Fetch project data and set default values
  useEffect(() => {
    const fetchProject = async () => {
      if (!projectId) return;

      try {
        const project = await getSingleProject(projectId as string);
        const projectData = project.data;

        if (projectData) {
          setValue("name", projectData.name || "");
          setValue("description", projectData.description || "");
          setValue("technologies", Array.isArray(projectData.technologies) ? projectData.technologies.join(", ") : projectData.technologies || "");
          setValue("liveUrl", projectData.liveUrl || "");
          setValue("clientSideUrl", projectData.clientSideUrl || "");
          setValue("serverSideUrl", projectData.serverSideUrl || "");
          setValue("imageUrl", projectData.imageUrl || "");
        }
      } catch (error:any) {
        toast.error("Failed to fetch project details.");
        Error(error.message);
      }
    };

    fetchProject();
  }, [projectId, setValue]);

  const onSubmit = async (data: ProjectFormData) => {
    try {
      setLoading(true);
     const res = await updateProject(projectId as string, data);
     console.log(res);
     if(res.success){
        toast.success("Project updated successfully!");
     }
    } catch (error:any) {
      toast.error("Failed to update project.");
      Error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#0C0A09] text-muted-foreground">
      <div className="w-full ">
        <h1 className="text-center text-2xl text-[#748195] mb-6">Update Project</h1>

        <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Label htmlFor="name" className="text-[#748195]">Project Name</Label>
            <Input id="name" className="bg-transparent border-[#748195] w-full p-3 rounded-lg" placeholder="Enter project name" {...register("name")} />
            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
          </div>

          <div>
            <Label htmlFor="technologies" className="text-[#748195]">Technologies (comma-separated)</Label>
            <Input id="technologies" className="bg-transparent border-[#748195] w-full p-3 rounded-lg" placeholder="e.g., React, Next.js, Tailwind" {...register("technologies")} />
            {errors.technologies && <p className="text-red-500 text-sm">{errors.technologies.message}</p>}
          </div>

          <div>
            <Label htmlFor="liveUrl" className="text-[#748195]">Live URL</Label>
            <Input id="liveUrl" className="bg-transparent border-[#748195] w-full p-3 rounded-lg" placeholder="Enter live project URL" {...register("liveUrl")} />
            {errors.liveUrl && <p className="text-red-500 text-sm">{errors.liveUrl.message}</p>}
          </div>

          <div>
            <Label htmlFor="clientSideUrl" className="text-[#748195]">Client-Side URL</Label>
            <Input id="clientSideUrl" className="bg-transparent border-[#748195] w-full p-3 rounded-lg" placeholder="Enter client repo URL" {...register("clientSideUrl")} />
            {errors.clientSideUrl && <p className="text-red-500 text-sm">{errors.clientSideUrl.message}</p>}
          </div>

          <div>
            <Label htmlFor="serverSideUrl" className="text-[#748195]">Server-Side URL</Label>
            <Input id="serverSideUrl" className="bg-transparent border-[#748195] w-full p-3 rounded-lg" placeholder="Enter server repo URL" {...register("serverSideUrl")} />
            {errors.serverSideUrl && <p className="text-red-500 text-sm">{errors.serverSideUrl.message}</p>}
          </div>

          <div>
            <Label htmlFor="imageUrl" className="text-[#748195]">Image URL</Label>
            <Input id="imageUrl" className="bg-transparent border-[#748195] w-full p-3 rounded-lg" placeholder="Enter project image URL" {...register("imageUrl")} />
            {errors.imageUrl && <p className="text-red-500 text-sm">{errors.imageUrl.message}</p>}
          </div>

          <div className="md:col-span-2">
            <Label htmlFor="description" className="text-[#748195]">Description</Label>
            <Textarea id="description" className="bg-transparent border-[#748195] w-full p-3 rounded-lg" placeholder="Enter project description" {...register("description")} />
            {errors.description && <p className="text-red-500 text-sm">{errors.description.message}</p>}
          </div>

          <div className="md:col-span-2">
            <Button type="submit" disabled={loading} className="bg-white w-full lg:w-fit text-black py-2 px-4 rounded-lg hover:bg-gray-300 transition">
              {loading ? "Updating..." : "Update Project"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProjectForm;
