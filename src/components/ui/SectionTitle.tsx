import { cn } from "../../lib/utils";

interface SectionTitleProps {
    children: React.ReactNode;
    className?: string;
    subtitle?: string;
}

export function SectionTitle({ children, className, subtitle }: SectionTitleProps) {
    return (
        <div className={cn("mb-8 sm:mb-12", className)}>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-2">
                {children}
            </h2>
            {subtitle && (
                <div className="h-1 w-20 bg-blue-500 rounded-full" />
            )}
        </div>
    );
}
