
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { books, getBooksByCategory, getBooksPage } from "@/data/books";
import { Book } from "@/types/book";
import BookGrid from "@/components/books/BookGrid";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Book as BookIcon, Search, Loader2 } from "lucide-react";
import { 
  Pagination, 
  PaginationContent, 
  PaginationItem, 
  PaginationLink, 
  PaginationNext, 
  PaginationPrevious,
  PaginationEllipsis
} from "@/components/ui/pagination";
import { Button } from "@/components/ui/button";

// Get all unique categories
const allCategories = Array.from(
  new Set(books.flatMap(book => book.categories))
).sort();

// Number of books to display per page
const BOOKS_PER_PAGE = 8;

const Catalog = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get("category");
  const pageParam = searchParams.get("page");
  
  const [currentPage, setCurrentPage] = useState(pageParam ? parseInt(pageParam) : 1);
  const [totalPages, setTotalPages] = useState(1);
  const [displayedBooks, setDisplayedBooks] = useState<Book[]>([]);
  const [filteredBooks, setFilteredBooks] = useState<Book[]>(books);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(categoryParam);
  const [isLoading, setIsLoading] = useState(false);

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
    
    setFilteredBooks(filtered);
    
    // Reset to page 1 when filters change
    setCurrentPage(1);
    setSearchParams(prev => {
      const newParams = new URLSearchParams(prev);
      newParams.set("page", "1");
      if (activeCategory) {
        newParams.set("category", activeCategory);
      } else {
        newParams.delete("category");
      }
      return newParams;
    });
  }, [searchTerm, activeCategory, setSearchParams]);

  // Update displayed books when page or filtered books change
  useEffect(() => {
    setIsLoading(true);
    
    // Simulate network delay for pagination
    const timer = setTimeout(() => {
      const { books: pagedBooks, totalPages: pages } = getBooksPage(currentPage, BOOKS_PER_PAGE, filteredBooks);
      setDisplayedBooks(pagedBooks);
      setTotalPages(pages);
      setIsLoading(false);
    }, 300);
    
    return () => clearTimeout(timer);
  }, [currentPage, filteredBooks]);

  // Update active category when URL param changes
  useEffect(() => {
    setActiveCategory(categoryParam);
  }, [categoryParam]);

  // Update page when URL param changes
  useEffect(() => {
    if (pageParam) {
      setCurrentPage(parseInt(pageParam));
    }
  }, [pageParam]);

  const handleCategoryClick = (category: string) => {
    const newCategory = category === activeCategory ? null : category;
    setActiveCategory(newCategory);
    
    // Update URL params
    setSearchParams(prev => {
      const newParams = new URLSearchParams(prev);
      if (newCategory) {
        newParams.set("category", newCategory);
      } else {
        newParams.delete("category");
      }
      return newParams;
    });
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    
    // Update URL params
    setSearchParams(prev => {
      const newParams = new URLSearchParams(prev);
      newParams.set("page", page.toString());
      return newParams;
    });
    
    // Scroll to top when changing pages
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const clearFilters = () => {
    setActiveCategory(null);
    setSearchTerm("");
    setCurrentPage(1);
    setSearchParams(new URLSearchParams({ page: "1" }));
  };

  // Generate pagination items
  const renderPaginationItems = () => {
    const items = [];
    const maxVisiblePages = 5;
    
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
    
    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }
    
    // Always show first page
    if (startPage > 1) {
      items.push(
        <PaginationItem key="first">
          <PaginationLink onClick={() => handlePageChange(1)} isActive={currentPage === 1}>
            1
          </PaginationLink>
        </PaginationItem>
      );
      
      // Add ellipsis if needed
      if (startPage > 2) {
        items.push(
          <PaginationItem key="ellipsis-start">
            <PaginationEllipsis />
          </PaginationItem>
        );
      }
    }
    
    // Add page numbers
    for (let i = startPage; i <= endPage; i++) {
      if (i === 1 || i === totalPages) continue; // Skip first and last as they're added separately
      items.push(
        <PaginationItem key={i}>
          <PaginationLink onClick={() => handlePageChange(i)} isActive={currentPage === i}>
            {i}
          </PaginationLink>
        </PaginationItem>
      );
    }
    
    // Always show last page
    if (endPage < totalPages) {
      // Add ellipsis if needed
      if (endPage < totalPages - 1) {
        items.push(
          <PaginationItem key="ellipsis-end">
            <PaginationEllipsis />
          </PaginationItem>
        );
      }
      
      items.push(
        <PaginationItem key="last">
          <PaginationLink onClick={() => handlePageChange(totalPages)} isActive={currentPage === totalPages}>
            {totalPages}
          </PaginationLink>
        </PaginationItem>
      );
    }
    
    return items;
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
              <Button
                variant="ghost"
                onClick={clearFilters}
                className="text-sm text-library-burgundy hover:text-library-burgundy/80"
              >
                Clear Filters
              </Button>
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
        {isLoading ? (
          <div className="flex justify-center items-center py-16">
            <Loader2 className="h-8 w-8 animate-spin text-library-navy" />
          </div>
        ) : displayedBooks.length > 0 ? (
          <>
            <div className="flex items-center justify-between mb-6">
              <p className="text-gray-600">
                Showing {displayedBooks.length} of {filteredBooks.length} {filteredBooks.length === 1 ? "book" : "books"}
                {activeCategory && ` in category "${activeCategory}"`}
                {searchTerm && ` matching "${searchTerm}"`}
                {`, Page ${currentPage} of ${totalPages}`}
              </p>
              <div className="hidden sm:flex items-center gap-2">
                <BookIcon className="h-5 w-5 text-library-navy" />
                <span className="font-medium">{filteredBooks.length} {filteredBooks.length === 1 ? "book" : "books"} total</span>
              </div>
            </div>
            
            <BookGrid books={displayedBooks} />
            
            {/* Pagination */}
            {totalPages > 1 && (
              <Pagination className="my-8">
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious 
                      onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                      className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
                    />
                  </PaginationItem>
                  
                  {renderPaginationItems()}
                  
                  <PaginationItem>
                    <PaginationNext 
                      onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                      className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            )}
          </>
        ) : (
          <div className="text-center py-16">
            <h3 className="text-xl font-medium mb-2">No Books Found</h3>
            <p className="text-gray-600">
              Try adjusting your search or filter criteria to find what you're looking for.
            </p>
            <Button 
              variant="outline" 
              className="mt-4"
              onClick={clearFilters}
            >
              View All Books
            </Button>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default Catalog;
