import EventItem from "./EventItem";

export default function EventList(props) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      {props.events.map((event) => (
        <EventItem
          key={event.id}
          id={event.id}
          image={event.image}
          title={event.title}
          address={event.address}
        />
      ))}
    </div>
  );
}
