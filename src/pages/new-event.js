import { useRouter } from "next/router";
import NewEventForm from "../components/events/NewEventForm";

export default function New() {
  const router = useRouter();
  async function handleAddEvent(eventData) {
    console.log(eventData);
    // sent to internal api
    const response = await fetch("/api/new-event", {
      method: "POST",
      body: JSON.stringify(eventData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);

    router.push("/");
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
