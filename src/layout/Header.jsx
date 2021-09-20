export default function Header() {
  return (
    <header className="bg-black text-white">
      <nav className="container flex items-center justify-center  py-2 ">
        <div className=" flex-1">
          <h1 className=" text-3xl uppercase">Logo</h1>
        </div>
        <ul className="flex-1 flex gap-6">
          <li>Home </li>
          <li>About </li>
          <li>Contact </li>
        </ul>
      </nav>
    </header>
  );
}
