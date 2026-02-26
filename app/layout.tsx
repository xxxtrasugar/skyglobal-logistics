import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// Import komponen Navbar baru (sesuaikan path jika berbeda)
import Navbar from "./components/Navbar"; 
import { Mail, Phone, Linkedin, Home as HomeIcon } from "lucide-react";
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

        {/* Footer */}
        <footer className="bg-[#0f172a] text-white py-16">
          <div className="container mx-auto px-6 md:px-12 lg:px-32 max-w-7xl">
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20"> {/* Tambah gap antar kolom di layar besar */}
              
              {/* Kolom 1: Useful Links */}
              <div>
                <h3 className="text-lg font-bold mb-6 border-b border-gray-700 pb-2 inline-block">Useful Links</h3>
                <ul className="space-y-3 text-slate-400">
                  <li><Link href="/" className="hover:text-white transition flex items-center gap-2"><span className="text-[#007cb0] text-xs">➤</span> Home</Link></li>
                  <li><Link href="/about" className="hover:text-white transition flex items-center gap-2"><span className="text-[#007cb0] text-xs">➤</span> About us</Link></li>
                  <li><Link href="/services" className="hover:text-white transition flex items-center gap-2"><span className="text-[#007cb0] text-xs">➤</span> Services</Link></li>
                  <li><Link href="/contact" className="hover:text-white transition flex items-center gap-2"><span className="text-[#007cb0] text-xs">➤</span> Contact us</Link></li>
                </ul>
              </div>

              {/* Kolom 2: About Us (Lebih Ringkas) */}
              <div>
                <h3 className="text-lg font-bold mb-6 border-b border-gray-700 pb-2 inline-block">About Us</h3>
                <p className="text-slate-400 leading-relaxed text-sm text-justify">
                  We specialize in handling import and export shipments with efficient coordination, regulatory compliance, and professional operational support. Trusted by companies worldwide.
                </p>
              </div>

              {/* Kolom 3: Connect with Us */}
              <div>
                <h3 className="text-lg font-bold mb-6 border-b border-gray-700 pb-2 inline-block">Connect with Us</h3>
                <ul className="space-y-4 text-slate-400 mb-8">
                  <li className="flex items-start gap-3">
                    <Mail size={20} className="text-[#007cb0] mt-0.5 flex-shrink-0"/> 
                    <span className="text-sm">info@skyglobal-log.id</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Phone size={20} className="text-[#007cb0] mt-0.5 flex-shrink-0"/> 
                    <span className="text-sm">+62 813-8067-0645</span>
                  </li>
                </ul>
                <div className="flex gap-4">
                   <a 
                      href="https://wa.me/6281380670645" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label="Chat on WhatsApp"
                      // Perhatikan hover:bg-[#25D366] (Warna Hijau WhatsApp)
                      className="w-10 h-10 bg-slate-800 text-white border border-slate-700 rounded-full flex items-center justify-center hover:bg-[#25D366] hover:border-[#25D366] transition duration-300"
                    >
                      {/* Ikon SVG WhatsApp */}
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.463 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                      </svg>
                    </a>
                   <a href="#" className="w-10 h-10 bg-slate-800 text-white border border-slate-700 rounded-full flex items-center justify-center hover:bg-[#007cb0] hover:border-[#007cb0] transition duration-300">
                      <Linkedin size={18}/>
                   </a>
                   <Link href="/" className="w-10 h-10 bg-slate-800 text-white border border-slate-700 rounded-full flex items-center justify-center hover:bg-[#007cb0] hover:border-[#007cb0] transition duration-300">
                      <HomeIcon size={18}/>
                   </Link>
                </div>
              </div>

            </div>

            {/* Copyright Section (Opsional tapi Bagus) */}
            <div className="border-t border-gray-800 mt-16 pt-8 text-center text-slate-500 text-sm">
               &copy; {new Date().getFullYear()} PT Sky Global Logistik Indonesia. All rights reserved.
            </div>

          </div>
        </footer>
      </body>
    </html>
  );
}