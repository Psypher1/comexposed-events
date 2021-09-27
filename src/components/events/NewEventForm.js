import { useRef } from "react";
import Card from "../ui/Card";

export default function NewEventForm({ onAddEvent }) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const locationInputRef = useRef();
  const descriptionInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredlocation = locationInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const eventData = {
      title: enteredTitle,
      image: enteredImage,
      location: enteredlocation,
      description: enteredDescription,
    };
    // console.log(props);
    // this is passed up to the enclosing components
    // props.onAddEvent(eventData);
    onAddEvent(eventData);
  }

  return (
    <div className="max-w-xl mx-auto mb-8">
      <Card>
        <form className="p-4 text-purple-800" onSubmit={submitHandler}>
          <div className="mb-4">
            <label htmlFor="title" className="text-lg font-semibold">
              Title
            </label>
            <input
              type="text"
              required
              id="title"
              ref={titleInputRef}
              placeholder="Title"
              className="text-md w-full px-2 py-1 outline-none bg-purple-200 rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="image" className="text-lg font-semibold">
              Image
            </label>
            <input
              type="url"
              required
              id="image"
              ref={imageInputRef}
              placeholder="Image URL"
              className="text-md w-full px-2 py-1 outline-none bg-purple-200 rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="location" className="text-lg font-semibold">
              Location
            </label>
            <input
              type="text"
              required
              id="location"
              ref={locationInputRef}
              placeholder="Location"
              className="text-md w-full px-2 py-1 outline-none bg-purple-200 rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="text-lg font-semibold">
              Description
            </label>
            <textarea
              id="description"
              required
              rows="5"
              ref={descriptionInputRef}
              placeholder="Description"
              className="text-md w-full px-2 py-1 outline-none bg-purple-200 rounded"
            ></textarea>
          </div>
          <div className="mx-auto">
            <button
              className="bg-purple-800 text-purple-100
             hover:bg-purple-200 hover:text-purple-900 transition-colors duration-500 ease-in-out py-2 px-8 rounded-md font-semibold"
            >
              Add Event
            </button>
          </div>
        </form>
      </Card>
    </div>
  );
}
