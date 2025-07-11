import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'NOA Conference Umuahia 2025 | Nigerian Optometric Association',
  description: 'Join the 48th NOA National Conference & Vision Expo in Umuahia, Abia State from July 23–26, 2025.',
}

export default function ConferencePage() {
  return (
    <div className="bg-white text-gray-800">
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold text-blue mb-4 text-center">
          48th NOA National Conference & Vision Expo – Umuahia 2025
        </h1>

        <p className="text-gray-600 mb-4 leading-relaxed">
          The Nigerian Optometric Association (NOA) will host the <strong>48th National Conference & Vision Expo</strong> from <strong>July 23 to July 26, 2025</strong> at the International Conference Centre, Umuahia, Abia State.
        </p>

        {/* Conference Image */}
        <div className="mb-8">
          <Image
            src="/images/havana14.jpeg" // place this image in your /public folder
            alt="NOA Conference Umuahia 2025"
            width={800}
            height={450}
            className="rounded-lg shadow-md mx-auto"
          />
        </div>

        <h2 className="text-2xl font-semibold text-blue mb-3">📅 Conference Highlights</h2>
        <ul className="list-disc list-inside text-gray-600 mb-6">
          <li>Pre-conference workshops & registration (July 23)</li>
          <li>Opening ceremony, scientific sessions & welcome reception (July 24)</li>
          <li>Continued scientific sessions & Umuahia city tour (July 25)</li>
          <li>AGM, gala dinner, aerobics/football match & conference close (July 26)</li>
        </ul>

        <h2 className="text-2xl font-semibold text-blue mb-3">🔍 Thematic Focus</h2>
        <p className="text-gray-600 mb-6">
          Under the theme <em>“Optometry in a Changing World: Adapting to Emerging Trends”</em>, the conference will explore:
        </p>
        <ul className="list-disc list-inside text-gray-600 mb-6">
          <li>Advancing Optometry’s role in national eye care</li>
          <li>Vision for everyone</li>
          <li>Leveraging technology for accessibility & health coverage</li>
          <li>Expanding the profession’s reach and capacity</li>  
        </ul>

        <h2 className="text-2xl font-semibold text-blue mb-3">👥 Who Should Attend</h2>
        <p className="text-gray-600 mb-6">
          Over <strong>2,000 optometrists</strong>, eye-care professionals, exhibitors, and industry stakeholders are expected. It’s also open to students, educators, and anyone passionate about eye health in Nigeria.
        </p>

        <div className="bg-blue-50 border-l-4 border-blue p-4 rounded mb-6">
          <p className="text-blue-800 italic font-medium">
            Are you in Delta State and looking for expert eye care close to home?
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

        <h2 className="text-2xl font-semibold text-blue mb-3">📍 Venue & Registration</h2>
        <p className="text-gray-600 mb-6">
          Location: International Conference Centre, Umuahia, Abia State.<br/>
          Registration is ongoing with <strong>early‑bird rates</strong> still available.
        </p>

        <div className="text-center">
          <a
            href="https://noaconference.noang.org/register"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-red text-white px-6 py-3 rounded-full font-semibold hover:bg-red-700 transition"
          >
            Register for NOA Conference 2025
          </a>
        </div>
      </section>
    </div>
  )
}
