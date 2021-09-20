import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 bg-purple-900 text-gray-300">
      <nav className="container flex items-center justify-center  py-3 ">
        <div className=" flex-1">
          <Link href="/">
            <a className="text-2xl text-gray-100 font-semibold">
              <h1 >Comexposed Events</h1>
            </a>
          </Link>
        </div>
        <ul className="flex-1 flex space-x-12 justify-center text-xl font-medium">
          <li>
            <Link href="/">
              <a className="transition duration-500 ease-in-out hover:text-gray-100 ">
                All Events
              </a>
            </Link>
          </li>
          <li>
            <Link href="/new-event">
              <a className="transition duration-500 ease-in-out hover:text-gray-100 ">
                New Event
              </a>
            </Link>
          </li>
          <li>
            <Link href="/favourites">
              <a className="transition duration-500 ease-in-out hover:text-gray-100 ">
                Favourites
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
