import React, { useState } from 'react';

export default function Requirements() {
  const [activeTab, setActiveTab] = useState('functional');

  const frs = [
    { id: 'FR-01', title: 'User Registration/Login', prio: 'SHOULD', desc: 'System shall allow users to register and login securely.' },
    { id: 'FR-02', title: 'Browse Sports Facilities', prio: 'MUST', desc: 'System shall display available turfs and courts.' },
    { id: 'FR-03', title: 'View Slot Availability', prio: 'MUST', desc: 'System shall display real-time availability of slots for a selected date.' },
    { id: 'FR-04', title: 'Prevent Double Booking', prio: 'MUST', desc: 'System shall prevent more than one confirmed booking for the same facility, date and slot.' },
    { id: 'FR-05', title: 'Create Booking', prio: 'MUST', desc: 'System shall allow a logged-in user to initiate a slot booking.' },
    { id: 'FR-06', title: 'Advance Payment', prio: 'MUST', desc: 'System shall securely process advance payment before confirming.' },
    { id: 'FR-07', title: 'Cancel Booking', prio: 'MUST', desc: 'System shall allow user to cancel a confirmed booking.' },
    { id: 'FR-08', title: 'Calculate and Process Refund', prio: 'MUST', desc: 'System shall automatically calculate refund based on business rules.' },
    { id: 'FR-09', title: 'Admin Facility and Booking Management', prio: 'MUST', desc: 'Admin shall be able to view, manage and cancel bookings.' },
    { id: 'FR-10', title: 'Revenue Dashboard and Reporting', prio: 'MUST', desc: 'System shall generate a revenue report for facility owners.' },
  ];

  const nfrs = [
    { id: 'NFR-01', title: 'Double-booking prevention', desc: 'The system shall maintain zero confirmed double bookings during normal operation.' },
    { id: 'NFR-02', title: 'Concurrent booking integrity', desc: 'When two users attempt to book the same slot concurrently, at most one booking shall reach CONFIRMED status.' },
    { id: 'NFR-03', title: 'Payment reliability', desc: 'At least 99% of valid payment requests shall receive a definitive success/failure response.' },
    { id: 'NFR-04', title: 'Slot availability response time', desc: 'At least 95% of slot availability requests shall respond within 2 seconds under defined normal load.' },
    { id: 'NFR-05', title: 'Booking response time', desc: 'At least 95% of booking confirmation requests shall complete within 3 seconds excluding external payment gateway processing.' },
    { id: 'NFR-06', title: 'Availability', desc: 'The system shall maintain 99.5% monthly availability excluding scheduled maintenance.' },
    { id: 'NFR-07', title: 'Refund processing', desc: 'A valid cancellation shall calculate the applicable refund and initiate the refund transaction within 5 seconds after successful validation.' }
  ];

  return (
    <div className="max-w-6xl mx-auto border-t border-white/5 pt-32">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">BUILT WITH ENGINEERING DISCIPLINE</h2>
        <p className="text-[#9AA3AF] text-lg">Every feature traces back to a requirement, design decision and test.</p>
      </div>

      <div className="flex justify-center gap-8 mb-12">
        <div className="text-center">
          <div className="text-4xl font-mono font-bold mb-1">10</div>
          <div className="text-[11px] uppercase tracking-wider text-[#9AA3AF]">Functional Requirements</div>
        </div>
        <div className="text-center">
          <div className="text-4xl font-mono font-bold mb-1">7</div>
          <div className="text-[11px] uppercase tracking-wider text-[#9AA3AF]">Non-Functional Requirements</div>
        </div>
      </div>

      <div className="flex gap-4 border-b border-white/10 mb-8 justify-center">
        {['functional', 'non-functional', 'moscow'].map(tab => (
          <button 
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-4 px-4 text-sm font-medium uppercase tracking-wider transition-colors ${activeTab === tab ? 'text-[#7CFF6B] border-b-2 border-[#7CFF6B]' : 'text-[#667085] hover:text-[#9AA3AF]'}`}
          >
            {tab}
          </button>
        ))}
      </div>

      {activeTab === 'functional' && (
        <div className="grid gap-4">
          {frs.map(r => (
            <div key={r.id} className="bg-[#12151A] border border-white/5 p-4 rounded-xl flex items-center justify-between group hover:border-white/10 transition-colors cursor-default">
              <div className="flex items-center gap-6">
                <div className="font-mono text-sm text-[#9AA3AF]">{r.id}</div>
                <div className="font-bold">{r.title}</div>
              </div>
              <div className="flex items-center gap-6 text-sm">
                <div className="text-[#667085] hidden md:block group-hover:text-[#9AA3AF] transition-colors">{r.desc}</div>
                <div className={`text-[11px] font-bold px-2 py-1 rounded ${r.prio === 'MUST' ? 'bg-[#7CFF6B]/10 text-[#7CFF6B]' : 'bg-[#4DA3FF]/10 text-[#4DA3FF]'}`}>
                  {r.prio}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'non-functional' && (
        <div className="grid gap-4">
          {nfrs.map(r => (
            <div key={r.id} className="bg-[#12151A] border border-white/5 p-6 rounded-xl">
              <div className="flex items-center gap-4 mb-2">
                <div className="font-mono text-sm text-[#7CFF6B]">{r.id}</div>
                <div className="font-bold text-lg">{r.title}</div>
              </div>
              <p className="text-[#9AA3AF]">{r.desc}</p>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'moscow' && (
        <div className="grid md:grid-cols-4 gap-6">
          <div className="bg-[#12151A] border-t-2 border-[#7CFF6B] p-6 rounded-b-xl border-x border-b border-white/5">
            <h3 className="font-bold mb-4 text-[#7CFF6B]">MUST HAVE</h3>
            <ul className="text-sm text-[#9AA3AF] space-y-3">
              <li>Slot availability</li>
              <li>Double-booking prevention</li>
              <li>Booking</li>
              <li>Advance payment</li>
              <li>Cancellation</li>
              <li>Refund</li>
              <li>Admin booking management</li>
              <li>Revenue dashboard</li>
            </ul>
          </div>
          <div className="bg-[#12151A] border-t-2 border-[#4DA3FF] p-6 rounded-b-xl border-x border-b border-white/5">
            <h3 className="font-bold mb-4 text-[#4DA3FF]">SHOULD HAVE</h3>
            <ul className="text-sm text-[#9AA3AF] space-y-3">
              <li>Login</li>
              <li>Booking history</li>
              <li>Email confirmation</li>
              <li>Report export</li>
            </ul>
          </div>
          <div className="bg-[#12151A] border-t-2 border-[#9AA3AF] p-6 rounded-b-xl border-x border-b border-white/5">
            <h3 className="font-bold mb-4 text-[#9AA3AF]">COULD HAVE</h3>
            <ul className="text-sm text-[#667085] space-y-3">
              <li>Coupons</li>
              <li>Reviews</li>
              <li>Notifications</li>
              <li>Maps</li>
            </ul>
          </div>
          <div className="bg-[#12151A] border-t-2 border-[#333] p-6 rounded-b-xl border-x border-b border-white/5">
            <h3 className="font-bold mb-4 text-[#667085]">WON'T HAVE</h3>
            <ul className="text-sm text-[#444] space-y-3">
              <li>AI recommendations</li>
              <li>Loyalty system</li>
              <li>Tournament management</li>
              <li>Live chat</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}