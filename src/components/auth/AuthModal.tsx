
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';
import { useAuth } from '@/contexts/AuthContext';
import { AlertCircle } from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<"signin" | "signup">("signin");
  const { isConfigured } = useAuth();

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="font-serif text-2xl text-center">Account Access</DialogTitle>
          <DialogDescription className="text-center">
            {isConfigured ? (
              "Sign in or create an account to track your reading progress and create collections."
            ) : (
              <div className="flex items-center justify-center text-amber-600 mt-2">
                <AlertCircle className="h-4 w-4 mr-2" />
                <span>Supabase configuration is missing. Authentication is unavailable.</span>
              </div>
            )}
          </DialogDescription>
        </DialogHeader>
        
        {isConfigured ? (
          <Tabs defaultValue={activeTab} onValueChange={(value) => setActiveTab(value as "signin" | "signup")}>
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="signin">Sign In</TabsTrigger>
              <TabsTrigger value="signup">Sign Up</TabsTrigger>
            </TabsList>
            
            <TabsContent value="signin">
              <SignInForm onSuccess={onClose} />
            </TabsContent>
            
            <TabsContent value="signup">
              <SignUpForm onSuccess={() => setActiveTab("signin")} />
            </TabsContent>
          </Tabs>
        ) : (
          <div className="p-4 bg-amber-50 border border-amber-200 rounded-md text-amber-800 text-sm mt-4">
            <p className="font-medium">Supabase Configuration Missing</p>
            <p className="mt-2">
              To enable authentication, please set the following environment variables:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>VITE_SUPABASE_URL</li>
              <li>VITE_SUPABASE_ANON_KEY</li>
            </ul>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default AuthModal;
