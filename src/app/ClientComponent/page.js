'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import LoadingScreen from '../LoadingScreen';
import Menubar from '../Menubar/page';

export default function ClientLayout({ children }) {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Trigger loading on every route change
    setIsLoading(true);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3500); // ⬅️ Changed to 3.5s

    return () => clearTimeout(timer);
  }, [pathname]); // Run every time the path changes

  return isLoading ? (
    <LoadingScreen />
  ) : (
    <>
      {children}
      <Menubar />
    </>
  );
}