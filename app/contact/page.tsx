import Image from "next/image";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Contact() {
  return (
    <main>
      {/* HERO SECTION - CONTACT US */}
      <section className="relative h-[250px] bg-[#0f172a] flex items-center">
         <div className="absolute inset-0 opacity-30">
            <Image 
               src="/images/service-domestic.jpg" 
               alt="Contact Background" 
               fill 
               className="object-cover object-[center_50%]"
            />
         </div>
         <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10 text-white">
            <h1 className="text-4xl md:text-5xl font-bold">Contact us</h1>
         </div>
      </section>

      {/* FORM & INFO SECTION (Image 9) */}
      <section className="py-16 bg-white">
         <div className="container mx-auto px-6 md:px-12 lg:px-24 grid md:grid-cols-3 gap-12">
            
            {/* LEFT COLUMN: FORM */}
            <div className="md:col-span-2">
               <h2 className="text-xl text-slate-600 mb-2">Contact us about anything related to our company or services.</h2>
               <p className="text-slate-600 mb-8">We'll do our best to get back to you as soon as possible.</p>
               
               <form 
                  action="https://formsubmit.co/customer.service@skyglobal-log.id" 
                  method="POST" 
                  className="space-y-6"
               >
                  {/* Pengaturan opsional FormSubmit agar rapi */}
                  <input type="hidden" name="_subject" value="Pertanyaan Baru dari Website Skyglobal!" />
                  <input type="hidden" name="_captcha" value="false" />
                  {/* Baris ini akan mengarahkan user kembali ke halaman contact setelah berhasil */}
                  <input type="hidden" name="_next" value="https://skyglobal-logistics.vercel.app/contact" />

                  <div className="grid md:grid-cols-2 gap-6">
                     <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Name *</label>
                        {/* Wajib tambahkan atribut name="" pada setiap input */}
                        <input type="text" name="Nama" className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500" required />
                     </div>
                     <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
                        <input type="tel" name="Nomor_Telepon" className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500" />
                     </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                     <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Email *</label>
                        <input type="email" name="Email" className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500" required />
                     </div>
                     <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Company</label>
                        <input type="text" name="Perusahaan" className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500" />
                     </div>
                  </div>

                  <div>
                     <label className="block text-sm font-medium text-slate-700 mb-1">Subject *</label>
                     <input type="text" name="Subjek" className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500" required />
                  </div>

                  <div>
                     <label className="block text-sm font-medium text-slate-700 mb-1">Question *</label>
                     <textarea name="Pertanyaan" rows={6} className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500" required></textarea>
                  </div>

                  <div className="flex justify-end">
                     <button type="submit" className="bg-[#007cb0] text-white px-8 py-2 rounded font-medium hover:bg-blue-700 transition">
                        Submit
                     </button>
                  </div>
               </form>
            </div>

            {/* RIGHT COLUMN: INFO */}
            <div className="md:col-span-1 md:pl-8 md:border-l border-gray-100">
               <h3 className="text-xl font-bold text-slate-900 mb-6">PT Skyglobal Logistik Indonesia</h3>
               
               <div className="space-y-6 text-slate-600 text-sm">
                  <div className="flex gap-3">
                     <MapPin className="text-slate-400 flex-shrink-0 mt-1" size={18} />
                     <p>
                        Jl. Gatot Subroto Km. 7,8 No.88, Blok 5 RT.03 RW.05, Jatake, Jatiuwung Tangerang<br/>
                        Banten 15136
                     </p>
                  </div>
                  
                  <div className="flex gap-3 items-center">
                     <Phone className="text-slate-400 flex-shrink-0" size={18} />
                     <p>
                        5445479 / 5443095
                     </p>
                  </div>
                  
                  <div className="flex gap-3 items-center">
                     <Mail className="text-slate-400 flex-shrink-0" size={18} />
                     <p>customer.service@skyglobal-log.id</p>
                  </div>
               </div>
            </div>
         </div>
      </section>
    </main>
  );
}