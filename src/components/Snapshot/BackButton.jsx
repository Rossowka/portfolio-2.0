import Link from "next/link";
import { ArrowIcon } from "../ArrowIcon";

const BackButton = () => {
  return (
    <div>
      <Link
        href="/projects"
        className="flex group gap-1 py-4 font-medium text-f-primary/40 hover:text-f-primary mb-2 items-center w-fit pr-4"
      >
        <div className="min-w-fit content-center">
          <ArrowIcon className="transform transition-all duration-300 ease-in-out rotate-180 group-hover:rotate-[225deg]" />
        </div>
        <p className="uppercase text-xs mt-1 tracking-wide font-bold mb-[2px]">back to projects</p>
      </Link>
    </div>
  );
};

export default BackButton;
