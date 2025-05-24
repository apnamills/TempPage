"use client";

import { useState, useEffect } from 'react';
import { ThemeProvider } from "next-themes";
import Footer from './Footer';

interface ProvidersProps {
  children: React.ReactNode;
  header?: React.ReactNode;
}

export default function Providers({ children, header }: ProvidersProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // Or a loading spinner
  }

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem={false}
      disableTransitionOnChange
    >
      {/* Outer div for layout if needed, though often body styling is enough */}
      <div className="flex flex-col min-h-screen">
        {header}
        {/* Main content area - children will be rendered here */}
        <main className="flex-grow">
          <div className="h-16 w-full"></div> {/* Spacer div */}
          {children}
        </main>
        {/* Optional: Add a Footer component here later */}
        <Footer />
      </div>
    </ThemeProvider>
  );
} 