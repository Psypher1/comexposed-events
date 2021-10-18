/* Files in the api folder are for api endpoints */
import { MongoClient } from "mongodb";
// /api/new-event

function handler(req, res, next) {
  if (req.method === "POST") {
    const data = req.body;

    const { title, image, location, description } = data;

    // connect to mongodb
    const client = await MongoClient.connect(
      "mongodb+srv://dante:p3rf3ct3wgf@cluster0.hb47j.mongodb.net/comexposed?retryWrites=true&w=majority"
    );
    //    get hold of database
    const db = client.db();
  }
}

export default handler;
