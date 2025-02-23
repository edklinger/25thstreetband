'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import MobileMenu from './MobileMenu'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isHeroVisible, setIsHeroVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      // Check if we've scrolled past half of the hero section
      const heroSection = document.querySelector('section:first-of-type')
      if (heroSection) {
        const heroHeight = heroSection.clientHeight
        const halfHeight = heroHeight / 2
        setIsHeroVisible(window.scrollY < halfHeight)
      }
    }
    window.addEventListener('scroll', handleScroll)
    handleScroll() // Call immediately to set initial state
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#0A192F]/90 backdrop-blur-md' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16">
            {/* Logo/Home */}
            <Link href="/" className={`absolute left-4 hover:opacity-80 transition-all duration-300 ${isHeroVisible ? 'opacity-0' : 'opacity-100'}`}>
              <Image
                src="/25th-long-logo-1@2x.jpg"
                alt="25th Street Logo"
                width={150}
                height={40}
                className="h-10 w-auto drop-shadow-[0_0_12px_rgba(212,160,23,0.2)]"
                priority
              />
            </Link>

            {/* Navigation Links - Centered accounting for social links width */}
            <div className="flex-1 flex justify-center items-center translate-x-4">
              <div className="flex items-center space-x-12 max-w-xl mx-auto">
                <button onClick={() => {
                  const element = document.getElementById('about');
                  const offset = 100;
                  const elementPosition = element?.getBoundingClientRect().top ?? 0;
                  const offsetPosition = elementPosition + window.pageYOffset - offset;
                  window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                  });
                }} className="text-white font-semibold hover:text-[#D4A017] transition-colors font-montserrat">
                  About
                </button>
                <button onClick={() => {
                  const element = document.getElementById('music');
                  const offset = 100;
                  const elementPosition = element?.getBoundingClientRect().top ?? 0;
                  const offsetPosition = elementPosition + window.pageYOffset - offset;
                  window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                  });
                }} className="text-white font-semibold hover:text-[#D4A017] transition-colors font-montserrat">
                  Our music
                </button>
                <button onClick={() => {
                  const element = document.getElementById('performers');
                  const offset = 100;
                  const elementPosition = element?.getBoundingClientRect().top ?? 0;
                  const offsetPosition = elementPosition + window.pageYOffset - offset;
                  window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                  });
                }} className="text-white font-semibold hover:text-[#D4A017] transition-colors font-montserrat">
                  Performers
                </button>
              </div>
            </div>

            {/* Social Links */}
            <div className="hidden md:flex items-center space-x-4">
              <a
                href="https://www.youtube.com/@25thstreetband"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl text-[#95A5A6] hover:text-[#FF4500] transition-colors"
              >
                <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a
                href="https://open.spotify.com/artist/5ZOSFruOF37CZzX6iQi9tU"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl text-[#95A5A6] hover:text-[#FF4500] transition-colors"
              >
                <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                </svg>
              </a>
              <a
                href="https://instagram.com/25thstreetband"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl text-[#95A5A6] hover:text-[#FF4500] transition-colors"
              >
                <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100063657336530"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl text-[#95A5A6] hover:text-[#FF4500] transition-colors"
              >
                <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
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