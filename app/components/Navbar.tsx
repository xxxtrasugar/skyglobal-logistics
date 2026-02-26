"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image"; 
import { usePathname } from "next/navigation";
import { Phone, Search, Menu, X } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const getLinkClass = (path: string, isMobile = false) => {
    const baseClass = "transition-colors duration-200";
    const activeClass = "text-[#007cb0] font-bold";
    const inactiveClass = "text-slate-600 hover:text-[#007cb0] font-medium";

    // Style khusus untuk tampilan mobile (lebih besar block-nya)
    if (isMobile) {
       return `${pathname === path ? activeClass : inactiveClass} block py-3 border-b border-gray-100`;
    }

    return `${baseClass} ${pathname === path ? activeClass : inactiveClass}`;
  };

  return (
    <>
      {/* Top Bar (Info Line) - Disembunyikan di HP */}
      <div className="hidden md:flex justify-end items-center gap-6 py-2 px-10 text-sm text-gray-600 border-b relative bg-white z-50">
        <div className="flex items-center">
            {isSearchOpen ? (
                <div className="flex items-center bg-gray-100 rounded-full px-3 py-1 animate-in fade-in slide-in-from-right-5 duration-300 relative z-50">
                    <input 
                        type="text" 
                        placeholder="Search..." 
                        className="bg-transparent border-none outline-none text-xs w-48 text-slate-700 placeholder:text-slate-400 focus:ring-0"
                        autoFocus
                    />
                    <button onClick={() => setIsSearchOpen(false)} className="ml-2 text-slate-400 hover:text-red-500 transition"><X size={14} /></button>
                </div>
            ) : (
                <button onClick={() => setIsSearchOpen(true)} className="flex items-center gap-2 hover:text-[#007cb0] transition"><Search size={16} /></button>
            )}
        </div>
        <div className="flex items-center gap-2">
          <Phone size={16} />
          <span>+62 813-8067-0645</span>
        </div>
        <Link href="/contact" className="bg-[#007cb0] text-white px-4 py-1.5 rounded text-sm font-medium hover:bg-blue-700 transition">Contact Us</Link>
      </div>

      {/* Main Navigation */}
      <nav className="sticky top-0 z-40 bg-white shadow-sm">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 py-4 flex justify-between items-center">
          
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-3 group">
             <div className="relative h-10 w-10 md:h-12 md:w-12">
                <Image
                    src="/images/logo.png" 
                    alt="Logo Icon"
                    fill
                    className="object-contain"
                    priority
                />
             </div>
             <span className="text-xl md:text-2xl font-bold text-slate-800">
                Skyglobal Logistik
             </span>
          </Link>

          {/* Desktop Menu (Hidden on Mobile) */}
          <div className="hidden md:flex gap-8">
            <Link href="/" className={getLinkClass("/")}>Home</Link>
            <Link href="/services" className={getLinkClass("/services")}>Services</Link>
            <Link href="/about" className={getLinkClass("/about")}>About Us</Link>
            <Link href="/contact" className={getLinkClass("/contact")}>Contact us</Link>
          </div>
          
          {/* Mobile Menu Button (Visible on Mobile Only) */}
          <button 
            className="md:hidden text-slate-700 hover:text-[#007cb0] focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* --- MOBILE MENU DROPDOWN --- */}
        {/* Bagian ini hanya muncul jika isMobileMenuOpen = true */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100 py-4 px-6 flex flex-col z-50 animate-in slide-in-from-top-5 duration-200">
            <Link href="/" className={getLinkClass("/", true)} onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
            <Link href="/services" className={getLinkClass("/services", true)} onClick={() => setIsMobileMenuOpen(false)}>Services</Link>
            <Link href="/about" className={getLinkClass("/about", true)} onClick={() => setIsMobileMenuOpen(false)}>About Us</Link>
            <Link href="/contact" className={getLinkClass("/contact", true)} onClick={() => setIsMobileMenuOpen(false)}>Contact Us</Link>
            
            {/* Tambahan Info Kontak di Menu Mobile */}
            <div className="mt-4 pt-4 border-t border-gray-100 flex flex-col gap-3 text-sm text-slate-500">
               <div className="flex items-center gap-2">
                  <Phone size={16} /> +62 813-8067-0645
               </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}