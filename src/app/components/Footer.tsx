import Link from 'next/link';
export default function Footer(){
  return (
    <footer className="bg-gray-800 text-white py-4">
        <div className="mt-4 text-center">
          <Link className='text-white-500 text-lg font-bold' href="https://www.linkedin.com/in/umm-e-aiman-26a05824b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">Made by UMM E AIMAN</Link>
        </div>
    </footer>
  );
};