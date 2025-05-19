import Projects from '@/components/sections/Projects';
import { getAllProjects } from '@/services/PortfolioServices';
import React from 'react';

const ProjectPage = async () => {
      let projects = [];
          
            try {
              const {data} = await getAllProjects(undefined, "6");
              projects = data?.result || [];
            } catch (error) {
              console.error("Error fetching projects:", error);
            }
    return (
        <div>
             <Projects projects={projects}/>
        </div>
    );
};

export default ProjectPage;