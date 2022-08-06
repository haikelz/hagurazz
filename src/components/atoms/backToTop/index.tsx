import { FaArrowUp } from "react-icons/fa";
import { useScroll } from "@/src/hooks/useScroll";
import { motion } from "framer-motion";
import { backToTopAnimation } from "@/src/utils/animation";
import Link from "next/link";

const BackToTop = () => {
  const [scroll] = useScroll();

  return (
    <>
      {scroll > 50 && (
        <motion.div {...backToTopAnimation} className="fixed hidden md:flex bottom-4 right-4 z-10">
          <Link href="" passHref>
            <button className="p-2.5 rounded-md bg-[#F05454] hover:bg-red-500 dark:bg-[#2563EB] dark:hover:bg-blue-700 duration-300 transition">
              <FaArrowUp className="text-white" size="20" />
            </button>
          </Link>
        </motion.div>
      )}
    </>
  );
};

export default BackToTop;
