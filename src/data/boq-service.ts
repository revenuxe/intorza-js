export const boqServices = [
  ["BOQ preparation", "Structure relevant project items, quantities, units and costing fields in a Bill of Quantities."],
  ["Room-wise BOQ", "Group items by living room, bedrooms, kitchen, dining, foyer and other agreed spaces."],
  ["Item-wise estimation", "Review individual elements such as wardrobes, kitchens, TV units, ceilings and furniture."],
  ["Quantity takeoff", "Extract suitable quantities from supplied drawings and measurements where the documentation supports it."],
  ["Material estimation", "Structure material-related quantities when specifications and project scope are sufficiently defined."],
  ["Interior cost estimation", "Apply agreed rates or supplied pricing information to reviewed quantities."],
  ["BOQ from floor plans", "Use dimensioned plans alongside the design and specification information needed for the estimate."],
  ["BOQ from drawings", "Review relevant 2D and working drawings to organize project quantities and item descriptions."],
  ["Quotation preparation", "Use reviewed project items and pricing as the foundation for a client-facing quotation."],
] as const;
export const boqAudiences = [
  ["Interior designers", "Translate layouts and design requirements into a structured estimation brief."],
  ["Interior design studios", "Add estimation capacity when multiple enquiries and projects need review."],
  ["Interior contractors", "Prepare item-wise and room-wise information for execution project estimates."],
  ["Turnkey interior companies", "Organize quantities and pricing inputs across rooms and work categories."],
  ["Architects & firms", "Discuss estimation support for suitable interior scopes using available project drawings."],
  ["Interior execution teams", "Use reviewed quantities for internal costing, vendor discussion and quotation preparation."],
] as const;
export const boqRooms = [
  ["Living room", "TV units, wall treatments, ceilings, storage and selected furniture."],
  ["Master bedroom", "Wardrobes, beds, side tables, dressing units and ceilings."],
  ["Bedroom", "Storage, study units, beds and other room-specific requirements."],
  ["Kitchen", "Base, wall and tall units, storage and defined kitchen components."],
  ["Dining", "Crockery units, storage, partitions and related elements."],
  ["Foyer", "Shoe racks, mirrors, partitions and entry-area storage."],
  ["Kids room", "Wardrobes, desks, beds and selected furniture or storage."],
  ["Utility / other spaces", "Additional spaces included according to project scope and documentation."],
] as const;
export const boqItems = ["Wardrobe", "Loft", "Modular kitchen", "TV unit", "Bed", "Side table", "Dressing unit", "Study table", "Crockery unit", "Shoe rack", "Pooja unit", "Vanity", "Wall paneling", "False ceiling", "Storage", "Bookshelf", "Headboard", "Partitions"];
export const boqExamples = [
  { room: "Master bedroom", item: "Wardrobe", description: "Custom wardrobe", quantity: "24", unit: "Sq Ft" },
  { room: "Living room", item: "TV unit", description: "TV wall unit", quantity: "18", unit: "Sq Ft" },
  { room: "Kitchen", item: "Base unit", description: "Kitchen base cabinets", quantity: "16", unit: "R Ft" },
  { room: "Living room", item: "False ceiling", description: "Ceiling work", quantity: "120", unit: "Sq Ft" },
];
export const boqProcess = [
  ["Share your project", "Provide available plans, drawings, measurements, design notes and requirements."],
  ["Define the scope", "Confirm the rooms, items and type of estimation required."],
  ["Review quantities", "Review or structure quantities from the supplied project documentation."],
  ["Prepare the BOQ", "Organize the agreed information into a room-wise or item-wise structure."],
  ["Apply pricing inputs", "Where available, apply agreed rates or supplied pricing to estimate cost."],
  ["Review and finalize", "Review quantities, assumptions and pricing before finalizing the agreed deliverable."],
  ["Prepare a quotation", "Use the reviewed information in Intorza’s quotation tools where appropriate."],
] as const;
export const boqFaqs = [
  { q: "What is a BOQ in interior design?", a: "A Bill of Quantities is a structured document organizing relevant interior project items, descriptions, quantities, units and costing information." },
  { q: "What can an interior BOQ include?", a: "The agreed scope may include room-wise or item-wise information for wardrobes, kitchens, TV units, ceilings, storage, furniture and other defined interior work. Every item is not automatically included." },
  { q: "Who are Intorza’s BOQ services for?", a: "Interior designers, studios, contractors, turnkey firms, architects and interior execution businesses seeking additional estimation support." },
  { q: "Can you prepare a BOQ from a floor plan?", a: "A floor plan can help, but the detail possible depends on dimensions, specifications and other design information. A plan alone may not establish heights, internal furniture details or material requirements." },
  { q: "Can working drawings be used for BOQ preparation?", a: "Suitable working drawings can provide dimensions and specifications for quantity review. The drawing set is assessed for completeness and unresolved details before the scope is agreed." },
  { q: "Do you provide quantity takeoff services?", a: "Quantity takeoff support can be discussed for interior scopes where the supplied drawings and measurements contain sufficient information." },
  { q: "Can you estimate materials?", a: "Material estimation can be supported where dimensions, specifications and project requirements are defined. Procurement allowances and final purchasing quantities need project-specific review." },
  { q: "Where do project rates come from?", a: "Cost estimation uses agreed rates, supplied vendor pricing or other pricing inputs confirmed for the assignment. Intorza does not promise universally accurate or real-time market rates." },
  { q: "Can I create a quotation after reviewing the BOQ?", a: "Yes. Reviewed items, quantities and pricing can be entered into Intorza’s existing quotation tools to prepare and download a client quotation. This does not imply automatic BOQ import or transfer." },
  { q: "Does an estimate guarantee the final project cost?", a: "No. An estimate depends on measurements, drawings, specifications, quantities and pricing available when it is prepared. Changes in scope, selections and execution conditions can change the cost." },
  { q: "How much does BOQ preparation cost?", a: "The fee depends on project size, rooms, documentation quality, detail level and the estimation scope. Share the requirements for review before a quote is confirmed." },
  { q: "How long does BOQ preparation take?", a: "Timing depends on project scope, available documentation and the review process. Delivery timing and revision arrangements are confirmed after reviewing the brief." },
];
