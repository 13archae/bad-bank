const { MongoClient, ServerApiVersion } = require("mongodb");

// Replace the placeholder with your Atlas connection string
const uri = "mongodb://localhost:27017";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server (optional starting in v4.7)
    await client.connect();

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );

    const dbName = "badbank";
    const db = client.db(dbName);

    let collection = db.collection("customers");
    let number = Math.random * 1000;
    let name = "user" + number;
    let email = name + "@MIT.edu";
    let doc = { name, email };

    await collection.insertOne(doc, function (err, result) {
      if (err) {
        console.log("error: ", err);
      }
      console.log("Documnent Inserted");
    });
  } catch (err) {
    console.log(err);
  } finally {
    // Ensures that the client will close when you finish/error
    client.close();
  }
}
run().catch(console.dir);
