import React from 'react';
import { CalendarCheck, ShieldCheck, RefreshCcw, LineChart } from 'lucide-react';

export default function Solution() {
  const features = [
    {
      num: "01",
      title: "SMART SLOT BOOKING",
      desc: "Real-time availability prevents conflicting reservations.",
      icon: CalendarCheck
    },
    {
      num: "02",
      title: "ADVANCE PAYMENT",
      desc: "Payment confirmation secures the booking.",
      icon: ShieldCheck
    },
    {
      num: "03",
      title: "RULE-BASED REFUNDS",
      desc: "Cancellation policies automatically determine refund eligibility.",
      icon: RefreshCcw
    },
    {
      num: "04",
      title: "REVENUE INTELLIGENCE",
      desc: "Owners can see booking and revenue performance from one dashboard.",
      icon: LineChart
    }
  ];

  return (
    <div>
      <h2 className="text-4xl font-bold mb-12 text-center">THE SOLUTION</h2>
      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {features.map((f, i) => (
          <div key={i} className="bg-[#12151A] rounded-2xl border border-white/5 p-8 hover:-translate-y-1 transition-transform duration-300">
            <div className="flex items-start justify-between mb-8">
              <div className="text-sm font-mono text-[#667085]">{f.num}</div>
              <f.icon size={24} className="text-[#7CFF6B]" />
            </div>
            <h3 className="text-xl font-bold mb-3">{f.title}</h3>
            <p className="text-[#9AA3AF] leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}