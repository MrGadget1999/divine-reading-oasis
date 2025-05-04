import { Book } from "@/types/book";

const book: Book = {
  id: "6",
  title: "The Cost of Discipleship",
  author: "Dietrich Bonhoeffer",
  description: "One of the most important theologians of the twentieth century illuminates the relationship between ourselves and the teachings of Jesus in this classic text on ethics, humanism, and civic duty.",
  coverImage: "https://images.unsplash.com/photo-1535398089889-dd807df1dfaa?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
  publishedYear: 1937,
  categories: ["Theology", "Ethics", "Discipleship"],
  content: `
  Cheap grace is the deadly enemy of our Church. We are fighting today for costly grace. Cheap grace means grace sold on the market like cheapjacks' wares. The sacraments, the forgiveness of sin, and the consolations of religion are thrown away at cut prices. Grace is represented as the Church's inexhaustible treasury, from which she showers blessings with generous hands, without asking questions or fixing limits. Grace without price; grace without cost! The essence of grace, we suppose, is that the account has been paid in advance; and, because it has been paid, everything can be had for nothing....

  Cheap grace is the preaching of forgiveness without requiring repentance, baptism without church discipline, Communion without confession, absolution without personal confession. Cheap grace is grace without discipleship, grace without the cross, grace without Jesus Christ, living and incarnate.
  `,
  pageCount: 320
};

export default book;