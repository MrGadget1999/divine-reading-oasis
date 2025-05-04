import { Book } from "@/types/book";

const book: Book = {
  id: "5",
  title: "The Practice of the Presence of God",
  author: "Brother Lawrence",
  description: "The Practice of the Presence of God is a book of collected teachings of Brother Lawrence, a 17th-century Carmelite friar, compiled by Father Joseph de Beaufort.",
  coverImage: "https://images.unsplash.com/photo-1565071559227-20451ca9a829?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
  publishedYear: 1691,
  categories: ["Devotional", "Spiritual Growth", "Classic"],
  content: `
  The first time I saw Brother Lawrence was upon the 3rd of August, 1666. He told me that God had done him a singular favor in his conversion at the age of eighteen. That in the winter, seeing a tree stripped of its leaves, and considering that within a little time the leaves would be renewed and after that the flowers and fruit appear, he received a high view of the Providence and Power of God, which has never since been effaced from his soul. That this view had perfectly set him loose from the world, and kindled in him such a love for God, that he could not tell whether it had increased during the more than forty years he had lived since.

  That he had been footman to M. Fieubert, the treasurer, and that he was a great awkward fellow who broke everything. That he had desired to be received into a monastery, thinking that he would there be made to smart for his awkwardness and the faults he should commit, and so he should sacrifice to God his life, with its pleasures; but that God had disappointed him, he having met with nothing but satisfaction in that state.
  `,
  pageCount: 96
};

export default book;