export default function Navbar() {
  return (
    <>
      <nav className="bg-gray-700 px-8 py-4 flex justify-between items-center text-white">
        <h1 className="font-heading text-2xl text-orange-400 font-extrabold">NextPlay</h1>
        <ul className="flex space-x-8">
          <a
            href="/"
            className=" hover:text-blue-300 text-lg hover:font-bold hover:scale-110 transition-transform duration-200 "
          >
            Home
          </a>
          <a
            href="/"
            className=" hover:text-blue-300 text-lg font-medium hover:font-bold hover:text-xl"
          >
            Browse
          </a>
          <a
            href="/"
            className=" hover:text-blue-300 text-lg font-medium hover:font-bold hover:text-xl"
          >
            Playlist
          </a>
          <a
            href="/"
            className=" hover:text-blue-300 text-lg font-medium hover:font-bold hover:text-xl"
          >
            Artists
          </a>
          <a
            href="/"
            className=" hover:text-blue-300 text-lg font-medium hover:font-bold hover:text-xl"
          >
            Premium
          </a>
        </ul>
        <input
          type="text"
          placeholder="Search..."
          className="rounded px-3 py-1 text-white"
        />
      </nav>
    </>
  );
}
