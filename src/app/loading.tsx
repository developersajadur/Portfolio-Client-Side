"use client"

import dynamic from 'next/dynamic';
const Loader = dynamic(() => import('@/components/Loaders/Loader'), {
  ssr: false,
});
import React from 'react';

const loading = () => {
    return (
        <div>
            <Loader/>
        </div>
    );
};

export default loading;