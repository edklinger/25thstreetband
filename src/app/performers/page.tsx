'use client'

import Navigation from '../components/Navigation'

export default function Performers() {
  return (
    <main className="min-h-screen bg-black">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-teal-400">
            Our Performers
          </h1>
          <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto mb-20">
            THE 25TH STREET BAND IS A LONDON BASED, CROSSOVER-JAZZ RECORDING PROJECT FEATURING GUEST ARTISTS FROM AROUND THE WORLD.
          </p>

          {/* Performers Grid */}
          <div className="grid md:grid-cols-2 gap-12">
            {/* Joel Kibble */}
            <div className="bg-black/30 p-8 rounded-xl border border-teal-900/30 backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-orange-400 mb-4">Joel Kibble</h2>
              <div className="space-y-4 text-gray-300">
                <p>US based, Joey is a member of Take 6. The multi-platinum selling group has earned 10 Grammy's, 10 Dove Awards and a host of other honors.</p>
                <p>The band has worked with Ray Charles, Nnenna Freelon, Gordon Goodwin, Don Henley, Whitney Houston, Al Jarreau, Quincy Jones, k.d. lang, Queen Latifah, The Manhattan Transfer, Brian McKnight, Luis Miguel, Marcus Miller, Joe Sample, Ben Tankard, CeCe Winans, and Stevie Wonder.</p>
              </div>
            </div>

            {/* Josiah Ruff */}
            <div className="bg-black/30 p-8 rounded-xl border border-teal-900/30 backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-orange-400 mb-4">Josiah Ruff</h2>
              <div className="space-y-4 text-gray-300">
                <p>Josiah started out as a gospel singer in California. These days he's broadened out his repertoire to NeoGospelPop and lives in Miami, Florida.</p>
                <p>His lead vocals feature on several of the latest 25th Street Band tracks.</p>
                <p>When Russ Klinger mentioned backing vocals, Josiah recommended and introduced his friend, Joel.</p>
              </div>
            </div>

            {/* Mornington Lockett */}
            <div className="bg-black/30 p-8 rounded-xl border border-teal-900/30 backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-orange-400 mb-4">Mornington Lockett</h2>
              <div className="space-y-4 text-gray-300">
                <p>Based in the UK, Mornington is has recorded with a wide variety of artists, including Ronnie Scott, Jim Mullen, Stan Tracey, Don Grusin, Martin Drew, Claire Martin, Arturo Sandoval, Jimmy Smith, Sarah Jane Morris and Ian Shaw and Oasis.</p>
                <p>He has also toured with Oscar Peterson's rhythm section, drummer Martin Drew, bassist Niels Henning Ørsted Pedersen and guitarist Ulf Wakenius.</p>
              </div>
            </div>

            {/* Hussain Jiffry */}
            <div className="bg-black/30 p-8 rounded-xl border border-teal-900/30 backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-orange-400 mb-4">Hussain Jiffry</h2>
              <div className="space-y-4 text-gray-300">
                <p>Originally from Sri Lanka and now based in L.A, Hussain's list of credits includes Tom Scott, Michael Bolton, Deneice Williams, Hellen Reddy, Petula Clark, Kenny Kirkland, David Foster, Michael McDonald, Russell Ferrante, Dione Warwick, Captain and Tennille, Chaka Khan, Crystal Gayle, Jack Jones, The Four Tops, Dave Weckl band, Gloria Gaynor, Steve Winwood, Whitney Houston, Tito Puente, Carol King, and Christopher Cross.</p>
              </div>
            </div>

            {/* Tom Brechtlein */}
            <div className="bg-black/30 p-8 rounded-xl border border-teal-900/30 backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-orange-400 mb-4">Tom Brechtlein</h2>
              <div className="space-y-4 text-gray-300">
                <p>Tom is based in L.A. He has toured and recorded with Robben Ford, Chick Corea, Christopher Cross, Wayne Shorter, Jean-Luc Ponty, Dave Samuels, Eric Johnson and Joe Farrell among others.</p>
              </div>
            </div>

            {/* Bill McBirnie */}
            <div className="bg-black/30 p-8 rounded-xl border border-teal-900/30 backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-orange-400 mb-4">Bill McBirnie</h2>
              <div className="space-y-4 text-gray-300">
                <p>Based in Toronto Bill has worked with Junior Mance, Irakere, Memo Acevedo and Emilie-Claire Barlow. He is also resident Jazz Flute Specialist at Sir James Galway's official web site.</p>
              </div>
            </div>

            {/* Jandira Silva */}
            <div className="bg-black/30 p-8 rounded-xl border border-teal-900/30 backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-orange-400 mb-4">Jandira Silva</h2>
              <div className="space-y-4 text-gray-300">
                <p>Originally from Rio de Janeiro, Jandira sang with the José Cabeleira band on Portuguese TV before moving to London where she had her own Brazilian/Jazz crossover band.</p>
                <p>Nowadays she's based in Macau.</p>
              </div>
            </div>

            {/* Ann Bailey */}
            <div className="bg-black/30 p-8 rounded-xl border border-teal-900/30 backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-orange-400 mb-4">Ann Bailey</h2>
              <div className="space-y-4 text-gray-300">
                <p>Based in the UK, Anne is originally from the USA.</p>
                <p>She was a Gospel and RnB session/backing singer in Nashville and fronted her own band in L.A, where she worked with Donna Summer.</p>
              </div>
            </div>

            {/* David Bitelli */}
            <div className="bg-black/30 p-8 rounded-xl border border-teal-900/30 backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-orange-400 mb-4">David Bitelli</h2>
              <div className="space-y-4 text-gray-300">
                <p>London Based Bitelli's sax and clarinet credits include; Airto Moreira, Dudu Pukwana, Jimmy Witherspoon, Elton John, Joan Armatrading, Joe Jackson, REM, Wham, Robert Cray, Loose Tubes and many more.</p>
              </div>
            </div>

            {/* Henry Armburg-Jennings */}
            <div className="bg-black/30 p-8 rounded-xl border border-teal-900/30 backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-orange-400 mb-4">Henry Armburg-Jennings</h2>
              <div className="space-y-4 text-gray-300">
                <p>Based in the UK, Henry has worked with Stan Tracy, Peter King and Martin Drew. He's also had his own jazz quartet and been member of the National Youth Jazz Orchestra.</p>
              </div>
            </div>

            {/* Ollie James */}
            <div className="bg-black/30 p-8 rounded-xl border border-teal-900/30 backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-orange-400 mb-4">Ollie James</h2>
              <div className="space-y-4 text-gray-300">
                <p>UK based, Ollie has had several UK and European chart hits with Axwell, Steve Angelo and Armand Van Helden.</p>
              </div>
            </div>

            {/* Linley Hamilton */}
            <div className="bg-black/30 p-8 rounded-xl border border-teal-900/30 backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-orange-400 mb-4">Linley Hamilton</h2>
              <div className="space-y-4 text-gray-300">
                <p>Based in Northern Ireland, Linley's credits include sessions with Van Morrison.</p>
                <p>He has his own jazz quartet and presents a BBC jazz radio show.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 