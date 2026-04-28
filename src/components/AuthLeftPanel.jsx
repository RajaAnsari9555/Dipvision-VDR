import { DcirrusLogo } from '../App';

export default function AuthLeftPanel() {
  return (
    <div className="w-1/2 bg-[#1e3a8a] min-h-screen flex flex-col px-14 py-12 relative overflow-hidden">

      {/* Dot pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(255,255,255,0.08) 1.5px, transparent 1.5px)',
          backgroundSize: '20px 20px',
        }}
      />

      {/* Logo */}
      <div className="relative z-10 flex items-center gap-3 mb-10">
        <DcirrusLogo size={52} white />
        <span className="text-white font-bold text-3xl tracking-tight">Dipvision VDR</span>
      </div>

      {/* Why Dipvision VDR */}
      <div className="relative z-10 mb-8">
        <p className="text-blue-200 font-semibold text-base mb-3">Why Dipvision VDR?</p>
        <p className="text-blue-300 text-sm leading-7">
          At Dipvision VDR, We work with the aim of providing only the best to our
          customers. Protecting customer's information, providing the best user
          experience, and keeping the innovation going is our goal. We understand
          that in today's world nothing short of excellent can be served to the
          customers. Hence, Dipvision VDR brings you a highly productive platform for
          all your data storage and collaboration needs.
        </p>
      </div>

      {/* DipvisionVDR.com button — directly below text */}
      <div className="relative z-10 mb-8">
        <button className="bg-white text-[#1e3a8a] text-sm font-bold px-5 py-2.5 rounded hover:bg-blue-50 transition-colors">
          DipvisionVDR.com
        </button>
      </div>

      {/* Spacer — pushes footer to bottom */}
      <div className="flex-1" />

      {/* Footer links */}
      <div className="relative z-10 flex flex-wrap gap-x-3 gap-y-1 text-xs text-blue-300">
        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
        <span>|</span>
        <a href="#" className="hover:text-white transition-colors">Terms &amp; services</a>
        <span>|</span>
        <a href="#" className="hover:text-white transition-colors">Contact us</a>
      </div>
      <p className="relative z-10 mt-2 text-xs text-blue-400">
        Copyright 2023 Dipvision VDR. All Rights Reserved.
      </p>

    </div>
  );
}
