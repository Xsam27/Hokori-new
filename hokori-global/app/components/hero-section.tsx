import { DiagonalShape } from './diagonal-shape'
import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden">
      <DiagonalShape 
        color="bg-yellow-400" 
        className="w-full h-full right-[-20%] top-[20%]" 
      />
      <DiagonalShape 
        color="bg-blue-500" 
        className="w-[80%] h-[80%] right-[-40%] top-[30%]" 
      />
      <DiagonalShape 
        color="bg-green-500" 
        className="w-[60%] h-[60%] right-[-30%] top-[40%]" 
      />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-gray-900">
            24/7 phone, chat, and email support tailored for your needs
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-600">
            Scale up effectively with outstanding and cost-effective customer support outsourcing.
            Set up your remote team in few days.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-3 rounded-full bg-green-500 text-white font-semibold text-lg hover:bg-green-600 transition-colors"
          >
            Get Started &gt;
          </Link>
        </div>
      </div>
    </section>
  )
}

