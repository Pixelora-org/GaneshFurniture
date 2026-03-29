'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Phone, Mail } from 'lucide-react'
import { Button } from '@/components/ui/Button'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Products', href: '/products' },
    { name: 'Catalogue', href: '/catalogue' },
    { name: 'Dealers', href: '/dealers' },
    { name: 'Contact', href: '/contact' },
  ]

  const productCategories = [
    { name: 'Office Cabinets', href: '/products/office-cabinets' },
    { name: 'Lockers', href: '/products/lockers' },
    { name: 'Dressing Cabinets', href: '/products/dressing-cabinets' },
    { name: 'Steel Products', href: '/products/steel-products' },
    { name: 'Tables & Chairs', href: '/products/tables-chairs' },
    { name: 'Wardrobes', href: '/products/wardrobes' },
  ]

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top bar with contact info */}
      <div className="bg-amber-600 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <Phone className="h-4 w-4" />
                <span>+91 94483 67202</span>
              </div>
              <div className="flex items-center space-x-1">
                <Mail className="h-4 w-4" />
                <span>koradafurniture@gmail.com</span>
              </div>
            </div>
            <div className="hidden md:block">
              <span>Korada Furniture Co. Pvt. Ltd.</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-amber-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">K</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Korada Furniture</h1>
              <p className="text-sm text-gray-600">Quality Furniture Solutions</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-amber-600 transition-colors duration-200 font-medium"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button size="sm">Enquiry Now</Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-amber-600 transition-colors duration-200 font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4">
                <Button className="w-full">Enquiry Now</Button>
              </div>
            </nav>
          </div>
        )}
      </div>

      {/* Product Categories Dropdown */}
      <div className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="hidden lg:flex space-x-8 py-3">
            {productCategories.map((category) => (
              <Link
                key={category.name}
                href={category.href}
                className="text-sm text-gray-600 hover:text-amber-600 transition-colors duration-200"
              >
                {category.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
