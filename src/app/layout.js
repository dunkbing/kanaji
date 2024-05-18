import { Inter } from "next/font/google";

import Header from "./zero-neko/components/core/Header";
import BottomNav from "./zero-neko/components/core/BottomNav";
import Footer from "./zero-neko/components/core/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <BottomNav />
        <Header />
        <main className="relative m-0 bg-gray-50 pt-8 pb-16">
        {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
