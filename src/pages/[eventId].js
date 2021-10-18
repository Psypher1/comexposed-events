import Image from "next/image";
import Card from "../components/ui/Card";

import EventDetail from "../components/events/EventDetail";

export default function Event() {
  return (
    <EventDetail
      title=" This is a first meetup"
      image="https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
      location="Meetupstreet 5, 12345 Meetup City"
      description="This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!"
    />
  );
}

// required is page is dynamic in conjuction with getStaticProps
export async function getStaticPaths() {
  return {
    // false - paths has all supported values. if unsuppored 404 wil be displayed
    // true - next wil try to generate page for path dynamicaly
    fallback: false,
    paths: [
      {
        params: {
          eventId: "m1",
        },
      },
      {
        params: {
          eventId: "m2",
        },
      },
      {
        params: {
          eventId: "m3",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  const eventId = context.params.eventId;

  console.log(eventId);
  // fetch data for single event
  return {
    props: {
      eventData: {
        id: eventId,
        title: " This is a first meetup",
        image:
          "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        location: "Meetupstreet 5, 12345 Meetup City",
        description:
          "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
      },
    },
  };
}
