import Link from 'next/link'


export const metadata = {
  title: 'How to Treat Eye Problems | Havana Eye Clinic Asaba',
  description: 'Overview of common eye problems and treatment options. Visit Havana Eye Clinic in Asaba for expert diagnosis and care.',
}

export default function TreatEyeProblemsPage() {
  return (
    <div className="bg-white text-gray-800">

      <section className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold text-blue mb-6 text-center">
          How to Treat Common Eye Problems
        </h1>

        <p className="text-gray-700 mb-6">
          Eye problems are common and can affect anyone at any age. While some conditions may be minor and temporary, others can lead to vision loss if left untreated. Below are some of the most frequent eye problems and how they are typically managed.
        </p>

        <h2 className="text-2xl font-semibold text-blue mb-3">1. Blurry Vision</h2>
        <p className="text-gray-600 mb-5">
          Often caused by refractive errors like myopia (short-sightedness), hyperopia (long-sightedness), or astigmatism. Treatment usually involves prescription glasses or contact lenses. In some cases, vision therapy or surgery may be recommended.
        </p>

        <h2 className="text-2xl font-semibold text-blue mb-3">2. Red or Itchy Eyes</h2>
        <p className="text-gray-600 mb-5">
          This can result from allergies, infections (like conjunctivitis), or dry eye. Treatment depends on the cause — it may include antihistamines, lubricating eye drops, or antibiotic drops if an infection is present.
        </p>

        <h2 className="text-2xl font-semibold text-blue mb-3">3. Eye Pain or Headaches</h2>
        <p className="text-gray-600 mb-5">
          Could be a sign of eye strain, glaucoma, or even underlying systemic issues. Always consult an eye doctor if pain persists or is associated with blurred vision.
        </p>

        <h2 className="text-2xl font-semibold text-blue mb-3">4. Watery Eyes</h2>
        <p className="text-gray-600 mb-5">
          This may be due to tear duct blockage, irritation, or allergies. Treatment involves identifying the trigger and using prescription drops or minor procedures to resolve the issue.
        </p>

        <h2 className="text-2xl font-semibold text-blue mb-3">5. Seeing Floaters or Flashes</h2>
        <p className="text-gray-600 mb-5">
          Occasionally normal, but a sudden increase could indicate retinal detachment or other serious conditions. Seek urgent eye examination if you notice this.
        </p>

        <h2 className="text-2xl font-semibold text-blue mb-3">6. Difficulty Seeing at Night</h2>
        <p className="text-gray-600 mb-6">
          This might be due to cataracts, vitamin A deficiency, or night blindness. Proper diagnosis is needed to determine the cause and suitable treatment.
        </p>

        <div className="bg-blue-50 border-l-4 border-blue p-5 rounded mb-8 text-center">
          <p className="text-blue-800 font-semibold text-lg">
            Don’t guess or self-medicate. Your eyes deserve professional care.
          </p>
          <p className="mt-3">
            <Link
              href="/"
              className="text-red font-semibold underline hover:text-red-700"
            >
              👁️ Wanna talk to an expert eye doctor in Asaba? Visit Havana Eye Clinic today!
            </Link>
          </p>
        </div>

        <p className="text-gray-700">
          Early detection and proper treatment of eye conditions can save your sight. Whether it's blurry vision, red eyes, or discomfort, the best first step is to schedule a comprehensive eye examination.
        </p>
      </section>

    
    </div>
  )
}
