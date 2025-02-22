'use client'

import { useState } from 'react'
import { FaYoutube, FaSpotify, FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa'
import Image from 'next/image'
import Navigation from './components/Navigation'

export default function Home() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement mailing list subscription
    setSubscribed(true)
    setEmail('')
  }

  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* NYC Skyline Background */}
        <div className="absolute inset-0">
          <Image
            src="/brooklyn-bridge.jpg"
            alt="Brooklyn Bridge at Night"
            fill
            className="object-cover"
            priority
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-purple-900/30 to-black/80" />
        </div>
        
        {/* Content */}
        <div className="relative z-10 text-center px-4 mt-[-10vh]">
          {/* Logo */}
          <div className="w-full max-w-4xl mx-auto">
            <Image
              src="/25th-street-logo.jpg"
              alt="25th Street Band"
              width={800}
              height={200}
              className="w-full max-w-3xl mx-auto"
              priority
            />
          </div>
        </div>
      </section>

      {/* Music Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-teal-900 to-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-teal-400">
            Our Music
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="aspect-video bg-black/50 rounded-lg p-1 shadow-xl shadow-teal-900/20">
              <iframe
                className="w-full h-full rounded-lg"
                src="https://www.youtube.com/embed/7N0nkK-4xZw"
                title="25th Street Band - Happy Ed"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="aspect-video bg-black/50 rounded-lg p-1 shadow-xl shadow-teal-900/20">
              <iframe
                className="w-full h-full rounded-lg"
                src="https://open.spotify.com/embed/artist/5ZOSFruOF37CZzX6iQi9tU"
                allow="encrypted-media"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/skyline.svg')] bg-repeat-x bg-bottom opacity-5" />
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-teal-400">
            About Us
          </h2>
          <div className="text-center mb-16">
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              THE 25TH STREET BAND IS A LONDON BASED, CROSSOVER-JAZZ RECORDING PROJECT FEATURING GUEST ARTISTS FROM AROUND THE WORLD.

            </p>
          </div>
          
          <div className="relative aspect-[16/9] mb-16">
            <Image
              src="/band-members.jpg"
              alt="25th Street Band Members"
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-white mb-2">Joel Kibble</h3>
              <p className="text-gray-400">Vocals</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-white mb-2">Josiah Ruff</h3>
              <p className="text-gray-400">Vocals</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-white mb-2">Mornington Lockett</h3>
              <p className="text-gray-400">Saxophone</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-white mb-2">Tom Brechtlein</h3>
              <p className="text-gray-400">Drums</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-white mb-2">Kim Mont</h3>
              <p className="text-gray-400">Vocals</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mailing List Section */}
      <section className="py-20 px-4 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/skyline.svg')] bg-repeat-x bg-bottom opacity-5" />
        <div className="max-w-2xl mx-auto text-center relative z-10">
          <h2 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-teal-400">
            Join Our Mailing List
          </h2>
          <p className="text-gray-300 mb-8">Stay updated with our latest releases and upcoming shows!</p>
          {subscribed ? (
            <div className="text-teal-400 text-xl">Thanks for subscribing!</div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col md:flex-row gap-4 justify-center">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="px-6 py-3 rounded-full bg-black/50 border border-teal-900 text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                required
              />
              <button
                type="submit"
                className="px-8 py-3 rounded-full bg-gradient-to-r from-orange-500 to-teal-500 hover:from-orange-600 hover:to-teal-600 transition-all transform hover:scale-105"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Social Links */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-teal-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-teal-400">
            Connect With Us
          </h2>
          <div className="flex justify-center gap-8">
            <a
              href="https://www.youtube.com/@25thstreetband"
              target="_blank"
              rel="noopener noreferrer"
              className="text-4xl text-[#95A5A6] hover:text-[#FF4500] transition-all transform hover:scale-110 drop-shadow-[0_0_8px_rgba(255,69,0,0)]"
            >
              <FaYoutube />
            </a>
            <a
              href="https://open.spotify.com/artist/5ZOSFruOF37CZzX6iQi9tU"
              target="_blank"
              rel="noopener noreferrer"
              className="text-4xl text-[#95A5A6] hover:text-[#FF4500] transition-all transform hover:scale-110"
            >
              <FaSpotify />
            </a>
            <a
              href="https://instagram.com/25thstreetband"
              target="_blank"
              rel="noopener noreferrer"
              className="text-4xl text-[#95A5A6] hover:text-[#FF4500] transition-all transform hover:scale-110"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100063657336530"
              target="_blank"
              rel="noopener noreferrer"
              className="text-4xl text-[#95A5A6] hover:text-[#FF4500] transition-all transform hover:scale-110"
            >
              <FaFacebook />
            </a>
            <a
              href="#"
              className="text-4xl text-[#95A5A6] hover:text-[#FF4500] transition-all transform hover:scale-110"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

