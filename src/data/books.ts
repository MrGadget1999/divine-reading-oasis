import { Book } from "@/types/book";
import books from './e-books';

export { books };

export const getFeaturedBooks = (): Book[] => {
  return books.slice(0, 3);
};

export const getBookById = (id: string): Book | undefined => {
  return books.find(book => book.id === id);
};

export const getBooksByCategory = (category: string): Book[] => {
  const lowerCategory = category.toLowerCase();
  return books.filter(book => 
    book.categories.some(cat => cat.toLowerCase() === lowerCategory)
  );
};

// Pagination utility function
export const getBooksPage = (page: number, booksPerPage: number, filteredBooks?: Book[]): {
  books: Book[],
  totalPages: number
} => {
  const booksToPage = filteredBooks || books;
  const startIndex = (page - 1) * booksPerPage;
  const endIndex = startIndex + booksPerPage;
  const pagedBooks = booksToPage.slice(startIndex, endIndex);
  const totalPages = Math.ceil(booksToPage.length / booksPerPage);
  
  return {
    books: pagedBooks,
    totalPages
  };
};
