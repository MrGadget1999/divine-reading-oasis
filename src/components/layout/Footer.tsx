
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-library-navy text-white mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="font-serif text-xl font-medium mb-4">Divine Reading Oasis</h3>
            <p className="text-gray-300 mb-4">
              Providing free access to Christian religious books and resources to spread spiritual wisdom and enlightenment.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-xl font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-library-gold transition duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/catalog" className="text-gray-300 hover:text-library-gold transition duration-200">
                  Book Catalog
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-library-gold transition duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-library-gold transition duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-serif text-xl font-medium mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/catalog?category=bibles" className="text-gray-300 hover:text-library-gold transition duration-200">
                  Bibles
                </Link>
              </li>
              <li>
                <Link to="/catalog?category=theology" className="text-gray-300 hover:text-library-gold transition duration-200">
                  Theology
                </Link>
              </li>
              <li>
                <Link to="/catalog?category=devotionals" className="text-gray-300 hover:text-library-gold transition duration-200">
                  Devotionals
                </Link>
              </li>
              <li>
                <Link to="/catalog?category=christian-living" className="text-gray-300 hover:text-library-gold transition duration-200">
                  Christian Living
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center md:text-left text-gray-400">
          <p>© {currentYear} Divine Reading Oasis. All books provided for educational and spiritual purposes.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
