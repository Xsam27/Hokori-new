import { Car, GraduationCap, Heart, Building2 } from 'lucide-react'

const projects = [
  {
    title: "Education Sector Solutions",
    icon: GraduationCap,
    description: "Providing comprehensive support services to educational institutions across the United States."
  },
  {
    title: "Healthcare Industry Support",
    icon: Heart,
    description: "Delivering specialized support services to healthcare providers, ensuring efficient operations."
  },
  {
    title: "IT Services Management",
    icon: Building2,
    description: "Supporting IT companies with comprehensive operational and management services."
  },
  {
    title: "Roadside Assistance",
    icon: Car,
    description: "Providing 24/7 emergency roadside assistance and support for drivers across the country."
  }
]

export default function OurProjectsSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Our Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.title} className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                <project.icon className="w-8 h-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold">{project.title}</h3>
              </div>
              <p className="text-gray-600">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

