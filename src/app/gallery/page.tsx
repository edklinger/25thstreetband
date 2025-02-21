'use client'

import { useState } from 'react'
import Navigation from '../components/Navigation'
import { FaPlay, FaTimes } from 'react-icons/fa'

interface PhotoProps {
  src: string
  alt: string
  category: 'live' | 'backstage' | 'studio'
}

interface VideoProps {
  thumbnail: string
  title: string
  youtubeId: string
}

const photos: PhotoProps[] = [
  {
    src: "/gallery/photo1.jpg",
    alt: "Live at Blue Note",
    category: "live"
  },
  {
    src: "/gallery/photo2.jpg",
    alt: "Studio Session",
    category: "studio"
  },
  // Add more photos here
]

const videos: VideoProps[] = [
  {
    thumbnail: "/gallery/video1-thumb.jpg",
    title: "Live at Brooklyn Bowl - Full Set",
    youtubeId: "PLACEHOLDER1"
  },
  {
    thumbnail: "/gallery/video2-thumb.jpg",
    title: "Behind the Scenes - Studio Session",
    youtubeId: "PLACEHOLDER2"
  },
  // Add more videos here
]

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'live' | 'backstage' | 'studio'>('all')
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null)

  const filteredPhotos = selectedCategory === 'all'
    ? photos
    : photos.filter(photo => photo.category === selectedCategory)

  return (
    <main className="min-h-screen bg-gradient-to-b from-black to-teal-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-teal-400">
            Gallery
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Explore our collection of photos and videos from live performances, studio sessions, and behind-the-scenes moments.
          </p>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center gap-4 mb-12">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-6 py-2 rounded-full transition-all ${
                selectedCategory === 'all'
                  ? 'bg-gradient-to-r from-orange-500 to-teal-500 text-white'
                  : 'bg-black/30 text-gray-300 hover:text-white'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setSelectedCategory('live')}
              className={`px-6 py-2 rounded-full transition-all ${
                selectedCategory === 'live'
                  ? 'bg-gradient-to-r from-orange-500 to-teal-500 text-white'
                  : 'bg-black/30 text-gray-300 hover:text-white'
              }`}
            >
              Live Shows
            </button>
            <button
              onClick={() => setSelectedCategory('studio')}
              className={`px-6 py-2 rounded-full transition-all ${
                selectedCategory === 'studio'
                  ? 'bg-gradient-to-r from-orange-500 to-teal-500 text-white'
                  : 'bg-black/30 text-gray-300 hover:text-white'
              }`}
            >
              Studio
            </button>
            <button
              onClick={() => setSelectedCategory('backstage')}
              className={`px-6 py-2 rounded-full transition-all ${
                selectedCategory === 'backstage'
                  ? 'bg-gradient-to-r from-orange-500 to-teal-500 text-white'
                  : 'bg-black/30 text-gray-300 hover:text-white'
              }`}
            >
              Backstage
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredPhotos.map((photo, index) => (
              <div
                key={index}
                className="aspect-square rounded-lg overflow-hidden group cursor-pointer"
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Gallery */}
      <section className="py-20 px-4 bg-black/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-white">Videos</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {videos.map((video, index) => (
              <div
                key={index}
                className="group cursor-pointer"
                onClick={() => setSelectedVideo(video.youtubeId)}
              >
                <div className="aspect-video rounded-lg overflow-hidden relative">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <FaPlay className="w-12 h-12 text-white" />
                  </div>
                </div>
                <h3 className="text-white font-medium mt-4">{video.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <button
            onClick={() => setSelectedVideo(null)}
            className="absolute top-4 right-4 text-white hover:text-orange-400 transition-colors"
          >
            <FaTimes className="w-8 h-8" />
          </button>
          <div className="w-full max-w-4xl aspect-video">
            <iframe
              className="w-full h-full rounded-lg"
              src={`https://www.youtube.com/embed/${selectedVideo}`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </main>
  )
} 