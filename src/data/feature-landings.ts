export type FeatureLanding = {
  path: string;
  name: string;
  title: string;
  description: string;
  h1: string;
  highlight: string;
  subtitle: string;
  image: string;
  imageAlt: string;
  highlights: Array<{ value: string; label: string }>;
  introTitle: string;
  intro: string[];
  featureTitle: string;
  features: Array<{ title: string; text: string }>;
  guideTitle: string;
  guides: Array<{ title: string; text: string }>;
  workflowTitle: string;
  steps: Array<{ title: string; text: string }>;
  referenceTitle: string;
  referenceIntro: string;
  reference: Array<{ title: string; text: string }>;
  checklistTitle: string;
  checklist: string[];
  faqs: Array<{ q: string; a: string }>;
  pricing: string;
  ctaTitle: string;
  ctaText: string;
  related: Array<{ href: string; title: string; description: string }>;
};

export const dashboardLanding: FeatureLanding = {
  path: "/interior-design-dashboard",
  name: "Business Dashboard",
  title: "Interior Design Business Dashboard | Intorza",
  description:
    "Track interior quotations, converted projects, clients and recorded payments in one business dashboard. Explore Intorza's workflow for designers and contractors.",
  h1: "Interior Design Business Dashboard",
  highlight: "Business Dashboard",
  subtitle:
    "See your interior business overview in one workspace. Review quotations, converted projects, clients, team members and recorded payment totals, then decide which project or client needs attention next.",
  image: "/dashboard-preview.webp",
  imageAlt:
    "Intorza interior business dashboard showing quotation counts, projects, clients and payment summaries",
  highlights: [
    { value: "One view", label: "Business overview" },
    { value: "Connected", label: "Project records" },
  ],
  introTitle: "A clearer overview of your interior design business",
  intro: [
    "An interior studio can have several conversations happening at once: a new quotation awaiting review, an accepted project moving into execution and an invoice waiting for payment. An interior design business dashboard brings the recorded status of that work into a shared overview. It gives owners and project managers a starting point for deciding what to follow up, rather than opening every project before the day begins.",
    "Intorza's dashboard shows total quotations, converted projects, clients and team members alongside revenue, amount collected and amount pending summaries. Quotation and invoice status panels help distinguish proposed work from recorded billing and collections. The value is in seeing those records together and opening the relevant workflow when something needs review. Figures reflect the information entered in your workspace; keeping the underlying records current remains part of the team's routine.",
  ],
  featureTitle: "See the records behind your business performance",
  features: [
    {
      title: "Quotation overview",
      text: "Review quotation counts and the pending, accepted and rejected status summary. Use the quotation list to identify a proposal that needs a client decision or an updated scope.",
    },
    {
      title: "Converted projects",
      text: "See how much work has moved into projects and review the associated project records. Keep proposal follow-up separate from the coordination needed once a client accepts the work.",
    },
    {
      title: "Payment visibility",
      text: "Compare recorded amount collected and amount pending with the invoice status summary. Open the supporting invoice or project before contacting a client about an outstanding balance.",
    },
    {
      title: "Client and team context",
      text: "Review client and team totals alongside the work in progress. These counts provide context for the business overview; individual client records and team assignments explain who is involved.",
    },
  ],
  guideTitle: "Turn the overview into a useful daily review",
  guides: [
    {
      title: "Start with decisions that unblock work",
      text: "Check quotations that still need a decision before treating them as confirmed projects. Agree which person will follow up, what information the client needs and whether the proposed scope is still current. A status panel is useful when it leads to a specific next action. Avoid changing a proposal to accepted simply to clear the pending list; record the decision after the client confirms it.",
    },
    {
      title: "Separate project progress from payment follow-up",
      text: "A project can be active while an invoice is unpaid, and a client payment can be recorded before all work is complete. Review the project and billing records together when planning the next conversation. The dashboard provides a summary, while the detailed record supplies the quotation, invoice and payment context needed to understand the figure.",
    },
    {
      title: "Finish with a record-quality check",
      text: "Before relying on a summary, make sure quotations have the right status, client records are recognizable and payments have been entered against the correct work. Ask the team to update changed details as part of their normal handover. Consistent records make the next review easier and reduce the chance of following up on work that has already moved forward.",
    },
  ],
  workflowTitle: "Build a repeatable dashboard review in four steps",
  steps: [
    {
      title: "Open the business overview",
      text: "Sign in to Intorza and choose Dashboard. Review the quotation, project, client and team totals to establish the current workspace context.",
    },
    {
      title: "Check quotation decisions",
      text: "Look at the pending, accepted and rejected summary. Open the quotation workflow to review any proposal that needs a decision, revision or client follow-up.",
    },
    {
      title: "Review billing records",
      text: "Compare invoice status with the recorded collection and pending totals. Check the supporting details before deciding whether a reminder or correction is needed.",
    },
    {
      title: "Update and follow through",
      text: "Record the result of the review in the relevant workflow. Revisit the overview after updating the source records so the next team member works from the same context.",
    },
  ],
  referenceTitle: "Understand the different questions each summary answers",
  referenceIntro:
    "These summaries support different business decisions. Read the label and open the detailed record rather than treating every figure as the same measure of performance.",
  reference: [
    {
      title: "Quotation status: what has the client decided?",
      text: "Pending, accepted and rejected proposals describe a quotation decision. A proposal total alone does not establish that a client has paid or that installation work is complete.",
    },
    {
      title: "Converted projects: which work has moved forward?",
      text: "The project count gives context about work represented in the project workflow. Review each project's associated records for its scope and financial summary.",
    },
    {
      title: "Invoice status: what is recorded as billed?",
      text: "The invoice summary groups billing records by their recorded status. Review the invoice details and relevant payment entries when answering a client's billing question.",
    },
    {
      title: "Collected and pending amounts: what needs checking?",
      text: "Collection summaries reflect recorded payments and balances. They do not establish a live bank balance, profit calculation or automatic bank reconciliation. Verify entries against your own supporting records.",
    },
  ],
  checklistTitle: "A practical checklist for a reliable business overview",
  checklist: [
    "Use clear client and project names so the team opens the right record.",
    "Update quotation decisions after confirmation and review proposals that have changed scope.",
    "Keep billing and payment entries current before relying on collection summaries.",
    "Check the source record before sending a client reminder or sharing a financial figure.",
    "Use the same review routine across the team so status changes have a consistent meaning.",
  ],
  faqs: [
    {
      q: "What is an interior design business dashboard?",
      a: "It is an overview of the records used to run an interior studio or contracting business. Intorza brings quotations, converted projects, clients, team totals, invoice status and recorded payment summaries into one dashboard so you can decide what to review next.",
    },
    {
      q: "Which business metrics can I see in Intorza?",
      a: "The dashboard shown here includes total quotations, converted projects, total clients and team members. It also displays revenue, amount collected and amount pending summaries, plus quotation and invoice status panels. Open the corresponding detailed records to understand a particular total.",
    },
    {
      q: "Is the dashboard suitable for a small interior studio?",
      a: "A small team can use the overview to review proposal decisions and billing records without first opening every client or project. Start with clear naming and a routine for keeping statuses and payment entries current; those habits make the summaries more useful as work grows.",
    },
    {
      q: "Does the dashboard automatically reconcile bank transactions?",
      a: "This page describes the recorded business overview, not a bank-reconciliation integration. Check your own payment evidence and update the relevant records before relying on collected or pending figures. A dashboard summary should not be treated as a live bank balance or profit statement.",
    },
    {
      q: "Can I manage quotations and invoices alongside the dashboard?",
      a: "Yes. Intorza includes quotation and invoice workflows in the same product workspace. Use the dashboard for an overview, then open the relevant quotation, project, client or invoice area to review the details and take the next action.",
    },
    {
      q: "How do I evaluate whether the dashboard fits my workflow?",
      a: "Use a representative client and project to review the relationship between a quotation, its recorded decision and any associated billing. Ask the team to follow the same status conventions. Contact Intorza if you need help understanding the plan or workflow before adopting it.",
    },
  ],
  pricing:
    "Review Intorza Pro for unlimited quotations, invoicing and team collaboration alongside your business overview. Choose a plan based on the workflows your studio needs; ask our team about any specific requirement before subscribing.",
  ctaTitle: "Give your next project review a clearer starting point",
  ctaText:
    "Open Intorza to explore the dashboard, or talk to our team about connecting your studio's quotation, project and billing workflow.",
  related: [
    {
      href: "/interior-project-management",
      title: "Manage converted interior projects",
      description:
        "Review accepted work alongside quotations, invoices and recorded project totals.",
    },
    {
      href: "/interior-invoice-software",
      title: "Track interior invoices and payments",
      description: "Understand invoice balances, partial payment records and outstanding amounts.",
    },
    {
      href: "/interior-design-crm",
      title: "Organize client and billing records",
      description:
        "Review each client's projects, billed amounts, payments and balance before follow-up.",
    },
    {
      href: "/interior-site-measurement",
      title: "Organize site measurements",
      description:
        "Create site project records, add a location and assign responsibility before preparing a proposal.",
    },
    {
      href: "/interior-quotation",
      title: "Prepare the interior quotation",
      description:
        "Turn a verified scope into an itemized proposal with quantities, rates and client terms.",
    },
    {
      href: "/contact",
      title: "Discuss your studio workflow",
      description: "Ask about dashboard records, plan options and getting started with your team.",
    },
  ],
};

