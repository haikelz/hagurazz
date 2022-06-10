import Underline from "@/src/components/atoms/underline";

const AboutTitle = () => {
  return (
    <div className="w-full mb-1 lg:mb-0 flex justify-center items-center flex-col">
      <h1 className="sm:text-3xl text-3xl font-bold title-font mb-1 text-center">
        About
      </h1>
      <Underline />
    </div>
  );
};

export default AboutTitle;
