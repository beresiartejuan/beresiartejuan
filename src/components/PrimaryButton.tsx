import Link from "next/link";

export default function PrimaryButton({
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
            className="bg-yellow-800 px-4 py-2 rounded-md font-semibold flex flex-row text-center gap-2"
            {...props}
        >
            {children}
        </Link>
    );
}