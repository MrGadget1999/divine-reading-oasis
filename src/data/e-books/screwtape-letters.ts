import { Book } from "@/types/book";

const book: Book = {
  id: "8",
  title: "The Screwtape Letters",
  author: "C.S. Lewis",
  description: "A masterpiece of satire, this classic has entertained and enlightened readers the world over with its sly and ironic portrayal of human life from the vantage point of Screwtape, a senior tempter in the service of 'Our Father Below.'",
  coverImage: "https://images.unsplash.com/photo-1515098506762-79e1384e9d8e?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
  publishedYear: 1942,
  categories: ["Fiction", "Spiritual Warfare", "Classic"],
  content: `
  My dear Wormwood,
  
  I note what you say about guiding your patient's reading and taking care that he sees a good deal of his materialist friend. But are you not being a trifle naïf? It sounds as if you supposed that argument was the way to keep him out of the Enemy's clutches. That might have been so if he had lived a few centuries earlier. At that time the humans still knew pretty well when a thing was proved and when it was not; and if it was proved they really believed it. They still connected thinking with doing and were prepared to alter their way of life as the result of a chain of reasoning. But what with the weekly press and other such weapons, we have largely altered that.
  `,
  pageCount: 209
};

export default book;