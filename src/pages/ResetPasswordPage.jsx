import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { DcirrusLogo } from '../App';
import EyeToggle from '../components/EyeToggle';

// ── Left panel specific to Reset Password page ────────────────────────────────
// Matches the PDF screenshot exactly: same blue panel layout as login pages
function ResetLeftPanel() {
  return (
    <div className="w-1/2 bg-[#1e3a8a] min-h-screen flex flex-col px-14 py-12 relative overflow-hidden">

      {/* Dot pattern — top-right corner, matches PDF */}
      <div
        className="absolute top-0 right-0 w-64 h-full pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(255,255,255,0.09) 1.5px, transparent 1.5px)',
          backgroundSize: '18px 18px',
        }}
      />

      {/* ── Logo row ── */}
      <div className="relative z-10 flex items-center gap-3 mb-10">
        <DcirrusLogo size={52} white />
        <span className="text-white font-bold text-3xl tracking-tight">
          Dipvision VDR
        </span>
      </div>

      {/* ── Why Dipvision VDR block ── */}
      <div className="relative z-10 mb-8">
        <p className="text-blue-200 font-semibold text-base mb-3">
          Why Dipvision VDR?
        </p>
        <p className="text-blue-300 text-sm leading-7">
          At Dipvision VDR, We work with the aim of providing only the best to our
          customers. Protecting customer's information, providing the best user
          experience, and keeping the innovation going is our goal. We understand
          that in today's world nothing short of excellent can be served to the
          customers. Hence, Dipvision VDR brings you a highly productive platform
          for all your data storage and collaboration needs.
        </p>
      </div>

      {/* ── DipvisionVDR.com button — directly below text ── */}
      <div className="relative z-10 mb-8">
        <button className="bg-white text-[#1e3a8a] text-sm font-bold px-5 py-2.5 rounded hover:bg-blue-50 transition-colors">
          DipvisionVDR.com
        </button>
      </div>

      {/* Spacer — pushes footer to bottom */}
      <div className="flex-1" />

      {/* ── Footer links ── */}
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

// ── Reset Password Page ───────────────────────────────────────────────────────
export default function ResetPasswordPage() {
  const navigate = useNavigate();

  const [newPwd,     setNewPwd]     = useState('');
  const [confirmPwd, setConfirmPwd] = useState('');
  const [showNew,    setShowNew]    = useState(false);
  const [showConf,   setShowConf]   = useState(false);
  const [error,      setError]      = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newPwd !== confirmPwd) {
      setError('Passwords do not match.');
      return;
    }
    if (newPwd.length < 8) {
      setError('Password must be at least 8 characters.');
      return;
    }
    navigate('/partner-login');
  };

  return (
    <div className="flex min-h-screen">

      {/* ── LEFT — 50% — dedicated reset panel ── */}
      <ResetLeftPanel />

      {/* ── RIGHT — 50% ── */}
      <div className="w-1/2 min-h-screen bg-white flex items-center justify-center px-14">
        <div className="w-full max-w-md">

          <h2 className="text-sm font-bold text-slate-700 uppercase tracking-widest mb-6">
            RESET YOUR PASSWORD
          </h2>

          {error && (
            <div className="mb-4 bg-red-50 border border-red-200 text-red-600 text-xs rounded px-3 py-2">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">

            {/* New Password */}
            <div>
              <label className="block text-xs text-slate-500 font-medium mb-1.5">
                New Password <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type={showNew ? 'text' : 'password'}
                  value={newPwd}
                  onChange={e => { setNewPwd(e.target.value); setError(''); }}
                  placeholder="Enter New Password"
                  required
                  className="w-full border border-slate-300 rounded px-3 py-2.5 pr-10 text-sm
                             focus:outline-none focus:border-[#1e3a8a] focus:ring-1 focus:ring-[#1e3a8a]"
                />
                <EyeToggle show={showNew} onToggle={() => setShowNew(!showNew)} />
              </div>
              <p className="text-[11px] text-slate-400 mt-1.5 leading-relaxed">
                Password between 8 and 20 characters. Must contain at least one
                uppercase, one lowercase, one digit and one special character
                from — !@#$%_&amp;*?
              </p>
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-xs text-slate-500 font-medium mb-1.5">
                Confirm Password <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type={showConf ? 'text' : 'password'}
                  value={confirmPwd}
                  onChange={e => { setConfirmPwd(e.target.value); setError(''); }}
                  placeholder="Enter Confirm Password"
                  required
                  className="w-full border border-slate-300 rounded px-3 py-2.5 pr-10 text-sm
                             focus:outline-none focus:border-[#1e3a8a] focus:ring-1 focus:ring-[#1e3a8a]"
                />
                <EyeToggle show={showConf} onToggle={() => setShowConf(!showConf)} />
              </div>
            </div>

            {/* Actions row — Login link left, Update button right */}
            <div className="flex items-center justify-between pt-1">
              <Link
                to="/partner-login"
                className="text-xs text-slate-500 hover:text-[#1e3a8a] hover:underline transition-colors"
              >
                Login
              </Link>
              <button
                type="submit"
                className="bg-[#1e3a8a] text-white text-sm font-medium px-8 py-2.5 rounded
                           hover:bg-blue-900 transition-colors"
              >
                Update
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}
