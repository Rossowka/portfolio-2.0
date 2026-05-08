import { socials } from "@/utils/socials";
import Image from "next/image";

const Socials = ({ className }) => {
  return (
    <ul className={`z-10 flex w-fit gap-2 ${className ? className : ""}`}>
      {socials.map((item) => (
        <li key={item.id}>
          <a
            target="_blank"
            href={item.url}
            rel="noopener noreferrer"
            aria-label={`Link to Sara's ${item.title} profile`}
            className="block p-3 lg:p-4 transition-opacity hover:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:rounded-sm
     focus-visible:outline-reddishBrown"
          >
            <Image
              src={item.iconUrl}
              width={24}
              height={24}
              className="h-6 w-6"
              alt=""
            />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Socials;
