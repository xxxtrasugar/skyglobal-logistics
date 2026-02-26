import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// Import komponen Navbar baru (sesuaikan path jika berbeda)
import Navbar from "./components/Navbar"; 
import { Mail, Phone, Facebook, Linkedin, Home as HomeIcon } from "lucide-react";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PT Sky Global Logistik Indonesia",
  description: "Comprehensive logistics services tailored to meet your business needs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        
        {/* Panggil Navbar Disini */}
        <Navbar />

        {/* Konten Halaman */}
        {children}

        {/* Footer (Tetap di sini atau bisa dipindah ke komponen terpisah juga nanti) */}
        <footer className="bg-[#0f172a] text-white py-16">
          <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-lg font-bold mb-6">Useful Links</h3>
              <ul className="space-y-3 text-slate-400">
                <li><Link href="/" className="hover:text-white transition">Home</Link></li>
                <li><Link href="/about" className="hover:text-white transition">About us</Link></li>
                <li><Link href="/services" className="hover:text-white transition">Services</Link></li>
                <li><Link href="/contact" className="hover:text-white transition">Contact us</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-6">About us</h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                We are a team of passionate people whose goal is to improve everyone's life through disruptive products. We build great products to solve your business problems.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-6">Connect with us</h3>
              <ul className="space-y-3 text-slate-400 mb-6">
                <li className="flex items-center gap-2"><Mail size={16}/> info@skyglobal-log.id</li>
                <li className="flex items-center gap-2"><Phone size={16}/> +62 813-8067-0645</li>
              </ul>
              <div className="flex gap-4">
                 <div className="w-8 h-8 bg-white text-slate-900 rounded-full flex items-center justify-center hover:bg-gray-200 cursor-pointer transition"><Facebook size={16}/></div>
                 <div className="w-8 h-8 bg-white text-slate-900 rounded-full flex items-center justify-center hover:bg-gray-200 cursor-pointer transition"><Linkedin size={16}/></div>
                 <div className="w-8 h-8 bg-white text-slate-900 rounded-full flex items-center justify-center hover:bg-gray-200 cursor-pointer transition"><HomeIcon size={16}/></div>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}