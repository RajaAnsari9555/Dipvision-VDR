import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import AuthLeftPanel from '../components/AuthLeftPanel';
import EyeToggle from '../components/EyeToggle';

export default function AdminLoginPage() {
  const navigate = useNavigate();

  const [loginId,  setLoginId]  = useState('');
  const [password, setPassword] = useState('');
  const [corpId,   setCorpId]   = useState('');
  const [captcha,  setCaptcha]  = useState('');
  const [showPwd,  setShowPwd]  = useState(false);
  const [stayIn,   setStayIn]   = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/dashboard?role=admin');
  };

  return (
    <div className="flex min-h-screen">
      {/* ── LEFT — exactly 50% ── */}
      <AuthLeftPanel />

      {/* ── RIGHT — exactly 50% ── */}
      <div className="w-1/2 min-h-screen bg-white flex items-center justify-center px-14">
        <div className="w-full max-w-md">

          {/* LOGIN heading */}
          <h2 className="text-sm font-bold text-slate-700 uppercase tracking-widest mb-6">
            LOGIN
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">

            {/* Login ID */}
            <div>
              <label className="block text-xs text-slate-500 font-medium mb-1.5">
                Login ID <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={loginId}
                onChange={e => setLoginId(e.target.value)}
                placeholder="Enter login id"
                className="w-full border border-slate-300 rounded px-3 py-2.5 text-sm
                           focus:outline-none focus:border-[#1e3a8a] focus:ring-1 focus:ring-[#1e3a8a]"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-xs text-slate-500 font-medium mb-1.5">
                Password <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type={showPwd ? 'text' : 'password'}
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  placeholder="Enter Password"
                  className="w-full border border-slate-300 rounded px-3 py-2.5 pr-10 text-sm
                             focus:outline-none focus:border-[#1e3a8a] focus:ring-1 focus:ring-[#1e3a8a]"
                />
                <EyeToggle show={showPwd} onToggle={() => setShowPwd(!showPwd)} />
              </div>
            </div>

            {/* Corporate ID */}
            <div>
              <label className="block text-xs text-slate-500 font-medium mb-1.5">
                Corporate ID <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={corpId}
                onChange={e => setCorpId(e.target.value)}
                placeholder="Enter Corporate Id"
                className="w-full border border-slate-300 rounded px-3 py-2.5 text-sm
                           focus:outline-none focus:border-[#1e3a8a] focus:ring-1 focus:ring-[#1e3a8a]"
              />
            </div>

            {/* Captcha */}
            <div>
              <label className="block text-xs text-slate-500 font-medium mb-1.5">
                Captcha <span className="text-red-500">*</span>
              </label>
              <div className="flex gap-3 items-center">
                <input
                  type="text"
                  value={captcha}
                  onChange={e => setCaptcha(e.target.value)}
                  placeholder="Enter Captcha"
                  className="flex-1 border border-slate-300 rounded px-3 py-2.5 text-sm
                             focus:outline-none focus:border-[#1e3a8a] focus:ring-1 focus:ring-[#1e3a8a]"
                />
                <span className="captcha-box select-none">645194</span>
              </div>
            </div>

            {/* Stay logged in + Login btn */}
            <div className="flex items-center justify-between pt-1">
              <label className="flex items-center gap-2 text-xs text-slate-500 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={stayIn}
                  onChange={e => setStayIn(e.target.checked)}
                  className="w-3.5 h-3.5 accent-[#1e3a8a]"
                />
                Stay logged in
              </label>
              <button
                type="submit"
                className="bg-[#1e3a8a] text-white text-sm font-medium px-8 py-2.5 rounded
                           hover:bg-blue-900 transition-colors"
              >
                Login
              </button>
            </div>

            {/* Forgot password */}
            <div className="text-right">
              <Link
                to="/"
                className="text-xs text-[#1e3a8a] hover:underline"
              >
                Forgot Password?
              </Link>
            </div>
          </form>
          <p className="mt-8 text-center text-xs text-slate-400">
            Are you an Admin?{' '}
            <Link to="/partner-login" className="text-[#1e3a8a] font-semibold hover:underline">
              Partner login
            </Link>
          </p>
         
         
        </div>
      </div>
    </div>
  );
}
