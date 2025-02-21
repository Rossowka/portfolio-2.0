const placeholderThumbnail = "/images/placeholder.png";

export const PROJECTS = [
  {
    id: "hawe-configurator",
    client: "HAWE",
    title: "Captivating our customers with a new tool showcasing our products.",
    startDate: "Apr 2023",
    endDate: "Oct 2024",
    duration: "(7 months)",
    role: ["Research", "Strategy", "Design", "Development"],
    team: [
      {
        count: "1x",
        role: "Product Designer",
      },
      {
        count: "1x",
        role: "Product Visionary",
      },
      {
        count: "1x",
        role: "Innovation Manager",
      },
      {
        count: "4x",
        role: "Developers",
      },
    ],
    constraints: [
      "Limited time",
      "Tech stack limitations",
      "Strategy changes",
      "Limited budget",
      "Design team of one",
    ],
    impact: [
      {
        data: "90%",
        text: "Positive user feedback",
      },
      {
        data: "~ €930k",
        text: "worth of products introduced to the market",
      },
    ],
    context:
      "HAWE Hydraulik delivers precision-engineered hydraulic solutions, providing innovative and reliable systems for industries worldwide. They needed to attract more customers with a compelling new tool. I helped them do just that, designing a tool that supports new manufacturing service they were launching.",
    url: "/projects/hawe-configurator",
    caseStudyUrl: "#",
    onlineUrl: "",
    thumbnail: {
      l: {
        src: "/images/hawe-configurator/thumbnail-l.jpg",
        alt: "thumbnail",
      },
      m: { src: "/images/hawe-configurator/thumbnail-m.jpg" },
      s: { src: "/images/hawe-configurator/thumbnail-s.jpg" },
      snapshot: {
        src: "/images/hawe-configurator/snapshot.jpg",
        alt: "Product selection list from HAWE configuration tool on tablet",
      },
    },
    mainShot: {
      src: "/images/hawe-configurator/main.jpg",
      alt: "Product selection page on PC",
    },
    imageShowcase: [
      {
        src: "/images/hawe-configurator/showcase-1.jpg",
        alt: "Feature definition page on tablet",
      },
      {
        src: "/images/hawe-configurator/showcase-2.jpg",
        alt: "Quote summary page on tablet",
      },
    ],
    featured: true,
  },
  // hawe-pust
  {
    id: "hawe-pust",
    client: "HAWE",
    title: "Redesigning Selection Tool for improved recommendation process",
    startDate: "Dec 2023",
    endDate: "Mar 2024",
    duration: "(4 months)",
    role: ["Research", "Design"],
    team: [
      {
        amount: "2x",
        role: "Product Designer",
      },
      {
        amount: "1x",
        role: "Head of CX",
      },
    ],
    constraints: [
      "Sunsetted project",
      "Lack of design process",
      "Lack of development resources",
      "Low UX maturity",
    ],
    impact: [
      {
        data: "+",
        text: "Standarized layouts for recommendation tools",
      },
      {
        data: "+",
        text: "Created design process for improving existing tools",
      },
    ],
    context:
      "To improve the user experience, I collaborated with a cross-functional teams to revamp and redesign HAWE's smart recommendation tool. Choosing the right product is now more intuitive and the process is more straightforward.",
    url: "/projects/hawe-pust",
    caseStudyUrl: "#",
    onlineUrl: "",
    thumbnail: {
      l: { src: "/images/hawe-pust/thumbnail-l.jpg", alt: "thumbnail" },
      m: { src: "/images/hawe-pust/thumbnail-m.jpg" },
      s: { src: "/images/hawe-pust/thumbnail-s.jpg" },
      snapshot: {
        src: "/images/hawe-pust/snapshot.jpg",
        alt: "Final step of the HAWE configuration tool on tablet",
      },
    },
    mainShot: { src: "/images/hawe-pust/main.jpg", alt: "..." },
    imageShowcase: [],
    featured: true,
  },
  // hawe-customer-portal
  {
    id: "hawe-customer-portal",
    client: "HAWE",
    title: "Unifying HAWE's digital experience and crafting a design system",
    startDate: "Oct 2023",
    endDate: "ongoing",
    duration: "(~2 months to first release)",
    role: ["Research", "Strategy", "Design", "Development"],
    team: [
      {
        amount: "1x",
        role: "Product Designer",
      },
      {
        amount: "2x",
        role: "UX Consultants",
      },
      {
        amount: "1x",
        role: "Developer",
      },
      {
        amount: "1x",
        role: "Head of CX",
      },
    ],
    constraints: [
      "Limited design resources",
      "Evolving corporate identity",
      "Legacy code and existing components",
      "Tech stack limitations",
      "Slow adoption and gradual rollout",
    ],
    impact: [
      {
        data: "+",
        text: "Spearheaded creation of design guidelines and component library",
      },
      {
        data: "+",
        text: "Defined processes for maintainance and growth of the design system",
      },
    ],
    context:
      "I worked closely with Head of CX on a complete redesign of our customer platform. Initially created as a hub for our tools and product catalogue it took a life of its own with each addition. My goal was to redesign it in line with our corporate identity and needs of our users.",
    url: "/projects/hawe-customer-portal",
    caseStudyUrl: "#",
    onlineUrl: "",
    thumbnail: {
      l: {
        src: "/images/hawe-customer-portal/thumbnail-l.jpg",
        alt: "thumbnail",
      },
      m: {
        src: "/images/hawe-customer-portal/thumbnail-m.jpg",
      },
      s: {
        src: "/images/hawe-customer-portal/thumbnail-s.jpg",
      },
      snapshot: {
        src: "/images/hawe-customer-portal/snapshot.jpg",
        alt: "Couple of components from the design library",
      },
    },
    mainShot: {
      src: "/images/hawe-customer-portal/main.jpg",
      alt: "Collage of components",
    },
    imageShowcase: [
      {
        src: "/images/hawe-customer-portal/showcase-1.jpg",
        alt: "Elements of the design system",
      },
      {
        src: "/images/hawe-customer-portal/showcase-2.jpg",
        alt: "Wireframe of the future customer portal vision.",
      },
    ],
    featured: true,
  },
  // swingin-fireballs
  {
    id: "swingin-fireballs",
    client: "Swingin' Fireballs",
    title: "Jazzing up branding for a Big Band website",
    startDate: "Oct 2023",
    endDate: "",
    duration: "",
    role: ["Design"],
    context:
      "Swingin' Fireballs brings back the quality entertainment of the '60s. With this website redesign proposition, I defined a new visual identity while staying true to the band's original playful and lighthearted character.",
    url: "/projects/swingin-fireballs",
    caseStudyUrl: "",
    onlineUrl: "",
    thumbnail: {
      snapshot: {
        src: "/images/swingin-fireballs/snapshot.jpg",
        alt: "Landing page for Swingin' Fireballs on tablet",
      },
    },
    mainShot: {
      src: "/images/swingin-fireballs/main.jpg",
      alt: "Landing page for Swingin' Fireballs",
    },
    imageShowcase: [
      {
        src: "/images/swingin-fireballs/showcase-1.jpg",
        alt: "Mobile view on discography",
      },
      {
        src: "/images/swingin-fireballs/showcase-2.jpg",
        alt: "Mobile view on footer and subscription",
      },
    ],
    featured: false,
  },
  // blue-central-records
  {
    id: "blue-central-records",
    client: "Blue Central Records",
    title: "Helping a local record label manifest their digital presence.",
    startDate: "Oct 2023",
    endDate: "",
    duration: "",
    role: ["Design", "Development"],
    context:
      "Blue Central Records is a German independent label helping emerging artists gain exposure and succeed in the music industry. They needed a digital business card to mark their presence online. We partnered to design and develop a website to show off their brand and attract new collaborators.",
    url: "/projects/blue-central-records",
    caseStudyUrl: "",
    onlineUrl: "",
    thumbnail: {
      snapshot: {
        src: "/images/blue-central-records/snapshot.jpg",
        alt: "Landing page for Blue Central Records on tablet",
      },
    },
    mainShot: {
      src: "/images/blue-central-records/main.jpg",
      alt: "Landing page for Blue Central Records",
    },
    imageShowcase: [
      {
        src: "/images/blue-central-records/showcase-2.jpg",
        alt: "Artist page on mobile",
      },
      {
        src: "/images/blue-central-records/showcase-1.jpg",
        alt: "Mobile view on footer and contact",
      },
    ],
    featured: false,
  },
];
