import { Book } from "@/types/book";

const book: Book = {
  id: "11",
  title: "Radical",
  author: "David Platt",
  description: "A book that challenges Christians to wake up from the American dream and consider how they can better follow Christ.",
  coverImage: "https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
  publishedYear: 2010,
  categories: ["Christian Living", "Missions", "Discipleship"],
  content: `
  Sometimes I feel like the church in America is a schizophrenic woman. On the one hand, we talk so much about practical steps to take in following Jesus. On the other hand, the consequence of all our talk is that we seem to have watered down Jesus' commands to the point where we can casually embrace them.
  
  I wonder if any of us would want a physician who had learned his practice through a correspondence course. What about a pilot, whose only training had been to master the flight simulator. In our more honest moments, we know that following Jesus requires more than casual association with him.
  `,
  pageCount: 230
};

export default book;