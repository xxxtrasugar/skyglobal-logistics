import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      
      {/* HERO SECTION */}
      <section className="relative h-[600px] flex items-center justify-center">
        {/* Background Image Local */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/hero-bg-new.jpg"
            alt="Logistics Containers"
            fill
            className="object-cover object-[center_30%] brightness-[0.4]"
            priority
          />
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-medium mb-6">
            Your logistics journey starts here
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed max-w-3xl mx-auto">
            We provide comprehensive logistics services tailored to meet your business needs. 
            Our solutions include warehousing, transportation, and supply chain management.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/services" 
              className="bg-white text-slate-900 px-8 py-3 rounded font-medium hover:bg-gray-100 transition flex items-center justify-center"
            >
              Find out how we can help you
            </Link>
            <Link 
              href="/contact" 
              className="border border-white text-white px-8 py-3 rounded font-medium hover:bg-white/10 transition flex items-center justify-center"
            >
              Contact us to learn more
            </Link>
          </div>
        </div>
      </section>

      {/* OPTIMIZE SECTION */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-slate-800 mb-6">
              Optimize Your <span className="font-extrabold">Logistics</span>
            </h2>
            <p className="text-slate-600 mb-4 leading-relaxed">
              Our logistics service is designed to help you save time and money. 
              We offer a wide range of services, including transportation, warehousing, and inventory management.
            </p>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Customer satisfaction is our top priority – we deliver what you need, when you need it.
            </p>
            <Link 
              href="/about"
              className="bg-slate-300 text-slate-800 px-6 py-2 rounded hover:bg-slate-400 transition"
            >
              Learn more
            </Link>
          </div>
          <div className="relative h-[300px] w-full rounded-lg overflow-hidden">
             {/* Pastikan ada file ship-optimize.jpg */}
             <Image 
                src="/images/ship-optimize.jpg" 
                alt="Ship" 
                fill 
                className="object-cover"
             />
          </div>
        </div>
      </section>

      {/* METRICS SECTION (Odoo Style) */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            
            {/* Kiri: Teks Judul & Deskripsi */}
            <div>
              <h2 className="text-3xl md:text-4xl font-normal text-slate-900 mb-6 leading-tight">
                Key Metrics of <br />
                <span className="font-bold">Our Logistics Solutions</span>
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed max-w-md">
                Analyzing the numbers behind our success: an in-depth look at the key metrics driving our logistics performance
              </p>
            </div>

            {/* Kanan: Angka Statistik */}
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <span className="text-5xl md:text-6xl font-light text-slate-900 block mb-2">15k</span>
                <span className="text-slate-500 text-sm md:text-base">Efficient options</span>
              </div>
              <div>
                <span className="text-5xl md:text-6xl font-light text-slate-900 block mb-2">50%</span>
                <span className="text-slate-500 text-sm md:text-base">More efficiency</span>
              </div>
              <div>
                <span className="text-5xl md:text-6xl font-light text-slate-900 block mb-2">10+</span>
                <span className="text-slate-500 text-sm md:text-base">Successful projects</span>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* CALL TO ACTION BOTTOM */}
      <section className="bg-[#007cb0] py-16 text-center text-white">
         <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-4">Ready to optimize your supply chain?</h2>
            <p className="mb-8 text-blue-100 max-w-2xl mx-auto">Contact our team today to get a quote or discuss how we can help your business grow.</p>
            <Link href="/contact" className="bg-white text-[#007cb0] px-8 py-3 rounded font-bold hover:bg-gray-100 transition inline-block">
               Contact Us Now
            </Link>
         </div>
      </section>
    </main>
  );
}