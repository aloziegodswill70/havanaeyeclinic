"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsappFloat() {
  const whatsappNumber = "2347033733993";

  const message =
    "Hello Havana Eye Clinic, I would like to make an appointment.";

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-24 right-4 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-green-500 shadow-lg hover:bg-green-600 transition"
    >
      <MessageCircle size={28} color="white" />
    </a>
  );
}