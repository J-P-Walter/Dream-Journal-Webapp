const { MongoClient } = require("mongodb");
const DB = process.env.DATABASE_URI;

const client = new MongoClient(DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

var _db;

module.exports = {
  connectToServer: (callback) => {
    client.connect((err, db) => {
      // Verify we got a good "db" object
      if (db) {
        _db = db.db("Dream_Entries");
        console.log("Successfully connected to MongoDB.");
      }
      return callback(err);
    });
  },

  getDb: () => {
    return _db;
  },
};
