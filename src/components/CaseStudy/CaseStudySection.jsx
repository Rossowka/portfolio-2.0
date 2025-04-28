import { HeadingL } from "../Text";

const CaseStudySection = ({
  id,
  sectionTitle = "placeholder title",
  sectionTag = "placeholder tag",
  children,
}) => {
  return (
    <section
      id={id}
      className="pt-20 md:pt-32 max-w-2xl"
    >
      <HeadingL
        headingText={sectionTitle}
        subheadingText={sectionTag}
      />
      {children}
    </section>
  );
};

export default CaseStudySection;
