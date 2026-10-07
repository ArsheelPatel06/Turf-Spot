import React from 'react';

export default function ProjectPlan() {
  return (
    <div className="max-w-6xl mx-auto border-t border-white/5 pt-32">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4 font-mono">32.17 PERSON-DAYS.<br/>NOT A GUESS.</h2>
        <p className="text-[#9AA3AF] text-lg font-mono">TE = (O + 4M + P) / 6</p>
        <p className="text-sm text-[#667085] mt-4 italic">PERT provides an estimate based on optimistic, most-likely and pessimistic scenarios. It is not a delivery guarantee.</p>
      </div>

      <div className="bg-[#12151A] rounded-2xl border border-white/5 overflow-hidden mb-12">
        <table className="w-full text-left text-sm">
          <thead className="bg-white/5 text-[#9AA3AF] font-mono text-xs uppercase tracking-wider">
            <tr>
              <th className="p-4">Feature</th>
              <th className="p-4 text-center">Optimistic (O)</th>
              <th className="p-4 text-center">Most Likely (M)</th>
              <th className="p-4 text-center">Pessimistic (P)</th>
              <th className="p-4 text-right text-white">Expected (TE)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5 font-mono">
            <tr><td className="p-4">Slot Calendar</td><td className="p-4 text-center">5</td><td className="p-4 text-center">8</td><td className="p-4 text-center">14</td><td className="p-4 text-right font-bold text-white">8.50</td></tr>
            <tr><td className="p-4">Payments & Refunds</td><td className="p-4 text-center">4</td><td className="p-4 text-center">7</td><td className="p-4 text-center">13</td><td className="p-4 text-right font-bold text-white">7.50</td></tr>
            <tr><td className="p-4">Revenue Dashboard</td><td className="p-4 text-center">3</td><td className="p-4 text-center">4</td><td className="p-4 text-center">9</td><td className="p-4 text-right font-bold text-white">4.67</td></tr>
            <tr><td className="p-4">Admin Panel</td><td className="p-4 text-center">3</td><td className="p-4 text-center">5</td><td className="p-4 text-center">8</td><td className="p-4 text-right font-bold text-white">5.17</td></tr>
            <tr><td className="p-4">Testing</td><td className="p-4 text-center">4</td><td className="p-4 text-center">6</td><td className="p-4 text-center">10</td><td className="p-4 text-right font-bold text-white">6.33</td></tr>
            <tr className="bg-[#7CFF6B]/10 text-[#7CFF6B]"><td colSpan={4} className="p-4 font-bold text-right uppercase tracking-wider text-xs">Total Estimated Effort</td><td className="p-4 text-right font-bold text-lg">32.17 Days</td></tr>
          </tbody>
        </table>
      </div>

      <div className="mb-24 max-w-4xl mx-auto">
        <div className="flex justify-between text-sm font-mono text-[#9AA3AF] mb-2 uppercase tracking-wider">
          <span>Estimated Effort (32.17)</span>
          <span>Available Capacity (40)</span>
        </div>
        <div className="h-4 bg-[#161A20] rounded-full overflow-hidden flex border border-white/10">
          <div className="h-full bg-[#7CFF6B]" style={{ width: `(32.17 / 40) * 100%` }} />
          <div className="h-full bg-white/10" style={{ width: `(7.83 / 40) * 100%` }} />
        </div>
        <div className="text-right mt-2 text-xs text-[#667085] font-mono uppercase tracking-wider">Buffer: 7.83 Days</div>
      </div>

      <h3 className="text-2xl font-bold mb-8 text-center">PROJECT GANTT & TIMELINE</h3>
      <div className="overflow-x-auto">
        <div className="min-w-[800px] bg-[#12151A] rounded-2xl border border-white/5 p-8">
          <div className="grid grid-cols-9 gap-4 text-xs font-mono text-[#667085] uppercase tracking-wider border-b border-white/10 pb-4 mb-4">
            <div className="col-span-1">Task</div>
            <div>W1</div><div>W2</div><div>W3</div><div>W4</div><div>W5</div><div>W6</div><div>W7</div><div>W8</div>
          </div>
          <div className="space-y-4">
            <div className="grid grid-cols-9 gap-4 items-center">
              <div className="text-sm font-medium">Reqs & Design</div>
              <div className="col-span-8 relative h-6"><div className="absolute left-0 w-[12.5%] h-full bg-white/20 rounded" /></div>
            </div>
            <div className="grid grid-cols-9 gap-4 items-center relative">
               {/* Marker M1 */}
               <div className="absolute left-[calc(12.5%+120px)] -top-2 w-3 h-3 rotate-45 bg-[#4DA3FF]" title="M1: Requirements & Design Complete" />
            </div>
            <div className="grid grid-cols-9 gap-4 items-center">
              <div className="text-sm font-medium">Slot Calendar</div>
              <div className="col-span-8 relative h-6"><div className="absolute left-[12.5%] w-[25%] h-full bg-[#7CFF6B] rounded" /></div>
            </div>
            <div className="grid grid-cols-9 gap-4 items-center">
              <div className="text-sm font-medium">Admin Panel</div>
              <div className="col-span-8 relative h-6"><div className="absolute left-[12.5%] w-[12.5%] h-full bg-white/20 rounded" /></div>
            </div>
            <div className="grid grid-cols-9 gap-4 items-center">
              <div className="text-sm font-medium">Payments & Refunds</div>
              <div className="col-span-8 relative h-6"><div className="absolute left-[37.5%] w-[25%] h-full bg-[#7CFF6B] rounded" /></div>
            </div>
            <div className="grid grid-cols-9 gap-4 items-center relative">
               {/* Marker M2 */}
               <div className="absolute left-[calc(62.5%+120px)] -top-2 w-3 h-3 rotate-45 bg-[#4DA3FF]" title="M2: Core Booking System Complete" />
            </div>
            <div className="grid grid-cols-9 gap-4 items-center">
              <div className="text-sm font-medium">Rev Dashboard</div>
              <div className="col-span-8 relative h-6"><div className="absolute left-[37.5%] w-[12.5%] h-full bg-white/20 rounded" /><div className="absolute left-[50%] text-[10px] text-white/50 -mt-4">FLOAT 1.5W</div></div>
            </div>
            <div className="grid grid-cols-9 gap-4 items-center">
              <div className="text-sm font-medium">Testing & Fixes</div>
              <div className="col-span-8 relative h-6"><div className="absolute left-[62.5%] w-[25%] h-full bg-[#7CFF6B] rounded" /></div>
            </div>
            <div className="grid grid-cols-9 gap-4 items-center">
              <div className="text-sm font-medium">Deployment</div>
              <div className="col-span-8 relative h-6"><div className="absolute left-[87.5%] w-[12.5%] h-full bg-[#7CFF6B] rounded" /></div>
            </div>
            <div className="grid grid-cols-9 gap-4 items-center relative">
               {/* Marker M3 */}
               <div className="absolute right-2 -top-2 w-3 h-3 rotate-45 bg-[#4DA3FF]" title="M3: Release Candidate" />
            </div>
          </div>
          <div className="mt-8 flex gap-6 text-xs text-[#9AA3AF] font-mono">
            <div className="flex items-center gap-2"><div className="w-3 h-3 bg-[#7CFF6B] rounded-sm" /> Critical Path</div>
            <div className="flex items-center gap-2"><div className="w-3 h-3 bg-white/20 rounded-sm" /> Parallel / Non-Critical</div>
            <div className="flex items-center gap-2"><div className="w-3 h-3 rotate-45 bg-[#4DA3FF]" /> Milestone</div>
          </div>
        </div>
      </div>
    </div>
  );
}