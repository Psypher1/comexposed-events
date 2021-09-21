import { useRef } from "react";
import Card from "../ui/Card";

export default function NewEventForm() {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const meetupData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
    };

    props.onAddMeetup(meetupData);
  }

  return (
    <div className="max-w-xl mx-auto">
      <Card>
        <form className="p-4" onSubmit={submitHandler}>
          <div className="">
            <label htmlFor="title">Meetup Title</label>
            <input type="text" required id="title" ref={titleInputRef} />
          </div>
          <div className="">
            <label htmlFor="image">Meetup Image</label>
            <input type="url" required id="image" ref={imageInputRef} />
          </div>
          <div className="">
            <label htmlFor="address">Address</label>
            <input type="text" required id="address" ref={addressInputRef} />
          </div>
          <div className="">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              required
              rows="5"
              ref={descriptionInputRef}
            ></textarea>
          </div>
          <div className="">
            <button className="hover:bg-purple-800 hover:text-purple-100 bg-purple-200 text-purple-900 transition-colors duration-500 ease-in-out py-2 px-3 rounded-md">Add Meetup</button>
          </div>
        </form>
      </Card>
    </div>
  );
}
