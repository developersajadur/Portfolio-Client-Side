"use client";

import React from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Eye, Edit, Trash } from "lucide-react";
import Image from "next/image";
import { TMeta, TProject } from "@/types";

const ManageProject = ({ projects, meta }: { projects: TProject[], meta: TMeta }) => {
  if (!projects.length) {
    return <p className="text-center text-gray-500">No projects found.</p>;
  }

  return (
    <div className="overflow-x-auto p-4">
      <Table>
        <TableHeader>
          <TableRow className="">
            <TableHead>Image</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Live URL</TableHead>
            <TableHead>Client Repo</TableHead>
            <TableHead>Server Repo</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {projects.map((project) => (
            <TableRow key={project._id} className="border-b">
              <TableCell>
                <Image
                  src={project.imageUrl || "/placeholder.png"}
                  alt={project.name}
                  width={50}
                  height={50}
                  className="rounded-md"
                />
              </TableCell>
              <TableCell className="font-medium">{project.name}</TableCell>
              <TableCell>
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                  Live Link
                </a>
              </TableCell>
              <TableCell>
                <a href={project.clientSideUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                  Client Repo
                </a>
              </TableCell>
              <TableCell>
                <a href={project.serverSideUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                  Server Repo
                </a>
              </TableCell>
              <TableCell className="flex gap-2">
                <Button variant="ghost" size="icon">
                  <Eye className="w-5 h-5 text-blue-500" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Edit className="w-5 h-5 text-green-500" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Trash className="w-5 h-5 text-red-500" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ManageProject;
