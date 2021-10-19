import Image from "next/image";
import Card from "../components/ui/Card";

import EventDetail from "../components/events/EventDetail";
import { MongoClient, ObjectId } from "mongodb";

export default function Event({ eventData }) {
  return (
    <EventDetail
      title={eventData.title}
      image={eventData.image}
      location={eventData.location}
      description={eventData.description}
    />
  );
}

// required is page is dynamic in conjuction with getStaticProps
export async function getStaticPaths() {
  // connect to mongodb
  const client = await MongoClient.connect(process.env.MONGO_URI);
  //get hold of database
  const db = client.db();
  // get hold of the collection
  const comexposedCollection = db.collection("comexposed");

  const events = await comexposedCollection.find({}, { _id: 1 }).toArray();

  client.close();

  const paths = events.map((event) => ({
    params: { eventId: event._id.toString() },
  }));

  return {
    // false - paths has all supported values. if unsuppored 404 wil be displayed
    // true - next wil try to generate page for path dynamicaly
    fallback: false,
    paths,
  };
}

export async function getStaticProps(context) {
  const eventId = context.params.eventId;

  console.log(eventId);
  // connect to mongodb
  const client = await MongoClient.connect(process.env.MONGO_URI);
  //get hold of database
  const db = client.db();
  // get hold of the collection
  const comexposedCollection = db.collection("comexposed");

  const singleEvent = await comexposedCollection.findOne({
    _id: ObjectId(eventId),
  });

  client.close();

  // fetch data for single event
  return {
    props: {
      eventData: {
        id: singleEvent._id.toString(),
        title: singleEvent.title,
        location: singleEvent.location,
        description: singleEvent.description,
        image: singleEvent.image,
      },
    },
  };
}
