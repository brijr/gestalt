import { cn } from "@/lib/utils";

type PostCardShellProps = {
  children: React.ReactNode;
  className?: string;
};

export function PostCardShell({ children, className }: PostCardShellProps) {
  return (
    <div className={cn("w-full space-y-4 bg-muted rounded-xl p-8", className)}>
      {children}
    </div>
  );
}
