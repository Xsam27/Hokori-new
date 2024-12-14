const clients = [
  { name: 'Exacura', country: 'USA' },
  { name: 'Unitech', country: 'USA' },
  { name: '10points', country: 'USA' },
]

export default function OurClientsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Our Clients
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {clients.map((client) => (
            <div key={client.name} className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
              <h3 className="text-2xl font-semibold mb-2">{client.name}</h3>
              <p className="text-gray-600">{client.country}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

