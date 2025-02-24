import ManageProject from '@/components/modules/admin/manage-projects';
import { Button } from '@/components/ui/button';
import { getAllBlogs } from '@/services/blog/blog.service';
import Link from 'next/link';
import React from 'react';

const ManageBlogsPage = async() => {

      let projects = [];
    
      try {
        const {data} = await getAllBlogs();
        projects = data?.result || [];
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    return (
        <div className="p-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold mb-4">Manage Projects</h1>
        <Link href="/dashboard/manage-projects/create-project">
        <Button className="ml-4 bg-white text-black hover:text-black hover:bg-white">
          Add New Project
        </Button>
        </Link>
      </div>
      <div>
        <ManageProject projects={projects} />
      </div>
    </div>
    );
};

export default ManageBlogsPage; 