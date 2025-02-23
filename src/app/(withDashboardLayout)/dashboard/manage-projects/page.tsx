import ManageProject from "@/components/modules/admin/manage-project";
import { Button } from "@/components/ui/button";
import { getAllProjects } from "@/services/project/project.service";
import Link from "next/link";

const ManageProjectPage = async () => {
  let projects = [];
  let meta = {}

  try {
    const {data} = await getAllProjects();
    projects = data?.result || [];
    meta = data?.meta
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
        <ManageProject projects={projects} meta={meta} />
      </div>
    </div>
  );
};

export default ManageProjectPage;
