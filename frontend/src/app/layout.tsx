import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AuthProvider from "@/components/AuthProvider";
import { useSession } from "next-auth/react";

const inter = Inter({ subsets: ["latin"] });

// Exporting metadata without the 'use client' directive
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  const { data: session } = useSession();

  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider session={session || null}>{children}</AuthProvider>
      </body>
    </html>
  );
}