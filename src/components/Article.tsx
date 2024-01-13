import Link from "next/link"

export default function Article({
    title,
    decorator = "",
    children,
    href
}: {
    title: string,
    decorator: string,
    children?: React.ReactNode,
    href: string
}){
    return (
    <article className="flex flex-col max-w-fit">
        <Link href={href} className="max-w-fit inline-block" target="blank">
            <h3 className="text-white my-2 font-mono max-w-fit inline-block text-[1.02rem] hover:text-sky-600 hover:pl-2 hover:text-[1.06rem] transition-all">{decorator} { title }</h3>
        </Link>
        { children }
    </article>
    )
}