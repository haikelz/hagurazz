import { twJoin, twMerge } from "tailwind-merge";
import { projectsList } from "~lib/utils/data";
import { spaceGrotesk } from "~lib/utils/fonts";
import { GithubIcon, PreviewIcon } from "~ui/icons";
import { Paragraph } from "~ui/typography";

const ListWorks = () => {
  return (
    <>
      {projectsList.map((work, index) => (
        <div
          className={twJoin(
            "cursor-pointer overflow-hidden border-[2.5px]",
            "border-black bg-azure transition-all ease-in-out",
            "hover:shadow-light active:scale-95",
            "dark:border-white dark:bg-raisinblack dark:hover:shadow-dark"
          )}
          key={index + 1}
        >
          <div className="px-6 pb-6 pt-3">
            <h4 className="mt-2 mb-2 text-xl font-bold">{work.h4}</h4>
            <Paragraph className="mb-2" isCenter={false}>
              {work.p}
            </Paragraph>
            <div className={twMerge("mt-3 flex space-x-2 font-medium", spaceGrotesk.className)}>
              {work.stack.map((techstack, index) => (
                <span
                  key={index + 1}
                  className={twJoin(
                    "bg-celedongreen px-1.5 text-sm text-white",
                    "dark:bg-lightgray dark:text-slate-900"
                  )}
                >
                  {techstack}
                </span>
              ))}
            </div>
            <div className="mt-3 flex justify-end">
              <GithubIcon link={work.repo} />
              <PreviewIcon link={work.preview} />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ListWorks;
