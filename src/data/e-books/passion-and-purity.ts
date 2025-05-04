import { Book } from "@/types/book";

const book: Book = {
  id: "12",
  title: "Passion and Purity",
  author: "Elisabeth Elliot",
  description: "Using her own life as an example, Elisabeth Elliot guides singles through the often difficult terrain of relationships.",
  coverImage: "https://images.unsplash.com/photo-1605256585681-455837661b18?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
  publishedYear: 1984,
  categories: ["Relationships", "Christian Living", "Biography"],
  content: `
  Of all the struggles of the single life, I believe, the hardest is the struggle to learn patience, trusting God's love, and believing that He is working for your very best—while you wait.
  
  When it comes to passion, we can learn either to be its master, or its victim. The struggle with passion is not new. Every human being who has ever lived has had to deal with it in one way or another. What amazes me, however, is how little is said about this struggle in our modern age, when we are supposedly so enlightened.
  `,
  pageCount: 192
};

export default book;