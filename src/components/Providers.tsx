"use client";

import React from "react";

// Add your context providers here as needed
export default function Providers({ children }: { children: React.ReactNode }) {
  // Example: return <ThemeProvider>{children}</ThemeProvider>
  return <>{children}</>;
} 