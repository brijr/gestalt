"use client";

import { badgeVariants } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

const badgeClass = cn(
  badgeVariants({ variant: "outline" }),
  "mx-0.5 inline-flex h-4 min-w-[1.125rem] shrink-0 items-center justify-center px-0.5 text-[0.55rem] leading-none font-medium tabular-nums no-underline hover:bg-muted/80 hover:no-underline",
);

export function RefLink({
  n,
  href,
  className,
}: {
  n: number;
  href?: string;
  className?: string;
}) {
  if (!href) {
    return (
      <span
        className={cn(
          badgeVariants({ variant: "outline" }),
          "mx-0.5 inline-flex h-4 min-w-[1.125rem] shrink-0 items-center justify-center px-0.5 text-[0.55rem] leading-none tabular-nums opacity-60",
          className,
        )}
      >
        [{n}]
      </span>
    );
  }

  return (
    <Tooltip>
      <TooltipTrigger
        className={cn("inline align-baseline", className)}
        render={
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open reference ${n} in a new tab`}
            className={badgeClass}
          />
        }
      >
        [{n}]
      </TooltipTrigger>
      <TooltipContent side="top" className="max-w-sm font-mono text-[0.7rem] leading-snug">
        {href}
      </TooltipContent>
    </Tooltip>
  );
}
