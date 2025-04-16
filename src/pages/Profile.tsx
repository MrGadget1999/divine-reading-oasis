
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { User, BookOpen, Bookmark } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const Profile = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  
  // If not logged in, redirect to home
  if (!user) {
    navigate("/");
    return null;
  }
  
  // Get user initials for avatar
  const getUserInitials = () => {
    if (!user?.email) return 'U';
    return user.email.charAt(0).toUpperCase();
  };
  
  return (
    <div className="flex flex-col min-h-screen bg-library-cream">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-12">
        <h1 className="font-serif text-3xl md:text-4xl font-bold text-center mb-12">My Profile</h1>
        
        <div className="max-w-3xl mx-auto grid grid-cols-1 gap-8">
          {/* Profile Card */}
          <Card>
            <CardHeader className="text-center pb-2">
              <div className="mx-auto mb-4">
                <Avatar className="h-24 w-24">
                  <AvatarFallback className="bg-library-navy text-white text-4xl">
                    {getUserInitials()}
                  </AvatarFallback>
                </Avatar>
              </div>
              <CardTitle className="text-2xl">{user.email}</CardTitle>
              <CardDescription>Account ID: {user.id}</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Button 
                  variant="outline" 
                  onClick={() => navigate("/reading-history")}
                  className="flex justify-center items-center gap-2"
                >
                  <BookOpen className="h-5 w-5" />
                  Reading History
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => navigate("/collections")}
                  className="flex justify-center items-center gap-2"
                >
                  <Bookmark className="h-5 w-5" />
                  My Collections
                </Button>
              </div>
            </CardContent>
          </Card>
          
          {/* Account Management */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Account Management</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button 
                variant="outline" 
                className="w-full justify-start"
                onClick={() => console.log("Change email clicked")}
              >
                Change Email
              </Button>
              <Button 
                variant="outline" 
                className="w-full justify-start"
                onClick={() => console.log("Change password clicked")}
              >
                Change Password
              </Button>
              <Button 
                variant="outline" 
                className="w-full justify-start"
                onClick={() => signOut()}
              >
                Sign Out
              </Button>
              <Button 
                variant="destructive" 
                className="w-full justify-start"
                onClick={() => setIsDeleteDialogOpen(true)}
              >
                Delete Account
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <Footer />
      
      {/* Delete Account Confirmation Dialog */}
      <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Delete Account</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete your account? This action cannot be undone and you will lose all your reading progress and collections.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDeleteDialogOpen(false)}>
              Cancel
            </Button>
            <Button variant="destructive" onClick={() => console.log("Delete account confirmed")}>
              Delete Account
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Profile;
