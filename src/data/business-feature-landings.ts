import type { FeatureLanding } from "@/data/feature-landings";

export const quotationManagementLanding: FeatureLanding = {
  path: "/interior-quotation-management",
  name: "Quotation Management",
  title: "Interior Quotation Management & Status Tracking | Intorza",
  description:
    "Manage interior quotations, track pending, accepted and rejected proposals, edit details and export PDFs. Explore Intorza's client follow-up workflow.",
  h1: "Interior Quotation Management Software",
  highlight: "Quotation Management",
  subtitle:
    "Keep your interior proposals organized after the first draft. Review client and project details, edit quotations, export PDFs and record whether each proposal is pending, accepted or rejected.",
  image: "/my-quotation-preview.webp",
  imageAlt:
    "Intorza quotation detail showing client information, pending status, edit, PDF, accept and reject controls",
  highlights: [
    { value: "Clear status", label: "Proposal decisions" },
    { value: "PDF", label: "Reviewed quotations" },
  ],
  introTitle: "Manage the proposal after you create it",
  intro: [
    "Creating an interior quotation is only the first step. A client may ask for a different finish, a reduced scope or a clearer explanation before deciding. Interior quotation management software helps your team keep the proposal and its recorded status together, so a pending decision is easier to distinguish from accepted work. That distinction matters when planning follow-up and preparing the next project handover.",
    "Intorza's My Quotations workflow includes the quotation reference, client information, project details and a status indicator. The screen shown here also provides Edit, PDF, Mark as Accepted and Mark as Rejected controls. Use those tools to maintain the proposal record after review. Update the status after confirming the client's decision and reviewing the agreed scope so the next person opens a useful record.",
  ],
  featureTitle: "Keep each quotation recognizable, reviewable and current",
  features: [
    {
      title: "Proposal context",
      text: "Review the quotation reference alongside the client and project information. Check that you have the correct property and scope before editing or discussing the proposal.",
    },
    {
      title: "Decision tracking",
      text: "Record pending, accepted or rejected status after confirming the client's decision. Use consistent status conventions across the team so the next reviewer understands what has happened.",
    },
    {
      title: "Quotation editing",
      text: "Use Edit to revise the proposal when the agreed details change. Review descriptions, quantities, rates and terms before producing the next client-facing document.",
    },
    {
      title: "PDF export",
      text: "Export a reviewed quotation as a PDF for the client. Check the generated document and make it clear which proposal you are asking the client to consider.",
    },
  ],
  guideTitle: "Build a more useful quotation follow-up routine",
  guides: [
    {
      title: "Follow up with a specific question",
      text: "A pending status becomes useful when it prompts a clear next action. Ask whether the client needs a specification clarified, a particular work package revised or more time to decide. Review the proposal before making contact so the conversation refers to the correct scope and amount. Agree which team member will follow up rather than having several people send conflicting messages.",
    },
    {
      title: "Review changes before sharing another PDF",
      text: "When a client changes the brief, identify which items and assumptions are affected. Check related quantities, rates and terms together rather than changing the final total in isolation. Export the reviewed document and explain what changed in your handover. Use your team's agreed convention to distinguish an earlier shared proposal from the current version.",
    },
    {
      title: "Hand accepted work into the project workflow",
      text: "Before treating a quotation as accepted, check that the recorded scope matches the client's confirmed decision. Make unresolved choices visible to the person taking over the project. An accepted proposal is a useful starting record for the project and billing workflow, while site execution and payment entries remain separate activities that need their own updates.",
    },
  ],
  workflowTitle: "Review, update and record the quotation decision",
  steps: [
    {
      title: "Open the right proposal",
      text: "Choose My Quotations in Intorza and open the relevant record. Confirm the quotation reference, client, project and current status.",
    },
    {
      title: "Review the document",
      text: "Check the proposed work, specifications, quantities and commercial details. Use Edit if the client-approved brief requires a revision.",
    },
    {
      title: "Export the reviewed PDF",
      text: "Generate the client-facing PDF and check it before sharing it through your agreed communication channel. Make the purpose of the document clear.",
    },
    {
      title: "Record the decision",
      text: "Mark the quotation accepted or rejected after confirmation. For accepted work, review the connected project and invoice workflow before the next handover.",
    },
  ],
  referenceTitle: "Keep proposal status separate from execution and billing",
  referenceIntro:
    "A status label answers one question about a proposal. It should not stand in for every event that happens later in the project.",
  reference: [
    {
      title: "Pending: a decision still needs recording",
      text: "Review whether the client is considering the current scope, waiting for a revision or ready to confirm. Do not infer a rejection simply because a proposal has remained pending.",
    },
    {
      title: "Accepted: review the confirmed scope",
      text: "Record acceptance after confirmation and check the supporting proposal details. Review physical delivery and recorded invoice payments in their own workflows after acceptance.",
    },
    {
      title: "Rejected: keep the record understandable",
      text: "Use the recorded decision to distinguish a proposal that is not moving forward. Follow your team's process if the client later requests a different scope or a fresh proposal.",
    },
    {
      title: "Client confirmation: keep the supporting context",
      text: "Agree how the team retains the client's confirmation and any outstanding decisions. Keep the recorded decision and supporting client confirmation consistent as the proposal moves forward.",
    },
  ],
  checklistTitle: "Before updating a quotation's status",
  checklist: [
    "Confirm the quotation reference, client and property.",
    "Check that the reviewed document matches the scope the client considered.",
    "Revisit quantities, specifications and exclusions after a requested change.",
    "Keep the supporting client confirmation in your team's agreed record system.",
    "Review project and billing records separately after marking a quotation accepted.",
  ],
  faqs: [
    {
      q: "What is interior quotation management software?",
      a: "It helps organize proposals after creation, including their client context, details and recorded decisions. Intorza's My Quotations workflow includes status, editing and PDF controls so your team can review the proposal and maintain its record through follow-up.",
    },
    {
      q: "Which quotation statuses are shown in Intorza?",
      a: "The workflow shown here includes pending, accepted and rejected status. Review the proposal and confirm the client's decision before changing its status so other team members can understand what the label represents.",
    },
    {
      q: "Can I edit a quotation and export a PDF?",
      a: "Yes. The quotation screen includes Edit and PDF controls. Review the revised document before sharing it and use a consistent handover convention to distinguish the current proposal from any earlier copy already sent to the client.",
    },
    {
      q: "Does marking a quotation accepted record a payment?",
      a: "No. A quotation decision and a payment entry describe different events. Check the project and invoice records separately when reviewing amounts billed, collected or still outstanding.",
    },
    {
      q: "Does this workflow provide electronic signatures or automatic follow-up?",
      a: "This page describes the recorded quotation status, edit and PDF workflow. It does not establish electronic signatures, automatic email follow-up or automated interpretation of a client's response. Ask Intorza about a specific requirement before relying on it.",
    },
    {
      q: "How is this different from the interior quotation builder?",
      a: "The builder prepares the itemized proposal. Quotation management focuses on what happens after that: reviewing the record, making changes, producing the client document and recording the decision. The two activities belong to the same wider quotation workflow.",
    },
  ],
  pricing:
    "Explore Intorza Pro for unlimited quotations and the wider invoicing and team workflow. Review your proposal volume and requirements, then ask our team about any approval or follow-up capability you need.",
  ctaTitle: "Keep the next proposal decision connected to the right record",
  ctaText:
    "Open Intorza and choose My Quotations to review a proposal, or ask our team about organizing your studio's quotation follow-up.",
  related: [
    {
      href: "/interior-quotation",
      title: "Build the itemized quotation",
      description:
        "Prepare the work descriptions, quantities, rates and terms before sending a proposal.",
    },
    {
      href: "/interior-project-management",
      title: "Review accepted projects",
      description:
        "See how project records bring associated quotations, invoices and financial summaries together.",
    },
    {
      href: "/interior-invoice-software",
      title: "Manage invoices and payments",
      description: "Distinguish a client decision from recorded billing and payment progress.",
    },
    {
      href: "/interior-quotation-format",
      title: "Check a proposal format",
      description: "Use a sample structure to review the document's scope and commercial details.",
    },
  ],
};

