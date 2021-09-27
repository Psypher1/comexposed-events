import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 bg-purple-900 text-gray-300 mb-6 lg:mb-12">
      <nav className="container flex flex-col sm:flex-row items-center justify-center  py-3 ">
        <div className=" flex-1">
          <Link href="/">
            <a className=" text-xl sm:text-2xl text-gray-100 font-semibold">
              <h1>Comexposed Events</h1>
            </a>
          </Link>
        </div>
        <ul className="flex-1 flex whitespace-nowrap space-x-6 sm:space-x-12 justify-center text-base md:text-xl font-medium mt-4 sm:mt-0">
          <li>
            <Link href="/">
              <a className="transition duration-400 ease-in-out hover:text-gray-100 ">
                All Events
              </a>
            </Link>
          </li>
          <li>
            <Link href="/new-event">
              <a className="transition duration-400 ease-in-out hover:text-gray-100 ">
                New Event
              </a>
            </Link>
          </li>
          <li>
            <Link href="/favourites">
              <a className="transition duration-400 ease-in-out hover:text-gray-100 ">
                Favourites
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
