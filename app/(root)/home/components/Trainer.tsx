import Image from "next/image";

export default function Trainer() {
  return (
    <article className="flex flex-col border border-gray-500 rounded-2xl">
      <div className="relative w-full md:h-[20vh] lg:h-[35vh] ">
        <Image
          className="rounded-t-2xl"
          src={"/assets/banner.jpg"}
          alt="trainer"
          fill
        />
        <div className="absolute bottom-5 left-3">
          <h3 className="text-2xl font-bold ">Juan Perez</h3>
          <p className="text-sm">Presencial y en linea</p>
        </div>
      </div>
      <div className="p-3">
        <p className="text-sm">
          ⭐ <span className="font-bold">5</span> (11 Opiniones)
        </p>
        <p className="my-3 text-gray-400">
          Entrenador personal. Calistenia, musculacion y tonificacions. 5 años de experiencia
        </p>
        <ul className="flex">
          <li className="bg-lime-600 mr-2 py-1 px-2 rounded-full text-sm ">
            1500$/h
          </li>
          <li className="bg-lime-600 py-1 px-2 rounded-full text-sm">
            1° clase gratis
          </li>
        </ul>
      </div>
    </article>
  );
}
