
export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      books: {
        Row: {
          id: string
          title: string
          author: string
          description: string
          coverImage: string
          publishedYear: number
          categories: string[]
          content: string
          pageCount: number
          created_at: string
        }
        Insert: {
          id?: string
          title: string
          author: string
          description: string
          coverImage: string
          publishedYear: number
          categories: string[]
          content: string
          pageCount: number
          created_at?: string
        }
        Update: {
          id?: string
          title?: string
          author?: string
          description?: string
          coverImage?: string
          publishedYear?: number
          categories?: string[]
          content?: string
          pageCount?: number
          created_at?: string
        }
      }
      user_reading_progress: {
        Row: {
          id: string
          user_id: string
          book_id: string
          current_page: number
          last_read_at: string
          completion_percentage: number
          is_completed: boolean
        }
        Insert: {
          id?: string
          user_id: string
          book_id: string
          current_page: number
          last_read_at?: string
          completion_percentage: number
          is_completed?: boolean
        }
        Update: {
          id?: string
          user_id?: string
          book_id?: string
          current_page?: number
          last_read_at?: string
          completion_percentage?: number
          is_completed?: boolean
        }
      }
      user_collections: {
        Row: {
          id: string
          user_id: string
          name: string
          description: string | null
          book_ids: string[]
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          name: string
          description?: string | null
          book_ids: string[]
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          name?: string
          description?: string | null
          book_ids?: string[]
          created_at?: string
          updated_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}
