import Link from 'next/link'
import { Facebook, Twitter, LinkedinIcon as LinkedIn, Instagram } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-4">Hokori Global</h3>
            <p className="text-gray-600">Supporting businesses worldwide with innovative solutions.</p>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-600 hover:text-gray-900">About Us</Link></li>
              <li><Link href="/services" className="text-gray-600 hover:text-gray-900">Services</Link></li>
              <li><Link href="/projects" className="text-gray-600 hover:text-gray-900">Projects</Link></li>
              <li><Link href="/contact" className="text-gray-600 hover:text-gray-900">Contact</Link></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <p className="text-gray-600">
              Hokori Global Supporting Services<br />
              Corporate Park, Sector 142, 410<br />
              Noida, Uttar Pradesh 201305<br />
              India<br />
              contact@hokoriglobal.com
            </p>
          </div>
          <div className="w-full md:w-1/4">
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-gray-900"><Facebook /></a>
              <a href="#" className="text-gray-600 hover:text-gray-900"><Twitter /></a>
              <a href="#" className="text-gray-600 hover:text-gray-900"><LinkedIn /></a>
              <a href="#" className="text-gray-600 hover:text-gray-900"><Instagram /></a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} Hokori Global Supporting Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

