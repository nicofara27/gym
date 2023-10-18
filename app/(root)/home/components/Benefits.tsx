import { BsPersonVcard, BsListOl, BsPersonCircle } from "react-icons/bs";
import { GiStairsGoal } from "react-icons/gi";
import { IoNutritionOutline } from "react-icons/io5";
import { PiGraph } from "react-icons/pi";
export default function Benefits() {
  return (
    <section className="w-[90%] lg:w-[80%] mx-auto">
      <h2 className="w-3/4 lg:w-1/2 text-4xl font-bold">
        Los <span className="text-lime-600">beneficios</span> de contratar un
        entrenador personal
      </h2>
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 mt-10">
        <article className="">
          <BsPersonCircle className="text-4xl text-lime-600 mb-2" />
          <h4 className="text-2xl font-bold">Experiencia</h4>
          <p className="text-gray-400">
            Tu rutina de entrenamiento sera más efectiva porque un entrenador
            maximisara el tiempo de entrenamiento. Esto es especialmente útil si
            tu tiempo de entrenamiento es corto.
          </p>
        </article>
        <article className="">
          <BsListOl className="text-4xl text-lime-600 mb-2" />
          <h4 className="text-2xl font-bold">Prioridades</h4>
          <p className="text-gray-400">
            Hacer ejercicios puede no estar siempre en lo mas alto de tus
            prioridades. Contratar a un entrenador personal es una forma
            excelente de comprometerse a alcanzar tus metas.
          </p>
        </article>
        <article className="">
          <GiStairsGoal className="text-4xl text-lime-600 mb-2" />
          <h4 className="text-2xl font-bold">Metas fijas</h4>
          <p className="text-gray-400">
            Si te falta compromiso, motivación o solo la habilidad de dar el
            primer paso para entrenar una rutina personal puede ser clave para
            alcanzar todas tus metas.
          </p>
        </article>
        <article className="">
          <BsPersonVcard className="text-4xl text-lime-600 mb-2" />
          <h4 className="text-2xl font-bold">Plan personalizado</h4>
          <p className="text-gray-400">
            Sin un entrenador personal podrias terminar desperdiciando tu tiempo
            en un gimnasio. Contratar uno te ayudara a identificar y planear la
            mejor rutina que se adecue a tus objetivos .
          </p>
        </article>
        <article className="">
          <IoNutritionOutline className="text-4xl text-lime-600 mb-2" />
          <h4 className="text-2xl font-bold">Consejos sobre nutricion</h4>
          <p className="text-gray-400">
            Un entrenddor personal te puede ayudar a optimizar tus hábitos alimenticios con consejos que te ayuden a optimizar tu entrenamiento.
          </p>
        </article>
        <article className="">
          <PiGraph className="text-4xl text-lime-600 mb-2" />
          <h4 className="text-2xl font-bold">Diversidad de ejercicios</h4>
          <p className="text-gray-400">
            Hacer los mismos ejercicios constantemente lleva a la perdida de
            motivacion. Para evitarlo, un entrenador
            personal agrega variedad a tu rutina para mantenerte motivado.
          </p>
        </article>
      </div>
    </section>
  );
}
