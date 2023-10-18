import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";
import { AiOutlineFacebook, AiOutlineInstagram } from "react-icons/ai";

export default function Footer() {
  return (
    <footer className="flex justify-between p-7 md:p-10 border-t border-gray-500 text-white">
      <aside>
        <h3 className="text-xl font-bold">Acerca de nosotros</h3>
        <ul className="mt-2 text-sm text-gray-300">
          <li className=" hover:text-lime-600">
            <Link href="/nosotros">¿Quienes somos?</Link>
          </li>
          <li className="mt-1 hover:text-lime-600">
            <Link href="/preguntas-frecuentes">Preguntas frecuentes</Link>
          </li>
          <li className="mt-1 hover:text-lime-600">
            <Link href="/contacto">Contacto</Link>
          </li>
        </ul>
      </aside>
      <aside>
        <h3 className="text-xl font-bold">Para clientes</h3>
        <ul className="mt-2 text-sm text-gray-300">
          <li className=" hover:text-lime-600">
            <Link href="/preguntas-frecuentes">Encontra un profesor</Link>
          </li>
          <li className="mt-1 hover:text-lime-600">
            <Link href="/nosotros">Como funciona</Link>
          </li>
          <li className="mt-1 hover:text-lime-600">
            <Link href="/login">Ingresá</Link>
          </li>
        </ul>
      </aside>
      <aside>
        <h3 className="text-xl font-bold">Para profesores</h3>
        <ul className="mt-2 text-sm text-gray-300">
          <li className=" hover:text-lime-600">
            <Link href="/contacto">Como funciona</Link>
          </li>
          <li className="mt-1 hover:text-lime-600">
            <Link href="/preguntas-frecuentes">Valor</Link>
          </li>
          <li className="mt-1 hover:text-lime-600">
            <Link href="/preguntas-frecuentes">Ingresa</Link>
          </li>
        </ul>
      </aside>
      <aside>
        <h3 className="text-xl font-bold">Seguínos</h3>
        <ul className="flex mt-2 text-4xl text-gray-300 mt-2">
          <li className="mr-5 hover:text-lime-600">
            <Link href="/nosotros">
              <AiOutlineFacebook />
            </Link>
          </li>
          <li className="mr-5 hover:text-lime-600">
            <Link href="/preguntas-frecuentes">
              <AiOutlineInstagram />
            </Link>
          </li>
          <li className=" hover:text-lime-600">
            <Link href="/preguntas-frecuentes">
              <FaXTwitter />
            </Link>
          </li>
        </ul>
      </aside>
    </footer>
  );
}
