'use client'

import { useState, useEffect } from 'react'
import { FaYoutube, FaSpotify, FaInstagram, FaFacebook } from 'react-icons/fa'
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
        {/* NYC Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/new-york-dark.jpg"
            alt="New York City Dark"
            fill
            style={{ objectFit: 'cover' }}
            className="absolute inset-0 w-full h-full"
            priority
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A192F]/50 via-transparent to-[#0A192F]" />
        </div>
        
        {/* Content */}
        <div className="relative z-10 px-4 w-full">
          {/* Logo */}
          <div className="w-full max-w-4xl mx-auto">
            <Image
              src="/25th-street-logo.jpg"
              alt="25th Street Band"
              width={800}
              height={200}
              className="w-full max-w-3xl mx-auto drop-shadow-[0_0_25px_rgba(212,160,23,0.2)]"
              priority
            />
          </div>
        </div>
      </section>

      {/* Genre Tagline */}
      <section className="py-12 bg-gradient-to-r from-[#0A192F] via-[#1B263B] to-[#0A192F] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/skyline.svg')] bg-repeat-x bg-bottom opacity-5" />
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 text-xl font-light tracking-[0.2em] font-montserrat">
            <span className="text-[#D4A017] drop-shadow-[0_0_8px_rgba(212,160,23,0.3)]">Jazz Funk</span>
            <span className="text-[#95A5A6] hidden md:block">•</span>
            <span className="text-[#D4A017] drop-shadow-[0_0_8px_rgba(212,160,23,0.3)]">Jazz Soul</span>
            <span className="text-[#95A5A6] hidden md:block">•</span>
            <span className="text-[#D4A017] drop-shadow-[0_0_8px_rgba(212,160,23,0.3)]">West Coast Jazz</span>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-8 px-4 bg-[#0A192F] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/skyline.svg')] bg-repeat-x bg-bottom opacity-5" />
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-4xl font-montserrat font-bold mb-12 text-[#D4A017] drop-shadow-[0_0_12px_rgba(212,160,23,0.3)]">
            About us
          </h2>
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="space-y-6 flex-1">
              <p className="text-xl font-light text-[#95A5A6] max-w-3xl leading-relaxed font-inter">
                The 25th Street Band is a global crossover jazz collaboration project, based in London UK and featuring guest artists from around the world.
              </p>
              <p className="text-xl font-light text-[#95A5A6] max-w-3xl leading-relaxed font-inter">
                Band founders, Russ Klinger and Dave Radnor, worked with George Michael, and wrote a song for him which he performed with the band in the 1980&apos;s. More recent guests include Joey Kibble (Take 6), Mornington Lockett (sax), Hussain Jiffry (bass), Tom Brechtlein (drums) and Bill McBirnie (flute).
              </p>
              <p className="text-xl font-light text-[#95A5A6] max-w-3xl leading-relaxed font-inter">
                The 25th Street Band has released two albums, numerous singles, and has been featured and interviewed on radio globally.
              </p>
              <p className="text-xl font-light text-[#95A5A6] max-w-3xl leading-relaxed font-inter">
                Since 2014 Russ Klinger has been solo at the centre of the project, writing, playing and producing for the 25th Street Band.
              </p>
            </div>
            <div className="relative w-full md:w-[400px] h-[500px] rounded-xl overflow-hidden group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#D4A017] to-[#FF4500] rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
              <div className="relative h-full rounded-xl overflow-hidden border border-[#2C3E50]">
                <Image
                  src="/russ-klinger.jpeg"
                  alt="Russ Klinger"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Music Section */}
      <section id="music" className="py-12 px-4 bg-[#0A192F] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/skyline.svg')] bg-repeat-x bg-bottom opacity-5" />
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-4xl font-montserrat font-bold mb-12 text-[#D4A017] drop-shadow-[0_0_12px_rgba(212,160,23,0.3)]">
            Our music
          </h2>

          {/* Players Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Featured Video */}
            <div className="flex flex-col h-full">
              <h3 className="text-2xl font-montserrat text-[#D4A017] mb-8 drop-shadow-[0_0_8px_rgba(212,160,23,0.3)]">Latest release</h3>
              <div className="group relative flex-1">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#FF0000] to-[#CC0000] rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
                <div className="relative h-full flex flex-col bg-[#0A192F] p-6 rounded-xl border border-[#2C3E50]">
                  <div className="flex-1 rounded-xl overflow-hidden shadow-2xl mb-6">
                    <div className="relative w-full h-full min-h-[300px]">
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
                    <FaYoutube className="text-2xl" />
                    <span>Subscribe on YouTube</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Spotify Player */}
            <div className="flex flex-col h-full">
              <h3 className="text-2xl font-montserrat text-[#D4A017] mb-8 drop-shadow-[0_0_8px_rgba(212,160,23,0.3)]">Stream our music</h3>
              <div className="group relative flex-1">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#1DB954] to-[#169C46] rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
                <div className="relative h-full flex flex-col bg-[#0A192F] p-6 rounded-xl border border-[#2C3E50]">
                  <div className="flex-1 rounded-xl overflow-hidden shadow-2xl mb-6">
                    <div className="relative w-full h-full min-h-[352px]">
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
                    <FaSpotify className="text-2xl" />
                    <span>Follow on Spotify</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Performers Section */}
      <section id="performers" className="py-24 px-4 bg-gradient-to-b from-[#0A192F] via-[#1B263B] to-[#0A192F] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/skyline.svg')] bg-repeat-x bg-bottom opacity-5" />
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-4xl font-montserrat font-bold mb-8 text-[#D4A017] drop-shadow-[0_0_12px_rgba(212,160,23,0.3)]">
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
                      fill
                      style={{ objectFit: 'cover' }}
                      className="transition-transform duration-500"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0A192F] p-4">
                      <h3 className="text-xl font-montserrat text-[#D4A017] drop-shadow-[0_0_8px_rgba(212,160,23,0.3)]">
                        Joel Kibble
                      </h3>
                    </div>
                  </div>
                </div>
                {/* Back */}
                <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
                  <div className="h-full w-full bg-[#0A192F] border border-[#2C3E50] rounded-xl p-6">
                    <h3 className="text-xl font-montserrat text-[#D4A017] mb-4 drop-shadow-[0_0_8px_rgba(212,160,23,0.3)]">
                      Joel Kibble
                    </h3>
                    <div className="space-y-2 text-[#95A5A6] text-sm overflow-y-auto max-h-[300px] scrollbar-thin scrollbar-thumb-[#2C3E50] scrollbar-track-transparent">
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
                      fill
                      style={{ objectFit: 'cover' }}
                      className="transition-transform duration-500"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0A192F] p-4">
                      <h3 className="text-xl font-montserrat text-[#D4A017] drop-shadow-[0_0_8px_rgba(212,160,23,0.3)]">
                        Josiah Ruff
                      </h3>
                    </div>
                  </div>
                </div>
                {/* Back */}
                <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
                  <div className="h-full w-full bg-[#0A192F] border border-[#2C3E50] rounded-xl p-6">
                    <h3 className="text-xl font-montserrat text-[#D4A017] mb-4 drop-shadow-[0_0_8px_rgba(212,160,23,0.3)]">
                      Josiah Ruff
                    </h3>
                    <div className="space-y-2 text-[#95A5A6] text-sm overflow-y-auto max-h-[300px] scrollbar-thin scrollbar-thumb-[#2C3E50] scrollbar-track-transparent">
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
                      fill
                      style={{ objectFit: 'cover' }}
                      className="transition-transform duration-500"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0A192F] p-4">
                      <h3 className="text-xl font-montserrat text-[#D4A017] drop-shadow-[0_0_8px_rgba(212,160,23,0.3)]">
                        Mornington Lockett
                      </h3>
                    </div>
                  </div>
                </div>
                {/* Back */}
                <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
                  <div className="h-full w-full bg-[#0A192F] border border-[#2C3E50] rounded-xl p-6">
                    <h3 className="text-xl font-montserrat text-[#D4A017] mb-4 drop-shadow-[0_0_8px_rgba(212,160,23,0.3)]">
                      Mornington Lockett
                    </h3>
                    <div className="space-y-2 text-[#95A5A6] text-sm overflow-y-auto max-h-[300px] scrollbar-thin scrollbar-thumb-[#2C3E50] scrollbar-track-transparent">
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
                      fill
                      style={{ objectFit: 'cover' }}
                      className="transition-transform duration-500"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0A192F] p-4">
                      <h3 className="text-xl font-montserrat text-[#D4A017] drop-shadow-[0_0_8px_rgba(212,160,23,0.3)]">
                        Hussain Jiffry
                      </h3>
                    </div>
                  </div>
                </div>
                {/* Back */}
                <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
                  <div className="h-full w-full bg-[#0A192F] border border-[#2C3E50] rounded-xl p-6">
                    <h3 className="text-xl font-montserrat text-[#D4A017] mb-4 drop-shadow-[0_0_8px_rgba(212,160,23,0.3)]">
                      Hussain Jiffry
                    </h3>
                    <div className="space-y-2 text-[#95A5A6] text-sm overflow-y-auto max-h-[300px] scrollbar-thin scrollbar-thumb-[#2C3E50] scrollbar-track-transparent">
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
                      fill
                      style={{ objectFit: 'cover' }}
                      className="transition-transform duration-500"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0A192F] p-4">
                      <h3 className="text-xl font-montserrat text-[#D4A017] drop-shadow-[0_0_8px_rgba(212,160,23,0.3)]">
                        Tom Brechtlein
                      </h3>
                    </div>
                  </div>
                </div>
                {/* Back */}
                <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
                  <div className="h-full w-full bg-[#0A192F] border border-[#2C3E50] rounded-xl p-6">
                    <h3 className="text-xl font-montserrat text-[#D4A017] mb-4 drop-shadow-[0_0_8px_rgba(212,160,23,0.3)]">
                      Tom Brechtlein
                    </h3>
                    <div className="space-y-2 text-[#95A5A6] text-sm overflow-y-auto max-h-[300px] scrollbar-thin scrollbar-thumb-[#2C3E50] scrollbar-track-transparent">
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
                      fill
                      style={{ objectFit: 'cover' }}
                      className="transition-transform duration-500"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0A192F] p-4">
                      <h3 className="text-xl font-montserrat text-[#D4A017] drop-shadow-[0_0_8px_rgba(212,160,23,0.3)]">
                        Bill McBirnie
                      </h3>
                    </div>
                  </div>
                </div>
                {/* Back */}
                <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
                  <div className="h-full w-full bg-[#0A192F] border border-[#2C3E50] rounded-xl p-6">
                    <h3 className="text-xl font-montserrat text-[#D4A017] mb-4 drop-shadow-[0_0_8px_rgba(212,160,23,0.3)]">
                      Bill McBirnie
                    </h3>
                    <div className="space-y-2 text-[#95A5A6] text-sm overflow-y-auto max-h-[300px] scrollbar-thin scrollbar-thumb-[#2C3E50] scrollbar-track-transparent">
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
                      fill
                      style={{ objectFit: 'cover' }}
                      className="transition-transform duration-500"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0A192F] p-4">
                      <h3 className="text-xl font-montserrat text-[#D4A017] drop-shadow-[0_0_8px_rgba(212,160,23,0.3)]">
                        Jandira Silva
                      </h3>
                    </div>
                  </div>
                </div>
                {/* Back */}
                <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
                  <div className="h-full w-full bg-[#0A192F] border border-[#2C3E50] rounded-xl p-6">
                    <h3 className="text-xl font-montserrat text-[#D4A017] mb-4 drop-shadow-[0_0_8px_rgba(212,160,23,0.3)]">
                      Jandira Silva
                    </h3>
                    <div className="space-y-2 text-[#95A5A6] text-sm overflow-y-auto max-h-[300px] scrollbar-thin scrollbar-thumb-[#2C3E50] scrollbar-track-transparent">
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
                      fill
                      style={{ objectFit: 'cover' }}
                      className="transition-transform duration-500"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0A192F] p-4">
                      <h3 className="text-xl font-montserrat text-[#D4A017] drop-shadow-[0_0_8px_rgba(212,160,23,0.3)]">
                        Ann Bailey
                      </h3>
                    </div>
                  </div>
                </div>
                {/* Back */}
                <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
                  <div className="h-full w-full bg-[#0A192F] border border-[#2C3E50] rounded-xl p-6">
                    <h3 className="text-xl font-montserrat text-[#D4A017] mb-4 drop-shadow-[0_0_8px_rgba(212,160,23,0.3)]">
                      Ann Bailey
                    </h3>
                    <div className="space-y-2 text-[#95A5A6] text-sm overflow-y-auto max-h-[300px] scrollbar-thin scrollbar-thumb-[#2C3E50] scrollbar-track-transparent">
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
                      fill
                      style={{ objectFit: 'cover' }}
                      className="transition-transform duration-500"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0A192F] p-4">
                      <h3 className="text-xl font-montserrat text-[#D4A017] drop-shadow-[0_0_8px_rgba(212,160,23,0.3)]">
                        David Bitelli
                      </h3>
                    </div>
                  </div>
                </div>
                {/* Back */}
                <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
                  <div className="h-full w-full bg-[#0A192F] border border-[#2C3E50] rounded-xl p-6">
                    <h3 className="text-xl font-montserrat text-[#D4A017] mb-4 drop-shadow-[0_0_8px_rgba(212,160,23,0.3)]">
                      David Bitelli
                    </h3>
                    <div className="space-y-2 text-[#95A5A6] text-sm overflow-y-auto max-h-[300px] scrollbar-thin scrollbar-thumb-[#2C3E50] scrollbar-track-transparent">
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
                      fill
                      style={{ objectFit: 'cover' }}
                      className="transition-transform duration-500"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0A192F] p-4">
                      <h3 className="text-xl font-montserrat text-[#D4A017] drop-shadow-[0_0_8px_rgba(212,160,23,0.3)]">
                        Henry Armburg-Jennings
                      </h3>
                    </div>
                  </div>
                </div>
                {/* Back */}
                <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
                  <div className="h-full w-full bg-[#0A192F] border border-[#2C3E50] rounded-xl p-6">
                    <h3 className="text-xl font-montserrat text-[#D4A017] mb-4 drop-shadow-[0_0_8px_rgba(212,160,23,0.3)]">
                      Henry Armburg-Jennings
                    </h3>
                    <div className="space-y-2 text-[#95A5A6] text-sm overflow-y-auto max-h-[300px] scrollbar-thin scrollbar-thumb-[#2C3E50] scrollbar-track-transparent">
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
                      fill
                      style={{ objectFit: 'cover' }}
                      className="transition-transform duration-500"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0A192F] p-4">
                      <h3 className="text-xl font-montserrat text-[#D4A017] drop-shadow-[0_0_8px_rgba(212,160,23,0.3)]">
                        Ollie James
                      </h3>
                    </div>
                  </div>
                </div>
                {/* Back */}
                <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
                  <div className="h-full w-full bg-[#0A192F] border border-[#2C3E50] rounded-xl p-6">
                    <h3 className="text-xl font-montserrat text-[#D4A017] mb-4 drop-shadow-[0_0_8px_rgba(212,160,23,0.3)]">
                      Ollie James
                    </h3>
                    <div className="space-y-2 text-[#95A5A6] text-sm overflow-y-auto max-h-[300px] scrollbar-thin scrollbar-thumb-[#2C3E50] scrollbar-track-transparent">
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
                      fill
                      style={{ objectFit: 'cover' }}
                      className="transition-transform duration-500"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0A192F] p-4">
                      <h3 className="text-xl font-montserrat text-[#D4A017] drop-shadow-[0_0_8px_rgba(212,160,23,0.3)]">
                        Linley Hamilton
                      </h3>
                    </div>
                  </div>
                </div>
                {/* Back */}
                <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
                  <div className="h-full w-full bg-[#0A192F] border border-[#2C3E50] rounded-xl p-6">
                    <h3 className="text-xl font-montserrat text-[#D4A017] mb-4 drop-shadow-[0_0_8px_rgba(212,160,23,0.3)]">
                      Linley Hamilton
                    </h3>
                    <div className="space-y-2 text-[#95A5A6] text-sm overflow-y-auto max-h-[300px] scrollbar-thin scrollbar-thumb-[#2C3E50] scrollbar-track-transparent">
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
            <h3 className="text-2xl font-montserrat text-[#D4A017] mb-8 drop-shadow-[0_0_8px_rgba(212,160,23,0.3)]">Between us we&apos;ve worked with...</h3>
            <p className="text-lg font-light text-[#95A5A6] max-w-4xl leading-relaxed tracking-wide font-inter">
              Whitney Houston, Stevie Wonder, Ray Charles, Quincy Jones, Manhattan Transfer, Marcus Miller, Joe Sample, Take 6, Chick Corea, Robben Ford, Ronnie Scott, Chaka Khan, Sergio Mendez, Herb Alpert, Donna Summer, Elton John, George Michael, Gloria Gaynor, Mike McDonald and many more.
            </p>
          </div>
        </div>
      </section>

      {/* Social Links */}
      <section className="py-24 px-4 bg-gradient-to-b from-[#0A192F] to-[#1B263B]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-montserrat font-bold mb-12 text-[#D4A017] drop-shadow-[0_0_12px_rgba(212,160,23,0.3)]">
            Connect with us
          </h2>
          <div className="flex flex-col space-y-8">
            <div className="flex gap-8">
              <a href="https://www.youtube.com/@25thstreetband" 
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
            </div>
            <a 
              href="mailto:info@25thstreetband.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-xl text-[#95A5A6] hover:text-[#FF4500] transition-colors font-inter"
            >
              info@25thstreetband.com
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

