"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { menuLinks } from "../constants/index";

export default function Menu () {
  //   let [open, setOpen] = useState(false);

  // const router = useRouter();
  const pathname = usePathname();

  return (
    <header className="w-full fixed top-0 left-0 z-10">
      <nav className="flex items-center py-4 px-7 md:px-10">
        <Link className="mr-auto font-bold text-2xl" href={"/"}>
          Find a Couch
        </Link>
        <ul className={`hidden lg:flex items-center text-gray-400 text-end}`}>
          {menuLinks.map((link) => {
            const isActive =
              (pathname.includes(link.ruta) && link.ruta.length > 1) ||
              pathname === link.ruta;
            return (
              <li key={link.texto} className={`md:mr-12 md:my-0 my-7 pr-9 `}>
                <Link
                  href={link.ruta}
                  className={`${isActive && "text-white"} hover:text-gray-100`}
                >
                  {link.texto}
                </Link>
              </li>
            );
          })}
          <button className="bg-transparent py-1 px-5 mr-9 md:mr-0 md:ml-auto border border-red-600 rounded-full text-gray-400 hover:bg-red-600 hover:text-white duration-500">
            Ingresá
          </button>
        </ul>
      </nav>
    </header>
  );
};


