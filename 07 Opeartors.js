db.inventory.find({
  status: "A",
  qty: { $lt: 30 },
});
db.inventory.find({
  $or: [{ status: "A" }, { qty: { $lt: 30 } }],
});
db.inventory.find({
  status: "A",
  $or: [{ qty: { $lt: 30 } }, { item: { $regex: "^p" } }],
});