export const projectManagementLanding: FeatureLanding = {
  path: "/interior-project-management",
  name: "Project Management",
  title: "Interior Project Management Software | Intorza",
  description:
    "Manage converted interior projects with associated quotations, invoices, measurement context and recorded payment totals. Explore Intorza's project workflow.",
  h1: "Interior Project Management Software",
  highlight: "Project Management",
  subtitle:
    "Review converted interior projects with their client details, associated quotations, invoices and recorded financial summary. Give your team a clear starting point for understanding the agreed work and billing context.",
  image: "/my-project-preview.webp",
  imageAlt:
    "Intorza converted project overview with quotation, invoice and measurement tabs plus collected and pending amounts",
  highlights: [
    { value: "Connected", label: "Project documents" },
    { value: "One record", label: "Client context" },
  ],
  introTitle: "Keep accepted interior work connected to its supporting records",
  intro: [
    "Once an interior quotation moves forward, the team needs more than the final proposal total. They need to recognize the project, understand the client context and find the related records when a question arises. Interior project management software can give that work a consistent place in the business workflow instead of leaving each handover dependent on a separate conversation.",
    "Intorza's My Projects screen shows a converted project with its client and location, tabs for Overview, Quotations, Invoices and Measurement, and a summary of recorded total value, collected and pending amounts. Use the connected record to find the right supporting documents and your delivery handover to agree the next practical action. Check the source records when you need to understand what a total represents for the actual project.",
  ],
  featureTitle: "Review the project through its documents and recorded totals",
  features: [
    {
      title: "Project identity",
      text: "Recognize the project by its name, client and location. Confirm those details before reviewing documents or discussing the next step with the team.",
    },
    {
      title: "Associated quotations",
      text: "Use the project's quotation area to review the proposals linked to the work. Check that the scope you are discussing is represented by the correct quotation.",
    },
    {
      title: "Invoice context",
      text: "Open the related billing records when a payment question arises. Keep an invoice's recorded position distinct from the status of the physical work.",
    },
    {
      title: "Financial overview",
      text: "Review recorded project value, collected and pending totals together. Open the supporting records before relying on a summary or contacting a client about a balance.",
    },
  ],
  guideTitle: "Use a project record to improve the next handover",
  guides: [
    {
      title: "Start the handover with the agreed scope",
      text: "When a proposal becomes a project, review which work was accepted and which choices remain open. Give the receiving team the client and location context as well as the relevant quotation. Identify exclusions and optional upgrades clearly in the supporting proposal. A recognizable project record helps people find that information, while a careful handover explains the decisions behind it.",
    },
    {
      title: "Keep document questions specific",
      text: "If the client asks about a charge or a revised scope, open the associated quotation or invoice rather than answering from the summary alone. Check whether the question concerns proposed work, recorded billing or a payment entry. Keeping those documents connected makes the discussion more focused, but the team still needs to review which record is relevant to the particular question.",
    },
    {
      title: "Review several projects without confusing their balances",
      text: "For studios handling more than one property, establish a naming convention that distinguishes the client, site and work package. Check the individual project record when reviewing a collected or pending amount. Use the business dashboard for a wider overview and return to the project for its supporting detail. Do not treat a client-level total as the balance for every project belonging to that client.",
    },
  ],
  workflowTitle: "Move from an accepted proposal to a clearer project review",
  steps: [
    {
      title: "Confirm the accepted proposal",
      text: "Review the quotation decision and agreed scope before moving the work into your project handover. Make any unresolved client choices explicit.",
    },
    {
      title: "Open the converted project",
      text: "Choose My Projects in Intorza and open the relevant record. Confirm its name, client and location before relying on its summary.",
    },
    {
      title: "Review related records",
      text: "Use the quotation, invoice and measurement areas for the context available for that project. Check the underlying details when something needs clarification.",
    },
    {
      title: "Follow through in the right workflow",
      text: "Update quotation or payment records where appropriate and communicate the next action through your team's agreed process. Revisit the project summary after reviewing the source information.",
    },
  ],
  referenceTitle: "Read project summaries in the right context",
  referenceIntro:
    "The project overview connects several kinds of records. Each supports a different question about the work.",
  reference: [
    {
      title: "Project record: which work are we reviewing?",
      text: "The name, client and location identify the work. Use a clear naming convention for different properties, phases or work packages so your team opens the intended project.",
    },
    {
      title: "Quotation record: what was proposed?",
      text: "The associated proposal describes work items, specifications, quantities and terms. Review the accepted scope and any changes before treating a document as the delivery instruction.",
    },
    {
      title: "Invoice record: what has been billed?",
      text: "The billing record provides the context for an invoiced amount and its recorded payments. A billing status does not describe the completion of every installation task.",
    },
    {
      title: "Overview totals: what do the source records show?",
      text: "The financial summary reflects recorded values and payments. It should not be interpreted as a verified profit figure, bank balance or automatic reconciliation with external accounting records.",
    },
  ],
  checklistTitle: "Before a project review or client handover",
  checklist: [
    "Confirm the correct client, site and project name.",
    "Review which quotation represents the agreed work and identify open choices.",
    "Check associated invoices before answering a billing question.",
    "Verify recorded payments before using collected or pending totals.",
    "Keep delivery responsibilities and any scope changes clear in the team's handover.",
    "Review specific scheduling or reporting requirements with Intorza before adopting a workflow.",
  ],
  faqs: [
    {
      q: "What does Intorza's interior project management workflow show?",
      a: "The project overview shown here includes a converted project, client and location, associated quotation and invoice areas, a measurement tab and recorded total value, collected and pending amounts. Use it to connect the supporting records for a particular project.",
    },
    {
      q: "Can I review quotations and invoices for the same project?",
      a: "Yes. The project screen includes separate Quotations and Invoices tabs. Open the relevant record to review a scope or billing question instead of relying only on the overview total.",
    },
    {
      q: "Does the pending project amount describe unfinished work?",
      a: "A recorded pending financial amount is different from a task-completion status. Review the invoice and payment context for balances, and use your team's delivery process to establish which physical work remains to be completed.",
    },
    {
      q: "Does this page describe a Gantt chart or construction scheduling tool?",
      a: "No. It describes the connected project record demonstrated in the screenshot. Specific scheduling, dependencies, resource planning or advanced reporting requirements should be confirmed with the Intorza team before you rely on them.",
    },
    {
      q: "How should a studio organize multiple interior projects?",
      a: "Use distinct names and check the client and site for each record. Review associated documents at the project level, then use the business dashboard for a broader overview. Consistent naming and handovers reduce confusion between different properties or work packages.",
    },
    {
      q: "Where should I begin before creating a project?",
      a: "Start by confirming the client brief and site information, then prepare and review the quotation. Once the client has confirmed the scope, use the accepted proposal as the context for the project and billing handover.",
    },
  ],
  pricing:
    "Review Intorza Pro for the wider quotation, invoicing and team collaboration workflow. Choose a plan against your actual project-document and coordination requirements, and confirm any specialist scheduling needs with our team.",
  ctaTitle: "Bring the next project conversation back to a clear record",
  ctaText:
    "Open Intorza and review My Projects, or talk to our team about connecting proposals, project context and billing for your studio.",
  related: [
    {
      href: "/interior-quotation-management",
      title: "Review quotation decisions",
      description:
        "Keep proposal status and confirmed scope understandable before the project handover.",
    },
    {
      href: "/interior-invoice-software",
      title: "Review project billing",
      description: "Explore invoice records, payment entries and outstanding balances.",
    },
    {
      href: "/interior-design-crm",
      title: "Keep the client context",
      description: "Review project and billing summaries from the client's perspective.",
    },
    {
      href: "/interior-team-management",
      title: "Organize the project team",
      description: "Connect team members and project assignments to clearer responsibilities.",
    },
  ],
};

