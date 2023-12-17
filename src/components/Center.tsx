export default function Center({
    children, className
}: {
    children: React.ReactNode,
    className?: string
}) {
    return (
        <div className={`px-8 max-w-lg mx-auto ${className}`}>
            {children}
        </div>
    );
}