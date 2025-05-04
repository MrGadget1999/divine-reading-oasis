import { Book } from "@/types/book";

const book: Book =  {
  id: "2",
  title: "Mere Christianity",
  author: "C.S. Lewis",
  description: "Mere Christianity is a theological book by C. S. Lewis, adapted from a series of BBC radio talks made between 1941 and 1944, while Lewis was at Oxford during World War II.",
  coverImage: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
  publishedYear: 1952,
  categories: ["Apologetics", "Theology", "Philosophy"],
  content: `
  Everyone has heard people quarreling. Sometimes it sounds funny and sometimes it sounds merely unpleasant; but however it sounds, I believe we can learn something very important from listening to the kind of things they say. They say things like this: "How'd you like it if anyone did the same to you?"—"That's my seat, I was there first"—"Leave him alone, he isn't doing you any harm"— "Why should you shove in first?"—"Give me a bit of your orange, I gave you a bit of mine"—"Come on, you promised."

  People say things like that every day, educated people as well as uneducated, and children as well as grown-ups. Now what interests me about all these remarks is that the man who makes them is not merely saying that the other man's behavior does not happen to please him. He is appealing to some kind of standard of behavior which he expects the other man to know about.
  `,
  pageCount: 227
};

export default book;