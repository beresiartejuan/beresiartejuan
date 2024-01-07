import Center from "@/components/Center";
import Subtitle from "@/components/Subtitle";
import PrimaryButton from "@/components/PrimaryButton";
import SecondaryButton from "@/components/SecondaryButton";
import GridIcons from "@/components/GridIcons";
import Image from "next/image";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io";
import { FaLaravel, FaReact, FaSass } from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiMongodb, SiNestjs, SiExpress } from "react-icons/si";
import Link from "next/link";
import ProjectItem from "@/components/ProjectItem";
import ProjectList from "@/components/List";

export default function Home() {

  return (
    <Center className="max-w-lg mt-[20vh] mb-[15vh] flex flex-col gap-[7vh]">

      {/* HEADER */}

      <section className="flex flex-col gap-2 mb-[30vh]">
        <Image
          src={"/profile.jpg"}
          alt="profile picture"
          width={400}
          height={400}
          className="w-[60%] rounded-xl mb-5"
        ></Image>
        <h2 className={`text-[2.3rem] font-bold`}>Hi! 👋</h2>
        <p>I'm a <span className="bg-yellow-800">Web Developer</span> and my name is <span className="bg-yellow-800">Juan Beresiarte</span>.</p>
        {/* HEADER BUTTONS */}
        <div className="flex flex-row flex-wrap gap-2 mt-5 mb-2">
          <PrimaryButton href="https://github.com/beresiartejuan">
            <IoLogoGithub className="inline text-[1.6rem]"></IoLogoGithub> <span>Github</span>
          </PrimaryButton>
          <SecondaryButton href="https://linkedin.com/in/juanberesiarte">
            <IoLogoLinkedin className="inline mr-1 text-[1.6rem]"></IoLogoLinkedin> <span>Linkedin</span>
          </SecondaryButton>
        </div>
        <hr />
      </section>

      {/* ABOUT */}

      <section className="flex flex-col flex-wrap gap-5">
        <h2 className="text-[3rem] font-bold"># About me</h2>
        <p className="text-[1.1rem]">Web developer with experience in <span className="text-yellow-700">Javascript and PHP</span>, freelancer, writer and tea lover 🍵❤️</p>
        <p className="text-[1.1rem]">Do u wanna see my <Link href="/blog" className="underline text-yellow-700">blog</Link>? 👈</p>
        <p className="text-[1.1rem]"><cite>"But after sunlit days, one thing stays the same, rises the moon" ~ Liana Flores</cite></p>
      </section>

      {/* STACKS */}

      <section className="flex flex-col flex-wrap gap-7">
        <h2 className="text-[3rem] font-bold"># Tech Stack</h2>
        <GridIcons>

          <SiMongodb className="text-green-600"></SiMongodb>
          <SiExpress className="text-gray-300"></SiExpress>
          <FaReact className="text-sky-600"></FaReact>

          <SiNextdotjs className="text-white"></SiNextdotjs>
          <FaLaravel className="text-rose-900"></FaLaravel>
          <SiNestjs className="text-rose-700"></SiNestjs>

          <FaSass className="text-pink-800"></FaSass>
          <SiTypescript className="text-blue-800"></SiTypescript>

        </GridIcons>
      </section>

      {/* PROJECTS */}

      <section className="flex flex-col flex-wrap">
        <h2 className="text-[3rem] font-bold"># Projects</h2>
        <ProjectList>
          <ProjectItem
            repo="beresiartejuan/typing-check"
            description="Prueba de mecanogrfía online que muestra los caracteres por segundo que eres capaz de hacer."
            pin={"🟡 Javascript"}
          ></ProjectItem>
          <ProjectItem
            repo="beresiartejuan/Blank"
            description="Lista de tareas minimalista."
            pin={"🟡 Javascript"}
          ></ProjectItem>
          <ProjectItem
            repo="beresiartejuan/ilovepenguins"
            pin={"🔵 Php"}
            description="Una landing page con tematica de pingüinos."
          ></ProjectItem>
        </ProjectList>
      </section>

    </Center>
  );
}
