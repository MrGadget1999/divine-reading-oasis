
import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { getUserReadingHistory } from "@/services/readingProgressService";
import { UserReadingProgress } from "@/types/book";
import { getBookById } from "@/data/books";
import { ArrowLeft, BookOpen } from "lucide-react";
import { format } from "date-fns";

const ReadingHistory = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [readingHistory, setReadingHistory] = useState<UserReadingProgress[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // If not logged in, redirect to home
    if (!user) {
      navigate("/");
      return;
    }
    
    const fetchReadingHistory = async () => {
      const history = await getUserReadingHistory(user.id);
      setReadingHistory(history);
      setIsLoading(false);
    };
    
    fetchReadingHistory();
  }, [user, navigate]);
  
  if (!user) return null;
  
  return (
    <div className="flex flex-col min-h-screen bg-library-cream">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="mb-8">
          <Link 
            to="/profile" 
            className="inline-flex items-center text-gray-600 hover:text-library-navy mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Profile
          </Link>
          
          <h1 className="font-serif text-3xl md:text-4xl font-bold">My Reading History</h1>
        </div>
        
        {isLoading ? (
          <div className="text-center py-12">
            <p>Loading your reading history...</p>
          </div>
        ) : (
          <div className="space-y-6">
            {readingHistory.length > 0 ? (
              readingHistory.map((progress) => {
                const book = getBookById(progress.bookId);
                if (!book) return null;
                
                return (
                  <Card key={progress.id} className="overflow-hidden">
                    <CardContent className="p-0">
                      <div className="flex flex-col md:flex-row">
                        <div className="w-full md:w-1/4 h-48 md:h-auto">
                          <img 
                            src={book.coverImage} 
                            alt={book.title} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="p-6 flex-1">
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                            <h3 className="text-xl font-bold font-serif">{book.title}</h3>
                            <span className="text-sm text-gray-500">
                              Last read: {format(new Date(progress.lastReadAt), 'PP')}
                            </span>
                          </div>
                          <p className="text-gray-700 mb-4">{book.author}</p>
                          <div className="mb-2">
                            <div className="flex justify-between text-sm mb-1">
                              <span>Progress: {progress.completionPercentage}%</span>
                              <span>Page {progress.currentPage} of {book.pageCount}</span>
                            </div>
                            <Progress value={progress.completionPercentage} className="h-2" />
                          </div>
                          <div className="mt-4">
                            <Button 
                              onClick={() => navigate(`/book/${book.id}`)}
                              className="flex items-center gap-2"
                            >
                              <BookOpen className="h-4 w-4" />
                              {progress.isCompleted ? "Read Again" : "Continue Reading"}
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })
            ) : (
              <div className="text-center py-12 bg-white rounded-lg shadow-sm">
                <BookOpen className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                <h3 className="text-xl font-medium mb-2">No Reading History</h3>
                <p className="text-gray-600 mb-6">
                  You haven't started reading any books yet.
                </p>
                <Button onClick={() => navigate("/catalog")}>
                  Browse Books
                </Button>
              </div>
            )}
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default ReadingHistory;
