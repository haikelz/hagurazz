import Main from "~components/main";
import TransitionLayout from "~components/transition-layout";
import { Heading, Paragraph, UnderlineLink } from "~ui/typography";

export default function NotFoundPage() {
  return (
    <Main className="flex min-h-screen flex-col items-center justify-center text-center">
      <section className="flex flex-col items-center justify-center">
        <TransitionLayout
          transition={{ duration: 0.3 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <Heading as="h1">404 😴</Heading>
          <Paragraph className="mt-2 font-semibold">
            Looks like the page that you want to visit is not found!{" "}
            <UnderlineLink href="/">Back to Home</UnderlineLink>
          </Paragraph>
        </TransitionLayout>
      </section>
    </Main>
  );
}
