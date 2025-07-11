'use client'

import { useState } from 'react'


export default function FAQPage() {
  const faqs = [
    {
      question: 'Do I need an appointment before visiting?',
      answer: 'No. Walk-ins are welcome during working hours, but appointments are preferred for faster service.',
    },
    {
      question: 'How much does an eye test cost?',
      answer: 'A standard eye test costs ₦5,000. Prices may vary depending on specific tests required.',
    },
    {
      question: 'Do you accept health insurance?',
      answer: 'Yes, we work with select HMOs. Please call to confirm if yours is accepted.',
    },
    {
      question: 'How long does it take to get my glasses?',
      answer: 'Usually within 3–5 working days after your prescription is confirmed.',
    },
    {
      question: 'Can I buy contact lenses at the clinic?',
      answer: 'Yes, we sell soft and hard contact lenses, and we also offer fittings and training.',
    },
    {
      question: 'Do you offer children’s eye care?',
      answer: 'Absolutely! We offer vision screening and management for kids as young as 4 years old.',
    },
  ]

  const [openIndex, setOpenIndex] = useState(null)

  const toggleFAQ = (index) => {
    setOpenIndex(index === openIndex ? null : index)
  }

  return (
    <div className="bg-white text-gray-800">
      

      <section className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold text-blue text-center mb-8">Frequently Asked Questions</h1>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg shadow-sm">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left px-4 py-3 focus:outline-none flex justify-between items-center"
              >
                <span className="font-semibold text-gray-700">{faq.question}</span>
                <span className="text-blue text-xl">{openIndex === index ? '-' : '+'}</span>
              </button>
              {openIndex === index && (
                <div className="px-4 pb-4 text-gray-600">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </section>

    </div>
  )
}
