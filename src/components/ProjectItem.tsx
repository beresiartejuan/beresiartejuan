import Link from "next/link"

export default function ProjectItem({
    name, repo, deploy, pin
}: {
    name: string,
    repo: string,
    deploy: string,
    pin: string
}) {
    return (
        <li className="bg-zinc-800 px-4 py-2 rounded-md flex flex-col flex-wrap gap-4 sm:gap-2 sm:flex-row">
            <span>{pin} {name}</span>
            <span className="hidden sm:inline">-</span>
            <span>
                <Link href={repo} className="text-blue-600 font-semibold">Repo</Link> | <Link href={deploy} className="text-blue-600">Deploy</Link>
            </span>
        </li>
    )
}