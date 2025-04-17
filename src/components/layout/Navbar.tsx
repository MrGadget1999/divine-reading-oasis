
import { Link } from "react-router-dom";
import { Search, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import UserMenu from "@/components/auth/UserMenu";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-library-navy font-serif text-2xl font-bold">Divine Reading Oasis</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-library-dark hover:text-library-burgundy font-medium">
              Home
            </Link>
            <Link to="/catalog" className="text-library-dark hover:text-library-burgundy font-medium">
              Catalog
            </Link>
            <Link to="/about" className="text-library-dark hover:text-library-burgundy font-medium">
              About
            </Link>
          </nav>

          {/* Search Bar (Desktop) */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <Input
                type="text"
                placeholder="Search books..."
                className="w-64 pr-8 focus:border-library-gold"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
                <Button 
                className="absolute right-0 top-0 p-2"
                aria-label="Search"
              >
                <Search className="h-4 w-4" />
              </Button>
            </div>
            
            {/* User Menu */}
            <UserMenu />
          </div>

          {/* Mobile Menu Button */}
          <Button 
            className="md:hidden"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-library-dark hover:text-library-burgundy font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/catalog" 
                className="text-library-dark hover:text-library-burgundy font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Catalog
              </Link>
              <Link 
                to="/about" 
                className="text-library-dark hover:text-library-burgundy font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              
              {/* Search bar (Mobile) */}
              <div className="relative mt-2">
                <Input
                  type="text"
                  placeholder="Search books..."
                  className="w-full pr-8"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Button 
                  type="button"
                  className="absolute right-0 top-0"
                  aria-label="Search"
                >
                  <Search className="h-4 w-4" />
                </Button>
              </div>
              
              {/* User Menu (Mobile) */}
              <div className="py-2">
                <UserMenu />
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
