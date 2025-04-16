
import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Bookmark, ArrowLeft, Plus, Folder, Book } from "lucide-react";
import { getUserCollections, createCollection } from "@/services/collectionService";
import { UserBookCollection } from "@/types/book";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";

const formSchema = z.object({
  name: z.string().min(1, "Collection name is required"),
  description: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const Collections = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [collections, setCollections] = useState<UserBookCollection[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  
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
    
    const fetchCollections = async () => {
      const userCollections = await getUserCollections(user.id);
      setCollections(userCollections);
      setIsLoading(false);
    };
    
    fetchCollections();
  }, [user, navigate]);
  
  const onSubmit = async (values: FormValues) => {
    if (!user) return;
    
    const newCollection = await createCollection(
      user.id,
      values.name,
      values.description
    );
    
    if (newCollection) {
      setCollections(prev => [...prev, newCollection]);
      setIsCreateDialogOpen(false);
      form.reset();
    }
  };
  
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
          
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <h1 className="font-serif text-3xl md:text-4xl font-bold mb-4 md:mb-0">My Collections</h1>
            <Button 
              onClick={() => setIsCreateDialogOpen(true)}
              className="flex items-center gap-2"
            >
              <Plus className="h-4 w-4" />
              Create Collection
            </Button>
          </div>
        </div>
        
        {isLoading ? (
          <div className="text-center py-12">
            <p>Loading your collections...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {collections.length > 0 ? (
              collections.map((collection) => (
                <Card key={collection.id}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Bookmark className="h-5 w-5" />
                      {collection.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm mb-4">
                      {collection.description || "No description"}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Book className="h-4 w-4" />
                      <span>{collection.bookIds.length} books</span>
                    </div>
                    <div className="text-xs text-gray-400 mt-2">
                      Created: {format(new Date(collection.createdAt), 'PP')}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button 
                      variant="outline" 
                      className="w-full"
                      onClick={() => navigate(`/collections/${collection.id}`)}
                    >
                      View Collection
                    </Button>
                  </CardFooter>
                </Card>
              ))
            ) : (
              <div className="col-span-full text-center py-12 bg-white rounded-lg shadow-sm">
                <Folder className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                <h3 className="text-xl font-medium mb-2">No Collections Yet</h3>
                <p className="text-gray-600 mb-6">
                  Create your first collection to organize your favorite books.
                </p>
                <Button onClick={() => setIsCreateDialogOpen(true)}>
                  Create Collection
                </Button>
              </div>
            )}
          </div>
        )}
      </main>
      
      <Footer />
      
      {/* Create Collection Dialog */}
      <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create New Collection</DialogTitle>
          </DialogHeader>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Collection Name</FormLabel>
                    <FormControl>
                      <Input placeholder="My Favorites" {...field} />
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
                        placeholder="A collection of my favorite books..."
                        className="resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <DialogFooter>
                <Button type="submit">Create Collection</Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Collections;
