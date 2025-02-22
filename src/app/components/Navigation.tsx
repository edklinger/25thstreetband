'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaYoutube, FaSpotify, FaTimes, FaBars } from 'react-icons/fa'
import MobileMenu from './MobileMenu'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/80 backdrop-blur-md' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo/Home */}
            <Link href="/" className="hover:opacity-80 transition-opacity">
              <Image
                src="/25th-street-logo.jpg"
                alt="25th Street Logo"
                width={150}
                height={40}
                className="h-10 w-auto"
                priority
              />
            </Link>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/music" className="text-gray-300 hover:text-white transition-colors">
                Music
              </Link>
              <Link href="/artists" className="text-gray-300 hover:text-white transition-colors">
                Artists
              </Link>
              <Link href="/shows" className="text-gray-300 hover:text-white transition-colors">
                Shows
              </Link>
              <Link href="/gallery" className="text-gray-300 hover:text-white transition-colors">
                Gallery
              </Link>
              <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                About
              </Link>
            </div>

            {/* Social Links */}
            <div className="hidden md:flex items-center space-x-4">
              <a
                href="https://www.youtube.com/@25thstreetband"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-gray-300 hover:text-red-600 transition-colors"
              >
                <FaYoutube />
              </a>
              <a
                href="https://open.spotify.com/artist/5ZOSFruOF37CZzX6iQi9tU"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-gray-300 hover:text-green-500 transition-colors"
              >
                <FaSpotify />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="text-white hover:text-orange-400 transition-colors"
              >
                <FaBars className="text-2xl" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  )
} 