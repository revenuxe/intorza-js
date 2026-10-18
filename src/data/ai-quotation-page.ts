import { PRO_MONTHLY_PRICE } from "@/lib/site";
export const aiQuotationFaqs = [
  {
    q: "What is an AI interior design quotation tool?",
    a: "It helps turn a project brief or floor plan into an interior quotation draft. Intorza Studio offers a floor plan analysis route and an AI quotation builder that starts with project details. Review the draft before presenting it to a client.",
  },
  {
    q: "Can I create an AI quotation without a floor plan?",
    a: "Yes. The AI Quotation Builder route starts with your project details. Describe the rooms, work required, materials and available measurements so the draft reflects your intended scope.",
  },
  {
    q: "What should I check in an AI-generated interior estimate?",
    a: "Check room coverage, site measurements, units, material grades, hardware, quantities, labour, rates and exclusions. Confirm taxes, payment milestones and validity before treating the draft as a final quotation.",
  },
  {
    q: "Does the AI replace a site measurement or final pricing review?",
    a: "No. A generated draft is a starting point. Verify dimensions against the site and confirm supplier prices, installation conditions and the client's specifications before committing to a price.",
  },
  {
    q: "How much does Intorza Pro cost, and are AI credits unlimited?",
    a:
      "Intorza Pro is listed at INR " +
      PRO_MONTHLY_PRICE +
      " per month. AI workflows use credits; unlimited standard quotations should not be read as unlimited AI generation. Check the current credit balance and usage shown in the app before starting a generation.",
  },
  {
    q: "Can I export and manage the quotation after reviewing it?",
    a: "Use Intorza's quotation workflow to edit the proposal, export a professional PDF and track the client decision. Accepted quotations can continue into the project and invoice workflow.",
  },
];
export const aiSteps = [
  {
    title: "Choose your starting point",
    text: "Upload a clear floor plan for analysis, or start with project details when a drawing is not available. Confirm the AI credit requirement shown in the app.",
  },
  {
    title: "Make the scope specific",
    text: "List the rooms and required work. Add available dimensions, material preferences and exclusions so the draft has useful project context.",
  },
  {
    title: "Review the generated draft",
    text: "Check each room, work item, quantity and rate. Replace assumptions with verified site measurements, supplier prices and agreed specifications.",
  },
  {
    title: "Prepare the client proposal",
    text: "Confirm totals, taxes, payment terms and validity. Export the reviewed quotation and track the next step with your client in Intorza.",
  },
];
