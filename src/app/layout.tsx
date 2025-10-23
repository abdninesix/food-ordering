import Notification from "@/components/Notification";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SessionProvider } from "next-auth/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Food Ordering",
  description: "Your food at your doorstep",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <SessionProvider >
        <body className={inter.className}>
          <div className="overflow-x-hidden">
            <Notification />
            <Navbar />
            {children}
            <Footer />
          </div>
        </body>
      </SessionProvider>
    </html>
  );
}
