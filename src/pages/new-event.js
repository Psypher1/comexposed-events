import NewEventForm from "../components/events/NewEventForm";

export default function New() {
  function handleAddEvent(eventData) {
    console.log(eventData);
  }

  return (
    <div>
      <h1 className="text-2xl sm:text-3xl md:text-4xl text-purple-800 text-center font-semibold mb-4">
        Add An Event
      </h1>
      <NewEventForm onAddEvent={handleAddEvent} />
    </div>
  );
}
