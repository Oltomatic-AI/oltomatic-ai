"use client";
import { useEffect, useState } from "react";

const events = [
  { icon: "📞", text: "Call handled", detail: "Hospitality · London" },
  { icon: "🎯", text: "Lead qualified", detail: "Dental practice · Manchester" },
  { icon: "📅", text: "Appointment booked", detail: "Hair & beauty · Birmingham" },
  { icon: "📊", text: "Prospects researched", detail: "32 new contacts found" },
  { icon: "📞", text: "After-hours call answered", detail: "Trades · Leeds" },
  { icon: "🎯", text: "Hot lead flagged", detail: "Professional services · Bristol" },
  { icon: "📅", text: "Meeting confirmed", detail: "Consulting firm · Edinburgh" },
  { icon: "📞", text: "Lead captured", detail: "Estate agent · Glasgow" },
  { icon: "📊", text: "Pipeline updated", detail: "47 prospects scored" },
  { icon: "✉️", text: "Reply received", detail: "Positive response · Leeds" },
  { icon: "📞", text: "Call transferred", detail: "Human handoff · London" },
];

export default function ActivityTicker() {
  const [items, setItems] = useState<typeof events>([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const seed = [...events].sort(() => Math.random() - 0.5).slice(0, 4);
    setItems(seed);
    setCount(1247 + Math.floor(Math.random() * 60));

    const interval = setInterval(() => {
      setItems((prev) => {
        const next = events[Math.floor(Math.random() * events.length)];
        return [next, ...prev].slice(0, 4);
      });
      setCount((c) => c + Math.floor(Math.random() * 3) + 1);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="flex items-baseline gap-2 mb-5">
        <span className="font-bold" style={{ fontSize: "32px", color: "#EEEEF5", lineHeight: 1 }}>{count.toLocaleString()}</span>
        <span className="text-sm" style={{ color: "#55556A" }}>actions automated this month</span>
      </div>
      <div className="flex flex-col gap-2.5">
        {items.map((item, i) => (
          <div key={`${item.text}-${i}`} className="flex items-center gap-3 p-3 rounded-lg transition-all duration-500"
            style={{ background: i === 0 ? "rgba(21,96,168,0.08)" : "transparent", border: i === 0 ? "1px solid rgba(21,96,168,0.2)" : "1px solid transparent", opacity: 1 - i * 0.18 }}>
            <span style={{ fontSize: "16px" }}>{item.icon}</span>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate" style={{ color: "#EEEEF5" }}>{item.text}</p>
              <p className="text-xs truncate" style={{ color: "#55556A" }}>{item.detail}</p>
            </div>
            {i === 0 && <span className="text-xs px-2 py-0.5 rounded-full flex-shrink-0" style={{ background: "rgba(22,163,74,0.15)", color: "#16A34A" }}>just now</span>}
          </div>
        ))}
      </div>
    </div>
  );
}
