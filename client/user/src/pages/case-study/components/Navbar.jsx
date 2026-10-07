import React from 'react';
import { Link } from 'react-router-dom';
import { Play } from 'lucide-react';

export default function Navbar({ onEnterPresentation }) {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 h-[72px] bg-[#08090B]/75 backdrop-blur-md border-b border-white/5 z-50 px-6 flex items-center justify-between text-sm">
      <div className="flex items-center gap-3 font-bold tracking-wider">
        <div className="w-2 h-2 rounded-full bg-[#7CFF6B]" />
        BOOKMYTURF
      </div>
      
      <div className="hidden md:flex items-center gap-6 text-[#9AA3AF] font-medium">
        <button onClick={() => scrollTo('problem')} className="hover:text-white transition-colors">Problem</button>
        <button onClick={() => scrollTo('requirements')} className="hover:text-white transition-colors">Requirements</button>
        <button onClick={() => scrollTo('architecture')} className="hover:text-white transition-colors">Architecture</button>
        <button onClick={() => scrollTo('uml')} className="hover:text-white transition-colors">UML</button>
        <button onClick={() => scrollTo('planning')} className="hover:text-white transition-colors">Planning</button>
        <button onClick={() => scrollTo('testing')} className="hover:text-white transition-colors">Testing</button>
        <button onClick={() => scrollTo('risks')} className="hover:text-white transition-colors">Risks</button>
        <Link to="/" className="text-[#7CFF6B] hover:text-[#4ADE80] transition-colors ml-4">Demo</Link>
      </div>

      <button 
        onClick={onEnterPresentation}
        className="flex items-center gap-2 px-4 py-2 rounded-lg border border-white/10 hover:bg-white/5 transition-colors font-medium"
      >
        <Play size={16} />
        Presentation Mode
      </button>
    </nav>
  );
}