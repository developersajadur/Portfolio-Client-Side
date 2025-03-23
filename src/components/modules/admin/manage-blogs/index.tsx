"use client";

import React from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Eye, Edit, Trash } from "lucide-react";
import Image from "next/image";
import { TBlog } from "@/types";
import Swal from 'sweetalert2';
import Link from "next/link";
import { deleteBlog } from "@/services/BlogServices";

const ManageBlogs = ({ blogs }: { blogs: TBlog[] }) => {


  const handleDeleteBlog = async (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await deleteBlog(id);
        if (res.success) {
          Swal.fire({
            title: "Deleted!",
            text: "Your Blog has been deleted.",
            icon: "success",
          });
        } else {
          Swal.fire({
            title: "Error!",
            text: res.message || "Failed to delete the blog.",
            icon: "error",
          });
        }
      }
    });
  };

  if (!blogs.length) {
    return <p className="text-center text-gray-500">No blog found.</p>;
  }

  return (
    <div className="overflow-x-auto p-4">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Image</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {blogs.map((blog) => (
            <TableRow key={blog._id} className="border-b">
              <TableCell>
                <Image
                  src={blog.imageUrl || "/placeholder.png"}
                  alt={blog.name}
                  width={50}
                  height={50}
                  className="rounded-md"
                />
              </TableCell>
              <TableCell className="font-medium">{blog.name}</TableCell>
              <TableCell className="flex gap-2">
               <Button variant="ghost" size="icon">
               <Eye className="w-5 h-5 text-blue-500" />
                </Button>    
               <Link href={`/dashboard/manage-blogs/update-blog/${blog._id}`}>
               <Button variant="ghost" size="icon">
                  <Edit className="w-5 h-5 text-green-500" />
                </Button>
                </Link>
                <Button onClick={() => handleDeleteBlog(blog._id)} variant="ghost" size="icon">
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

export default ManageBlogs;
