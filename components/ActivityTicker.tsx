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
  const mins = randomBetween(2, 58);
  return `${mins}m ago`;
}

const stats = [
  { value: "62%", label: "of calls missed outside hours" },
  { value: "40hrs", label: "lost weekly to manual tasks" },
  { value: "3–5×", label: "ROI from AI-first operations" },
  { value: "£0", label: "revenue from a missed prospect" },
];

export default function ActivityTicker() {
  const [items, setItems] = useState(() =>
    [...events].sort(() => Math.random() - 0.5).slice(0, 4).map((e, i) => ({
      ...e,
      id: i,
      time: timeAgo(),
    }))
  );

  useEffect(() => {
    const interval = setInterval(() => {
      const newEvent = events[randomBetween(0, events.length - 1)];
      setItems((prev) => [
        { ...newEvent, id: Date.now(), time: "just now" },
        ...prev.slice(0, 3),
      ]);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* Stats grid */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        {stats.map((s) => (
          <div key={s.label} className="p-3 rounded-xl"
            style={{ background: "rgba(21,96,168,0.07)", border: "1px solid rgba(21,96,168,0.12)" }}>
            <div className="font-bold blue-text mb-1" style={{ fontSize: "26px", lineHeight: 1 }}>{s.value}</div>
            <p style={{ fontSize: "11px", color: "#55556A", lineHeight: "1.4" }}>{s.label}</p>
          </div>
        ))}
      </div>

      {/* Divider */}
      <div className="flex items-center gap-3 mb-4">
        <div className="flex-1 h-px" style={{ background: "#1E1E32" }} />
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#16A34A", animation: "pulse 2s infinite" }} />
          <span style={{ fontSize: "10px", color: "#16A34A", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" }}>Live activity</span>
        </div>
        <div className="flex-1 h-px" style={{ background: "#1E1E32" }} />
      </div>

      {/* Live feed */}
      <div className="flex flex-col gap-2">
        {items.map((item, i) => (
          <div key={item.id}
            className="flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-700"
            style={{
              background: i === 0 ? "rgba(21,96,168,0.1)" : "transparent",
              border: `1px solid ${i === 0 ? "rgba(21,96,168,0.2)" : "transparent"}`,
              opacity: i === 0 ? 1 : Math.max(0.35, 1 - i * 0.22),
            }}>
            <span style={{ fontSize: "13px", flexShrink: 0 }}>{item.icon}</span>
            <div className="flex-1 min-w-0">
              <p style={{ fontSize: "12px", fontWeight: 600, color: "#EEEEF5", margin: 0 }}>{item.text}</p>
              <p style={{ fontSize: "11px", color: "#55556A", margin: 0 }}>{item.detail}</p>
            </div>
            <span style={{ fontSize: "11px", color: i === 0 ? "#5BA3E0" : "#55556A", flexShrink: 0 }}>{item.time}</span>
            {i === 0 && <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#5BA3E0", animation: "pulse 2s infinite" }} />}
          </div>
        ))}
      </div>
    </div>
  );
}
