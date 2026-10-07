import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

import Hero from './Hero';
import Problem from './Problem';
import Solution from './Solution';
import Requirements from './Requirements';
import Architecture from './Architecture';
import UML from './UML';
import ProjectPlan from './ProjectPlan';
import Testing from './Testing';
import Risks from './Risks';

export default function PresentationMode({ onClose }) {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const slides = [
    { title: "Intro", component: <Hero /> },
    { title: "Problem", component: <Problem /> },
    { title: "Solution", component: <Solution /> },
    { title: "Requirements", component: <Requirements /> },
    { title: "Architecture", component: <Architecture /> },
    { title: "UML", component: <UML /> },
    { title: "Planning", component: <ProjectPlan /> },
    { title: "Testing", component: <Testing /> },
    { title: "Risks", component: <Risks /> }
  ];

  const handleNext = () => {
    if (currentSlide < slides.length - 1) setCurrentSlide(curr => curr + 1);
  };

  const handlePrev = () => {
    if (currentSlide > 0) setCurrentSlide(curr => curr - 1);
  };
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide, onClose]);

  return (
    <div className="fixed inset-0 bg-[#050505] z-[100] text-white flex flex-col font-sans">
      <div className="flex justify-between items-center p-6 border-b border-white/10">
        <div className="font-bold tracking-widest text-[#9AA3AF] text-sm uppercase">BookMyTurf Presentation</div>
        <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition-colors"><X size={24} /></button>
      </div>

      <div className="flex-grow overflow-y-auto p-12 text-center bg-[#08090B] relative">
        <div className="absolute inset-0 flex items-center justify-center p-12 overflow-y-auto pointer-events-auto pb-32">
           <div className="w-full max-w-7xl mx-auto transform scale-[0.85] origin-top">
             {slides[currentSlide].component}
           </div>
        </div>
      </div>

      <div className="p-6 border-t border-white/10 flex justify-between items-center text-[#9AA3AF] bg-[#050505] z-10">
        <button onClick={handlePrev} disabled={currentSlide === 0} className="flex items-center gap-2 hover:text-white disabled:opacity-50"><ChevronLeft /> Previous</button>
        <div className="font-mono text-sm">{currentSlide + 1} / {slides.length} : {slides[currentSlide].title}</div>
        <button onClick={handleNext} disabled={currentSlide === slides.length - 1} className="flex items-center gap-2 hover:text-white disabled:opacity-50">Next <ChevronRight /></button>
      </div>
    </div>
  );
}