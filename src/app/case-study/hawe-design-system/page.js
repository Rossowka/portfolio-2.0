import {
  CaseStudyHeader,
  CaseStudyImage,
  CaseStudyList,
  CaseStudyListItem,
  CaseStudyNav,
  CaseStudySection,
  UpNext,
  HeadingM,
} from "@/components";
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
              As our digital products evolved, cracks started to show. With a
              commitment to quality and efficiency, HAWE aimed to unify its
              digital experience and streamline processes to minimize design
              debt and development costs. I led the initiative to bring that
              vision to life.
            </p>
            <div></div>
            <CaseStudyList>
              <CaseStudyListItem
                title="Establish visual and functional consistency"
                text="Create shared UI components to unify the look, feel, and behavior across tools."
              />
              <CaseStudyListItem
                title="Streamline collaboration and development"
                text="Bridge gaps between design and dev through a shared source of truth."
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
              Every tool had its own aesthetic and logic. Without a unified
              approach, we ended up with fragmented journeys, inconsistent
              visuals, and inefficient workflows. Outsourced design and dev made
              scaling a headache.
            </p>
            <CaseStudyImage
              src="/images/hawe-design-system/cs-challenge.jpg"
              alt="Screenshots of different tools with different UI patterns"
              height={300}
            />

            <CaseStudyList title="What we were up against:">
              <CaseStudyListItem
                title="No code ownership"
                text="Most of our front-end work was outsourced, which made iterating on designs slow and clunky. We couldn’t move fast."
              />
              <CaseStudyListItem
                title="Too many cooks in the kitchen"
                text="Each tool was built by a different agency. That meant different UI patterns, no reusable components and a very patchy experience."
              />
              <CaseStudyListItem
                title="Documentation? Sort of..."
                text="We had a design manual, but it wasn’t widely used. Some teams followed it, others didn’t know it existed."
              />
              <CaseStudyListItem
                title="Design team of one"
                text="With limited resources, I juggled design, strategy, and stakeholder alignment. It pushed me to build a system all could rally around."
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
              I kicked things off with a cross-product audit. I talked to teams
              and gathered my suspects in an inventory: mismatched buttons,
              inconsistent patterns and interactions. This helped visualize just
              how fragmented our experience had become, and it gave me a clear
              place to start.
            </p>
            <CaseStudyImage
              src="/images/hawe-design-system/cs-audit.jpg"
              alt="Screenshot of messy Header components and documentation defining the component"
              height={313}
              caption="Based on the same documentation, different teams created different components. This was a great starting point to show the need for a design system."
            />

            <HeadingM headingText="Prototyping to build buy-in" />
            <p>
              Using Material UI as a base, I quickly mocked up clean, consistent
              interfaces. Stakeholders saw the value, and we shifted from
              debating theory of "nice-to-haves" to exploring solutions.
            </p>
            <CaseStudyImage
              src="/images/hawe-design-system/cs-prototyping.jpg"
              alt="Before and after interface mockup"
              height={251}
              caption="Prototyping helped to visualize the design system and its components. It was a great way to show the value of the system."
            />

            <HeadingM headingText="Starting small, scaling smart" />
            <p>
              We piloted the system on one product. I followed Atomic Design
              principles to build tokens, components, and patterns. Early dev
              feedback helped me refine things fast.
            </p>
            <CaseStudyImage
              src="/images/hawe-design-system/cs-start.jpg"
              alt="Design token definition in Figma"
              height={251}
              caption="Design tokens were the first step in creating a design system. They helped us to define the visual language of the system."
            />
            <HeadingM headingText="From one designer to a shared language" />
            <p>
              With regular critiques, open Teams threads, and async walkthroughs
              I helped the system become collaborative. By creating visibility
              early and inviting others in, we turned a design system into a
              shared language.
            </p>
            <CaseStudyImage
              src="/images/hawe-design-system/cs-walkthrough.jpg"
              alt="Loom walk-through snippet"
              height={338}
              caption="Quick Teams calls and Loom recordings were a great way to explain the design system, its components and implementations."
            />

            <HeadingM headingText="Joining forces" />
            <p>
              Initially a solo mission, I was later joined by a fellow designer.
              This collaboration sharpened decision-making, boosted component
              quality, and added momentum through regular design critiques.
            </p>
            <CaseStudyImage
              src="/images/hawe-design-system/cs-collaboration.jpg"
              alt="Screenshot of brainstorming session"
              height={322}
              caption="Brainstorming sessions with the team helped us to align on the design system requirements and its components."
            />
          </CaseStudySection>

          {/* design */}
          <CaseStudySection
            id={navItems[3].id}
            sectionTitle="Anatomy of a button"
            sectionTag="design"
          >
            <p>
              Designing components wasn’t just about looks. Dev teams needed
              clarity, and we needed consistency. To achieve that, I documented
              specs covering design, behavior, and best practices.
            </p>
            <CaseStudyImage
              src="/images/hawe-design-system/cs-component.jpg"
              alt="Screenshot of component documentation in Figma"
              height={300}
            />
            <CaseStudyList title="Each component spec included:">
              <CaseStudyListItem
                title="Design tokens"
                text="Colors, spacing, type, and other visual elements - all consistent, all reusable."
              />
              <CaseStudyListItem
                title="Interaction rules"
                text="Hover states, focus behavior, animation timing - no guesswork."
              />
              <CaseStudyListItem
                title="Guidelines and edge cases"
                text="Usage do’s and don’ts, accessibility guide, and examples."
              />
              <CaseStudyListItem
                title="Dev-ready snippets"
                text="HTML/CSS snippets to make implementation smoother."
              />
            </CaseStudyList>
          </CaseStudySection>

          {/* operations */}
          <CaseStudySection
            id={navItems[4].id}
            sectionTitle="Keeping it alive (and useful)"
            sectionTag="operations"
          >
            <p>
              To expand adoption beyond our bubble, I built playbooks and wrote
              guidelines for contribution, versioning, and ongoing feedback. Our
              system quickly matured into a team-wide asset, saving hours
              otherwise spent on repeated work.
            </p>
            <HeadingM headingText="Version control to the rescue" />
            <p>
              Accidentaly pulling an update was causing chaos in prototypes. To
              solve this, I introduced a versioning practice inspired by
              front-end workflows. Designers could now test changes safely
              before "pushing to production".
            </p>
            <CaseStudyImage
              src="/images/hawe-design-system/cs-versioning.jpg"
              alt="Screenshots of change log page"
              caption="Versioning was a great way to keep track of changes in the design system. It helped us to avoid breaking changes and to communicate updates to the team."
              height={300}
            />
            <HeadingM headingText="External critique for internal confidence" />
            <p>
              Before launch, we consulted with an external agency for a last
              review. Their fresh perspective helped sharpen accessibility and
              reinforced our vision and direction - turning a solid system into
              a robust one.
            </p>
            <CaseStudyImage
              src="/images/hawe-design-system/cs-tree.jpg"
              alt="View of the design system tree"
              height={672}
            />{" "}
          </CaseStudySection>

          {/* summary */}
          <CaseStudySection
            id={navItems[5].id}
            sectionTitle="Looking back and in the future"
            sectionTag="results"
          >
            <CaseStudyList title="What we achieved:">
              <CaseStudyListItem
                title="Design time cut by around 50%"
                text="Reusable components sped up new feature creation and design iterations."
              />
              <CaseStudyListItem
                title="Consistency across 4+ products achieved"
                text="No more guessing games for users. A single design language replaced fragmented visuals."
              />
              <CaseStudyListItem
                title="Increased developer and PM satisfaction"
                text="Less back-and-forth, clearer specs, and a shared language made handoff smoother."
              />
              <CaseStudyListItem
                title="Shared ownership unlocked"
                text="The system wasn’t mine anymore. Thanks to governance and maintenance guidelines the team was empowered to co-create."
              />
            </CaseStudyList>
            <CaseStudyList title="What I learned:">
              <CaseStudyListItem
                title="The visible system isn't the whole system"
                text="True success depends on governance, shared purpose, and evolving the system intentionally - not just creating components."
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

            <CaseStudyList title="What’s next:">
              <CaseStudyListItem
                title="Strengthen contribution models"
                text="Making it even easier for devs and designers to co-create and expand the library."
              />
              <CaseStudyListItem
                title="Introduce design system KPIs"
                text="Track and measure usage, adoption, and a feedback loop for continuous improvement."
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
              This wasn’t just a design system. It was about creating a shared
              foundation for better, faster, more delightful products. I started
              alone. By the end, we had a living system, a growing team, and a
              culture that valued UX. <br />
              <br />
              If you're tackling messy systems and want a design partner who
              brings systems thinking, momentum and clarity to cross-team
              collaboration, let’s connect.
            </p>
          </CaseStudySection>
        </div>
      </div>

      <UpNext nextProject={nextProject} />
    </>
  );
};

export default HDSCaseStudy;
