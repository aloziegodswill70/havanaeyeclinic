import Link from 'next/link'


export const metadata = {
  title: 'Top Eye Clinics in Asaba – Havana Eye Clinic',
  description:
    'Searching for the best eye clinic in Asaba? Havana Eye Clinic offers expert eye care, modern equipment, and friendly service. Book your appointment today.',
}

export default function EyeClinicsInAsabaPage() {
  return (
    <div className="bg-white text-gray-800">
      

      <section className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold text-blue mb-6 text-center">
          Best Eye Clinics in Asaba – Why Havana Eye Clinic Stands Out
        </h1>

        <p className="text-gray-700 mb-5">
          Asaba, the capital of Delta State, is home to several eye clinics — but when it comes to professionalism, modern facilities, and excellent patient care, <strong>Havana Eye Clinic</strong> leads the pack.
        </p>

        <h2 className="text-2xl font-semibold text-blue mb-3">👁️ Why Choose Havana Eye Clinic?</h2>
        <ul className="list-disc list-inside text-gray-600 mb-6">
          <li>Experienced and licensed optometrists</li>
          <li>Comprehensive eye exams and vision testing</li>
          <li>Modern diagnostic equipment</li>
          <li>Customized eyeglasses and contact lens prescriptions</li>
          <li>Low vision care, therapy, and pediatric eye services</li>
          <li>Clean, welcoming, and accessible clinic environment</li>
        </ul>

        <p className="text-gray-700 mb-5">
          Whether you need a routine eye exam, glasses, treatment for an eye condition, or consultation for surgery — Havana Eye Clinic is your trusted partner for everything eye care.
        </p>

        <div className="bg-blue-50 border-l-4 border-blue p-5 rounded mb-8 text-center">
          <p className="text-blue-800 font-semibold text-lg mb-2">
            Ready to see clearly and stay healthy?
          </p>
          <Link
            href="https://wa.me/2347033733993"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-semibold transition"
          >
            💬 Book Appointment on WhatsApp
          </Link>
        </div>

         <div className="bg-blue-50 border-l-4 border-blue p-5 rounded mb-8 text-center">
          <p className="text-blue-800 font-semibold text-lg mb-2">
            People also search for:
          </p>
          <Link
            href="/noa-conference-umuahia-2025"
            target="_blank"
            className="inline-block bg-red-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-semibold transition"
          >
            💬 NOA CONFERENCE 2025
          </Link>
             <Link
            href="/noa-delta-state"
            target="_blank"
            className="inline-block bg-red-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-semibold transition"
          >
            💬 NOA DELTA STATE
          </Link>
        </div>


        <p className="text-gray-700">
          Located right in the heart of Asaba, Havana Eye Clinic has served individuals and families across Delta State with reliable and affordable eye care. Your vision is our mission.
        </p>
      </section>

    
    </div>
  )
}
