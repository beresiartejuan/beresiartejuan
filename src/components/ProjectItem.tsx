import Link from "next/link"

export default function ProjectItem({
    name, repo, deploy, pin, description
}: {
    name: string,
    repo: string,
    deploy: string,
    description?: string,
    pin: string | React.ReactNode
}) {
    return (
        <li className="flex flex-col gap-3 border-solid border-2 border-gray-500 p-5 rounded-md">
            <span className="font-semibold text-blue-500">beresiartejuan/{name}</span>
            <p className="text-gray-500">{description}</p>
            {pin}
        </li>
    )
}