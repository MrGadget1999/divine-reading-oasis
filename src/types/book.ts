
export interface Book {
  id: string;
  title: string;
  author: string;
  description: string;
  coverImage: string;
  publishedYear: number;
  categories: string[];
  content: string;
  pageCount: number;
}

export interface UserReadingProgress {
  id: string;
  userId: string;
  bookId: string;
  currentPage: number;
  lastReadAt: string;
  completionPercentage: number;
  isCompleted: boolean;
}

export interface UserBookCollection {
  id: string;
  userId: string;
  name: string;
  description?: string;
  bookIds: string[];
  createdAt: string;
  updatedAt: string;
}
