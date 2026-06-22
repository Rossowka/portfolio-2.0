import {
  CaseStudyNav,
  UpNext,
  CaseStudyList,
  CaseStudyListItem,
  CaseStudyParagraph,
  CaseStudyImage,
  ProjectHeader,
} from "@/components";
import { navItems } from "@/utils/navigationHDSCaseStudy";
import { PROJECTS } from "@/utils/projects";
import dynamic from "next/dynamic";

const SummarySection = dynamic(() => import("@/components/CaseStudy/SummarySection"));
const ImageSection = dynamic(() => import("@/components/CaseStudy/ImageSection"));
const CaseStudySection = dynamic(() => import("@/components/CaseStudy/CaseStudySection"));

const HDSCaseStudy = async () => {
  let title = "hawe-design-system";
  let featuredProjects = PROJECTS.filter((project) => project.caseStudy === true);
  let index = featuredProjects.findIndex((item) => item.id === title);
  let currentProject = featuredProjects[index];
  let nextProject =
    index === featuredProjects.length - 1 ? featuredProjects[0] : featuredProjects[index + 1];

  return (
    <>
      <ProjectHeader currentProject={currentProject} />
      <SummarySection currentProject={currentProject} />

      {currentProject.imageShowcase.length > 0 && <ImageSection currentProject={currentProject} />}

      <div className="flex max-w-7xl mx-auto px-6 md:px-0">
        <CaseStudyNav navItems={navItems} />

        {/* the meat of case study goes here */}
        <article>
          {/* goals */}
          <CaseStudySection
            id={navItems[0].id}
            sectionTag={navItems[0].label}
            sectionTitle="Achieve consistency and clarity across teams"
          >
            <CaseStudyParagraph>
              With a commitment to quality and efficiency, HAWE aimed for a comprehensive redesign
              to unify its digital experience. The goal was to align individual teams — and the
              tools they were building — under one visual language.
            </CaseStudyParagraph>
            <CaseStudyList variant="1col">
              <CaseStudyListItem
                variant="1col"
                title="Establish visual and functional consistency"
              >
                Create shared UI components to unify the look, feel, and behavior across tools. The
                design manual was already there — we just needed to lower the barrier to using it
                the right way.
              </CaseStudyListItem>
              <CaseStudyListItem
                variant="1col"
                title="Improve collaboration and development time"
              >
                Bridge the gap between idea and development through a shared language. Until then,
                developers were largely responsible for designing the tools themselves — a missing
                link that led to inconsistencies across the platform.
              </CaseStudyListItem>
            </CaseStudyList>
          </CaseStudySection>

          {/* challenges */}
          <CaseStudySection
            id={navItems[1].id}
            sectionTag={navItems[1].label}
            sectionTitle="Scaling a platform without systems in place"
          >
            <CaseStudyParagraph>
              The Customer Portal was a single entry point that gave both internal teams and
              external customers access to a range of tools. Open two tools side by side and they
              looked like they came from different companies. <br />
              <br />
              Different button styles, different navigation patterns, different typographic choices
              — all within a portal that was supposed to carry a single corporate identity. There
              was no shared logic binding them together, and no process for ensuring new development
              would be any different.
            </CaseStudyParagraph>
            <CaseStudyImage
              src="/images/hawe-design-system/cs-challenge.webp"
              alt="Screenshots of different tools with different UI patterns"
              aspect="2.35/1"
            />

            <CaseStudyList
              variant="2col"
              title="What I was up against:"
            >
              <CaseStudyListItem
                variant="2col"
                title="Platform that felt fractured"
              >
                Each of the tools had been built by a different team. That being either external
                agency or individual internal teams.
              </CaseStudyListItem>

              <CaseStudyListItem
                variant="2col"
                title="Outsourced ownership"
              >
                We didn't own the code of our applications. It became a serious obstacle when we
                wanted to integrate new tools.
              </CaseStudyListItem>

              <CaseStudyListItem
                variant="2col"
                title="Documentation? Sort of..."
              >
                We had a design manual, but it wasn’t widely used. Teams that were using it all had
                their own interpretation of what 'following the design manual' meant.
              </CaseStudyListItem>
              <CaseStudyListItem
                variant="2col"
                title="Slow development cycles"
              >
                Most of our front-end work was outsourced, which made iterating on designs slow.
                Without visual cues, communicating with external teams was inaccurate.
              </CaseStudyListItem>
              <CaseStudyListItem
                variant="2col"
                title="Design team of one"
              >
                With limited resources, I juggled design, strategy, and stakeholder alignment. It
                pushed me to build a system all could benefit from.
              </CaseStudyListItem>
            </CaseStudyList>
          </CaseStudySection>

          {/* approach */}
          <CaseStudySection
            id={navItems[2].id}
            sectionTag={navItems[2].label}
            sectionTitle="One system to bring them together"
          >
            <CaseStudyParagraph>
              The design manual and defined corporate identity gave me a starting point. I wanted to
              make the defined visual language, typography and color scheme visible to everyone in
              the organisation and as easy to use as possible.
            </CaseStudyParagraph>
            <CaseStudyImage
              src="/images/hawe-design-system/cs-audit.webp"
              alt="Screenshot of messy Header components and documentation defining the component"
            />

            <CaseStudyParagraph title="Make fragmentation visible">
              I kicked things off with an audit of every application accessible through the portal.
              I catalogued components, patterns, and interactions across all of them.
              <br />
              <br /> The audit served two purposes. It gave me a clear picture of the scope of work.
              And it gave stakeholders a visual. Showing the same header rendered six different ways
              is more persuasive than describing it.
            </CaseStudyParagraph>

            <CaseStudyParagraph title="Prototyping to build buy-in">
              I proposed Material UI as the base component library. The reasoning was practical: MUI
              gave us a well-documented, accessible, production-ready foundation that the
              development team could work with directly. <br />
              <br />
              Using Material UI as a base, I quickly mocked up clean, consistent interfaces.
              Stakeholders saw the value, and we shifted from debating theory of "nice-to-haves" to
              exploring solutions.
            </CaseStudyParagraph>
            <CaseStudyImage
              src="/images/hawe-design-system/cs-prototyping.webp"
              alt="Before and after interface mockup"
              aspect="2.35/1"
              caption="Prototyping helped to visualize the design system and its components. It was a great way to show the value of the system."
            />

            <CaseStudyParagraph title="Starting small, scaling smart">
              We piloted the system on one product. I followed Atomic Design principles to build
              tokens, components, and patterns that translated directly into code. Early dev
              feedback helped me refine things fast.
            </CaseStudyParagraph>
            <CaseStudyImage
              src="/images/hawe-design-system/cs-start.webp"
              alt="Design token definition in Figma"
              aspect="2.35/1"
              caption="Design tokens were the first step in creating a design system. They helped us to define the visual language of the system."
            />
            <CaseStudyParagraph title="From one designer to a shared language">
              Holding the line meant showing up in small moments. Why this component. Why this
              token, not a custom one. I invited teams in early and made the system theirs. The
              argument was never aesthetic. It was about the cost of inconsistency.
            </CaseStudyParagraph>
            <CaseStudyImage
              src="/images/hawe-design-system/cs-walkthrough.webp"
              alt="Loom walk-through snippet"
            />
          </CaseStudySection>

          {/* design */}
          <CaseStudySection
            id={navItems[3].id}
            sectionTag={navItems[3].label}
            sectionTitle="Anatomy of a button"
          >
            <CaseStudyParagraph>
              Designing components wasn’t just about looks. Dev teams needed clarity, and we needed
              consistency. To achieve that, I documented specs covering design, behavior, and best
              practices.
            </CaseStudyParagraph>
            <CaseStudyImage
              src="/images/hawe-design-system/cs-component.webp"
              alt="Screenshot of component documentation in Figma"
              aspect="2.35/1"
            />
            <CaseStudyList
              variant="2col"
              title="Each component spec included:"
            >
              <CaseStudyListItem
                variant="2col"
                title="Design tokens"
              >
                Colors, spacing, type, and other visual elements - all consistent, all reusable.
              </CaseStudyListItem>
              <CaseStudyListItem
                variant="2col"
                title="Interaction rules"
              >
                Hover states, focus behavior, animation timing - no guesswork.
              </CaseStudyListItem>
              <CaseStudyListItem
                variant="2col"
                title="Guidelines and edge cases"
              >
                Usage do’s and don’ts, accessibility guide, and examples.
              </CaseStudyListItem>
              <CaseStudyListItem
                variant="2col"
                title="Dev-ready snippets"
              >
                HTML/CSS snippets to make implementation smoother.
              </CaseStudyListItem>
            </CaseStudyList>
          </CaseStudySection>

          {/* operations */}
          <CaseStudySection
            id={navItems[4].id}
            sectionTag={navItems[4].label}
            sectionTitle="Keeping it alive (and useful)"
          >
            <CaseStudyParagraph>
              A design system is only as good as the process around it. Getting the components right
              was the easier part. Making sure the system stayed coherent as more people used it
              required structures that didn't exist yet.
            </CaseStudyParagraph>
            <CaseStudyParagraph title="Version control to the rescue">
              Accidentally pulling an update was causing chaos in working files. To solve this, I
              introduced a versioning practice inspired by front-end workflows. All changes had to
              be reviewed against other open contexts they were used in. Designers could now test
              changes safely before "pushing to production".
            </CaseStudyParagraph>
            <CaseStudyImage
              src="/images/hawe-design-system/cs-versioning.webp"
              alt="Screenshots of change log page"
              caption="Versioning was a great way to keep track of changes in the design system. It helped us to avoid breaking changes and to communicate updates to the team."
              aspect="2.35/1"
            />
            <CaseStudyParagraph title="Component documentation">
              The goal was to make implementation unambiguous — to reduce the back-and-forth between
              design and development that had previously been absorbing significant time on both
              sides. <br />
              <br />
              The external development team we worked with confirmed that the documentation quality
              was making a measurable difference. Less time spent clarifying intent, faster
              iteration cycles, fewer revisions after implementation.
            </CaseStudyParagraph>
            <CaseStudyParagraph title="External review before broader rollout">
              Before extending the system more widely, a senior stakeholder commissioned an external
              UX agency to review the work. Their assessment sharpened the accessibility approach
              and validated the overall direction. This independent perspective carried weight that
              internal advocacy couldn't.
            </CaseStudyParagraph>
            <CaseStudyImage
              src="/images/hawe-design-system/cs-tree.webp"
              alt="View of the design system tree"
            />{" "}
          </CaseStudySection>

          {/* results */}
          <CaseStudySection
            id={navItems[5].id}
            sectionTag={navItems[5].label}
            sectionTitle="The measure that mattered most"
          >
            <CaseStudyParagraph>
              A beautifully structured library that nobody uses is just documentation. What I cared
              about most was whether the system became part of how people worked. Ideally, something
              they built from by default.
            </CaseStudyParagraph>
            <CaseStudyList
              variant="1col"
              title="What we achieved:"
            >
              <CaseStudyListItem
                variant="1col"
                title="Consistency across 6+ products achieved"
              >
                The system extended across the major customer-facing applications accessible through
                the Customer Portal
              </CaseStudyListItem>
              <CaseStudyListItem
                variant="1col"
                title="Internal adoption"
              >
                At least 2 other teams, outside the design team, started using the system. Slow, but
                important adoption and step forward to maintaining future consistency.
              </CaseStudyListItem>
              <CaseStudyListItem
                variant="1col"
                title="Design could ship independently"
              >
                Other teams could now pick up the system and run with it. New applications and
                components shipped in parallel, without bottlenecks. Shared language did the
                coordinating.
              </CaseStudyListItem>
              <CaseStudyListItem
                variant="1col"
                title="Delivery time halved"
              >
                The first application redesign took us 8 months. The second took 4. The system
                wasn't the only factor. However, it was the most significant change between the two.
                Reusable components, clear specs, and fewer decisions to revisit at every screen.
              </CaseStudyListItem>
              <CaseStudyListItem
                variant="1col"
                title="Dev team time savings confirmed externally"
              >
                The contracted development team working on implementation reported that the spec
                quality was saving them significant time. Less back-and-forth, faster iteration,
                fewer revisions. That feedback came unsolicited — which made it more credible than
                any internal metric we could have claimed.
              </CaseStudyListItem>
            </CaseStudyList>

            {/* what I learned */}
            <CaseStudySection
              id={navItems[6].id}
              sectionTag={navItems[6].label}
              sectionTitle="Things I will look out for next time"
            >
              <CaseStudyList variant="1col">
                <CaseStudyListItem
                  variant="1col"
                  title="Proactive governance"
                >
                  The versioning practice and contribution guidelines came in response to problems
                  that had already appeared. Both would have been more effective introduced before
                  the system grew
                </CaseStudyListItem>
                <CaseStudyListItem
                  variant="1col"
                  title="Make the 'why' explicit"
                >
                  I knew the reasoning behind structural decisions in the system. Not all of that
                  reasoning was documented in a way others could find and use. When someone pushed
                  back on a decision, I could explain it — but they had to ask first. A system with
                  its rationale embedded in the documentation is more defensible than one where the
                  logic lives only in its creator's head.
                </CaseStudyListItem>
                <CaseStudyListItem
                  variant="1col"
                  title="Track adoption from day one"
                >
                  We had no formal way of measuring how the system was being used until it was
                  already in wide use. Earlier adoption tracking — even lightweight, even just
                  noting which teams were using which components — would have helped prioritize what
                  to build next
                </CaseStudyListItem>
              </CaseStudyList>
            </CaseStudySection>
          </CaseStudySection>

          <CaseStudySection
            sectionTitle="Let's build something together"
            sectionTag="Reach out"
          >
            <CaseStudyParagraph>
              Creating a design system is creating a shared language for better collaboration and
              more delightful products. <br />
              <br />
              If you're tackling messy systems and want a design partner who brings systems thinking
              and clarity to cross-team collaboration, let’s connect.
            </CaseStudyParagraph>
          </CaseStudySection>
        </article>
      </div>

      <UpNext nextProject={nextProject} />
    </>
  );
};

export default HDSCaseStudy;
