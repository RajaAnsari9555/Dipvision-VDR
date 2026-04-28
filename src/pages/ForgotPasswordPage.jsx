import { useState } from 'react';
import { Link } from 'react-router-dom';
import AuthLeftPanel from '../components/AuthLeftPanel';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [sent,  setSent]  = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="flex min-h-screen">
      {/* ── LEFT — exactly 50% ── */}
      <AuthLeftPanel />

      {/* ── RIGHT — exactly 50% ── */}
      <div className="w-1/2 min-h-screen bg-white flex items-center justify-center px-14">
        <div className="w-full max-w-md">

          {sent ? (
            /* Success state */
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-lg font-bold text-slate-700 mb-2">Check your email</h2>
              <p className="text-sm text-slate-500 mb-6">
                We've sent a password reset link to <strong>{email}</strong>
              </p>
              <Link
                to="/partner-login"
                className="text-sm text-[#1e3a8a] font-semibold hover:underline"
              >
                ← Back to Login
              </Link>
            </div>
          ) : (
            <>
              <h2 className="text-sm font-bold text-slate-700 uppercase tracking-widest mb-2">
                FORGOT PASSWORD
              </h2>
              <p className="text-xs text-slate-400 mb-6">
                Enter your registered Login ID and we'll send you a reset link.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs text-slate-500 font-medium mb-1.5">
                    Login ID <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="Enter your login id"
                    required
                    className="w-full border border-slate-300 rounded px-3 py-2.5 text-sm
                               focus:outline-none focus:border-[#1e3a8a] focus:ring-1 focus:ring-[#1e3a8a]"
                  />
                </div>

                <div className="flex items-center justify-between pt-1">
                  <Link
                    to="/partner-login"
                    className="text-xs text-slate-500 hover:text-[#1e3a8a] hover:underline transition-colors"
                  >
                    ← Back to Login
                  </Link>
                  <button
                    type="submit"
                    className="bg-[#1e3a8a] text-white text-sm font-medium px-8 py-2.5 rounded
                               hover:bg-blue-900 transition-colors"
                  >
                    Send Reset Link
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
