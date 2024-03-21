import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Best Courier Services Near Mumbai India | Home Pickup, Ecommerce Shipping Solutions",
  description: "Shypbuddy is the best ecommerce shipping solution in India. We provide fast, reliable, and affordable shipping services to businesses. Also, we available home pick up, deliver & save, prepaid & cash on delivery, no shipping limit",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
        <html lang="en">
          <head>
            <link
              rel="stylesheet"
              type="text/css"
              href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
            />

          </head>
          <body className={`${manrope.className}`}>
            <Navbar />
            <div className="flex">
              <Sidebar />
              <main className="w-full h-full min-h-[calc(100vh-64px)] bg-gray-100 text-gray-600 p-4 overflow-y-auto">
                {children}
              </main>
            </div>
          </body>
        </html>
  );
}
