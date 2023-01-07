import BottomNav from "@/organisms/BottomNav";
import Footer from "@/organisms/Footer";
import Header from "@/organisms/Header";
import { ChildrenProps } from "@/types";
import { twJoin } from "tailwind-merge";

const Template = ({ children }: ChildrenProps) => {
  return (
    <div
      className={twJoin(
        "min-h-screen w-full bg-brightgray bg-fixed bg-center",
        "dark:bg-eerieblack dark:text-gray-100"
      )}
    >
      <Header />
      {children}
      <Footer />
      <BottomNav />
    </div>
  );
};

export default Template;
