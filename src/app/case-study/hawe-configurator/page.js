import {
  CaseStudyNav,
  UpNext,
  CaseStudyList,
  CaseStudyListItem,
  HeadingM,
  CaseStudyParagraph,
  CaseStudyImage,
} from "@/components";
import { ProjectHeader } from "@/components/Snapshot";
import { navItems } from "@/utils/navigationHCSCaseStudy";
import { PROJECTS } from "@/utils/projects";
import dynamic from "next/dynamic";

const SummarySection = dynamic(() => import("@/components/Snapshot/SummarySection"));
const ImageSection = dynamic(() => import("@/components/Snapshot/ImageSection"));
const CaseStudySection = dynamic(() => import("@/components/CaseStudy/CaseStudySection"));

// exchange all exchange-for-image for images

const HCSCaseStudy = async () => {
  let title = "hawe-configurator";
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
        <div>
          {/* goals */}
          <CaseStudySection
            id={navItems[0].id}
            sectionTag={navItems[0].label}
            sectionTitle="Closing the gap between us, and everyone else"
          >
            <CaseStudyParagraph>
              Hawe's product line offered endless combinations with millions of possible
              configurations. While competitors provided advanced configuration tools, we were still
              relying on offline interactions.
              <br />
              <br /> Together with Product and Engineering we reimagined that experience. Based on
              my qualitative research and insights from the discovery phase, we sketched out a
              vision of a digital cartridge configurator.
            </CaseStudyParagraph>
            <CaseStudyList variant="1col">
              <CaseStudyListItem
                variant="1col"
                title="Positioning as a cartridge solutions provider"
              >
                Creating a digital presence that showcased our cartridge expertise and closing the
                gap with competitors.
              </CaseStudyListItem>
              <CaseStudyListItem
                variant="1col"
                title="Making cartridge configuration effortless"
              >
                Reduce dependency on sales calls by helping customers find the right configuration
                themselves.
              </CaseStudyListItem>
              <CaseStudyListItem
                variant="1col"
                title="Attract potential OEM collaborators"
              >
                A well-designed platform is a powerful tool for attracting new partners. We already
                had someone in mind.
              </CaseStudyListItem>
              <CaseStudyListItem
                variant="1col"
                title="Streamlining manifold design process"
              >
                Reducing time spent on repetitive manual calculations. Making the process faster,
                more intuitive, and scalable.
              </CaseStudyListItem>
            </CaseStudyList>
          </CaseStudySection>
          <div className="exchange-for-image bg-linen h-[534px] w-full"></div>

          {/* challenges */}
          <CaseStudySection
            id={navItems[1].id}
            sectionTag={navItems[1].label}
            sectionTitle="Navigating uncertainty and technical constraints"
          >
            <CaseStudyParagraph>
              The project hit multiple walls. What made it manageable for me was staying close to
              the work and experts. This meant quick alignment calls, making small adjustments, and
              iterating quickly, rather than waiting for perfect information.
            </CaseStudyParagraph>

            <CaseStudyList variant="3col">
              <CaseStudyListItem
                variant="3col"
                title="Development team said no"
              >
                Two months into design, engineering confirmed the full manifold configurator wasn't
                feasible in the given timeframe. I had to scale down to reach the 3 month deadline.
              </CaseStudyListItem>
              <CaseStudyListItem
                variant="3col"
                title="Architecture I didn't choose"
              >
                We ended up with limited budget. To cut costs, we agreed on a solution to embed the
                new tool inside the existing Product Finder. That meant inheriting its constraints —
                limited component flexibility, existing user flows, and design decisions I hadn't
                made.
              </CaseStudyListItem>
              <CaseStudyListItem
                variant="3col"
                title="No access to external users"
              >
                In a B2B environment, reaching out to client-side engineers without clearance risks
                the business relationship. Internal engineers were my only research channel. Good
                proxies — but not the full picture.
              </CaseStudyListItem>
              <CaseStudyListItem
                variant="3col"
                title="US market, German systems"
              >
                Releasing in the US first created friction with pricing logic, user permissions, and
                internal tooling that had been built around German market assumptions. The gaps had
                to be resolved through engineering — and they surfaced late.
              </CaseStudyListItem>
              <CaseStudyListItem
                variant="3col"
                title="No analytics baseline"
              >
                The Product Finder had no tracking in place. There was nothing to benchmark against,
                no behavioral data to validate decisions, and no way to measure adoption without
                building the measurement system from scratch.
              </CaseStudyListItem>
            </CaseStudyList>
          </CaseStudySection>
          <div className="exchange-for-image bg-linen h-[534px] w-full"></div>

          {/* approach */}
          <CaseStudySection
            id={navItems[2].id}
            sectionTag={navItems[2].label}
            sectionTitle="Research first, then reality-check"
          >
            <CaseStudyParagraph>
              Working between the Customer Experience and the Digitalization teams, I owned the
              entire design process. From initial stakeholder interviews through post-launch
              iteration planning. <br />
              <br />I was a researcher, designer, and — increasingly — the person maintaining the
              shared understanding of direction across teams, management, and development.
            </CaseStudyParagraph>

            <CaseStudyParagraph title="Understanding users">
              Designing for specialists is a discipline of its own. The engineers I was designing
              for had years of domain expertise I couldn't replicate — and didn't need to. What I
              needed was to understand their workflow well enough to map it accurately, identify
              where friction lived, and ask the right questions without wasting their time.
              <br />
              <br />
              That last part mattered more than it might seem. These were busy people with no
              patience for vague discovery sessions. I had to come prepared — with specific
              hypotheses, concrete scenarios, and a clear sense of what I was trying to learn from
              each conversation. I was fortunate to work with engineers who were generous with their
              time and willing to explain things twice. I didn't take that for granted.
              <br />
              <br />I started with archetypes from prior research, then refined through internal
              interviews. The groups I designed for: internal engineers, external engineers, and
              internal sales reps — who, despite their technical background, needed less depth than
              engineers — alongside purchasing contacts from client companies, who came with
              different priorities and less domain fluency
            </CaseStudyParagraph>
            <CaseStudyParagraph title="Splitting the scope">
              I ran a prioritization workshop with the idea originator and innovation manager to
              separate what the product had to do from what it could do later. The original brief
              was a four-step flow: cartridge selection, manifold specification, document upload
              with analysis, and a bill of materials with pricing. We kept step one and four.
              Everything else became phase two.
            </CaseStudyParagraph>
            <CaseStudyParagraph title="Cross-team alignment">
              Webshop was a separate application being built in parallel. We worked together on
              visual language and component patterns to make sure both products would feel like part
              of the same system. Maintaining that consistency across independently built tools was
              something I took responsibility for, even when it wasn't formally in scope.
            </CaseStudyParagraph>
            <CaseStudyParagraph title="Rapid prototyping">
              Once development began, the real negotiation started. Translating design into the
              existing Product Finder architecture surfaced conflicts I hadn't anticipated —
              patterns that didn't map, constraints that ruled out certain interactions, and edge
              cases that required the original design to bend. <br />
              <br />I worked in short cycles throughout this phase: a problem would emerge, I'd
              build a quick prototype to test a solution against both user needs and technical
              reality, then use that to drive the conversation with the development team. <br />
              <br />
              The prototypes weren't just design artefacts — they were decision tools. They made
              trade-offs visible and gave management a concrete basis for the calls we were making
              together.
            </CaseStudyParagraph>
          </CaseStudySection>
          <div className="exchange-for-image bg-linen h-[534px] w-full"></div>

          {/* key decisions */}
          <CaseStudySection
            id={navItems[3].id}
            sectionTag={navItems[3].label}
            sectionTitle="Calls that shaped the product"
          >
            <CaseStudyParagraph>
              Several moments in this project required me to make decisions under uncertainty — with
              real consequences for what shipped and what didn’t.
            </CaseStudyParagraph>

            <CaseStudyList variant="2col">
              <CaseStudyListItem
                title="Split the product in two"
                variant="2col"
              >
                When it became clear that the full manifold configurator wasn't feasible, I proposed
                treating it as two separate products. Each with a clear purpose, both products could
                be combined later into a more complete service.
              </CaseStudyListItem>
              <CaseStudyListItem
                title="Cutting manifold configurator from scope"
                variant="2col"
              >
                The hardest call. Recommending the split required confidence that the cartridge
                selection piece alone could carry the partnership conversation. I convinced the idea
                giver to accept this call while he carried out the final pitch.
              </CaseStudyListItem>
              <CaseStudyListItem
                title="Designing within someone else’s architecture"
                variant="2col"
              >
                Embedding the tool in the Product Finder meant inheriting patterns and constraints I
                hadn't chosen. I renegotiated the UX within those constraints rather than pushing
                for a rebuild — the right call for the timeline, even when it meant letting go of
                some design decisions.
              </CaseStudyListItem>
              <CaseStudyListItem
                title="Escalating the pricing problem"
                variant="2col"
              >
                Three different price calculations, visible to the user, in a trust-sensitive B2B
                tool. I raised it to the pricing team and pushed for a database fix, even knowing it
                would delay us. Launching with inconsistent pricing would have damaged credibility.
              </CaseStudyListItem>
              <CaseStudyListItem
                title="Progressive disclosure for dense technical data"
                variant="2col"
              >
                Engineers needed to compare products based on various technical specifications.
                There was a lot of information to show. Rather than revealing everything at once, I
                designed a layered information architecture: key attributes visible by default, full
                specs and data sheets behind deliberate interactions.
              </CaseStudyListItem>
              <CaseStudyListItem
                title="Canary launch over grand reveal"
                variant="2col"
              >
                Between the development and budget constraints and Germany's thoroughness in getting
                things right, we opted for a controlled rollout. First to US market users and
                selected internal testers. A soft launch that allowed us for more tests and better
                understanding of user behavior.
              </CaseStudyListItem>
            </CaseStudyList>
            {/* add image that says this:
            Key must-haves we identified:
Smart filtering: Engineers needed to navigate millions of configurations efficiently
Request for quote: B2B customers couldn't order directly but needed specifications ready
Technical accuracy: Every cartridge function had to be precisely represented
Progressive disclosure: Show essential data first, details on demand */}
          </CaseStudySection>
          <div className="exchange-for-image bg-linen h-[534px] w-full"></div>

          {/* impact */}
          <CaseStudySection
            id={navItems[4].id}
            sectionTag={navItems[4].label}
            sectionTitle="What we could measure, and what it meant"
          >
            <CaseStudyParagraph>
              We launched without a full analytics stack in place. As soon as the tool was live, I
              brought in data analyst to set up proper tracking. The early signal came through
              usability testing and direct user behavior.
            </CaseStudyParagraph>
            <CaseStudyList title="What we achieved:">
              <CaseStudyListItem title="The contract was signed">
                The primary business goal — acquiring the cartridge manufacturer as a partner — was
                achieved. The tool was the proof of concept that started conversations .
              </CaseStudyListItem>
              <CaseStudyListItem title="First digital orders placed">
                Post-launch, orders were placed by users outside the controlled test group — the
                first signal that the tool was working in practice, not just in testing conditions.
              </CaseStudyListItem>
              <CaseStudyListItem title="The tool became a benchmark">
                Internal engineers, the most skeptical test group, were impressed by the filtering
                and search experience and began requesting it across the full Product Finder. That
                response triggered a full UX audit and redesign of the existing tool, which I took
                on as my next initiative.
              </CaseStudyListItem>
              <CaseStudyListItem title="UX moved to strategy">
                The project gave design a visible outcome — a signed contract, working software, and
                a shift in how teams thought about UX investment. More teams started involving
                design earlier. That's harder to quantify, and more durable than any single metric.
              </CaseStudyListItem>
              <CaseStudyListItem title="Usability improved">
                Each test round showed measurable gains in satisfaction and completion scores.
                Missing steps that engineers considered essential were surfaced through testing and
                fed back into the iteration cycle.
              </CaseStudyListItem>
            </CaseStudyList>

            <HeadingM headingText="What shipped:" />
          </CaseStudySection>

          <div className="exchange-for-image bg-linen h-[534px] w-full"></div>

          {/* lessons */}
          <CaseStudySection
            id={navItems[5].id}
            sectionTag={navItems[5].label}
            sectionTitle="The Manifold Configurator is pending"
          >
            <CaseStudyParagraph>
              The second half of the original scope is still in development. Picked up by a separate
              team with the engineering capacity and CAD tooling it requires. The groundwork is
              there: the architecture, the design patterns, the user research. What's left is the
              build.
            </CaseStudyParagraph>
          </CaseStudySection>

          {/* summary section */}
          <CaseStudySection
            id={navItems[6].id}
            sectionTag={navItems[6].label}
            sectionTitle="What became clear through the process"
          >
            {" "}
            <CaseStudyParagraph>
              This project reinforced how much product success depends on the process. Looking back,
              these are the areas I'd approach with even more intention in future projects.
            </CaseStudyParagraph>
            <CaseStudyList variant="3col">
              <CaseStudyListItem
                variant="3col"
                title="Bringing engineering in on day one"
              >
                The weeks lost to rework after the dev pushback were the most avoidable cost in the
                whole project. Earlier technical alignment on backend systems would have shaped the
                design in ways that allowed for immediate integration.
              </CaseStudyListItem>
              <CaseStudyListItem
                variant="3col"
                title="Analytics before launch, not after"
              >
                We had no baseline for the Product Finder and no way to measure behavioral impact
                post-launch. Starting that conversation in discovery — not after go-live — would
                have given us something to measure against.
              </CaseStudyListItem>
              <CaseStudyListItem
                variant="3col"
                title="Designing the launch, not just the product"
              >
                We shipped a solid product with no internal announcement, no stakeholder moment, no
                go-to-market strategy. For a tool that helped close a major contract, that was a
                missed opportunity to build visibility — for the product and for design.
              </CaseStudyListItem>
            </CaseStudyList>
          </CaseStudySection>

          <CaseStudySection
            sectionTitle="Let’s discuss strategy and impact"
            sectionTag="Reach out"
          >
            <CaseStudyParagraph>
              Scoping a realistic MVP can be quite a challenge. However, together with my team, I
              turned constraints into direction, guiding the project from an overwhelming scope to a
              focused, achievable MVP. <br />
              <br />
              If you're building something in a space where the users are experts, the stakes are
              real, and the margin for error is low, that's the kind of problem I want to be part
              of.
              <br />
              <br />
              Get in touch — I'd like to hear what you're working on.
            </CaseStudyParagraph>
          </CaseStudySection>
        </div>
      </div>

      <UpNext nextProject={nextProject} />
    </>
  );
};

export default HCSCaseStudy;
