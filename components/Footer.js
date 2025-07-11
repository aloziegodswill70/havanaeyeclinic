import Link from 'next/link'
import { Phone, Facebook, MessageSquare } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-blue text-white py-10 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 text-sm">
        {/* Left Column: Clinic Info & Contacts */}
        <div>
          <h4 className="font-semibold text-lg mb-3">Havana Eye Clinic</h4>
          <p>&copy; {new Date().getFullYear()} Havana Eye Clinic Asaba.</p>
          <p className="mt-1">All rights reserved.</p>

          {/* Contact Icons */}
          <div className="flex items-center gap-4 mt-4">
            <a href="tel:07033733993" className="flex items-center gap-1 hover:underline">
              <Phone size={16} />
            </a>
            <a
              href="https://wa.me/2347033733993"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-300"
              title="WhatsApp"
            >
              <MessageSquare size={20} />
            </a>
            <a
              href="https://web.facebook.com/havanaeyeclinic.org"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-300"
              title="Facebook"
            >
              <Facebook size={20} />
            </a>
          </div>
        </div>

        {/* Right Column: Quick Links */}
        <div>
          <h4 className="font-semibold text-lg mb-3">Quick Links</h4>
          <ul className="space-y-2">
            <li><Link href="/faq" className="hover:underline">FAQ</Link></li>
            <li><Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link></li>
            <li><Link href="/testimonials" className="hover:underline">Testimonials</Link></li>
            <li><Link href="/our-mission" className="hover:underline">Mission</Link></li>
            <li><Link href="/Dr.chuks-odiase" className="hover:underline">Founder&CEO</Link></li>
            <li><Link href="/eye-clinics-in-asaba" className="hover:underline">Eye Clinics in Asaba</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
