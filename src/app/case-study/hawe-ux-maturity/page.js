import {
  ArrowIcon,
  HeadingM,
  CaseStudyNav,
  UpNext,
  CaseStudyList,
  CaseStudyListItem,
  CaseStudyParagraph,
  CaseStudyImage,
  ProjectHeader,
} from "@/components";
import { navItems } from "@/utils/navigationHUXCaseStudy";
import { PROJECTS } from "@/utils/projects";
import Link from "next/link";
import dynamic from "next/dynamic";

const SummarySection = dynamic(() => import("@/components/CaseStudy/SummarySection"));
const ImageSection = dynamic(() => import("@/components/CaseStudy/ImageSection"));
const CaseStudySection = dynamic(() => import("@/components/CaseStudy/CaseStudySection"));

const HUXCaseStudy = async () => {
  let title = "hawe-ux-maturity";
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
          {/* context */}
          <CaseStudySection
            id={navItems[0].id}
            sectionTag={navItems[0].label}
            sectionTitle="Regainig control over the platform"
          >
            <CaseStudyParagraph>
              Hawe's Customer Portal served over 12,000 registered customers and multiple internal
              teams. It had been built incrementally. Different tools made by different agencies,
              different interpretations of the same design manual. <br />
              <br />
              The result was a platform that worked, but felt fragmented. There was no shared
              definition of what quality meant in a digital product. There was no structure to make
              any definition stick. My job, as I understood it from the start, was to help build
              that definition and make it useful.
            </CaseStudyParagraph>
            <CaseStudyList
              variant="2col"
              title="Goals for the platform:"
            >
              <CaseStudyListItem
                variant="2col"
                title="Lower entry barriers"
              >
                Unify look & feel across tools to reduce cognitive load, helping users engage
                faster, convert sooner and stick around for longer.
              </CaseStudyListItem>
              <CaseStudyListItem
                variant="2col"
                title="Improve usability"
              >
                Clear navigation and intuitive user journey encourage users to explore our products
                and quides smoothly towards requesting a quote.
              </CaseStudyListItem>
              <CaseStudyListItem
                variant="2col"
                title="Attract new distributors to the platform"
              >
                A well-designed platform is a powerful tool for attracting new partners.
              </CaseStudyListItem>
            </CaseStudyList>
          </CaseStudySection>

          {/* approach */}
          <CaseStudySection
            id={navItems[1].id}
            sectionTag={navItems[1].label}
            sectionTitle="Understand the room before you try to influence it"
          >
            <CaseStudyParagraph>
              When I first joined to help with Customer Portal, it felt like UX wasn’t really on
              anyone’s radar. It was a large, politically complex initiative that involved multiple
              teams with competing ownership. Before I could do anything useful, I needed to
              understand who held what, what had been tried before, and where the genuine openings
              were.
            </CaseStudyParagraph>
            <CaseStudyParagraph title="14 stakeholder interviews">
              I introduced myself across departments as a way of establishing my presence in the
              organization. I came with questions about what problems people had quietly given up on
              solving. The goal was to build a map of problems, priorities, and relationships to
              figure out a path forward. <br />
              <br />
              My research showed that design chaos was visibly driving up development costs. Sales
              reps were frustrated by a portal that forced them to juggle multiple tabs. Almost
              everyone recognized the need for better UX. But nobody had a clear owner for it.
            </CaseStudyParagraph>
            <CaseStudyParagraph title="Low hanging fruits">
              The company wasn't ready for a large overhaul redesign. To find my footing, I ran a
              heuristic evaluation of the portal and identified quick wins. Shipping these changes
              should be fast but visible enough to demonstrate what design could do. <br />
              <br />
              Clearer navigation headers, consistent iconography, streamlined flows. Not
              transformative. But they improved product in noticeable ways and gave me something to
              point to when making the case for a more systematic approach.
            </CaseStudyParagraph>
          </CaseStudySection>

          {/* momentum */}
          <CaseStudySection
            id={navItems[2].id}
            sectionTag={navItems[2].label}
            sectionTitle="An introduction that changed my position"
          >
            <CaseStudyParagraph>
              Several months in, advocating for consistency, a team I had no previous contact with
              reached out to me directly. An innovation manager had heard about my work and wanted
              to involve me in shaping and validating a new product idea.
              <br />
              <br />
              Working across two teams, Customer Centricity and Product Tools, I designed and
              launched Hawe's first digital cartridge selection tool. Leading this product design
              was where I learned the most — about product strategy, technical constraints, and what
              it actually means to connect a design decision to a business result.
            </CaseStudyParagraph>
            <Link
              href="/case-study/hawe-configurator"
              className="flex group gap-1 py-4 font-medium text-reddishBrown mt-1"
            >
              See how my prototype helped the sales team aquire a major client
              <div className="min-w-fit content-center">
                <ArrowIcon
                  className="transform transition-all duration-300 ease-in-out
                -rotate-45 md:group-hover:rotate-0"
                />
              </div>
            </Link>
          </CaseStudySection>

          {/* structure */}
          <CaseStudySection
            id={navItems[3].id}
            sectionTag={navItems[3].label}
            sectionTitle="Turning informal practice into something durable"
          >
            <CaseStudyParagraph>
              My main fear was that what I worked on in Customer Centricity team would never leave
              the confinement of that team. Being invited to work with another team opened the doors
              for me to spread our work across the company.
            </CaseStudyParagraph>
            <CaseStudyParagraph title="Weekly UX syncs">
              Working across teams, on multiple products at once created a lot of friction. We
              needed a space to discuss and share our discoveries across team boundaries. Together
              with the Product Tools manager, we shifted our weekly status updates into ux syncs
              that anyone could join.
              <br />
              <br />
              Within first month, these meetings had produced their first concrete output. A
              customer feedback survey was scoped and initiated, aimed at gathering input from
              external users we'd had no structured way to reach before.
            </CaseStudyParagraph>

            <CaseStudyParagraph title="A lightweight usability scorecard">
              Together with my development colleague, I introduced a simple rubric for tracking
              usability improvements during testing. A small number of signals tracked consistently:
              reduction in known issues, qualitative feedback on improved flows, task completion
              changes. It stayed within our team used as a design tool.
            </CaseStudyParagraph>
            <CaseStudyParagraph title="The design system as connective tissue">
              Running in parallel to all of this was the design system. It was a component library
              and governance model that eventually covered 6+ products, including tools built by
              engineers outside the design team. It gave other people a way to participate in design
              consistency without routing everything through me.
            </CaseStudyParagraph>
            <Link
              href="/case-study/hawe-design-system"
              className="flex group gap-1 py-4 font-medium text-reddishBrown mt-1"
            >
              See how I unified the experience across the customer platform
              <div className="min-w-fit content-center">
                <ArrowIcon
                  className="transform transition-all duration-300 ease-in-out
                -rotate-45 md:group-hover:rotate-0"
                />
              </div>
            </Link>
          </CaseStudySection>

          {/* results */}
          <CaseStudySection
            id={navItems[4].id}
            sectionTag={navItems[4].label}
            sectionTitle="What actually changed"
          >
            <CaseStudyParagraph>
              The most meaningful outcomes here are behavioral ones. I am incredibly proud that my
              work influenced where design sat in the process of making product decisions.
            </CaseStudyParagraph>
            <CaseStudyList variant="1col">
              <CaseStudyListItem
                variant="1col"
                title="Design entered conversation earlier"
              >
                Previously, design was outsourced to engineers building the application. Now, teams
                started involving it at the beginning to validate decisions.
              </CaseStudyListItem>
              <CaseStudyListItem
                variant="1col"
                title="The Cartridge Tool proved internally that design has value"
              >
                Business value of reduced development costs, saved time on revisiting decisions,
                anticipating and solving problems before they come up in development.
              </CaseStudyListItem>
              <CaseStudyListItem
                variant="1col"
                title="A standing cross-team ritual"
              >
                Weekly syncs I suggested and facilitated became something teams appreciated. By the
                time I left, it was running without me. The customer feedback survey it seeded was
                already in scope.
              </CaseStudyListItem>
              <CaseStudyListItem
                variant="1col"
                title="Design system adoption reached 6+ products"
              >
                Including engineers outside the design team using it independently. Adoption was
                gradual — but the infrastructure was there to grow, and the dependency on me to
                enforce consistency had disappeared.
              </CaseStudyListItem>
              <CaseStudyListItem
                variant="1col"
                title="Stakeholder confidence shifted visibly"
              >
                Mockups and prototypes became the expected starting point for new feature
                conversations. The external dev team reported that design specs were saving them
                significant time during implementation by reducing the back-and-forth.
              </CaseStudyListItem>
            </CaseStudyList>
          </CaseStudySection>

          {/* what I learned */}
          <CaseStudySection
            id={navItems[5].id}
            sectionTag={navItems[5].label}
            sectionTitle="What I carried out of this experience"
          >
            <CaseStudyList variant="2col">
              <CaseStudyListItem
                variant="2col"
                title="Reading organization is a design skill"
              >
                Understanding who owns what, where decisions actually get made, and what problems
                people have quietly given up on is golden knowledge. It's essential information for
                doing design work that lands.
              </CaseStudyListItem>
              <CaseStudyListItem
                variant="2col"
                title="Trade-off conversations are where influence lives"
              >
                The most useful moments weren't the design reviews. They were the conversations
                where a scope decision was being made. Being useful in these conversations was the
                work I'm most proud of from this period.
              </CaseStudyListItem>
              <CaseStudyListItem
                variant="2col"
                title="Change that lasts needs structure and alignment"
              >
                Energy and relationships can move things forward, but they don't compound without
                structure. The syncs, the scorecard, the design system — each was an attempt to make
                the work useful for everyone.
              </CaseStudyListItem>
              <CaseStudyListItem
                variant="2col"
                title="Measure earlier, even informally"
              >
                We had no baseline for most of what we changed. Starting measurement conversations
                in discovery would have made it significantly easier to demonstrate progress in
                terms stakeholders could act on.
              </CaseStudyListItem>
              <CaseStudyListItem
                variant="2col"
                title="The product layer was what I wanted to grow into"
              >
                The work I found most energizing in this role was sitting close to product decisions
                — advising on scope, shaping trade-offs, understanding the business logic behind a
                brief. I followed that pull. I completed PSPO and PSM certifications. Not to become
                a Product Owner, but to understand that layer of thinking and bring it into how I
                work as a designer.
              </CaseStudyListItem>
            </CaseStudyList>
          </CaseStudySection>

          <CaseStudySection
            sectionTitle="Let’s talk UX evolution"
            sectionTag="Reach out"
          >
            <CaseStudyParagraph>
              This role gave me a clear picture of where I want to grow: closer to the product
              strategy layer, in an environment where design already has credibility and I can focus
              on using it well rather than establishing it from scratch. <br />
              <br />
              I'm at my best when I'm connecting user insight to product decisions — sitting close
              enough to strategy to influence scope and direction, while staying grounded in the
              craft that makes those decisions real.
              <br />
              <br /> If you're building something where design thinking and product strategy need to
              work hand in hand, I'd like to hear about it.
            </CaseStudyParagraph>
          </CaseStudySection>
        </article>
      </div>

      <UpNext nextProject={nextProject} />
    </>
  );
};

export default HUXCaseStudy;
