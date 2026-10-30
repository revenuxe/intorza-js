export type WebsiteDevelopmentPageData = {
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
  relatedLinks: Array<{ href: string; label: string; keyword: string }>;
};

export const websiteAudiencePages: WebsiteDevelopmentPageData[] = [
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
      { href: "/services/website-development/design-studios", label: "Design studios", keyword: "website development for design studios" },
      { href: "/services/website-development/architects", label: "Architects and practices", keyword: "website design for architects" },
      { href: "/services/website-development/interior-contractors", label: "Interior contractors", keyword: "website design for interior contractors" },
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
      { href: "/services/website-development/interior-designers", label: "Interior designers", keyword: "website design for interior designers" },
      { href: "/services/website-development/architects", label: "Architects and practices", keyword: "website design for architects" },
      { href: "/services/website-development/interior-contractors", label: "Interior contractors", keyword: "website design for interior contractors" },
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
      { href: "/services/website-development/design-studios", label: "Design studios", keyword: "website development for design studios" },
      { href: "/services/website-development/interior-designers", label: "Interior designers", keyword: "website design for interior designers" },
      { href: "/services/website-development/interior-contractors", label: "Interior contractors", keyword: "website design for interior contractors" },
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
      { href: "/services/website-development/interior-designers", label: "Interior designers", keyword: "website design for interior designers" },
      { href: "/services/website-development/design-studios", label: "Design studios", keyword: "website development for design studios" },
      { href: "/services/website-development/architects", label: "Architects and practices", keyword: "website design for architects" },
    ],
  },
];

export function getWebsiteAudiencePage(slug: string) {
  return websiteAudiencePages.find((page) => page.slug === slug);
}

export function websiteAudiencePath(slug: string) {
  return `/services/website-development/${slug}`;
}

