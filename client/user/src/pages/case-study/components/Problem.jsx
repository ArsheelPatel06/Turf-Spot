import React from 'react';
import { Phone, Calendar, AlertTriangle, Users, TrendingDown } from 'lucide-react';

export default function Problem() {
  return (
    <div className="space-y-16">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold mb-4">THE PROBLEM</h2>
        <p className="text-xl text-[#9AA3AF]">Phone calls don't scale.</p>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center max-w-4xl mx-auto">
        {[
          { icon: Phone, text: "PHONE BOOKINGS" },
          { icon: Calendar, text: "MANUAL SLOT TRACKING" },
          { icon: AlertTriangle, text: "DOUBLE BOOKINGS" },
          { icon: Users, text: "UNPAID NO-SHOWS" },
          { icon: TrendingDown, text: "REVENUE LEAKAGE" }
        ].map((step, i) => (
          <React.Fragment key={i}>
            <div className="flex flex-col items-center gap-3">
              <div className="w-16 h-16 rounded-2xl bg-[#12151A] border border-white/5 flex items-center justify-center">
                <step.icon size={24} className={i >= 2 ? "text-[#FF5C5C]" : "text-[#667085]"} />
              </div>
              <span className="text-[11px] font-bold tracking-wider uppercase text-[#9AA3AF] w-24">{step.text}</span>
            </div>
            {i < 4 && <div className="h-8 w-px md:w-8 md:h-px bg-white/10" />}
          </React.Fragment>
        ))}
      </div>

      <div className="max-w-xl mx-auto bg-[#12151A] rounded-2xl border border-white/5 p-8 text-center mt-12 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#FF5C5C] to-transparent opacity-50" />
        <div className="text-5xl font-bold font-mono text-[#FF5C5C] mb-2">₹32,200</div>
        <div className="text-[#9AA3AF] uppercase tracking-wider text-sm font-medium mb-8">Estimated monthly revenue loss</div>
        
        <div className="flex justify-between items-center text-sm font-mono text-[#F5F7FA]">
          <div className="text-left">
            <div className="mb-2"><span className="text-[#FF5C5C]">9</span> double bookings/month</div>
            <div><span className="text-[#FF5C5C]">14</span> unpaid no-shows/month</div>
          </div>
          <div className="text-right border-l border-white/10 pl-6">
            <div className="mb-2">₹1,400 avg. slot price</div>
            <div className="text-[#667085]">= ₹386,400 annualized</div>
          </div>
        </div>
      </div>
    </div>
  );
}