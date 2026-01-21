import { Main, Section, Container } from "@/components/ds";
import { List } from "@/components/posts/list";

import { getAllPosts } from "@/lib/posts";

export default function HomePage() {
  const posts = getAllPosts();

  return (
    <Main>
      <Hero />
      <List posts={posts} />
    </Main>
  );
}

const Hero = () => {
  return (
    <Section>
      <Container className="space-y-2">
        <h1>Gestalt Labs</h1>
        <p className="text-muted-foreground">
          Studying how humans and AI work together. Building software that
          reflects what&apos;s learned.
        </p>
        <p className="text-sm text-muted-foreground">
          by{" "}
          <a
            href="https://bridger.to"
            className="underline hover:text-foreground"
          >
            Bridger Tower
          </a>
        </p>
      </Container>
    </Section>
  );
};