export const invoicingLanding: FeatureLanding = {
  path: "/interior-invoice-software",
  name: "Invoicing & Payments",
  title: "Interior Invoice Software & Payment Tracking | Intorza",
  description:
    "Create interior invoices, record partial payments, review outstanding balances and export PDFs with Intorza. Explore the billing workflow for designers and contractors.",
  h1: "Interior Invoice Software",
  highlight: "Invoice Software",
  subtitle:
    "Keep interior project billing clear with invoice records, payment entries and a remaining-balance summary. Review partial payments, preview the invoice and export a PDF from the same workflow.",
  image: "/invoice-preview.webp",
  imageAlt:
    "Intorza interior invoice with Add Payment, Preview and PDF controls plus total, paid and remaining amounts",
  highlights: [
    { value: "Part payments", label: "Recorded collections" },
    { value: "PDF", label: "Reviewed invoices" },
  ],
  introTitle: "Keep the invoice and its payment history in the same conversation",
  intro: [
    "Interior project billing often involves more than one payment. A client may pay an advance and settle later amounts as the agreed work progresses. Interior invoice software helps your team review what was billed, which payments have been recorded and what balance remains. That makes a billing conversation more specific than discussing the quotation total alone.",
    "The Intorza invoice screen shown here includes the invoice reference, client, invoice date and payment status. Its payment summary displays total amount, paid amount and remaining balance, with a progress indicator. Add Payment, Preview and PDF controls support the record and document workflow. Before using a figure in client follow-up, verify the supporting payment evidence and the current project agreement.",
  ],
  featureTitle: "Review billing details before the next payment follow-up",
  features: [
    {
      title: "Invoice identity",
      text: "Use the reference, client and date to identify the correct billing record. Confirm which project and agreed work the invoice relates to before discussing its balance.",
    },
    {
      title: "Partial payment entries",
      text: "Record a payment through the invoice workflow after checking your supporting evidence. Review the amount entered so the paid and remaining figures stay understandable.",
    },
    {
      title: "Remaining balance",
      text: "Review total, paid and remaining amounts together with the status indicator. Open the relevant record before following up on a balance that may already have changed.",
    },
    {
      title: "Preview and PDF",
      text: "Check the invoice preview and export the PDF for the client. Review the billing details and document content before sharing it through your agreed channel.",
    },
  ],
  guideTitle: "Build a consistent interior invoicing routine",
  guides: [
    {
      title: "Start from a clearly agreed billing basis",
      text: "Review the accepted quotation and the billing arrangement with the client before preparing the invoice. Confirm the relevant work, client details and amount to be billed. Keep optional upgrades or revised work distinguishable in the supporting scope. The invoice should be understandable in the context of the agreement, rather than appearing as an unexplained total separate from the project.",
    },
    {
      title: "Record part payments with supporting evidence",
      text: "Check the amount and the invoice to which a payment belongs before entering it. A useful routine distinguishes a promised payment from a payment your team has verified and recorded. Review the resulting paid and remaining amounts after the update. Keep the supporting payment evidence in your team's agreed record system so another person can review the basis for the entry.",
    },
    {
      title: "Make the follow-up about the current balance",
      text: "Before contacting the client, check the latest invoice status and recorded entries. Confirm that the conversation concerns the right invoice and project, especially when a client has more than one property or work package. Explain which amount is still shown as outstanding and review any disagreement against the supporting documents instead of repeating an outdated reminder.",
    },
  ],
  workflowTitle: "Prepare the invoice, record payments and review the balance",
  steps: [
    {
      title: "Review the accepted work",
      text: "Confirm the client, project and agreed scope that support the billing. Check the relevant quotation and terms before creating or reviewing an invoice.",
    },
    {
      title: "Check the invoice details",
      text: "Open the invoice record and review the reference, date, client and total. Preview the document and resolve missing details before sharing the PDF.",
    },
    {
      title: "Add verified payments",
      text: "Use Add Payment when you have checked the supporting payment information. Enter it against the correct invoice and review the resulting summary.",
    },
    {
      title: "Follow up on the current record",
      text: "Use the paid, remaining and status information to guide the next billing review. Check the source entries if the client's understanding differs from the recorded balance.",
    },
  ],
  referenceTitle: "Understand the invoice summary without mixing different records",
  referenceIntro:
    "A clear billing review separates the proposal, invoice and payment entry. Each represents a different part of the project conversation.",
  reference: [
    {
      title: "Quotation: the proposed scope and price",
      text: "The quotation explains the work offered and its assumptions. Its acceptance provides context for billing, but it is not itself a record of payment.",
    },
    {
      title: "Invoice: the amount represented by the billing record",
      text: "Review the invoice details to understand what is being billed. Check any project-specific billing arrangement and applicable tax treatment with the responsible adviser or team member.",
    },
    {
      title: "Payment entry: what your team has recorded",
      text: "An entry updates the payment record for the invoice. Check the supporting evidence before entering it; the displayed figure is not an independently verified bank balance.",
    },
    {
      title: "Remaining amount: the recorded balance to review",
      text: "Read the balance alongside the total, payments and invoice status. If an entry needs correction, resolve it in the record before relying on the summary for client follow-up.",
    },
  ],
  checklistTitle: "Before sharing an interior invoice or payment reminder",
  checklist: [
    "Confirm the client, project, invoice reference and date.",
    "Check that the billed amount is consistent with the agreed scope and billing arrangement.",
    "Review tax details and required document information with the responsible person.",
    "Verify payments against supporting evidence and enter them on the correct invoice.",
    "Preview the PDF before sending it and use the latest recorded balance for follow-up.",
  ],
  faqs: [
    {
      q: "What does interior invoice software help manage?",
      a: "It helps organize the billing record and recorded collections for interior work. Intorza's invoice screen includes a reference, client, date, status, payment summary and controls for adding payments, previewing the invoice and exporting a PDF.",
    },
    {
      q: "Can I record a partial payment against an invoice?",
      a: "Yes. The demonstrated workflow includes Add Payment and a partially paid status, with total, paid and remaining amounts. Check the payment evidence and the correct invoice before entering an amount.",
    },
    {
      q: "Can I preview and export an interior invoice as a PDF?",
      a: "Yes. Preview and PDF controls are shown on the invoice screen. Review the document details before sending the PDF to the client through your agreed communication channel.",
    },
    {
      q: "Does payment tracking automatically collect money from the client?",
      a: "This page describes recorded payment entries and a balance summary. It does not establish an online payment gateway, automatic collection or bank reconciliation. Confirm any payment-processing integration you require with Intorza before relying on it.",
    },
    {
      q: "Does the software decide the correct tax treatment for every invoice?",
      a: "Do not assume a billing tool determines the right tax treatment for every project. Check the applicable details with the person responsible for your invoicing and tax review before sharing the document. This page describes the workflow rather than providing tax advice.",
    },
    {
      q: "How do invoicing and quotation management connect?",
      a: "The accepted proposal supplies the work and pricing context for the billing workflow. Review quotation decisions separately from invoice and payment records, then use the project or client overview to understand their recorded relationship.",
    },
  ],
  pricing:
    "Explore Intorza Pro for advanced invoicing alongside quotations and team collaboration. Confirm the document, billing and integration requirements relevant to your business before choosing a plan.",
  ctaTitle: "Make the next billing conversation easier to review",
  ctaText:
    "Open Intorza to explore Invoices, review payment entries and preview your document, or ask our team about your studio's billing workflow.",
  related: [
    {
      href: "/interior-quotation",
      title: "Prepare the quotation",
      description: "Define the itemized scope and terms before moving into billing.",
    },
    {
      href: "/interior-project-management",
      title: "Review the project context",
      description: "Keep associated quotation and invoice records connected to the work.",
    },
    {
      href: "/interior-design-crm",
      title: "Review client-level balances",
      description: "See the client perspective across recorded projects and billing.",
    },
    {
      href: "/contact",
      title: "Ask about invoicing",
      description: "Discuss document requirements and the workflow your team needs.",
    },
  ],
};

