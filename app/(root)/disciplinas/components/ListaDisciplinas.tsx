import Disciplina from "./Disciplina";

export default function ListaDisciplinas() {
    return (
        <section className="w-[90%] lg:w-[80%] my-20">
            <h1 className="text-4xl font-bold">Nuestras <span className="text-lime-600">disciplinas</span></h1>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mt-10">
                <Disciplina />
            </div>
        </section>
    );
}