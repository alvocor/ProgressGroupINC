export const site = {
  name: "Progress Group Inc.",
  meta: {
    title: "Progress Group Inc. | Business & Management Consulting",
    description:
      "A focused consulting presentation for business process, management, project, operational improvement, and specialized advisory services.",
  },
  navigation: [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Approach", href: "#approach" },
    { label: "Contact", href: "#contact" },
  ],
  hero: {
    eyebrow: "Business & Management Consulting",
    title: "Progress, made practical.",
    body: "Bring structure to complex work, improve the way operations move, and turn business priorities into focused action.",
  },
  questions: [
    "Where is work slowing down or becoming harder than it should be?",
    "Which priorities need clearer ownership and a more workable path forward?",
    "How can an important initiative move from intent to coordinated execution?",
    "Which operating practices should be simplified, clarified, or strengthened?",
  ],
  services: [
    {
      number: "01",
      title: "Business Process Consulting",
      summary:
        "Examine how work moves across people, decisions, and systems. Identify friction, clarify handoffs, and shape practical improvements around the real operating context.",
    },
    {
      number: "02",
      title: "Management Consulting",
      summary:
        "Bring structure to priorities, operating questions, and organizational decisions. Frame the situation clearly, evaluate options, and support a focused course of action.",
    },
    {
      number: "03",
      title: "Project Consulting",
      summary:
        "Help important initiatives move from planning into coordinated execution by clarifying outcomes, dependencies, responsibilities, risks, and decisions.",
    },
    {
      number: "04",
      title: "Operational Improvement",
      summary:
        "Review day-to-day practices with attention to flow, consistency, ownership, and avoidable complexity, then frame manageable improvement opportunities.",
    },
    {
      number: "05",
      title: "Specialized Advisory",
      summary:
        "Define focused support around a particular business question when a standard engagement model does not fit the situation.",
    },
  ],
  approach: [
    {
      title: "Understand",
      summary: "Establish the context, desired outcome, constraints, and what is currently known.",
    },
    {
      title: "Clarify",
      summary: "Surface the most important questions, dependencies, and decision points.",
    },
    {
      title: "Align",
      summary: "Shape practical priorities, responsibilities, and a workable path forward.",
    },
    {
      title: "Advance",
      summary: "Support implementation, review progress, and adjust as new information emerges.",
    },
  ],
} as const;