export const clientManagementLanding: FeatureLanding = {
  path: "/interior-design-crm",
  name: "Client Management",
  title: "CRM for Interior Designers & Client Management | Intorza",
  description:
    "Organize interior clients, project history, billed totals, payments and outstanding balances with Intorza. Explore a practical client management workflow for studios.",
  h1: "CRM for Interior Designers",
  highlight: "CRM",
  subtitle:
    "Keep interior client context connected to projects and recorded billing. Review each client's project count, total billed, paid amount and outstanding balance before the next conversation.",
  image: "/clients-preview.webp",
  imageAlt:
    "Intorza client overview showing a client, project count, total billed, paid amount and outstanding balance",
  highlights: [
    { value: "Client view", label: "Project context" },
    { value: "Clear totals", label: "Recorded billing" },
  ],
  introTitle: "A client management workflow built around interior projects",
  intro: [
    "A client conversation rarely fits into a name and a single total. An interior studio may be discussing a new quotation while an earlier project still has a billing question. A CRM for interior designers should make the relevant client context easier to find, so the person responding can distinguish the property, project and outstanding record before giving an answer.",
    "Intorza's Clients screen brings the client name and project count together with total billed, paid and outstanding balance summaries. Use this client view as an entry point into the recorded business relationship. The client-management workflow focuses on the project and billing context your team needs for an informed response. Review the relevant project or invoice when you need to understand how a summary was formed, and keep your team's contact and handover information current in its agreed record system.",
  ],
  featureTitle: "Find the context for a more informed client conversation",
  features: [
    {
      title: "Recognizable clients",
      text: "Use clear client naming so the team can distinguish similar names, separate properties and repeat work. Check the intended client before discussing project or payment details.",
    },
    {
      title: "Project overview",
      text: "Review the project count alongside the client record. Open the relevant project when a question concerns a specific property, proposal or work package.",
    },
    {
      title: "Billing summaries",
      text: "See recorded total billed and paid amounts from the client perspective. Use the supporting invoice records when the client asks about a particular charge or payment.",
    },
    {
      title: "Outstanding context",
      text: "Review the recorded outstanding balance before a follow-up. Distinguish a client-wide summary from an individual project's invoice so the conversation stays specific.",
    },
  ],
  guideTitle: "Use the client record to support the next handover",
  guides: [
    {
      title: "Distinguish the person from the project",
      text: "A repeat client may have more than one site or work package. Start by confirming which property and project the conversation concerns. Use a consistent naming convention so a proposal for a new apartment is not confused with an invoice from earlier work. The client summary offers relationship context, while the project and document records explain the particular matter being discussed.",
    },
    {
      title: "Prepare for a billing conversation",
      text: "Before raising an outstanding balance, review the latest recorded payments and the relevant invoice. Check whether the client's question concerns the total billed, an entry still awaiting review or a different project. Resolve differences against the supporting documents rather than treating the summary as the whole explanation. This keeps the conversation grounded in recognizable records.",
    },
    {
      title: "Keep a consistent team handover",
      text: "Agree how your studio records the outcome of a client conversation and who is responsible for the next response. Give the receiving team member the client and project context rather than forwarding an unexplained total. Use a consistent communication record process so the person taking over can review the client's question, the supporting project information and the next agreed action.",
    },
  ],
  workflowTitle: "Move from the client overview to the right supporting record",
  steps: [
    {
      title: "Find the correct client",
      text: "Open Clients in Intorza and identify the relevant record. Confirm the name and project context before discussing the work or recorded balance.",
    },
    {
      title: "Review the relationship overview",
      text: "Check the project count and the billed, paid and outstanding summaries. Identify whether the question is about new work, an existing project or billing.",
    },
    {
      title: "Open the relevant detail",
      text: "Review the associated project, quotation or invoice for the specific question. Compare the supporting information with the client-level summary where needed.",
    },
    {
      title: "Agree and record the next action",
      text: "Communicate the result clearly and update the appropriate source records. Follow your studio's process for maintaining conversation context and assigning the next response.",
    },
  ],
  referenceTitle: "Keep client, project and billing information distinct",
  referenceIntro:
    "Each view helps at a different level. Moving between them gives the team context without mixing separate client conversations.",
  reference: [
    {
      title: "Client level: the recorded relationship",
      text: "Use the client view for a summary across the recorded work. It helps orient the conversation before you choose which project or document to review.",
    },
    {
      title: "Project level: a particular property or scope",
      text: "Use the project record to distinguish separate work for the same client. Check the associated quotations and invoices when a question belongs to one project.",
    },
    {
      title: "Document level: a specific proposal or charge",
      text: "The quotation or invoice explains the details behind an amount. Review it before confirming a change, explaining a charge or following up on payment.",
    },
    {
      title: "Communication level: what the team has agreed",
      text: "A productive handover explains the next action and its owner. Keep supporting conversation information in the system your team has agreed to use; do not assume a client summary automatically captures every message.",
    },
  ],
  checklistTitle: "Before your next interior client follow-up",
  checklist: [
    "Confirm the client and the property or project being discussed.",
    "Review the supporting quotation or invoice rather than relying only on a total.",
    "Check recent recorded payments before raising an outstanding balance.",
    "Distinguish an earlier project from a new proposal for the same client.",
    "Agree who will respond next and keep the relevant handover context clear.",
  ],
  faqs: [
    {
      q: "What does a CRM for interior designers help organize?",
      a: "It helps keep the client relationship understandable alongside the work being discussed. Intorza's demonstrated client view focuses on clients, project counts, recorded billed and paid amounts, and outstanding balances. Use project and document records for the supporting detail.",
    },
    {
      q: "Can I review billing information by client?",
      a: "The Clients screen shown here includes total billed, paid and outstanding balance summaries. Review the relevant invoice and payment entries when you need to understand a specific charge or the basis for a follow-up.",
    },
    {
      q: "How should I handle several projects for the same client?",
      a: "Use clear names to distinguish the properties or work packages. Start with the client overview for context, then review the relevant project and associated documents. A client-wide outstanding total should not be treated as the balance for each separate project.",
    },
    {
      q: "Does this CRM include WhatsApp, email or marketing automation integrations?",
      a: "This page describes the client/project/billing overview shown in Intorza. It does not establish messaging integrations, automatic campaigns or email synchronization. Confirm any integration you require with the Intorza team before relying on it.",
    },
    {
      q: "How can a small studio use the client overview?",
      a: "Use it as a starting point before a client conversation: confirm the record, identify the relevant project and review the supporting billing or proposal details. A consistent routine is more useful than treating the summary as a substitute for the underlying records.",
    },
    {
      q: "Can the client view replace the quotation or invoice?",
      a: "No. It provides a relationship-level overview. The quotation explains the proposed work and terms, while the invoice and recorded payments explain billing. Open the relevant document before answering a detailed scope or payment question.",
    },
  ],
  pricing:
    "Explore Intorza Pro for the connected quotation, invoicing and team workflow around your client records. Review the particular client-management and integration requirements your studio has before choosing a plan.",
  ctaTitle: "Bring useful context to the next client conversation",
  ctaText:
    "Open Intorza and explore Clients, or talk to our team about organizing project and billing context for your studio's relationships.",
  related: [
    {
      href: "/interior-project-management",
      title: "Review client projects",
      description: "Find the documents and financial summary for a particular project.",
    },
    {
      href: "/interior-quotation-management",
      title: "Review proposal decisions",
      description: "Distinguish a client's pending proposal from accepted work.",
    },
    {
      href: "/interior-invoice-software",
      title: "Review invoices and payments",
      description: "Use the billing record to explain the client's recorded balance.",
    },
    {
      href: "/interior-team-management",
      title: "Coordinate the team",
      description: "Make responsibilities clearer around project work and client handovers.",
    },
  ],
};

