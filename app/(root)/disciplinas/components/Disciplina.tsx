"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Disciplina() {
    const [nombre, setNombre] = useState("asd");
  return (
    <article className="flex flex-col">
        <div className="relative w-full md:h-[20vh] lg:h-[35vh] group">
            <Link href={`/disciplina/${nombre}`}>
            <Image className="grayscale group-hover:grayscale-0 duration-200" src={"/assets/aboutTrainer.jpeg"} alt="disciplina" fill/>
            <h4 className="absolute top-[70%] left-[50%] translate-x-[-50%] p-2 bg-[#111111cf] duration-200 rounded-full text-4xl font-bold tracking-wider text-lime-600">Crossfit</h4>
            </Link>
        </div>
    </article>
  );
}
