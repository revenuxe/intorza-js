type ReviewBrief = {
  heading: string;
  situation: string;
  views: [string, string][];
  decision: string;
};

export const renderingReviewBriefs: Record<string, ReviewBrief> = {
  "living-room-rendering": {
    heading: "Choose living-room views around the seating decision",
    situation: "If the client is deciding between a sectional sofa and separate seating, a feature-wall close-up will not explain the difference. Brief the views around the room arrangement before spending review time on accessories.",
    views: [["Entry view", "Show the seating group, TV wall and route toward adjoining spaces together."], ["Seated perspective", "Review the feature-wall composition and relationship between furniture pieces."], ["Finish comparison", "Keep the camera and lighting consistent when comparing two approved panel finishes."]],
    decision: "Use the views to discuss the preferred arrangement and finish direction. Check actual passage widths on the dimensioned plan; a wide-angle image can make a tight room appear more spacious than it is.",
  },
  "bedroom-visualization": {
    heading: "Make a bedroom review about layout before styling",
    situation: "A bed, wardrobe and door may fit in plan yet compete for attention in a small bedroom. Ask for a view that shows those relationships rather than a bed-only image that hides the storage wall.",
    views: [["Doorway view", "Show the bed position, wardrobe face and window relationship."], ["Bedside view", "Review the headboard, bedside surfaces and lighting direction."], ["Storage-facing view", "Explain shutter divisions and the visible dressing arrangement."]],
    decision: "Agree the visible furniture and finish composition, then return to plans and elevations for usable dimensions and storage internals. A rendered closed wardrobe does not demonstrate how drawers or doors operate.",
  },
  "kitchen-rendering": {
    heading: "Compare kitchen finishes without changing the layout",
    situation: "When the cabinet layout is already approved, the next question may be whether a lighter shutter finish works with the chosen worktop. Keep the geometry fixed so the comparison isolates the finish decision.",
    views: [["Main cabinet run", "Show base units, wall units, worktop and backsplash in one composition."], ["Return or tall-unit angle", "Reveal how the finish continues around corners and appliance housings."], ["Matched finish option", "Use the same camera and light setup for each selected shutter alternative."]],
    decision: "Use the images to shortlist the visual combination, then confirm physical samples. Appliance installation gaps, cabinet internals and service connections still need the relevant product data and working drawings.",
  },
  "dining-area-visualization": {
    heading: "Frame the table, pendant and surrounding storage together",
    situation: "A dining area often shares space with the living room. A useful visualization should explain the transition between these zones, including whether the pendant and storage composition relate to the actual table position.",
    views: [["Living-to-dining view", "Show the dining group in the context of adjoining furniture."], ["Table composition", "Review pendant placement, wall treatment and crockery storage together."], ["Storage detail", "Discuss finish and display emphasis where these are part of the scope."]],
    decision: "Choose the visual emphasis without treating an image as proof of chair-pullout clearance. Verify the selected table and chair dimensions against the room plan before approving the layout.",
  },
  "office-commercial-interiors": {
    heading: "Separate visitor-facing and working-area presentations",
    situation: "A commercial brief may need to explain both the arrival experience and how the team uses the workspace. Decide who will review the images so a reception-focused presentation does not leave workstation planning unanswered.",
    views: [["Arrival perspective", "Show reception, brand elements and the route into the interior."], ["Working-area overview", "Explain workstation groupings and meeting-space relationships."], ["Selected meeting space", "Review enclosure, visible finishes and furniture direction."]],
    decision: "The visualization supports design discussion. Occupancy, accessibility, fire safety, services and workplace performance need separate professional verification; they cannot be established by a convincing image.",
  },
  "full-home-visualization": {
    heading: "Build a view register before commissioning every room",
    situation: "A full-home set should tell a coherent design story without repeatedly showing the same decision. Identify one primary review purpose for each room and a shared reference for finishes that continue between spaces.",
    views: [["Living and dining", "Explain the connected public areas and common material direction."], ["Kitchen", "Review the cabinet/worktop combination and its relationship to adjoining spaces."], ["Bedrooms", "Give each bedroom its own storage and furniture brief rather than copying one scheme throughout."]],
    decision: "Record room name, view identifier, design revision and unresolved choices in the review list. When a shared finish changes, identify every affected room before approving the set; do not assume one revised image updates all the others.",
  },
  "photorealistic-interior-rendering": {
    heading: "Review realism against references, not image polish alone",
    situation: "A highly polished render can still communicate the wrong material or lighting direction. A useful review compares scale, finish response and the supplied design references before focusing on decorative detail.",
    views: [["Overall perspective", "Check object proportions, room geometry and camera distortion."], ["Material-focused crop", "Compare grain direction, joint rhythm and surface response with the selected reference."], ["Lighting condition", "Agree whether the image represents daytime, artificial light or a deliberate presentation mood."]],
    decision: "Screen settings, image exposure and lighting affect perceived colour and sheen. Use physical samples and product specifications for final selection; photorealism does not guarantee an exact match to a completed room.",
  },
  "design-concept-visualization": {
    heading: "Compare concept directions before resolving every detail",
    situation: "At concept stage, a client may need to choose between a quiet material palette and a stronger feature-wall treatment. The brief should state what is exploratory so the image is not mistaken for a fully specified design.",
    views: [["Base concept", "Present the proposed room arrangement and first material direction."], ["Controlled alternative", "Change the agreed focal element while keeping unrelated decisions consistent."], ["Decision notes", "Identify provisional products, finishes and dimensions accompanying each option."]],
    decision: "Record which direction was selected and what remains undecided. Carry those decisions into the next design stage rather than treating a concept image as an approved construction or procurement document.",
  },
  "master-bedroom-rendering": {
    heading: "Coordinate the bed wall with the dressing zone",
    situation: "A master bedroom often combines sleeping, dressing and storage in one room. Request complementary views so an elaborate headboard image does not conceal an unresolved wardrobe or dressing arrangement.",
    views: [["Bed-wall perspective", "Review headboard proportions, bedside elements and the intended light mood."], ["Wardrobe perspective", "Explain the visible storage facade and its relationship to the bed."], ["Dressing transition", "Show how the mirror, surface and finish palette connect the zones."]],
    decision: "Resolve the visible composition while checking clearances and wardrobe functionality separately. Mirror reflections can obscure or duplicate details in a render, so use the elevation as the reference for the actual arrangement.",
  },
  "kids-bedroom-rendering": {
    heading: "Show study, sleep and storage as separate uses",
    situation: "A child's room should be briefed around actual use and the supplied furniture decisions, not only a theme. Identify which features are fixed and which may change as needs develop.",
    views: [["Room overview", "Show the bed, study position and storage zones together."], ["Study view", "Review the desk, shelving and window relationship."], ["Storage view", "Explain the selected front arrangement and how it fits the room's visual direction."]],
    decision: "Use visualization to discuss the arrangement and palette. Product suitability, fixing, guarding and other safety requirements need separate verification by the responsible adults, vendors and professionals; an illustration does not establish child safety.",
  },
  "foyer-rendering": {
    heading: "Present the entry experience from the arrival direction",
    situation: "A foyer can look attractive in a close-up while hiding the front-door swing or the route into the home. Choose the arrival view first, then use a second angle for the storage and partition composition.",
    views: [["Arrival view", "Show the console or shoe storage in relation to the entrance."], ["Partition view", "Explain screening, material openness and the transition into the living area."], ["Finish detail", "Review mirror, panel and storage-front relationships where included."]],
    decision: "Agree the welcome and screening effect, then verify door operation, storage depth and circulation on the measured plan. Reflections and a wide lens can make a compact entrance difficult to judge from the image alone.",
  },
  "home-office-rendering": {
    heading: "Review the workspace from both working and meeting views",
    situation: "For a home office, the client may care about the desk environment and the background seen on video calls. These are different viewpoints and should be identified separately in the brief.",
    views: [["Room overview", "Show the desk, storage and relationship to the rest of the room."], ["Desk-facing view", "Review the window relationship, surfaces and visible equipment arrangement."], ["Call-background view", "Discuss the shelving or wall composition behind the seated user."]],
    decision: "The images help choose the visible arrangement. Test the actual seating setup, monitor position, glare and equipment needs separately; a styled desk render is not an ergonomic or lighting-performance assessment.",
  },
};
