import { cn } from "@/lib/utils";
import { Category } from "@/data/categories";
import { LucideIcon } from "lucide-react";

interface CategoryCardProps extends React.HTMLAttributes<HTMLDivElement> {
    cat: Category;
    aspectRatio?: "portrait" | "square";
    width?: number;
    height?: number;
}

export function CategoryCard({ cat, className, ...props }: CategoryCardProps) {
    const IconComponent: LucideIcon = cat.Icon;
    return (
        <div className={cn("space-y-3", className)} {...props}>
            <div className="rounded-md">
                <IconComponent
                    className={cn("transition-all hover:scale-105")}
                    size={30}
                    strokeWidth={1}
                />
            </div>
            <div className="space-y-1 text-sm">
                <h3 className="text-center font-medium leading-none">
                    {cat.name}
                </h3>
            </div>
        </div>
    );
}
