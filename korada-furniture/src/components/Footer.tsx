import React from 'react'
import Link from 'next/link'
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const productCategories = [
    { name: 'Office Cabinets', href: '/products/office-cabinets' },
    { name: 'Single Door', href: '/products/single-door' },
    { name: 'Double Door', href: '/products/double-door' },
    { name: 'Slimline', href: '/products/slimline' },
    { name: 'Library', href: '/products/library' },
    { name: 'Locker Cabinets', href: '/products/locker-cabinets' },
    { name: 'Tables & Chairs', href: '/products/tables-chairs' },
    { name: 'Lockers', href: '/products/lockers' },
    { name: 'Wardrobes', href: '/products/wardrobes' },
    { name: 'Dressing Cabinets', href: '/products/dressing-cabinets' },
    { name: 'Steel Products', href: '/products/steel-products' },
  ]

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Products', href: '/products' },
    { name: 'Catalogue', href: '/catalogue' },
    { name: 'Dealers', href: '/dealers' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-amber-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">K</span>
              </div>
              <div>
                <h3 className="text-lg font-bold">Korada Furniture</h3>
                <p className="text-sm text-gray-400">Quality Furniture Solutions</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              We provide high-quality furniture solutions for offices, homes, and commercial spaces. 
              Our commitment to excellence and customer satisfaction has made us a trusted name in the industry.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-amber-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Products</h4>
            <ul className="space-y-2">
              {productCategories.slice(0, 6).map((product) => (
                <li key={product.name}>
                  <Link
                    href={product.href}
                    className="text-gray-400 hover:text-amber-400 transition-colors text-sm"
                  >
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-amber-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-400 text-sm">
                    Korada Furniture Co. Pvt. Ltd.
                  </p>
                  <p className="text-gray-400 text-sm">
                    Kundgol - Hubli Rd, Kotgondhunsi,
                  </p>
                  <p className="text-gray-400 text-sm">
                    Karnataka 580024
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-amber-400 flex-shrink-0" />
                <div>
                  <p className="text-gray-400 text-sm">+91-94483-67202</p>
                  <p className="text-gray-400 text-sm">+91-84310-39089</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-amber-400 flex-shrink-0" />
                <p className="text-gray-400 text-sm">koradafurniture@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} Korada Furniture Co. Pvt. Ltd. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-gray-400 hover:text-amber-400 text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-amber-400 text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
