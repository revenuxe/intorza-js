export const drawingServices = [
  ["Furniture layout plan", "Placement of beds, sofas, tables, wardrobes, TV units and other furniture in the proposed layout."],
  ["Interior floor plan", "A plan view describing the arrangement of rooms, openings and interior spaces."],
  ["Interior elevations", "Wall views that communicate furniture, panels, finishes and vertical design elements."],
  ["Electrical layout", "Points, switches and socket locations documented from supplied design requirements."],
  ["Lighting layout", "Proposed fixture positions and relevant lighting placement from the approved direction."],
  ["False ceiling / RCP", "Reflected ceiling plans showing ceiling elements and relevant design information."],
  ["Flooring layout", "Patterns, material zones and transitions required for the intended flooring design."],
  ["Furniture working drawings", "Selected custom furniture elements documented at the level agreed for the project."],
  ["Wardrobe drawings", "Elevations, internal configurations and dimensions based on the approved wardrobe design."],
  ["Modular kitchen drawings", "Kitchen layouts, modules and details from the agreed specifications."],
  ["TV unit drawings", "Elevations and selected details for panels, storage and associated interior elements."],
  ["Vanity & bathroom drawings", "Selected vanity, storage and bathroom interior elements where applicable."],
  ["Sections & details", "Additional views to clarify the construction intent of a particular interior element."],
  ["Interior execution drawings", "An agreed drawing set communicating approved design information to project teams."],
] as const;

export const drawingAudiences = [
  ["Interior designers", "Document approved concepts and layouts for coordination with project teams."],
  ["Interior design studios", "Add drawing capacity while your team manages multiple project commitments."],
  ["Architects", "Discuss drafting support for interior layouts, elevations and selected project details."],
  ["Architecture firms", "Use an extended resource for suitable interior documentation requirements."],
  ["Interior contractors", "Reference clearer layouts and details during vendor and site discussions."],
  ["Turnkey interior companies", "Organize drawing requirements across active projects and execution teams."],
] as const;

export const drawingProcess = [
  ["Share your project", "Send available plans, measurements, layouts, renders, references and notes."],
  ["Define the drawing scope", "Identify the drawings required and the details each sheet should communicate."],
  ["Prepare the drawings", "We document the supplied design information within the agreed scope."],
  ["Review", "Your project contact reviews the drawings and consolidates feedback."],
  ["Refine", "Agreed revisions are incorporated within the defined project scope."],
  ["Final drawing set", "Following review and approval, files are prepared in the agreed format."],
] as const;

export const drawingFaqs = [
  { q: "What are interior working drawings?", a: "Interior working drawings are 2D drawings communicating layouts, dimensions and design information for project planning, coordination and execution discussions." },
  { q: "What is included in an interior working drawing set?", a: "The set is agreed per project. It can include furniture layouts, floor plans, elevations, electrical and lighting layouts, reflected ceiling plans, flooring layouts and selected furniture details." },
  { q: "Who are Intorza’s drawing services for?", a: "Interior designers, design studios, architects, architecture firms, contractors and interior businesses seeking additional drawing and drafting support." },
  { q: "Can you prepare working drawings from a 3D design?", a: "An approved 3D design can be part of the reference material. Dimensions, layouts and specifications may still be needed; a rendered image alone may not contain enough technical information." },
  { q: "Do you provide furniture working drawings?", a: "Suitable wardrobes, kitchens, TV units, storage and other custom interior elements can be discussed. The required views and level of detail are agreed before work begins." },
  { q: "Can I outsource my studio’s drawing work?", a: "Yes. Discuss selected drawings or a broader set based on project requirements. Your business continues to manage its client relationships and project decisions." },
  { q: "Can you support AutoCAD interior drawing requirements?", a: "Share the available CAD files and required deliverables. We confirm the supported workflow and output formats when reviewing the scope rather than assuming a particular software or file format." },
  { q: "Can you create electrical and lighting layouts?", a: "Drawing support can document supplied design requirements. It does not include electrical engineering certification or replace engineering design, site verification or required professional approvals." },
  { q: "How much do interior working drawings cost?", a: "Pricing depends on project size, drawing types, level of detail and completeness of source information. Share your requirements for a scope-specific quote." },
  { q: "How long does a working drawing project take?", a: "Timing depends on the drawing scope, available inputs, complexity and reviews. Delivery timing and revision arrangements are confirmed after reviewing the project." },
];
