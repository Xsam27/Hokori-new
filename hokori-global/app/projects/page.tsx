'use client'

import { motion } from 'framer-motion'
import { Building2, GraduationCap, Heart, Car } from 'lucide-react'

export default function ProjectsPage() {
  const projects = [
    {
      icon: GraduationCap,
      title: "Education Sector Solutions",
      description: "Providing comprehensive support services to educational institutions across the United States, helping them streamline their operations and enhance student services.",
      highlights: [
        "Student Support Services",
        "Administrative Assistance",
        "Data Management"
      ]
    },
    {
      icon: Heart,
      title: "Healthcare Industry Support",
      description: "Delivering specialized support services to healthcare providers, ensuring efficient operations and improved patient care coordination.",
      highlights: [
        "Patient Care Coordination",
        "Medical Data Management",
        "Healthcare Administration Support"
      ]
    },
    {
      icon: Building2,
      title: "IT Services Management",
      description: "Supporting IT companies with comprehensive operational and management services to enhance their efficiency and service delivery.",
      highlights: [
        "Technical Support",
        "Operations Management",
        "Service Delivery Optimization"
      ]
    },
    {
      icon: Car,
      title: "Roadside Assistance",
      description: "Providing 24/7 emergency roadside assistance and support for drivers across the country, ensuring quick response times and reliable service for vehicle-related issues.",
      highlights: [
        "24/7 Emergency Support",
        "Nationwide Coverage",
        "Quick Response Times",
        "Towing Services",
        "Vehicle Lockout Assistance"
      ]
    }
  ]

  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Projects</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our successful implementations across various industries
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <project.icon className="h-8 w-8 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                </div>
                <p className="text-gray-600 mb-6">{project.description}</p>
                <div className="space-y-3">
                  {project.highlights.map((highlight) => (
                    <div
                      key={highlight}
                      className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <span className="text-gray-800">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

