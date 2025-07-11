

export const metadata = {
  title: 'Our Mission | Havana Eye Clinic',
  description: 'Learn more about the mission and values driving Havana Eye Clinic’s commitment to quality eye care in Asaba and beyond.',
}

export default function OurMissionPage() {
  return (
    <div className="bg-white text-gray-800">
    

      <main className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold text-blue mb-6 text-center">Our Mission</h1>

        <p className="text-gray-700 mb-4">
          At <strong>Havana Eye Clinic</strong>, our mission is to provide exceptional, affordable, and accessible eye care services to individuals and families in Asaba and across Delta State. We are committed to preserving and improving the gift of sight through:
        </p>

        <ul className="list-disc list-inside text-gray-700 mb-6">
          <li>Accurate eye examinations and early detection of vision problems</li>
          <li>Modern, evidence-based treatments tailored to each patient</li>
          <li>Prescription of high-quality eyewear and vision aids</li>
          <li>Community outreach programs that raise awareness on eye health</li>
          <li>Professional and ethical service delivery in a clean, welcoming environment</li>
        </ul>

        <h2 className="text-xl font-semibold text-blue mb-2 mt-6">💡 Our Core Values</h2>
        <ul className="list-disc list-inside text-gray-700 mb-6">
          <li><strong>Compassion:</strong> Treating every patient with kindness and care</li>
          <li><strong>Integrity:</strong> Upholding the highest ethical standards in our practice</li>
          <li><strong>Excellence:</strong> Using advanced tools and continuous education to stay ahead</li>
          <li><strong>Accessibility:</strong> Making eye care services available to all, regardless of status</li>
        </ul>

        <p className="text-gray-700 mt-6">
          We believe that quality eye care should be a right, not a privilege. Every day, we work to make that belief a reality—one patient at a time.
        </p>

        <div className="text-center mt-10">
          <a
            href="/"
            className="inline-block bg-red text-white px-6 py-3 rounded-full font-semibold hover:bg-red-700 transition"
          >
            👁️ Book an Appointment
          </a>
        </div>
      </main>


    </div>
  )
}
