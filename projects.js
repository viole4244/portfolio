// ============================================================
//  Edit this file to add projects or change your links.
//  Each project becomes one "ema" plaque in the Works section.
// ============================================================

const PROJECTS = [
  {
    kanji: "銭",                    // decorative glyph on the plaque ("coin")
    title: "Merchant Payment Platform",
    subtitle: "MDR · Settlement · Reconciliation",
    date: "2025",
    status: "In progress",          // optional; omit or leave "" to hide
    description:
      "A scalable merchant payment processing and settlement platform supporting UPI and credit/debit cards, " +
      "with Merchant Discount Rate (MDR) calculation, refunds, reconciliation and settlements.",
    points: [
      "Models how fees are computed per transaction, the same problem I solved in production for Bank of Maharashtra.",
      "Covers the full lifecycle: payment, refund, reconciliation and settlement.",
      "Designed for multiple payment rails (UPI, credit and debit cards).",
    ],
    tech: ["UPI", "Cards", "MDR", "Settlement"],   // swap in the real stack once code lands
    repo: "https://github.com/viole4244/merchant-payment-platform",
    live: "",
  },
  {
    kanji: "心",                    // "heart / mind"
    title: "OptimalYou Chat",
    subtitle: "AI therapy chatbot",
    date: "05/2024",
    status: "",
    description:
      "A conversational wellbeing assistant that understands what a user is going through and responds with " +
      "supportive, context-aware replies.",
    points: [
      "Bidirectional LSTM intent classifier trained on a curated therapy-conversation dataset.",
      "Text pipeline with tokenisation, padding and label encoding for intent understanding.",
      "Interactive Streamlit interface, containerised with Docker and published through GitHub Actions.",
      "Built as a team with Vivek Jha and Kshitij Vijay.",
    ],
    tech: ["Python", "TensorFlow", "LSTM", "Streamlit", "Docker"],
    repo: "https://github.com/viole4244/OptimalYou-Chat",
    live: "",
  },
  {
    kanji: "繋",                    // "connect"
    title: "Nexus",
    subtitle: "Peer-to-peer chat & file transfer",
    date: "06/2025",
    status: "",
    description:
      "A real-time peer-to-peer communication platform: browsers talk directly to each other, and the server " +
      "only helps them find one another.",
    points: [
      "Custom Go signalling server over WebSockets for connection negotiation.",
      "Browser-to-browser file transfer over WebRTC DataChannels, with no server-side storage.",
      "Real-time messaging, multi-file transfer, progress tracking and automatic reconnection.",
    ],
    tech: ["Go", "WebRTC", "WebSockets"],
    repo: "https://github.com/viole4244/nexus",
    live: "",
  },
];

// Leave a url as "" to hide that link.
const SOCIALS = [
  { label: "GitHub",     url: "https://github.com/viole4244" },
  { label: "LinkedIn",   url: "" },  // e.g. https://www.linkedin.com/in/your-handle
  { label: "CodeChef",   url: "" },  // e.g. https://www.codechef.com/users/your-handle
  { label: "Codeforces", url: "" },  // e.g. https://codeforces.com/profile/your-handle
];
