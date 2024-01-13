import Article from "@/components/Article";
import Center from "@/components/Center";
import GridIcons from "@/components/GridIcons";
import { getAllBlogs } from "@/helpers/mdx";
import Image from "next/image";
import { SiJavascript } from "react-icons/si";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io";
import { FaLaravel, FaReact, FaSass } from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiMongodb, SiNestjs, SiExpress } from "react-icons/si";
import Link from "next/link";

export default function Blog() {

    const blogs = getAllBlogs({
        limit: 4,
        filter: {
            byDate: true
        }
    });

    return (
        <Center className="max-w-4xl mt-[10vh] mb-[15vh] flex flex-col gap-[4vh]">
            <header>
                <div className="inline-block max-h-[20vh] md:max-h-[25vh] mb-[2vh] overflow-hidden rounded-lg">
                    <Image
                        src="/doodle-wallpaper.jpg"
                        alt=""
                        width={1000}
                        height={850}
                        className="min-w-full"
                    ></Image>  
                </div>
                <h1 className="text-4xl md:text-5xl text-gray-100 font-bold ml-[2vh]"># Blog de programación</h1>
            </header>
            <hr />
            <section className="mt-5">
                <h3 className="text-3xl font-semibold text-gray-100 mb-[4vh]">Últimos articulos</h3>
                <div className="">
                    {blogs.slice().map((blog, index) => {
                        return <Article href="" decorator="-" key={index} title={blog.data.title}></Article>
                    })}
                    <Article href="/blog/all" decorator="+" title="Ver más..."></Article>
                </div>
            </section>
            <section className="mt-5">
                <h3 className="text-3xl font-semibold text-gray-100 mb-[4vh]">Cursos disponibles</h3>
                <ul className="flex flex-wrap flex-row gap-5">
                    <Link href={""}>
                        <SiJavascript className="text-yellow-600 text-[4rem] hover:text-yellow-400 transition-all"></SiJavascript>
                    </Link>
                </ul>
            </section>
            <section className="mt-5">
                <h3 className="text-3xl font-semibold text-gray-100 mb-[4vh]">Rercursos varios</h3>
                <Article decorator="-" title="React Icons" href="https://react-icons.github.io/react-icons/">
                    <cite className="ml-2 text-sm">Librería que ofrece Iconos como componentes de React</cite>
                </Article>
                <Article decorator="-" title="Pexels" href="https://www.pexels.com/">
                    <cite className="ml-2 text-sm">Fotos de stock gratuitas</cite>
                </Article>
                <Article decorator="-" title="GetEmoji" href="https://getemoji.com/">
                    <cite className="ml-2 text-sm">Emojis soportados por varios sistemas operativos y webs</cite>
                </Article>
                <Article decorator="-" title="Flaticon" href="https://www.flaticon.es/">
                    <cite className="ml-2 text-sm">Iconos vectoriales gratuitos</cite>
                </Article>
                <Article decorator="-" title="ILoveImg" href="https://www.iloveimg.com/es">
                    <cite className="ml-2 text-sm">Editor simple de imagenes online</cite>
                </Article>
                <Article decorator="-" title="Dev Comunity" href="https://dev.to/">
                    <cite className="ml-2 text-sm">Comunidad de desarrolladores</cite>
                </Article>
            </section>
        </Center>
    );
}