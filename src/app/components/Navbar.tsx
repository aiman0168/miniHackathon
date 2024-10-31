import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

export default function Navbar() {
    return (
        <nav className='bg-gradient-to-b from-gray-950 to-blue-950 bg-black text-white'>
            <div className='h-10 flex justify-around p-2 bg-black-800 border-b-2 border-gray-800 gap-16 mr-32 ml-32'>
                <p className='text-sm'><i className='fas fa-mobile-alt text-red-700 mr-4'></i>Download App via SMS</p>
                <div className='flex space-x-4'>
                    <Link href="" className='text-sm hover:underline'>Sign Up</Link>
                    <Link href="" className='text-sm hover:underline'>Sign In</Link>
                </div>
            </div>

            <div className='flex flex-row justify-evenly p-4'>
                <Image src="/logo.png" alt="Logo" width={250} height={80} className='mb-2' />
                <div className='flex space-x-12 m-4 mt-8'>
                    <Link href="" className='hover:underline'>Used Cars</Link>
                    <Link href="" className='hover:underline'>New Cars</Link>
                    <Link href="" className='hover:underline'>Bikes</Link>
                    <Link href="" className='hover:underline'>Auto Store</Link>
                    <Link href="" className='hover:underline'>Videos</Link>
                    <Link href="" className='hover:underline'>Forums</Link>
                    <Link href="" className='hover:underline'>Blog</Link>
                    <Link href="" className='hover:underline'>More</Link>
                    <button className='bg-red-700 text-white px-6 py-2 rounded hover:bg-red-800'>Post an Ad </button>
                </div>
                </div>
        </nav>
    );
}
