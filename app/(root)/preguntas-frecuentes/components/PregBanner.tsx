import { AiOutlineSearch } from "react-icons/ai";
export default function PregBanner() {
  return (
    <section className="w-full h-[50vh] bg-lime-600 flex items-center justify-center">
      <div className="w-[50%] mt-1">
        <h1 className="text-4xl text-center font-bold tracking-wide">
          Preguntas frecuentes
        </h1>
        <form className="mt-5">
          {/* <input
            className=""
            type="text"
            placeholder="Tu consulta"
          /> */}
          <div className="w-full ">
            <input
              className="w-full py-1 pl-12 bg-white rounded-full border focus:outline-none text-black text-xl"
              type="text"
            />
            <AiOutlineSearch className="-mt-[33px] ml-2 text-black text-3xl" />
          </div>
        </form>
      </div>
    </section>
  );
}
