"use client";

import { Phone, MapPin, Calendar, MessageCircle } from "lucide-react";

export default function ClinicBottomBar() {
  const phoneNumber = "07033733993";

  const whatsappNumber = "2347033733993";

  const message =
    "Hello Havana Eye Clinic, I would like to book an appointment.";

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;

  const directions =
    "https://www.google.com/maps/search/?api=1&query=57+Okpanam+Road,+Asaba";

  return (
    <div className="fixed bottom-0 left-0 w-full bg-white border-t shadow-md z-50">

      <div className="grid grid-cols-4 text-center py-2">

        {/* WhatsApp */}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center text-green-600"
        >
          <MessageCircle size={22} />
          <span className="text-xs mt-1">WhatsApp</span>
        </a>

        {/* Call */}
        <a
          href={`tel:${phoneNumber}`}
          className="flex flex-col items-center text-blue-600"
        >
          <Phone size={22} />
          <span className="text-xs mt-1">Call</span>
        </a>

        {/* Directions */}
        <a
          href={directions}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center text-red-600"
        >
          <MapPin size={22} />
          <span className="text-xs mt-1">Directions</span>
        </a>

        {/* Book Appointment */}
        <a
          href="/book-appointment"
          className="flex flex-col items-center text-purple-600"
        >
          <Calendar size={22} />
          <span className="text-xs mt-1">Book</span>
        </a>

      </div>
    </div>
  );
}