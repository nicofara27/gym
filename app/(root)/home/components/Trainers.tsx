import Trainer from "./Trainer";

export default function Trainers() {
  return (
    <section className="w-[90%] lg:w-[80%] my-20">
      <h2 className="mb-10 text-4xl font-bold">
        Algunos de nuestros <span className="text-lime-600 ">entrenadores</span>
      </h2>
      <div className="grid gap-10 md:grid-cols-3 lg:grid-cols-4 ">
        <Trainer />
      </div>
    </section>
  );
}
