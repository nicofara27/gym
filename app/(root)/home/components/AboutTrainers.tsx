import Image from "next/image";

export default function AboutTrainers() {
  return (
    <section className="md:w-[90%] lg:w-[80%] grid grid-cols-1 lg:grid-cols-2 mx-auto mt-48 mb-28">
      <aside>
        <h1 className="text-4xl font-bold">
          <span className="text-lime-600">Obtene resultados</span> con nuestros
          entrendadores persnales
        </h1>
        <p className="mt-5 text-xl text-gray-400">
          Todos nuestros entrenadores son expertos y estan listos para ayudarte
          en tu entrenamiento. Ellos entienden que las metas de cada persona son
          diferentes, ya sea trabajar para para lograr un desafio pesonal,
          recuperarse de una lesión o empezar desde cero. Los entrenadores de
          esta página son todos experimentados y completamente capaces de
          trabajar contigo y ayudarte a alcanzar los resultados que desees.
        </p>
        <p className="text-sm text-gray-400 mt-2">
          Todos los entrenadores ofrecen una sesion de entrenamiento gratis* -
          por lo que puedes descubrir cual es el entrenador adecuado para
          ti.
        </p>
      </aside>
      <aside className="relative h-[40vh] lg:h-[50vh] mt-10 lg:mt-0">
        <Image
          className="rounded-lg"
          src={"/assets/aboutTrainer.jpeg"}
          alt="trainer"
          fill
        />
      </aside>
    </section>
  );
}
