import { ArrowIcon, Button } from "@/components";
import { CaseStudyNav } from "@/components/NavBar";
import { UpNext } from "@/components/Snapshot";
import { HeadingL, HeadingM, HeadingS } from "@/components/Text";
import { navItems } from "@/utils/navigationHUXCaseStudy";
import { PROJECTS } from "@/utils/projects";
import Link from "next/link";

const HUXCaseStudy = async () => {
  let title = "hawe-ux-maturity";
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
          href="/projects"
          className="flex group gap-1 py-4 font-medium text-f-primary/40 hover:text-f-primary mt-1 mb-4 uppercase text-xs items-center"
        >
          <div className="min-w-fit content-center">
            <ArrowIcon className="transform transition-all duration-300 ease-in-out rotate-180 group-hover:rotate-[225deg]" />
          </div>
          back to projects
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
              headingText="Redesign of the platform to reflect HAWE's approach to customers"
              subheadingText={"goals"}
            />
            <p>
              HAWE delivers custom hydraulic solutions for every need. Its
              Customer Portal, above all, enables users to quickly find and
              configure products that match their hydraulic needs. With{" "}
              <strong>over 12,000 registered customers</strong> worldwide, HAWE
              offers dedicated support to each one. <br></br>
              <br></br>Committed to innovation, the company aspires to improve
              its digital experience to reflect its vision of being “a company
              easy to deal with".
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
          <section
            id={navItems[2].id}
            className="pt-20 md:pt-32 max-w-2xl"
          >
            <HeadingL
              headingText="Begin with the user and work backwards"
              subheadingText="the approach"
            />
            <HeadingM headingText="Understanding Status Quo" />
            <p>
              It was clear, we needed to bridge the gap between design,
              development, and business goals. The first step was to understand
              our existing processes. Building trust and communicating my value
              was key. <br></br>
              <br></br>I introduced myself across departments as an advocate for
              User Experience. To better understand the situation, I interviewed
              over 14 specialists. I gathered their views on our digital
              products, users, and the challenges they were facing.
            </p>
            <HeadingM headingText="Key insights:" />
            <ul className="flex flex-wrap ml-8 md:-mx-5">
              <li className="px-5 border-t border-f-primary/10 md:border-none">
                <HeadingS
                  headingText="UX demans are loud and clear"
                  className="font-serif"
                />
                <p className="pb-5 text-base md:text-sm font-medium leading-relaxed md:leading-relaxed text-f-primary/80">
                  Almost everyone recognized the need for better user experience
                  and customer insights.
                </p>
              </li>
              <li className="px-5 border-t border-f-primary/10 md:border-none">
                <HeadingS
                  headingText="Design chaos drives up costs"
                  className="font-serif"
                />
                <p className="pb-5 text-base md:text-sm font-medium leading-relaxed md:leading-relaxed text-f-primary/80">
                  Discussions with product teams revealed we lacked processes
                  for creating new applications. Neglecting our design manual
                  was increasing development costs.
                </p>
              </li>
              <li className="px-5 border-t border-f-primary/10 md:border-none">
                <HeadingS
                  headingText="Sales struggle to find information"
                  className="font-serif"
                />
                <p className="pb-5 text-base md:text-sm font-medium leading-relaxed md:leading-relaxed text-f-primary/80">
                  Meeting with our field experts revealed a frustrating process.
                  The portal was slow and poorly organised which forced sales
                  reps to juggle multiple browser tabs open.
                </p>
              </li>
            </ul>
          </section>
          <section
            id={navItems[3].id}
            className="pt-20 md:pt-32 max-w-2xl"
          >
            <HeadingL
              headingText="Mediating across teams to bring them together"
              subheadingText="shared vision"
            />
            <HeadingM headingText="Finding allies" />
            <p>
              With a weak UX presence, gaining leadership support wasn’t easy. I
              stayed persistent and used creative problem-solving to get my
              ideas noticed. <br></br>
              <br></br>Fortunately, I found people who understood the value of
              UX, and had the influence to drive change forward. We cooperated
              with an external UX agency to help guide us through the process of
              strenghening UX presence in the organisation.
            </p>
            <HeadingM headingText="Spreading the UX mindset" />
            <p>
              Together, we preached about the benefits of better usability, how
              it supports company goals and values, and educated about UX during
              workshops. <br></br>
              <br></br>We helped HAWE focus on the user the same way the company
              was focusing on the customer in person. Step by step, we
              introduced key UX principles into HAWE’s digital products and
              processes.
            </p>
          </section>
          <section
            id={navItems[4].id}
            className="pt-20 md:pt-32 max-w-2xl"
          >
            <HeadingL
              headingText="Evaluating our products"
              subheadingText="research"
            />
            <HeadingM headingText="Small UX wins" />
            <p>
              To show the value of UX, I started with a heuristics evaluation,
              focusing on quick wins. Small changes made a big impact. Clearer
              headers, and consistent icons improved usability with little
              effort.
              <br></br>
              <br></br>While working with our design manual and standardizing
              icons, I realized a need for a cohesive design system. Later on I
              took it on myself to develop.
            </p>
            <Link
              href="/case-study/hawe-design-system"
              className="flex group gap-1 py-4 font-medium text-accent mt-1"
            >
              See how I improved efficiency with a design system
              <div className="min-w-fit content-center">
                <ArrowIcon
                  className="transform transition-all duration-300 ease-in-out 
                -rotate-45 md:group-hover:rotate-0"
                />
              </div>
            </Link>
            <HeadingM headingText="Championing data-driven decisions" />
            <p>
              I led usability tests and user interviews, turning feedback into
              actionable product improvements. Thanks to these insights I
              created clear handoff guides. Together, with the team we
              documented a structured research process.
              <br></br>
              <br></br>With these small steps we demonstrated the tangible
              impact of UX. Our team built a user-centered foundation for a more
              informed UX approach across the company.
            </p>
          </section>
          <section
            id={navItems[5].id}
            className="pt-20 md:pt-32 max-w-2xl"
          >
            <HeadingL
              headingText="Raising the bar for UX maturity"
              subheadingText="strategy"
            />
            <HeadingM headingText="Measuring Success" />
            <p>
              While we had a solid foundation in qualitative research, we were
              missing on quantitative data. I introduced the work of our digital
              marketing team to my product teams. Conversation started on
              leveraging web analytics tools and using it to measure impact of
              changes we make. <br></br>
              <br></br>To get us started, while we wait for the data, I
              introduced a simple grading system. It helped us during the design
              process to measure improvements during user testing and
              post-release.
            </p>
            <HeadingM headingText="Embeding UX in the culture" />
            <p>
              The real success was the crawling shift in the mindset. We
              established a weekly UX meeting where we shared improvements and
              encouraged all team members to contribute ideas. <br></br>
              <br></br>Design was evolving into a strategic function rather than
              just an afterthought. The foundation was set, not just for the
              current products, but for the company’s long-term vision.
            </p>
          </section>

          {/* summary section */}
          <section
            id={navItems[6].id}
            className="pt-20 md:pt-32 max-w-2xl"
          >
            <HeadingL
              headingText="Looking back and in the future"
              subheadingText="summary"
            />
            <HeadingM headingText="Key learnings:" />
            <ul className="flex flex-wrap ml-8 md:-mx-5">
              <li className="sm:flex-[0_0_50%] sm:max-w-[50%] md:flex-[0_0_33.333333%] md:max-w-[33.333333%] px-5 border-t border-f-primary/10 md:border-none">
                <HeadingS
                  headingText="UX change takes some grit"
                  className="font-serif"
                />
                <p className="pb-5 text-base md:text-sm font-medium leading-relaxed md:leading-relaxed text-f-primary/80">
                  Driving UX maturity in a traditional organization takes time
                  and... stubbornness. It is important to keep on going and
                  document the smallest wins.
                </p>
              </li>
              <li className="sm:flex-[0_0_50%] sm:max-w-[50%] md:flex-[0_0_33.333333%] md:max-w-[33.333333%] px-5 border-t border-f-primary/10 md:border-none">
                <HeadingS
                  headingText="Collaboration is essential"
                  className="font-serif"
                />
                <p className="pb-5 text-base md:text-sm font-medium leading-relaxed md:leading-relaxed text-f-primary/80">
                  Bridging the gap between design, development, and business
                  ensures a holistic approach to user-centered design.
                </p>
              </li>
              <li className="sm:flex-[0_0_50%] sm:max-w-[50%] md:flex-[0_0_33.333333%] md:max-w-[33.333333%] px-5 border-y border-f-primary/10 md:border-none">
                <HeadingS
                  headingText="Data drives decisions"
                  className="font-serif"
                />
                <p className="pb-5 text-base md:text-sm font-medium leading-relaxed md:leading-relaxed text-f-primary/80">
                  Combining research with analytics creates a compelling case
                  for UX improvements and aligns design decisions with business
                  goals.
                </p>
              </li>
            </ul>
            <HeadingM headingText="Future objectives:" />
            <ul className="flex flex-wrap ml-8 md:-mx-5">
              <li className="sm:flex-[0_0_50%] sm:max-w-[50%] md:flex-[0_0_33.333333%] md:max-w-[33.333333%] px-5 border-t border-f-primary/10 md:border-none">
                <HeadingS
                  headingText="Expand the design system"
                  className="font-serif"
                />
                <p className="pb-5 text-base md:text-sm font-medium leading-relaxed md:leading-relaxed text-f-primary/80">
                  Continue evolving the design system by incorporating more
                  advanced components and adopting further applications.
                </p>
              </li>
              <li className="sm:flex-[0_0_50%] sm:max-w-[50%] md:flex-[0_0_33.333333%] md:max-w-[33.333333%] px-5 border-t border-f-primary/10 md:border-none">
                <HeadingS
                  headingText="Keep the feedback flowing"
                  className="font-serif"
                />
                <p className="pb-5 text-base md:text-sm font-medium leading-relaxed md:leading-relaxed text-f-primary/80">
                  Implement continuous discovery practices to keep an eye on the
                  data and make sure user voice is at the center of product
                  development.
                </p>
              </li>
              <li className="sm:flex-[0_0_50%] sm:max-w-[50%] md:flex-[0_0_33.333333%] md:max-w-[33.333333%] px-5 border-y border-f-primary/10 md:border-none">
                <HeadingS
                  headingText="Make UX contagious"
                  className="font-serif"
                />
                <p className="pb-5 text-base md:text-sm font-medium leading-relaxed md:leading-relaxed text-f-primary/80">
                  Foster a culture of UX by educating other teams, mentoring
                  junior designers and embedding UX best practices across all
                  digital touchpoints.
                </p>
              </li>
            </ul>
          </section>
          <section className="pt-20 md:pt-32 max-w-2xl">
            <HeadingL
              headingText="Let’s talk UX evolution"
              subheadingText="Reach out"
            />
            <p>
              UX maturity is about more than just the design team's work. It's
              about creating a shared mindset, encouraging collaboration, and
              securing a user-centered approach throughout the entire
              organization. <br></br>
              <br></br>If you're looking for a designer who can bridge gaps and
              drive meaningful change, let’s connect.
            </p>
          </section>
        </div>
      </div>

      <UpNext nextProject={nextProject} />
    </>
  );
};

export default HUXCaseStudy;
