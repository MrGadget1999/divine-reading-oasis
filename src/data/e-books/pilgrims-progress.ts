import { Book } from "@/types/book";

const book: Book = {
  id: "1",
  title: "Pilgrim's Progress",
  author: "John Bunyan",
  description: "The Pilgrim's Progress from This World, to That Which Is to Come is a Christian allegory written by John Bunyan. It is regarded as one of the most significant works of religious, theological fiction in English literature.",
  coverImage: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
  publishedYear: 1678,
  categories: ["Allegory", "Classic", "Theology"],
  content: `
  As I walked through the wilderness of this world, I lighted on a certain place where was a Den, and I laid me down in that place to sleep: and, as I slept, I dreamed a dream. I dreamed, and behold, I saw a man clothed with rags, standing in a certain place, with his face from his own house, a book in his hand, and a great burden upon his back. I looked, and saw him open the book, and read therein; and, as he read, he wept, and trembled; and, not being able longer to contain, he brake out with a lamentable cry, saying, "What shall I do?"

  In this plight, therefore, he went home and refrained himself as long as he could, that his wife and children should not perceive his distress; but he could not be silent long, because that his trouble increased. Wherefore at length he brake his mind to his wife and children; and thus he began to talk to them: O my dear wife, said he, and you the children of my bowels, I, your dear friend, am in myself undone by reason of a burden that lieth hard upon me; moreover, I am for certain informed that this our city will be burned with fire from heaven; in which fearful overthrow, both myself, with thee my wife, and you my sweet ba! bes, shall miserably come to ruin, except (which yet I see not) some way of escape can be found, whereby we may be delivered.
  `,
  pageCount: 328
};

export default book;