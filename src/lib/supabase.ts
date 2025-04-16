
import { createClient } from '@supabase/supabase-js';
import { Database } from '@/types/supabase';

// Initialize the Supabase client
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://hbiguszrgvqgrfkhpeso.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhiaWd1c3pyZ3ZxZ3Jma2hwZXNvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ4MjA1NTgsImV4cCI6MjA2MDM5NjU1OH0.6szWbY2PEPGbcsVm1uP_M5d8kDRf4sUhxO_PZ6Yt5_4';

// Check if Supabase credentials are available
if (!supabaseUrl || !supabaseAnonKey) {
  console.error(
    'Supabase credentials are missing. Make sure to set the VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY environment variables.'
  );
}

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);

// Helper function to check if Supabase is properly configured
export const isSupabaseConfigured = () => {
  return !!supabaseUrl && !!supabaseAnonKey;
};
