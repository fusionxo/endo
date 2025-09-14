import Link from 'next/link'
import { MapPin, Clock, Phone, Mail, Instagram, Facebook, Youtube } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-secondary-500 text-white">
      <div className="container-custom section-padding">
        <div className="grid md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">Endorphin Strength & Yoga</h3>
            <p className="text-gray-300 mb-4">
              Deoghar's premier fitness destination combining traditional yoga wisdom with modern strength training.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/about" className="block text-gray-300 hover:text-white transition-colors">About Us</Link>
              <Link href="/classes" className="block text-gray-300 hover:text-white transition-colors">Classes</Link>
              <Link href="/trainers" className="block text-gray-300 hover:text-white transition-colors">Trainers</Link>
              <Link href="/membership" className="block text-gray-300 hover:text-white transition-colors">Membership</Link>
              <Link href="/gallery" className="block text-gray-300 hover:text-white transition-colors">Gallery</Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary-500 mt-1 flex-shrink-0" />
                <span className="text-gray-300">Near Baidyanath Temple, Deoghar, Jharkhand 814112</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary-500 flex-shrink-0" />
                <span className="text-gray-300">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary-500 flex-shrink-0" />
                <span className="text-gray-300">info@endorphingym.com</span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-xl font-bold mb-4">Opening Hours</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-300">Monday - Friday</span>
                <span className="text-white">5:00 AM - 10:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Saturday</span>
                <span className="text-white">6:00 AM - 9:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Sunday</span>
                <span className="text-white">7:00 AM - 8:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2025 Endorphin Strength & Yoga. All rights reserved. | Designed for Demo Purposes
          </p>
        </div>
      </div>
    </footer>
  )
}
