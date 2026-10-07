import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import Requirements from './components/Requirements';
import Architecture from './components/Architecture';
import UML from './components/UML';
import ProjectPlan from './components/ProjectPlan';
import Testing from './components/Testing';
import Risks from './components/Risks';
import PresentationMode from './components/PresentationMode';

export default function CaseStudy() {
  const [presentationMode, setPresentationMode] = useState(false);

  if (presentationMode) {
    return <PresentationMode onClose={() => setPresentationMode(false)} />;
  }

  return (
    <div className="min-h-screen bg-[#08090B] text-[#F5F7FA] font-sans selection:bg-[#7CFF6B] selection:text-black">
      <Navbar onEnterPresentation={() => setPresentationMode(true)} />
      
      <main className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 pt-24 pb-32 space-y-32">
        <Hero />
        
        <section id="problem">
          <Problem />
        </section>

        <section id="solution">
          <Solution />
        </section>

        <section id="requirements">
          <Requirements />
        </section>

        <section id="architecture">
          <Architecture />
        </section>

        <section id="uml">
          <UML />
        </section>

        <section id="planning">
          <ProjectPlan />
        </section>

        <section id="testing">
          <Testing />
        </section>

        <section id="risks">
          <Risks />
        </section>

      </main>

      <footer className="border-t border-white/10 py-12 px-6 text-center text-[#9AA3AF]">
        <h2 className="text-xl font-bold text-white mb-2">BOOKMYTURF</h2>
        <p className="mb-6 italic">"Book the Game. Own the Slot."</p>
        <p className="text-sm">Built as a B.Tech CSE Software Engineering & Project Management case study.</p>
      </footer>
    </div>
  );
}
