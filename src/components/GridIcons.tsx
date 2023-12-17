import "@/styles/GridIcons.css";

export default function GridIcons({
    children, className
}: {
    children: React.ReactNode,
    className?: string
}) {

    return (
        <div className="grid-icons">
            {children}
        </div>
    )

}