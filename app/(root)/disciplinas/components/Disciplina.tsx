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
            <Image className="group-hover:grayscale" src={"/assets/aboutTrainer.jpeg"} alt="disciplina" fill/>
            <h4 className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-4xl font-bold tracking-wider text-lime-600 hidden group-hover:block">Crossfit</h4>
            </Link>
        </div>
    </article>
  );
}
