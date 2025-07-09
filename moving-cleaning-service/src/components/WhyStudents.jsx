export default function WhyStudents() {
  return (
    <section id="why" className="py-16 bg-green-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-green-700">
          Why Choose Student Teams?
        </h2>
        <p className="max-w-2xl mx-auto mb-8 text-lg text-green-800">
          Our service connects you with local students who are eager to work, earn fairly, and deliver exceptional service.
          It’s affordable for you and empowering for them — a win-win for the whole community.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-2 text-green-700">Affordable Rates</h3>
            <p className="text-green-900">
              Get top-quality service without the high cost. Our student teams work hard while keeping prices accessible.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-2 text-green-700">Reliable and Friendly</h3>
            <p className="text-green-900">
              Screened, local students you can trust. Courteous, careful, and committed to delivering excellent results.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-2 text-green-700">Support Education</h3>
            <p className="text-green-900">
              Every booking helps students earn money to support their studies and living costs, boosting our local community.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
