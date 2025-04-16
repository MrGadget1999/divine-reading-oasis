import { Book } from "@/types/book";

export const books: Book[] = [
  {
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
  },
  {
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
  },
  {
    id: "3",
    title: "Confessions",
    author: "Saint Augustine",
    description: "The Confessions of Saint Augustine is the autobiography of Augustine of Hippo, written in Latin between AD 397 and 400. The work outlines Saint Augustine's sinful youth and his conversion to Christianity.",
    coverImage: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    publishedYear: 397,
    categories: ["Autobiography", "Theology", "Classic"],
    content: `
    Great art Thou, O Lord, and greatly to be praised; great is Thy power, and Thy wisdom infinite. And Thee would man praise; man, but a particle of Thy creation; man, that bears about him his mortality, the witness of his sin, the witness that Thou resistest the proud: yet would man praise Thee; he, but a particle of Thy creation. Thou awakest us to delight in Thy praise; for Thou madest us for Thyself, and our heart is restless, until it repose in Thee.

    Grant me, Lord, to know and understand which is first, to call on Thee or to praise Thee? and, again, to know Thee or to call on Thee? for who can call on Thee, not knowing Thee? for he that knoweth Thee not, may call on Thee as other than Thou art. Or, is it rather, that we call on Thee that we may know Thee?
    `,
    pageCount: 416
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
    id: "7",
    title: "Knowing God",
    author: "J.I. Packer",
    description: "J.I. Packer's classic work explores the nature of God and how a deeper understanding of who He is transforms our relationship with Him.",
    coverImage: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    publishedYear: 1973,
    categories: ["Theology", "Spiritual Growth", "Classic"],
    content: `
    What were we made for? To know God. What aim should we set ourselves in life? To know God. What is the "eternal life" that Jesus gives? Knowledge of God. "This is life eternal, that they might know thee, the only true God, and Jesus Christ, whom thou hast sent" (John 17:3). What is the best thing in life, bringing more joy, delight, and contentment, than anything else? Knowledge of God. "Thus saith the Lord, Let not the wise man glory in his wisdom, neither let the mighty man glory in his might, let not the rich man glory in his riches; but let him that glorieth glory in this, that he understandeth and knoweth me" (Jer. 9:23 f.). What, of all the states God ever sees man in, gives Him most pleasure? Knowledge of Himself. "I desire... the knowledge of God more than burnt offerings," says God (Hos. 6:6).
    `,
    pageCount: 286
  },
  {
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
  },
  {
    id: "9",
    title: "Desiring God",
    author: "John Piper",
    description: "Desiring God reveals that there is no need to choose between duty and delight in the Christian life. Piper argues that faith and pleasure are not at odds.",
    coverImage: "https://images.unsplash.com/photo-1519682577862-22b62b24e493?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80",
    publishedYear: 1986,
    categories: ["Theology", "Spiritual Growth", "Christian Living"],
    content: `
    The ultimate ground of Christian Hedonism is the fact that God is uppermost in His own affections: The chief end of God is to glorify God and enjoy Himself forever. The reason this may sound strange is that we are more accustomed to think about our duty than God's design. And when we do ask about God's design, we are too prone to describe it with ourselves at the center of God's affections. We may say, for example, that His design is to redeem the world. Or to save sinners. Or to restore creation. Or the like.
    
    But God's saving designs are penultimate, not ultimate. Redemption, salvation, and restoration are not God's ultimate goal. These He performs for the sake of something greater: namely, the enjoyment He has in glorifying Himself. The bedrock foundation of Christian Hedonism is not God's allegiance to us, but to Himself.
    `,
    pageCount: 358
  },
  {
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
  },
  {
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
  },
  {
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
  }
];

export const getFeaturedBooks = (): Book[] => {
  return books.slice(0, 3);
};

export const getBookById = (id: string): Book | undefined => {
  return books.find(book => book.id === id);
};

export const getBooksByCategory = (category: string): Book[] => {
  const lowerCategory = category.toLowerCase();
  return books.filter(book => 
    book.categories.some(cat => cat.toLowerCase() === lowerCategory)
  );
};

// Pagination utility function
export const getBooksPage = (page: number, booksPerPage: number, filteredBooks?: Book[]): {
  books: Book[],
  totalPages: number
} => {
  const booksToPage = filteredBooks || books;
  const startIndex = (page - 1) * booksPerPage;
  const endIndex = startIndex + booksPerPage;
  const pagedBooks = booksToPage.slice(startIndex, endIndex);
  const totalPages = Math.ceil(booksToPage.length / booksPerPage);
  
  return {
    books: pagedBooks,
    totalPages
  };
};
