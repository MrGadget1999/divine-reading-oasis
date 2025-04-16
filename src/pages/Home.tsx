import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import BookGrid from "@/components/books/BookGrid";
import { getFeaturedBooks } from "@/data/books";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const Home = () => {
  const featuredBooks = getFeaturedBooks();

  return (
    <div className="flex flex-col min-h-screen bg-library-cream">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-library-navy text-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-serif text-4xl md:text-6xl font-bold mb-4">
                Divine Reading Oasis
              </h1>
              <p className="text-xl md:text-2xl mb-8 font-light">
                An initiative by OMPH Church
              </p>
              <p className="text-lg md:text-xl mb-8">
                Welcome to Divine Reading Oasis, your source for free access to Christian religious books and spiritual wisdom.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button asChild className="bg-library-gold hover:bg-library-gold/90 text-library-navy font-medium">
                  <Link to="/catalog">Browse the Library</Link>
                </Button>
                <Button asChild className="border-white text-white hover:bg-white/10">
                  <Link to="/about">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Books */}
        <section className="py-12 md:py-16 container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Featured Books</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our curated selection of spiritual classics and timeless Christian literature.
            </p>
          </div>
          
          <BookGrid books={featuredBooks} />
          
          <div className="text-center mt-10">
            <Button asChild className="bg-library-navy hover:bg-library-navy/90">
              <Link to="/catalog">View All Books</Link>
            </Button>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Explore Categories</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Discover books across various Christian topics and genres.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {["Theology", "Devotional", "Classic", "Apologetics"].map((category) => (
                <Link 
                  key={category}
                  to={`/catalog?category=${category.toLowerCase()}`}
                  className="relative overflow-hidden rounded-lg group h-48 flex items-center justify-center"
                >
                  <div className="absolute inset-0 bg-library-navy/60 group-hover:bg-library-navy/70 transition-colors duration-300"></div>
                  <h3 className="font-serif text-xl font-bold text-white relative z-10">{category}</h3>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="py-12 md:py-16 bg-library-cream">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg mb-8">
                At Divine Reading Oasis, we believe that spiritual wisdom should be accessible to all. 
                Our mission is to provide free access to Christian literature that can enlighten, 
                inspire, and strengthen your faith journey.
              </p>
              <Button asChild className="border-library-burgundy text-library-burgundy hover:bg-library-burgundy/10">
                <Link to="/about">Read Our Story</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
