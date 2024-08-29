import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "./(components)/sidebar/Sidebar";
import Navbar from "./(components)/navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Car Rental Web",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex min-h-screen`}>
        <aside className="fixed top-0 left-0 h-screen w-full md:w-1/5 lg:w-1/6 bg-white border-r border-gray-200 z-10 hidden md:block">
          {/* Sidebar content */}
          <Sidebar />
        </aside>
        <main className="flex-grow md:ml-[20%] lg:ml-[16.67%] bg-gray-200">
          <Navbar />
          {/* Main content */}
          <div className="px-6 overflow-y-auto">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
