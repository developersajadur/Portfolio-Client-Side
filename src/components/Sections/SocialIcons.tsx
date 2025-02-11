'use client';

import { Dock } from '@/components/magicui/dock';
import { FaGithub, FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import Link from 'next/link';

export default function SocialIcons() {
  return (
    <div className="flex justify-start items-center w-full">
      <Dock className='border-none p-0 mt-0'>
        <Link href="https://github.com" target="_blank" title="GitHub">
          <FaGithub className="w-8 h-8 text-white" />
        </Link>
        <Link href="https://facebook.com" target="_blank" title="Facebook">
          <FaFacebook className="w-8 h-8 text-blue-600" />
        </Link>
        <Link href="https://instagram.com" target="_blank" title="Instagram">
          <FaInstagram className="w-8 h-8 text-pink-500" />
        </Link>
        <Link href="https://linkedin.com" target="_blank" title="LinkedIn">
          <FaLinkedin className="w-8 h-8 text-blue-700" />
        </Link>
        <Link href="https://twitter.com" target="_blank" title="Twitter">
          <FaTwitter className="w-8 h-8 text-blue-400" />
        </Link>
      </Dock>
    </div>
  );
}
