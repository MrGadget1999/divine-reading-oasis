
import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { getBookById } from "@/data/books";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ArrowRight, Menu, Bookmark, Type, Sun, Moon } from "lucide-react";

const BookReader = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const [fontSize, setFontSize] = useState(18);
  const [darkMode, setDarkMode] = useState(false);
  const [showControls, setShowControls] = useState(true);
  
  const book = id ? getBookById(id) : undefined;
  
  useEffect(() => {
    if (!book) {
      navigate("/catalog", { replace: true });
    }
  }, [book, navigate]);
  
  if (!book) {
    return null; // Navigate will handle redirect
  }
  
  const toggleControls = () => {
    setShowControls(!showControls);
  };
  
  const increaseFontSize = () => {
    setFontSize(prev => Math.min(prev + 2, 28));
  };
  
  const decreaseFontSize = () => {
    setFontSize(prev => Math.max(prev - 2, 14));
  };
  
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  
  return (
    <div className={`flex flex-col min-h-screen ${darkMode ? "bg-gray-900 text-gray-200" : "bg-library-cream text-gray-800"}`}>
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-6">
        {/* Book Header */}
        <div className="mb-8">
          <Link 
            to="/catalog" 
            className={`inline-flex items-center ${darkMode ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-library-navy"} mb-4`}
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Catalog
          </Link>
          
          <div className="flex flex-col md:flex-row md:items-end gap-4 mb-4">
            <h1 className="font-serif text-3xl md:text-4xl font-bold">{book.title}</h1>
            <span className={`${darkMode ? "text-gray-400" : "text-gray-600"}`}>by {book.author}</span>
          </div>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {book.categories.map((category, index) => (
              <Badge key={index} className={darkMode ? "bg-gray-700 text-gray-200" : "bg-library-navy text-white"}>
                {category}
              </Badge>
            ))}
          </div>
        </div>
        
        {/* Reading Controls */}
        <div className={`sticky top-0 z-10 ${darkMode ? "bg-gray-900" : "bg-library-cream"} py-3 mb-6 border-b ${darkMode ? "border-gray-700" : "border-gray-300"}`}>
          <div className="flex items-center justify-between">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleControls}
              className={darkMode ? "text-gray-300 hover:text-white hover:bg-gray-800" : ""}
            >
              <Menu className="h-5 w-5" />
            </Button>
            
            {showControls && (
              <div className="flex items-center gap-3">
                <div className="flex items-center">
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    onClick={decreaseFontSize}
                    className={darkMode ? "text-gray-300 hover:text-white hover:bg-gray-800" : ""}
                    disabled={fontSize <= 14}
                  >
                    <Type className="h-4 w-4" />
                    <span className="text-xs ml-1">-</span>
                  </Button>
                  <span className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>{fontSize}px</span>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    onClick={increaseFontSize}
                    className={darkMode ? "text-gray-300 hover:text-white hover:bg-gray-800" : ""}
                    disabled={fontSize >= 28}
                  >
                    <Type className="h-4 w-4" />
                    <span className="text-xs ml-1">+</span>
                  </Button>
                </div>
                
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={toggleDarkMode}
                  className={darkMode ? "text-gray-300 hover:text-white hover:bg-gray-800" : ""}
                >
                  {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                </Button>
                
                <Button 
                  variant="ghost" 
                  size="icon"
                  className={darkMode ? "text-gray-300 hover:text-white hover:bg-gray-800" : ""}
                >
                  <Bookmark className="h-5 w-5" />
                </Button>
              </div>
            )}
          </div>
        </div>
        
        {/* Book Content */}
        <div 
          className={`prose max-w-prose mx-auto ${darkMode ? "prose-invert" : ""}`}
          style={{ fontSize: `${fontSize}px` }}
        >
          <p className="whitespace-pre-line">{book.content}</p>
          
          {/* This is just a placeholder for longer content */}
          <p className="whitespace-pre-line">
            For the sake of demonstration, imagine more chapters and content would appear here. In a full implementation, 
            the book would have multiple chapters, pagination, and more complete content.
          </p>
          <p className="whitespace-pre-line">
            The book would continue with its spiritual insights and guidance, offering readers a path to deeper 
            understanding of Christian wisdom and teachings.
          </p>
          <p className="whitespace-pre-line">
            Scripture verses might be highlighted throughout, and important passages would be clearly presented to
            ensure the reader can absorb and reflect on the spiritual message being conveyed.
          </p>
        </div>
        
        {/* Navigation Controls */}
        <div className="flex justify-center mt-12 mb-8">
          <div className="flex gap-4">
            <Button
              variant="outline"
              className={`flex items-center ${darkMode ? "border-gray-700 text-gray-300 hover:bg-gray-800" : ""}`}
              disabled
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Previous Chapter
            </Button>
            <Button
              variant="outline"
              className={`flex items-center ${darkMode ? "border-gray-700 text-gray-300 hover:bg-gray-800" : ""}`}
              disabled
            >
              Next Chapter
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BookReader;
