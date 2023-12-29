import Link from "next/link"

export default function ProjectItem({
    repo, pin, description
}: {
    repo: string,
    description: string,
    pin?: string | React.ReactNode
}) {
    const repo_base = "https://github.com";

    return (
        <li className="flex flex-col gap-3 border-solid border-2 border-gray-600 p-5 rounded-md">
            <Link href={`${repo_base}/${repo}`} target="_blank" className="font-semibold text-blue-500">{repo}</Link>
            <p className="text-gray-400">{description}</p>
            {pin}
        </li>
    )
}