export const siteMeasurementLanding: FeatureLanding = {
  path: "/interior-site-measurement",
  name: "Site Measurement",
  title: "Interior Site Measurement Software & Site Visits | Intorza",
  description:
    "Organize interior site measurement projects, locations and team assignments with Intorza. Follow a practical site visit checklist and prepare a clearer quotation.",
  h1: "Interior Site Measurement Software",
  highlight: "Site Measurement",
  subtitle:
    "Organize interior site visits with a clear project name, site location and responsible team member. Keep measurement work connected to the client brief and use verified site information when preparing your quotation.",
  image: "/site-measurement-preview.webp",
  imageAlt:
    "Intorza site measurement project form with client name, site location and team member assignment",
  highlights: [
    { value: "Site-ready", label: "Project context" },
    { value: "Assigned", label: "Team responsibility" },
  ],
  introTitle: "Organize the site visit before you price the interior work",
  intro: [
    "An interior site measurement visit connects a client's ideas with the space your team will actually work in. For a kitchen, wardrobe, apartment renovation or fit-out, that means confirming the required work, checking dimensions and noting the conditions that affect the scope. A clear site project record helps the person visiting the property understand which client and location the visit belongs to.",
    "Intorza's Site Measurement workflow starts with a client or project name, an optional site location and a team-member assignment. The screen shown here creates the site measurement project so your team has a recognizable record and a responsible person. Use that organizational context alongside a consistent field checklist. The measurement advice below describes checks for your team to carry out on site; the software does not replace physical measurement, professional judgment or a final verification before ordering materials.",
  ],
  featureTitle: "Give every site measurement project a clear starting point",
  features: [
    {
      title: "Recognizable project records",
      text: "Create the measurement project using a client or project name your team can identify. A consistent naming convention helps distinguish repeat visits, different properties and separate work packages.",
    },
    {
      title: "Site location context",
      text: "Add the site address or location to the project setup when available. Confirm the details with the client so the visiting team is working from the correct property information.",
    },
    {
      title: "Team-member assignment",
      text: "Assign the measurement project to a team member instead of leaving responsibility implicit. Confirm who will attend, what they need to check and how findings will be handed over.",
    },
    {
      title: "A connected quotation workflow",
      text: "Use the verified site findings to define the proposal's scope and assumptions. Keep the project context recognizable when moving into Intorza's itemized quotation workflow.",
    },
  ],
  guideTitle: "Plan a useful site visit for each interior work package",
  guides: [
    {
      title: "Modular kitchens and wardrobes",
      text: "Check the dimensions relevant to the proposed cabinetry and note doors, windows, access, service points and obstructions that could affect the arrangement. Confirm finishes and hardware preferences separately from dimensions so the quotation describes both the size and the specification. Recheck critical measurements before fabrication rather than treating a preliminary visit as the final production survey.",
    },
    {
      title: "Apartment renovations and full-home interiors",
      text: "Separate the visit by room and agreed work package. Confirm what the client wants to retain, remove or change, then identify any open decisions that still affect pricing. Distinguish observed site conditions from assumptions in the client's brief. A consistent room-by-room review makes it easier to prepare a proposal that explains inclusions, exclusions and optional upgrades.",
    },
    {
      title: "Handover between the field and office teams",
      text: "Agree how the person visiting the site will communicate measurements, units, open questions and revisions to the quotation team. Check that the information belongs to the correct project and that a revised measurement is clearly distinguished from the earlier value. Review missing details before pricing work that depends on them. Keep supporting field notes in your team's agreed record system.",
    },
  ],
  workflowTitle: "Move from site project setup to a reviewed proposal",
  steps: [
    {
      title: "Create the site project",
      text: "Sign in to Intorza, choose Site Measurement and enter a clear client or project name. Add the optional location when you have confirmed it.",
    },
    {
      title: "Assign responsibility",
      text: "Choose the responsible team member in the project setup. Confirm the visit scope, client access arrangements and the questions that need answers before the visit.",
    },
    {
      title: "Carry out the site checks",
      text: "Measure the relevant spaces with suitable equipment and a consistent unit convention. Check the client's requirements and record unresolved conditions in your field notes.",
    },
    {
      title: "Prepare and review the quotation",
      text: "Use verified dimensions and agreed specifications to prepare the itemized proposal. Recheck quantity units, material assumptions, exclusions and terms before sending it to the client.",
    },
  ],
  referenceTitle: "Keep site measurement, floor plan analysis and budget estimates distinct",
  referenceIntro:
    "These activities help at different stages. Choosing the right starting point makes it easier to explain which details have been verified and which still need review.",
  reference: [
    {
      title: "Site measurement: verify the actual space",
      text: "A physical visit checks the space, dimensions and project conditions. Use Intorza's site project setup to establish the client, location and responsible team member; carry out and verify the measurements on site.",
    },
    {
      title: "AI floor plan analysis: review a drawing-based draft",
      text: "A floor plan can provide a starting point for an AI quotation draft. Drawing quality and available dimensions matter, and the output still needs review against the real property and intended work. It is a separate workflow from organizing a site visit.",
    },
    {
      title: "Cost calculator: explore an early budget",
      text: "An indicative budget helps frame an early discussion before detailed measurements and specifications are final. The calculator's assumptions should not be presented as a measured, project-specific quotation.",
    },
    {
      title: "Interior quotation: price the defined scope",
      text: "A client proposal brings agreed work descriptions, quantities, units, rates and terms together. Prepare it after checking the details that affect the price, and identify any remaining assumptions explicitly.",
    },
  ],
  checklistTitle: "Interior site measurement checklist for your team",
  checklist: [
    "Confirm the client, site address, access arrangements and responsible team member before attending.",
    "List the rooms and work packages included in the visit, and identify work outside the agreed scope.",
    "Use a consistent unit convention and clearly label which dimension belongs to which room or item.",
    "Check relevant openings, service points, obstructions, existing finishes and installation access.",
    "Record client choices and unresolved questions separately from measured dimensions.",
    "Verify critical dimensions and the latest revisions before fabrication, ordering or committing to a final price.",
  ],
  faqs: [
    {
      q: "What does interior site measurement software help organize?",
      a: "It helps establish the project context for interior measurement work. In the Intorza setup shown here, you enter a client or project name, optionally add the site location and assign a team member. Use those records alongside your team's physical measurement and handover routine.",
    },
    {
      q: "Can I assign a site measurement project to a team member?",
      a: "Yes. The site project setup includes an Assign To Member field. Choose the responsible member and agree the visit scope and handover expectations with your team. A clear assignment makes responsibility visible before the visit begins.",
    },
    {
      q: "Does Intorza automatically measure a room with my phone?",
      a: "This page describes site project organization, not a phone-based measuring instrument or an automatic room scan. Use appropriate equipment to take dimensions and verify critical measurements on site. Do not treat a project record or screenshot as a measurement guarantee.",
    },
    {
      q: "Is site measurement the same as AI floor plan analysis?",
      a: "No. Site measurement checks the actual property and its conditions. AI floor plan analysis starts from a drawing to help prepare a quotation draft. The AI output requires review, and it does not remove the need to verify the physical dimensions and agreed scope.",
    },
    {
      q: "What should an interior measurement visit cover?",
      a: "Confirm the rooms and work packages, relevant dimensions and units, openings, service points, obstructions and installation access. Note client decisions and unresolved questions. The exact checks depend on the proposed work; verify critical information before fabrication and final pricing.",
    },
    {
      q: "How do site findings support an interior quotation?",
      a: "Verified dimensions and site conditions help your team define quantities, material requirements, installation assumptions and exclusions. Carry that scope into the quotation, then review units, rates and terms before sharing the proposal. Use the sample quotation format as a document checklist.",
    },
  ],
  pricing:
    "Explore Intorza Pro for your broader quotation, invoicing and team workflow. Review the plan against your studio's requirements and ask our team about any specific site measurement capability before subscribing.",
  ctaTitle: "Start the next site visit with a clear project and owner",
  ctaText:
    "Open Intorza and choose Site Measurement to set up the project. If you need help connecting site visits to your quotation workflow, talk to our team.",
  related: [
    {
      href: "/interior-team-management",
      title: "Coordinate your interior project team",
      description:
        "Connect site responsibilities with project teams, member records and attendance.",
    },
    {
      href: "/interior-project-management",
      title: "Prepare the project handover",
      description:
        "Connect measured scope and accepted proposals with the converted project record.",
    },
    {
      href: "/ai-quotation-builder",
      title: "Explore AI floor plan analysis",
      description:
        "See the separate drawing-based and project-details routes for an editable quotation draft.",
    },
    {
      href: "/interior-quotation-format",
      title: "Review the quotation format",
      description:
        "Check how specifications, quantities, rates and terms come together in a client proposal.",
    },
    {
      href: "/interior-design-dashboard",
      title: "Review the business dashboard",
      description:
        "See recorded quotations, projects, clients and payments in the wider business overview.",
    },
    {
      href: "/interior-cost-calculator",
      title: "Explore an indicative budget",
      description:
        "Use an early budget example before confirming the detailed site scope and specifications.",
    },
  ],
};
