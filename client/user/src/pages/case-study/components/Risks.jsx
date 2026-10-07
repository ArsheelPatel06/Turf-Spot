import React, { useState } from 'react';

export default function Risks() {
  const [selectedRisk, setSelectedRisk] = useState(null);

  const risks = [
    { id: 'R-01', title: 'Payment Gateway Approval Delay', prob: 4, imp: 5, exp: 20, mit: 'Start sandbox integration early.', mon: 'Track approval/API status.', mgt: 'Use mock payment adapter until approval.', owner: 'Backend Developer' },
    { id: 'R-02', title: 'Refund Disputes', prob: 3, imp: 4, exp: 12, mit: 'Clear UI warnings before cancellation.', mon: 'Track support tickets.', mgt: 'Admin override for edge cases.', owner: 'Product/Admin' },
    { id: 'R-03', title: 'Double Booking Defect', prob: 2, imp: 5, exp: 10, mit: 'Strict DB constraints and transactions.', mon: 'Automated test suites.', mgt: 'Manual DB correction script.', owner: 'Database Admin' },
    { id: 'R-04', title: 'Requirement Changes', prob: 3, imp: 3, exp: 9 },
    { id: 'R-05', title: 'Integration Failure', prob: 2, imp: 4, exp: 8 },
  ];

  return (
    <div className="max-w-6xl mx-auto border-t border-white/5 pt-32">
      <h2 className="text-3xl font-bold mb-12 text-center">RISK MANAGEMENT</h2>
      
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-xl font-bold mb-6">Probability × Impact Matrix</h3>
          <div className="relative w-full aspect-square max-w-md mx-auto bg-[#12151A] border border-white/10 rounded-xl p-8">
            {/* Grid */}
            <div className="absolute inset-8 grid grid-cols-5 grid-rows-5 border-l border-b border-white/20">
               {Array.from({length: 25}).map((_, i) => (
                 <div key={i} className="border-r border-t border-white/5" />
               ))}
               
               {/* Risk markers */}
               <button onClick={() => setSelectedRisk(risks[0])} className="absolute w-8 h-8 rounded-full bg-[#FF5C5C]/20 border-2 border-[#FF5C5C] flex items-center justify-center text-xs font-bold hover:scale-110 transition-transform cursor-pointer" style={{ bottom: '70%', left: '90%', transform: 'translate(-50%, 50%)' }}>R1</button>
               <button onClick={() => setSelectedRisk(risks[1])} className="absolute w-8 h-8 rounded-full bg-[#F5B942]/20 border-2 border-[#F5B942] flex items-center justify-center text-xs font-bold hover:scale-110 transition-transform cursor-pointer" style={{ bottom: '50%', left: '70%', transform: 'translate(-50%, 50%)' }}>R2</button>
               <button onClick={() => setSelectedRisk(risks[2])} className="absolute w-8 h-8 rounded-full bg-[#F5B942]/20 border-2 border-[#F5B942] flex items-center justify-center text-xs font-bold hover:scale-110 transition-transform cursor-pointer" style={{ bottom: '30%', left: '90%', transform: 'translate(-50%, 50%)' }}>R3</button>
            </div>
            {/* Labels */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-xs font-mono text-[#9AA3AF] uppercase">Impact (1-5)</div>
            <div className="absolute left-2 top-1/2 -translate-y-1/2 -rotate-90 text-xs font-mono text-[#9AA3AF] uppercase">Probability (1-5)</div>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-6">Risk Register (RMMM)</h3>
          <div className="space-y-4">
            {risks.map(r => (
              <div 
                key={r.id} 
                className={`p-4 rounded-xl border transition-colors cursor-pointer ${selectedRisk?.id === r.id ? 'bg-[#161A20] border-[#7CFF6B]/50' : 'bg-[#12151A] border-white/5 hover:border-white/20'}`}
                onClick={() => setSelectedRisk(r)}
              >
                <div className="flex justify-between items-center mb-2">
                  <div className="font-bold flex items-center gap-3">
                    <span className="font-mono text-xs text-[#9AA3AF]">{r.id}</span>
                    {r.title}
                  </div>
                  <div className={`text-xs font-mono font-bold px-2 py-1 rounded ${r.exp >= 15 ? 'bg-[#FF5C5C]/10 text-[#FF5C5C]' : r.exp >= 10 ? 'bg-[#F5B942]/10 text-[#F5B942]' : 'bg-[#7CFF6B]/10 text-[#7CFF6B]'}`}>
                    EXP: {r.exp}
                  </div>
                </div>
                
                {selectedRisk?.id === r.id && r.mit && (
                  <div className="mt-4 pt-4 border-t border-white/5 text-sm space-y-3 text-[#9AA3AF]">
                    <div><strong className="text-white">Mitigation:</strong> {r.mit}</div>
                    <div><strong className="text-white">Monitoring:</strong> {r.mon}</div>
                    <div><strong className="text-white">Management:</strong> {r.mgt}</div>
                    <div><strong className="text-white">Owner:</strong> {r.owner}</div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}