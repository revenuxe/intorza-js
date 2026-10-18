import { PRO_MONTHLY_PRICE } from "@/lib/site";
export const quotationFaqs = [
  {
    q: "What is an interior quotation tool?",
    a: "An interior quotation tool helps designers and contractors prepare an itemized price proposal for a project. It brings client details, room-wise work items, material specifications, quantities, rates and totals into one document that can be shared for review.",
  },
  {
    q: "What should I include in an interior design quotation?",
    a: "Include the client and site details, quotation date, scope of work, room-wise items, material specifications, units, quantities, rates, applicable taxes, exclusions, payment milestones and validity. Clear specifications help the client understand what each price includes.",
  },
  {
    q: "Can I download my interior quotation as a PDF?",
    a: "Yes. Intorza lets you prepare a quotation and export a professional PDF for your client. Review the scope, quantities, rates and terms before sharing the final document.",
  },
  {
    q: "How is an interior quotation different from a cost estimate?",
    a: "A cost estimate is an early budget based on assumptions. A quotation sets out the proposed price for a defined scope. Use a cost calculator while planning, then prepare a detailed quotation once measurements, materials and deliverables are clear.",
  },
  {
    q: "Can I prepare quotations for modular kitchens and wardrobes?",
    a: "Yes. Organize the kitchen, wardrobes and other rooms into separate work items, with the relevant specifications, units, quantities and rates. Include hardware, finishes and installation assumptions so the client can compare the scope clearly.",
  },
  {
    q: "How much does Intorza Pro cost?",
    a: `The Pro plan displayed on this page costs INR ${PRO_MONTHLY_PRICE} per month. It includes unlimited quotations, advanced invoicing and team collaboration. Review the current plan details in the app before subscribing.`,
  },
  {
    q: "Can I generate an invoice after a quotation is accepted?",
    a: "Yes. Intorza connects accepted quotations with invoicing so you can keep the agreed project scope, billed amount and payment tracking in the same workflow.",
  },
];

export const quotationShowcases = [
  {
    image: "/quotation-preview.webp",
    tag: "Quotation Builder",
    title: "Turn a project scope into an itemized interior quotation",
    description:
      "Put client details, work descriptions, quantities and rates into a structured proposal. Make it clear what you are quoting for each room, rather than sending a single unexplained project total.",
    points: [
      "Detailed work descriptions",
      "Quantities and unit rates",
      "Calculated totals and taxes",
      "Professional PDF export",
    ],
    ctaText: "Build an Interior Quotation",
    colorClass: "bg-intorza-green/20",
  },
  {
    image: "/my-quotation-preview.webp",
    tag: "Quotation Tracking",
    title: "Keep quotation revisions and decisions organized",
    description:
      "Find your proposals in one place, edit the details as the scope changes, and track whether a quotation is pending, accepted or rejected. Review the agreed version before moving the project forward.",
    points: [
      "Central quotation list",
      "Editable project details",
      "Pending and accepted status",
      "Downloadable client documents",
    ],
    ctaText: "Manage My Quotations",
    colorClass: "bg-secondary/10",
    reverse: true,
  },
  {
    image: "/site-measurement-preview.webp",
    tag: "Site Measurements",
    title: "Start the quotation with a clearer view of the site",
    description:
      "Keep measurements and project information organized before pricing the work. A room-by-room scope helps you separate carpentry, ceilings, finishes and installation assumptions.",
    points: [
      "Organized measurement projects",
      "Site and location details",
      "Team assignments",
      "Track measurement progress",
    ],
    ctaText: "Organize Site Measurements",
    colorClass: "bg-primary/10",
  },
  {
    image: "/clients-preview.webp",
    tag: "Client Records",
    title: "Connect each proposal to the right client",
    description:
      "Keep customer details, project history and billing context together. When a client asks about an earlier quotation, start with their existing record instead of searching through disconnected files.",
    points: [
      "Saved client information",
      "Project history",
      "Billing context",
      "Outstanding amount tracking",
    ],
    ctaText: "Manage Client Details",
    colorClass: "bg-teal-500/10",
    reverse: true,
  },
  {
    image: "/invoice-preview.webp",
    tag: "Quotation to Invoice",
    title: "Move from an accepted quotation to invoicing",
    description:
      "Keep the next stage of the project connected to the proposal the client accepted. Generate invoices and track payments without losing sight of the original quotation.",
    points: [
      "Accepted quotation workflow",
      "Invoice generation",
      "Partial payment tracking",
      "Outstanding balance visibility",
    ],
    ctaText: "Connect Quotations and Invoices",
    colorClass: "bg-intorza-amber/20",
  },
  {
    image: "/my-project-preview.webp",
    tag: "Project Overview",
    title: "See the financial context behind each interior project",
    description:
      "Once the quotation becomes a project, review its associated quotations, invoices and payments together. Keep quoted value and pending amounts visible while work progresses.",
    points: [
      "Associated quotation records",
      "Project financial summary",
      "Payment visibility",
      "Pending amount overview",
    ],
    ctaText: "View My Projects",
    colorClass: "bg-purple-500/10",
    reverse: true,
  },
  {
    image: "/dashboard-preview.webp",
    tag: "Business Dashboard",
    title: "Review quotations alongside your wider business",
    description:
      "Use the dashboard to review quotation activity with your projects and billing. Keep your proposal workflow connected to the rest of your interior design business.",
    points: [
      "Quotation and invoice status",
      "Project overview",
      "Revenue and payment context",
      "Team activity overview",
    ],
    ctaText: "Open the Dashboard",
    colorClass: "bg-blue-500/10",
  },
  {
    image: "/team-preview.webp",
    tag: "Team Collaboration",
    title: "Coordinate the people behind a client-ready proposal",
    description:
      "Organize team members, roles and project assignments in the same workspace. Keep site work and project responsibilities connected as a quotation moves toward execution.",
    points: [
      "Team member records",
      "Project assignments",
      "Roles and permissions",
      "Attendance tracking",
    ],
    ctaText: "Organize My Team",
    colorClass: "bg-rose-500/10",
    reverse: true,
  },
];

export const quotationFeatureCopy: Record<string, { title: string; description: string }> = {
  "Smart Dashboard": {
    title: "Quotation Overview",
    description: "Review proposals alongside projects, invoices and payment activity.",
  },
  "Site Measurement": {
    title: "Measured Project Scope",
    description: "Organize site details before preparing quantities and project rates.",
  },
  "Quotation Builder": {
    title: "Itemized Quotations",
    description: "Prepare clear work descriptions, quantities, rates and totals.",
  },
  "Invoice Management": {
    title: "Connected Invoicing",
    description: "Carry accepted quotation details into the billing workflow.",
  },
  "Client Management": {
    title: "Client Context",
    description: "Keep proposals connected to client details and project history.",
  },
  "Team Collaboration": {
    title: "Team Coordination",
    description: "Manage the people and responsibilities behind each project.",
  },
  "Analytics & Reports": {
    title: "Business Visibility",
    description: "Review quotation status with revenue and project reporting.",
  },
  "Secure & Reliable": {
    title: "Account Access",
    description: "Use account roles and permissions to organize your team's access.",
  },
};
