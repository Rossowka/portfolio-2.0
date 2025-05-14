import {
  ArrowIcon,
  CaseStudyNav,
  CaseStudyHeader,
  CaseStudySection,
  UpNext,
  CaseStudyList,
  CaseStudyListItem,
  HeadingM,
  CaseStudyParagraph,
} from "@/components";
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
      <CaseStudyHeader currentProject={currentProject} />

      <div className="flex container">
        <CaseStudyNav navItems={navItems} />

        {/* the meat of case study goes here */}
        <div>
          {/* goals */}
          <CaseStudySection
            id={navItems[0].id}
            sectionTitle="Redesign of the platform to reflect HAWE's approach to customers"
            sectionTag="goals"
          >
            <CaseStudyParagraph>
              Committed to innovation, the company aspires to improve its
              digital experience to reflect its vision of being “a company easy
              to deal with".
            </CaseStudyParagraph>
            <CaseStudyList>
              <CaseStudyListItem
                title="Make the platform deliver seamless experience"
                text="Using the same fonts and colors across all tools helps keep
                  our brand consistent and increases customer loyalty."
              />
              <CaseStudyListItem
                title="Improve usability"
                text="Simple navigation and functionality make it easier for users
                  to stick around and keep discovering our products."
              />
              <CaseStudyListItem
                title="Attract new distributors to the platform"
                text="A well-designed platform is a powerful tool for attracting new
                  partners."
              />
            </CaseStudyList>
          </CaseStudySection>

          {/* challenges */}
          <CaseStudySection
            id={navItems[1].id}
            sectionTitle="A disjointed experience holding us back"
            sectionTag="challenges"
          >
            <CaseStudyParagraph>
              When I first joined, it felt like UX wasn’t really on anyone’s
              radar. Without research-driven strategy, decisions were often
              based on assumptions. We were losing potential deals due to poor
              UI and disjointed user experience.
            </CaseStudyParagraph>
            <CaseStudyList>
              <CaseStudyListItem
                title="Misunderstanding of UX"
                text="UX was seen as just “making things look nice”, and not a
                  strategic tool. This made it tough to gain traction in
                  leadership conversations."
                noBreak={true}
              />
              <CaseStudyListItem
                title="Patchworked UI"
                text="Departments were siloed and working with different vendors.
                  Each introducing their own UI styles."
                noBreak={true}
              />
            </CaseStudyList>
          </CaseStudySection>

          {/* approach */}
          <CaseStudySection
            id={navItems[2].id}
            sectionTitle="Begin with the user and work backwards"
            sectionTag="approach"
          >
            <HeadingM headingText="Understanding the status quo" />
            <CaseStudyParagraph>
              The first step was to build trust and understand how UX was
              perceived and practiced across the company. I conducted over 14
              stakeholder interviews to introduce myself across departments and
              get a feeling of expectations and issues HAWE was facing.
            </CaseStudyParagraph>

            <CaseStudyList title="Key insights:">
              <CaseStudyListItem
                title="Design chaos drives up development costs"
                text="Discussions with product teams revealed we lacked processes for alignment with external vendors and creating new applications."
              />
              <CaseStudyListItem
                title="Sales representatives struggle to find information"
                text="Meeting with field experts revealed a frustrating process. The portal was slow and forced users to juggle multiple browser tabs."
              />
              <CaseStudyListItem
                title="UX demands are loud and clear"
                text="Almost everyone recognized the need for better user experience and customer insights."
              />
            </CaseStudyList>

            <HeadingM headingText="First UX wins" />
            <CaseStudyParagraph>
              One of my first big initiatives was a heuristic evaluation of our
              customer portal. It revealed major usability gaps. Small, targeted
              changes made big impact. Clearer headers and consistent icons
              improved usability with little effort.
              <br />
              <br />
              As we mapped each user journey, we could streamline flows and
              reduce cognitive load. Every screen began doing more, with less
              effort.
            </CaseStudyParagraph>
          </CaseStudySection>

          {/* gaining traction */}
          <CaseStudySection
            id={navItems[3].id}
            sectionTitle="From insights to impact"
            sectionTag="gaining traction"
          >
            <CaseStudyParagraph>
              At first, my efforts hit walls. While my manager was happy, the
              ideas we discussed didn’t leave the confinement of our team. At
              least that's what I thought. Until a lucky strike happened. An
              innovation manager heard about our initiative and they wanted to
              involve me in creation of a new tool.
            </CaseStudyParagraph>

            <HeadingM headingText="Prototyping to build trust" />
            <CaseStudyParagraph>
              I translated early ideas from stakeholders into low-fidelity
              wireframes and quick prototypes. The project took off and became a
              springboard for cross-functional collaboration. <br />
              <br />
              This momentum helped me get looped into technical conversations
              and introduced me to engineers from digitalization team, who could
              help build the tool. This was a direct result of trust earned by
              solving real problems and showing how UX could unlock real value.
            </CaseStudyParagraph>

            <HeadingM headingText="Gaining allies through collaboration" />
            <CaseStudyParagraph>
              The digitalization team initially saw UX as a “nice to have,”
              especially since they worked with external agency. But once we
              started collaborating on internal tools, they began to see the
              value of fast iteration and shared standards.
              <br />
              <br />
              Through co-creation and open communication, I gained allies in my
              design system and ux maturity efforts. What started as a one-off
              prototype evolved into a strong cross-functional partnership.
            </CaseStudyParagraph>
          </CaseStudySection>

          {/* shared vision */}
          <CaseStudySection
            id={navItems[4].id}
            sectionTitle="Mediating across teams to bring them together"
            sectionTag="shared vision"
          >
            <HeadingM headingText="Spreading the UX mindset" />
            <CaseStudyParagraph>
              We shared our findings with other teams. Together, we preached
              about usability, how it supports company customer-first values,
              and educated about UX during workshops.
            </CaseStudyParagraph>

            <HeadingM headingText="Championing data-driven decisions" />
            <CaseStudyParagraph>
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
            </CaseStudyParagraph>
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
          </CaseStudySection>

          {/* measuring success */}
          <CaseStudySection
            id={navItems[5].id}
            sectionTitle="Raising the bar for UX maturity"
            sectionTag="measuring success"
          >
            <HeadingM headingText="Measuring Success" />
            <CaseStudyParagraph>
              While we had a strong base in qualitative research, we lacked
              quantitative insights. I brought in input from our digital
              marketing team and kicked off conversations around using web
              analytics to track the impact of our changes.
              <br />
              <br />
              To get started, I introduced a simple scorecard that helped us
              measure improvements during user testing and after release.
            </CaseStudyParagraph>

            <HeadingM headingText="Creating UX rituals" />
            <CaseStudyParagraph>
              We opened up a line of communication between teams. We started
              weekly UX syncs to connect the dots across teams and products.
              These small implementations created visibility and momentum, even
              when we couldn’t launch big initiatives.
            </CaseStudyParagraph>

            <HeadingM headingText="Shifting the mindset" />
            <CaseStudyParagraph>
              As we continued to show value, more teams came to us early. Design
              was evolving into a strategic function rather than just an
              afterthought. The foundation was set, not just for the current
              products, but for the company’s long-term vision.
            </CaseStudyParagraph>
          </CaseStudySection>

          {/* summary section */}
          <CaseStudySection
            id={navItems[6].id}
            sectionTitle="Looking back and in the future"
            sectionTag="results"
          >
            <CaseStudyList title="What we achieved:">
              <CaseStudyListItem
                title="UX became part of the conversation"
                text="More teams invited UX early in the process, shifting design from a visual afterthought to a strategic tool."
              />
              <CaseStudyListItem
                title="Streamlined cross-team collaboration"
                text="Shared practices, regular UX syncs, and clear documentation helped dissolve silos and align priorities."
              />
              <CaseStudyListItem
                title="Improved usability with minimal effort"
                text="Small changes, like better headers and clearer icons, reduced cognitive load and improved user flows."
              />
              <CaseStudyListItem
                title="Increased stakeholder confidence"
                text="Low-fidelity prototypes helped translate abstract goals into tangible solutions, leading to executive buy-in."
              />
              <CaseStudyListItem
                title="Set a foundation for future scale"
                text="Established processes, rituals, and reusable patterns to support long-term growth in UX maturity."
              />
            </CaseStudyList>
            <CaseStudyList title="What I learned:">
              <CaseStudyListItem
                title="Driving UX change takes some grit"
                text="Stay persistent and keep documenting every win."
              />
              <CaseStudyListItem
                title="Collaboration is essential"
                text="It brings a holistic view to user-centered design and gives
                  sense of shared ownership."
              />
              <CaseStudyListItem
                title="Data drives decisions"
                text="Combining research with analytics makes a strong business case
                  for UX."
              />
            </CaseStudyList>
            <CaseStudyList title="What’s next:">
              <CaseStudyListItem
                title="Expand the design system"
                text="Continue evolving the design system by adopting further
                  applications."
              />
              <CaseStudyListItem
                title="Keep the feedback flowing"
                text="Stay close to the data and keep the user voice at the heart of
                  product decisions."
              />
              <CaseStudyListItem
                title="Make UX contagious"
                text="Foster UX culture by mentoring and sharing knowledge."
              />
            </CaseStudyList>
          </CaseStudySection>

          <CaseStudySection
            sectionTitle="Let’s talk UX evolution"
            sectionTag="Reach out"
          >
            <CaseStudyParagraph>
              UX maturity is about more than just the design team's work. It's
              about creating a shared mindset, encouraging collaboration, and
              securing a user-centered approach throughout the entire
              organization. <br />
              <br />
              If you're looking for a designer who can bridge gaps and drive
              meaningful change, let’s connect.
            </CaseStudyParagraph>
          </CaseStudySection>
        </div>
      </div>

      <UpNext nextProject={nextProject} />
    </>
  );
};

export default HUXCaseStudy;
