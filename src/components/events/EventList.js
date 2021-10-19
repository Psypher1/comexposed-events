import EventItem from "./EventItem";

export default function EventList({ events }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      {events.map((event) => (
        <EventItem
          key={event.id}
          id={event.id}
          image={event.image}
          title={event.title}
          location={event.location}
        />
      ))}
    </div>
  );
}
