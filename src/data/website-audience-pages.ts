export type WebsiteAudiencePageData = {
  slug: string;
  label: string;
  icon: "palette" | "images" | "compass" | "workflow";
  focusKeyword: string;
  title: string;
  description: string;
  keywords: string[];
  eyebrow: string;
  intro: string;
  ctaTitle: string;
  pointOfView: string;
  prioritiesHeading: string;
  priorities: Array<{ title: string; copy: string }>;
  structureHeading: string;
  structureIntro: string;
  structure: Array<{ label: string; title: string; copy: string }>;
  contentHeading: string;
  contentIntro: string;
  contentChecklist: string[];
  faq: Array<{ q: string; a: string }>;
  relatedLinks: Array<{ slug: string; label: string; keyword: string }>;
};

export const websiteAudiencePages: WebsiteAudiencePageData[] = [
  {
    slug: "interior-designers",
    label: "Interior designers",
    icon: "palette",
    focusKeyword: "website design for interior designers",
    title: "Website Design for Interior Designers | Intorza",
    description: "A considered interior designer website for presenting your style, services and project stories, with a clear path for new clients to enquire.",
    keywords: ["interior designer website development", "interior design portfolio website", "website for interior designers", "interior design website design"],
    eyebrow: "A digital home for your design practice",
    intro: "Website design for interior designers should make the work and the thinking behind it easy to understand. Intorza helps shape a studio website around your signature projects, real services and the kind of client you want to hear from.",
    ctaTitle: "Give your interior design work a clearer digital home.",
    pointOfView: "A useful interior designer website is more than a gallery. It gives each project enough context to show the brief, your decisions and the finished space, then connects that work to the services you provide. The visual language can reflect your practice while the page structure helps a prospective client find the information they need.",
    prioritiesHeading: "Build the story around how clients choose a designer",
    priorities: [
      { title: "Let your style come through", copy: "Use a deliberate image sequence, confident typography and room around the work. Let the design support your visual identity instead of competing with project photography." },
      { title: "Make the service fit clear", copy: "Explain the project types you take on, the stages you support and where you work. Keep the wording specific to your actual offer, whether clients need a full interior project or a defined design service." },
      { title: "Turn a project into a case study", copy: "Add a short brief, location where appropriate, scope, key material or planning decisions and finished images. This helps visitors understand what sits behind the final reveal." },
      { title: "Make it easy to start", copy: "Place a clear enquiry action near relevant service and project content. Give a new client a simple way to share their project type, location and timeline." },
    ],
    structureHeading: "A clear structure for an interior designer website",
    structureIntro: "The exact sitemap depends on your practice. A focused starting point can give visitors a path from first impression to a qualified conversation.",
    structure: [
      { label: "01", title: "Home", copy: "Your design point of view, selected projects and a direct invitation to enquire." },
      { label: "02", title: "Services", copy: "The design services you offer, who they suit and what a client can expect." },
      { label: "03", title: "Portfolio", copy: "Selected interiors grouped in a way that makes your range easy to browse." },
      { label: "04", title: "Project stories", copy: "The brief, design choices, scope and imagery for representative projects." },
      { label: "05", title: "About the designer", copy: "Your approach, relevant experience and the people clients will work with." },
      { label: "06", title: "Contact", copy: "A simple enquiry route with the details needed for a useful first reply." },
    ],
    contentHeading: "Bring the right material to the first conversation",
    contentIntro: "A strong website starts with truthful, specific source material. Gather a small set of representative work and the facts that make each project understandable.",
    contentChecklist: ["Choose finished projects you have permission to publish.", "Identify the services, project sizes and locations you genuinely take on.", "Write a few lines about the brief, your role and a meaningful design decision.", "Select clear, well-sized images and add descriptive captions where useful."],
    faq: [
      { q: "What should an interior designer website include?", a: "Usually a clear studio introduction, service information, selected projects, useful project context, an about page and a simple enquiry route. The right mix depends on your practice and the clients you want to reach." },
      { q: "Can you create a portfolio website for an independent interior designer?", a: "Yes. The page structure can be kept focused for an independent practice, with space for your work, services, approach and contact details." },
      { q: "Can you help organize existing project photos and copy?", a: "We can plan how your available images and project information fit into galleries or project stories. You provide the genuine project material and approve what is published." },
    ],
    relatedLinks: [
      { slug: "design-studios", label: "Design studios", keyword: "website development for design studios" },
      { slug: "architects", label: "Architects and practices", keyword: "website design for architects" },
      { slug: "interior-contractors", label: "Interior contractors", keyword: "website design for interior contractors" },
    ],
  },
  {
    slug: "design-studios",
    label: "Design studios",
    icon: "images",
    focusKeyword: "website development for design studios",
    title: "Website Development for Design Studios | Intorza",
    description: "A design studio website that brings team expertise, project portfolios and services into one coherent story for prospective clients.",
    keywords: ["design studio website design", "interior design studio website", "website for interior design studio", "interior design company website"],
    eyebrow: "One studio voice, many points of view",
    intro: "Website development for design studios begins with a shared story: what the team does, how its disciplines fit together and which projects best show its approach. Intorza helps organize that story into a cohesive studio website without flattening the differences between projects or people.",
    ctaTitle: "Bring the voice of your design studio online.",
    pointOfView: "A studio portfolio needs to feel consistent without making every project look the same. A clear visual system can unify the site while project categories, team credits and case study details show the different expertise that shaped each space. The result gives clients a sense of the whole studio and the people behind the work.",
    prioritiesHeading: "Show the studio as a team with a point of view",
    priorities: [
      { title: "Create a coherent portfolio", copy: "Set a clear image and typography direction, then let project-specific details distinguish residential, hospitality, retail or workplace work where those categories match your portfolio." },
      { title: "Credit the people behind the work", copy: "Introduce the studio and its collaborators with accurate roles and concise biographies. Make clear how the team works together without overstating credentials." },
      { title: "Explain connected capabilities", copy: "Describe the services and disciplines your team actually provides. Help clients understand where a project can begin and which capabilities may be relevant." },
      { title: "Give each case study a useful frame", copy: "Use project context such as brief, location, scope, team contribution and completed status where those details are available and approved for publication." },
    ],
    structureHeading: "A structure that connects studio, services and work",
    structureIntro: "A considered studio site should work for someone exploring the portfolio and for someone checking whether your team is right for a live brief.",
    structure: [
      { label: "01", title: "Home", copy: "A concise studio position, selected work and clear paths into services or contact." },
      { label: "02", title: "Studio", copy: "The team, disciplines, approach and collaborators, described with accurate detail." },
      { label: "03", title: "Services", copy: "A practical outline of capabilities and the project stages your studio supports." },
      { label: "04", title: "Work index", copy: "A browseable portfolio with useful project types and clear visual rhythm." },
      { label: "05", title: "Case studies", copy: "Project briefs, contributions, scope and completed imagery in a repeatable format." },
      { label: "06", title: "Enquiries", copy: "A direct route for clients to share project type, location and expected timing." },
    ],
    contentHeading: "Prepare content that reflects the whole studio",
    contentIntro: "Before design begins, gather the information that lets the site describe the team consistently and give every project enough context.",
    contentChecklist: ["Agree on the studio description and the services currently offered.", "Choose projects that represent the team’s range and preferred future work.", "Confirm project credits, collaborator names, photography rights and publication status.", "Collect concise team biographies and accurate role descriptions."],
    faq: [
      { q: "What should a design studio website include?", a: "A studio introduction, services, team information, selected work, project case studies and a direct enquiry path are common foundations. The sitemap should reflect the studio’s actual disciplines and goals." },
      { q: "Can one portfolio present different project types consistently?", a: "Yes. A shared case study structure and visual system can make the portfolio feel coherent while each project retains its own brief, imagery and team context." },
      { q: "Can team members and collaborators be included?", a: "Yes. The site can introduce team members and collaborators with roles and descriptions supplied or approved by your studio." },
    ],
    relatedLinks: [
      { slug: "interior-designers", label: "Interior designers", keyword: "website design for interior designers" },
      { slug: "architects", label: "Architects and practices", keyword: "website design for architects" },
      { slug: "interior-contractors", label: "Interior contractors", keyword: "website design for interior contractors" },
    ],
  },
  {
    slug: "architects",
    label: "Architects & practices",
    icon: "compass",
    focusKeyword: "website design for architects",
    title: "Website Design for Architects & Architecture Firms | Intorza",
    description: "An architecture firm website structured around practice expertise, project context, team contributions and a clear route for new briefs.",
    keywords: ["architecture firm website", "website development for architects", "architect website design", "architecture practice website"],
    eyebrow: "A clearer way to present architectural work",
    intro: "Website design for architects needs to communicate more than finished photographs. Intorza helps architecture practices present project type, status, scope and team contribution so clients can understand the work and the capabilities behind it.",
    ctaTitle: "Give your architecture projects a clearer digital home.",
    pointOfView: "Architecture projects often involve long timelines, many collaborators and distinct stages of work. A useful practice website gives each project an accurate frame: what was proposed or built, what the practice contributed and which details can be shared. That context helps a portfolio feel informative as well as visual.",
    prioritiesHeading: "Give architectural projects their proper context",
    priorities: [
      { title: "Clarify project status", copy: "Distinguish completed work from concepts, proposals or projects in progress. Use accurate labels so visitors are not left to infer what has been built." },
      { title: "Describe the practice’s role", copy: "Explain the scope your team handled and acknowledge collaborators where appropriate. Clear contribution details make capabilities easier to assess." },
      { title: "Organize by relevant typology", copy: "Group projects by sectors or building types only where those categories reflect your actual experience and the work you want to show." },
      { title: "Balance visuals with information", copy: "Pair plans, photography and drawings with concise project facts. Give technical detail a clear place without overwhelming the main story." },
    ],
    structureHeading: "A practical sitemap for an architecture practice",
    structureIntro: "The content should help a prospective client move from understanding the practice to reviewing relevant work and making contact.",
    structure: [
      { label: "01", title: "Practice overview", copy: "A concise position, areas of work and a path to explore relevant projects." },
      { label: "02", title: "Capabilities", copy: "Services, sectors and project stages your practice genuinely supports." },
      { label: "03", title: "Projects", copy: "A portfolio with useful typologies, locations and status labels." },
      { label: "04", title: "Project records", copy: "Brief, scope, practice role, collaborators and approved drawings or images." },
      { label: "05", title: "People", copy: "The team and expertise behind the practice, with accurate credentials." },
      { label: "06", title: "New briefs", copy: "A contact route that helps potential clients share project needs and timing." },
    ],
    contentHeading: "Keep project records accurate and publishable",
    contentIntro: "Architectural work can include confidential, unbuilt or collaborative projects. A content review helps decide what can be shown and how to describe it responsibly.",
    contentChecklist: ["Confirm permission to publish each project, drawing and photograph.", "Label built, proposed, ongoing and conceptual work accurately.", "Verify the practice’s role, project scope, collaborators and dates before publishing.", "Choose project facts that help a prospective client understand your relevant experience."],
    faq: [
      { q: "What should an architecture firm website include?", a: "A practice overview, capabilities, team information, selected projects, project context and a clear way to discuss a new brief. The exact structure depends on the firm’s work and audience." },
      { q: "Can proposed and completed projects both appear in the portfolio?", a: "They can be presented with clear, accurate status labels. The practice should confirm that each project and asset is approved for publication." },
      { q: "Can project pages credit collaborators and explain our role?", a: "Yes. Project stories can include collaborator credits and a concise explanation of the practice’s contribution, based on information your team verifies." },
    ],
    relatedLinks: [
      { slug: "design-studios", label: "Design studios", keyword: "website development for design studios" },
      { slug: "interior-designers", label: "Interior designers", keyword: "website design for interior designers" },
      { slug: "interior-contractors", label: "Interior contractors", keyword: "website design for interior contractors" },
    ],
  },
  {
    slug: "interior-contractors",
    label: "Interior contractors",
    icon: "workflow",
    focusKeyword: "website design for interior contractors",
    title: "Website Design for Interior Contractors | Intorza",
    description: "A contractor website that explains your project scope, services and delivery approach, and helps homeowners or businesses make a useful enquiry.",
    keywords: ["interior contractor website", "website for interior contractors", "interior construction company website", "interior fit out website design"],
    eyebrow: "Make your scope and delivery easy to understand",
    intro: "Website design for interior contractors should help a prospective client understand the work you take on, how delivery is organized and what information to share when asking for a quote. Intorza helps present your services, completed work and enquiry process in a clear, practical way.",
    ctaTitle: "Make your services and project scope easy to understand.",
    pointOfView: "A contractor’s website needs to make capability tangible. Project examples can show the type of work, scope and finish; service pages can explain how an engagement starts and what details affect planning. Clear boundaries help screen enquiries and make the first conversation more useful for both sides.",
    prioritiesHeading: "Help clients understand the work before they enquire",
    priorities: [
      { title: "Define the work you take on", copy: "Explain the project types, services and locations you serve. Separate related offerings when clients need to understand the difference in scope." },
      { title: "Show delivery, not only the reveal", copy: "Use completed project examples to explain the scope, sequence or coordination involved. Include before-and-after images only when genuine and approved." },
      { title: "Set expectations for the first step", copy: "Describe what information helps you assess a project, such as location, space type, approximate scope and target timing." },
      { title: "Build confidence with verifiable details", copy: "Present real team information, process details and credentials where applicable. Avoid broad promises that the business cannot consistently support." },
    ],
    structureHeading: "A service-led structure for contractor enquiries",
    structureIntro: "Organize pages around the work clients need done, then support each service with relevant examples and a straightforward next step.",
    structure: [
      { label: "01", title: "Home", copy: "The services you provide, work you want to show and a clear contact action." },
      { label: "02", title: "Services", copy: "Defined scopes and project types, written in language clients understand." },
      { label: "03", title: "Completed work", copy: "Representative projects with scope, setting and approved photographs." },
      { label: "04", title: "How projects start", copy: "The information, site discussion or next step needed to assess a brief." },
      { label: "05", title: "About the team", copy: "Relevant experience and roles described accurately and clearly." },
      { label: "06", title: "Request an enquiry", copy: "A form or contact option for project type, location, scope and timing." },
    ],
    contentHeading: "Prepare the details that qualify an enquiry",
    contentIntro: "Useful service copy starts with your actual operating area and project scope. Make those boundaries clear so visitors can decide whether to contact you.",
    contentChecklist: ["List the work types, project sizes and locations you currently serve.", "Select completed projects that demonstrate the scope and finish you want to be hired for.", "Describe your usual first steps without promising fixed timelines or costs.", "Decide what a new client should share to help you assess their project."],
    faq: [
      { q: "What should an interior contractor website include?", a: "Clear service descriptions, completed project examples, the areas you serve, a short explanation of how enquiries are handled and a simple contact option." },
      { q: "Can the website help qualify project enquiries?", a: "The enquiry route can ask for relevant details such as project type, location, scope and timing. This helps your team understand the request before responding." },
      { q: "Can I show renovation and fit-out projects separately?", a: "Yes. Projects and services can be organized by the categories that reflect your real work and help clients find the examples most relevant to them." },
    ],
    relatedLinks: [
      { slug: "interior-designers", label: "Interior designers", keyword: "website design for interior designers" },
      { slug: "design-studios", label: "Design studios", keyword: "website development for design studios" },
      { slug: "architects", label: "Architects and practices", keyword: "website design for architects" },
    ],
  },
];

export function getWebsiteAudiencePage(slug: string) {
  return websiteAudiencePages.find((page) => page.slug === slug);
}

export function websiteAudiencePath(slug: string) {
  return `/services/website-development/${slug}`;
}
