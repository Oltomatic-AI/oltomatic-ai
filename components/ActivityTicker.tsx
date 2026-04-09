"use client";
import { useEffect, useState } from "react";

const events = [
  { icon: "📞", text: "Call handled", detail: "Hospitality · London" },
  { icon: "🎯", text: "Lead qualified", detail: "Dental practice · Manchester" },
  { icon: "📅", text: "Appointment booked", detail: "Hair & beauty · Birmingham" },
  { icon: "📊", text: "Prospects researched", detail: "32 new contacts found" },
  { icon: "📞", text: "After-hours call answered", detail: "Trades · Leeds" },
  { icon: "✉️", text: "Outreach sent", detail: "18 personalised emails" },
  { icon: "🎯", text: "Hot lead flagged", detail: "Professional services · Bristol" },
  { icon: "📅", text: "Meeting confirmed", detail: "Consulting firm · Edinburgh" },
  { icon: "📞", text: "Lead captured", detail: "Estate agent · Glasgow" },
  { icon: "📊", text: "Pipeline updated", detail: "47 prospects scored" },
  { icon: "✉️", text: "Reply received", detail: "Positive response · Leeds" },
  { icon: "📞", text: "Call transferred", detail: "Human handoff · London" },
];

function randomBetween(a: number, b: number) {
  return Math.floor(Math.random() * (b - a + 1)) + a;
}

function timeAgo() {
  const mins = randomBetween(1, 59);
  return mins === 1 ? "1 min ago" : `${mins} mins ago`;
}

export default function ActivityTicker() {
  const [items, setItems] = useState(() =>
    [...events].sort(() => Math.random() - 0.5).slice(0, 6).map((e, i) => ({
      ...e,
      id: i,
      time: timeAgo(),
    }))
  );
  const [, forceUpdate] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const newEvent = events[randomBetween(0, events.length - 1)];
      setItems((prev) => {
        const next = [
          { ...newEvent, id: Date.now(), time: "just now" },
          ...prev.slice(0, 5),
        ];
        return next;
      });
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden" style={{ height: "260px" }}>
      {/* Fade top */}
      <div className="absolute top-0 left-0 right-0 h-8 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, #0D0D1A, transparent)" }} />
      {/* Fade bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-8 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to top, #0D0D1A, transparent)" }} />

      <div className="flex flex-col gap-2 px-1">
        {items.map((item, i) => (
          <div key={item.id}
            className="flex items-center gap-3 px-4 py-2.5 rounded-xl transition-all duration-500"
            style={{
              background: i === 0 ? "rgba(21,96,168,0.12)" : "rgba(255,255,255,0.03)",
              border: `1px solid ${i === 0 ? "rgba(21,96,168,0.25)" : "rgba(255,255,255,0.05)"}`,
              opacity: i === 0 ? 1 : Math.max(0.3, 1 - i * 0.15),
              transform: `scale(${i === 0 ? 1 : 0.98})`,
            }}>
            <span style={{ fontSize: "14px" }}>{item.icon}</span>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-semibold truncate" style={{ color: "#EEEEF5" }}>{item.text}</p>
              <p className="text-xs truncate" style={{ color: "#55556A" }}>{item.detail}</p>
            </div>
            <span className="text-xs flex-shrink-0" style={{ color: i === 0 ? "#5BA3E0" : "#55556A" }}>
              {item.time}
            </span>
            {i === 0 && (
              <span className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                style={{ background: "#5BA3E0", animation: "pulse 2s infinite" }} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
