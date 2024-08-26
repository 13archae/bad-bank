const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = "mongodb://localhost:27017";
let db = null;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

client.connect().then((resolve, reject) => {
  db = client.db("badbank");
  console.log("Connected to db.");
});

async function create(thename, email, password) {
  return new Promise((resolve, reject) => {
    console.log("in create()");
    const collection = db.collection("users");
    const doc = { name: thename, email: email, password: password, balance: 0 };
    try {
      collection.insertOne(doc);
      console.log("success");
      resolve(doc);
    } catch (err) {
      console.log("error: ", err);
      reject(err);
    }
  });
}

async function all() {
  return new Promise((resolve, reject) => {
    try {
      const collection = db.collection("users");
      console.log("in all()");
      const users = collection.find();
      //console.log("users:  ", users);
      const docsArray = users.toArray();
      console.log("find result: ");
      resolve(docsArray);
    } catch (err) {
      console.log("error:  ", err);
      reject(err);
    }
  });
}

module.exports = {
  create,
  all,
};
