import {
  CaseStudyHeader,
  CaseStudyList,
  CaseStudyListItem,
  CaseStudyNav,
  CaseStudySection,
} from "@/components";
import { UpNext } from "@/components/Snapshot";
import { HeadingM } from "@/components/Text";
import { navItems } from "@/utils/navigationHDSCaseStudy";
import { PROJECTS } from "@/utils/projects";

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
      <CaseStudyHeader currentProject={currentProject} />

      <div className="flex container">
        <CaseStudyNav navItems={navItems} />

        {/* the meat of case study goes here */}
        <div>
          {/* goals */}
          <CaseStudySection
            id={navItems[0].id}
            sectionTitle="Achieve consistency and clarity across teams"
            sectionTag="goals"
          >
            <p>
              With a commitment to quality and efficiency, HAWE aspires to unify
              its digital experience and streamline the design process to
              minimize development costs. I led the efforts to bring that vision
              to life.
            </p>
            <CaseStudyList>
              <CaseStudyListItem
                title="Establish visual and functional consistency"
                text="Using the same component look and behavior leads to cohesive
                  user experience and brand identity across platforms."
              />
              <CaseStudyListItem
                title="Improve efficiency and collaboration"
                text="Creating a shared language between design and development
                  teams helps us work together more effectively."
              />
            </CaseStudyList>
          </CaseStudySection>

          {/* challenges */}
          <CaseStudySection
            id={navItems[1].id}
            sectionTitle="Scaling a platform without systems in place"
            sectionTag="challenges"
          >
            <p>
              As our customer portal expanded rapidly, keeping digital
              experiences consistent across the platform became a real
              challenge.
              <br></br>
              <br></br>
              What was the biggest obstacle? The voice of our digital presence
              didn't match the trust and customer-first vibe we wanted to give
              off. The tools were raw with unclear interfaces and felt
              impersonal, which in the end was undermining our credibility.
            </p>
            <CaseStudyList title="Where we struggled:">
              <CaseStudyListItem
                title="Lack of code ownership"
                text="We relied on external contractors for majority of our code, limiting our ability to implement design changes independently."
              />
              <CaseStudyListItem
                title="Too many cooks"
                text="Each tool was built and managed by different contracted agencies, with different tech-stacks. Result was a bumpy experience and coordination issues."
              />
              <CaseStudyListItem
                title="Poor documentation and onboarding"
                text="Even though we had a design manual not all teams were aware of it. Some applications ignored the design manual entirely."
              />
              <CaseStudyListItem
                title="Design team of one"
                text="With limited resources, I had to wear many hats. Prioritizing time was essential and focusing on the most impactful steps was key to success."
              />
            </CaseStudyList>
          </CaseStudySection>

          {/* approach */}
          <CaseStudySection
            id={navItems[2].id}
            sectionTitle="One system to bring them together"
            sectionTag="approach"
          >
            <p>
              In response to the challenges we faced, I took a lead on creating
              the design system. Since I was working alone, I started small. I
              gathered up feedback from the product teams and conducted a
              lightweight UX audit of the existing tools.
            </p>
            <HeadingM headingText="Prototyping to show impact" />
            <p>
              Within days, I mocked up a set of redesigned interfaces, taking
              Material UI library as a base. Showing our tools in a consistent
              and visually unified version helped me get engagement from the
              stakeholders.
            </p>
            <HeadingM headingText="Start small with intent to scale gradually" />
            <p>
              We picked one product to pilot the new design system. Armed with
              Atomic Design principles and a mindset for scalable, cross-product
              impact, I began building our design system library.
            </p>
          </CaseStudySection>

          {/* research */}
          <CaseStudySection
            id={navItems[3].id}
            sectionTitle="Capturing the current state"
            sectionTag="research"
          >
            <p>
              To build a strong foundation, I started by cataloguing existing UI
              components across our products. Buttons, input fields, modals,
              icons - you name it. This inventory in Figma became a visual map
              of inconsistencies and gave us a clear prioritization path for
              standarizing components.
            </p>
            <HeadingM headingText="Joining forces" />
            <p>
              At first, it was just me. Then a fellow designer/researcher joined
              the mission. Our dynamic brought fresh perspectives. I got to
              teach Figma, and share system thinking. We held regular design
              critiques, improving components and sharpening decisions together.
            </p>
          </CaseStudySection>

          {/* design */}
          <CaseStudySection
            id={navItems[4].id}
            sectionTitle="Anatomy of a button"
            sectionTag="design"
          >
            <p>
              Designing components wasn’t just about how they looked. It was
              about how they worked. Our external development teams needed
              clarity, and all we wanted was consistency. To achieve that, I
              created specs that blended design, behavior, and rules, accessible
              to all teams, internal or external.
            </p>
            <CaseStudyList title="Every component spec I created documented:">
              <CaseStudyListItem
                title="Visual design"
                text="Design tokens for colors, shadows, responsive typography and spacing, and other visual elements."
              />
              <CaseStudyListItem
                title="Interaction and animation"
                text="How the user can interact with the component and what happens, including rules on animation."
              />
              <CaseStudyListItem
                title="Usage guidelines"
                text="Best practices for using the component variants in different contexts, including accessibility and edge cases."
              />
              <CaseStudyListItem
                title="Code snippets"
                text="Providing developers with the code they need to implement the component."
              />
            </CaseStudyList>
          </CaseStudySection>

          {/* operations */}
          <CaseStudySection
            id={navItems[5].id}
            sectionTitle="Making the system work for us"
            sectionTag="operations"
          >
            <p>
              To grow adoption beyond our bubble, I hosted walkthroughs in team
              meetings, wrote clear contribution guidelines, and created
              feedback loops for continuous improvement. Soon, our fledgling
              design system became a shared language used by multiple teams, and
              saving hours of duplicated work.
            </p>
            <HeadingM headingText="Introducing version control" />
            <p>
              Once we started using the design system on different projects,
              updating the component library became a struggle. Accidentaly
              pulling an update to the library would affect our prototypes. To
              solve this, I followed version control practices I know from
              frontend development and introduced it in our system.
            </p>
            <HeadingM headingText="Ensuring our design system is solid" />
            <p>
              Before finalizing the system, I consulted a senior designer from
              an external UX agency. Their fresh perspective helped surface
              small improvements around accessibility and edge cases, ensuring
              our system was not just functional, but future-ready.
            </p>
          </CaseStudySection>

          {/* summary */}
          <CaseStudySection
            id={navItems[6].id}
            sectionTitle="Looking back and in the future"
            sectionTag="summary"
          >
            <CaseStudyList title="Key learnings:">
              <CaseStudyListItem
                title="The visible system isn't the whole system"
                text="True success depends on governance, shared purpose, and evolving the system intentionally—not just creating components."
              />
              <CaseStudyListItem
                title="Shared vision unlocks real adoption"
                text="Aligning design and engineering teams around the 'why' behind the system leads to stronger buy-in and lasting impact."
              />
              <CaseStudyListItem
                title="Governance and critique fuel growth"
                text="Establishing a clear review process and philosophy of critique keeps the system healthy and adaptable over time."
              />
            </CaseStudyList>

            <CaseStudyList title="Future objectives:">
              <CaseStudyListItem
                title="Strengthen contribution processes"
                text="Encourage more teams to engage in co-creation by reinforcing clear guidelines and governance structures."
              />
              <CaseStudyListItem
                title="Build a living system, not a frozen one"
                text="Continue evolving the design system based on prioritized needs, team feedback, and user insights."
              />
            </CaseStudyList>
          </CaseStudySection>

          <CaseStudySection
            sectionTitle="Let's build something together"
            sectionTag="Reach out"
          >
            <p>
              This project was more than building a design system. It was about
              creating a shared foundation for better, faster, more delightful
              products. I started alone. But by the end, we had a living system,
              a growing team, and a culture that valued UX. <br />
              <br />
              If you're looking for a designer who can think in systems and
              bring clarity to cross-team collaboration, let’s connect.
            </p>
          </CaseStudySection>
        </div>
      </div>

      <UpNext nextProject={nextProject} />
    </>
  );
};

export default HDSCaseStudy;
