import { cxm } from "~lib/helpers/cxm";
import { IconClassNameProps } from "~models";

export function HomeIcon({ className }: IconClassNameProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={cxm("icon icon-tabler icon-tabler-home", className)}
      width="28"
      height="28"
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M5 12l-2 0l9 -9l9 9l-2 0"></path>
      <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7"></path>
      <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6"></path>
    </svg>
  );
}
