import { Notes, allNotes } from "contentlayer/generated";
import { Metadata } from "next";
import { tw } from "~lib/helpers";
import { DEFAULT_OG_URL, SITE_URL } from "~lib/utils/constants";
import { NotesList } from "~ui/lists";
import Main from "~ui/main";
import { Heading, Paragraph, Underline } from "~ui/typography";

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const notes: Notes[] = allNotes;
  const tags: Set<string> = new Set(notes.map((note) => note.tags).flat());

  return Array.from(tags).map((tag) => ({ slug: tag }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata | undefined> {
  const { slug } = params;
  const tagSlug = `Tags #${slug}`;

  return {
    title: tagSlug,
    description: tagSlug,
    openGraph: {
      type: "website",
      url: `${SITE_URL}/tags/${slug}`,
      title: tagSlug,
      description: tagSlug,
      siteName: "haikel.app",
      images: [
        {
          url: DEFAULT_OG_URL,
          alt: "OG Image",
        },
      ],
    },
    twitter: {
      title: tagSlug,
      description: tagSlug,
      site: `https://haikel.app/tags/${slug}`,
      card: "summary_large_image",
    },
    metadataBase: new URL(`${SITE_URL}/tags/${slug}`),
  };
}

export default function Tags({ params }: { params: { slug: string } }) {
  const { slug } = params;

  const notes = allNotes.filter((note) => note.tags.includes(slug)).map((note) => note);

  return (
    <Main className={tw("flex min-h-screen flex-col items-center justify-start", "py-8")}>
      <section className="flex w-full flex-wrap items-start justify-start">
        <div>
          <Heading as="h2" className="text-left">
            Tags #{slug}
          </Heading>
          <Underline />
        </div>
      </section>
      <section className="mb-10 mt-6 flex w-full flex-col space-y-8">
        {notes.length ? (
          <NotesList filteredNotes={notes} />
        ) : (
          <Paragraph>No notes matching with the tags!</Paragraph>
        )}
      </section>
    </Main>
  );
}
