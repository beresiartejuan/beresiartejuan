import Center from "@/components/Center";
import Image from "next/image";
import Link from "next/link";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io";

export default function Home() {
  return (
    <Center className="mt-[20vh] flex flex-col gap-8">
      <Image
        src={"/profile.jpg"}
        alt="profile picture"
        width={400}
        height={400}
        className="w-[60%] rounded-md"
      ></Image>
      <section className="flex flex-col gap-2">
        <h2 className="text-3xl font-bold">Hi! 👋</h2>
        <p>I'm a <span className="bg-yellow-800">Web Developer</span> and my name is <span className="bg-yellow-800">Juan Beresiarte</span>.</p>
      </section>
      <section className="flex flex-row flex-wrap gap-2">
        <Link href="https://github.com/beresiartejuan" target="_blank" className="bg-yellow-800 px-4 py-2 rounded-md font-semibold flex flex-row text-center gap-2"><IoLogoGithub className="inline text-[1.6rem]"></IoLogoGithub> <span>Github</span></Link>
        <Link href="https://linkedin.com/in/juanberesiarte" target="_blank" className="bg-zinc-600 px-4 py-2 rounded-md font-semibold flex flex-row text-center gap-2"><IoLogoLinkedin className="inline mr-1 text-[1.6rem]"></IoLogoLinkedin> <span>Linkedin</span></Link>
      </section>
      <hr />
    </Center>
  );
}
