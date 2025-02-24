
import ManageBlogs from "@/components/modules/admin/manage-blogs";
import { Button } from "@/components/ui/button";
import { getAllBlogs } from "@/services/blog/blog.service";
import Link from "next/link";

const ManageBlogPage = async () => {
  let blogs = [];

  try {
    const {data} = await getAllBlogs();
    blogs = data?.result || [];
  } catch (error) {
    console.error("Error fetching blogs:", error);
  }

  return (
    <div className="p-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold mb-4">Manage Blogs</h1>
        <Link href="/dashboard/manage-blogs/create-blog">
        <Button className="ml-4 bg-white text-black hover:text-black hover:bg-white">
          Add New Blog
        </Button>
        </Link>
      </div>
      <div>
        <ManageBlogs blogs={blogs} />
      </div>
    </div>
  );
};

export default ManageBlogPage;
