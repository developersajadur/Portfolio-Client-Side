import Blogs from '@/components/sections/Blog';
import { getAllBlogs } from '@/services/BlogServices';
import React from 'react';

const BlogsPage =  async() => {
      let blogs = [];
              
                try {
                  const {data} = await getAllBlogs(undefined, "6");
                  blogs = data?.result || [];
                } catch (error) {
                  console.error("Error fetching projects:", error);
                }
    return (
        <div>
            <Blogs blogs={blogs}/>
        </div>
    );
};

export default BlogsPage;