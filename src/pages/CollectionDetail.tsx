
import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { getCollection, removeBookFromCollection, updateCollection, deleteCollection } from "@/services/collectionService";
import { UserBookCollection } from "@/types/book";
import { getBookById } from "@/data/books";
import { ArrowLeft, Bookmark, Edit, Trash2, AlertTriangle } from "lucide-react";
import BookGrid from "@/components/books/BookGrid";
import { useToast } from "@/hooks/use-toast";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  name: z.string().min(1, "Collection name is required"),
  description: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const CollectionDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { user } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [collection, setCollection] = useState<UserBookCollection | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [collectionBooks, setCollectionBooks] = useState<any[]>([]);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      description: "",
    },
  });
  
  useEffect(() => {
    // If not logged in, redirect to home
    if (!user) {
      navigate("/");
      return;
    }
    
    const fetchCollection = async () => {
      if (!id) return;
      
      const collectionData = await getCollection(id);
      
      if (!collectionData) {
        navigate("/collections");
        return;
      }
      
      // Check if the collection belongs to the user
      if (collectionData.userId !== user.id) {
        navigate("/collections");
        return;
      }
      
      setCollection(collectionData);
      
      // Get books in collection
      const books = collectionData.bookIds
        .map(bookId => getBookById(bookId))
        .filter(book => book !== undefined);
      
      setCollectionBooks(books);
      setIsLoading(false);
      
      // Set form default values
      form.reset({
        name: collectionData.name,
        description: collectionData.description || "",
      });
    };
    
    fetchCollection();
  }, [id, user, navigate, form]);
  
  const handleRemoveBook = async (bookId: string) => {
    if (!collection || !id) return;
    
    const success = await removeBookFromCollection(id, bookId);
    
    if (success) {
      // Update local state
      setCollectionBooks(prev => prev.filter(book => book.id !== bookId));
      setCollection(prev => {
        if (!prev) return null;
        return {
          ...prev,
          bookIds: prev.bookIds.filter(id => id !== bookId),
        };
      });
      
      toast({
        title: "Book Removed",
        description: "The book has been removed from your collection.",
      });
    }
  };
  
  const onEditSubmit = async (values: FormValues) => {
    if (!collection || !id) return;
    
    const updated = await updateCollection(id, {
      name: values.name,
      description: values.description,
    });
    
    if (updated) {
      setCollection(updated);
      setIsEditDialogOpen(false);
      
      toast({
        title: "Collection Updated",
        description: "Your collection has been successfully updated.",
      });
    }
  };
  
  const handleDeleteCollection = async () => {
    if (!id) return;
    
    const success = await deleteCollection(id);
    
    if (success) {
      toast({
        title: "Collection Deleted",
        description: "Your collection has been successfully deleted.",
      });
      
      navigate("/collections");
    }
  };
  
  if (!user || isLoading) {
    return (
      <div className="flex flex-col min-h-screen bg-library-cream">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-12">
          <div className="text-center py-12">
            <p>Loading collection...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  if (!collection) return null;
  
  return (
    <div className="flex flex-col min-h-screen bg-library-cream">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="mb-8">
          <Link 
            to="/collections" 
            className="inline-flex items-center text-gray-600 hover:text-library-navy mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Collections
          </Link>
          
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="font-serif text-3xl md:text-4xl font-bold flex items-center gap-2">
                <Bookmark className="h-6 w-6" />
                {collection.name}
              </h1>
              {collection.description && (
                <p className="text-gray-600 mt-2">{collection.description}</p>
              )}
            </div>
            
            <div className="flex items-center gap-3 mt-4 md:mt-0">
              <Button 
                variant="outline" 
                size="icon"
                onClick={() => setIsEditDialogOpen(true)}
              >
                <Edit className="h-4 w-4" />
              </Button>
              <Button 
                variant="destructive" 
                size="icon"
                onClick={() => setIsDeleteDialogOpen(true)}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
        
        {collectionBooks.length > 0 ? (
          <BookGrid books={collectionBooks} />
        ) : (
          <div className="text-center py-12 bg-white rounded-lg shadow-sm">
            <Bookmark className="h-12 w-12 mx-auto text-gray-400 mb-4" />
            <h3 className="text-xl font-medium mb-2">No Books in Collection</h3>
            <p className="text-gray-600 mb-6">
              Add books to your collection while browsing the catalog.
            </p>
            <Button onClick={() => navigate("/catalog")}>
              Browse Books
            </Button>
          </div>
        )}
      </main>
      
      <Footer />
      
      {/* Edit Collection Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Collection</DialogTitle>
          </DialogHeader>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onEditSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Collection Name</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description (Optional)</FormLabel>
                    <FormControl>
                      <Textarea 
                        className="resize-none"
                        {...field}
                        value={field.value || ""}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <DialogFooter>
                <Button type="submit">Save Changes</Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
      
      {/* Delete Collection Dialog */}
      <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-red-500" />
              Delete Collection
            </DialogTitle>
            <DialogDescription>
              Are you sure you want to delete this collection? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDeleteDialogOpen(false)}>
              Cancel
            </Button>
            <Button variant="destructive" onClick={handleDeleteCollection}>
              Delete Collection
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CollectionDetail;
