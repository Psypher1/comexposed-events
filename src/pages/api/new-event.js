/* Files in the api folder are for api endpoints */
import { MongoClient } from "mongodb";
// /api/new-event

async function handler(req, res, next) {
  if (req.method === "POST") {
    const data = req.body;

    // const { title, image, location, description } = data;

    // connect to mongodb
    const client = await MongoClient.connect(
      "mongodb+srv://dante:p3rf3ct3wgf@cluster0.hb47j.mongodb.net/comexposed?retryWrites=true&w=majority"
    );
    //get hold of database
    const db = client.db();
    // get hold of the collection
    const comexposedCollection = db.collection("comexposed");
    // insert into the db
    const result = await comexposedCollection.insertOne(data);

    console.log(result);

    client.close();
    // 201 - something was added
    res.status(201).json({ message: "Event inserted" });
  }
}

export default handler;
