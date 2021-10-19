import { useRouter } from "next/router";
import Card from "../ui/Card";

export default function EventItem({ id, image, title, location, description }) {
  const router = useRouter();

  function handleShowDetails() {
    router.push(`/${id}`);
  }

  return (
    <div className="mx-4 my-4 max-w-2xl">
      <Card>
        <div className="mb-4">
          <img className="rounded-lg " src={image} alt={title} />
        </div>
        <div className="mb-2">
          <h3 className="text-xl text-purple-900 font-medium">{title}</h3>
          <address className="font-thin text-gray-600">{location}</address>
        </div>
        <div className="">
          <button
            onClick={handleShowDetails}
            className="hover:bg-purple-800 hover:text-purple-100 bg-purple-200 text-purple-900 transition-colors duration-500 ease-in-out py-2 px-3 rounded-md"
          >
            Show Details
          </button>
        </div>
      </Card>
    </div>
  );
}
