
import { supabase } from '@/lib/supabase';
import { UserReadingProgress } from '@/types/book';

export const getReadingProgress = async (userId: string, bookId: string): Promise<UserReadingProgress | null> => {
  const { data, error } = await supabase
    .from('user_reading_progress')
    .select('*')
    .eq('user_id', userId)
    .eq('book_id', bookId)
    .single();
  
  if (error) {
    console.error('Error fetching reading progress:', error);
    return null;
  }
  
  if (!data) return null;
  
  return {
    id: data.id,
    userId: data.user_id,
    bookId: data.book_id,
    currentPage: data.current_page,
    lastReadAt: data.last_read_at,
    completionPercentage: data.completion_percentage,
    isCompleted: data.is_completed
  };
};

export const saveReadingProgress = async (
  userId: string,
  bookId: string,
  currentPage: number,
  totalPages: number
): Promise<UserReadingProgress | null> => {
  const completionPercentage = Math.round((currentPage / totalPages) * 100);
  const isCompleted = completionPercentage >= 100;
  
  // Check if progress record exists first
  const { data: existingProgress } = await supabase
    .from('user_reading_progress')
    .select('id')
    .eq('user_id', userId)
    .eq('book_id', bookId)
    .single();
  
  const now = new Date().toISOString();
  
  if (existingProgress) {
    // Update existing record
    const { data, error } = await supabase
      .from('user_reading_progress')
      .update({
        current_page: currentPage,
        last_read_at: now,
        completion_percentage: completionPercentage,
        is_completed: isCompleted
      })
      .eq('id', existingProgress.id)
      .select()
      .single();
    
    if (error) {
      console.error('Error updating reading progress:', error);
      return null;
    }
    
    return {
      id: data.id,
      userId: data.user_id,
      bookId: data.book_id,
      currentPage: data.current_page,
      lastReadAt: data.last_read_at,
      completionPercentage: data.completion_percentage,
      isCompleted: data.is_completed
    };
  } else {
    // Create new record
    const { data, error } = await supabase
      .from('user_reading_progress')
      .insert({
        user_id: userId,
        book_id: bookId,
        current_page: currentPage,
        last_read_at: now,
        completion_percentage: completionPercentage,
        is_completed: isCompleted
      })
      .select()
      .single();
    
    if (error) {
      console.error('Error creating reading progress:', error);
      return null;
    }
    
    return {
      id: data.id,
      userId: data.user_id,
      bookId: data.book_id,
      currentPage: data.current_page,
      lastReadAt: data.last_read_at,
      completionPercentage: data.completion_percentage,
      isCompleted: data.is_completed
    };
  }
};

export const getUserReadingHistory = async (userId: string): Promise<UserReadingProgress[]> => {
  const { data, error } = await supabase
    .from('user_reading_progress')
    .select('*')
    .eq('user_id', userId)
    .order('last_read_at', { ascending: false });
  
  if (error) {
    console.error('Error fetching reading history:', error);
    return [];
  }
  
  return data.map(item => ({
    id: item.id,
    userId: item.user_id,
    bookId: item.book_id,
    currentPage: item.current_page,
    lastReadAt: item.last_read_at,
    completionPercentage: item.completion_percentage,
    isCompleted: item.is_completed
  }));
};
