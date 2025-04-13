import { ArrowIcon, Button } from "@/components";
import { CaseStudyNav } from "@/components/NavBar";
import { UpNext } from "@/components/Snapshot";
import { HeadingL, HeadingM, HeadingS } from "@/components/Text";
import { navItems } from "@/utils/navigationHDSCaseStudy";
import { PROJECTS } from "@/utils/projects";
import Link from "next/link";

const HDSCaseStudy = async () => {
  let title = "hawe-design-system";
  let featuredProjects = PROJECTS.filter(
    (project) => project.featured === true
  );
  let index = featuredProjects.findIndex((item) => item.id === title);
  let currentProject = featuredProjects[index];
  let nextProject =
    index === featuredProjects.length - 1
      ? featuredProjects[0]
      : featuredProjects[index + 1];

  return (
    <>
      <header className="container flex flex-col pt-32 md:pt-40">
        {/* back button */}
        <Link
          href="/projects/hawe-design-system"
          className="flex group gap-1 py-4 font-medium text-f-primary/40 hover:text-f-primary mt-1 mb-4 uppercase text-xs items-center"
        >
          <div className="min-w-fit content-center">
            <ArrowIcon className="transform transition-all duration-300 ease-in-out rotate-180 group-hover:rotate-[225deg]" />
          </div>
          see snapshot
        </Link>

        {/* section title */}
        <div className="flex flex-col ">
          <p className="text-sm pb-5 text-accent font-bold">
            {currentProject.client} | {currentProject.startDate} -{" "}
            {currentProject.endDate}
          </p>
          <h1 className="page-title md:mr-8">{currentProject.title}</h1>
        </div>

        {/* chips */}
        <div className="flex flex-wrap gap-2 pt-10">
          {currentProject.tags.map((tag, index) => (
            <div
              key={index}
              className="bg-accent/10 text-accent rounded-full px-4 py-2 text-sm font-bold"
            >
              {tag}
            </div>
          ))}
        </div>

        {/* row of buttons */}
        {currentProject.onlineUrl && (
          <div className="pt-10 flex flex-col md:flex-row gap-4">
            <Button
              label="see online"
              href={currentProject.onlineUrl}
            />
          </div>
        )}

        <div className="bg-f-inverse h-[1px] mt-10 mb-10"></div>

        {/* summary text */}
        <div className="flex flex-col md:flex-row">
          <p className="eyebrow mr-12 mb-4">[ context ]</p>
          <p className="text-2xl leading-normal lg:text-lg lg:leading-relaxed">
            {currentProject.context}
          </p>
        </div>
      </header>

      <div className="flex container">
        {/* case study navigation */}
        <CaseStudyNav navItems={navItems} />

        {/* the meat of case study goes here */}
        <div>
          <section
            id={navItems[0].id}
            className="pt-20 md:pt-32 max-w-2xl"
          >
            <HeadingL
              headingText="Achieve consistency and clarity across teams"
              subheadingText={"goals"}
            />
            <p>
              HAWE Hydraulik is a family-owned German company known for
              engineering precision in hydraulic components and systems. Its
              Customer Portal serves as a central hub. It powers up internal
              teams and customers alike with the tools they need to get things
              done.<br></br>
              <br></br>With a commitment to quality and efficiency, HAWE aspires
              to unify its digital experience and streamline the design process
              to minimize development costs.
            </p>
          </section>
          <section
            id={navItems[1].id}
            className="pt-20 md:pt-32 max-w-2xl"
          >
            <HeadingL
              headingText="A Disjointed Experience Holding Us Back"
              subheadingText="challenges"
            />
            <p>
              When I first joined the team, we faced several challenges. The UI
              looked different on every screen, teams operated in silos and
              users were frustrated with inconsistencies. <br></br>
              <br></br>Without research and research-driven strategy, decisions
              were often based on assumptions. We were losing potential deals
              due to poor UI and disjointed user experience.
            </p>
          </section>
        </div>
      </div>

      <UpNext nextProject={nextProject} />
    </>
  );
};

export default HDSCaseStudy;
