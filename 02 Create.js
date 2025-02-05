// Run This command in mongodb to get Started
db.products.insertOne({ item: "card", qty: 15 });
db.products.insertMany([
  { item: "card1", qty: 15 },
  { item: "card2", qty: 25 },
  { item: "card3", qty: 35 },
  { item: "card4", qty: 45 },
  { item: "card5", qty: 55 },
  { item: "card6", qty: 65 },
  { item: "card7", qty: 75 },
]);
db.inventory.insertMany([  
  {
    title: "Post Title 1",
    body: "Body of post.",
    category: "Technology",
    likes: 1,
    tags: ["news", "events"],
    date: Date()
  },
  {
    title: "Post Title 2",
    body: "Body of post.",
    category: "Event",
    likes: 2,
    tags: ["news", "events"],
    date: Date()
  },
  {
    title: "Post Title 3",
    body: "Body of post.",
    category: "Technology",
    likes: 3,
    tags: ["news", "events"],
    date: Date()
  },
  {
    title: "Post Title 4",
    body: "Body of post.",
    category: "Event",
    likes: 4,
    tags: ["news", "events"],
    date: Date()
  }
]);