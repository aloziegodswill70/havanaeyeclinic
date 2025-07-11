import Image from 'next/image'

export default function GalleryPage() {
  const clinicImages = [
    '/images/HAVANA2.jpeg',
    '/images/havana15.jpeg',
    '/images/havana3.jpeg',
    '/images/havana4.jpeg',
    '/images/havana5.jpeg',
    '/images/havana7.jpeg',
  ]

  const frameImages = [
    '/images/havana6.jpeg',
    '/images/havana9.jpg',
    '/images/havana10.jpg',
    '/images/havana11.jpg',
    '/images/havana12.jpg',
    '/images/havana4.jpeg',
  ]

  return (
    <div className="bg-white text-gray-800">
      

      {/* Clinic & Outreach Gallery */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-blue text-center mb-4">Gallery</h1>
        <p className="text-gray-600 text-center mb-10">
          A glimpse into our clinic, equipment, and outreach programs.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {clinicImages.map((src, index) => (
            <div key={index} className="rounded overflow-hidden shadow hover:shadow-lg transition">
              <Image
                src={src}
                alt={`Clinic Image ${index + 1}`}
                width={400}
                height={300}
                className="object-cover w-full h-60"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Frame Showcase Gallery */}
      <section className="bg-gray-100 py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-blue text-center mb-4">Eyeglass Frames Collection</h2>
        <p className="text-gray-600 text-center mb-10">
          Explore some of our stylish and affordable frames available at Havana Eye Clinic.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {frameImages.map((src, index) => (
            <div key={index} className="rounded overflow-hidden shadow hover:shadow-lg transition">
              <Image
                src={src}
                alt={`Eyeglass Frame ${index + 1}`}
                width={400}
                height={300}
                className="object-cover w-full h-60"
              />
            </div>
          ))}
        </div>
      </section>

      
    </div>
  )
}
