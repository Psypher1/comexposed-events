export default function Header() {
  return (
    <header className="sticky top-0 bg-gray-900 text-gray-200">
      <nav className="container flex items-center justify-center  py-3 ">
        <div className=" flex-1">
          <h1 className="text-2xl font-semibold">Comexposed Events</h1>
        </div>
        <ul className="flex-1 flex space-x-12">
          <li className="text-primary">Home </li>
          <li>About </li>
          <li>Contact </li>
        </ul>
      </nav>
    </header>
  );
}
