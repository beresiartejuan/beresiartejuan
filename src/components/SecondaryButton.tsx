import Link from "next/link";

export default function SecondaryButton({
    children, className, href, ...props
}: {
    children: React.ReactNode,
    className?: string,
    href?: string
}) {
    return (
        <Link
            href={href ?? ""}
            target="_blank"
            className={`bg-zinc-600 px-5 py-2 rounded-md font-semibold flex flex-row text-center ${className}`}
            {...props}
        >
            {children}
        </Link>
    );
}