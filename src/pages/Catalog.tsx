
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { books, getBooksByCategory } from "@/data/books";
import { Book } from "@/types/book";
import BookGrid from "@/components/books/BookGrid";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search } from "lucide-react";

// Get all unique categories
const allCategories = Array.from(
  new Set(books.flatMap(book => book.categories))
).sort();

const Catalog = () => {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get("category");

  const [displayedBooks, setDisplayedBooks] = useState<Book[]>(books);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(categoryParam);

  // Filter books when search term or category changes
  useEffect(() => {
    let filtered = [...books];
    
    // Filter by category if active
    if (activeCategory) {
      filtered = getBooksByCategory(activeCategory);
    }
    
    // Filter by search term if present
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(
        book =>
          book.title.toLowerCase().includes(term) ||
          book.author.toLowerCase().includes(term) ||
          book.description.toLowerCase().includes(term)
      );
    }
    
    setDisplayedBooks(filtered);
  }, [searchTerm, activeCategory]);

  // Update active category when URL param changes
  useEffect(() => {
    setActiveCategory(categoryParam);
  }, [categoryParam]);

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category === activeCategory ? null : category);
  };

  const clearFilters = () => {
    setActiveCategory(null);
    setSearchTerm("");
  };

  return (
    <div className="flex flex-col min-h-screen bg-library-cream">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="font-serif text-3xl md:text-4xl font-bold text-center mb-8">
          Book Catalog
        </h1>
        
        {/* Search and Filter */}
        <div className="bg-white rounded-lg shadow-sm p-4 mb-8">
          <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
            <div className="relative flex-grow">
              <Input
                type="text"
                placeholder="Search by title, author, or keyword..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            </div>
            
            {activeCategory && (
              <div className="flex items-center">
                <span className="mr-2 text-sm text-gray-500">Filtered by:</span>
                <Badge className="bg-library-navy">{activeCategory}</Badge>
              </div>
            )}
            
            {(activeCategory || searchTerm) && (
              <button
                onClick={clearFilters}
                className="text-sm text-library-burgundy hover:text-library-burgundy/80"
              >
                Clear Filters
              </button>
            )}
          </div>
          
          {/* Categories */}
          <div>
            <h3 className="text-sm font-medium mb-2">Categories:</h3>
            <div className="flex flex-wrap gap-2">
              {allCategories.map((category) => (
                <Badge
                  key={category}
                  className={`cursor-pointer ${
                    activeCategory === category
                      ? "bg-library-navy"
                      : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                  }`}
                  onClick={() => handleCategoryClick(category)}
                >
                  {category}
                </Badge>
              ))}
            </div>
          </div>
        </div>
        
        {/* Results */}
        {displayedBooks.length > 0 ? (
          <>
            <p className="text-gray-600 mb-6">
              Showing {displayedBooks.length} {displayedBooks.length === 1 ? "book" : "books"}
              {activeCategory && ` in category "${activeCategory}"`}
              {searchTerm && ` matching "${searchTerm}"`}
            </p>
            <BookGrid books={displayedBooks} />
          </>
        ) : (
          <div className="text-center py-16">
            <h3 className="text-xl font-medium mb-2">No Books Found</h3>
            <p className="text-gray-600">
              Try adjusting your search or filter criteria to find what you're looking for.
            </p>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default Catalog;
