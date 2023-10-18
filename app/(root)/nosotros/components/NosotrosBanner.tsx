import Image from "next/image";

export default function NosotrosBanner() {
  return (
    <section className="relative w-full h-[100vh] left-0 top-0 text-center">
      <Image src={"/assets/aboutUs.webp"} alt="banner" fill />
      <div className="relative top-[50%] md:top-[65%] lg:top-[38%] w-[60%] ms-24 text-start">
      <h1 className="mb-8 text-4xl md:text-5xl font-bold tracking-wide">
        Delivering a world-class personal training service
      </h1>
      <p className="w-[70%] text-lg text-gray-400">YOUR Personal Training supports Personal Trainers and Gym operators alike to instil integrity, passion and commitment</p>
      </div>
    </section>
  );
}
