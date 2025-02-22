'use client'

import Navigation from '../components/Navigation'
import { FaTicketAlt, FaMapMarkerAlt, FaClock } from 'react-icons/fa'

interface ShowProps {
  date: string
  venue: string
  city: string
  time: string
  ticketLink: string
  isSoldOut?: boolean
}

const upcomingShows: ShowProps[] = [
  {
    date: "Mar 15, 2024",
    venue: "The Blue Note",
    city: "New York, NY",
    time: "8:00 PM",
    ticketLink: "#"
  },
  {
    date: "Mar 22, 2024",
    venue: "Brooklyn Bowl",
    city: "Brooklyn, NY",
    time: "9:00 PM",
    ticketLink: "#",
    isSoldOut: true
  },
  // Add more shows here
]

const pastShows: ShowProps[] = [
  {
    date: "Feb 14, 2024",
    venue: "Mercury Lounge",
    city: "New York, NY",
    time: "8:00 PM",
    ticketLink: "#"
  },
  // Add more past shows here
]

function ShowCard({ date, venue, city, time, ticketLink, isSoldOut }: ShowProps) {
  return (
    <div className="bg-black/30 rounded-xl p-6 backdrop-blur-sm">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-2">
          <div className="text-orange-400 font-medium">{date}</div>
          <h3 className="text-xl font-bold text-white">{venue}</h3>
          <div className="flex items-center gap-2 text-gray-300">
            <FaMapMarkerAlt className="text-orange-400" />
            {city}
          </div>
          <div className="flex items-center gap-2 text-gray-300">
            <FaClock className="text-orange-400" />
            {time}
          </div>
        </div>
        <div>
          <a
            href={ticketLink}
            className={`inline-flex items-center gap-2 px-6 py-3 rounded-full transition-all transform hover:scale-105 ${
              isSoldOut
                ? 'bg-gray-700 cursor-not-allowed'
                : 'bg-gradient-to-r from-orange-500 to-teal-500 hover:from-orange-600 hover:to-teal-600'
            }`}
          >
            <FaTicketAlt />
            <span>{isSoldOut ? 'Sold Out' : 'Get Tickets'}</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default function ShowsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black to-teal-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-teal-400">
            Live Shows
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Experience the energy of 25th Street Band live. Check out our upcoming shows and secure your tickets today.
          </p>
        </div>
      </section>

      {/* Upcoming Shows */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-white">Upcoming Shows</h2>
          <div className="space-y-6">
            {upcomingShows.map((show, index) => (
              <ShowCard key={index} {...show} />
            ))}
          </div>
        </div>
      </section>

      {/* Past Shows */}
      <section className="py-20 px-4 bg-black/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-white">Past Shows</h2>
          <div className="space-y-6">
            {pastShows.map((show, index) => (
              <ShowCard key={index} {...show} />
            ))}
          </div>
        </div>
      </section>

      {/* Tour Updates */}
      <section className="py-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-white">Stay Updated</h2>
          <p className="text-gray-300 mb-8">
            Don't miss out on our shows! Sign up for our newsletter to get tour updates and exclusive presale access.
          </p>
          <a
            href="/#newsletter"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-orange-500 to-teal-500 rounded-full text-white hover:from-orange-600 hover:to-teal-600 transition-all transform hover:scale-105"
          >
            Subscribe to Updates
          </a>
        </div>
      </section>

      {/* Additional Content */}
      <section className="py-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-white">We&apos;ll be back with more shows soon!</h2>
          <div className="text-gray-300">
            <p>We&apos;ll be back with more shows soon!</p>
            <p>Stay tuned for upcoming performances.</p>
          </div>
        </div>
      </section>
    </main>
  )
} 