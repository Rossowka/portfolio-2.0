import {
  ArrowIcon,
  CaseStudyNav,
  UpNext,
  CaseStudyList,
  CaseStudyListItem,
  HeadingM,
  CaseStudyParagraph,
  CaseStudyImage,
} from "@/components";
import { ImageSection, ProjectHeader } from "@/components/Snapshot";
import { navItems } from "@/utils/navigationHCSCaseStudy";
import { PROJECTS } from "@/utils/projects";
import dynamic from "next/dynamic";

const MainImageSection = dynamic(() => import("@/components/Snapshot/MainImageSection"));
const SummarySection = dynamic(() => import("@/components/Snapshot/SummarySection"));
const CaseStudySection = dynamic(() => import("@/components/CaseStudy/CaseStudySection"));

const HCSCaseStudy = async () => {
  let title = "hawe-configurator";
  let featuredProjects = PROJECTS.filter((project) => project.caseStudy === true);
  let index = featuredProjects.findIndex((item) => item.id === title);
  let currentProject = featuredProjects[index];
  let nextProject =
    index === featuredProjects.length - 1 ? featuredProjects[0] : featuredProjects[index + 1];

  return (
    <>
      <section className="pt-16 md:pt-32 mb-16 relative">
        <ProjectHeader currentProject={currentProject} />
      </section>
      <MainImageSection currentProject={currentProject} />
      <SummarySection currentProject={currentProject} />

      {currentProject.imageShowcase.length > 0 ? (
        <ImageSection currentProject={currentProject} />
      ) : (
        <div className="max-w-[77.5rem] mx-auto bg-f-inverse h-[1px] mb-10"></div>
      )}

      <div className="flex max-w-[77.5rem] mx-auto px-4 lg:px-8">
        <CaseStudyNav navItems={navItems} />

        {/* the meat of case study goes here */}
        <div>
          {/* goals */}
          <CaseStudySection
            id={navItems[0].id}
            sectionTitle="Building a digital tool for Million-configurations complexity"
            sectionTag="goals"
          >
            <CaseStudyParagraph>
              Our physical products offered hundreds of variations leading to millions of possible
              configurations. While competitors provided advanced digital configuration tools, we
              were still relying on person-to-person interactions.
            </CaseStudyParagraph>
            <CaseStudyList>
              <CaseStudyListItem
                title="Positioning as a cartridge solutions provider"
                text="Creating a digital presence that showcased our cartridge expertise and closed the gap with competitors."
              />
              <CaseStudyListItem
                title="Making cartridge solution configuration effortless"
                text="Empowering customers to seek out the perfect solution, reducing reliance on sales support and increasing order accuracy."
              />
              <CaseStudyListItem
                title="Aquire a major cartridge manufacturer partnership"
                text="A well-designed platform is a powerful tool for attracting new partners."
              />
              <CaseStudyListItem
                title="Streamlining manifold design process"
                text="Saving our engineers precious time on repetitive calculations and tasks."
              />
            </CaseStudyList>
          </CaseStudySection>

          {/* challenges */}
          <CaseStudySection
            id={navItems[1].id}
            sectionTitle="Racing against exhibition deadline"
            sectionTag="challenges"
          >
            <CaseStudyParagraph>
              Six months to showtime. This was our completely unrealistic, non-negotiable deadline
              for the hydraulics exhibition where we planned our grand reveal. After spending 2
              months on research, initial designs and iterations, development pushed back. <br />
              <br />
              Even though we collaboratively stripped down functionality to bare minimum, building a
              full manifold configurator in that timeframe wasn't feasible.
            </CaseStudyParagraph>

            <CaseStudyList title="Critical constraints we faced:">
              <CaseStudyListItem
                title="Tech trade-off"
                text="We had to integrate the new functionality into the existing Product Finder, limiting what we could build."
                noBreak={true}
              />
              <CaseStudyListItem
                title="Limited user access"
                text="I couldn’t interview external customers due to B2B sensitivity, so I had to rely solely on internal engineers."
                noBreak={true}
              />
              <CaseStudyListItem
                title="Data blindness"
                text="We had no analytics in place, so there was no baseline to measure against."
                noBreak={true}
              />
              <CaseStudyListItem
                title="Market mismatch"
                text="Releasing in the U.S. market first created friction with pricing systems and user permissions that were designed for Germany."
                noBreak={true}
              />
            </CaseStudyList>
          </CaseStudySection>

          {/* approach */}
          <CaseStudySection
            id={navItems[2].id}
            sectionTitle="Focus on driving value and alignment"
            sectionTag="approach"
          >
            <CaseStudyParagraph>
              Working between two teams, Customer Experience and Digital Tools, I wore multiple hats
              as researcher, designer, and actively participated in product strategy. I owned the
              entire design process from initial stakeholder interviews through post-launch
              optimization planning. My approach centered on rapid collaboration cycles.
            </CaseStudyParagraph>

            <CaseStudyList title="Rapid collaboration cycles:">
              <CaseStudyListItem
                title="Daily prototyping sessions"
                text="Iterating on newly discovered information with the product manager and innovation team."
              />
              <CaseStudyListItem
                title="Bi-weekly stakeholder reviews"
                text="To validate direction and gather feedback."
              />
              <CaseStudyListItem
                title="Ad-hoc cross-team alignment"
                text="Internally, on our design system with Webshop team to ensure design consistency as well as externally, with our development team."
              />
            </CaseStudyList>
          </CaseStudySection>

          {/* key decisions */}
          <CaseStudySection
            id={navItems[3].id}
            sectionTitle="Workshopping our way to an MVP"
            sectionTag="key decisions"
          >
            <HeadingM headingText="Starting with user workflows" />
            <CaseStudyParagraph>
              I began by conducting interviews with our internal specialists to map out how
              engineers design manifolds. Their main painpoints were repetitive tasks and manual
              calculations eating their time. I drafted a flow that would digitilize the process and
              built a simple prototype to present to our SMEs and check if we found a common
              understanding.
            </CaseStudyParagraph>
            {/* add an image of the mapped out process */}

            <HeadingM headingText="Pivoting to reality" />
            <CaseStudyParagraph>
              After multiple rounds of iterations we landed on a product that stakeholders were
              happy about. I presented the prototype to our external development team and that's
              when we hit a wall. We had only 4 months to develop the app, and the development
              flagged it as too big of a scope to be able to make it in time.
              <br />
              <br />
              Due to limited resources, product team made a decision it won't be a standalone app,
              as it was initially planned. The tool had to live inside Product Finder, which meant
              for me, that functionality and design had to be radically simplified. I proposed we
              split the project into two: deliver Cartridge Selection Tool now, and postpone
              Manifold Configurator for later.
            </CaseStudyParagraph>
            {/* comparison image of the original design and what we landed on. trade-offs
Simplified workflows: Breaking complex processes into manageable steps
Architectural constraints: Working within legacy system limitations
Design system alignment: Matching existing UI patterns while improving usability
Phased delivery: Cartridge selection first, manifold configuration later
*/}

            <HeadingM headingText="Workshop that unlocked development" />
            <CaseStudyParagraph>
              With a split product, we needed to reframe what our product vision was. I facilitated
              an MVP prioritization workshop using the MoSCoW method, categorizing features into
              must-haves, should-haves, could-haves, and won't-haves, focused on separating the 2
              products. This session became our north star when making trade-offs later.
            </CaseStudyParagraph>
            {/* add image that says this:
            Key must-haves we identified:
Smart filtering: Engineers needed to navigate millions of configurations efficiently
Request for quote: B2B customers couldn't order directly but needed specifications ready
Technical accuracy: Every cartridge function had to be precisely represented
Progressive disclosure: Show essential data first, details on demand */}
          </CaseStudySection>

          {/* impact */}
          <CaseStudySection
            id={navItems[4].id}
            sectionTitle="Delivering Impact Despite Missing Metrics"
            sectionTag="impact"
          >
            <HeadingM headingText="The wins we could quantify" />
            <CaseStudyParagraph>
              Even though simplified, the application launched on schedule and functioned flawlessly
              at the 0 day. More importantly, we secured the cartridge manufacturer partnership -
              validating our entire approach.
            </CaseStudyParagraph>
            <CaseStudyList title="Promising post-launch indicators:">
              <CaseStudyListItem
                title="Task completion rates increased"
                text="As we simplified the prototype, our test users found it easier to use."
              />
              <CaseStudyListItem
                title="First cartridge orders placed"
                text="In week 1 from the official launch"
              />
              <CaseStudyListItem
                title="Overwhelming positive feedback"
                text="Engineers found filtering capabilities especially useful"
              />
            </CaseStudyList>

            <HeadingM headingText="Sparking broader transformation" />
            <CaseStudyParagraph>
              Internal users liked the MVP so much, they started demanding the same experience
              across all our tools. The filtering search functionality I designed for cartridge
              selection became the benchmark for our entire Product Finder redesign.
            </CaseStudyParagraph>
          </CaseStudySection>

          {/* lessons */}
          <CaseStudySection
            id={navItems[5].id}
            sectionTitle="What I'd do differently"
            sectionTag="lessons"
          >
            <HeadingM headingText="Include engineering from day one" />
            <CaseStudyParagraph>
              Two months of initial design work had to be scrapped when we discovered technical
              constraints. Early developer involvement would have saved significant time and effort.
            </CaseStudyParagraph>

            <HeadingM headingText="Fight for analytics infrastructure" />
            <CaseStudyParagraph>
              Operating without metrics is like designing in the dark. I should have made analytics
              setup a precondition for project kickoff, not an afterthought.
            </CaseStudyParagraph>

            <HeadingM headingText="Plan the launch, not just the build" />
            <CaseStudyParagraph>
              We had no go-to-market strategy, no official release, no fireworks. The anti-climactic
              launch diminished the team's achievement and missed an opportunity for internal
              adoption momentum.
            </CaseStudyParagraph>
          </CaseStudySection>

          {/* summary section */}
          <CaseStudySection
            id={navItems[6].id}
            sectionTitle="Moving from tool to platform"
            sectionTag="next steps"
          >
            <CaseStudyParagraph>
              The Manifold Configurator remains in development, building on the patterns and
              learnings from our initial release of Cartridge Selection Tool. What started as a
              sales demo became the blueprint for Hawe's digital transformation in the German
              market.
            </CaseStudyParagraph>

            <CaseStudyList title="What we achieved:">
              <CaseStudyListItem
                title="MVP methodology"
                text="Proved effective even in a traditional industry, enabling us to start small with a clear path forward."
              />
              <CaseStudyListItem
                title="Cross-functional collaboration"
                text="Our design system documentation became essential for aligning with the external development team."
              />
              <CaseStudyListItem
                title="Streamlined quote preparation"
                text="Automated bill of materials reduced back-and-forth between internal engineers, sales team and external users."
              />
              <CaseStudyListItem
                title="Digital-first customer interaction"
                text="Paved the way for digital services, removing barriers for customers and empowering engineers to focus on what matters most."
              />
            </CaseStudyList>

            <CaseStudyList title="What’s next:">
              <CaseStudyListItem
                title="Evolve into the Manifold Configurator"
                text="Build on the Cartridge Tool foundation in small iterations to support complete manifold design online."
              />
              <CaseStudyListItem
                title="Establish analytics tracking"
                text="Introduce metrics to measure adoption, accuracy, and impact on sales processes."
              />
              <CaseStudyListItem
                title="Unify the product ecosystem"
                text="Align the Product Finder, Cartridge Tool, and upcoming applications into a seamless customer journey."
              />
            </CaseStudyList>
          </CaseStudySection>

          <CaseStudySection
            sectionTitle="Let’s discuss strategy and impact"
            sectionTag="Reach out"
          >
            <CaseStudyParagraph>
              Scoping a realistic MVP can be quite a challenge. However, together with my team, I
              turned constraints into direction, guiding the project from an overwhelming scope to a
              focused, achievable MVP. If you’re looking for a designer who can turn complexity into
              clarity and be a partner in shaping product strategy, let’s connect.
            </CaseStudyParagraph>
          </CaseStudySection>
        </div>
      </div>

      <UpNext nextProject={nextProject} />
    </>
  );
};

export default HCSCaseStudy;
