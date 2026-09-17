'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function FunnelContent() {
  const searchParams = useSearchParams();
  // Safely grab the 'name' parameter from the URL, defaulting to 'Trader' if not provided
  const leadName = searchParams.get('name') || 'Trader';

  return (
    <div className="bg-[#fbf9f5] text-stone-900 min-h-screen flex flex-col justify-between font-sans antialiased selection:bg-amber-400 selection:text-stone-900">
      
      {/* Top Announcement Bar */}
      <header className="w-full bg-[#1c1917] text-[#f5f5f4] text-xs font-medium py-2.5 px-4 text-center tracking-wide flex items-center justify-center gap-2">
        <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
        FREE EXCLUSIVE LIVE WORKSHOP &bull; SATURDAY, 30TH JUNE &bull; 7:00 PM EST
        <span className="text-stone-400 ml-2 font-normal">(Personalized for <span className="text-amber-300 font-semibold">{leadName}</span>)</span>
      </header>

      {/* Main Hero Section */}
      <main className="max-w-5xl mx-auto px-6 pt-12 pb-16 text-center flex-grow flex flex-col items-center">
        
        {/* Brand/Logo Placeholder */}
        <div className="text-xs font-black tracking-widest uppercase bg-stone-200/60 text-stone-700 px-3 py-1 rounded mb-6 border border-stone-300/50">
          OT
        </div>

        {/* Serif Headline */}
        <h1 className="text-4xl md:text-6xl font-serif font-normal tracking-tight mb-6 max-w-3xl leading-[1.15]">
          How to Pass Your Prop Firm Challenge and Start Collecting <span className="italic font-serif">Weekly Payouts</span>
        </h1>

        {/* Subheadline with dynamic lead hook */}
        <p className="text-stone-600 text-base md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed font-normal">
          Designed specifically for <span className="font-semibold text-stone-900">{leadName}</span>. We've helped traders go from failed evaluations to funded status using the exact same framework.
        </p>

        {/* Countdown Timer Mock */}
        <div className="mb-8">
          <p className="text-[11px] uppercase tracking-widest text-stone-400 font-semibold mb-3">Countdown to the Webinar</p>
          <div className="flex gap-3 justify-center">
            {['00', '00', '00', '00'].map((time, idx) => (
              <div key={idx} className="bg-white border border-stone-200 shadow-sm rounded-xl px-4 py-3 text-center min-w-[65px]">
                <span className="block text-xl font-bold font-mono text-stone-900">{time}</span>
                <span className="block text-[9px] uppercase tracking-wider text-stone-400 font-medium">
                  {['Days', 'Hours', 'Minutes', 'Seconds'][idx]}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Yellow CTA Button */}
        <div className="mb-14 w-full max-w-sm">
          <button onClick={() => alert('Seat saved!')} className="w-full py-4 px-8 bg-[#fbbf24] hover:bg-[#f59e0b] text-stone-950 font-bold tracking-wide text-sm rounded-full transition-all shadow-lg shadow-amber-500/20 cursor-pointer uppercase flex items-center justify-center gap-2">
            Save My Seat (It's Free) &rarr;
          </button>
          <p className="text-[10px] text-stone-400 uppercase tracking-widest mt-2">104 Seats Left &bull; Registrations Close Soon</p>
        </div>

        {/* Video / Creator Frame Showcase */}
        <div className="w-full max-w-4xl bg-[#1c1917] rounded-2xl p-3 shadow-2xl mb-20 border border-stone-800">
          <div className="aspect-[16/9] bg-stone-900 rounded-xl flex items-center justify-center relative overflow-hidden border border-stone-800/80">
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#444_1px,transparent_1px)] [background-size:16px_16px]"></div>
            <div className="relative z-10 text-center">
              <div className="w-16 h-16 rounded-full bg-amber-400 text-stone-950 flex items-center justify-center font-bold text-xl mx-auto shadow-lg shadow-amber-400/30 cursor-pointer hover:scale-105 transition-transform">
                ▶
              </div>
              <p className="text-xs text-stone-400 mt-3 font-medium">Click to Play Live Breakdown</p>
            </div>
          </div>
        </div>

        {/* What You'll Learn Section */}
        <div className="w-full text-left max-w-4xl">
          <p className="text-center text-xs uppercase tracking-widest text-amber-600 font-bold mb-2">What you'll learn</p>
          <h2 className="text-2xl md:text-4xl font-serif text-center mb-12">
            The prop firm framework most traders are <span className="italic">missing</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Card 1 */}
            <div className="bg-white border border-stone-200/80 p-8 rounded-2xl shadow-sm">
              <span className="w-8 h-8 rounded-full bg-amber-100 text-amber-800 font-serif font-bold text-sm flex items-center justify-center mb-4">I.</span>
              <h3 className="font-serif text-lg font-bold mb-2 text-stone-900">Why Most Traders Keep Failing Evaluations</h3>
              <p className="text-xs text-stone-600 leading-relaxed">Passing a prop firm challenge has less to do with finding the right entry and everything to do with how you manage the evaluation as a whole.</p>
            </div>

            {/* Card 2 */}
            <div className="bg-white border border-stone-200/80 p-8 rounded-2xl shadow-sm">
              <span className="w-8 h-8 rounded-full bg-amber-100 text-amber-800 font-serif font-bold text-sm flex items-center justify-center mb-4">II.</span>
              <h3 className="font-serif text-lg font-bold mb-2 text-stone-900">The Model: How to Read the Market With Consistency</h3>
              <p className="text-xs text-stone-600 leading-relaxed">Discover a repeatable way to identify high-probability setups without relying on lagging indicators or gut feel.</p>
            </div>

            {/* Card 3 */}
            <div className="bg-white border border-stone-200/80 p-8 rounded-2xl shadow-sm">
              <span className="w-8 h-8 rounded-full bg-amber-100 text-amber-800 font-serif font-bold text-sm flex items-center justify-center mb-4">III.</span>
              <h3 className="font-serif text-lg font-bold mb-2 text-stone-900">Getting Funded and Staying Funded</h3>
              <p className="text-xs text-stone-600 leading-relaxed">Getting funded is step one. Keeping the account long enough to pull a payout is where most traders fail.</p>
            </div>

            {/* Card 4 */}
            <div className="bg-white border border-stone-200/80 p-8 rounded-2xl shadow-sm">
              <span className="w-8 h-8 rounded-full bg-amber-100 text-amber-800 font-serif font-bold text-sm flex items-center justify-center mb-4">IV.</span>
              <h3 className="font-serif text-lg font-bold mb-2 text-stone-900">Scaling Beyond One Account</h3>
              <p className="text-xs text-stone-600 leading-relaxed">Once a trader has the system working, the next step is scaling to multiple simultaneous accounts.</p>
            </div>

          </div>
        </div>

      </main>

      {/* Footer */}
      <footer className="py-8 text-center text-xs text-stone-500 border-t border-stone-200 bg-white">
        &copy; 2026 Olympus Trading &bull; All rights reserved.
      </footer>
    </div>
  );
}

export default function Page() {
  return (
    <Suspense fallback={<div className="bg-[#fbf9f5] text-stone-900 min-h-screen flex items-center justify-center font-serif">Loading page...</div>}>
      <FunnelContent />
    </Suspense>
  );
}