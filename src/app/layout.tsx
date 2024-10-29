import type { Metadata } from "next";
import "./globals.css";
import { Barlow } from '@next/font/google';
import Navbar from "./Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const barlow = Barlow({ subsets: ['latin'],weight: ['400', '700'] }); 


export const metadata: Metadata = {
  title: "IT Technology",
  description: "Technology by maryam jamil",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={barlow.className}>
      <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
