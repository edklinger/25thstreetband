'use client'

import { Fragment } from 'react'
import Link from 'next/link'
import { FaYoutube, FaSpotify, FaTimes } from 'react-icons/fa'

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
            onClick={onClose}
            className="absolute top-4 right-4 text-white hover:text-orange-400 transition-colors"
          >
            <FaTimes className="text-2xl" />
          </button>
        </div>

        <div className="px-4 py-6 space-y-6">
          <Link
            href="/music"
            className="block text-lg text-gray-300 hover:text-white transition-colors"
            onClick={onClose}
          >
            Music
          </Link>
          <Link
            href="/artists"
            className="block text-lg text-gray-300 hover:text-white transition-colors"
            onClick={onClose}
          >
            Artists
          </Link>
          <Link
            href="/shows"
            className="block text-lg text-gray-300 hover:text-white transition-colors"
            onClick={onClose}
          >
            Shows
          </Link>
          <Link
            href="/gallery"
            className="block text-lg text-gray-300 hover:text-white transition-colors"
            onClick={onClose}
          >
            Gallery
          </Link>
          <Link
            href="/about"
            className="block text-lg text-gray-300 hover:text-white transition-colors"
            onClick={onClose}
          >
            About
          </Link>

          <div className="pt-6 border-t border-gray-700">
            <div className="flex justify-center gap-6">
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
          </div>
        </div>
      </div>
    </Fragment>
  )
} 