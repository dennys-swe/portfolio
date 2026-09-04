import { Badge } from "@/components/ui/badge";
import { iconUrl } from "@/lib/tech-icons";
import { cn } from "@/lib/utils";

export function TechBadge({
  tech,
  className,
  variant = "secondary",
}: {
  tech: string;
  className?: string;
  variant?: "secondary" | "outline";
}) {
  const icon = iconUrl(tech);
  return (
    <Badge variant={variant} className={cn("gap-1.5 text-xs font-normal", className)}>
      {icon && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={icon} alt="" aria-hidden className="size-3 opacity-80" />
      )}
      {tech}
    </Badge>
  );
}
