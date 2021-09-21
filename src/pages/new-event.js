import NewEventForm from "../components/events/NewEventForm";

export default function New() {
  return (
    <div >
      <h1  className="text-3xl sm:text-4xl md:text-5xl text-purple-800 text-center font-semibold mb-4">Add An Event</h1>
      <NewEventForm/>
    </div>
  );
}
