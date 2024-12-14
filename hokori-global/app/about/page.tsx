'use client'

import { motion } from 'framer-motion'
import { Building2, Users, Globe, Award } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">About Hokori</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 mb-8">
              Hokori Global Supporting Services is an Indian private consulting company which is
              outsourcing various services for the American clients in the field of education, healthcare and IT.
              We are the only vendor to Noble Staffing of USA, a New Jersey company incorporated in USA.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Building2 className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Company Details</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>Industry: Outsourcing and Offshoring Consulting</li>
                  <li>Headquarters: Noida, Uttar Pradesh</li>
                  <li>Company size: 11-50 employees</li>
                  <li>Type: Privately Held</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <Globe className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Our Focus</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>Data assistance</li>
                  <li>Sales services</li>
                  <li>Recruitment services</li>
                  <li>Operational management</li>
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 my-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">11-50</div>
                <div className="text-gray-600">Employees</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">2020</div>
                <div className="text-gray-600">Founded</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">USA</div>
                <div className="text-gray-600">Primary Market</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">3+</div>
                <div className="text-gray-600">Industries Served</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

