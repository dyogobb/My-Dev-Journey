import type { Metadata } from "next";

import { UserAuthProvider } from "@/context/userAuth";

import "./globals.css";
import { Inter } from 'next/font/google'

export const metadata: Metadata = {
  title: "My Dev Journey",
};

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className}`}
      >
        <UserAuthProvider>
          {children}
        </UserAuthProvider>
      </body>
    </html>
  );
}
