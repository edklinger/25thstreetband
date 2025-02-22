'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaYoutube, FaSpotify, FaInstagram, FaFacebook } from 'react-icons/fa'
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
        isScrolled ? 'bg-[#0A192F]/90 backdrop-blur-md' : 'bg-transparent'
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
                className="h-10 w-auto drop-shadow-[0_0_12px_rgba(212,160,23,0.2)]"
                priority
              />
            </Link>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => {
                const element = document.getElementById('about');
                const offset = 100; // Offset for the fixed header
                const elementPosition = element?.getBoundingClientRect().top ?? 0;
                const offsetPosition = elementPosition + window.pageYOffset - offset;
                window.scrollTo({
                  top: offsetPosition,
                  behavior: 'smooth'
                });
              }} className="text-[#95A5A6] hover:text-[#D4A017] transition-colors font-montserrat">
                About
              </button>
              <button onClick={() => {
                const element = document.getElementById('music');
                const offset = 100; // Offset for the fixed header
                const elementPosition = element?.getBoundingClientRect().top ?? 0;
                const offsetPosition = elementPosition + window.pageYOffset - offset;
                window.scrollTo({
                  top: offsetPosition,
                  behavior: 'smooth'
                });
              }} className="text-[#95A5A6] hover:text-[#D4A017] transition-colors font-montserrat">
                Our music
              </button>
              <button onClick={() => {
                const element = document.getElementById('performers');
                const offset = 100; // Offset for the fixed header
                const elementPosition = element?.getBoundingClientRect().top ?? 0;
                const offsetPosition = elementPosition + window.pageYOffset - offset;
                window.scrollTo({
                  top: offsetPosition,
                  behavior: 'smooth'
                });
              }} className="text-[#95A5A6] hover:text-[#D4A017] transition-colors font-montserrat">
                Performers
              </button>
            </div>

            {/* Social Links */}
            <div className="hidden md:flex items-center space-x-4">
              <a
                href="https://www.youtube.com/@25thstreetband"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl text-[#95A5A6] hover:text-[#FF4500] transition-colors"
              >
                {FaYoutube({})}
              </a>
              <a
                href="https://open.spotify.com/artist/5ZOSFruOF37CZzX6iQi9tU"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl text-[#95A5A6] hover:text-[#FF4500] transition-colors"
              >
                {FaSpotify({})}
              </a>
              <a
                href="https://instagram.com/25thstreetband"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl text-[#95A5A6] hover:text-[#FF4500] transition-colors"
              >
                {FaInstagram({})}
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100063657336530"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl text-[#95A5A6] hover:text-[#FF4500] transition-colors"
              >
                {FaFacebook({})}
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                type="button"
                className="text-[#95A5A6] hover:text-[#D4A017] focus:outline-none"
                onClick={() => setIsMobileMenuOpen(true)}
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
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