import { Users, Award, Settings, Clock, FileText, Heart } from 'lucide-react'

const features = [
  {
    title: 'MANAGEMENT',
    icon: Users,
    color: 'text-green-500',
    description: 'Our management team has profound understanding of global operations and extensive experience in supporting business growth.'
  },
  {
    title: 'EXPERIENCE',
    icon: Award,
    color: 'text-red-500',
    description: 'We possess years of experience in providing premium customer support for various industries including education, healthcare, and IT.'
  },
  {
    title: 'TAILOR MADE SOLUTIONS',
    icon: Settings,
    color: 'text-purple-500',
    description: 'We assess your customer service volumes, protocols and complexity to set-up a team with appropriate experience and skills.'
  },
  {
    title: '24/7/365 SUPPORT',
    icon: Clock,
    color: 'text-yellow-500',
    description: 'We provide 24/7/365 scalable customer support with shared and dedicated teams of native English-speaking support representatives.'
  },
  {
    title: 'FREE ONBOARDING',
    icon: FileText,
    color: 'text-orange-500',
    description: 'Recruitment, training, system configuration and process management are all free of charge until the system is up and running.'
  },
  {
    title: 'WE TRULY CARE',
    icon: Heart,
    color: 'text-blue-500',
    description: 'We will do our very best to prove that you made the right decision by showing that we care about your customers as much as you do.'
  }
]

export default function FeaturesSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Why Hokori?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-start space-x-4">
                <div className="bg-gray-100 p-3 rounded-full">
                  <feature.icon className={`w-6 h-6 ${feature.color}`} />
                </div>
                <div>
                  <h3 className={`font-bold mb-2 ${feature.color}`}>
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

