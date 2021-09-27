import Card from "../ui/Card";
import Image from "next/image";

export default function EventDetail() {
  return (
    <div className="max-w-2xl text-center mb-8 p-16 mx-auto">
      <Card>
        <Image
          width={600}
          height={400}
          src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          className="rounded-md "
          alt=""
        />
        <div className="text-left ml-2  mt-4">
          <h2 className="text-3xl text-purple-900 font-semibold ">
            This is a first meetup
          </h2>
          <address className="text text-gray-500 mb-2">
            Meetupstreet 5, 12345 Meetup City
          </address>
          <p className="texhttps://upload.wikimedia.org/t-purple-600 text-lg">
            This is a first, amazing meetup which you definitely should not
            miss. It will be a lot of fun!
          </p>
        </div>
      </Card>
    </div>
  );
}
