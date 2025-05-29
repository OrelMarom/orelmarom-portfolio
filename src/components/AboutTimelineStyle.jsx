// NOTE: Currently not used, but kept for potential future use

import { useState } from "react";
import { Button } from "../components/ui/button";
import { motion } from "framer-motion";

const filters = ["All", "UX", "Dev", "PM"];

const timeline = [
  {
    role: "Tracxpoint – AI Analyst & QA Lead",
    period: "2022–2024",
    category: ["UX", "PM"],
    highlight: "שילוב בין ניתוח דאטה, ניהול צוות ובחינה חווייתית של מוצר חכם",
  },
  {
    role: "University of Haifa – TA",
    period: "2020–2022",
    category: ["Dev"],
    highlight: "הנגשה של מושגים טכניים מורכבים והקמת מערכות אוטומציה",
  },
  {
    role: "B.Sc. Computer Science",
    period: "2018–2022",
    category: ["Dev", "PM"],
    highlight: "ניהול ייצוגי מול מאות סטודנטים, לצד למידה טכנולוגית מעמיקה",
  },
  {
    role: "UX Certificate – Technion (2024) *expected*",
    period: "2024",
    category: ["UX"],
    highlight: "מעבר מעולם הפיתוח לעולמות החשיבה הממוקדת-משתמש",
  },
  {
    role: "IAF – Air Ops Control Sergeant",
    period: "2014–2016",
    category: ["PM"],
    highlight: "תכנון מערכתי וניהול עומסים ברגעי אמת",
  },
];

export default function AboutTimeline() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? timeline
      : timeline.filter((item) => item.category.includes(active));

  return (
    <div className="max-w-3xl mx-auto p-4 mt-10">
      <h2 className="text-2xl font-semibold mb-6 text-center">
        From Algorithms to Interfaces: My Journey in Tech
      </h2>

      <div className="flex justify-center gap-4 mb-8">
        {filters.map((f) => (
          <Button
            key={f}
            variant={active === f ? "default" : "outline"}
            onClick={() => setActive(f)}
          >
            {f === "All"
              ? "📋 All"
              : f === "UX"
              ? "🔍 UX"
              : f === "Dev"
              ? "💻 Dev"
              : "📊 PM"}
          </Button>
        ))}
      </div>

      <div className="space-y-6">
        {filtered.map((item, index) => (
          <motion.div
            key={index}
            className="border-l-4 border-gray-300 pl-4 relative"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="absolute left-[-8px] top-1 w-3 h-3 bg-gray-400 rounded-full"></div>
            <p className="text-sm text-gray-500">{item.period}</p>
            <h3 className="text-lg font-medium">{item.role}</h3>
            <p className="text-gray-700 mt-1">{item.highlight}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
