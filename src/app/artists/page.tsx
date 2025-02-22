'use client'

import Navigation from '../components/Navigation'
import Image from 'next/image'

export default function ArtistsPage() {
  return (
    <main className="min-h-screen bg-black">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-teal-400">
            Our Artists
          </h1>
          <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto mb-20">
            Meet the talented musicians who bring our music to life. Each member brings their unique style and expertise to create our signature sound.
          </p>

          {/* Artists Grid */}
          <div className="grid md:grid-cols-2 gap-12">
            {/* Artist 1 */}
            <div className="bg-black/30 p-8 rounded-xl border border-teal-900/30 backdrop-blur-sm">
              <div className="aspect-square rounded-lg overflow-hidden mb-6 relative">
                <Image
                  src="/artist1-placeholder.jpg"
                  alt="Artist Name"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <h2 className="text-2xl font-bold text-orange-400 mb-4">John Smith</h2>
              <p className="text-gray-300">Lead vocals and guitar. John&apos;s powerful voice and masterful guitar work have been the cornerstone of our sound since the beginning.</p>
            </div>

            {/* Artist 2 */}
            <div className="bg-black/30 p-8 rounded-xl border border-teal-900/30 backdrop-blur-sm">
              <div className="aspect-square rounded-lg overflow-hidden mb-6 relative">
                <Image
                  src="/artist2-placeholder.jpg"
                  alt="Artist Name"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <h2 className="text-2xl font-bold text-orange-400 mb-4">Sarah Johnson</h2>
              <p className="text-gray-300">Bass guitar and backing vocals. Sarah&apos;s groove and harmonies add depth and richness to our music.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 