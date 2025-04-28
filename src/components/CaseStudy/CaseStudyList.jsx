import { HeadingM } from "../Text";

const CaseStudyList = ({ title, children }) => {
  return (
    <>
      {title && <HeadingM headingText={title} />}
      <ul
        className={`flex flex-wrap ${title ? "-mt-4" : "mt-16"} ml-8 md:-mx-5`}
      >
        {children}
      </ul>
    </>
  );
};

export default CaseStudyList;
