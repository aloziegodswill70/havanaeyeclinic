import Image from 'next/image'

export const metadata = {
  title: 'Dr. Odiase Chukwudi | Havana Eye Clinic',
  description:
    'Profile of Dr. Odiase Chukwudi – Doctor of Optometry with 25+ years of experience in Nigeria and abroad.',
}

export default function DrOdiasePage() {
  return (
    <div className="bg-white text-gray-800">

      <section className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold text-blue mb-6 text-center">
          Dr. Chukwudi Odiase
        </h1>

        <div className="flex flex-col md:flex-row gap-6 items-center mb-8">
          <Image
            src="/images/havana15.jpeg"
            alt="Dr. Odiase Chukwudi"
            width={250}
            height={250}
            className="rounded-lg shadow-md object-cover"
          />
          <div>
            <p className="text-gray-700 leading-relaxed">
              <strong>Dr. Chukwudi Odiase</strong> is a Doctor of Optometry with over 25 years of experience in both public and private eye care practice. A graduate of the University of Benin (1997/1998), he has attended numerous Continuing Professional Development (CPD) programs and scientific conferences.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-blue mb-3">🧑‍⚕️ Professional Background</h2>
        <ul className="list-disc list-inside text-gray-700 mb-6">
          <li>Chief Optometrist, General Hospital Ogwashi-Uku, Delta State (2019–Present)</li>
          <li>Visiting Optometrist, Havana Eye Clinic, Asaba (2019–Present)</li>
          <li>Principal & Assistant Chief Optometrist, General Hospital Ogwashi-Uku (2007–2019)</li>
          <li>Optometrist, Renad Optical, Riyadh, Saudi Arabia (2005–2007)</li>
          <li>Optometrist, Central Hospital Agbor, Delta State (2000–2005)</li>
        </ul>

        <h2 className="text-2xl font-semibold text-blue mb-3">🎓 Education & Certifications</h2>
        <ul className="list-disc list-inside text-gray-700 mb-6">
          <li>Doctor of Optometry (O.D.), University of Benin – 1997/1998</li>
          <li>West African Examination Certificate – 1988</li>
          <li>Current Optometry Practice License (ODORBN)</li>
          <li>Certificates from CPD programs (2011–Present)</li>
        </ul>

        <h2 className="text-2xl font-semibold text-blue mb-3">💼 Skills & Qualities</h2>
        <ul className="list-disc list-inside text-gray-700 mb-6">
          <li>Mastery of ophthalmic instruments and clinical software (e.g. EMR)</li>
          <li>Expert in patient management, diagnosis, and referrals</li>
          <li>Strong emotional intelligence, empathy, and communication</li>
          <li>Experience with contact lens dispensing, refraction, and therapy</li>
        </ul>

        <div className="text-center mt-10">
          <p className="text-lg font-semibold text-blue mb-2">
            Book a consultation with Dr. Odiase today at Havana Eye Clinic
          </p>
          <a
            href="https://wa.me/2347033733993"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition"
          >
            💬 Message on WhatsApp
          </a>
        </div>
      </section>

    </div>
  )
}
