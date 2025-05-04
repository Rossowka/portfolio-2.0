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
              As our digital products evolved, cracks started to show. With a
              commitment to quality and efficiency, HAWE aimed to unify its
              digital experience and streamline processes to minimize design
              debt and development costs. I led the initiative to bring that
              vision to life.
            </p>
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
              and gathered my suspects: mismatched buttons, inconsistent
              patterns and interactions. This helped visualize just how
              fragmented our experience had become, and it gave me a clear place
              to start.
            </p>
            {/* Image suggestions: (1) Screenshot of messy pre-audit UI components (2) Figma inventory file (3) Comparison of duplicated components */}

            <HeadingM headingText="Prototyping to build buy-in" />
            <p>
              Using Material UI as a base, I quickly mocked up clean, consistent
              interfaces. Stakeholders saw the value, and we shifted from
              debating theory of "nice-to-haves" to exploring solutions.
            </p>
            {/* Image suggestions: (1) Before/after interface mockups (2) Figma prototype preview (3) Stakeholder feedback quotes overlaying prototype */}

            <HeadingM headingText="Starting small, scaling smart" />
            <p>
              We piloted the system on one product. I followed Atomic Design
              principles to build tokens, components, and patterns. Early dev
              feedback helped me refine things fast.
            </p>
            {/* Image suggestions: (1) Atomic design component structure (2) Screenshot of component use in the pilot tool (3) Design token definition examples */}

            <HeadingM headingText="From one designer to a shared language" />
            <p>
              With regular critiques, open Teams threads, and async walkthroughs
              I helped the system become collaborative. By creating visibility
              early and inviting others in, we turned a design system into a
              shared language.
            </p>
            {/* Image suggestions: (1) Slack convo with devs (2) Screenshot of design critiques (3) Loom walk-through snippet */}

            <HeadingM headingText="Joining forces" />
            <p>
              Initially a solo mission, I was later joined by a fellow designer.
              This collaboration sharpened decision-making, boosted component
              quality, and added momentum through regular design critiques.
            </p>
            {/* Image suggestions: ... */}
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
            {/* Image suggestions: (1) Figma component with annotation (2) Spec doc screenshot (3) Live implementation side-by-side with design */}
          </CaseStudySection>

          {/* operations */}
          <CaseStudySection
            id={navItems[4].id}
            sectionTitle="Building a living system"
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
          <CaseStudySection
            id={navItems[4].id}
            sectionTitle="Keeping it alive (and useful)"
            sectionTag="operations"
          >
            <p>
              To expand adoption, I built playbooks and wrote guidelines for
              contribution, versioning, and ongoing feedback. Our system quickly
              matured into a team-wide asset, saving hours otherwise spent on
              repeated work.
            </p>

            <HeadingM headingText="Version control to the rescue" />
            <p>
              Accidentaly pulling an update was causing chaos in prototypes. To
              solve this, I introduced a versioning practice inspired by
              front-end workflows. Designers could now test changes safely
              before "pushing to production".
            </p>

            <HeadingM headingText="External critique for internal confidence" />
            <p>
              A senior UX consultant reviewed our work before launch. Their
              outside eye helped sharpen accessibility and logic - turning a
              solid system into a robust one.
            </p>
            {/* Image suggestions: (1) Screenshot of changelog/versioning UI (2) Feedback doc from UX audit (3) Versioning diagram */}
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