export const websiteFocusPages: WebsiteDevelopmentPageData[] = [
  {
    slug: "interior-design-portfolio",
    label: "Interior design portfolios",
    icon: "images",
    focusKeyword: "interior design portfolio website",
    title: "Interior Design Portfolio Website Planning | Intorza",
    description: "Plan an interior design portfolio website that curates projects, guides visitors through your work and makes your services easier to understand.",
    keywords: ["interior design portfolio website", "interior design portfolio web design", "interior design project gallery", "interior designer portfolio site"],
    eyebrow: "Portfolio planning for interior practices",
    intro: "An interior design portfolio website should help the right work stand out. Plan the project mix, categories and image sequence around the kind of work you want prospective clients to understand and remember.",
    ctaTitle: "Make your portfolio a thoughtful introduction to your work.",
    pointOfView: "A large gallery can show many rooms without helping visitors understand what your practice does best. A curated portfolio gives stronger projects room to breathe, groups work in a useful way and points visitors toward detailed project stories. Selection is part of the design: choose examples that reflect your approach and the work you want to take on.",
    prioritiesHeading: "Select and organize work with intention",
    priorities: [
      { title: "Choose representative projects", copy: "Start with work that shows your design range, preferred project type and point of view. A smaller, considered selection can be easier to navigate than an exhaustive feed." },
      { title: "Create helpful categories", copy: "Group work by project type or sector when the distinction helps visitors browse. Use categories that reflect real completed work rather than search terms alone." },
      { title: "Plan the image sequence", copy: "Lead each project with a strong image, then use supporting views to reveal layout, materials and details. Keep image quality and consistency in mind across the portfolio." },
      { title: "Connect projects to services", copy: "Help a visitor move from a portfolio example to the service or enquiry route that matches their own project." },
    ],
    structureHeading: "A portfolio architecture visitors can browse",
    structureIntro: "Use a predictable path from selected work to individual project stories, with useful ways to explore the work without burying the strongest examples.",
    structure: [
      { label: "01", title: "Selected work", copy: "A first impression built from projects that represent your practice." },
      { label: "02", title: "Portfolio categories", copy: "Clear groupings for relevant project types, sectors or spaces." },
      { label: "03", title: "Project preview", copy: "A distinct image and concise title that invites visitors to explore." },
      { label: "04", title: "Project story", copy: "A focused page with context, scope, decisions and supporting images." },
      { label: "05", title: "Related service", copy: "A relevant next step for visitors considering similar work." },
      { label: "06", title: "Enquiry", copy: "A direct way to start a conversation about a prospective project." },
    ],
    contentHeading: "Prepare a portfolio that tells a consistent story",
    contentIntro: "The best project set is not necessarily the largest. Review the work you can publish and choose it for relevance, clarity and variety.",
    contentChecklist: ["Select work that reflects the projects and clients you want more of.", "Confirm image rights and permission before publishing each project.", "Use concise project names and accurate categories or locations.", "Keep image dimensions and quality consistent across each portfolio set."],
    faq: [
      { q: "How many projects should an interior design portfolio website show?", a: "There is no fixed number. Start with enough representative projects to show your work clearly, then add more when each one contributes useful variety or context." },
      { q: "Should an interior design portfolio use project categories?", a: "Categories can help when visitors have a clear reason to browse by project type or sector. Keep them limited to distinctions that reflect your actual work." },
      { q: "What makes a project gallery different from a project story?", a: "A gallery helps visitors browse images. A project story adds details such as the brief, scope and design decisions so visitors understand the work behind the images." },
    ],
    relatedLinks: [
      { href: "/services/website-development/interior-designers", label: "Websites for interior designers", keyword: "website design for interior designers" },
      { href: "/services/website-development/guides/interior-design-project-pages", label: "Project story pages", keyword: "interior design project case study pages" },
      { href: "/services/website-development", label: "Complete website service", keyword: "interior design website development" },
    ],
  },
  {
    slug: "interior-design-project-pages",
    label: "Interior design project stories",
    icon: "compass",
    focusKeyword: "interior design project case study pages",
    title: "Interior Design Project Pages & Case Studies | Intorza",
    description: "Structure interior design project pages with the brief, scope, design decisions and imagery that help visitors understand the finished space.",
    keywords: ["interior design project pages", "interior design case study website", "interior design project portfolio page", "interior project story"],
    eyebrow: "Project storytelling for design websites",
    intro: "Interior design project pages turn a portfolio image into a fuller account of the work. Give each selected project a clear brief, useful scope, design decisions and a carefully ordered image story.",
    ctaTitle: "Give every featured project context worth exploring.",
    pointOfView: "A case study should answer the questions a striking photograph cannot: what was the brief, what did your team do, and which decisions shaped the space? Keep each story concise and accurate. Use details that demonstrate your thinking without presenting confidential client information or claiming work beyond your contribution.",
    prioritiesHeading: "Build a repeatable project story",
    priorities: [
      { title: "Set the scene", copy: "Introduce the project type, location where approved and brief. Give a reader enough context to understand the space before the gallery begins." },
      { title: "Explain your contribution", copy: "Describe the scope and role your practice handled. Credit collaborators and distinguish your work from the contributions of others." },
      { title: "Show the design decisions", copy: "Highlight a few meaningful choices in layout, material, lighting or detailing that explain how the project responded to its brief." },
      { title: "Sequence images with purpose", copy: "Move from an overview to supporting views and details. Captions can add useful context without repeating what the image already shows." },
    ],
    structureHeading: "A clear framework for interior design case studies",
    structureIntro: "A consistent framework helps readers move between projects while leaving room for each story to focus on what made it distinct.",
    structure: [
      { label: "01", title: "Project overview", copy: "Name, project type and approved location or completion details." },
      { label: "02", title: "The brief", copy: "The client need or design challenge that framed the work." },
      { label: "03", title: "Scope and role", copy: "The services and contribution your practice provided." },
      { label: "04", title: "Key decisions", copy: "The design choices that shaped how the space works and feels." },
      { label: "05", title: "Image story", copy: "A considered sequence of completed project photos and captions." },
      { label: "06", title: "Related work and enquiry", copy: "A relevant next project to browse and an invitation to get in touch." },
    ],
    contentHeading: "Use accurate project details and approved imagery",
    contentIntro: "Project pages can be persuasive because they are specific. Confirm the facts, credits and permissions before a case study goes live.",
    contentChecklist: ["Check client approval and usage rights for project photographs.", "Verify dates, location, scope and any public project facts.", "Describe your role and collaborator contributions accurately.", "Avoid publishing private client details or confidential project information."],
    faq: [
      { q: "What should an interior design project page include?", a: "A concise brief, project type, your role and scope, a few meaningful design decisions and a well-ordered set of approved images are a useful foundation." },
      { q: "Do project case studies need long articles?", a: "No. The story should include enough context to make the work understandable. Concise, specific details are more useful than length for its own sake." },
      { q: "Can project pages help visitors find related services?", a: "Yes. Link a project to the service it illustrates and provide a clear enquiry route for visitors considering similar work." },
    ],
    relatedLinks: [
      { href: "/services/website-development/guides/interior-design-portfolio", label: "Interior design portfolios", keyword: "interior design portfolio website" },
      { href: "/services/website-development/interior-designers", label: "Websites for interior designers", keyword: "website design for interior designers" },
      { href: "/services/website-development", label: "Complete website service", keyword: "interior design website development" },
    ],
  },
  {
    slug: "interior-design-service-pages",
    label: "Interior design service pages",
    icon: "palette",
    focusKeyword: "interior design service pages",
    title: "Interior Design Website Service Pages | Intorza",
    description: "Plan clear interior design service pages that explain your offer, the projects you take on and the next step for prospective clients.",
    keywords: ["interior design service pages", "interior design website services", "interior designer services page", "interior design website structure"],
    eyebrow: "Service page planning for design practices",
    intro: "Interior design service pages help prospective clients see whether your practice is suited to their project. Explain what you offer, who it is for, what is included and how the first conversation works.",
    ctaTitle: "Make your services clear before the first enquiry.",
    pointOfView: "A list of service names rarely answers a client’s real questions. Well-planned pages set expectations, explain the stages or scope you support and show relevant work. Keep each page tied to services your practice genuinely provides; clarity helps both visitors and your team avoid mismatched enquiries.",
    prioritiesHeading: "Explain the offer without making visitors guess",
    priorities: [
      { title: "Name the right client or project", copy: "Describe who a service suits and what kind of project it addresses, using language your clients recognize." },
      { title: "Set out what is included", copy: "Outline the work or stages covered. State what depends on project scope or a separate agreement instead of implying every engagement is identical." },
      { title: "Connect the service to real work", copy: "Link to relevant portfolio examples that demonstrate the service. Make sure the project genuinely represents the offer being described." },
      { title: "Answer the next question", copy: "Explain the first step, useful information to share and how a prospective client can contact your practice." },
    ],
    structureHeading: "A practical structure for an interior design service page",
    structureIntro: "Give each service page a clear role in the overall site and avoid creating near-duplicate pages for slight keyword variations.",
    structure: [
      { label: "01", title: "Service overview", copy: "A direct explanation of the service and the projects it fits." },
      { label: "02", title: "What is included", copy: "The stages, deliverables or boundaries relevant to the service." },
      { label: "03", title: "How the work starts", copy: "The information or conversation that helps scope a project." },
      { label: "04", title: "Related projects", copy: "Examples that show this service in real completed work." },
      { label: "05", title: "Common questions", copy: "Short answers to practical questions clients often raise." },
      { label: "06", title: "Contact", copy: "A clear invitation to discuss a project that fits the service." },
    ],
    contentHeading: "Keep service information specific and current",
    contentIntro: "Good service copy is grounded in how your practice operates. Review each page whenever your offer or project criteria change.",
    contentChecklist: ["List only services your practice currently offers.", "Describe scope and inclusions in terms your team can consistently support.", "Use examples that genuinely relate to the service.", "Check that contact prompts ask for the information needed to assess a fit."],
    faq: [
      { q: "Should every interior design service have its own page?", a: "Give a service its own page when it has a distinct audience, scope or useful information. Combine closely related services when separate pages would repeat the same content." },
      { q: "What makes an interior design service page useful?", a: "It explains who the service is for, what it covers, how a project begins and where to see relevant examples or make an enquiry." },
      { q: "Should service pages include prices?", a: "That depends on how your practice scopes work. If pricing varies, explain the factors that shape a quote rather than publishing a figure that may mislead." },
    ],
    relatedLinks: [
      { href: "/services/website-development/interior-designers", label: "Websites for interior designers", keyword: "website design for interior designers" },
      { href: "/services/website-development/guides/interior-design-portfolio", label: "Portfolio planning", keyword: "interior design portfolio website" },
      { href: "/services/website-development/guides/interior-website-enquiry-flow", label: "Enquiry flow planning", keyword: "interior design website enquiry form" },
    ],
  },
  {
    slug: "interior-website-enquiry-flow",
    label: "Interior website enquiry journeys",
    icon: "workflow",
    focusKeyword: "interior design website enquiry form",
    title: "Interior Design Website Enquiry Forms & Contact Flow | Intorza",
    description: "Plan an interior design website enquiry flow with clear contact options and useful project questions for a better first conversation.",
    keywords: ["interior design website enquiry form", "interior designer website contact page", "interior design website lead form", "interior design website contact flow"],
    eyebrow: "A clearer route from interest to conversation",
    intro: "An interior design website enquiry form should make it straightforward for a prospective client to get in touch and help your team understand the project. Plan the contact path around the questions that make an initial conversation useful.",
    ctaTitle: "Make the next step feel simple and considered.",
    pointOfView: "A visitor may be ready to talk after seeing a relevant project or service. Keep contact options close to that context, ask only for useful information and explain what happens after someone submits an enquiry. The goal is a clear first conversation, not a longer form or a promise that every visitor will become a lead.",
    prioritiesHeading: "Design a contact path that respects the visitor’s time",
    priorities: [
      { title: "Place calls to action in context", copy: "Link from relevant services and project stories instead of making every visitor return to the top or search for a contact page." },
      { title: "Ask for useful project details", copy: "Consider project type, location, scope and timing. Keep questions limited to what helps your team respond appropriately." },
      { title: "Offer a familiar way to connect", copy: "Use a contact form alongside phone, email or WhatsApp when those channels suit your process and are actively monitored." },
      { title: "Explain what happens next", copy: "Set an honest expectation for how your team handles an enquiry. Avoid promising response times unless you can consistently meet them." },
    ],
    structureHeading: "A calm, clear path to an interior project enquiry",
    structureIntro: "Visitors should understand how to reach you from the work they are viewing and what information will help move the conversation forward.",
    structure: [
      { label: "01", title: "Relevant project or service", copy: "Give visitors enough context to recognize that your practice fits their need." },
      { label: "02", title: "Clear invitation", copy: "Use a direct action such as discuss a project or ask about this service." },
      { label: "03", title: "Short enquiry form", copy: "Collect contact details and a few project facts that help qualify the request." },
      { label: "04", title: "Other contact options", copy: "Offer phone, email or WhatsApp when they match your team's workflow." },
      { label: "05", title: "Confirmation", copy: "A clear thank-you message confirms the enquiry was received." },
      { label: "06", title: "Follow-up process", copy: "Explain the next step in a way the business can reliably deliver." },
    ],
    contentHeading: "Choose form questions that help you respond",
    contentIntro: "A short form can gather enough context without asking visitors to prepare a full brief before making contact.",
    contentChecklist: ["Keep essential contact fields clear and easy to complete.", "Ask for project type, location and approximate timing where relevant.", "Make optional questions visibly optional.", "Show a confirmation after submission and explain the expected next step accurately."],
    faq: [
      { q: "What should an interior design website enquiry form ask?", a: "Start with contact details and a short message or project summary. Project type, location and timing can help your team assess the request; only ask for details you will use." },
      { q: "Should a website offer WhatsApp as well as a form?", a: "It can, if WhatsApp fits your communication process and your team monitors it. Keep the form available for people who prefer to share project details in writing." },
      { q: "How can a contact page set expectations?", a: "Explain what information is useful and what your team typically does next. Avoid guarantees about response times unless your process can reliably support them." },
    ],
    relatedLinks: [
      { href: "/services/website-development/guides/interior-design-service-pages", label: "Service page planning", keyword: "interior design service pages" },
      { href: "/services/website-development/interior-designers", label: "Websites for interior designers", keyword: "website design for interior designers" },
      { href: "/services/website-development", label: "Complete website service", keyword: "interior design website development" },
    ],
  },
];

export function getWebsiteFocusPage(slug: string) {
  return websiteFocusPages.find((page) => page.slug === slug);
}

export function websiteFocusPath(slug: string) {
  return `/services/website-development/guides/${slug}`;
}
