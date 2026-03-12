import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ClinicBottomBar from "@/components/ClinicBottomBar";
import WhatsappFloat from "@/components/WhatsappFloat";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Havana Eye Clinic",
  description:
    "Your Best Professional Eye Clinic in the City of Asaba, visit us everyday by rain oil petrol station after Redeem junction, 57 Okpanam Rd, Asaba, Delta State.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        
        <Navbar />

        {children}

        <Footer />

        {/* Floating WhatsApp Button */}
        <WhatsappFloat />

        {/* Mobile Bottom Navigation */}
        <ClinicBottomBar />

      </body>
    </html>
  );
}