import { Heading } from "@/atoms/Heading";
import { Paragraph } from "@/atoms/Paragraph";
import Layout from "@/templates/Layout";
import { cn } from "@/helpers/cn";

const Home = () => {
  return (
    <Layout
      title="Haikel"
      description="Frontend Enthusiast"
      className="flex min-h-screen flex-col items-center justify-center"
    >
      <div className="flex flex-col items-center justify-center text-center">
        <Heading as="h2" className="mb-1">
          Hello, I&#39;m{" "}
          <span
            className={cn(
              "text-3xl underline decoration-underline-light decoration-dashed underline-offset-[5px] dark:bg-gradient-to-r dark:from-[#0093E9] dark:to-[#80D0C7] dark:bg-clip-text dark:text-transparent dark:decoration-[#0093E9]"
            )}
          >
            Haikel
          </span>{" "}
          🌸
        </Heading>
        <Paragraph className="mb-4" isCenter>
          Frontend Enthusiast
        </Paragraph>
      </div>
    </Layout>
  );
};

export default Home;
