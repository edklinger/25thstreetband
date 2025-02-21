'use client'

import Navigation from '../components/Navigation'
import { FaPlay, FaSpotify, FaYoutube } from 'react-icons/fa'

export default function MusicPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black to-teal-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-teal-400">
            Our Music
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Experience the unique sound of 25th Street Band. A fusion of New York's energy with timeless melodies.
          </p>
        </div>
      </section>

      {/* Latest Release */}
      <section className="py-20 px-4 bg-black/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-white">Latest Release</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="aspect-square bg-gradient-to-br from-orange-500/10 to-teal-500/10 rounded-lg overflow-hidden">
              <img
                src="/album-cover-placeholder.jpg"
                alt="Latest Album"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white">Album Title</h3>
              <p className="text-gray-300">
                Our latest album featuring 12 original tracks that capture the essence of New York City's diverse musical landscape.
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-teal-500 rounded-full text-white hover:from-orange-600 hover:to-teal-600 transition-all transform hover:scale-105"
                >
                  <FaPlay />
                  Play Now
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#1DB954] rounded-full text-white hover:bg-[#1ed760] transition-all transform hover:scale-105"
                >
                  <FaSpotify />
                  Spotify
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Music Videos */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-white">Music Videos</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Video 1 */}
            <div className="space-y-4">
              <div className="aspect-video bg-black/50 rounded-lg overflow-hidden shadow-xl">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/PLACEHOLDER1"
                  title="Music Video 1"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <h3 className="text-xl font-bold text-white">Song Title 1</h3>
              <p className="text-gray-300">Released: January 2024</p>
            </div>
            {/* Video 2 */}
            <div className="space-y-4">
              <div className="aspect-video bg-black/50 rounded-lg overflow-hidden shadow-xl">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/PLACEHOLDER2"
                  title="Music Video 2"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <h3 className="text-xl font-bold text-white">Song Title 2</h3>
              <p className="text-gray-300">Released: December 2023</p>
            </div>
          </div>
        </div>
      </section>

      {/* Discography */}
      <section className="py-20 px-4 bg-black/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-white">Discography</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {/* Album 1 */}
            <div className="group cursor-pointer">
              <div className="aspect-square bg-gradient-to-br from-orange-500/10 to-teal-500/10 rounded-lg overflow-hidden mb-4">
                <img
                  src="/album1-placeholder.jpg"
                  alt="Album 1"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-lg font-bold text-white">Album Title 1</h3>
              <p className="text-gray-300">2023</p>
            </div>
            {/* Add more albums here */}
          </div>
        </div>
      </section>

      {/* Streaming Platforms */}
      <section className="py-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-white">Listen Everywhere</h2>
          <div className="flex justify-center gap-8">
            <a
              href="#"
              className="text-4xl text-[#FF0000] hover:text-[#FF0000]/80 transition-colors"
            >
              <FaYoutube />
            </a>
            <a
              href="#"
              className="text-4xl text-[#1DB954] hover:text-[#1DB954]/80 transition-colors"
            >
              <FaSpotify />
            </a>
          </div>
        </div>
      </section>
    </main>
  )
} 