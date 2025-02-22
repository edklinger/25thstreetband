'use client'

import { Fragment } from 'react'
import { FaYoutube, FaSpotify, FaTimes, FaInstagram, FaFacebook } from 'react-icons/fa'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) return null

  return (
    <Fragment>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity"
        onClick={onClose}
      />

      {/* Menu */}
      <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-black/95 backdrop-blur-lg z-50 transform transition-transform duration-300 ease-in-out">
        <div className="flex items-center justify-end p-4">
          <button
            type="button"
            className="text-gray-300 hover:text-white"
            onClick={onClose}
          >
            <FaTimes className="h-6 w-6" />
          </button>
        </div>

        <div className="px-4 py-6 space-y-6">
          <button
            onClick={() => {
              const element = document.getElementById('about');
              const offset = 100; // Offset for the fixed header
              const elementPosition = element?.getBoundingClientRect().top ?? 0;
              const offsetPosition = elementPosition + window.pageYOffset - offset;
              window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
              });
              onClose();
            }}
            className="block text-lg text-gray-300 hover:text-white transition-colors w-full text-left"
          >
            About
          </button>
          <button
            onClick={() => {
              const element = document.getElementById('music');
              const offset = 100; // Offset for the fixed header
              const elementPosition = element?.getBoundingClientRect().top ?? 0;
              const offsetPosition = elementPosition + window.pageYOffset - offset;
              window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
              });
              onClose();
            }}
            className="block text-lg text-gray-300 hover:text-white transition-colors w-full text-left"
          >
            Our Music
          </button>
          <button
            onClick={() => {
              const element = document.getElementById('performers');
              const offset = 100; // Offset for the fixed header
              const elementPosition = element?.getBoundingClientRect().top ?? 0;
              const offsetPosition = elementPosition + window.pageYOffset - offset;
              window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
              });
              onClose();
            }}
            className="block text-lg text-gray-300 hover:text-white transition-colors w-full text-left"
          >
            Performers
          </button>

          <div className="pt-6 border-t border-gray-700">
            <div className="flex space-x-6 px-2">
              <a
                href="https://www.youtube.com/@25thstreetband"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-gray-300 hover:text-[#FF4500] transition-colors"
              >
                <FaYoutube />
              </a>
              <a
                href="https://open.spotify.com/artist/5ZOSFruOF37CZzX6iQi9tU"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-gray-300 hover:text-[#FF4500] transition-colors"
              >
                <FaSpotify />
              </a>
              <a
                href="https://instagram.com/25thstreetband"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-gray-300 hover:text-[#FF4500] transition-colors"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100063657336530"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-gray-300 hover:text-[#FF4500] transition-colors"
              >
                <FaFacebook />
              </a>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
} 