import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <main>
      {/* HERO SECTION - ABOUT US (Image 6) */}
      <section className="relative h-[300px] bg-[#0f172a] flex items-center">
         <div className="absolute inset-0 opacity-30">
            <Image 
               src="/images/hero-about.jpg" 
               alt="About Background" 
               fill 
               className="object-cover object-[center_30%] brightness-[0.4]" 
               priority
            />
         </div>
         <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10 text-white">
            <h1 className="text-4xl md:text-5xl font-bold">About us</h1>
         </div>
      </section>

      {/* COMPANY DESCRIPTION (Image 6 Content) */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-slate-800 mb-6">
              Optimize Your <span className="text-slate-900">Logistics</span>
            </h2>
            <p className="text-slate-700 font-bold mb-4">
               PT Sky Global Logistik Indonesia <span className="font-normal">is an integrated logistics and freight forwarding company providing reliable international and domestic cargo transportation services.</span>
            </p>
            <p className="text-slate-600 mb-6 leading-relaxed">
               We specialize in handling import and export shipments with efficient coordination, regulatory compliance, and professional operational support. Our team understands that every shipment carries business value, therefore we ensure accuracy, timeliness, and safety in every delivery process.
            </p>
            <p className="text-slate-600 mb-6 leading-relaxed">
               With strong operational experience and customer-oriented service, we aim to become a trusted logistics partner for companies requiring dependable supply chain solutions. We can assure to meet customer's and laws requirement.
            </p>
            {/* <button className="bg-slate-300 text-slate-800 px-6 py-2 rounded hover:bg-slate-400 transition font-medium">
              Learn more
            </button> */}
          </div>
          <div className="relative h-[350px] w-full rounded-lg overflow-hidden shadow-lg">
             <Image 
                src="/images/ship-optimize.jpg" 
                alt="Ship" 
                fill 
                className="object-cover"
             />
          </div>
        </div>
      </section>

      {/* DISCOVER SOLUTIONS SECTION (Sesuai Image 5) */}
      <section className="py-20 bg-slate-50">
         <div className="container mx-auto px-6 md:px-12 lg:px-24 grid md:grid-cols-2 gap-12 items-center">
            {/* Left Image */}
            <div className="relative h-[400px] w-full rounded-lg overflow-hidden shadow-xl">
               <Image 
                  src="/images/service-freight.jpg" 
                  alt="Aerial Ship View" 
                  fill 
                  className="object-cover"
               />
            </div>
            
            {/* Right Content */}
            <div>
               <h2 className="text-3xl font-bold text-slate-800 mb-6">
                  Discover New <span className="text-slate-900">Logistics Solutions</span>
               </h2>
               <p className="text-slate-600 mb-6 leading-relaxed">
                  Our logistics service is designed to help you save time and money. 
                  We offer a wide range of services, including transportation, warehousing, and inventory management.
               </p>
               <p className="text-slate-600 mb-8 leading-relaxed">
                  Customer satisfaction is our top priority – we deliver what you need, when you need it.
               </p>
               
               <Link href="/contact" className="inline-block bg-[#9fb3c8] text-slate-900 px-8 py-3 rounded hover:bg-slate-400 transition font-medium">
                  Learn more
               </Link>
            </div>
         </div>
      </section>

      {/* MEET OUR EXPERTS (Image 8)
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
           <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-800 mb-2">Meet our logistics experts</h2>
              <p className="text-slate-500">Experienced professionals driving our logistics success</p>
           </div>
           
           <div className="grid md:grid-cols-2 gap-12">
              <div className="flex gap-6 items-start">
                 <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0 relative border-4 border-white shadow-sm">
                    <Image src="/images/user-alex.jpg" alt="Tony" fill className="object-cover"/>
                 </div>
                 <div>
                    <h3 className="text-xl font-bold text-slate-900">Tony Fred</h3>
                    <p className="text-sm text-slate-500 mb-3 uppercase tracking-wide">Chief Executive Officer</p>
                    <p className="text-sm text-slate-600 leading-relaxed">
                       Our team is led by Tony, who has years of experience in logistics and supply chain management. He is passionate about delivering the best service possible to our customers.
                    </p>
                 </div>
              </div>

              <div className="flex gap-6 items-start">
                 <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0 relative border-4 border-white shadow-sm">
                    <Image src="/images/user-alex.jpg" alt="Mich" fill className="object-cover"/>
                 </div>
                 <div>
                    <h3 className="text-xl font-bold text-slate-900">Mich Stark</h3>
                    <p className="text-sm text-slate-500 mb-3 uppercase tracking-wide">Chief Logistics Officer</p>
                    <p className="text-sm text-slate-600 leading-relaxed">
                       Mich is our operations expert. He has helped us build a world-class logistics network that is second to none.
                    </p>
                 </div>
              </div>

              <div className="flex gap-6 items-start">
                 <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0 relative border-4 border-white shadow-sm">
                    <Image src="/images/user-alex.jpg" alt="Aline" fill className="object-cover"/>
                 </div>
                 <div>
                    <h3 className="text-xl font-bold text-slate-900">Aline Turner</h3>
                    <p className="text-sm text-slate-500 mb-3 uppercase tracking-wide">Chief Technology Officer</p>
                    <p className="text-sm text-slate-600 leading-relaxed">
                       Our team of logistics experts is dedicated to providing you with the best service possible. We work tirelessly to ensure that your products are delivered on time and in perfect condition.
                    </p>
                 </div>
              </div>

              <div className="flex gap-6 items-start">
                 <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0 relative border-4 border-white shadow-sm">
                    <Image src="/images/user-alex.jpg" alt="Iris" fill className="object-cover"/>
                 </div>
                 <div>
                    <h3 className="text-xl font-bold text-slate-900">Iris Joe</h3>
                    <p className="text-sm text-slate-500 mb-3 uppercase tracking-wide">Chief Operations Officer</p>
                    <p className="text-sm text-slate-600 leading-relaxed">
                       Iris is our financial expert. She helps us manage our finances and make strategic decisions that drive our business forward.
                    </p>
                 </div>
              </div>
           </div>
        </div>
      </section>
      */}
    </main>
  );
}