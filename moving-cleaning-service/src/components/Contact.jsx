export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-green-50 text-center">
      <h2 className="text-3xl font-bold mb-4 text-green-800">Contact Us</h2>
      <p className="mb-2 text-lg text-green-900">
        Call us for bookings and queries:
      </p>
      <p className="text-xl font-semibold text-green-700 mb-4">
        0417 407 201
      </p>
      <p className="mb-2 text-lg text-green-900">
        Or email us at:
      </p>
      <a
        href="mailto:professional.movers@gmail.com"
        className="text-green-700 underline hover:text-green-900 text-xl font-medium"
      >
        professional.movers@gmail.com
      </a>
    </section>
  )
}
