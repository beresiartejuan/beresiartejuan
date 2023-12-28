import Center from "@/components/Center";
import Subtitle from "@/components/Subtitle";

export default function () {
    return (
        <Center className="max-w-3xl flex flex-col gap-8 bg-red-500">
            <section>
                <Subtitle>Últimos articulos</Subtitle>
            </section>
            <section>
                <Subtitle>Cursos</Subtitle>
            </section>
        </Center>
    );
}