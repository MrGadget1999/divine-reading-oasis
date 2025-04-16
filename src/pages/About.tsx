
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const About = () => {
  return (
    <div className="flex flex-col min-h-screen bg-library-cream">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-library-navy text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">About Divine Reading Oasis</h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Providing free access to Christian literature for spiritual growth and enlightenment
            </p>
          </div>
        </section>
        
        {/* Mission Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-serif text-3xl font-bold mb-6 text-center">Our Mission</h2>
              <div className="prose max-w-none">
                <p>
                  At Divine Reading Oasis, we believe that spiritual wisdom should be freely accessible to everyone seeking to deepen their Christian faith and understanding. Our mission is to create a digital sanctuary where readers can explore classic and contemporary Christian literature without financial barriers.
                </p>
                <p>
                  We are committed to preserving and sharing Christian theological works, devotionals, and spiritual classics that have guided believers for centuries. By making these texts freely available, we hope to contribute to the spiritual growth of Christians worldwide and provide resources for those seeking truth through Christian teachings.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Vision Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-serif text-3xl font-bold mb-6 text-center">Our Vision</h2>
              <div className="prose max-w-none">
                <p>
                  We envision a world where every person has access to the spiritual wisdom contained in Christian literature regardless of their economic circumstances. Divine Reading Oasis aspires to be the most comprehensive digital library of Christian texts, offering not just content but a thoughtfully designed reading experience that facilitates spiritual reflection and growth.
                </p>
                <p>
                  Through technological innovation and careful curation, we aim to preserve Christian literary heritage while making it accessible to modern readers. We believe that the timeless truths found in these works can speak powerfully to contemporary challenges and provide guidance for living a life of faith in today's world.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Values Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="font-serif text-3xl font-bold mb-10 text-center">Our Core Values</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-serif text-xl font-bold mb-3 text-library-navy">Accessibility</h3>
                <p className="text-gray-700">
                  We are committed to removing barriers to spiritual wisdom by making Christian literature freely accessible to all.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-serif text-xl font-bold mb-3 text-library-navy">Faithfulness</h3>
                <p className="text-gray-700">
                  We present texts with accuracy and respect for their original context and theological intent.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-serif text-xl font-bold mb-3 text-library-navy">Illumination</h3>
                <p className="text-gray-700">
                  We believe in the transformative power of Christian wisdom to enlighten minds and hearts.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-serif text-xl font-bold mb-3 text-library-navy">Community</h3>
                <p className="text-gray-700">
                  We foster a global community of readers united by a love for Christian literature and spiritual growth.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-serif text-xl font-bold mb-3 text-library-navy">Education</h3>
                <p className="text-gray-700">
                  We promote theological understanding and biblical literacy through carefully selected works.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-serif text-xl font-bold mb-3 text-library-navy">Stewardship</h3>
                <p className="text-gray-700">
                  We responsibly preserve and share Christian literary heritage for current and future generations.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Contact Section */}
        <section className="py-16 bg-library-navy text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-serif text-3xl font-bold mb-6">Connect With Us</h2>
            <p className="mb-8 max-w-2xl mx-auto">
              Have questions or suggestions? We'd love to hear from you. Reach out to our team or consider supporting our mission to provide free access to Christian literature.
            </p>
            <div className="inline-flex space-x-4">
              <a href="#" className="px-6 py-3 bg-white text-library-navy font-medium rounded-md hover:bg-gray-100 transition-colors">
                Contact Us
              </a>
              <a href="#" className="px-6 py-3 border border-white text-white font-medium rounded-md hover:bg-white/10 transition-colors">
                Support Our Mission
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
