```javascript
// Correct usage of $inc operator
db.collection.updateOne({"_id":ObjectId("65372115e37867a2e5860e76")},{$inc:{counter: 1}});
```