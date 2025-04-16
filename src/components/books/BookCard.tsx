
import { Link } from "react-router-dom";
import { Book } from "@/types/book";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface BookCardProps {
  book: Book;
}

const BookCard = ({ book }: BookCardProps) => {
  return (
    <Link to={`/book/${book.id}`} className="block h-full">
      <Card className="h-full transition-transform duration-200 hover:scale-[1.02] hover:shadow-md overflow-hidden">
        <div className="relative aspect-[2/3] overflow-hidden bg-gray-100">
          <img 
            src={book.coverImage} 
            alt={`Cover of ${book.title}`} 
            className="h-full w-full object-cover"
          />
        </div>
        <CardContent className="p-4">
          <h3 className="font-serif text-lg font-medium line-clamp-2 mb-1">{book.title}</h3>
          <p className="text-sm text-gray-500 mb-2">{book.author}</p>
          
          <div className="flex flex-wrap gap-1 mt-auto">
            {book.categories.map((category, index) => (
              <Badge 
                key={index} 
                variant="secondary"
                className="bg-library-cream text-library-navy text-xs"
              >
                {category}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default BookCard;
