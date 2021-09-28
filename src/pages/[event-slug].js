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
