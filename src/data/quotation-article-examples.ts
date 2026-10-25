type ArticleExample = {
  label: string;
  intro: string;
  before: string;
  after: string;
  explanation: string;
  steps: [string, string][];
  cta: string;
  brief: string[];
};

export const articleExamples: Record<string, ArticleExample> = {
  "interior-quotation-format": {
    label: "Turn a vague item into a scope the client can approve",
    intro:
      "Imagine a client comparing two wardrobe quotations. Both say wardrobe work, but only one describes what the amount actually buys. Start with the approved drawing, then write the item so a second person can check it without calling you.",
    before: "Bedroom wardrobe — complete work, premium finish.",
    after:
      "Bedroom 1 wardrobe, drawing W-01: 8 ft wide × 7 ft high × 2 ft deep. Agreed billing basis: 56 sq ft of front elevation. Specify carcass material and thickness, shutter finish, internal layout, hardware quantities, delivery and fitting before issue. Loft excluded and quoted separately.",
    explanation:
      "The revised description does three jobs: it identifies the location, exposes the quantity calculation and sets a boundary around the work. Replace every pending specification before sending the final proposal. If a selection is still undecided, use a clearly identified allowance rather than an undefined quality label.",
    steps: [
      ["Collect", "Site dimensions, room list, drawings and client selections."],
      ["Calculate", "Quantity × matching unit rate for every included item."],
      ["Confirm", "Specifications, exclusions and the exact revision accepted."],
    ],
    cta: "Create an itemized interior quotation",
    brief: [
      "Client and project address",
      "Included rooms and drawing references",
      "Item descriptions, quantities and units",
      "Materials, finishes and hardware",
      "Exclusions, milestones and revision number",
    ],
  },
  "interior-quotation-format-pdf": {
    label: "A practical layout for a quotation PDF",
    intro:
      "For a small project, start with this order and let the item schedule expand naturally. The aim is to help the client find both the amount and the scope behind it without searching through messages.",
    before: "A screenshot of a spreadsheet sent as the final quotation.",
    after:
      "Cover summary: client, project, quotation Q-014 / R02 and selected scope total. Detailed pages: room-wise items with repeated headers. Closing pages: exclusions, payment milestones, validity and acceptance referencing Q-014 / R02 and the attached drawings.",
    explanation:
      "A PDF is useful because the issued layout stays consistent across devices. It still needs a clear source of truth. If R02 changes the kitchen shutters, update the source calculation, issue the matching PDF and identify the change. Check that the client's acceptance refers to R02 rather than the earlier issue.",
    steps: [
      ["Prepare", "Finish calculations and remove unresolved placeholders in the master."],
      ["Export", "Use readable page scaling and include all schedule and terms pages."],
      ["Inspect", "Open the final PDF on a phone and compare its total to the source."],
    ],
    cta: "Prepare a quotation for PDF export",
    brief: [
      "Editable source file reference",
      "Client and quotation revision",
      "Selected scope total",
      "Full item schedule and terms",
      "PDF page and readability review",
    ],
  },
  "interior-quotation-format-excel": {
    label: "Check a calculation before it reaches the summary",
    intro:
      "Consider a cabinet measured on its front elevation: 8 ft × 7 ft = 56 sq ft. The rate must use that same square-foot basis. The figures below demonstrate spreadsheet arithmetic only; they are not a market rate or a project estimate.",
    before: "Quantity entered as “56 sq ft”, rate typed with text, amount manually overwritten.",
    after:
      "Unit cell D2: sq ft. Quantity E2: 56. Illustrative rate F2: 100. Formula G2: =ROUND(E2*F2,2). Calculated amount: 5,600. If the verified quantity changes to 60, the amount becomes 6,000 without retyping the total.",
    explanation:
      "The point of a formula is to keep the amount connected to the inputs. Extend that connection to the room and project totals. After adding or removing an item, check that the sum range includes exactly the selected work. Keep an independently checked total for the first issue and repeat the reconciliation when the scope changes.",
    steps: [
      ["Enter", "Numeric quantities and rates; unit labels in their own column."],
      ["Reconcile", "Line amounts → room totals → project item subtotal."],
      ["Issue", "Save the workbook revision and export the selected schedule."],
    ],
    cta: "Build a quotation without retyping totals",
    brief: [
      "Measurement basis for each item",
      "Numeric quantity and matching unit rate",
      "Formula and summary reconciliation",
      "Selected versus optional items",
      "Saved workbook and PDF revision",
    ],
  },
  "interior-quotation-format-word": {
    label: "Make a Word proposal easier to review",
    intro:
      "A client needs the explanation and numbers to agree. A short scope paragraph can add context, but it should not quietly promise more than the item schedule includes.",
    before: "We will complete all interiors as discussed. Total as below.",
    after:
      "This proposal covers the kitchen cabinets and two bedroom wardrobes listed in Schedule A, using drawings K-02 and W-03. Loose furniture, appliances and civil alterations are excluded. The commercial summary reflects only the selected items; optional upgrades are shown separately.",
    explanation:
      "Use this wording pattern with your own actual project references. Then check that the schedule, introductory paragraph and exclusions tell the same story. If the proposal says all interiors while the table contains only carpentry, the document still leaves room for disagreement even when its arithmetic is correct.",
    steps: [
      ["Structure", "Use real headings and an item table that grows across pages."],
      ["Reconcile", "Compare pasted amounts against the current calculation source."],
      ["Review", "Inspect the exported PDF for split rows and outdated text."],
    ],
    cta: "Turn your scope into a client quotation",
    brief: [
      "Scope introduction and drawing references",
      "Checked item schedule",
      "Material and finish notes",
      "Exclusions and selected options",
      "Matching Word and PDF revision",
    ],
  },
  "interior-design-quotation-template": {
    label: "Define a design stage before you price it",
    intro:
      "A design proposal should make the deliverable visible. Instead of relying on a general design-fee line, explain what the client receives and when you will ask for approval.",
    before: "Complete interior design with drawings and revisions.",
    after:
      "Layout stage: furniture layout for the included rooms, one initial presentation and two consolidated feedback rounds. Approval of the selected layout closes this stage. Detailed drawings, visualizations, site visits and execution are listed as separate deliverables where included.",
    explanation:
      "The review count here is an example, not a recommended limit for every practice. Choose a scope that fits your service. Define what counts as a feedback round and what happens if the brief changes after approval. This helps the client understand both the design process and the boundary of the fee.",
    steps: [
      ["Brief", "Confirm the rooms, service type and expected outputs."],
      ["Define", "List deliverables, review rounds and client dependencies."],
      ["Approve", "Record the completed stage and assess later changes separately."],
    ],
    cta: "Prepare your design and execution quotation",
    brief: [
      "Design-only, execution-only or combined service",
      "Deliverables by stage",
      "Included feedback rounds and visits",
      "Client inputs and approval criteria",
      "Execution scope if applicable",
    ],
  },
  "2bhk-interior-quotation": {
    label: "Compare a 2BHK proposal room by room",
    intro:
      "Suppose the client wants essential storage now and decorative work later. You can make that decision easier by keeping the selected scope separate from the unapproved options.",
    before: "2BHK complete package, including kitchen and wardrobes.",
    after:
      "Selected scope: kitchen base and wall cabinets, Bedroom 1 wardrobe and Bedroom 2 wardrobe, each linked to a measured schedule. Optional scope: TV panel, foyer storage and bedroom lofts. Services: identify electrical and plumbing alterations separately. Appliances and loose furniture: state supply responsibility.",
    explanation:
      "This structure helps the client decide what to defer without changing the meaning of the base rate. Before comparing another proposal, check whether it contains the same cabinet quantities, finishes, internal fittings and installation scope. The apartment type alone does not make the totals comparable.",
    steps: [
      ["Measure", "Kitchen and both bedrooms using the actual site dimensions."],
      ["Prioritize", "Separate essential storage from unselected upgrades."],
      ["Compare", "Check equivalent quantities and specifications before totals."],
    ],
    cta: "Create a room-wise 2BHK quotation",
    brief: [
      "Kitchen schedule and selected accessories",
      "Bedroom 1 wardrobe and furniture",
      "Bedroom 2 wardrobe and furniture",
      "Living-area selections and optional work",
      "Services, appliances and exclusions",
    ],
  },
  "3bhk-interior-quotation": {
    label: "Plan three bedrooms without copying one allowance",
    intro:
      "Imagine a primary bedroom with extensive storage, a child's room with a desk and a guest room with a smaller wardrobe. Treating all three as the same room hides the decisions that drive the scope.",
    before: "Bedroom interior work × 3, standard specification.",
    after:
      "Primary bedroom: measured wardrobe, loft and dressing unit. Child's room: wardrobe and study desk with specified storage. Guest room: selected wardrobe only. Common painting and electrical work: one separate trade schedule. Any room-specific hardware or finish upgrade is shown against that room.",
    explanation:
      "A room-wise proposal also supports phased execution. If only two bedrooms are approved now, the guest-room scope can remain a clearly identified option. Review dependencies before splitting the work: later electrical, ceiling or wall changes may disturb completed finishes. Recheck any future-phase assumptions when that phase is approved.",
    steps: [
      ["Differentiate", "Write a separate brief and schedule for each bedroom."],
      ["Coordinate", "Count common services once and record site dependencies."],
      ["Select", "Reconcile approved rooms and upgrades with one project total."],
    ],
    cta: "Organize your 3BHK quotation by room",
    brief: [
      "Primary-bedroom scope",
      "Second-bedroom scope",
      "Third-bedroom scope",
      "Kitchen and shared-space schedules",
      "Common services and execution phases",
    ],
  },
  "modular-kitchen-quotation-format": {
    label: "Check what a kitchen running-foot rate actually covers",
    intro:
      "Two suppliers may use the same unit label but include different cabinet dimensions or components. Ask for the measurement convention before using a rate to compare proposals.",
    before: "Kitchen: 20 running feet, complete with accessories.",
    after:
      "Base cabinets: measured run, agreed height and depth, specified carcass and shutters. Wall cabinets: separate run and dimensions. Tall units: individual items. List standard hardware, selected premium fittings, exposed panels and installation. State countertop, appliance and service scope separately.",
    explanation:
      "For an L-shaped layout, agree how the corner is measured and identify appliance gaps before finalizing the quantity. Do not add base and wall lengths into a single figure without explaining what it represents. When comparing an upgrade, establish whether it replaces included hardware or adds a new accessory.",
    steps: [
      ["Separate", "Base, wall, tall and loft cabinets before entering quantities."],
      ["Specify", "Carcass, shutters, dimensions, fittings and corner treatment."],
      ["Coordinate", "Confirm appliances, countertop cut-outs and service responsibilities."],
    ],
    cta: "Build an itemized kitchen quotation",
    brief: [
      "Approved kitchen layout and elevations",
      "Base, wall, tall and loft quantities",
      "Carcass, shutters and finishes",
      "Hardware and accessory quantities",
      "Countertop, appliances and service boundaries",
    ],
  },
  "wardrobe-quotation-format": {
    label: "Make the internal storage part of the agreement",
    intro:
      "The elevation shows the outside of a wardrobe. It does not necessarily show how many drawers, shelves or hanging sections the client expects inside.",
    before: "8 ft × 7 ft wardrobe with standard internals.",
    after:
      "Wardrobe W-01: 56 sq ft front-elevation basis at 2 ft depth. Attach the internal layout identifying shelves, hanging sections and drawer count. Specify drawer channels, hinges or sliding mechanism, handles and finish. Measure the loft separately if it is outside the main elevation quantity.",
    explanation:
      "The measurement example defines the billing basis; it does not choose the material or rate. Complete those decisions in the item specification. If the client later adds drawers, review both the drawer construction and hardware rather than applying an unexplained extra amount. Keep the updated internal layout with the approved change.",
    steps: [
      ["Measure", "Record width, height, depth and the agreed area basis."],
      ["Detail", "Match the exterior elevation with the internal layout."],
      ["Verify", "Count fittings and confirm loft and installation inclusions."],
    ],
    cta: "Create a detailed wardrobe quotation",
    brief: [
      "Wardrobe elevation and internal layout",
      "Width, height, depth and billing basis",
      "Material and shutter finish",
      "Drawer, shelf and hardware quantities",
      "Loft, delivery and installation scope",
    ],
  },
  "interior-work-quotation-format": {
    label: "Close a gap between electrical and finishing work",
    intro:
      "A service alteration can be fully priced by one trade while the repair work around it remains unassigned. Review the whole task, including what happens before and after installation.",
    before: "Electrical point relocation included. Painting by others.",
    after:
      "For each relocated point, identify wiring and conduit scope, cutting or chasing, installation, testing and making good. State who repairs the wall and who restores the finish. Mark any concealed-condition work provisional and record how it will be measured and approved.",
    explanation:
      "This does not mean every activity belongs to one contractor. It means each activity has an owner and the client can see the boundary. Apply the same check to plumbing shifts, ceiling openings, cabinet supports and appliance cut-outs. Keep later discoveries in a variation record linked to the original item.",
    steps: [
      ["Break down", "List trades, locations, measurable tasks and supplied materials."],
      ["Assign", "Identify handoffs, preparation, testing and making-good work."],
      ["Control", "Record and approve changed quantities or additional tasks."],
    ],
    cta: "Organize every trade in one quotation",
    brief: [
      "Trade-wise and room-wise work list",
      "Material supply versus labour scope",
      "Handoffs and making-good responsibilities",
      "Provisional quantities and site assumptions",
      "Variation and approval process",
    ],
  },
  "interior-quotation-software": {
    label: "Run a useful software trial with a real quotation",
    intro:
      "Choose a previous quotation whose quantities and totals have already been checked. Rebuild it in the tool you are considering, then test the changes your team makes most often.",
    before: "The dashboard looks good, so the team moves all live projects immediately.",
    after:
      "Pilot one project: enter room-wise items with mixed units, add an optional accessory, revise a wardrobe quantity and export the client document. Compare every selected amount with the reference. Check how the team identifies the accepted issue and retrieves its project data.",
    explanation:
      "Record a pass, a gap or a question for each task. Verify plan-specific capabilities in the actual product rather than assuming that all displayed features are available. Keep the current process available until the pilot confirms that your team can create, review and hand over a complete quotation reliably.",
    steps: [
      ["Baseline", "Choose a reviewed quotation and document the current pain points."],
      ["Trial", "Recreate the scope, revise it and inspect the exported document."],
      ["Adopt", "Agree who maintains item descriptions and approves issued proposals."],
    ],
    cta: "Try the Intorza quotation workflow",
    brief: [
      "Current quotation and checked totals",
      "Mixed measurement units and optional items",
      "A realistic quantity or specification change",
      "Client document and approval requirements",
      "Export, access and team handoff requirements",
    ],
  },
};

export const categoryLabels: Record<string, string> = {
  "Start here": "Quotation basics",
  "File formats": "PDF, Excel & Word",
  "Project scopes": "Room & home guides",
  Workflow: "Business & workflow",
};
