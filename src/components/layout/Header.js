import Link from "next/link";
// export const links = [
//   {name: 'All Events', target: "/"},
//   {name: 'New Event', target:"/new-event"},
//   {name: 'Favourites', target:'/favourites'},
// ];
export default function Header() {
  const links = [
    { name: "All Events", target: "/" },
    { name: "New Event", target: "/new-event" },
    { name: "Favourites", target: "/favourites" },
  ];
  return (
    <header className="sticky z-30 top-0 bg-purple-900 text-purple-300 mb-8 lg:mb-12">
      <nav className="container flex flex-col sm:flex-row items-center justify-center  py-3 ">
        <div className=" flex-1">
          <Link href="/">
            <a className=" text-xl sm:text-2xl text-gray-100 font-semibold">
              <h1>Comexposed Events</h1>
            </a>
          </Link>
        </div>
        <ul className="flex-1 flex whitespace-nowrap space-x-6 sm:space-x-12 justify-center text-base md:text-xl font-medium mt-4 sm:mt-0">
          {/* loop through link items */}
          {links.map((link) => (
            <li key={link.name}>
              <Link href={link.target}>
                <a className="transition duration-400 ease-in-out hover:text-gray-100 ">
                  {link.name}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
