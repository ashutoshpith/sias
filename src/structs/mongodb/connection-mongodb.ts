import * as mongodb from "mongodb";
import * as assert from "assert";

export class ConnectionMongoDb {
  main() {
    const url = "mongodb://localhost:27017";
    const dbName = "DAWNING";

    mongodb.MongoClient.connect(
      url,
      { useUnifiedTopology: true },
      (err, client) => {
        assert.equal(null, err);
        console.log("connected successfully to server");
        const dbc = client.db(dbName);
        dbc
          .collection("companies")
          .find({})
          .toArray((err, docs) => {
            err ? console.log(err) : console.log(docs);
          });
        // client.close();
      }
    );
  }
}
