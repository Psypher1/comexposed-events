import Card from "../ui/Card";

export default function EventItem({ image, title, address, description }) {
  return (
    <li>
      <Card>
        <div className="">
          <img src={image} alt={title} />
        </div>
        <div className="">
          <h3>{title}</h3>
          <address>{address}</address>
        </div>
        <div className="">
          <button>Show Details</button>
        </div>
      </Card>
    </li>
  );
}
