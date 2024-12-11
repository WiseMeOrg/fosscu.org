import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Newsletter from '@/components/Newsletter';
import Link from 'next/link';

export default function About() {
  return (
    <div className="min-h-screen">
      <header>
        <div className="bg-header squiggle-bottom">
          <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold text-center mb-4 text-white font-serif">About FOSSCU</h1>
            <div className="text-xl text-center mb-4 text-white">Building the Future of Open Source</div>
            <Navbar />
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-4 font-serif relative inline-block">
            Our Mission
            <div className="absolute -bottom-2 left-0 w-full h-4 bg-yellow-300 -z-10 transform -rotate-1"></div>
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            FOSSCU (Free and Open Source Software Community United) is a vibrant community dedicated to promoting and advancing open-source software development. We believe in the power of collaborative development and knowledge sharing.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#fefae0] p-6 rounded-lg border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="text-xl font-bold mb-3">Community First</h3>
              <p className="text-gray-700">We foster an inclusive environment where developers of all skill levels can learn, contribute, and grow together.</p>
            </div>
            <div className="bg-[#d5f5e3] p-6 rounded-lg border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="text-xl font-bold mb-3">Open Source Advocacy</h3>
              <p className="text-gray-700">We champion the cause of open source software and promote its adoption across organizations.</p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 font-serif relative inline-block">
            Our Values
            <div className="absolute -bottom-2 left-0 w-full h-4 bg-yellow-300 -z-10 transform -rotate-1"></div>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Collaboration", description: "Working together to create better software", icon: "🤝" },
              { title: "Innovation", description: "Pushing boundaries in open source", icon: "💡" },
              { title: "Education", description: "Sharing knowledge and fostering growth", icon: "📚" },
              { title: "Inclusivity", description: "Welcome developers of all backgrounds", icon: "🌍" },
              { title: "Transparency", description: "Open communication and processes", icon: "🔍" },
              { title: "Community", description: "Building lasting relationships", icon: "💫" },
            ].map((value, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-lg border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:-translate-x-1 hover:-translate-y-1"
              >
                <div className="text-3xl mb-3">{value.icon}</div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-gray-700">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-6 font-serif">Join Our Community</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Whether you're a seasoned developer or just starting your journey in open source, 
            there's a place for you in our community.
          </p>
          <div className="flex flex-wrap gap-6 justify-center">
            <Link
              href="https://dub.sh/fosscu"
              className="bg-yellow-300 px-8 py-3 rounded-md border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-300 font-bold"
            >
              Join Discord
            </Link>
            <Link
              href="https://github.com/FOSS-Community"
              className="bg-white px-8 py-3 rounded-md border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-300 font-bold"
            >
              GitHub
            </Link>
          </div>
        </section>
      </main>

      <Newsletter />
      <Footer />
    </div>
  );
}
