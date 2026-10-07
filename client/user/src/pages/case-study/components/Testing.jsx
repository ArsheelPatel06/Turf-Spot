import React, { useState } from 'react';

export default function Testing() {
  const [activeTab, setActiveTab] = useState('bva');

  return (
    <div className="max-w-6xl mx-auto border-t border-white/5 pt-32">
      <h2 className="text-3xl font-bold mb-12 text-center">QUALITY ASSURANCE</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
        <div className="bg-[#12151A] rounded-xl border border-white/5 p-6 text-center">
          <div className="text-3xl font-mono font-bold text-white mb-1">42</div>
          <div className="text-[11px] uppercase tracking-wider text-[#9AA3AF]">Test Cases</div>
        </div>
        <div className="bg-[#12151A] rounded-xl border border-white/5 p-6 text-center">
          <div className="text-3xl font-mono font-bold text-[#7CFF6B] mb-1">40</div>
          <div className="text-[11px] uppercase tracking-wider text-[#9AA3AF]">Pass</div>
        </div>
        <div className="bg-[#12151A] rounded-xl border border-white/5 p-6 text-center">
          <div className="text-3xl font-mono font-bold text-[#F5B942] mb-1">92%</div>
          <div className="text-[11px] uppercase tracking-wider text-[#9AA3AF]">DRE</div>
          <div className="text-[9px] text-[#667085] mt-1 italic">Illustrative Calculation</div>
        </div>
        <div className="bg-[#12151A] rounded-xl border border-white/5 p-6 text-center">
          <div className="text-3xl font-mono font-bold text-[#FF5C5C] mb-1">1.2</div>
          <div className="text-[11px] uppercase tracking-wider text-[#9AA3AF]">Defect Density (per KLOC)</div>
          <div className="text-[9px] text-[#667085] mt-1 italic">Illustrative Calculation</div>
        </div>
      </div>

      <div className="flex gap-4 border-b border-white/10 mb-8">
        {['bva', 'decision-table', 'defects'].map(tab => (
          <button 
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-4 px-4 text-sm font-medium uppercase tracking-wider transition-colors ${activeTab === tab ? 'text-[#7CFF6B] border-b-2 border-[#7CFF6B]' : 'text-[#667085] hover:text-[#9AA3AF]'}`}
          >
            {tab.replace('-', ' ')}
          </button>
        ))}
      </div>

      <div className="bg-[#12151A] rounded-2xl border border-white/5 p-8">
        {activeTab === 'bva' && (
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Boundary Value Analysis: Refund Policy</h3>
            <p className="text-[#9AA3AF] text-sm mb-8">Assumed business rule for the case study: Cancellations trigger different refund percentages based on hours remaining before the slot.</p>
            
            <div className="relative pt-8 pb-12 overflow-x-auto">
              <div className="min-w-[600px] relative h-2 bg-white/10 rounded-full flex items-center">
                 <div className="absolute left-0 w-[10%] h-full bg-[#FF5C5C] rounded-l-full" />
                 <div className="absolute left-[10%] w-[35%] h-full bg-[#F5B942]" />
                 <div className="absolute left-[45%] w-[35%] h-full bg-[#4DA3FF]" />
                 <div className="absolute left-[80%] w-[20%] h-full bg-[#7CFF6B] rounded-r-full" />
                 
                 {/* Markers */}
                 <div className="absolute left-[10%] w-0.5 h-6 bg-white -mt-2"><div className="absolute top-8 -left-2 text-xs font-mono">2h</div></div>
                 <div className="absolute left-[45%] w-0.5 h-6 bg-white -mt-2"><div className="absolute top-8 -left-3 text-xs font-mono">12h</div></div>
                 <div className="absolute left-[80%] w-0.5 h-6 bg-white -mt-2"><div className="absolute top-8 -left-3 text-xs font-mono">24h</div></div>
              </div>
              <div className="min-w-[600px] mt-16 flex justify-between text-xs font-mono text-[#9AA3AF]">
                <div>0% Refund</div>
                <div>50% Refund</div>
                <div>75% Refund</div>
                <div>100% Refund</div>
              </div>
            </div>
            
            <div className="mt-8 bg-[#161A20] p-4 rounded-xl border border-white/5 font-mono text-sm text-[#9AA3AF]">
              <div className="text-white mb-2">Test Values Selected at Boundaries:</div>
              1, <span className="text-[#7CFF6B] font-bold">2</span>, 3, 11, <span className="text-[#7CFF6B] font-bold">12</span>, 13, 23, <span className="text-[#7CFF6B] font-bold">24</span>, 25
            </div>
          </div>
        )}

        {activeTab === 'decision-table' && (
          <div>
             <h3 className="text-xl font-bold mb-6 text-white">Decision Table: Cancellations</h3>
             <table className="w-full text-left text-sm border-collapse">
               <thead className="bg-[#161A20] border-b border-white/10">
                 <tr>
                   <th className="p-4 font-normal text-[#9AA3AF]">Conditions / Rules</th>
                   <th className="p-4 font-mono text-white text-center">R1</th>
                   <th className="p-4 font-mono text-white text-center">R2</th>
                   <th className="p-4 font-mono text-white text-center">R3</th>
                   <th className="p-4 font-mono text-white text-center">R4</th>
                 </tr>
               </thead>
               <tbody className="divide-y divide-white/5 font-mono">
                 <tr><td className="p-4 text-[#9AA3AF]">&ge; 24 hours</td><td className="p-4 text-center text-[#7CFF6B]">Y</td><td className="p-4 text-center">-</td><td className="p-4 text-center">-</td><td className="p-4 text-center">-</td></tr>
                 <tr><td className="p-4 text-[#9AA3AF]">12–23 hours</td><td className="p-4 text-center">-</td><td className="p-4 text-center text-[#7CFF6B]">Y</td><td className="p-4 text-center">-</td><td className="p-4 text-center">-</td></tr>
                 <tr><td className="p-4 text-[#9AA3AF]">2–11 hours</td><td className="p-4 text-center">-</td><td className="p-4 text-center">-</td><td className="p-4 text-center text-[#7CFF6B]">Y</td><td className="p-4 text-center">-</td></tr>
                 <tr><td className="p-4 text-[#9AA3AF]">&lt; 2 hours</td><td className="p-4 text-center">-</td><td className="p-4 text-center">-</td><td className="p-4 text-center">-</td><td className="p-4 text-center text-[#7CFF6B]">Y</td></tr>
                 <tr className="bg-white/5"><td colSpan={5} className="p-2"></td></tr>
                 <tr><td className="p-4 text-white font-bold">Refund Action</td><td className="p-4 text-center font-bold">100%</td><td className="p-4 text-center font-bold">75%</td><td className="p-4 text-center font-bold">50%</td><td className="p-4 text-center font-bold">0%</td></tr>
               </tbody>
             </table>
          </div>
        )}

        {activeTab === 'defects' && (
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Defect Log</h3>
            <table className="w-full text-left text-sm border-collapse">
               <thead className="bg-[#161A20] border-b border-white/10 text-[#9AA3AF]">
                 <tr>
                   <th className="p-4 font-normal">ID</th>
                   <th className="p-4 font-normal">Severity</th>
                   <th className="p-4 font-normal">Issue</th>
                   <th className="p-4 font-normal">Status</th>
                 </tr>
               </thead>
               <tbody className="divide-y divide-white/5 font-mono">
                 <tr>
                   <td className="p-4">DEF-01</td>
                   <td className="p-4"><span className="text-[#FF5C5C] bg-[#FF5C5C]/10 px-2 py-1 rounded text-xs">CRITICAL</span></td>
                   <td className="p-4">Payment success fails to update booking status</td>
                   <td className="p-4 text-[#7CFF6B]">CLOSED</td>
                 </tr>
                 <tr>
                   <td className="p-4">DEF-02</td>
                   <td className="p-4"><span className="text-[#F5B942] bg-[#F5B942]/10 px-2 py-1 rounded text-xs">MEDIUM</span></td>
                   <td className="p-4">Refund boundary exactly at 12.00 hours calculates wrong tier</td>
                   <td className="p-4 text-[#7CFF6B]">CLOSED</td>
                 </tr>
               </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}