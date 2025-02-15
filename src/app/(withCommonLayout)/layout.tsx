import Navbar from '@/components/shared/Navbar/Navbar';
import React from 'react';

const CommonLayout = ({children}: {children: React.ReactNode}) => {
    return (
        <>
         <header className="">
          <Navbar />
        </header>
        <main className="container mx-auto max-w-5xl mt-10 pt-16 px-5 lg:px-0">
            {children}
        </main>
        </>
    );
};

export default CommonLayout;