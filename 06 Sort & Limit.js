db.inventory.find().limit(1);
db.inventory.find().skip(1);
db.inventory.find().sort({qty:1});
db.inventory.find().sort({qty:-1});
no=8
db.inventory.find().skip((pageNo-1)*no).limit(no);
// pageNo=1  db.inventory.find().skip(0).limit(8);
// pageNo=2  db.inventory.find().skip(0).limit(8);