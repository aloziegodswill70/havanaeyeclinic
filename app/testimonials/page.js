

export default function TestimonialsPage() {
  const testimonials = [
    {
      name: 'Chinedu M.',
      message:
        'I had blurry vision for months until I visited Havana Eye Clinic. The doctor was thorough and professional. I now see clearly with my new glasses!',
    },
    {
      name: 'Mrs. Afolabi',
      message:
        'I brought my son for an eye check-up and I was impressed with how friendly and patient the staff were. Highly recommended!',
    },
    {
      name: 'Blessing E.',
      message:
        'The consultation was top-notch. I was diagnosed and got my prescription all in one visit. Clean environment too!',
    },
    {
      name: 'Uche N.',
      message:
        'I love the variety of frames they offer. The staff even helped me choose the perfect one. My new look is fire!',
    },
    {
      name: 'Ngozi K.',
      message:
        'They helped my dad manage his glaucoma. We’re very grateful for the attention and follow-up care.',
    },
    {
      name: 'Kelvin A.',
      message:
        'Excellent service. Quick diagnosis and I received my contact lenses the next day.',
    },
  ]

  return (
    <div className="bg-white text-gray-800">
      

      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-blue text-center mb-10">
          What Our Clients Say
        </h1>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-md transition"
            >
              <div className="text-gray-700 mb-4 italic">"{t.message}"</div>
              <div className="text-sm font-semibold text-blue text-right">– {t.name}</div>
            </div>
          ))}
        </div>
      </section>

      
    </div>
  )
}
