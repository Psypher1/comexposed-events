import { MongoClient } from "mongodb";
import Head from "next/head";

import EventList from "../components/events/EventList";

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
  const client = await MongoClient.connect(process.env.MONGO_URI);
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
