db.products.deleteMany({});
db.products.remove({});
db.inventory.deleteOne({ status: "A" });
db.inventory.deleteMany({ status: "A" });