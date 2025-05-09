'use client'
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Menubar() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {/* Desktop Right-Fixed Vertical Menu */}
      {!isMobile && (
        <div className="fixed top-[80px] sm:top-[120px] md:top-[200px] right-0 flex flex-col space-y-2 z-10 text-[20px]">
          <Link
            href="/about"
            className="flex items-center bg-white text-black py-2 px-4 hover:bg-[#d8ff4a] transition-colors"
          >
            <span className="mr-2">{`</>`}</span>ABOUT
          </Link>
          <Link
            href="/projects"
            className="flex items-center bg-white text-black py-2 px-4 hover:bg-[#d8ff4a] transition-colors"
          >
            <span className="mr-2">{`</>`}</span>PROJECT
          </Link>
          <Link
            href="/invert"
            className="flex items-center bg-white text-black py-2 px-4 hover:bg-[#d8ff4a] transition-colors"
          >
            <span className="mr-2">{`</>`}</span>INVERT
          </Link>
          <Link
            href="/"
            className="flex items-center bg-white text-black py-2 px-4 hover:bg-[#d8ff4a] transition-colors"
          >
            <span className="mr-2">{`</>`}</span>SHUT DOWN
          </Link>
        </div>
      )}

      {/* Mobile Bottom Nav */}
      {isMobile && (
        <div className="fixed bottom-0 left-0 right-0 bg-white text-black flex justify-around py-3 z-20 shadow-inner border-t border-gray-300 text-[16px] sm:text-[18px]">
          <Link href="/about" className="hover:text-[#D61A69] transition">
            {`</>`} ABOUT
          </Link>
          <Link href="/projects" className="hover:text-[#D61A69] transition">
            {`</>`} PROJECT
          </Link>
          <Link href="/invert" className="hover:text-[#D61A69] transition">
            {`</>`} INVERT
          </Link>
          <Link href="/" className="hover:text-[#D61A69] transition">
            {`</>`} SHUT DOWN
          </Link>
        </div>
      )}
    </>
  );
}