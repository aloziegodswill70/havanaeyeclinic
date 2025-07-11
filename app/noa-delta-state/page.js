import Link from 'next/link'

export default function NOADeltaPage() {
  return (
    <div className="bg-white text-gray-800">
    

      <section className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold text-blue mb-4 text-center">
          NOA Delta – Nigerian Optometrist Association (Delta State Chapter)
        </h1>

        <p className="text-gray-600 text-lg mb-6">
          The <strong>Nigerian Optometrist Association (NOA)</strong> is the recognized body representing qualified optometrists across Nigeria. The <strong>Delta State Chapter</strong> of NOA is committed to promoting eye health awareness, professional excellence, and ethical practice among eye doctors in the state.
        </p>

        <p className="text-gray-600 mb-6">
          NOA Delta works to ensure that residents across Delta State — including cities like Asaba, Warri, Ughelli, and Sapele — have access to competent and compassionate eye care services. The association also organizes outreach programs, public lectures, and continuing education for its members.
        </p>

        <div className="bg-blue-50 border-l-4 border-blue p-4 rounded mb-6">
          <p className="text-blue-800 italic font-medium">
            Are you searching for a licensed eye doctor in Asaba, Delta State?
          </p>
          <p className="mt-2">
            <Link
              href="/"
              className="text-red font-semibold underline hover:text-red-700"
            >
              👁️‍🗨️ Wanna meet an experienced eye doctor in Asaba, Delta State? Visit Havana Eye Clinic today!
            </Link>
          </p>
        </div>

        <p className="text-gray-600">
          NOA Delta remains a strong pillar in advocating for improved vision care policies in Nigeria while supporting its members in delivering best-in-class eye care.
        </p>
      </section>

    
    </div>
  )
}
