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
          href="/projects/hawe-ux-maturity"
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
          {/* goals */}
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
              offers dedicated support to each one.
              <br />
              <br />
              Committed to innovation, the company aspires to improve its
              digital experience to reflect its vision of being “a company easy
              to deal with".
            </p>
            <ul className="flex flex-wrap mt-16 ml-8 md:-mx-5">
              <li className="px-5 border-t border-f-primary/10 md:border-none flex-[0_0_50%] max-w-[50%]">
                <HeadingS
                  headingText="Make the platform deliver coherent experience"
                  className="font-serif"
                />
                <p className="pb-5 text-base md:text-sm font-medium leading-relaxed md:leading-relaxed text-f-primary/80">
                  Using the same fonts and colors across all tools helps keep
                  our brand consistent and increases customer loyalty.
                </p>
              </li>
              <li className="px-5 border-t border-f-primary/10 md:border-none flex-[0_0_50%] max-w-[50%]">
                <div className="mt-8 mb-4">
                  <p className="font-semibold text-2xl tracking-tight leading-tight font-serif">
                    Improve <br /> usability
                  </p>
                </div>
                <p className="pb-5 text-base md:text-sm font-medium leading-relaxed md:leading-relaxed text-f-primary/80">
                  Simple navigation and functionality make it easier for users
                  to stick around and keep discovering our products.
                </p>
              </li>
            </ul>
          </section>

          {/* challenges */}
          <section
            id={navItems[1].id}
            className="pt-20 md:pt-32 max-w-2xl"
          >
            <HeadingL
              headingText="A disjointed experience holding us back"
              subheadingText="challenges"
            />
            <p>
              When I first joined, it felt like UX wasn’t really on anyone’s
              radar. Without research-driven strategy, decisions were often
              based on assumptions. We were losing potential deals due to poor
              UI and disjointed user experience.
            </p>
            <ul className="flex flex-wrap mt-16 ml-8 md:-mx-5">
              <li className="px-5 border-t border-f-primary/10 md:border-none flex-[0_0_50%] max-w-[50%]">
                <HeadingS
                  headingText="Misunderstanding of UX"
                  className="font-serif"
                />
                <p className="pb-5 text-base md:text-sm font-medium leading-relaxed md:leading-relaxed text-f-primary/80">
                  UX was seen as just “making things look nice”, and not a
                  strategic tool. This made it tough to gain traction in
                  leadership conversations.
                </p>
              </li>
              <li className="px-5 border-t border-f-primary/10 md:border-none flex-[0_0_50%] max-w-[50%]">
                <HeadingS
                  headingText="Patchworked UI"
                  className="font-serif"
                />
                <p className="pb-5 text-base md:text-sm font-medium leading-relaxed md:leading-relaxed text-f-primary/80">
                  Departments were siloed and working with different vendors.
                  Each introducing their own UI styles.
                </p>
              </li>
            </ul>
          </section>

          {/* approach */}
          <section
            id={navItems[2].id}
            className="pt-20 md:pt-32 max-w-2xl"
          >
            <HeadingL
              headingText="Begin with the user and work backwards"
              subheadingText="the approach"
            />
            <HeadingM headingText="Understanding the status quo" />
            <p>
              The first step was to build trust and understand how UX was
              perceived and practiced across the company. I conducted over 14
              stakeholder interviews to introduce myself across departments and
              get a feeling of expectations and issues HAWE was facing.
            </p>
            <HeadingM headingText="Key insights:" />
            <p></p>
            <ul className="flex flex-wrap ml-8 md:-mx-5 -mt-6">
              <li className="px-5 border-t border-f-primary/10 md:border-none flex-[0_0_50%] max-w-[50%]">
                <HeadingS
                  headingText="Design chaos drives up development costs"
                  className="font-serif"
                />
                <p className="pb-5 text-base md:text-sm font-medium leading-relaxed md:leading-relaxed text-f-primary/80">
                  Discussions with product teams revealed we lacked processes
                  for alignment with external vendors and creating new
                  applications.
                </p>
              </li>
              <li className="px-5 border-t border-f-primary/10 md:border-none flex-[0_0_50%] max-w-[50%]">
                <HeadingS
                  headingText="Sales representatives struggle to find information"
                  className="font-serif"
                />
                <p className="pb-5 text-base md:text-sm font-medium leading-relaxed md:leading-relaxed text-f-primary/80">
                  Meeting with field experts revealed a frustrating process. The
                  portal was slow and forced users to juggle multiple browser
                  tabs.
                </p>
              </li>
              <li className="px-5 border-t border-f-primary/10 md:border-none flex-[0_0_50%] max-w-[50%]">
                <HeadingS
                  headingText="UX demands are loud and clear"
                  className="font-serif"
                />
                <p className="pb-5 text-base md:text-sm font-medium leading-relaxed md:leading-relaxed text-f-primary/80">
                  Almost everyone recognized the need for better user experience
                  and customer insights.
                </p>
              </li>
            </ul>
            <HeadingM headingText="First UX wins" />
            <p>
              One of my first big initiatives was a heuristic evaluation of our
              customer portal. It revealed major usability gaps. Small, targeted
              changes made big impact. Clearer headers and consistent icons
              improved usability with little effort.
              <br />
              <br />
              As we mapped each user journey, we could streamline flows and
              reduce cognitive load. Every screen began doing more, with less
              effort.
            </p>
          </section>

          {/* gaining traction */}
          <section
            id={navItems[3].id}
            className="pt-20 md:pt-32 max-w-2xl"
          >
            <HeadingL
              headingText="From insights to impact"
              subheadingText="Gaining traction"
            />
            <p>
              At first, my efforts hit walls. While my manager was happy, the
              ideas we discussed didn’t leave the confinement of our team. At
              least that's what I thought. Until a lucky strike happened. An
              innovation manager heard about our initiative and they wanted to
              involve me in creation of a new tool.
            </p>
            <HeadingM headingText="Prototyping to build trust" />
            <p>
              I translated early ideas from stakeholders into low-fidelity
              wireframes and quick prototypes. The project took off and became a
              springboard for cross-functional collaboration. <br />
              <br />
              This momentum helped me get looped into technical conversations
              and introduced me to engineers from digitalization team, who could
              help build the tool. This was a direct result of trust earned by
              solving real problems and showing how UX could unlock real value.
            </p>
            <HeadingM headingText="Gaining allies through collaboration" />
            <p>
              The digitalization team initially saw UX as a “nice to have,”
              especially since they worked with external agency. But once we
              started collaborating on internal tools, they began to see the
              value of fast iteration and shared standards.
              <br />
              <br />
              Through co-creation and open communication, I gained allies in my
              design system and ux maturity efforts. What started as a one-off
              prototype evolved into a strong cross-functional partnership.
            </p>
          </section>

          {/* shared vision */}
          <section
            id={navItems[4].id}
            className="pt-20 md:pt-32 max-w-2xl"
          >
            <HeadingL
              headingText="Mediating across teams to bring them together"
              subheadingText="shared vision"
            />
            <HeadingM headingText="Spreading the UX mindset" />
            <p>
              We shared our findings with other teams. Together, we preached
              about usability, how it supports company customer-first values,
              and educated about UX during workshops.
            </p>
            <HeadingM headingText="Championing data-driven decisions" />
            <p>
              Thanks to insights from my interviews and usability tests, I
              created action points for improvements, clear handoff guides and
              my prototypes became conversation starters. As we gained speed, I
              co-led the effort to formalize what had been an improvisation so
              far.
              <br />
              <br />
              We began documenting our workflows, design patterns, and user
              feedback. I introduced a simple but scalable design system with a
              governance model to ensure consistency across teams.
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
          </section>

          {/* measuring success */}
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
              While we had a strong base in qualitative research, we lacked
              quantitative insights. I brought in input from our digital
              marketing team and kicked off conversations around using web
              analytics to track the impact of our changes.
              <br />
              <br />
              To get started, I introduced a simple scorecard that helped us
              measure improvements during user testing and after release.
            </p>

            <HeadingM headingText="Creating UX rituals" />
            <p>
              We opened up a line of communication between teams. We started
              weekly UX syncs to connect the dots across teams and products.
              These small implementations created visibility and momentum, even
              when we couldn’t launch big initiatives.
            </p>

            <HeadingM headingText="Shifting the mindset" />
            <p>
              As we continued to show value, more teams came to us early. Design
              was evolving into a strategic function rather than just an
              afterthought. The foundation was set, not just for the current
              products, but for the company’s long-term vision.
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
                  headingText="Driving UX change takes some grit"
                  className="font-serif"
                />
                <p className="pb-5 text-base md:text-sm font-medium leading-relaxed md:leading-relaxed text-f-primary/80">
                  Stay persistent and keep documenting every win.
                </p>
              </li>
              <li className="sm:flex-[0_0_50%] sm:max-w-[50%] md:flex-[0_0_33.333333%] md:max-w-[33.333333%] px-5 border-t border-f-primary/10 md:border-none">
                <HeadingS
                  headingText="Collaboration is essential"
                  className="font-serif"
                />
                <p className="pb-5 text-base md:text-sm font-medium leading-relaxed md:leading-relaxed text-f-primary/80">
                  It brings a holistic view to user-centered design and gives
                  sense of shared ownership.
                </p>
              </li>
              <li className="sm:flex-[0_0_50%] sm:max-w-[50%] md:flex-[0_0_33.333333%] md:max-w-[33.333333%] px-5 border-y border-f-primary/10 md:border-none">
                <HeadingS
                  headingText="Data drives decisions"
                  className="font-serif"
                />
                <p className="pb-5 text-base md:text-sm font-medium leading-relaxed md:leading-relaxed text-f-primary/80">
                  Combining research with analytics makes a strong business case
                  for UX.
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
                  Continue evolving the design system by adopting further
                  applications.
                </p>
              </li>
              <li className="sm:flex-[0_0_50%] sm:max-w-[50%] md:flex-[0_0_33.333333%] md:max-w-[33.333333%] px-5 border-t border-f-primary/10 md:border-none">
                <HeadingS
                  headingText="Keep the feedback flowing"
                  className="font-serif"
                />
                <p className="pb-5 text-base md:text-sm font-medium leading-relaxed md:leading-relaxed text-f-primary/80">
                  Stay close to the data and keep the user voice at the heart of
                  product decisions.
                </p>
              </li>
              <li className="sm:flex-[0_0_50%] sm:max-w-[50%] md:flex-[0_0_33.333333%] md:max-w-[33.333333%] px-5 border-y border-f-primary/10 md:border-none">
                <HeadingS
                  headingText="Make UX contagious"
                  className="font-serif"
                />
                <p className="pb-5 text-base md:text-sm font-medium leading-relaxed md:leading-relaxed text-f-primary/80">
                  Foster UX culture by mentoring and sharing knowledge.
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
              organization. <br />
              <br />
              If you're looking for a designer who can bridge gaps and drive
              meaningful change, let’s connect.
            </p>
          </section>
        </div>
      </div>

      <UpNext nextProject={nextProject} />
    </>
  );
};

export default HUXCaseStudy;
