import { allNotes } from "contentlayer/generated";
import { useMemo } from "react";
import Main from "~components/main";
import { tw } from "~lib/helpers";
import { DEFAULT_OG_URL, SITE_URL } from "~lib/utils/constants";
import { TagsList } from "~ui/lists";
import { Heading, Paragraph, Underline } from "~ui/typography";

const baseMetadata = {
  title: "Tags",
  description: "Select spesific notes based on the list of tags below.",
  url: `${SITE_URL}/tags`,
};

const { title, description, url } = baseMetadata;

export const metadata = {
  title,
  description,
  openGraph: {
    type: "website",
    url,
    title,
    description,
    siteName: "haikel.app",
    images: [
      {
        url: DEFAULT_OG_URL,
        alt: "OG Image",
      },
    ],
  },
  twitter: {
    title,
    description,
    site: url,
    card: "summary_large_image",
  },
  metadataBase: new URL(url),
};

export default function Tags() {
  // Merge all tags in the notes into one array and sort it alphabetically
  const tagsList = useMemo(
    () =>
      [
        ...new Set(
          allNotes
            .map((item) => [...new Set(item.tags)].join(" "))
            .join(" ")
            .split(" ")
        ),
      ].sort((a, b) => {
        if (a < b) return -1;
        if (a > b) return 1;
        return 0;
      }),
    []
  );

  return (
    <Main className={tw("flex min-h-screen flex-col items-start justify-start", "py-8")}>
      <section className="flex w-full flex-wrap items-start justify-start">
        <div>
          <Heading as="h2" className="text-left">
            Tags
          </Heading>
          <Underline />
        </div>
        <div className="w-full leading-relaxed">
          <Paragraph id="description">
            Select spesific notes based on the list of tags below.
          </Paragraph>
        </div>
      </section>
      <section className="mt-6 flex flex-wrap gap-3">
        <TagsList tagsList={tagsList} />
      </section>
    </Main>
  );
}
