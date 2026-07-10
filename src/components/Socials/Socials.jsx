import { socials } from "@/utils/socials";

const Socials = ({ className }) => {
  return (
    <ul className={`z-10 flex w-fit gap-5 ${className}`}>
      {socials.map(({ id, title, url, Icon }) => {
        return (
          <li key={id}>
            <a
              target="_blank"
              href={url}
              rel="noopener noreferrer"
              aria-label={`Link to Sara's ${title} profile`}
              className="block transition-opacity hover:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:rounded-sm focus-visible:outline-reddishBrown"
            >
              <Icon className="h-6 w-6" />
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default Socials;
