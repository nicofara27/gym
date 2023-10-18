import { sobreNosotrosInfo } from "@/components/constants";
import Image from "next/image";

export default function NosotrosDesc() {
  return sobreNosotrosInfo.map((parte) => {
    return (
      <section className="md:w-[90%] lg:w-[80%] flex even:flex-row-reverse gap-10 mt-20 ">
        <aside className="w-[50%]">
          <h1 className="text-4xl font-bold">{parte.titulo}</h1>
          <p className="mt-5 text-xl text-gray-400">{parte.texto}</p>
        </aside>
        <aside className="relative h-[40vh] lg:h-[50vh] w-[50%] mt-10 lg:mt-0 ">
          <Image className="rounded-lg" src={parte.imagen} alt="trainer" fill />
        </aside>
      </section>
    );
  });
}
