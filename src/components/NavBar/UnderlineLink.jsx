import Link from "next/link";

/**
 * UnderlineLink
 *
 * variant="default" — line wipes in from left on hover, out to right on leave
 * variant="alt"     — alt variant: starts with underline, line wipes out left, new line wipes in from left
 *
 */

const UnderlineLink = ({ href, children, variant = "default", className = "", ...props }) => {
  const isAlt = variant === "alt";

  return (
    <Link
      href={href}
      className={[
        "relative inline-block no-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:rounded-sm focus-visible:outline-reddishBrown",
        isAlt ? "underline-link-alt" : "underline-link-default",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      {children}
    </Link>
  );
};

export default UnderlineLink;
