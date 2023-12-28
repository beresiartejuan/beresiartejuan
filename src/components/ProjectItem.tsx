import Link from "next/link"

export default function ProjectItem({
    name, repo, deploy, pin
}: {
    name: string,
    repo: string,
    deploy: string,
    pin: string | React.ReactNode
}) {
    return (
        <li className="bg-gray-800 pl-10 pr-2 py-2 rounded-md">
            <span className="text-[1.7rem] font-semibold flex flex-row text-center items-center gap-4">{pin} {name}</span>
        </li>
    )
}