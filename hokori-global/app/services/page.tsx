'use client'

import { motion } from 'framer-motion'
import { Headphones, Network, Building2, Store, HeadphonesIcon } from 'lucide-react'
import Link from 'next/link'

const services = [
  {
    category: "Customer Support",
    icon: Headphones,
    color: "text-cyan-500",
    description: "Comprehensive customer support solutions tailored to your business needs",
    subServices: [
      "General Support",
      "Call Center Support",
      "Live Chat Support",
      "Email Support",
      "Sales Support"
    ]
  },
  {
    category: "Digital Operations",
    icon: Network,
    color: "text-green-500",
    description: "Streamline your digital operations with our cutting-edge solutions",
    subServices: [
      "Back Office Support",
      "E-commerce & Marketplace(s)"
    ]
  }
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive business solutions designed to support your global operations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <service.icon className={`h-8 w-8 ${service.color} mr-3`} />
                  <h3 className="text-2xl font-semibold">{service.category}</h3>
                </div>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <div className="space-y-3">
                  {service.subServices.map((subService) => (
                    <div
                      key={subService}
                      className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <span className="text-gray-800">{subService}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-16"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-gray-600 mb-8">Contact us to learn more about how we can support your business</p>
          <Link
            href="/contact"
            className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg hover:bg-blue-700 transition-colors"
          >
            Contact Us
          </Link>
        </motion.div>
      </div>
    </div>
  )
}

