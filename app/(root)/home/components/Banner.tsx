import Image from "next/image";

export default function Banner() {
  return (
    <section className="w-full h-[76vh] md:h-[85vh]">
      <div className="relative w-full h-full text-center">
        <Image src={"/assets/banner.jpg"} alt="banner" fill />
        <h1 className="w-[60%] relative top-[50%] md:top-[65%] lg:top-[55%] mx-auto text-4xl md:text-6xl font-bold tracking-wide">
          Concreta todas tus metas deportivas
        </h1>
      </div>
      <div className=" w-[80%] relative top-[-22.5vh] md:top-[-10vh] lg:top-[-12.5vh] bg-white mx-auto p-8 rounded-3xl">
        <h2 className="text-black text-2xl font-bold">
          <span className="text-lime-600">Encontrá</span> tu entrenador
        </h2>
        <form className="flex flex-col md:flex-row mt-5">
          <input
            className="w-full md:w-[35%] py-4 px-2 border bg-white text-black text-xl rounded-l-lg focus:outline-none"
            type="text"
            placeholder="Tu dirección"
          />
          <select className="w-full md:w-[35%] my-2 md:my-0 py-4 px-2 border bg-white text-black text-xl rounded-r-lg font-sans">
            <option disabled>-- Selecciona el entrenamiento --</option>
            <option defaultValue={"crossfit"} value="crossfit ">
              Crossfit
            </option>
            <option value="funcional">Funcional</option>
            <option value="calistenia">Calistenia</option>
            <option value="pesas">Pesas</option>
            <option value="pilates">Pilates</option>
            <option value="yoga">Yoga</option>
          </select>
          <button className="bg-lime-600 ml-0 md:ml-2 py-4 md:py-0 px-10 text-xl text-white rounded-lg">
            Buscar
          </button>
        </form>
      </div>
    </section>
  );
}
