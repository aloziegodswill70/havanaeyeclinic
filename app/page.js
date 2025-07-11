'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const whatsappMessage = `Hello, my name is ${form.name}. Email: ${form.email}. Message: ${form.message}`
    const encodedMessage = encodeURIComponent(whatsappMessage)
    const whatsappUrl = `https://wa.me/2347033733993?text=${encodedMessage}`

    const confirm = window.confirm("Do you want to continue to WhatsApp with this message?")
    if (confirm) {
      window.open(whatsappUrl, '_blank')
      setForm({ name: '', email: '', message: '' })
    }
  }

  const clinicImages = [
    '/images/havana7.jpeg',
    '/images/havana3.jpeg',
    '/images/havana4.jpeg',
  ]

  const frameImages = [
    '/images/havana10.jpg',
    '/images/havana6.jpeg',
    '/images/havana9.jpg',
  ]

  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-blue text-white py-16 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Welcome to Havana Eye Clinic</h1>
          <p className="text-lg mb-6">
            Trusted Eye Care Services in Asaba. Your vision, our mission.
          </p>
          <a
            href="https://wa.me/2347033733993"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red hover:bg-red-700 text-white px-6 py-3 rounded-full font-semibold transition"
          >
            Book an Appointment
          </a>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4 text-blue">About Us</h2>
          <p className="text-gray-600">
            At Havana Eye Clinic Asaba, we are dedicated to providing top-quality eye care services. 
            With experienced optometrists and modern equipment, we ensure your eye health is in the best hands.
          </p>
          <Link href="/about" className="text-red font-semibold mt-4 inline-block">
            Learn More &rarr;
          </Link>
        </div>
      </section>

      {/* Services Preview */}
      <section className="bg-gray-100 py-12 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-6 text-blue">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold text-blue mb-2">Eye Exams</h3>
              <p className="text-sm text-gray-600">
                Comprehensive eye testing for clear vision and early detection of conditions.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold text-blue mb-2">Prescription Glasses</h3>
              <p className="text-sm text-gray-600">
                Stylish and effective corrective eyewear tailored to your needs.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold text-blue mb-2">Eye Health Consultation</h3>
              <p className="text-sm text-gray-600">
                Expert advice and diagnosis for various eye conditions and treatments.
              </p>
            </div>
          </div>
          <Link href="/services" className="text-red font-semibold mt-6 inline-block">
            View All Services &rarr;
          </Link>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-blue text-center mb-6">Clinic & Outreach</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mb-10">
          {clinicImages.map((src, idx) => (
            <Image
              key={idx}
              src={src}
              alt={`Clinic Image ${idx + 1}`}
              width={400}
              height={300}
              className="rounded shadow object-cover w-full h-60"
            />
          ))}
        </div>

        <h2 className="text-2xl font-bold text-blue text-center mb-6">Eyeglass Frames</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {frameImages.map((src, idx) => (
            <Image
              key={idx}
              src={src}
              alt={`Frame Image ${idx + 1}`}
              width={400}
              height={300}
              className="rounded shadow object-cover w-full h-60"
            />
          ))}
        </div>
          <div className="text-center mt-10">
          <Link
            href="/gallery"
            className="inline-block bg-red text-white px-6 py-2 rounded-full font-semibold hover:bg-red-700 transition"
          >
            View Full Gallery
          </Link>
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="py-12 px-6 text-center">
        <h2 className="text-xl font-bold mb-4 text-blue">Need Quick Help?</h2>
        <p className="mb-4 text-gray-600">Send us a message directly on WhatsApp!</p>
        <a
          href="https://wa.me/2347033733993"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-semibold transition"
        >
          Chat on WhatsApp
        </a>
      </section>

      {/* Contact Form Section */}
      <section className="py-12 px-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-blue mb-4 text-center">Contact & Appointment</h2>
        <p className="text-gray-600 text-center mb-8">
          Fill the form below and we’ll chat with you on WhatsApp immediately.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded px-4 py-2"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded px-4 py-2"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            value={form.message}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded px-4 py-2"
          />
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded transition"
          >
            Send via WhatsApp
          </button>
        </form>
      </section>
    </div>
  )
}
