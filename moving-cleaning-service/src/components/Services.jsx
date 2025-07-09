export default function Services() {
  return (  
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="bg-green-100 p-6 rounded shadow hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-2">Furniture Moving</h3>
            <p>Safe and careful moving of furniture, by students you can trust.</p>
          </div>
          <div className="bg-green-100 p-6 rounded shadow hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-2">Pickup & Drop</h3>
            <p>On-time pickup and drop of items, locally or between cities.</p>
          </div>
          <div className="bg-green-100 p-6 rounded shadow hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-2">Cleaning Services</h3>
            <p>Kitchen, house, and move-out cleaning, eco-friendly and thorough.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
