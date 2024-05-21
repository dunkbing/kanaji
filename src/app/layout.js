import { DM_Sans } from "next/font/google";

import Header from "./zero-neko/components/core/Header";
import BottomNav from "./zero-neko/components/core/BottomNav";
import Footer from "./zero-neko/components/core/Footer";
import "./globals.css";

const dmSans = DM_Sans({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={dmSans.className}>
        <BottomNav />
        <Header />
        <main className="relative m-0 bg-bg pb-16 pt-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
