'use client'

import Navigation from '../components/Navigation'
import { FaEnvelope, FaPhone } from 'react-icons/fa'

interface MilestoneProps {
  year: string
  title: string
  description: string
}

const milestones: MilestoneProps[] = [
  {
    year: "2020",
    title: "Band Formation",
    description: "25th Street Band was formed in the heart of New York City, bringing together talented musicians with diverse musical backgrounds."
  },
  {
    year: "2021",
    title: "First EP Release",
    description: "Released our debut EP 'City Lights' to critical acclaim, featuring our signature blend of rock and soul."
  },
  {
    year: "2022",
    title: "National Tour",
    description: "Embarked on our first national tour, performing at iconic venues across the country."
  },
  {
    year: "2023",
    title: "Album Release",
    description: "Released our first full-length album 'Manhattan Nights' and performed at major music festivals."
  }
]

function Milestone({ year, title, description }: MilestoneProps) {
  return (
    <div className="relative pl-8 pb-12 last:pb-0">
      {/* Timeline line */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-orange-500 to-teal-500" />
      {/* Timeline dot */}
      <div className="absolute left-[-4px] top-0 w-2 h-2 rounded-full bg-orange-500" />
      <div className="text-orange-400 font-medium mb-2">{year}</div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  )
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black to-teal-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-teal-400">
            About Us
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Discover the story behind 25th Street Band and our journey through music.
          </p>
        </div>
      </section>

      {/* Band Story */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-white">Our Story</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  Born in the vibrant streets of New York City, 25th Street Band emerged from a shared passion for creating music that moves people. Our journey began in 2020 when five musicians from different backgrounds came together with a common vision.
                </p>
                <p>
                  Drawing inspiration from the city's rich musical heritage and diverse cultural landscape, we've crafted a sound that's uniquely our own. Our music blends elements of rock, soul, and jazz, creating an experience that resonates with audiences across generations.
                </p>
              </div>
            </div>
            <div className="aspect-square rounded-lg overflow-hidden">
              <img
                src="/about-image.jpg"
                alt="25th Street Band Story"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-20 px-4 bg-black/30">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-white">Our Journey</h2>
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <Milestone key={index} {...milestone} />
            ))}
          </div>
        </div>
      </section>

      {/* Press Kit */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-white">Press Kit</h2>
          <p className="text-gray-300 mb-8">
            Download our press kit for high-resolution photos, band biography, and technical requirements.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-orange-500 to-teal-500 rounded-full text-white hover:from-orange-600 hover:to-teal-600 transition-all transform hover:scale-105"
          >
            Download Press Kit
          </a>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 px-4 bg-black/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12 text-white">Get in Touch</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 text-orange-400 mx-auto mb-4">
                <FaEnvelope />
              </div>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-gray-400">info@25thstreetband.com</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 text-orange-400 mx-auto mb-4">
                <FaPhone />
              </div>
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <p className="text-gray-400">+1 (555) 123-4567</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 