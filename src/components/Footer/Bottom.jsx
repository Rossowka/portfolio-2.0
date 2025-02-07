import Link from "next/link";
import { Socials } from "../Socials";

// -----------------------------------------------------------------------------------
// THINGS TO TAKE CARE OF
// -----------------------------------------------------------------------------------
/*

[] add back to top button

*/

const Bottom = () => {
  const date = new Date().getFullYear();

  return (
    <div className="py-6 md:py-6 lg:py-8 bg-black text-f-inverse -mx-3">
      <div className="container flex flex-wrap md:items-center md:justify-between uppercase ">
        <div className="order-3 md:order-1 mt-6 md:mt-0 flex-[0_0_50%] md:flex-[0_0_30%] max-w-[50%] border-t-[1px] border-f-inverse/20 md:border-t-0">
          <p className=" text-f-inverse/40 text-xs font-normal content-center pt-4 px-3">
            {date} &copy; Sara Rossow
          </p>
        </div>

        <div className="order-4 md:order-2 flex text-f-inverse/40 text-xs mt-6 md:mt-0 flex-[0_0_50%] md:flex-[0_0_30%] max-w-[50%] justify-end md:justify-center border-t-[1px] border-f-inverse/20 md:border-t-0">
          <Link
            href="/imprint"
            className="px-3 pt-4 hover:text-f-inverse transform transition-all"
          >
            Imprint
          </Link>
          <Link
            href="/privacy"
            className="px-3 pt-4  hover:text-f-inverse transform transition-all"
          >
            Privacy
          </Link>
        </div>

        <div className="order-1 md:order-3 md:flex-[0_0_30%] md:flex md:justify-end">
          <Socials />
        </div>
      </div>
    </div>
  );
};

export default Bottom;
