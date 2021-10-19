import { MongoClient } from "mongodb";
import Head from "next/head";

import EventList from "../components/events/EventList";

const DUMMY_EVENTS = [
  {
    id: "m1",
    title: "This is a 1st meetup",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    location: "Meetupstreet 5, 12345 Meetup City",
    description:
      "This is a 1st, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },
  {
    id: "m2",
    title: "This is a 2nd meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
    location: "Meetupstreet 5, 12345 Meetup City",
    description:
      "This is a 2nd, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },
  {
    id: "m3",
    title: "This is a 3rd meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
    location: "Meetupstreet 5, 12345 Meetup City",
    description:
      "This is a 3rd, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },
];

export default function Home({ events }) {
  return (
    <>
      <Head>
        <title>Comexposed Events</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Header /> */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl text-purple-800 text-center font-semibold mb-4">
        Comexposed Events
      </h1>
      <EventList events={events} />
    </>
  );
}
// fetch data for pre rendering
export async function getStaticProps() {
  // fetch data from \npmapi/database or file system
  // connect to mongodb
  const client = await MongoClient.connect(
    "mongodb+srv://dante:p3rf3ct3wgf@cluster0.hb47j.mongodb.net/comexposed?retryWrites=true&w=majority"
  );
  //get hold of database
  const db = client.db();
  // get hold of the collection
  const comexposedCollection = db.collection("comexposed");

  // find documents in collection and change to array
  const events = await comexposedCollection.find().toArray();

  client.close();

  return {
    props: {
      // format of id in mongodb can't be accssed as is - so conversion must be done
      events: events.map((event) => ({
        title: event.title,
        location: event.location,
        description: event.description,
        image: event.image,
        id: event._id.toString(),
      })),
    },
    // if data changes frequently - increamental static gen
    revalidate: 1,
  };
}

// will always run on server, never on client
// export async function getServerSideProps(context) {
//   // fetch data from API
//   const req = context.req;
//   const res = context.res;

//   return {
//     props: {
//       events: DUMMY_EVENTS,
//     },
//   };
// }
