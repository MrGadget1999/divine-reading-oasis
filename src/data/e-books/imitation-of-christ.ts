import { Book } from "@/types/book";

const book: Book = {
  id: "4",
  title: "The Imitation of Christ",
  author: "Thomas à Kempis",
  description: "The Imitation of Christ is a Christian devotional book. It was first composed in Latin ca. 1418-1427. It is a handbook for spiritual life arising from the Devotio Moderna movement.",
  coverImage: "https://images.unsplash.com/photo-1476275466078-4007374efbbe?ixlib=rb-1.2.1&auto=format&fit=crop&w=1029&q=80",
  publishedYear: 1418,
  categories: ["Devotional", "Spiritual Growth", "Classic"],
  content: `
  "HE WHO follows Me, walks not in darkness," says the Lord. By these words of Christ we are advised to imitate His life and habits, if we wish to be truly enlightened and free from all blindness of heart. Let our chief effort, therefore, be to study the life of Jesus Christ.

  The teaching of Christ is more excellent than all the advice of the saints, and he who has His spirit will find in it a hidden manna. Now, there are many who hear the Gospel often but care little for it because they have not the spirit of Christ. Yet whoever wishes to understand fully the words of Christ must try to pattern his whole life on that of Christ.
  `,
  pageCount: 260
};

export default book;