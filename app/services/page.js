

export default function ServicesPage() {
  return (
    <div className="bg-white text-gray-800">
      

      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-blue mb-4 text-center">Our Services</h1>
        <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
          At Havana Eye Clinic, we offer a wide range of professional eye care services using the latest technologies and a client-centered approach. Here’s what we provide:
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-100 p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold text-blue mb-2">Premium Eye Care Consultation</h3>
            <p className="text-gray-700">One-on-one personalized sessions with experienced optometrists to address your vision concerns.</p>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold text-blue mb-2">Diagnosis of Eye and Vision Problems</h3>
            <p className="text-gray-700">Comprehensive assessments to detect refractive errors, eye diseases, and other visual conditions early.</p>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold text-blue mb-2">Treatment & Management</h3>
            <p className="text-gray-700">We provide professional treatment plans and long-term management for a variety of eye and vision problems.</p>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold text-blue mb-2">Vision Trainings and Therapy</h3>
            <p className="text-gray-700">Custom vision therapy and exercises to strengthen and correct visual impairments and tracking issues.</p>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold text-blue mb-2">Prescription Glasses & Contact Lenses</h3>
            <p className="text-gray-700">We prescribe and dispense stylish, high-quality glasses and contact lenses tailored to your exact needs.</p>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold text-blue mb-2">Prosthetic Eyes</h3>
            <p className="text-gray-700">Expert fitting and support for prosthetic eye solutions, ensuring both comfort and confidence.</p>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold text-blue mb-2">Low Vision Management</h3>
            <p className="text-gray-700">We provide tools, training, and care strategies for individuals living with reduced vision not correctable by glasses.</p>
          </div>
        </div>
      </section>

      
    </div>
  )
}
