import { socials } from "@/utils/socials";
import Image from "next/image";

const Socials = ({ className }) => {
  return (
    <ul className={`z-10 flex gap-2 ${className ? className : ""}`}>
      {socials.map((item) => (
        <li
          className="overflow-hidden p-3 lg:p-4 hover:opacity-40 transform transition-all"
          key={item.id}
        >
          <a
            target="_blank"
            href={item.url}
            rel="noopener noreferrer"
            aria-label={`Link to ${item.title} profile`}
          >
            <Image
              src={item.iconUrl}
              alt={`${item.title} icon`}
              width={24}
              height={24}
              className="h-6 w-6"
            />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Socials;
