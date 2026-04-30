import { Routes, Route, Navigate } from 'react-router-dom';
import PartnerLoginPage from './pages/PartnerLoginPage';
import AdminLoginPage from './pages/AdminLoginPage';

import ForgotPasswordPage from './pages/ForgotPasswordPage';
import ResetPasswordPage from './pages/ResetPasswordPage';
import DashboardApp from './pages/DashboardApp';

// ─── Shared Dipvision VDR Logo SVG ───────────────────────────────────────────
export function DcirrusLogo({ size = 32, white = false }) {
  const c = white ? '#ffffff' : '#1e3a8a';
  return (
    <svg width={size} height={size} viewBox="0 0 50 50" fill="none">
      <circle cx="25" cy="25" r="22" stroke={c} strokeWidth="3" fill="none" />
      <circle cx="25" cy="25" r="14" stroke={c} strokeWidth="2.2" fill="none" opacity="0.55" />
      <circle cx="25" cy="25" r="5"  fill={c} />
      {/* left arc */}
      <path d="M25 3 A22 22 0 0 0 25 47" stroke={c} strokeWidth="3" fill="none" />
    </svg>
  );
}

export default function App() {
  return (
    <Routes>
      {/* Default → partner login */}
      <Route path="/" element={<Navigate to="/partner-login" replace />} />

      {/* Auth routes — full screen, no shell */}
      <Route path="/partner-login"      element={<PartnerLoginPage />} />
      <Route path="/admin-login"        element={<AdminLoginPage />} />

      <Route path="/forgot-password"  element={<ForgotPasswordPage />} />
      <Route path="/reset-password"   element={<ResetPasswordPage />} />

      {/* App routes — protected shell */}
      <Route path="/dashboard/*" element={<DashboardApp />} />

      {/* Catch-all */}
      <Route path="*" element={<Navigate to="/partner-login" replace />} />
    </Routes>
  );
}
