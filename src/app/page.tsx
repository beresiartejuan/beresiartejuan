import Center from "@/components/Center";
import Subtitle from "@/components/Subtitle";
import PrimaryButton from "@/components/PrimaryButton";
import SecondaryButton from "@/components/SecondaryButton";
import GridIcons from "@/components/GridIcons";
import Image from "next/image";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io";
import { FaLaravel, FaReact, FaSass, FaNode } from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiMysql, SiMongodb, SiSymfony } from "react-icons/si";

export default function Home() {
  return (
    <Center className="mt-[20vh] mb-[5vh] flex flex-col gap-8">
      <Image
        src={"/profile.jpg"}
        alt="profile picture"
        width={400}
        height={400}
        className="w-[60%] rounded-md"
      ></Image>
      <section className="flex flex-col gap-2">
        <Subtitle>Hi! 👋</Subtitle>
        <p>I'm a <span className="bg-yellow-800">Web Developer</span> and my name is <span className="bg-yellow-800">Juan Beresiarte</span>.</p>
      </section>
      <section className="flex flex-row flex-wrap gap-2">
        <PrimaryButton href="https://github.com/beresiartejuan">
          <IoLogoGithub className="inline text-[1.6rem]"></IoLogoGithub> <span>Github</span>
        </PrimaryButton>
        <SecondaryButton href="https://linkedin.com/in/juanberesiarte">
          <IoLogoLinkedin className="inline mr-1 text-[1.6rem]"></IoLogoLinkedin> <span>Linkedin</span>
        </SecondaryButton>
      </section>
      <hr />
      <section className="flex flex-row flex-wrap gap-2">
        <Subtitle className="text-3xl font-bold">About me</Subtitle>
        <p>Web developer with experience in <span className="bg-yellow-800">Javascript and PHP</span></p>
      </section>
      <section className="flex flex-col flex-wrap gap-7 mt-[5vh]">
        <Subtitle className="text-3xl font-bold">Tech Stack</Subtitle>
        <GridIcons>
          <FaLaravel className="text-red-800"></FaLaravel>
          <FaReact className="text-sky-800"></FaReact>
          <FaSass className="text-pink-800"></FaSass>
          {/*<FaNode className="text-green-800"></FaNode>*/}
          <SiSymfony className="text-zinc-300"></SiSymfony>
          <SiTypescript className="text-blue-800"></SiTypescript>
          <SiNextdotjs className="text-white"></SiNextdotjs>
          <SiMysql className="text-blue-500"></SiMysql>
          <SiMongodb className="text-green-600"></SiMongodb>
        </GridIcons>
      </section>
    </Center>
  );
}
