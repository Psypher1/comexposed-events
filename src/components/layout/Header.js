import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 bg-gray-900 text-gray-200">
      <nav className="container flex items-center justify-center  py-3 ">
        <div className=" flex-1">
          <Link href="/">
            <a>
              <h1 className="text-2xl font-semibold">Comexposed Events</h1>
            </a>
          </Link>
        </div>
        <ul className="flex-1 flex space-x-12 justify-center text-lg">
          <li>
            <Link href="/">
              <a>All Events</a>
            </Link>
          </li>
          <li>
            <Link href="/new-event">
              <a>New Event</a>
            </Link>
          </li>
          <li>
            <Link href="/favourites">
              <a>Favourites</a>
            </Link>
          </li>
         
        </ul>
      </nav>
    </header>
  );
}
