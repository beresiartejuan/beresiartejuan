export default function List({
    children
}: {
    children: React.ReactNode,
}) {
    return (<ul className="flex flex-col flex-wrap gap-2 mt-5">
        {children}
    </ul>)
}