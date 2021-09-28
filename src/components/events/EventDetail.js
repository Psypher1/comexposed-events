import Card from "../ui/Card";
import Image from "next/image";

export default function EventDetail({ title, image, location, description }) {
  return (
    <div className="max-w-2xl text-center mb-8 p-16 mx-auto">
      <Card>
        <Image
          width={600}
          height={400}
          src={image}
          className="rounded-md "
          alt=""
        />
        <div className="text-left ml-2  mt-4">
          <h2 className="text-3xl text-purple-900 font-semibold ">{title}</h2>
          <address className="text text-gray-500 mb-2">{location}</address>
          <p className="text-purple-700 text-lg">{description}</p>
        </div>
      </Card>
    </div>
  );
}
