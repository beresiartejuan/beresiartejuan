import Link from "next/link"

export default function GitCard({
    title, description, href, children, icon
}: {
    title: string,
    description: string,
    href: string,
    children?: React.ReactNode,
    icon?: string | React.ReactNode
}) {
    return (
        <article className="bg-zinc-800 pl-5 sm:pl-10 pr-2 py-3 rounded-lg">
            <Link href={href} className="font-semibold text-xl text-blue-600">{icon ? icon : "📌"} {title}</Link>
            <p className="text-sm mt-2 text-zinc-300">{description}</p>
            {children}
        </article>
    )
}