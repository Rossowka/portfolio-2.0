import { Button } from "../Button";

const UpNext = ({ nextProject }) => {
  return (
    <div className="container p-8 mt-16 -mb-14 border-t-[1px] border-b-[1px] border-f-inverse">
      <div className="flex flex-col">
        <p className="eyebrow mb-6">[ up next ]</p>
        <h1 className="project-title ">
          <span className="font-serif">{nextProject.client} - </span>
          <span>{nextProject.title}</span>
        </h1>
      </div>

      <div className="mb-8">
        <Button
          label="view project"
          href={nextProject.url}
        />
      </div>
    </div>
  );
};

export default UpNext;
