
import { supabase } from '@/lib/supabase';
import { UserBookCollection } from '@/types/book';

export const getUserCollections = async (userId: string): Promise<UserBookCollection[]> => {
  const { data, error } = await supabase
    .from('user_collections')
    .select('*')
    .eq('user_id', userId)
    .order('name');
  
  if (error) {
    console.error('Error fetching user collections:', error);
    return [];
  }
  
  return data.map(item => ({
    id: item.id,
    userId: item.user_id,
    name: item.name,
    description: item.description || undefined,
    bookIds: item.book_ids,
    createdAt: item.created_at,
    updatedAt: item.updated_at
  }));
};

export const getCollection = async (id: string): Promise<UserBookCollection | null> => {
  const { data, error } = await supabase
    .from('user_collections')
    .select('*')
    .eq('id', id)
    .single();
  
  if (error) {
    console.error('Error fetching collection:', error);
    return null;
  }
  
  return {
    id: data.id,
    userId: data.user_id,
    name: data.name,
    description: data.description || undefined,
    bookIds: data.book_ids,
    createdAt: data.created_at,
    updatedAt: data.updated_at
  };
};

export const createCollection = async (
  userId: string,
  name: string,
  description?: string,
  bookIds: string[] = []
): Promise<UserBookCollection | null> => {
  const now = new Date().toISOString();
  
  const { data, error } = await supabase
    .from('user_collections')
    .insert({
      user_id: userId,
      name,
      description,
      book_ids: bookIds,
      created_at: now,
      updated_at: now
    })
    .select()
    .single();
  
  if (error) {
    console.error('Error creating collection:', error);
    return null;
  }
  
  return {
    id: data.id,
    userId: data.user_id,
    name: data.name,
    description: data.description || undefined,
    bookIds: data.book_ids,
    createdAt: data.created_at,
    updatedAt: data.updated_at
  };
};

export const updateCollection = async (
  id: string,
  updates: {
    name?: string;
    description?: string | null;
    bookIds?: string[];
  }
): Promise<UserBookCollection | null> => {
  const now = new Date().toISOString();
  
  const { data, error } = await supabase
    .from('user_collections')
    .update({
      ...updates,
      updated_at: now
    })
    .eq('id', id)
    .select()
    .single();
  
  if (error) {
    console.error('Error updating collection:', error);
    return null;
  }
  
  return {
    id: data.id,
    userId: data.user_id,
    name: data.name,
    description: data.description || undefined,
    bookIds: data.book_ids,
    createdAt: data.created_at,
    updatedAt: data.updated_at
  };
};

export const deleteCollection = async (id: string): Promise<boolean> => {
  const { error } = await supabase
    .from('user_collections')
    .delete()
    .eq('id', id);
  
  if (error) {
    console.error('Error deleting collection:', error);
    return false;
  }
  
  return true;
};

export const addBookToCollection = async (collectionId: string, bookId: string): Promise<boolean> => {
  // First, get the current collection
  const collection = await getCollection(collectionId);
  if (!collection) return false;
  
  // Check if book is already in collection
  if (collection.bookIds.includes(bookId)) return true;
  
  // Add book to collection
  const updatedBookIds = [...collection.bookIds, bookId];
  const result = await updateCollection(collectionId, { bookIds: updatedBookIds });
  
  return !!result;
};

export const removeBookFromCollection = async (collectionId: string, bookId: string): Promise<boolean> => {
  // First, get the current collection
  const collection = await getCollection(collectionId);
  if (!collection) return false;
  
  // Remove book from collection
  const updatedBookIds = collection.bookIds.filter(id => id !== bookId);
  const result = await updateCollection(collectionId, { bookIds: updatedBookIds });
  
  return !!result;
};
