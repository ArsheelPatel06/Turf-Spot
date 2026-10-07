import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative pt-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(124,255,107,0.08),transparent_40%)] pointer-events-none" />
      
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="text-[12px] font-bold tracking-[0.08em] text-[#9AA3AF] mb-6 uppercase">
            Software Engineering & Project Management
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6">
            BOOK THE GAME.<br/>
            <span className="text-[#7CFF6B]">OWN THE SLOT.</span>
          </h1>
          <p className="text-lg text-[#9AA3AF] mb-10 max-w-xl leading-relaxed">
            An online sports facility booking platform designed to eliminate double bookings, 
            secure advance payments, simplify cancellations and give facility owners complete revenue visibility.
          </p>
          <div className="flex items-center gap-4">
            <Link to="/" className="bg-[#7CFF6B] text-[#050505] px-6 py-3 rounded-xl font-semibold hover:bg-[#4ADE80] transition-colors flex items-center gap-2">
              Explore Platform <ChevronRight size={18} />
            </Link>
            <button onClick={() => document.getElementById('problem')?.scrollIntoView({ behavior: 'smooth'})} className="px-6 py-3 rounded-xl font-semibold border border-white/10 text-white hover:bg-white/5 transition-colors">
              View Engineering
            </button>
          </div>
        </div>

        <div className="relative border border-white/10 rounded-2xl bg-[#12151A] shadow-2xl overflow-hidden shadow-[#7CFF6B]/5">
          <div className="h-10 bg-[#161A20] border-b border-white/5 flex items-center px-4 gap-2">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-white/10" />
              <div className="w-3 h-3 rounded-full bg-white/10" />
              <div className="w-3 h-3 rounded-full bg-white/10" />
            </div>
            <div className="mx-auto text-xs font-mono text-white/30">bookmyturf.app</div>
          </div>
          <div className="p-8 aspect-video flex flex-col justify-center items-center text-[#667085]">
            <img src="/turf-booking-ui.webp" alt="UI Demo" className="w-full h-full object-cover rounded shadow-lg opacity-80" onError={(e) => e.target.style.display='none'} />
            <span className="text-sm">Live Application Interface</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-24 border-t border-white/5 pt-12">
        <div>
          <div className="text-4xl font-bold font-mono mb-2">₹32,200</div>
          <div className="text-xs tracking-wider text-[#9AA3AF] uppercase">Monthly Revenue Loss</div>
          <div className="text-xs text-[#7CFF6B] mt-2">+ Revenue leakage identified</div>
        </div>
        <div>
          <div className="text-4xl font-bold font-mono mb-2">32.17</div>
          <div className="text-xs tracking-wider text-[#9AA3AF] uppercase">Estimated Person-Days</div>
        </div>
        <div>
          <div className="text-4xl font-bold font-mono mb-2">40</div>
          <div className="text-xs tracking-wider text-[#9AA3AF] uppercase">Available Working Days</div>
        </div>
        <div>
          <div className="text-4xl font-bold font-mono mb-2">12</div>
          <div className="text-xs tracking-wider text-[#9AA3AF] uppercase">Sports Facilities</div>
        </div>
      </div>
    </div>
  );
}