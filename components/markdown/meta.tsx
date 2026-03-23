import { Section, Container } from "@/components/ds";
import { PostCardShell } from "@/components/posts/post-card-shell";
import { formatDate } from "@/lib/mdx";
import { postViewTransitionName } from "@/lib/view-transitions";
import { CopyButton } from "./copy-button";
import { BackButton } from "./back-button";

interface MetaProps {
  title: string;
  description?: string;
  date?: string;
  author?: string;
  tags?: string[];
  slug?: string;
}

export function Meta({ title, description, date, author, slug }: MetaProps) {
  const body = (
    <>
      <div className="flex items-start justify-between gap-4">
        <h1
          className="font-medium min-w-0 pr-2"
          style={
            slug
              ? { viewTransitionName: postViewTransitionName(slug) }
              : undefined
          }
        >
          {title}
        </h1>
        <div className="flex gap-2 shrink-0">
          <BackButton />
          <CopyButton />
        </div>
      </div>
      {description && (
        <p className="text-muted-foreground text-xl sm:text-2xl">
          {description}
        </p>
      )}
      {(date || author) && (
        <div className="text-sm text-muted-foreground">
          {date && <time dateTime={date}>{formatDate(date)}</time>}
          {date && author && <span> · </span>}
          {author && <span>{author}</span>}
        </div>
      )}
    </>
  );

  return (
    <Section>
      <Container>
        {slug ? (
          <PostCardShell className="text-4xl">{body}</PostCardShell>
        ) : (
          <div className="space-y-2">{body}</div>
        )}
      </Container>
    </Section>
  );
}
