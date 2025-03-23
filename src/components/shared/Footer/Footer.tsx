import React from 'react';

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <div>
             <div className="h-0.5 border-b border-[#292524] my-5"></div>
             <div className="flex justify-center items-center h-12 text-white">
                 <p className="text-sm">© {year} Md. Sajadur Rahman. All Rights Reserved.</p>
     </div>
        </div>
    );
};

export default Footer;