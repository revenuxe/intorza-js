export type QuotationArticle = {
  slug: string;
  title: string;
  category: "Start here" | "File formats" | "Project scopes" | "Workflow";
  description: string;
  takeaway: string;
  sections: { title: string; paragraphs: string[]; checklist?: string[] }[];
  rows: [string, string, string, string][];
  mistakes: string[];
  faq: { question: string; answer: string }[];
  related: string[];
};

export const quotationArticles: QuotationArticle[] = [
  {
    slug: "interior-quotation-format",
    title: "Interior quotation format: a complete room-by-room guide",
    category: "Start here",
    description:
      "Build a clear interior quotation with item descriptions, measurement units, material specifications, scope boundaries, payment milestones and revision control.",
    takeaway:
      "A useful quotation connects every price to a measurable scope. The client should be able to see what is included, how it is measured and what changes the final amount.",
    sections: [
      {
        title: "What an interior quotation should contain",
        paragraphs: [
          "Start with the project address, client details, quotation number, issue date, revision number and validity period. These fields identify which proposal the client is approving. Add a short scope statement describing the rooms and trades covered, plus the drawings or measurement sheet used to prepare the estimate.",
          "The main schedule should show one item per row: room, description, material specification, quantity, unit, rate and amount. Keep the unit beside the quantity; a square-foot rate cannot be compared directly with a running-foot or per-piece rate. Identify provisional quantities rather than presenting them as final measurements.",
        ],
        checklist: [
          "Project and client identification",
          "Room-wise quantities and specifications",
          "Subtotal, adjustments and separately identified applicable taxes",
          "Inclusions, exclusions, validity and payment milestones",
          "Drawing references, revision number and approval record",
        ],
      },
      {
        title: "Build the quotation in six practical steps",
        paragraphs: [
          "Survey the site first, then agree on the room list and basic design. Break each room into measurable items, such as a wardrobe carcass, shutters, loft, hardware and installation. Choose a consistent measurement convention and record the dimensions that support each quantity.",
          "Collect current supplier and labour inputs for the specified work. Calculate line amounts from quantity multiplied by rate, then reconcile the room subtotals against the project summary. Review exclusions and payment milestones with the client before issuing the document. Keep the approved version unchanged and issue a new revision for later changes.",
        ],
      },
      {
        title: "Separate the commercial summary from the detailed schedule",
        paragraphs: [
          "Give the client a concise first-page summary, followed by the item schedule and specifications. List base work, selected upgrades and optional work separately so that an unselected upgrade does not silently enter the total. If delivery or installation is bundled into a rate, say so explicitly.",
          "State which events trigger payments: approval, material procurement, installation or handover, for example. Use dates or completion criteria that can be checked. Record any client-supplied items and dependencies that affect completion, including site access, power availability and approvals.",
        ],
      },
      {
        title: "Choose the right format for the next task",
        paragraphs: [
          "Use Excel for calculations and comparisons, Word for a narrative proposal, and PDF for a stable client-facing issue. Keep an editable master even when the client receives only a PDF. A quotation template is a starting structure; it still needs project-specific measurements and material decisions.",
          "When several people revise proposals, a shared quotation workflow can reduce duplicate files. Evaluate whether you need centralized items, version history and approval tracking before replacing a simple spreadsheet. Explore the linked guides below for each format and project scope.",
        ],
      },
    ],
    rows: [
      [
        "Bedroom wardrobe",
        "Carcass and shutters; material and finish specified",
        "sq ft",
        "Approved elevation area",
      ],
      [
        "Kitchen base units",
        "Carcass, shutters and standard hardware listed",
        "running ft",
        "Base length only",
      ],
      ["TV unit", "Drawing-referenced cabinet and panel", "item", "One defined assembly"],
      ["Installation", "Labour and site fitting scope", "lot", "Confirm bundled or separate"],
    ],
    mistakes: [
      "One lump-sum amount with no scope breakdown",
      "Mixing units between quantity and rate",
      "Using a finish name without material or thickness",
      "Replacing an approved file without a revision record",
    ],
    faq: [
      {
        question: "Is a quotation the same as an invoice?",
        answer:
          "A quotation proposes scope and price before the work is agreed. An invoice requests payment for an agreed supply or milestone. Give each document its own number and purpose.",
      },
      {
        question: "Should every item have a fixed quantity?",
        answer:
          "Use measured quantities where available. Mark unverified quantities as provisional and explain how they will be measured and approved before billing.",
      },
    ],
    related: [
      "interior-quotation-format-excel",
      "interior-design-quotation-template",
      "interior-work-quotation-format",
    ],
  },
  {
    slug: "interior-quotation-format-pdf",
    title: "Interior quotation format PDF: prepare a clear client copy",
    category: "File formats",
    description:
      "Learn how to structure, export and review an interior quotation PDF with readable item tables, revision details, scope notes and an approval section.",
    takeaway:
      "Use PDF as the issued copy of a checked quotation. Complete the calculations in your editable source, then export a version the client can read, reference and approve.",
    sections: [
      {
        title: "Design the PDF around the client's review",
        paragraphs: [
          "Put the quotation number, revision, client name and project location at the top. Follow with a short scope summary and the project total. The detailed schedule should remain available directly after the summary, so the client can connect each room total to its underlying items.",
          "Use real selectable text rather than a screenshot of a spreadsheet. Keep the description column wide enough for material details, and repeat table headers across pages. Avoid squeezing an entire project onto one sheet: a readable multi-page PDF is easier to review than a tiny single-page estimate.",
        ],
      },
      {
        title: "Export without losing important information",
        paragraphs: [
          "Before export, check print areas, page orientation and scaling in the source file. Confirm that no rate, quantity, exclusion or signature line sits outside the printable area. Include page numbers and the quotation reference on continuation pages so loose pages still identify the correct project.",
          "Open the exported file on a phone and a desktop. Check whether long descriptions wrap properly, whether totals are easy to locate and whether the last page contains the full terms. Store the editable source beside the issued PDF using the same reference and revision.",
        ],
      },
      {
        title: "Make approval and changes traceable",
        paragraphs: [
          "Reserve an acceptance area for the client's name, date and approved quotation revision. Link the acceptance to the relevant drawings and finish selections. A signature on a summary page should not leave ambiguity about which schedule and specifications were accepted.",
          "When a client changes a finish or quantity, update the editable master and issue a new PDF with a revision note. Identify the changed items and the effect on amount or delivery assumptions. Keep the previous issue in the project record rather than overwriting it.",
        ],
      },
      {
        title: "A final PDF review checklist",
        paragraphs: [
          "Review the document as if you had never discussed the project. Can you identify the included rooms, materials and work boundaries without a separate message? Can you distinguish optional items from the amount due for the selected scope?",
          "For a reusable starting point, use the quotation template guide. If your main difficulty is arithmetic or repeated revisions, use the Excel guide before producing the PDF.",
        ],
        checklist: [
          "Selectable text and readable tables",
          "Correct client, address, quotation number and revision",
          "No clipped columns or missing pages",
          "Clearly stated exclusions and provisional items",
          "Editable source saved with the same reference",
        ],
      },
    ],
    rows: [
      [
        "Page 1",
        "Client details, scope and commercial summary",
        "summary",
        "Identify the exact revision",
      ],
      [
        "Item schedule",
        "Room, specification, quantity, unit and rate",
        "table",
        "Repeat headings on each page",
      ],
      [
        "Scope notes",
        "Assumptions, exclusions and optional work",
        "notes",
        "Keep beside relevant items",
      ],
      [
        "Acceptance",
        "Client name, date and approved references",
        "record",
        "Link to drawings and selections",
      ],
    ],
    mistakes: [
      "Sending an image that makes small text unreadable",
      "Exporting a sheet with hidden or clipped totals",
      "Calling an old PDF the final quotation",
      "Removing specification pages to reduce file length",
    ],
    faq: [
      {
        question: "Should I edit prices directly inside the PDF?",
        answer:
          "Revise the source document, recalculate the totals and export a new issue. This helps the detailed schedule and summary stay consistent.",
      },
      {
        question: "Can the same PDF be used for every client?",
        answer:
          "Reuse its structure, but replace project details, quantities, specifications and terms. A previous client's scope is not a safe default for a new project.",
      },
    ],
    related: [
      "interior-quotation-format",
      "interior-quotation-format-excel",
      "interior-quotation-format-word",
    ],
  },
  {
    slug: "interior-quotation-format-excel",
    title: "Interior quotation format Excel: sheets, formulas and checks",
    category: "File formats",
    description:
      "Organize an interior quotation spreadsheet with a measurement sheet, item schedule, room totals, formula checks and a clean client-facing summary.",
    takeaway:
      "Keep measurements, calculations and presentation connected. A spreadsheet is most useful when a changed quantity updates the correct line amount and summary without manual retyping.",
    sections: [
      {
        title: "Set up a workbook that is easy to audit",
        paragraphs: [
          "Use separate areas or sheets for project details, measurements, item rates, the quotation schedule and the client summary. Give each item a stable code so you can trace a total back to its measurement. Keep assumptions beside the inputs, including whether dimensions are in feet, inches or millimetres.",
          "In the quotation schedule, use columns A to H for item code, room, description, unit, quantity, rate, amount and scope note. Enter numeric quantities and rates without embedding unit text in the cells. Store the unit in its own column so formulas can work with the numbers.",
        ],
      },
      {
        title: "Use simple formulas and visible checks",
        paragraphs: [
          "With quantity in E2 and rate in F2, the line amount in G2 can be =ROUND(E2*F2,2). Copy the formula through the item rows and use =SUM(G2:G20) for a schedule ending at row 20. Adjust that range to the actual schedule; adding rows outside a fixed range can leave work out of the total.",
          "Build a check that compares the sum of room subtotals with the project item subtotal. A difference should be zero before issue. Keep discounts, delivery and other adjustments in clearly labelled rows. Verify the applicable tax treatment for the actual project instead of hard-coding a rate into every template.",
        ],
      },
      {
        title: "Measure consistently before calculating",
        paragraphs: [
          "If an approved cabinet elevation is 8 feet wide and 7 feet high, its face area is 56 square feet. That arithmetic is only useful when the quotation says that face area is the agreed measurement basis. Do not apply the same area calculation to hardware sold per piece or a kitchen quoted by running length.",
          "Separate base units, wall units, tall units and lofts where their specifications or measurement methods differ. For every conversion, keep the original measurement available. Rounding each small component too early can create a different result from rounding the final item quantity.",
        ],
      },
      {
        title: "Protect the master and issue a readable copy",
        paragraphs: [
          "Visually distinguish input cells from formula cells, and protect formula ranges against accidental edits where appropriate. Keep a clean template without previous client details. Before each issue, check for missing rates, duplicate item codes, hidden rows and optional items accidentally included in the total.",
          "Save a revision of the workbook, then export the client schedule and terms as PDF. Sharing an editable workbook can be useful during collaboration, but the approval record should identify the precise quantities and rates accepted.",
        ],
        checklist: [
          "Every quantity has a unit",
          "No blank rates on included items",
          "Room totals reconcile with the summary",
          "Optional items are outside the selected total",
          "Print area includes terms and all columns",
        ],
      },
    ],
    rows: [
      ["E2: Quantity", "Measured quantity for one item", "number", "Use one declared unit"],
      ["F2: Rate", "Rate per matching unit", "number", "Do not type currency text into the value"],
      ["G2: Amount", "=ROUND(E2*F2,2)", "formula", "Copy down through included items"],
      ["Summary", "=SUM(G2:G20)", "formula", "Extend range when adding rows"],
    ],
    mistakes: [
      "Typing totals over formulas",
      "Leaving new rows outside the sum range",
      "Applying an area rate to a running-length quantity",
      "Hiding exclusions on a sheet the client never receives",
    ],
    faq: [
      {
        question: "Is Excel enough for a small interior business?",
        answer:
          "It can be enough when one person owns the master and reviews each issue carefully. Repeated edits by several people may require more structured version and approval controls.",
      },
      {
        question: "Should I share Excel or PDF with the client?",
        answer:
          "Use the workbook when editable collaboration is intended. For formal review, export a readable PDF and reference the saved workbook revision.",
      },
    ],
    related: [
      "interior-quotation-format-pdf",
      "interior-quotation-software",
      "modular-kitchen-quotation-format",
    ],
  },
  {
    slug: "interior-quotation-format-word",
    title: "Interior quotation format Word: build a polished proposal",
    category: "File formats",
    description:
      "Create an interior quotation in Word with a clear scope introduction, item table, specifications, commercial terms and a reliable revision process.",
    takeaway:
      "Word works well when your quotation needs explanation as well as numbers. Use a structured table for the schedule and a checked calculation source for the amounts.",
    sections: [
      {
        title: "Create a reusable document structure",
        paragraphs: [
          "Begin with your business and client details, project address and a unique quotation reference. Add a concise scope introduction that names the rooms, project stage and drawings used. Use heading styles for the room schedules, specification notes, exclusions and acceptance section.",
          "Build the item schedule as a table rather than aligning prices with spaces. Reserve columns for item, description, quantity, unit, rate and amount. Keep the description column generous and right-align numeric values. A document that expands cleanly as scope grows is more useful than a decorative one-page layout.",
        ],
      },
      {
        title: "Write specifications the client can compare",
        paragraphs: [
          "Replace broad phrases such as premium wardrobe with the actual material, thickness, finish and hardware allowance. Refer to a drawing or selected finish code when available. If a selection is pending, identify the allowance and explain how a later choice will be priced.",
          "Keep optional alternatives separate from the base scope. A higher-specification shutter should show whether it replaces the base item or adds to it. Explain bundled services such as installation and transport in the same section as the relevant items, then repeat any major exclusions in the closing scope notes.",
        ],
      },
      {
        title: "Check numbers before inserting them",
        paragraphs: [
          "For a multi-room quotation, calculate amounts in a spreadsheet or quotation tool and transfer only the reviewed schedule. Avoid maintaining two independent sets of totals. After any price change, compare the Word summary against the current calculation source line by line.",
          "Use consistent decimal precision, currency and unit labels. Confirm that adjustments appear in both the detailed schedule and summary where relevant. Before issue, remove template prompts and previous client data, including old addresses in headers and footers.",
        ],
      },
      {
        title: "Prepare the document for approval",
        paragraphs: [
          "Keep headings with their following content and repeat table header rows across pages. Put the quotation reference and page number in the document footer. Inspect the exported PDF to catch rows split awkwardly across pages or terms pushed onto an almost empty final page.",
          "Save the editable document and PDF under the same revision. State the approved drawings and scope in the acceptance section, and keep future variations as new recorded changes. Word provides a flexible layout, but a clear approval process still depends on your team's discipline.",
        ],
        checklist: [
          "Heading styles and real tables",
          "Amounts checked against the calculation source",
          "No old client details or unresolved placeholders",
          "Exclusions and milestones visible",
          "PDF reviewed after export",
        ],
      },
    ],
    rows: [
      ["Introduction", "Project brief and included rooms", "text", "Keep specific to the project"],
      [
        "Item schedule",
        "Quantities, units, rates and amounts",
        "table",
        "Calculate in a reviewed source",
      ],
      [
        "Specification",
        "Material, finish and hardware references",
        "schedule",
        "Avoid undefined quality labels",
      ],
      ["Acceptance", "Revision, drawings and approval details", "record", "Retain the issued copy"],
    ],
    mistakes: [
      "Aligning numbers with spaces",
      "Updating a table but leaving the summary unchanged",
      "Using an old client's material choices",
      "Exporting without checking page breaks",
    ],
    faq: [
      {
        question: "Can I use Word for the calculations too?",
        answer:
          "For a short schedule you can, but verify every line and total. A spreadsheet usually makes repeated quantity and rate changes easier to inspect.",
      },
      {
        question: "Should the editable Word file be the approval copy?",
        answer:
          "Keep a dated, identified issue for approval, commonly a PDF exported from the Word source. Make sure the acceptance identifies that revision.",
      },
    ],
    related: [
      "interior-design-quotation-template",
      "interior-quotation-format-pdf",
      "interior-quotation-format-excel",
    ],
  },
  {
    slug: "interior-design-quotation-template",
    title: "Interior design quotation template: from brief to approval",
    category: "Start here",
    description:
      "Adapt a reusable interior design quotation template for design services, execution work, deliverables, scope exclusions and client approval.",
    takeaway:
      "A template should prompt the right decisions, not assume them. Separate design services from execution work and define the deliverables the client is buying.",
    sections: [
      {
        title: "Start with a brief, not a copied total",
        paragraphs: [
          "Record the project type, included rooms, site condition and client's priorities before filling the quotation. Identify whether you are offering design only, execution only or both. A design service proposal needs deliverables and review stages; an execution quotation needs measurable items and material specifications.",
          "Use placeholders for the client name, address, quotation number and revision, but make scope choices explicit. Do not carry forward another project's included rooms, transport assumptions or material selections. A repeatable structure should reduce omissions while leaving room for the actual brief.",
        ],
      },
      {
        title: "Define design deliverables separately",
        paragraphs: [
          "List the outputs of each design stage: site documentation, layout options, concept direction, drawings or specified visualizations. State the number and type of included review rounds, the information the client must supply and the point at which a stage is approved.",
          "Clarify whether procurement assistance, site visits, contractor coordination and execution supervision are included. These activities involve different responsibilities. Describe additional requests and changes after approval as separately assessed scope rather than leaving them hidden inside a general design fee.",
        ],
      },
      {
        title: "Add execution schedules only where relevant",
        paragraphs: [
          "When the proposal includes execution, attach room-wise item schedules with quantities, units and specifications. Reference approved drawings and finish selections. Distinguish fixed items from provisional allowances and client-supplied products.",
          "Show how the design-service total and execution total contribute to the selected project amount. Avoid charging the same activity under both headings without explanation. Keep optional styling, appliances and loose furniture outside the base total unless the client has selected them.",
        ],
      },
      {
        title: "Use a reusable acceptance checklist",
        paragraphs: [
          "Before issue, verify that each promised deliverable has a completion or review criterion. Align payment milestones with those stages and record dependencies such as client feedback and access to the site. State the proposal validity and the process for rechecking supplier inputs if approval is delayed.",
          "At acceptance, save the agreed scope, drawings, specifications and revision together. A template becomes a useful project record when the team can trace later changes back to this starting point.",
        ],
        checklist: [
          "Design-only, execution-only or combined scope selected",
          "Deliverables and review rounds stated",
          "Site visits and coordination responsibilities defined",
          "Optional work separated",
          "Approved revision and supporting documents retained",
        ],
      },
    ],
    rows: [
      ["Design stage", "Layouts and agreed drawing deliverables", "stage", "Define review rounds"],
      [
        "Site involvement",
        "Visits or supervision responsibilities",
        "visit / stage",
        "State included frequency",
      ],
      ["Execution", "Room-wise measurable work", "item schedule", "Attach specifications"],
      [
        "Additional work",
        "Changes beyond approved deliverables",
        "variation",
        "Approve before proceeding",
      ],
    ],
    mistakes: [
      "Combining design and construction into an undefined fee",
      "Promising unlimited revisions by omission",
      "Leaving site supervision responsibilities unclear",
      "Treating optional products as approved selections",
    ],
    faq: [
      {
        question: "Can one template cover design and execution?",
        answer:
          "Yes, if each service has its own scope, deliverables and commercial schedule. The client should be able to distinguish the two amounts and responsibilities.",
      },
      {
        question: "How should extra design revisions be handled?",
        answer:
          "State the included review rounds and define a process for assessing and approving additional revisions before doing the extra work.",
      },
    ],
    related: [
      "interior-quotation-format",
      "interior-quotation-format-word",
      "interior-work-quotation-format",
    ],
  },
  {
    slug: "2bhk-interior-quotation",
    title: "2BHK interior quotation: plan a room-wise scope",
    category: "Project scopes",
    description:
      "Structure a 2BHK interior quotation around the kitchen, two bedrooms, living areas and selected services, with clear quantities, priorities and exclusions.",
    takeaway:
      "A 2BHK label does not define a price. Build the quotation from the actual storage, kitchen, living-room and service requirements of the two-bedroom home.",
    sections: [
      {
        title: "Translate the home into a room-wise schedule",
        paragraphs: [
          "Begin with a site plan and an inventory of the work the client wants. The kitchen, two bedrooms and living area may be the main zones, but a utility, foyer, dining space or balcony can add separate scope. Mark each zone as included, excluded or provisional.",
          "For the bedrooms, identify wardrobe dimensions, loft requirements, bed or headboard work and any study or dressing units. In the living area, define the TV unit, storage and decorative panels separately. This makes it possible to reduce scope without accidentally changing the specification of everything else.",
        ],
      },
      {
        title: "Distinguish essentials from optional upgrades",
        paragraphs: [
          "Prepare a base scope around the client's agreed priorities. Keep accessories, decorative ceilings, premium hardware and additional storage as clearly priced options when they have not yet been selected. Show the amount added or replaced by an option so the client can make a meaningful decision.",
          "Do not compare two proposals only by their project totals. Compare wardrobe areas, kitchen measurement basis, shutter finishes, hardware inclusions and installation scope. A lower amount can simply reflect fewer items or a different material specification.",
        ],
      },
      {
        title: "Handle services and site conditions explicitly",
        paragraphs: [
          "Record whether electrical alterations, plumbing shifts, painting, demolition and debris removal are included. Existing wiring, walls and plumbing may need inspection before these items can be measured reliably. Mark allowances as provisional and state when they will be verified.",
          "Confirm delivery access, building work-hour restrictions and any work dependent on another contractor. Identify appliances, lights, loose furniture and soft furnishings supplied by the client. These decisions help distinguish the interior execution scope from the full cost of furnishing and occupying the home.",
        ],
      },
      {
        title: "Review the proposal before approval",
        paragraphs: [
          "Reconcile the kitchen, bedroom and living-area subtotals with the summary. Review drawings and material selections with the client, then save the accepted quotation revision. If a wardrobe is resized after approval, record its revised quantity and any associated changes to shutters or hardware.",
          "Use the kitchen and wardrobe guides for those detailed schedules. The sample below is a scope planner, not a fixed package price; actual rates need measured quantities and current project-specific inputs.",
        ],
        checklist: [
          "Both bedrooms measured separately",
          "Kitchen base, wall and tall units distinguished",
          "Living and dining work itemized",
          "Services and client-supplied products identified",
          "Selected options reconciled with the total",
        ],
      },
    ],
    rows: [
      [
        "Kitchen",
        "Base units, wall units and selected accessories",
        "running ft / item",
        "Separate measurement bases",
      ],
      ["Bedroom 1", "Wardrobe, loft and selected furniture", "sq ft / item", "Reference elevation"],
      [
        "Bedroom 2",
        "Wardrobe and study requirements",
        "sq ft / item",
        "Do not copy bedroom 1 quantities",
      ],
      [
        "Living area",
        "TV unit, storage and selected panels",
        "item / sq ft",
        "List optional decor separately",
      ],
    ],
    mistakes: [
      "Quoting solely from apartment floor area",
      "Assuming both bedrooms have identical storage",
      "Hiding service alterations inside carpentry",
      "Comparing package totals with different scopes",
    ],
    faq: [
      {
        question: "Can I estimate a 2BHK before a site visit?",
        answer:
          "You can prepare an initial allowance based on stated assumptions, but identify it as preliminary. Verify dimensions, specifications and site conditions before issuing a detailed quotation.",
      },
      {
        question: "What should be outside a basic 2BHK quote?",
        answer:
          "There is no universal basic scope. Explicitly state the status of appliances, loose furniture, curtains, lighting, civil work and services rather than assuming their inclusion or exclusion.",
      },
    ],
    related: [
      "3bhk-interior-quotation",
      "modular-kitchen-quotation-format",
      "wardrobe-quotation-format",
    ],
  },
  {
    slug: "3bhk-interior-quotation",
    title: "3BHK interior quotation: control scope across every room",
    category: "Project scopes",
    description:
      "Prepare a detailed 3BHK quotation with three distinct bedroom schedules, shared spaces, material alternatives and phased execution priorities.",
    takeaway:
      "A 3BHK quotation needs room-level decisions. Three bedrooms can have very different storage, furniture and service requirements even within the same home.",
    sections: [
      {
        title: "Give each room its own specification",
        paragraphs: [
          "Create separate schedules for the primary bedroom, second bedroom and third bedroom. A guest room, children's room and home office are different briefs. Record storage sizes, desk requirements, bed-related work and finish choices separately instead of multiplying one bedroom allowance by three.",
          "Extend the schedule to the kitchen, living and dining areas, foyer and utility where included. Assign item codes by zone so the client can identify where each amount belongs. Keep common work such as painting or electrical alterations in its own schedule to prevent counting it twice.",
        ],
      },
      {
        title: "Plan shared specifications and room-specific upgrades",
        paragraphs: [
          "Agree on a base material and hardware specification where it makes sense across the home. Record exceptions directly against the room or item: a different shutter finish, sliding hardware or extra drawers should have a visible effect on the corresponding schedule.",
          "Present alternatives as replacements or additions, not as ambiguous package names. When a client chooses an upgraded wardrobe in one bedroom, show the difference from that bedroom's base scope. Avoid changing all three rooms unless the client has explicitly selected that change.",
        ],
      },
      {
        title: "Make phased execution measurable",
        paragraphs: [
          "If the client wants to complete work in phases, group the selected items by execution stage. Identify dependencies: a later ceiling or electrical change may affect a finished cabinet or painted wall. Clarify whether mobilization or delivery inputs change when work is split.",
          "Keep a full-home scope record even if only the first phase is approved. Mark later phases as unapproved options with their own validity assumptions. Do not imply that a preliminary amount for a future phase is locked indefinitely.",
        ],
      },
      {
        title: "Compare proposals on equal terms",
        paragraphs: [
          "Create a comparison checklist covering quantities, material grades, finishes, hardware, installation and services. Check whether each supplier measures wardrobe and kitchen work in the same way. A project total has little meaning without those details.",
          "At approval, reconcile the selected room schedules with the summary and archive the drawing references. Maintain one change log for the full project so a revision to the third bedroom does not leave the client comparing an old overall total with a new room total.",
        ],
        checklist: [
          "Three separate bedroom schedules",
          "Common services counted once",
          "Room-specific upgrades visible",
          "Phases and dependencies identified",
          "One reconciled project summary",
        ],
      },
    ],
    rows: [
      [
        "Primary bedroom",
        "Wardrobe, loft, dressing and selected furniture",
        "room schedule",
        "Record individual specifications",
      ],
      [
        "Bedroom 2",
        "Storage, bed-related work and desk",
        "room schedule",
        "Reflect the actual brief",
      ],
      [
        "Bedroom 3",
        "Guest, office or children's room scope",
        "room schedule",
        "Avoid a copied bedroom allowance",
      ],
      [
        "Shared spaces",
        "Kitchen, living, dining and common services",
        "zone schedule",
        "Count common work once",
      ],
    ],
    mistakes: [
      "Multiplying a 2BHK amount by a fixed factor",
      "Repeating common services in every room total",
      "Applying one upgrade to all bedrooms unintentionally",
      "Treating future phases as already approved work",
    ],
    faq: [
      {
        question: "Is a 3BHK quote just a 2BHK quote plus a bedroom?",
        answer:
          "No. Kitchen size, storage, shared spaces, finishes and service alterations may all differ. Build the schedule from the actual home and brief.",
      },
      {
        question: "Can different bedrooms use different specifications?",
        answer:
          "Yes. Identify the specification and finish for each item, then show how those choices affect the room and project totals.",
      },
    ],
    related: [
      "2bhk-interior-quotation",
      "wardrobe-quotation-format",
      "interior-work-quotation-format",
    ],
  },
  {
    slug: "modular-kitchen-quotation-format",
    title: "Modular kitchen quotation format: units, finishes and hardware",
    category: "Project scopes",
    description:
      "Break down a modular kitchen quotation into base, wall and tall units, shutters, hardware, countertop scope and installation responsibilities.",
    takeaway:
      "The measurement basis matters as much as the rate. Separate cabinet categories and state exactly which shutters, hardware and site services each price includes.",
    sections: [
      {
        title: "Split the kitchen into measurable components",
        paragraphs: [
          "List base cabinets, wall cabinets, tall units and lofts separately. Reference the layout or elevation and record the dimensions used for each quantity. State how corners, appliance gaps and open shelves are measured, because different conventions can produce different quantities for the same kitchen.",
          "Use the unit appropriate to each item. Cabinet runs may use running feet under a defined height and depth, while panels may use square feet and accessories may be priced per piece. Do not combine unlike units into one overall quantity.",
        ],
      },
      {
        title: "Define carcass, shutter and finish specifications",
        paragraphs: [
          "For each cabinet category, state the carcass material, thickness, internal finish, shutter material and external finish. Record edge treatment, exposed side panels and back-panel scope. If wet-area construction differs from the rest of the kitchen, describe that difference where it applies.",
          "Name the hardware or define a documented allowance. Hinges, channels, handles, baskets and lift systems should not disappear under an undefined accessories heading. State quantities and any selected product references, especially when premium fittings replace a standard allowance.",
        ],
      },
      {
        title: "Draw a clear boundary around related work",
        paragraphs: [
          "Identify the countertop, backsplash, sink, tap, appliances and cut-outs as included, excluded or client-supplied. State who takes final appliance measurements and who coordinates plumbing and electrical points. Cabinet installation does not automatically define responsibility for all connected services.",
          "Record demolition, disposal, wall repairs, delivery and fitting where relevant. Check access and site readiness before committing to installation assumptions. Where final measurements depend on completed civil work, mark the affected quantities as subject to verification.",
        ],
      },
      {
        title: "Review the kitchen schedule against the drawing",
        paragraphs: [
          "Walk through the layout cabinet by cabinet. Count drawers, shelves, shutters and selected accessories, then reconcile them with the quotation. Verify whether the base rate includes standard hardware and whether premium hardware is an additional cost or a replacement amount.",
          "Keep the approved layout, material selection and quotation revision together. Changes to appliance size or cabinet layout can affect several items, so review the complete affected run rather than changing only the most visible line.",
        ],
        checklist: [
          "Base, wall, tall and loft units separated",
          "Measurement convention written down",
          "Carcass and shutter specifications recorded",
          "Hardware quantities and allowances clear",
          "Countertop, appliances and service responsibilities defined",
        ],
      },
    ],
    rows: [
      [
        "Base units",
        "Specified height, depth, carcass and shutters",
        "running ft",
        "Define corners and appliance gaps",
      ],
      [
        "Wall units",
        "Separate height and finish specification",
        "running ft",
        "Do not reuse base-unit rate blindly",
      ],
      ["Tall unit", "Drawing-specific cabinet and fittings", "item", "State internal accessories"],
      [
        "Hardware",
        "Selected hinges, channels and baskets",
        "piece / set",
        "Distinguish standard from upgrades",
      ],
    ],
    mistakes: [
      "Comparing running-foot rates with no height or depth",
      "Charging twice for hardware already in the base rate",
      "Assuming the countertop includes sink and cut-outs",
      "Leaving corner measurements undefined",
    ],
    faq: [
      {
        question: "Should kitchen base and wall units share one rate?",
        answer:
          "Only if the scope and measurement convention justify it and are stated clearly. Separate lines usually make different dimensions and specifications easier to compare.",
      },
      {
        question: "Are appliances part of a modular kitchen quote?",
        answer:
          "Only when listed. Identify each appliance as included, excluded or client-supplied, and state responsibility for measurements and installation coordination.",
      },
    ],
    related: [
      "interior-quotation-format-excel",
      "2bhk-interior-quotation",
      "interior-work-quotation-format",
    ],
  },
  {
    slug: "wardrobe-quotation-format",
    title: "Wardrobe quotation format: dimensions, shutters and storage",
    category: "Project scopes",
    description:
      "Create a wardrobe quotation with a defined measurement basis, carcass and shutter specifications, internal storage, lofts, hardware and installation scope.",
    takeaway:
      "An overall wardrobe size is only the starting point. The price also depends on shutter type, internal divisions, drawers, lofts, finish and the hardware included.",
    sections: [
      {
        title: "Agree on dimensions and the measurement basis",
        paragraphs: [
          "Record width, height and depth from the approved elevation and site measurements. If you quote by elevation area, explicitly say that quantity is width multiplied by height. An 8-foot by 7-foot elevation is 56 square feet, but that does not by itself specify depth, internal layout or material.",
          "Measure lofts, side panels and adjacent dressing units separately when they have distinct specifications. State how fillers, exposed ends and uneven walls are handled. Avoid billing an elevation area without showing which parts of the drawing it represents.",
        ],
      },
      {
        title: "Separate carcass and shutter decisions",
        paragraphs: [
          "Describe the carcass material, thickness, back panel, shelf finish and edge treatment. Then specify shutter material, finish and opening type. Hinged and sliding wardrobes can involve different hardware and layout assumptions, so a change of shutter type deserves a scope review.",
          "If the client is choosing among finishes, show alternatives against the same cabinet dimensions and internal specification. Otherwise, an apparent finish upgrade may hide a simultaneous change in material or storage layout.",
        ],
      },
      {
        title: "List internal fittings and lofts",
        paragraphs: [
          "Count drawers, shelves, hanging sections, pull-outs, mirrors and other accessories. State which are included in the cabinet rate and which are additional. For sliding wardrobes, identify track and mechanism scope; for hinged wardrobes, identify hinges and handles or handleless details.",
          "Give lofts their own dimensions and construction details where appropriate. If a loft shares shutters or structure with the main wardrobe, explain the combined measurement. This prevents the same area or component being priced twice.",
        ],
      },
      {
        title: "Check installation and acceptance details",
        paragraphs: [
          "State delivery, assembly, fixing and finishing responsibilities. Record dependencies such as completed flooring or wall repairs before final measurement. If site dimensions differ from the approved drawing, confirm the revised quantity and layout before production.",
          "At approval, retain the elevation, internal layout, finish references and quotation together. A client may approve the exterior appearance while still expecting a different drawer arrangement; both views need to match the schedule.",
        ],
        checklist: [
          "Width, height and depth recorded",
          "Measurement basis linked to the drawing",
          "Carcass, shutters and finish specified",
          "Internal fittings counted",
          "Loft and installation scope confirmed",
        ],
      },
    ],
    rows: [
      ["Main wardrobe", "Carcass and shutter specification", "sq ft", "Width × height if agreed"],
      [
        "Loft",
        "Separate size and construction details",
        "sq ft / item",
        "Check for overlap with main scope",
      ],
      [
        "Drawers",
        "Specified channels and drawer construction",
        "piece",
        "Confirm included allowance",
      ],
      [
        "Special fittings",
        "Sliding mechanism, pull-outs or mirror",
        "set / piece",
        "Record selected references",
      ],
    ],
    mistakes: [
      "Using square-foot pricing without a measurement definition",
      "Leaving depth and internal divisions unspecified",
      "Counting loft area twice",
      "Changing sliding hardware without revising the scope",
    ],
    faq: [
      {
        question: "Does a square-foot wardrobe rate include drawers?",
        answer:
          "It depends on the stated scope. List the number and specification of included drawers and price additional drawers clearly.",
      },
      {
        question: "Should the loft be a separate quotation item?",
        answer:
          "Use a separate line when it has its own quantity or specification. If it is included in the main item, state the combined scope and avoid counting it again.",
      },
    ],
    related: [
      "modular-kitchen-quotation-format",
      "3bhk-interior-quotation",
      "interior-quotation-format",
    ],
  },
  {
    slug: "interior-work-quotation-format",
    title: "Interior work quotation format: organize every trade clearly",
    category: "Workflow",
    description:
      "Structure a multi-trade interior work quotation with carpentry, civil work, painting, electrical and plumbing schedules, boundaries and variation controls.",
    takeaway:
      "A multi-trade quotation needs clear handoffs. Give every work item a measurable scope and identify who is responsible where one trade meets another.",
    sections: [
      {
        title: "Organize by trade, then by location",
        paragraphs: [
          "Create schedules for the actual trades in the project: carpentry, civil alterations, ceiling, painting, electrical and plumbing where applicable. Under each trade, identify the room or zone. This makes it easier to review specialist inputs while still finding the work that belongs to a particular room.",
          "Use appropriate units for each task. Painting may be measured by area, electrical work by defined points or items, and demolition by a stated quantity or scope. Define what a point or lot includes; a unit label alone does not describe the materials and labour supplied.",
        ],
      },
      {
        title: "Resolve boundaries between trades",
        paragraphs: [
          "Record who forms openings, repairs walls, installs supports and completes finishing after services are altered. If one contractor supplies a fitting and another installs it, identify both responsibilities. Gaps between trades can create extras even when every individual quotation looks complete.",
          "Distinguish material supply from labour-only work. List client-supplied products and confirm who handles unloading, storage and installation. Keep testing, debris removal and protection of existing finishes explicit where they form part of the proposed work.",
        ],
      },
      {
        title: "Manage quantities that need site verification",
        paragraphs: [
          "Some work cannot be confirmed until existing finishes are opened or the site is inspected. Mark the item provisional, give the pricing basis and explain the measurement and approval process. Do not present an allowance as a guaranteed final quantity.",
          "Record assumptions about existing conditions and identify the decision needed before proceeding. If concealed conditions require a change, document the evidence, revised scope and amount for approval. This keeps the base quotation distinct from later discovered work.",
        ],
      },
      {
        title: "Connect the quotation to execution controls",
        paragraphs: [
          "Align work stages with dependencies and payment milestones. For example, cabinetry measurements may depend on completed flooring or wall finishes. State the site-readiness assumptions that support the proposed sequence, without promising a timeline that ignores client decisions or other contractors.",
          "Maintain a variation register with item reference, reason, quantity change and approval status. Reconcile the accepted base amount plus approved variations with the current project summary before issuing further payment requests.",
        ],
        checklist: [
          "Every trade and room identified",
          "Supply versus labour responsibilities clear",
          "Handoffs and making-good work assigned",
          "Provisional quantities labelled",
          "Approved variations reconciled with the base scope",
        ],
      },
    ],
    rows: [
      [
        "Carpentry",
        "Room-wise cabinets and joinery",
        "sq ft / item",
        "Reference drawings and finishes",
      ],
      [
        "Painting",
        "Surface preparation and specified coating",
        "sq ft",
        "Define measured surfaces",
      ],
      [
        "Electrical",
        "Defined point or fitting scope",
        "point / item",
        "State wiring and fixture responsibilities",
      ],
      [
        "Civil / plumbing",
        "Measured alterations and making good",
        "item / measured unit",
        "Flag unverified conditions",
      ],
    ],
    mistakes: [
      "Using a lot rate without describing the work",
      "Leaving wall repairs between two contractors",
      "Treating provisional quantities as fixed",
      "Adding work without recording client approval",
    ],
    faq: [
      {
        question: "What does a labour-only quotation need?",
        answer:
          "List the tasks, measurement basis and labour scope, plus who supplies materials, tools, access and consumables. Clarify supervision and making-good responsibilities.",
      },
      {
        question: "How should unexpected work be added?",
        answer:
          "Record the reason, scope, measurement, amount and effect on the project. Obtain the relevant approval and retain it with the variation record.",
      },
    ],
    related: [
      "interior-quotation-format",
      "interior-quotation-software",
      "interior-design-quotation-template",
    ],
  },
  {
    slug: "interior-quotation-software",
    title: "Interior quotation software: evaluate the workflow before switching",
    category: "Workflow",
    description:
      "Evaluate interior quotation software against your item library, measurement needs, revision process, client documents and project handoff requirements.",
    takeaway:
      "Choose software around a real quotation you already understand. The useful test is whether it preserves scope, calculates consistently and makes revisions easier to trace.",
    sections: [
      {
        title: "Identify the problem you want to solve",
        paragraphs: [
          "Write down where the current process breaks down: repeated item entry, outdated rates, duplicate files, inconsistent totals or missing approval records. A spreadsheet may still be appropriate for a small, controlled workflow. Software becomes more useful when shared information and repeated revisions are difficult to manage reliably.",
          "Separate must-have requirements from conveniences. Your team may need room-wise schedules, several measurement units, reusable specifications and a clean client PDF before it needs any advanced automation. Define success in terms of fewer errors and clearer handoffs rather than a longer feature list.",
        ],
      },
      {
        title: "Test one real project from measurement to issue",
        paragraphs: [
          "Use a representative project containing a kitchen, wardrobe and a few service items. Enter different units, optional items and a provisional quantity. Check the item calculations, room totals and project summary against an independently reviewed reference.",
          "Then revise a quantity and a finish, issue another version and inspect what the client receives. Look for the exact revision reference, preserved specifications and a readable schedule. An attractive dashboard does not replace a document the client can understand.",
        ],
      },
      {
        title: "Review controls beyond the first quotation",
        paragraphs: [
          "Ask how shared items and rates are updated, who can edit issued proposals and how approval evidence is retained. Confirm what happens when a quotation becomes a project or invoice: descriptions, quantities and accepted adjustments should remain traceable rather than needing manual reconstruction.",
          "Check export options, access roles, backups and the process for retrieving project data if the team changes tools. Assess the total effort of setup and staff training as well as the subscription amount. Verify the current capabilities directly in a trial or demonstration rather than assuming every feature is included.",
        ],
      },
      {
        title: "Introduce the tool with a controlled pilot",
        paragraphs: [
          "Start with a cleaned item library and one owner for material specifications and rate updates. Run one complete quotation through the new process, compare the issued document with the reference and record the gaps. Agree on a naming and approval convention before multiple team members start issuing proposals.",
          "Intorza's quotation and AI quotation builder pages provide a starting point for exploring its workflow. Use the same evaluation checklist for any tool and confirm it supports your actual scope and review process before moving live projects.",
        ],
        checklist: [
          "Mixed units calculate correctly",
          "Optional and provisional items remain clear",
          "Issued revisions can be identified",
          "Client documents preserve specifications",
          "Data access, exports and team responsibilities reviewed",
        ],
      },
    ],
    rows: [
      [
        "Item library",
        "Reusable descriptions, specifications and units",
        "test",
        "Update a specification without losing project history",
      ],
      [
        "Calculations",
        "Line amounts, room totals and adjustments",
        "test",
        "Compare against a reviewed reference",
      ],
      [
        "Revisions",
        "Quantity and finish changes after issue",
        "test",
        "Identify the version sent for approval",
      ],
      [
        "Handoff",
        "Approved scope to execution and billing",
        "test",
        "Trace accepted quantities and changes",
      ],
    ],
    mistakes: [
      "Choosing by screenshots alone",
      "Importing an inconsistent rate library",
      "Assuming every claimed feature is in the selected plan",
      "Migrating live projects without a pilot",
    ],
    faq: [
      {
        question: "When should I move beyond Excel?",
        answer:
          "Consider a change when shared editing, repeated revisions, approval records or handoffs repeatedly cause errors. Test whether the proposed tool resolves those specific problems.",
      },
      {
        question: "Can automated quotations skip a site measurement?",
        answer:
          "No automated draft can confirm unverified site dimensions. Review measurements, specifications, rates and scope assumptions before issuing a quotation to a client.",
      },
    ],
    related: [
      "interior-quotation-format-excel",
      "interior-work-quotation-format",
      "interior-quotation-format",
    ],
  },
];

export const quotationCategories = [
  "Start here",
  "File formats",
  "Project scopes",
  "Workflow",
] as const;
export const articlePath = (slug: string) => `/articles/${slug}`;
