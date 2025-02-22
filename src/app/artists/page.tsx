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
                  src="/russ klinger.jpeg"
                  alt="Russ Klinger"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <h2 className="text-2xl font-bold text-orange-400 mb-4">Russ Klinger</h2>
              <p className="text-gray-300">Band founder, writer, and producer. Russ has been at the center of the 25th Street Band project since 2014, collaborating with talented artists from around the world.</p>
            </div>

            {/* Artist 2 */}
            <div className="bg-black/30 p-8 rounded-xl border border-teal-900/30 backdrop-blur-sm">
              <div className="aspect-square rounded-lg overflow-hidden mb-6 relative">
                <Image
                  src="/new york dark.jpg"
                  alt="New York City"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <h2 className="text-2xl font-bold text-orange-400 mb-4">Guest Artists</h2>
              <p className="text-gray-300">The 25th Street Band features a rotating cast of world-class musicians, each bringing their unique style and expertise to our collaborative projects.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 