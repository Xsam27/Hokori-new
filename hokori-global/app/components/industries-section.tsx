import { Cloud, Rocket, Headphones, MessageSquare, ShoppingCart, Building } from 'lucide-react'

const industries = [
  { name: 'SaaS', icon: Cloud, color: 'bg-green-500' },
  { name: 'Start-Up', icon: Rocket, color: 'bg-red-500' },
  { name: 'Back Office & IT', icon: Headphones, color: 'bg-purple-500' },
  { name: 'Outbound Services', icon: MessageSquare, color: 'bg-yellow-500' },
  { name: 'E-commerce', icon: ShoppingCart, color: 'bg-orange-500' },
  { name: 'Hospitality', icon: Building, color: 'bg-blue-500' }
]

export default function IndustriesSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute left-0 top-0 w-1/3 h-full bg-purple-500 transform -skew-x-12" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Any solution, any industry, anywhere
          </h2>
          <p className="text-xl text-gray-600">
            Organizations of all kinds use Hokori
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry) => (
            <div
              key={industry.name}
              className="bg-white rounded-lg shadow-lg p-6 flex items-center space-x-4 hover:shadow-xl transition-shadow"
            >
              <div className={`p-3 rounded-full ${industry.color}`}>
                <industry.icon className="w-6 h-6 text-white" />
              </div>
              <span className="text-lg font-semibold">{industry.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

