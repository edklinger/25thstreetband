'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Navigation from './components/Navigation'
import './styles/flip-card.css'

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <main className={`min-h-screen bg-[#0A192F] transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ filter: 'brightness(1.1)' }}
          >
            <source src="/nyc-timelapse.mp4" type="video/mp4" />
          </video>
          {/* Overlay with lighter gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A192F]/10 via-[#0A192F]/20 to-[#0A192F]/90" />
        </div>
        
        {/* Content */}
        <div className="relative z-10 px-4 w-full">
          {/* Logo */}
          <div className="w-full max-w-4xl mx-auto">
            <Image
              src="/25th-long-logo-1@2x.jpg"
              alt="25th Street Band"
              width={800}
              height={200}
              className="w-full max-w-3xl mx-auto drop-shadow-[0_0_50px_rgba(212,160,23,0.4)]"
              priority
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSEkMjU1LS0yMi4qLjgyPjA+OjU1RUVHSkdKTEtMTEdGSEZLSEr/2wBDAR8XFx4eHR4kHR0kSjklJEpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkr/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
            />
          </div>
        </div>
      </section>

      {/* Genre Tagline */}
      <section className="py-12 bg-gradient-to-r from-[#0A192F] via-[#0A192F] to-[#0A192F] relative">
        <div className="absolute inset-0 bg-[#FF4500]/5 mix-blend-overlay" />
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 text-2xl font-semibold tracking-[0.2em] font-montserrat">
            <span className="text-[#11EBD3] drop-shadow-[0_0_15px_rgba(17,235,211,0.9)] hover:text-[#11EBD3]/90 transition-all duration-300">Jazz Funk</span>
            <span className="text-[#CCD6D7] hidden md:block opacity-50">•</span>
            <span className="text-[#11EBD3] drop-shadow-[0_0_15px_rgba(17,235,211,0.9)] hover:text-[#11EBD3]/90 transition-all duration-300">Jazz Soul</span>
            <span className="text-[#CCD6D7] hidden md:block opacity-50">•</span>
            <span className="text-[#11EBD3] drop-shadow-[0_0_15px_rgba(17,235,211,0.9)] hover:text-[#11EBD3]/90 transition-all duration-300">West Coast Jazz</span>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-8 px-4 bg-gradient-to-br from-[#0A192F] via-[#0A192F] to-[#0A192F] relative overflow-hidden">
        <div className="absolute inset-0 bg-[#FF4500]/5 mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#CD7F32]/5 via-transparent to-transparent" />
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-4xl font-montserrat font-bold mb-12 text-[#FFD700] drop-shadow-[0_0_15px_rgba(255,215,0,0.3)]">
            About us
          </h2>
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="space-y-6 flex-1">
              <p className="text-xl font-light text-[#CCD6D7] max-w-3xl leading-relaxed font-inter text-justify">
                The 25th Street Band is a global crossover jazz collaboration project, based in London UK and featuring guest artists from around the world.
              </p>
              <p className="text-xl font-light text-[#CCD6D7] max-w-3xl leading-relaxed font-inter text-justify">
                Band founders, Russ Klinger and Dave Radnor, worked with George Michael, and wrote a song for him which he performed with the band in the 1980&apos;s. More recent guests include Joey Kibble (Take 6), Mornington Lockett (sax), Hussain Jiffry (bass), Tom Brechtlein (drums) and Bill McBirnie (flute).
              </p>
              <p className="text-xl font-light text-[#CCD6D7] max-w-3xl leading-relaxed font-inter text-justify">
                The 25th Street Band has released two albums, numerous singles, and has been featured and interviewed on radio globally.
              </p>
              <p className="text-xl font-light text-[#CCD6D7] max-w-3xl leading-relaxed font-inter text-justify">
                Since 2014 Russ Klinger has been solo at the centre of the project, writing, playing and producing for the 25th Street Band.
              </p>
            </div>
            <div className="relative w-full md:w-[400px] h-[500px] rounded-xl overflow-hidden group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#D4A017] to-[#FF4500] rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
              <div className="relative h-full rounded-xl overflow-hidden border border-[#2C3E50]">
                <Image
                  src="/russ-klinger.jpeg"
                  alt="Russ Klinger"
                  width={500}
                  height={500}
                  style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                  className="transition-transform duration-500"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Music Section */}
      <section id="music" className="py-12 px-4 bg-gradient-to-bl from-[#0A192F] via-[#0A192F] to-[#0A192F] relative overflow-hidden">
        <div className="absolute inset-0 bg-[#FF4500]/3 mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-tl from-[#CD7F32]/5 via-transparent to-transparent" />
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-4xl font-montserrat font-bold mb-12 text-[#FFD700] drop-shadow-[0_0_15px_rgba(255,215,0,0.3)]">
            Our music
          </h2>

          {/* Players Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Featured Video */}
            <div className="flex flex-col h-full">
              <h3 className="text-2xl font-montserrat text-[#D4A017] mb-8 drop-shadow-[0_0_8px_rgba(212,160,23,0.3)]">Latest release:</h3>
              <div className="group relative flex-1">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#FF0000] to-[#CC0000] rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
                <div className="relative h-full flex flex-col bg-black p-6 rounded-xl border border-[#2C3E50]">
                  <div className="flex-1 rounded-xl overflow-hidden shadow-2xl mb-6">
                    <div className="relative w-full h-full min-h-[300px] bg-black">
                      <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/mLyFGeMuVjg?rel=0&showinfo=1&modestbranding=1"
                        title="25th Street Band - holding on to love"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="absolute inset-0 w-full h-full"
                      />
                    </div>
                  </div>
                  <a
                    href="https://www.youtube.com/@25thstreetband"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2 px-8 py-3 bg-gradient-to-r from-[#FF0000] to-[#CC0000] rounded-xl text-white font-medium hover:from-[#CC0000] hover:to-[#FF0000] transition-all transform hover:scale-[1.02] shadow-lg w-full mt-auto"
                  >
                    <svg viewBox="0 0 24 24" width="36" height="36" fill="currentColor">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Spotify Player */}
            <div className="flex flex-col h-full">
              <h3 className="text-2xl font-montserrat text-[#D4A017] mb-8 drop-shadow-[0_0_8px_rgba(212,160,23,0.3)]">Stream our music:</h3>
              <div className="group relative flex-1">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#1DB954] to-[#169C46] rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
                <div className="relative h-full flex flex-col bg-black p-6 rounded-xl border border-[#2C3E50]">
                  <div className="flex-1 rounded-xl overflow-hidden shadow-2xl mb-6">
                    <div className="relative w-full h-full min-h-[352px] bg-black">
                      <iframe
                        src="https://open.spotify.com/embed/artist/5ZOSFruOF37CZzX6iQi9tU?utm_source=generator&theme=0"
                        width="100%"
                        height="100%"
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        loading="lazy"
                        className="absolute inset-0 w-full h-full"
                      />
                    </div>
                  </div>
                  <a
                    href="https://open.spotify.com/artist/5ZOSFruOF37CZzX6iQi9tU"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2 px-8 py-3 bg-gradient-to-r from-[#1DB954] to-[#169C46] rounded-xl text-white font-medium hover:from-[#169C46] hover:to-[#1DB954] transition-all transform hover:scale-[1.02] shadow-lg w-full mt-auto"
                  >
                    <svg viewBox="0 0 24 24" width="36" height="36" fill="currentColor">
                      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Performers Section */}
      <section id="performers" className="py-24 px-4 bg-gradient-to-r from-[#0A192F] via-[#0A192F] to-[#0A192F] relative overflow-hidden">
        <div className="absolute inset-0 bg-[#FF4500]/4 mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-tr from-[#CD7F32]/5 via-transparent to-transparent" />
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-4xl font-montserrat font-bold mb-8 text-[#FFD700] drop-shadow-[0_0_15px_rgba(255,215,0,0.3)]">
            Our performers
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Joel Kibble */}
            <div className="group relative h-[400px] perspective-1000">
              <div className="absolute inset-0 preserve-3d">
                {/* Front */}
                <div className="absolute inset-0 w-full h-full backface-hidden">
                  <div className="relative h-full w-full rounded-xl overflow-hidden">
                    <Image
                      src="/joel-smile@2x.png"
                      alt="Joel Kibble"
                      width={400}
                      height={400}
                      style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                      className="transition-transform duration-500"
                      priority
                    />
                    {/* Name overlay on front */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                      <h3 className="text-xl font-montserrat text-[#D4A017] drop-shadow-[0_0_8px_rgba(212,160,23,0.3)]">
                        Joel Kibble
                      </h3>
                    </div>
                  </div>
                </div>
                {/* Back */}
                <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
                  <div className="h-full w-full bg-[#0A192F] border border-[#FFD700] rounded-xl p-6">
                    <h3 className="text-xl font-montserrat text-[#D4A017] mb-4 drop-shadow-[0_0_8px_rgba(212,160,23,0.3)]">
                      Joel Kibble
                    </h3>
                    <div className="space-y-2 text-[#CCD6D7] text-sm overflow-y-auto max-h-[300px] scrollbar-thin scrollbar-thumb-[#2C3E50] scrollbar-track-transparent text-justify">
                      <p>US based, Joey is a member of Take 6. The multi-platinum selling group has earned 10 Grammy&apos;s, 10 Dove Awards and a host of other honors.</p>
                      <p>The band has worked with Ray Charles, Nnenna Freelon, Gordon Goodwin, Don Henley, Whitney Houston, Al Jarreau, Quincy Jones, k.d. lang, Queen Latifah, The Manhattan Transfer, Brian McKnight, Luis Miguel, Marcus Miller, Joe Sample, Ben Tankard, and Stevie Wonder.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Josiah Ruff */}
            <div className="group relative h-[400px] perspective-1000">
              <div className="absolute inset-0 preserve-3d">
                {/* Front */}
                <div className="absolute inset-0 w-full h-full backface-hidden">
                  <div className="relative h-full w-full rounded-xl overflow-hidden">
                    <Image
                      src="/jos-final@2x.png"
                      alt="Josiah Ruff"
                      width={400}
                      height={400}
                      style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                      className="transition-transform duration-500"
                      priority
                    />
                    {/* Name overlay on front */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                      <h3 className="text-xl font-montserrat text-[#D4A017] drop-shadow-[0_0_8px_rgba(212,160,23,0.3)]">
                        Josiah Ruff
                      </h3>
                    </div>
                  </div>
                </div>
                {/* Back */}
                <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
                  <div className="h-full w-full bg-[#0A192F] border border-[#FFD700] rounded-xl p-6">
                    <h3 className="text-xl font-montserrat text-[#D4A017] mb-4 drop-shadow-[0_0_8px_rgba(212,160,23,0.3)]">
                      Josiah Ruff
                    </h3>
                    <div className="space-y-2 text-[#CCD6D7] text-sm overflow-y-auto max-h-[300px] scrollbar-thin scrollbar-thumb-[#2C3E50] scrollbar-track-transparent text-justify">
                      <p>Josiah started out as a gospel singer in California. These days he&apos;s broadened out his repertoire to NeoGospelPop and lives in Miami, Florida.</p>
                      <p>His lead vocals feature on several of the latest 25th Street Band tracks.</p>
                      <p>When Russ Klinger mentioned backing vocals, Josiah recommended and introduced his friend, Joel.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mornington Lockett */}
            <div className="group relative h-[400px] perspective-1000">
              <div className="absolute inset-0 preserve-3d">
                {/* Front */}
                <div className="absolute inset-0 w-full h-full backface-hidden">
                  <div className="relative h-full w-full rounded-xl overflow-hidden">
                    <Image
                      src="/mornington-final@2x.png"
                      alt="Mornington Lockett"
                      width={400}
                      height={400}
                      style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                      className="transition-transform duration-500"
                      priority
                    />
                    {/* Name overlay on front */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                      <h3 className="text-xl font-montserrat text-[#D4A017] drop-shadow-[0_0_8px_rgba(212,160,23,0.3)]">
                        Mornington Lockett
                      </h3>
                    </div>
                  </div>
                </div>
                {/* Back */}
                <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
                  <div className="h-full w-full bg-[#0A192F] border border-[#FFD700] rounded-xl p-6">
                    <h3 className="text-xl font-montserrat text-[#D4A017] mb-4 drop-shadow-[0_0_8px_rgba(212,160,23,0.3)]">
                      Mornington Lockett
                    </h3>
                    <div className="space-y-2 text-[#CCD6D7] text-sm overflow-y-auto max-h-[300px] scrollbar-thin scrollbar-thumb-[#2C3E50] scrollbar-track-transparent text-justify">
                      <p>Based in the UK, Mornington is has recorded with a wide variety of artists, including Ronnie Scott, Jim Mullen, Stan Tracey, Don Grusin, Martin Drew, Claire Martin, Arturo Sandoval, Jimmy Smith, Sarah Jane Morris and Ian Shaw and Oasis.</p>
                      <p>He has also toured with Oscar Peterson&apos;s rhythm section, drummer Martin Drew, bassist Niels Henning Ørsted Pedersen and guitarist Ulf Wakenius.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Hussain Jiffry */}
            <div className="group relative h-[400px] perspective-1000">
              <div className="absolute inset-0 preserve-3d">
                {/* Front */}
                <div className="absolute inset-0 w-full h-full backface-hidden">
                  <div className="relative h-full w-full rounded-xl overflow-hidden">
                    <Image
                      src="/hus-live-good@2x.png"
                      alt="Hussain Jiffry"
                      width={400}
                      height={400}
                      style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                      className="transition-transform duration-500"
                      priority
                    />
                    {/* Name overlay on front */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                      <h3 className="text-xl font-montserrat text-[#D4A017] drop-shadow-[0_0_8px_rgba(212,160,23,0.3)]">
                        Hussain Jiffry
                      </h3>
                    </div>
                  </div>
                </div>
                {/* Back */}
                <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
                  <div className="h-full w-full bg-[#0A192F] border border-[#FFD700] rounded-xl p-6">
                    <h3 className="text-xl font-montserrat text-[#D4A017] mb-4 drop-shadow-[0_0_8px_rgba(212,160,23,0.3)]">
                      Hussain Jiffry
                    </h3>
                    <div className="space-y-2 text-[#CCD6D7] text-sm overflow-y-auto max-h-[300px] scrollbar-thin scrollbar-thumb-[#2C3E50] scrollbar-track-transparent text-justify">
                      <p>Originally from Sri Lanka and now based in L.A, Hussain&apos;s list of credits includes Tom Scott, Michael Bolton, Deneice Williams, Hellen Reddy, Petula Clark, Kenny Kirkland, David Foster, Michael McDonald, Russell Ferrante, Dione Warwick, Captain and Tennille, Chaka Khan, Crystal Gayle, Jack Jones, The Four Tops, Dave Weckl band, Gloria Gaynor, Steve Winwood, Whitney Houston, Tito Puente, Carol King, and Christopher Cross.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tom Brechtlein */}
            <div className="group relative h-[400px] perspective-1000">
              <div className="absolute inset-0 preserve-3d">
                {/* Front */}
                <div className="absolute inset-0 w-full h-full backface-hidden">
                  <div className="relative h-full w-full rounded-xl overflow-hidden">
                    <Image
                      src="/tom-wild@2x.png"
                      alt="Tom Brechtlein"
                      width={400}
                      height={400}
                      style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                      className="transition-transform duration-500"
                      priority
                    />
                    {/* Name overlay on front */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                      <h3 className="text-xl font-montserrat text-[#D4A017] drop-shadow-[0_0_8px_rgba(212,160,23,0.3)]">
                        Tom Brechtlein
                      </h3>
                    </div>
                  </div>
                </div>
                {/* Back */}
                <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
                  <div className="h-full w-full bg-[#0A192F] border border-[#FFD700] rounded-xl p-6">
                    <h3 className="text-xl font-montserrat text-[#D4A017] mb-4 drop-shadow-[0_0_8px_rgba(212,160,23,0.3)]">
                      Tom Brechtlein
                    </h3>
                    <div className="space-y-2 text-[#CCD6D7] text-sm overflow-y-auto max-h-[300px] scrollbar-thin scrollbar-thumb-[#2C3E50] scrollbar-track-transparent text-justify">
                      <p>Tom is based in L.A. He has toured and recorded with Robben Ford, Chick Corea, Christopher Cross, Wayne Shorter, Jean-Luc Ponty, Dave Samuels, Eric Johnson and Joe Farrell among others.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bill McBirnie */}
            <div className="group relative h-[400px] perspective-1000">
              <div className="absolute inset-0 preserve-3d">
                {/* Front */}
                <div className="absolute inset-0 w-full h-full backface-hidden">
                  <div className="relative h-full w-full rounded-xl overflow-hidden">
                    <Image
                      src="/bill-final@2x.png"
                      alt="Bill McBirnie"
                      width={400}
                      height={400}
                      style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                      className="transition-transform duration-500"
                      priority
                    />
                    {/* Name overlay on front */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                      <h3 className="text-xl font-montserrat text-[#D4A017] drop-shadow-[0_0_8px_rgba(212,160,23,0.3)]">
                        Bill McBirnie
                      </h3>
                    </div>
                  </div>
                </div>
                {/* Back */}
                <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
                  <div className="h-full w-full bg-[#0A192F] border border-[#FFD700] rounded-xl p-6">
                    <h3 className="text-xl font-montserrat text-[#D4A017] mb-4 drop-shadow-[0_0_8px_rgba(212,160,23,0.3)]">
                      Bill McBirnie
                    </h3>
                    <div className="space-y-2 text-[#CCD6D7] text-sm overflow-y-auto max-h-[300px] scrollbar-thin scrollbar-thumb-[#2C3E50] scrollbar-track-transparent text-justify">
                      <p>Based in Toronto Bill has worked with Junior Mance, Irakere, Memo Acevedo and Emilie-Claire Barlow. He is also resident Jazz Flute Specialist at Sir James Galway&apos;s official web site.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Jandira Silva */}
            <div className="group relative h-[400px] perspective-1000">
              <div className="absolute inset-0 preserve-3d">
                {/* Front */}
                <div className="absolute inset-0 w-full h-full backface-hidden">
                  <div className="relative h-full w-full rounded-xl overflow-hidden">
                    <Image
                      src="/jandira-wide@2x.png"
                      alt="Jandira Silva"
                      width={400}
                      height={400}
                      style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                      className="transition-transform duration-500"
                      priority
                    />
                    {/* Name overlay on front */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                      <h3 className="text-xl font-montserrat text-[#D4A017] drop-shadow-[0_0_8px_rgba(212,160,23,0.3)]">
                        Jandira Silva
                      </h3>
                    </div>
                  </div>
                </div>
                {/* Back */}
                <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
                  <div className="h-full w-full bg-[#0A192F] border border-[#FFD700] rounded-xl p-6">
                    <h3 className="text-xl font-montserrat text-[#D4A017] mb-4 drop-shadow-[0_0_8px_rgba(212,160,23,0.3)]">
                      Jandira Silva
                    </h3>
                    <div className="space-y-2 text-[#CCD6D7] text-sm overflow-y-auto max-h-[300px] scrollbar-thin scrollbar-thumb-[#2C3E50] scrollbar-track-transparent text-justify">
                      <p>Originally from Rio de Janeiro, Jandira sang with the José Cabeleira band on Portuguese TV before moving to London where she had her own Brazilian/Jazz crossover band.</p>
                      <p>Nowadays she&apos;s based in Macau.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Ann Bailey */}
            <div className="group relative h-[400px] perspective-1000">
              <div className="absolute inset-0 preserve-3d">
                {/* Front */}
                <div className="absolute inset-0 w-full h-full backface-hidden">
                  <div className="relative h-full w-full rounded-xl overflow-hidden">
                    <Image
                      src="/ann-gesture.png"
                      alt="Ann Bailey"
                      width={400}
                      height={400}
                      style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                      className="transition-transform duration-500"
                      priority
                    />
                    {/* Name overlay on front */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                      <h3 className="text-xl font-montserrat text-[#D4A017] drop-shadow-[0_0_8px_rgba(212,160,23,0.3)]">
                        Ann Bailey
                      </h3>
                    </div>
                  </div>
                </div>
                {/* Back */}
                <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
                  <div className="h-full w-full bg-[#0A192F] border border-[#FFD700] rounded-xl p-6">
                    <h3 className="text-xl font-montserrat text-[#D4A017] mb-4 drop-shadow-[0_0_8px_rgba(212,160,23,0.3)]">
                      Ann Bailey
                    </h3>
                    <div className="space-y-2 text-[#CCD6D7] text-sm overflow-y-auto max-h-[300px] scrollbar-thin scrollbar-thumb-[#2C3E50] scrollbar-track-transparent text-justify">
                      <p>Based in the UK, Anne is originally from the USA.</p>
                      <p>She was a Gospel and RnB session/backing singer in Nashville and fronted her own band in L.A, where she worked with Donna Summer.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* David Bitelli */}
            <div className="group relative h-[400px] perspective-1000">
              <div className="absolute inset-0 preserve-3d">
                {/* Front */}
                <div className="absolute inset-0 w-full h-full backface-hidden">
                  <div className="relative h-full w-full rounded-xl overflow-hidden">
                    <Image
                      src="/bitelli-final@2x.png"
                      alt="David Bitelli"
                      width={400}
                      height={400}
                      style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                      className="transition-transform duration-500"
                      priority
                    />
                    {/* Name overlay on front */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                      <h3 className="text-xl font-montserrat text-[#D4A017] drop-shadow-[0_0_8px_rgba(212,160,23,0.3)]">
                        David Bitelli
                      </h3>
                    </div>
                  </div>
                </div>
                {/* Back */}
                <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
                  <div className="h-full w-full bg-[#0A192F] border border-[#FFD700] rounded-xl p-6">
                    <h3 className="text-xl font-montserrat text-[#D4A017] mb-4 drop-shadow-[0_0_8px_rgba(212,160,23,0.3)]">
                      David Bitelli
                    </h3>
                    <div className="space-y-2 text-[#CCD6D7] text-sm overflow-y-auto max-h-[300px] scrollbar-thin scrollbar-thumb-[#2C3E50] scrollbar-track-transparent text-justify">
                      <p>London Based Bitelli&apos;s sax and clarinet credits include; Airto Moreira, Dudu Pukwana, Jimmy Witherspoon, Elton John, Joan Armatrading, Joe Jackson, REM, Wham, Robert Cray, Loose Tubes and many more.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Henry Armburg-Jennings */}
            <div className="group relative h-[400px] perspective-1000">
              <div className="absolute inset-0 preserve-3d">
                {/* Front */}
                <div className="absolute inset-0 w-full h-full backface-hidden">
                  <div className="relative h-full w-full rounded-xl overflow-hidden">
                    <Image
                      src="/henry-final.png"
                      alt="Henry Armburg-Jennings"
                      width={400}
                      height={400}
                      style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                      className="transition-transform duration-500"
                      priority
                    />
                    {/* Name overlay on front */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                      <h3 className="text-xl font-montserrat text-[#D4A017] drop-shadow-[0_0_8px_rgba(212,160,23,0.3)]">
                        Henry Armburg-Jennings
                      </h3>
                    </div>
                  </div>
                </div>
                {/* Back */}
                <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
                  <div className="h-full w-full bg-[#0A192F] border border-[#FFD700] rounded-xl p-6">
                    <h3 className="text-xl font-montserrat text-[#D4A017] mb-4 drop-shadow-[0_0_8px_rgba(212,160,23,0.3)]">
                      Henry Armburg-Jennings
                    </h3>
                    <div className="space-y-2 text-[#CCD6D7] text-sm overflow-y-auto max-h-[300px] scrollbar-thin scrollbar-thumb-[#2C3E50] scrollbar-track-transparent text-justify">
                      <p>Based in the UK, Henry has worked with Stan Tracy, Peter King and Martin Drew. He&apos;s also had his own jazz quartet and been member of the National Youth Jazz Orchestra.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Ollie James */}
            <div className="group relative h-[400px] perspective-1000">
              <div className="absolute inset-0 preserve-3d">
                {/* Front */}
                <div className="absolute inset-0 w-full h-full backface-hidden">
                  <div className="relative h-full w-full rounded-xl overflow-hidden">
                    <Image
                      src="/ollie-car.png"
                      alt="Ollie James"
                      width={400}
                      height={400}
                      style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                      className="transition-transform duration-500"
                      priority
                    />
                    {/* Name overlay on front */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                      <h3 className="text-xl font-montserrat text-[#D4A017] drop-shadow-[0_0_8px_rgba(212,160,23,0.3)]">
                        Ollie James
                      </h3>
                    </div>
                  </div>
                </div>
                {/* Back */}
                <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
                  <div className="h-full w-full bg-[#0A192F] border border-[#FFD700] rounded-xl p-6">
                    <h3 className="text-xl font-montserrat text-[#D4A017] mb-4 drop-shadow-[0_0_8px_rgba(212,160,23,0.3)]">
                      Ollie James
                    </h3>
                    <div className="space-y-2 text-[#CCD6D7] text-sm overflow-y-auto max-h-[300px] scrollbar-thin scrollbar-thumb-[#2C3E50] scrollbar-track-transparent text-justify">
                      <p>UK based, Ollie has had several UK and European chart hits with Axwell, Steve Angelo and Armand Van Helden.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Linley Hamilton */}
            <div className="group relative h-[400px] perspective-1000">
              <div className="absolute inset-0 preserve-3d">
                {/* Front */}
                <div className="absolute inset-0 w-full h-full backface-hidden">
                  <div className="relative h-full w-full rounded-xl overflow-hidden">
                    <Image
                      src="/linley-final-1@2x.png"
                      alt="Linley Hamilton"
                      width={400}
                      height={400}
                      style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                      className="transition-transform duration-500"
                      priority
                    />
                    {/* Name overlay on front */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                      <h3 className="text-xl font-montserrat text-[#D4A017] drop-shadow-[0_0_8px_rgba(212,160,23,0.3)]">
                        Linley Hamilton
                      </h3>
                    </div>
                  </div>
                </div>
                {/* Back */}
                <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
                  <div className="h-full w-full bg-[#0A192F] border border-[#FFD700] rounded-xl p-6">
                    <h3 className="text-xl font-montserrat text-[#D4A017] mb-4 drop-shadow-[0_0_8px_rgba(212,160,23,0.3)]">
                      Linley Hamilton
                    </h3>
                    <div className="space-y-2 text-[#CCD6D7] text-sm overflow-y-auto max-h-[300px] scrollbar-thin scrollbar-thumb-[#2C3E50] scrollbar-track-transparent text-justify">
                      <p>Based in Northern Ireland, Linley&apos;s credits include sessions with Van Morrison.</p>
                      <p>He has his own jazz quartet and presents a BBC jazz radio show.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Notable Collaborations */}
          <div className="mt-16">
            <h3 className="text-2xl font-montserrat text-[#CCD6D7] mb-8">Between us we&apos;ve worked with...</h3>
            <p className="text-lg font-light text-[#CCD6D7] max-w-4xl leading-relaxed tracking-wide font-inter text-justify">
              Whitney Houston, Stevie Wonder, Ray Charles, Quincy Jones, Manhattan Transfer, Marcus Miller, Joe Sample, Take 6, Chick Corea, Robben Ford, Ronnie Scott, Chaka Khan, Sergio Mendez, Herb Alpert, Donna Summer, Elton John, George Michael, Gloria Gaynor, Mike McDonald and many more.
            </p>
          </div>
        </div>
      </section>

      {/* Social Links */}
      <section className="py-24 px-4 bg-gradient-to-br from-[#0A192F] via-[#0A192F] to-[#0A192F] relative overflow-hidden">
        <div className="absolute inset-0 bg-[#FF4500]/3 mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#CD7F32]/5 via-transparent to-transparent" />
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-4xl font-montserrat font-bold mb-12 text-[#FFD700] drop-shadow-[0_0_15px_rgba(255,215,0,0.3)]">
            Connect with us
          </h2>
          <div className="flex flex-col space-y-8">
            <div className="flex gap-8">
              <a 
                href="https://www.youtube.com/@25thstreetband" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-4xl text-[#CCD6D7] hover:text-[#FF4500] transition-all transform hover:scale-110 drop-shadow-[0_0_8px_rgba(255,69,0,0)]"
              >
                <svg viewBox="0 0 24 24" width="36" height="36" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a 
                href="https://open.spotify.com/artist/5ZOSFruOF37CZzX6iQi9tU" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-4xl text-[#CCD6D7] hover:text-[#FF4500] transition-all transform hover:scale-110"
              >
                <svg viewBox="0 0 24 24" width="36" height="36" fill="currentColor">
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                </svg>
              </a>
              <a 
                href="https://instagram.com/25thstreetband" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-4xl text-[#CCD6D7] hover:text-[#FF4500] transition-colors"
              >
                <svg viewBox="0 0 24 24" width="36" height="36" fill="currentColor">
                  <path d="M16.98 0a6.9 6.9 0 0 1 5.08 1.98A6.94 6.94 0 0 1 24 7.02v9.96c0 2.08-.68 3.87-1.98 5.13A7.14 7.14 0 0 1 16.94 24H7.06a7.06 7.06 0 0 1-5.03-1.89A6.96 6.96 0 0 1 0 16.94V7.02C0 2.8 2.8 0 7.02 0h9.96zm.05 2.23H7.06c-1.45 0-2.7.43-3.53 1.25a4.82 4.82 0 0 0-1.3 3.54v9.92c0 1.5.43 2.7 1.3 3.58a5 5 0 0 0 3.53 1.25h9.88a5 5 0 0 0 3.53-1.25 4.73 4.73 0 0 0 1.4-3.54V7.02a5 5 0 0 0-1.3-3.49 4.82 4.82 0 0 0-3.54-1.3zM12 5.76c3.39 0 6.2 2.8 6.2 6.2a6.2 6.2 0 0 1-12.4 0 6.2 6.2 0 0 1 6.2-6.2zm0 2.22a3.99 3.99 0 0 0-3.97 3.97A3.99 3.99 0 0 0 12 15.92a3.99 3.99 0 0 0 3.97-3.97A3.99 3.99 0 0 0 12 7.98zm6.44-3.77a1.4 1.4 0 1 1 0 2.8 1.4 1.4 0 0 1 0-2.8z" />
                </svg>
              </a>
              <a 
                href="https://www.facebook.com/profile.php?id=100063657336530" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-4xl text-[#CCD6D7] hover:text-[#FF4500] transition-all transform hover:scale-110"
              >
                <svg viewBox="0 0 24 24" width="36" height="36" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.4-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
            <a 
              href="mailto:info@25thstreetband.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-xl text-[#CCD6D7] hover:text-[#FF4500] transition-colors font-inter"
            >
              info@25thstreetband.com
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