export const teamManagementLanding: FeatureLanding = {
  path: "/interior-team-management",
  name: "Team Management",
  title: "Team Management for Interior Designers | Intorza",
  description:
    "Organize interior team members, project teams, assignments and recorded attendance in Intorza. Explore a clearer coordination workflow for studios and contractors.",
  h1: "Team Management for Interior Designers",
  highlight: "Team Management",
  subtitle:
    "Bring team members, project teams and recorded attendance into your interior business workflow. Make assignments recognizable and give the next site visit or project handover a clear responsible person.",
  image: "/team-preview.webp",
  imageAlt:
    "Intorza team management screen with member and team counts, clocked-in and attendance summaries, and Add Team and Add Member controls",
  highlights: [
    { value: "Project teams", label: "Organized members" },
    { value: "Assigned", label: "Clear responsibilities" },
  ],
  introTitle: "Give interior project coordination a clearer starting point",
  intro: [
    "An interior studio depends on people moving information between the office, client and site. A designer may be reviewing a proposal while another team member is visiting the property. Team management for interior designers starts with knowing who is involved, which project they belong to and who is responsible for the next handover. A shared team record helps make those relationships more recognizable.",
    "Intorza's Team Management screen includes Add Team and Add Member controls, Project Teams and All Members views, and summaries for total members, active teams, clocked-in members and attendance recorded today. Use that context alongside the role and assignment controls available in your workspace. Agree how your studio will keep member details, responsibilities and attendance entries current so the overview remains useful when several people are working across different sites.",
  ],
  featureTitle: "Organize the people behind each interior project",
  features: [
    {
      title: "Member records",
      text: "Add the people involved in the workspace and review the All Members view. Keep recognizable member details so assignments refer to the intended person.",
    },
    {
      title: "Project teams",
      text: "Create a team by assigning members to a project. Review which group is associated with the work before beginning the next coordination conversation.",
    },
    {
      title: "Attendance overview",
      text: "Review the recorded clocked-in and attended-today summaries shown on the team screen. Use your studio's agreed routine to maintain and check attendance entries.",
    },
    {
      title: "Roles and assignments",
      text: "Use the roles and assignment controls available to your account to organize responsibilities. Review access and project ownership when a person's role changes.",
    },
  ],
  guideTitle: "Connect the team overview to practical project handovers",
  guides: [
    {
      title: "Create teams around recognizable work",
      text: "Use clear project names when organizing a group so members can distinguish different clients, properties and work packages. Confirm who belongs to the team and who owns the next handover. A project team is most useful when the people involved understand the work they are coordinating and where to find the associated project and quotation context.",
    },
    {
      title: "Make site visit responsibility explicit",
      text: "Before a measurement visit, confirm the responsible person, the property details and the questions that need answering. Use the site measurement assignment workflow for the visit's project context, then agree how findings will reach the office team. The team list supports coordination, while a specific handover explains the information and decisions the next person needs.",
    },
    {
      title: "Review membership and records as work changes",
      text: "When someone joins a project or moves to a different responsibility, revisit the team and assignment context. Review the available roles and access controls with the person managing your workspace. Keep attendance entries consistent with your studio's routine and resolve unclear records with the relevant member. A regular review helps the next project conversation begin with current information.",
    },
  ],
  workflowTitle: "Set up the team and keep responsibility visible",
  steps: [
    {
      title: "Review your workspace members",
      text: "Open Team in Intorza and review the existing member records. Use Add Member for the people who need to participate in the workflow.",
    },
    {
      title: "Create the project team",
      text: "Use Add Team and assign members to the relevant project. Check the project name and the group involved before starting the handover.",
    },
    {
      title: "Agree roles and next actions",
      text: "Review the available role and assignment controls. Tell the team who owns the next client response, site visit or project review and what information they need.",
    },
    {
      title: "Maintain the records",
      text: "Review recorded attendance and update team context as responsibilities change. Revisit membership and assignments when work moves to a new phase or another person takes over.",
    },
  ],
  referenceTitle: "Keep team membership, project responsibility and account access clear",
  referenceIntro:
    "These details support different coordination decisions. Review each in the workflow where it belongs.",
  reference: [
    {
      title: "Member: who is part of the workspace?",
      text: "Use the member records to identify the people involved. Clear names and current details make project assignments and attendance discussions easier to understand.",
    },
    {
      title: "Project team: who is grouped around this work?",
      text: "A team connects members to a particular project. Agree how that group will coordinate its handovers and identify the responsible person for the next action.",
    },
    {
      title: "Role and access: which controls are appropriate?",
      text: "Review the roles and permissions available in your workspace with the account owner. Check access when responsibilities change and confirm any specific permission requirement with Intorza.",
    },
    {
      title: "Attendance record: what has been recorded today?",
      text: "The displayed summaries provide recorded clock-in and attendance context. Apply a consistent studio routine for checking entries. Confirm any payroll, location-verification or specialist reporting requirement separately before adopting a process.",
    },
  ],
  checklistTitle: "Before the next team or site handover",
  checklist: [
    "Check the correct project, property and participating members.",
    "Confirm who owns the next action and which information they need.",
    "Review the relevant quotation, site or invoice record before passing on a question.",
    "Update membership and available access controls when a person's responsibilities change.",
    "Keep attendance entries consistent with the studio's agreed review routine.",
    "Confirm specialist staffing or reporting requirements with Intorza before relying on a workflow.",
  ],
  faqs: [
    {
      q: "What does team management for interior designers help organize?",
      a: "It gives the studio a shared view of the people and project groups involved in its work. Intorza's demonstrated team screen includes member records, project teams, Add Team and Add Member controls, and recorded clock-in and attendance summaries.",
    },
    {
      q: "Can I create a team for an interior project?",
      a: "Yes. The team screen describes creating a team by assigning members to a project. Use a recognizable project name and agree responsibilities with the group so the team record supports a practical handover.",
    },
    {
      q: "What attendance information is shown?",
      a: "The demonstrated screen shows Clocked In and Attended Today summaries alongside total members and active teams. Review entries using your studio's agreed routine and confirm any particular attendance-reporting requirement with the Intorza team.",
    },
    {
      q: "Can I organize roles and project assignments?",
      a: "Use the role and assignment controls available in your workspace to organize responsibilities. Review the exact permissions with the account owner, particularly when someone changes role or no longer needs access to a project.",
    },
    {
      q: "Does the attendance overview establish payroll or GPS verification?",
      a: "The screen shown here provides recorded attendance context. Confirm payroll calculations, location verification, geofencing or specialist workforce-reporting requirements with Intorza before choosing a process that depends on them.",
    },
    {
      q: "How does the team workflow connect to site measurement?",
      a: "The site measurement project setup includes an Assign To Member field. Use that assignment with a clear visit brief, then agree how the responsible person will hand verified site findings to the quotation or project team.",
    },
  ],
  pricing:
    "Review Intorza Pro for team collaboration alongside the quotation and invoicing workflow. Confirm the member, assignment, permission and attendance requirements relevant to your studio before choosing a plan.",
  ctaTitle: "Give the next project handover a clear owner",
  ctaText:
    "Open Intorza and explore Team, or talk to our team about organizing members, project groups and site responsibilities for your studio.",
  related: [
    {
      href: "/interior-site-measurement",
      title: "Assign site measurement work",
      description: "Set up a recognizable site project and identify the responsible team member.",
    },
    {
      href: "/interior-project-management",
      title: "Review the project context",
      description: "Use the associated records to support a clearer handover.",
    },
    {
      href: "/interior-design-crm",
      title: "Prepare for client follow-up",
      description: "Connect client context with the right project and recorded billing.",
    },
    {
      href: "/contact",
      title: "Discuss your team requirements",
      description: "Ask about the workspace controls and coordination workflow your studio needs.",
    },
  ],
};
