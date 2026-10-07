import React, { useState } from 'react';

export default function UML() {
  const [activeTab, setActiveTab] = useState('use-case');

  const tabs = [
    { id: 'use-case', label: 'Use Case' },
    { id: 'class', label: 'Class' },
    { id: 'sequence', label: 'Sequence' },
    { id: 'activity', label: 'Activity' },
    { id: 'state', label: 'State' },
    { id: 'full', label: 'Full System' },
  ];

  return (
    <div className="max-w-6xl mx-auto border-t border-white/5 pt-32">
      <h2 className="text-3xl font-bold mb-12 text-center">UML SYSTEM DESIGN</h2>
      
      <div className="flex gap-2 border-b border-white/10 mb-8 overflow-x-auto">
        {tabs.map(tab => (
          <button 
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`pb-4 px-6 text-sm font-medium uppercase tracking-wider whitespace-nowrap transition-colors ${activeTab === tab.id ? 'text-[#7CFF6B] border-b-2 border-[#7CFF6B]' : 'text-[#667085] hover:text-[#9AA3AF]'}`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="bg-[#12151A] rounded-2xl border border-white/5 p-8 flex flex-col items-center justify-center min-h-[500px]">
        {activeTab === 'use-case' && (
          <div className="text-center text-[#9AA3AF] space-y-4">
            <h3 className="text-white font-bold text-xl mb-4">Use Case Diagram</h3>
            <p className="max-w-xl mx-auto">Actors: Player, Admin, Payment Gateway.</p>
            <div className="grid grid-cols-3 gap-8 text-left mt-8">
               <div className="bg-[#161A20] p-4 rounded border border-white/5">
                 <h4 className="font-bold text-white mb-2">Player</h4>
                 <ul className="list-disc pl-4 space-y-1 text-sm">
                   <li>Register/Login</li>
                   <li>Browse Facilities</li>
                   <li>Book Slot</li>
                   <li>Make Payment</li>
                 </ul>
               </div>
               <div className="bg-[#161A20] p-4 rounded border border-white/5">
                 <h4 className="font-bold text-white mb-2">Admin</h4>
                 <ul className="list-disc pl-4 space-y-1 text-sm">
                   <li>Manage Facilities</li>
                   <li>Manage Slots</li>
                   <li>View Revenue</li>
                 </ul>
               </div>
               <div className="bg-[#161A20] p-4 rounded border border-white/5">
                 <h4 className="font-bold text-white mb-2">Gateway</h4>
                 <ul className="list-disc pl-4 space-y-1 text-sm">
                   <li>Process Payment</li>
                   <li>Process Refund</li>
                 </ul>
               </div>
            </div>
          </div>
        )}
        
        {activeTab === 'class' && (
          <div className="text-center text-[#9AA3AF]">
            <h3 className="text-white font-bold text-xl mb-4">Class Diagram</h3>
            <div className="flex justify-center gap-8 font-mono text-sm">
               <div className="border border-[#7CFF6B]/30 p-4 rounded bg-[#161A20] text-left">
                  <div className="text-[#7CFF6B] font-bold border-b border-white/10 pb-2 mb-2">Booking</div>
                  <div>- bookingId</div>
                  <div>- status</div>
                  <div className="mt-2 text-white/50">+ confirm()</div>
               </div>
               <div className="pt-8 text-white/20">1 --- 1</div>
               <div className="border border-[#4DA3FF]/30 p-4 rounded bg-[#161A20] text-left">
                  <div className="text-[#4DA3FF] font-bold border-b border-white/10 pb-2 mb-2">Payment</div>
                  <div>- paymentId</div>
                  <div>- amount</div>
                  <div className="mt-2 text-white/50">+ process()</div>
               </div>
            </div>
            <p className="mt-8 text-sm italic">Core domain relationships connecting Users, Facilities, Slots, Bookings, and Payments.</p>
          </div>
        )}

        {activeTab === 'sequence' && (
          <div className="text-center text-[#9AA3AF] w-full max-w-2xl">
            <h3 className="text-white font-bold text-xl mb-8">Sequence: Book & Pay</h3>
            <div className="space-y-4 font-mono text-sm text-left">
               <div className="flex gap-4"><span className="text-[#7CFF6B]">Player</span> <span>→</span> <span className="text-white">Booking UI</span> <span>: Select slot</span></div>
               <div className="flex gap-4"><span className="text-white">Booking UI</span> <span>→</span> <span className="text-white">Service</span> <span>: Request availability</span></div>
               <div className="flex gap-4"><span className="text-white">Service</span> <span>→</span> <span className="text-[#4DA3FF]">Gateway</span> <span>: Initiate payment</span></div>
               <div className="flex gap-4"><span className="text-[#4DA3FF]">Gateway</span> <span>→</span> <span className="text-[#7CFF6B]">Player</span> <span>: Payment success</span></div>
               <div className="flex gap-4"><span className="text-white">Service</span> <span>→</span> <span className="text-white">Database</span> <span>: Update booking CONFIRMED</span></div>
            </div>
          </div>
        )}

        {activeTab === 'activity' && (
          <div className="text-center text-[#9AA3AF] w-full flex flex-col items-center">
            <h3 className="text-white font-bold text-xl mb-8">Activity Diagram</h3>
            
            <div className="flex flex-col items-center font-mono text-xs text-white">
              <div className="w-12 h-12 rounded-full bg-[#161A20] border-2 border-white/20 flex items-center justify-center font-bold">START</div>
              <div className="h-6 w-px bg-white/20" />
              
              <div className="px-6 py-3 rounded border border-white/10 bg-[#161A20]">Select Facility, Date & Slot</div>
              <div className="h-6 w-px bg-white/20" />
              
              <div className="relative">
                <div className="w-32 h-32 rotate-45 border border-[#F5B942]/50 bg-[#F5B942]/10 flex items-center justify-center absolute left-1/2 -translate-x-1/2" />
                <div className="w-32 h-32 flex items-center justify-center relative z-10 text-center px-4 font-bold text-[#F5B942]">Slot<br/>Available?</div>
                
                {/* NO Branch */}
                <div className="absolute top-1/2 -left-32 w-32 h-px bg-white/20 flex items-center justify-center">
                  <span className="bg-[#12151A] px-2 text-[#FF5C5C] -mt-6">NO</span>
                </div>
                <div className="absolute top-1/2 -left-32 w-px h-[100px] bg-white/20 -mt-[100px]" />
                <div className="absolute top-[calc(50%-100px)] -left-32 w-[128px] h-px bg-white/20 flex justify-end">
                   <div className="w-2 h-2 border-t border-r border-white/20 rotate-45 mr-[-4px] mt-[-3px]" />
                </div>
              </div>
              
              <div className="h-10 w-px bg-white/20 flex justify-center">
                <span className="bg-[#12151A] px-2 text-[#7CFF6B] mt-2">YES</span>
              </div>
              
              <div className="px-6 py-3 rounded border border-white/10 bg-[#161A20]">Enter Details & Make Payment</div>
              <div className="h-6 w-px bg-white/20" />
              
              <div className="relative">
                <div className="w-32 h-32 rotate-45 border border-[#F5B942]/50 bg-[#F5B942]/10 flex items-center justify-center absolute left-1/2 -translate-x-1/2" />
                <div className="w-32 h-32 flex items-center justify-center relative z-10 text-center px-4 font-bold text-[#F5B942]">Payment<br/>Success?</div>
                
                {/* NO Branch */}
                <div className="absolute top-1/2 -right-32 w-32 h-px bg-white/20 flex items-center justify-center">
                  <span className="bg-[#12151A] px-2 text-[#FF5C5C] -mt-6">NO</span>
                </div>
                <div className="absolute top-1/2 -right-32 w-px h-[88px] bg-white/20" />
                <div className="absolute top-[calc(50%+88px)] -right-32 w-[90px] h-px bg-white/20 flex justify-start">
                   <div className="w-2 h-2 border-b border-l border-white/20 rotate-45 ml-[-4px] mt-[-3px]" />
                </div>
                <div className="absolute top-[calc(50%+68px)] -right-24 px-4 py-2 rounded border border-white/10 bg-[#161A20]">Release Slot</div>
              </div>
              
              <div className="h-10 w-px bg-white/20 flex justify-center">
                <span className="bg-[#12151A] px-2 text-[#7CFF6B] mt-2">YES</span>
              </div>
              
              <div className="px-6 py-3 rounded border border-white/10 bg-[#161A20] z-10 relative">Confirm Booking & Email</div>
              <div className="h-6 w-px bg-white/20" />
              
              <div className="w-12 h-12 rounded-full bg-[#161A20] border-2 border-white/20 flex items-center justify-center font-bold z-10 relative">END</div>
            </div>
          </div>
        )}

        {activeTab === 'state' && (
          <div className="text-center text-[#9AA3AF]">
            <h3 className="text-white font-bold text-xl mb-8">Booking State Lifecycle</h3>
            <div className="flex flex-col items-center gap-4 font-mono font-bold text-sm">
              <div className="px-6 py-2 rounded-full border border-white/20 bg-white/5">AVAILABLE</div>
              <div className="h-4 w-px bg-white/20" />
              <div className="px-6 py-2 rounded-full border border-[#F5B942]/30 text-[#F5B942] bg-[#F5B942]/5">HELD</div>
              <div className="h-4 w-px bg-white/20" />
              <div className="px-6 py-2 rounded-full border border-[#7CFF6B]/30 text-[#7CFF6B] bg-[#7CFF6B]/5">CONFIRMED</div>
              <div className="h-4 w-px bg-white/20" />
              <div className="px-6 py-2 rounded-full border border-[#FF5C5C]/30 text-[#FF5C5C] bg-[#FF5C5C]/5">CANCELLED</div>
            </div>
          </div>
        )}

        {activeTab === 'full' && (
          <div className="text-center text-[#9AA3AF] w-full max-w-4xl">
            <h3 className="text-white font-bold text-xl mb-8">Full System Architecture & UML Overview</h3>
            
            <div className="grid grid-cols-3 gap-8 font-mono text-xs items-center relative">
              {/* Connectors Background */}
              <div className="absolute top-1/2 left-[16%] right-[16%] h-px bg-white/10 -translate-y-1/2 z-0 hidden md:block" />
              <div className="absolute top-1/4 bottom-1/4 left-1/2 w-px bg-white/10 -translate-x-1/2 z-0 hidden md:block" />
              
              {/* Left Column: Actors */}
              <div className="flex flex-col gap-8 relative z-10">
                <div className="bg-[#161A20] border border-white/20 p-4 rounded text-center">
                  <div className="text-white font-bold mb-2">PLAYER</div>
                  <div className="text-[#667085]">Web Interface</div>
                  <div className="text-[#667085]">Mobile App</div>
                </div>
                <div className="bg-[#161A20] border border-white/20 p-4 rounded text-center">
                  <div className="text-white font-bold mb-2">ADMIN</div>
                  <div className="text-[#667085]">Management Portal</div>
                </div>
              </div>
              
              {/* Middle Column: Core Services */}
              <div className="bg-[#12151A] border-2 border-[#7CFF6B]/30 p-6 rounded-xl relative z-10 shadow-[0_0_30px_rgba(124,255,107,0.05)]">
                <div className="text-[#7CFF6B] font-bold text-sm mb-4 text-center">CORE BOOKING API</div>
                
                <div className="space-y-3">
                  <div className="bg-[#161A20] border border-white/10 p-2 rounded text-center text-white">
                    Auth Service
                  </div>
                  <div className="bg-[#161A20] border border-white/10 p-2 rounded text-center text-white">
                    Slot Management Service
                  </div>
                  <div className="bg-[#161A20] border border-white/10 p-2 rounded text-center text-white">
                    Booking & State Service
                  </div>
                  <div className="bg-[#161A20] border border-white/10 p-2 rounded text-center text-white">
                    Payment & Refund Adapter
                  </div>
                </div>
              </div>
              
              {/* Right Column: Infrastructure & External */}
              <div className="flex flex-col gap-8 relative z-10">
                <div className="bg-[#161A20] border border-[#F5B942]/30 p-4 rounded text-center">
                  <div className="text-[#F5B942] font-bold mb-2">MONGODB</div>
                  <div className="text-[#667085]">Users, Facilities, Slots, Bookings, Payments</div>
                </div>
                <div className="bg-[#161A20] border border-[#4DA3FF]/30 p-4 rounded text-center">
                  <div className="text-[#4DA3FF] font-bold mb-2">RAZORPAY</div>
                  <div className="text-[#667085]">Payment Gateway</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}