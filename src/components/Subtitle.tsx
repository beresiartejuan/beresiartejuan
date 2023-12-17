export default function Subtitle({
    children, className
}: {
    children: string,
    className?: string
}) {
    return (
        <h2 className={`text-3xl font-bold ${className}`}>
            {children}
        </h2>
    );
}