export type ThreeDRenderingAudience = {
  slug: string;
  label: string;
  keyword: string;
  title: string;
  description: string;
  intro: string;
  visual: "designer-board" | "studio-queue" | "architect-plan" | "firm-portfolio" | "contractor-sequence" | "company-capacity";
  visualCaption: string;
  approachHeading: string;
  approach: string;
  priorities: Array<{ title: string; copy: string }>;
  inputs: string[];
  workflow: Array<{ title: string; copy: string }>;
  faqs: Array<{ q: string; a: string }>;
  related: Array<{ href: string; label: string; keyword: string }>;
};

export const threeDRenderingAudiences: ThreeDRenderingAudience[] = [
  {
    slug: "interior-designers",
    label: "Interior designers",
    keyword: "3D rendering for interior designers",
    title: "3D Rendering for Interior Designers | Intorza",
    description: "3D interior rendering for designers: present layouts, materials and design ideas in clear client-ready views, with project scope agreed in advance.",
    intro: "3D rendering for interior designers helps make a proposed room easier to discuss with a client. Share your layout, design direction and material references; Intorza provides visualization support that fits your presentation and project scope.",
    visual: "designer-board",
    visualCaption: "Material direction / illustrative concept",
    approachHeading: "Keep the design direction yours",
    approach: "You lead the client relationship and set the design intent. Intorza works from the information you provide to prepare visual views for discussion. This makes the service useful when a client needs a clearer picture of layout, finishes or atmosphere before execution begins.",
    priorities: [
      { title: "Translate your design intent", copy: "Share the layout, key furniture, material choices and lighting direction you want the visualization to communicate." },
      { title: "Present options clearly", copy: "Use agreed views to compare finish or color directions during a design discussion. The number and scope of views are confirmed per project." },
      { title: "Support client reviews", copy: "Add a visual reference to a proposal or review meeting while keeping design decisions and client approvals within your process." },
      { title: "Keep ownership of the relationship", copy: "Intorza provides behind-the-scenes visualization support. Your studio remains the client’s design partner." },
    ],
    inputs: ["Floor plan with dimensions where available", "Furniture or joinery layout", "Material and color references", "Lighting or mood direction", "Notes on the views needed"],
    workflow: [
      { title: "Brief", copy: "Share the space, layout and intended client use for the views." },
      { title: "Align", copy: "Confirm the inputs, scope and review expectations." },
      { title: "Visualize", copy: "Prepare the agreed 3D interior views for your review." },
      { title: "Present", copy: "Use the final files in your client discussion or project presentation." },
    ],
    faqs: [
      { q: "Can an interior designer provide their own materials and furniture references?", a: "Yes. Share the references, selections and design notes that should guide the visualization. We confirm what can be represented from the information provided." },
      { q: "Can 3D rendering help me present more than one design option?", a: "The project can include agreed alternatives where the scope and inputs support them. The number of options should be confirmed before work begins." },
      { q: "Will Intorza contact my client directly?", a: "The service is positioned as behind-the-scenes support for your practice. Any client-facing coordination can be discussed as part of the project arrangement." },
    ],
    related: [
      { href: "/services/3d-interior-rendering", label: "Full 3D rendering service", keyword: "3D interior rendering services" },
      { href: "/services/3d-interior-rendering/interior-design-studios", label: "For interior design studios", keyword: "3D rendering for design studios" },
      { href: "/services/3d-interior-rendering/interior-contractors", label: "For interior contractors", keyword: "interior contractor visualization" },
    ],
  },
  {
    slug: "interior-design-studios",
    label: "Interior design studios",
    keyword: "3D rendering for interior design studios",
    title: "3D Rendering for Interior Design Studios | Intorza",
    description: "Flexible 3D visualization support for interior design studios that need additional rendering capacity across active projects.",
    intro: "3D rendering for interior design studios can add visualization capacity when several projects need presentation views at once. Intorza works from your studio’s brief and references to support selected rooms or project stages, with scope and review steps agreed for each assignment.",
    visual: "studio-queue",
    visualCaption: "Studio workflow / illustrative project board",
    approachHeading: "Extend capacity while keeping your studio’s voice",
    approach: "A studio may have its own design standards, client expectations and review process. Share the relevant guidance at the start so the visualization brief has a clear direction. Your team keeps control of project decisions and client communication.",
    priorities: [
      { title: "Support several workstreams", copy: "Discuss which rooms or projects need visualization support and how the work fits your active schedule." },
      { title: "Share studio references", copy: "Provide visual references, material notes and presentation preferences that help communicate your intended direction." },
      { title: "Keep reviews organized", copy: "Agree who consolidates feedback and what the review scope covers before views are prepared." },
      { title: "Maintain continuity", copy: "For multi-room work, share the design rules and material direction that should carry between spaces." },
    ],
    inputs: ["Project list and priority rooms", "Studio visual references or guidelines", "Plans, elevations or sketches", "Material schedules and finish notes", "Review contact and feedback process"],
    workflow: [
      { title: "Prioritize", copy: "Identify the projects, spaces and presentation needs." },
      { title: "Brief", copy: "Share the studio direction and project information." },
      { title: "Review", copy: "Consolidate comments through the agreed studio contact." },
      { title: "Deliver", copy: "Receive the completed files in the agreed format." },
    ],
    faqs: [
      { q: "Can Intorza support multiple studio projects?", a: "You can discuss several projects or spaces with us. Capacity, timing and scope are confirmed after reviewing the requirements." },
      { q: "Can we share our studio’s material and presentation standards?", a: "Yes. Relevant references and guidelines can be included in the project brief so expectations are clear." },
      { q: "How should a studio handle feedback?", a: "It helps to choose one person to consolidate feedback and confirm the agreed review scope before visualization begins." },
    ],
    related: [
      { href: "/services/3d-interior-rendering", label: "Full 3D rendering service", keyword: "3D interior rendering services" },
      { href: "/services/3d-interior-rendering/interior-designers", label: "For interior designers", keyword: "3D rendering for interior designers" },
      { href: "/services/3d-interior-rendering/architecture-firms", label: "For architecture firms", keyword: "architectural visualization services" },
    ],
  },
  {
    slug: "architects",
    label: "Architects",
    keyword: "3D rendering for architects",
    title: "3D Rendering for Architects | Intorza",
    description: "Architectural and interior visualization support for architects, based on project drawings, design intent and the agreed presentation scope.",
    intro: "3D rendering for architects can help communicate spatial ideas alongside plans and drawings. Intorza supports suitable interior and architectural visualization briefs using available project information, with project status, scope and intended use made clear.",
    visual: "architect-plan",
    visualCaption: "Plan + section study / illustrative concept",
    approachHeading: "Keep the drawings, status and scope in context",
    approach: "A visualization should reflect the design information available and the stage of a project. Identify whether views represent a concept, proposal or approved design, and confirm the practice’s role and the intended audience for each presentation.",
    priorities: [
      { title: "Work from the available drawings", copy: "Share plans, elevations, sections, dimensions and notes that explain the space and design intent." },
      { title: "Clarify project stage", copy: "State whether the views are for concept exploration, client discussion or another agreed project purpose." },
      { title: "Show spatial relationships", copy: "Use selected viewpoints to discuss circulation, openings, built-ins, light and material relationships." },
      { title: "Label the work accurately", copy: "Present visualizations as representations of the supplied design information, not as a guarantee of final construction conditions." },
    ],
    inputs: ["Plans, sections and elevations", "Dimensions and opening positions", "Design intent and project status", "Material, lighting or reference notes", "Required viewpoints and presentation use"],
    workflow: [
      { title: "Define the stage", copy: "Explain what the visualization should help communicate." },
      { title: "Review the drawings", copy: "Share available dimensions, views and relevant project notes." },
      { title: "Develop views", copy: "Prepare the agreed perspectives for review." },
      { title: "Confirm presentation", copy: "Use approved files with context appropriate to the project stage." },
    ],
    faqs: [
      { q: "Can architects request interior and architectural visualization?", a: "Yes. Suitable interior or architectural views can be discussed based on project information, scope and presentation needs." },
      { q: "What if some dimensions or design decisions are still open?", a: "Flag unresolved items in the brief. We can confirm which views are practical from the available information and what assumptions need review." },
      { q: "Can a render represent a proposed design?", a: "Yes, when its proposed status is clearly communicated and the visualization is based on the supplied design information." },
    ],
    related: [
      { href: "/services/3d-interior-rendering", label: "Full 3D rendering service", keyword: "3D interior rendering services" },
      { href: "/services/3d-interior-rendering/architecture-firms", label: "For architecture firms", keyword: "architectural visualization services" },
      { href: "/services/3d-interior-rendering/interior-companies", label: "For interior companies", keyword: "3D visualization partner" },
    ],
  },
  {
    slug: "architecture-firms",
    label: "Architecture firms",
    keyword: "architectural visualization services for firms",
    title: "Architectural Visualization Services for Firms | Intorza",
    description: "Additional architectural visualization capacity for firms preparing interior and project views from approved drawings and design references.",
    intro: "Architecture firms may need additional rendering capacity for selected projects, views or stages. Intorza provides visualization support for suitable briefs, using your firm’s project information and the presentation requirements agreed at the outset.",
    visual: "firm-portfolio",
    visualCaption: "Project presentation set / illustrative layout",
    approachHeading: "Add visualization capacity to a defined project brief",
    approach: "A clear brief helps an external visualization partner understand which views are needed, what the images should communicate and how they will be presented. Your firm retains control over the design, approvals and client relationship.",
    priorities: [
      { title: "Scope the requested views", copy: "List project areas, viewpoints, detail level and how the final files will be used." },
      { title: "Coordinate project information", copy: "Share the current drawings, references and notes that are approved for the assignment." },
      { title: "Protect project context", copy: "Identify confidentiality requirements, image permissions and any publication restrictions." },
      { title: "Agree review responsibilities", copy: "Select a firm contact to consolidate comments and confirm scope-related decisions." },
    ],
    inputs: ["Current approved drawings", "View list and project priorities", "Materials, lighting and reference imagery", "Presentation format or image dimensions", "Confidentiality and publication requirements"],
    workflow: [
      { title: "Scope", copy: "Confirm the project, views and intended presentation." },
      { title: "Coordinate", copy: "Provide approved source files and project references." },
      { title: "Review", copy: "Route consolidated feedback through the agreed contact." },
      { title: "Handover", copy: "Receive project files in the agreed format and usage context." },
    ],
    faqs: [
      { q: "Can an architecture firm outsource selected rendering work?", a: "Yes. Intorza can discuss visualization support for selected projects or views. Capacity and scope are confirmed for each request." },
      { q: "Can we provide firm standards or a reference style?", a: "Yes. Share relevant approved examples, materials and presentation guidance as part of the brief." },
      { q: "How should firms handle confidential project materials?", a: "Identify confidentiality and publication restrictions before sharing source files so the project arrangement can account for them." },
    ],
    related: [
      { href: "/services/3d-interior-rendering", label: "Full 3D rendering service", keyword: "3D interior rendering services" },
      { href: "/services/3d-interior-rendering/architects", label: "For architects", keyword: "3D rendering for architects" },
      { href: "/services/3d-interior-rendering/interior-design-studios", label: "For interior studios", keyword: "3D rendering for design studios" },
    ],
  },
  {
    slug: "interior-contractors",
    label: "Interior contractors",
    keyword: "3D visualization for interior contractors",
    title: "3D Visualization for Interior Contractors | Intorza",
    description: "Interior visualization support for contractors presenting proposed layouts, finishes and project scope to clients before execution.",
    intro: "3D visualization for interior contractors can give clients a clearer view of a proposed space before work begins. Share the available layout, scope and finish direction so the requested views support a practical project conversation.",
    visual: "contractor-sequence",
    visualCaption: "Scope / visualization / discussion",
    approachHeading: "Make the proposed scope easier to discuss",
    approach: "Rendered views can support a conversation about layout, finishes and design direction. They should be presented with the agreed scope and understood as visual references, not as a substitute for project specifications or site verification.",
    priorities: [
      { title: "Explain the proposed work", copy: "Identify the rooms, elements and scope that the visualization should show." },
      { title: "Clarify existing conditions", copy: "Share available site photos, measurements or drawings and note what still needs verification." },
      { title: "Review finish choices", copy: "Provide material and color references for the elements that matter to the client discussion." },
      { title: "Keep expectations clear", copy: "Explain that visualizations support review and do not guarantee exact as-built conditions." },
    ],
    inputs: ["Existing layout or site measurements", "Scope of proposed work", "Finish and material preferences", "Site photographs where available", "Views needed for the client discussion"],
    workflow: [
      { title: "Describe the work", copy: "List rooms, elements and project scope to be visualized." },
      { title: "Share references", copy: "Provide layouts, measurements and finish direction." },
      { title: "Review the views", copy: "Check that the visuals communicate the intended proposal." },
      { title: "Discuss with the client", copy: "Use final files as references alongside project details." },
    ],
    faqs: [
      { q: "Can contractors use 3D visuals before starting interior work?", a: "Yes. Visualizations can support discussions about proposed layouts and finishes before execution, alongside project specifications and site checks." },
      { q: "Do renders confirm exact site dimensions?", a: "No. Visuals rely on supplied information and do not replace site measurement or construction documentation." },
      { q: "Can the images be included in a project proposal?", a: "The agreed files can be used for client presentations or proposals within the project’s agreed usage and scope." },
    ],
    related: [
      { href: "/services/3d-interior-rendering", label: "Full 3D rendering service", keyword: "3D interior rendering services" },
      { href: "/services/3d-interior-rendering/interior-designers", label: "For interior designers", keyword: "3D rendering for interior designers" },
      { href: "/services/3d-interior-rendering/interior-companies", label: "For interior companies", keyword: "3D visualization partner" },
    ],
  },
  {
    slug: "interior-companies",
    label: "Interior companies",
    keyword: "3D visualization partner for interior companies",
    title: "3D Visualization Partner for Interior Companies | Intorza",
    description: "Use Intorza as an external 3D visualization partner for interior projects, with project inputs, scope and review responsibilities agreed clearly.",
    intro: "Interior companies managing multiple projects may need an external visualization partner for selected rooms or presentations. Intorza works from the project inputs and business requirements you share, with scope, review responsibilities and file use clarified for each request.",
    visual: "company-capacity",
    visualCaption: "Project capacity / illustrative workboard",
    approachHeading: "Support a growing project pipeline without losing context",
    approach: "A repeatable brief makes it easier to coordinate visualization across teams and projects. Identify priorities, source files, project contacts and review steps so external support can fit into your existing way of working.",
    priorities: [
      { title: "Organize project requests", copy: "Group requests by project, room and priority so the required views are clear." },
      { title: "Set a consistent brief", copy: "Use a shared checklist for drawings, design references, usage and approval contacts." },
      { title: "Coordinate reviews", copy: "Identify who can approve the visual direction and consolidate comments for each project." },
      { title: "Keep business relationships yours", copy: "Use Intorza as an external support partner while your company manages clients and project delivery." },
    ],
    inputs: ["Project or room request list", "Shared drawing and reference standards", "Internal project contacts", "Review and approval roles", "Required file formats and intended use"],
    workflow: [
      { title: "Plan", copy: "Identify priority projects, spaces and presentation needs." },
      { title: "Brief", copy: "Share source information through the agreed project contact." },
      { title: "Coordinate", copy: "Review feedback and project status with your team." },
      { title: "Deliver", copy: "Receive each completed set in its agreed format." },
    ],
    faqs: [
      { q: "Can interior companies use Intorza as an ongoing visualization partner?", a: "You can discuss support for repeat or multiple projects. Capacity, scope and working arrangements need to be confirmed based on your needs." },
      { q: "Can we standardize how project briefs are submitted?", a: "Yes. A shared intake checklist can help your team provide consistent drawings, references, contacts and intended use for each request." },
      { q: "Who manages client communication?", a: "The service is intended to support your business behind the scenes. Your company retains its client relationship and project decisions." },
    ],
    related: [
      { href: "/services/3d-interior-rendering", label: "Full 3D rendering service", keyword: "3D interior rendering services" },
      { href: "/services/3d-interior-rendering/interior-design-studios", label: "For interior studios", keyword: "3D rendering for design studios" },
      { href: "/services/3d-interior-rendering/architecture-firms", label: "For architecture firms", keyword: "architectural visualization services" },
    ],
  },
];

export function threeDRenderingAudiencePath(slug: string) {
  return `/services/3d-interior-rendering/${slug}`;
}

export function getThreeDRenderingAudience(slug: string) {
  return threeDRenderingAudiences.find((item) => item.slug === slug);
}
