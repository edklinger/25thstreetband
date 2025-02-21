'use client'

import Navigation from '../components/Navigation'
import { FaInstagram, FaTwitter } from 'react-icons/fa'

interface ArtistProps {
  name: string
  role: string
  bio: string
  image: string
  instagram?: string
  twitter?: string
}

const artists: ArtistProps[] = [
  {
    name: "John Doe",
    role: "Lead Vocals & Guitar",
    bio: "With over 15 years of experience, John brings his unique vocal style and masterful guitar work to 25th Street Band. His influences range from classic rock to modern indie.",
    image: "/artist1-placeholder.jpg",
    instagram: "#",
    twitter: "#"
  },
  {
    name: "Jane Smith",
    role: "Bass & Backing Vocals",
    bio: "Jane's groove-heavy bass lines and smooth vocal harmonies form the backbone of our sound. She's been playing bass for 12 years and studied at Berklee.",
    image: "/artist2-placeholder.jpg",
    instagram: "#"
  },
  // Add more band members here
]

function ArtistCard({ name, role, bio, image, instagram, twitter }: ArtistProps) {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-orange-500/10 to-teal-500/10">
      <div className="aspect-[3/4] overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
          <h3 className="text-2xl font-bold text-white mb-2">{name}</h3>
          <p className="text-orange-400 font-medium mb-4">{role}</p>
          <p className="text-gray-300 text-sm mb-4">{bio}</p>
          <div className="flex gap-4">
            {instagram && (
              <a href={instagram} className="text-white hover:text-orange-400 transition-colors">
                <FaInstagram className="w-6 h-6" />
              </a>
            )}
            {twitter && (
              <a href={twitter} className="text-white hover:text-orange-400 transition-colors">
                <FaTwitter className="w-6 h-6" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function ArtistsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black to-teal-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-teal-400">
            Meet The Band
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Get to know the talented musicians behind 25th Street Band. Each member brings their unique style and expertise to create our signature sound.
          </p>
        </div>
      </section>

      {/* Artists Grid */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {artists.map((artist, index) => (
              <ArtistCard key={index} {...artist} />
            ))}
          </div>
        </div>
      </section>

      {/* Band Story */}
      <section className="py-20 px-4 bg-black/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-white">Our Story</h2>
          <p className="text-gray-300 mb-8">
            Founded in the heart of New York City, 25th Street Band came together through a shared passion for creating music that moves people. Our diverse backgrounds and influences create a unique sound that's distinctly our own.
          </p>
          <p className="text-gray-300">
            From small club gigs to major venues, we've grown together as musicians and as a family. Our music reflects the energy and diversity of the city we call home.
          </p>
        </div>
      </section>
    </main>
  )
} 