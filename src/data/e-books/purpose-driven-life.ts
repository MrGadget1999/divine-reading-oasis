import { Book } from "@/types/book";

const book: Book = {
  id: "10",
  title: "The Purpose Driven Life",
  author: "Rick Warren",
  description: "This book will help you understand why you are alive and reveal God's amazing plan for you both here and now, and for eternity.",
  coverImage: "https://images.unsplash.com/photo-1531072901881-d644216d4bf9?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
  publishedYear: 2002,
  categories: ["Christian Living", "Spiritual Growth", "Self-Help"],
  content: `
  It's not about you.
  
  The purpose of your life is far greater than your own personal fulfillment, your peace of mind, or even your happiness. It's far greater than your family, your career, or even your wildest dreams and ambitions. If you want to know why you were placed on this planet, you must begin with God. You were born by his purpose and for his purpose.
  
  The search for the purpose of life has puzzled people for thousands of years. That's because we typically begin at the wrong starting point—ourselves. We ask self-centered questions like What do I want to be? What should I do with my life? What are my goals, my ambitions, my dreams for my future? But focusing on ourselves will never reveal our life's purpose.
  `,
  pageCount: 368
};

export default book;