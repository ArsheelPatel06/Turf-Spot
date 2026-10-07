import React from 'react';

export default function Architecture() {
  return (
    <div className="max-w-5xl mx-auto border-t border-white/5 pt-32">
      <h2 className="text-3xl font-bold mb-12 text-center">ARCHITECTURE & DESIGN</h2>
      
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="bg-[#12151A] rounded-2xl border border-white/5 p-8 text-center relative font-mono text-sm">
          <div className="border border-white/20 rounded-lg p-4 mb-8 bg-[#161A20]">PLAYER / WEB APPLICATION</div>
          <div className="w-px h-8 bg-white/20 mx-auto" />
          <div className="border border-[#7CFF6B]/30 rounded-lg p-6 bg-[#161A20] text-left">
            <div className="font-bold text-center text-[#7CFF6B] mb-4">BOOKING SERVICE</div>
            <ul className="space-y-2 text-[#9AA3AF] ml-4">
              <li>├─ Slot Management</li>
              <li>├─ Payment Module</li>
              <li>├─ Refund Module</li>
              <li>└─ Revenue Module</li>
            </ul>
          </div>
          <div className="w-px h-8 bg-white/20 mx-auto" />
          <div className="border border-white/20 rounded-lg p-4 bg-[#161A20]">DATABASE</div>
          
          <div className="absolute right-[-40px] top-1/2 transform -translate-y-1/2 hidden lg:block">
            <div className="flex items-center">
              <div className="h-px w-8 bg-white/20" />
              <div className="border border-[#4DA3FF]/30 rounded-lg p-4 bg-[#161A20] text-[#4DA3FF]">
                PAYMENT GATEWAY
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4 text-white">Cohesion & Coupling</h3>
          <p className="text-[#9AA3AF] mb-6 leading-relaxed">
            The architecture is designed to maximize <strong>High Cohesion</strong> and minimize <strong>Low Coupling</strong>. 
          </p>
          <div className="space-y-6">
            <div className="border-l-2 border-[#7CFF6B] pl-4">
              <h4 className="font-bold mb-1 text-white">High Cohesion</h4>
              <p className="text-sm text-[#667085]">Each module performs one clearly defined responsibility. The Booking Module only handles slot reservations, delegating monetary logic to the Payment Module.</p>
            </div>
            <div className="border-l-2 border-[#4DA3FF] pl-4">
              <h4 className="font-bold mb-1 text-white">Low Coupling</h4>
              <p className="text-sm text-[#667085]">The Booking Service does not contain payment gateway implementation details. It relies on a Payment Adapter, allowing the gateway (Razorpay) to be replaced without rewriting booking logic.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}