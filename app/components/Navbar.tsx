import Link from "next/link";
import { FaTwitter, FaGithub } from "react-icons/fa";
import Search from "./Search";

export default function Navbar() {
  return (
    <nav className="bg-slate-600 p-4 sticky top-0 drop-shadow-xl z-10">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginLeft: 20,
          marginRight: 20,
        }}
      >
        <h1 className="text-3xl font-bold text-white grid">
          <Link
            href={"/"}
            className="text-white/90 no-underline hover:text-white"
          >
            Susan Dangol
          </Link>
        </h1>
        <div className="flex flex-row justify-center sm:justify-evenly align-middle gap-4 text-white text-4xl lg:text-5xl">
          <Link
            className="text-white/90 hover:text-white"
            href="https://github.com/susan5591"
          >
            <FaGithub />
          </Link>
          <Link
            className="text-white/90 hover:text-white"
            href="https://twitter.com/susan5591448"
          >
            <FaTwitter />
          </Link>
          <Search />
        </div>
      </div>
    </nav>
  );
}
