import Image from "next/image";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export default function Services() {
   const partnerLogos = [
    { name: "Partner 1", src: "/images/partners/logo_artugo.png" },
    { name: "Partner 2", src: "/images/partners/logo_artugo.png" },
    { name: "Partner 3", src: "/images/partners/logo_artugo.png" },
  ];

  return (
    <main>
      {/* HERO SECTION - SERVICES (Sesuai Header Image 3) */}
      <section className="relative h-[300px] bg-[#0f172a] flex items-center">
         {/* Background Image with Overlay */}
         <div className="absolute inset-0 opacity-40">
            <Image 
               src="/images/service-freight.jpg" 
               alt="Services Background" 
               fill 
               className="object-cover"
            />
         </div>
         <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10 text-white">
            <h1 className="text-4xl md:text-5xl font-bold">Services</h1>
         </div>
      </section>

      {/* SERVICE CARDS SECTION (Sesuai Image 3) */}
      <section className="py-20 bg-white">
         <div className="container mx-auto px-6 md:px-12 lg:px-24">
            
            <div className="grid md:grid-cols-3 gap-8">
               {/* Card 1: International Freight */}
               <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition duration-300">
                  <div className="h-56 relative">
                     <Image 
                        src="/images/service-freight.jpg" 
                        alt="International Freight" 
                        fill 
                        className="object-cover"
                     />
                  </div>
                  <div className="p-8">
                     <h3 className="text-2xl font-bold mb-4 text-slate-900">International Freight</h3>
                     <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                        We manage international cargo shipments with efficient routing and competitive rates.
                     </p>
                     <ul className="space-y-3">
                        <li className="flex items-start gap-2 text-sm text-slate-700">
                           <CheckCircle2 size={16} className="text-[#007cb0] mt-0.5" /> Air Freight
                        </li>
                        <li className="flex items-start gap-2 text-sm text-slate-700">
                           <CheckCircle2 size={16} className="text-[#007cb0] mt-0.5" /> Ocean Freight (FCL & LCL)
                        </li>
                        <li className="flex items-start gap-2 text-sm text-slate-700">
                           <CheckCircle2 size={16} className="text-[#007cb0] mt-0.5" /> Cargo Consolidation
                        </li>
                        <li className="flex items-start gap-2 text-sm text-slate-700">
                           <CheckCircle2 size={16} className="text-[#007cb0] mt-0.5" /> Oversized Cargo Handling
                        </li>
                        <li className="flex items-start gap-2 text-sm text-slate-700">
                           <CheckCircle2 size={16} className="text-[#007cb0] mt-0.5" /> Project Cargo Shipment
                        </li>
                     </ul>
                  </div>
               </div>

               {/* Card 2: Custom Brokerage */}
               <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition duration-300">
                  <div className="h-56 relative">
                     <Image 
                        src="/images/service-customs.jpg" 
                        alt="Custom Brokerage" 
                        fill 
                        className="object-cover"
                     />
                  </div>
                  <div className="p-8">
                     <h3 className="text-2xl font-bold mb-4 text-slate-900">Custom Brokerage</h3>
                     <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                        Professional handling of customs procedures to ensure smooth cargo clearance.
                     </p>
                     <ul className="space-y-3">
                        <li className="flex items-start gap-2 text-sm text-slate-700">
                           <CheckCircle2 size={16} className="text-[#007cb0] mt-0.5" /> Import Clearance
                        </li>
                        <li className="flex items-start gap-2 text-sm text-slate-700">
                           <CheckCircle2 size={16} className="text-[#007cb0] mt-0.5" /> Export Clearance
                        </li>
                        <li className="flex items-start gap-2 text-sm text-slate-700">
                           <CheckCircle2 size={16} className="text-[#007cb0] mt-0.5" /> HS Code Consultation
                        </li>
                        <li className="flex items-start gap-2 text-sm text-slate-700">
                           <CheckCircle2 size={16} className="text-[#007cb0] mt-0.5" /> Duty & Tax Calculation
                        </li>
                        <li className="flex items-start gap-2 text-sm text-slate-700">
                           <CheckCircle2 size={16} className="text-[#007cb0] mt-0.5" /> Licensing Assistance
                        </li>
                     </ul>
                  </div>
               </div>

               {/* Card 3: Domestic Logistics */}
               <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition duration-300">
                  <div className="h-56 relative">
                     <Image 
                        src="/images/service-domestic.jpg" 
                        alt="Domestic Logistics" 
                        fill 
                        className="object-cover"
                     />
                  </div>
                  <div className="p-8">
                     <h3 className="text-2xl font-bold mb-4 text-slate-900">Domestic Logistics</h3>
                     <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                        Complete domestic cargo distribution services across Indonesia including Import Clearance.
                     </p>
                     <ul className="space-y-3">
                        <li className="flex items-start gap-2 text-sm text-slate-700">
                           <CheckCircle2 size={16} className="text-[#007cb0] mt-0.5" /> Trucking & Inland Transport
                        </li>
                        <li className="flex items-start gap-2 text-sm text-slate-700">
                           <CheckCircle2 size={16} className="text-[#007cb0] mt-0.5" /> Inter-Island Delivery
                        </li>
                        <li className="flex items-start gap-2 text-sm text-slate-700">
                           <CheckCircle2 size={16} className="text-[#007cb0] mt-0.5" /> Door to Door Service
                        </li>
                        <li className="flex items-start gap-2 text-sm text-slate-700">
                           <CheckCircle2 size={16} className="text-[#007cb0] mt-0.5" /> Warehouse Handling & Distribution
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* TESTIMONIALS
      <section className="relative py-24 bg-slate-50">
        <div className="absolute inset-0 z-0">
             <Image 
                src="/images/testimonial-bg.jpg" 
                alt="Port background" 
                fill 
                className="object-cover"
             />
        </div>
        <div className="container mx-auto px-6 relative z-10 flex justify-center">
           <div className="bg-white p-10 max-w-2xl shadow-xl text-center rounded-sm">
              <div className="text-[#007cb0] text-4xl mb-4 font-serif">"</div>
              <p className="text-lg text-slate-700 mb-8 italic">
                 LogisticsPro has transformed our shipping process. Their reliability and speed have made a significant impact on our business.
              </p>
              <div className="flex flex-col items-center">
                 <div className="w-12 h-12 bg-gray-300 rounded-full mb-3 overflow-hidden relative">
                    <Image src="/images/user-alex.jpg" alt="User" fill className="object-cover"/>
                 </div>
                 <h4 className="font-bold text-slate-900">Alex SMITH</h4>
                 <span className="text-xs text-slate-500 uppercase tracking-wide">CEO of LogisticsPro</span>
              </div>
           </div>
        </div>
      </section>
      */}

      {/* PARTNERS 
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
           <h2 className="text-3xl font-bold text-slate-800 mb-12">Partners and Testimonials</h2>
           
           <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
              
              {partnerLogos.map((partner, index) => (
                // Dibungkus div agar tinggi konsisten
                <div key={index} className="relative h-12 w-32 flex items-center justify-center">
                   <Image
                      src={partner.src}
                      alt={`${partner.name} logo`}
                      // Menggunakan 'fill' + 'object-contain' agar logo menyesuaikan kotaknya tanpa terpotong/gepeng
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100px, 130px"
                   />
                </div>
              ))}

           </div>
        </div>
      </section>
      */}
    </main>
  );
}