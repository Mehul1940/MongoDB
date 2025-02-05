db.products.find();
db.products.find({});
db.products.find({ qty: 75 });

db.inventory.find({ tags: { $in: ["news", "A"] } });
// AND
db.inventory.find({
  status: "A",
  qty: { $lt: 30 },
});
//OR
db.inventory.find({
  $or: [{ status: "A" }, { qty: { $lt: 30 } }],
});
db.inventory.find({
  $or: [{ status: "D" }, { qty: { $lt: 30 } }],
});
