import Image from "next/image";

export default function NosotrosBanner() {
  return (
    <section className="relative w-full h-[100vh] left-0 top-0 text-center">
      <Image src={"/assets/aboutUs.webp"} alt="banner" fill />
      <div className="relative top-[50%] md:top-[65%] lg:top-[38%] left-[10%] w-[60%] text-start">
      <h1 className="mb-8 text-4xl md:text-6xl font-semibold tracking-wider tracking-wide">
        Entrena en las disciplinas mas populares
      </h1>
      <p className="w-[70%] text-lg text-gray-400">Adquiere planes a tu medida de acuerdo a tus horarios, grupos familiares o empresariales.</p>
      </div>
    </section>
  );
}
