import { cn } from "@/lib/utils";

export { RefLink } from "./ref-link";

export function ReferenceIndex({
  urls,
  className,
}: {
  urls: readonly string[];
  className?: string;
}) {
  if (!urls.length) return null;

  return (
    <ol
      className={cn("mt-4 list-decimal space-y-2 pl-5 text-sm", className)}
    >
      {urls.map((href, i) => {
        const n = i + 1;
        return (
          <li
            key={`${n}-${href}`}
            id={`ref-${n}`}
            className="pl-1 marker:text-muted-foreground"
          >
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="wrap-break-word text-foreground underline-offset-4 hover:underline"
            >
              {href}
            </a>
          </li>
        );
      })}
    </ol>
  );
}
