'use client'

import Navigation from '../components/Navigation'
import Image from 'next/image'

const PlayIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M8 5v14l11-7z" />
  </svg>
)

const SpotifyIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
  </svg>
)

const YoutubeIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
)

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
          <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto mb-20">
            Experience the 25th Street Band&apos;s unique blend of jazz, soul, and rock through our latest releases and timeless classics.
          </p>
        </div>
      </section>

      {/* Latest Release */}
      <section className="py-20 px-4 bg-black/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-white">Latest Release</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="aspect-square bg-gradient-to-br from-orange-500/10 to-teal-500/10 rounded-lg overflow-hidden relative">
              <Image
                src="/album-cover-placeholder.jpg"
                alt="Latest Album"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white">Album Title</h3>
              <p className="text-gray-300">
                Our latest album featuring 12 original tracks that capture the essence of New York City&apos;s diverse musical landscape.
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-teal-500 rounded-full text-white hover:from-orange-600 hover:to-teal-600 transition-all transform hover:scale-105"
                >
                  <PlayIcon />
                  Play Now
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#1DB954] rounded-full text-white hover:bg-[#1ed760] transition-all transform hover:scale-105"
                >
                  <SpotifyIcon />
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
              <div className="aspect-square bg-gradient-to-br from-orange-500/10 to-teal-500/10 rounded-lg overflow-hidden mb-4 relative">
                <Image
                  src="/album1-placeholder.jpg"
                  alt="Album 1"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="group-hover:scale-105 transition-transform duration-300"
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
              <YoutubeIcon />
            </a>
            <a
              href="#"
              className="text-4xl text-[#1DB954] hover:text-[#1DB954]/80 transition-colors"
            >
              <SpotifyIcon />
            </a>
          </div>
        </div>
      </section>

      {/* Featured Video */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold text-orange-400 mb-8">Latest Release</h2>
        <div className="aspect-video rounded-xl overflow-hidden shadow-2xl">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/mLyFGeMuVjg"
            title="25th Street Band - Holding On To Love"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
      </div>
    </main>
  )
} 