import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { DcirrusLogo } from '../App';
import DataRoomScreen from './screens/DataRoomScreen';
import GroupsScreen from './screens/GroupsScreen';
import SettingsScreen from './screens/SettingsScreen';
import FolderPermissionsScreen from './screens/FolderPermissionsScreen';
import DevicesScreen from './screens/DevicesScreen';
import SharedFilesScreen from './screens/SharedFilesScreen';
import StarredScreen from './screens/StarredScreen';

// Detect user type from URL query: /dashboard?role=admin or partner
function useUserType() {
  const loc = useLocation();
  const params = new URLSearchParams(loc.search);
  return params.get('role') === 'admin' ? 'admin' : 'partner';
}

const FOLDERS = [
  { id: 2,  name: 'folder66' },
  { id: 4,  name: 'folder44' },
  { id: 5,  name: 'dipvision folder files - Copy' },
  { id: 7,  name: 'folder1' },
  { id: 8,  name: 'folder1SS' },
  { id: 10, name: 'folder16' },
  { id: 11, name: 'folder555' },
  { id: 12, name: 'create folder' },
  { id: 13, name: 'folder4444' },
];

export default function DashboardApp() {
  const navigate    = useNavigate();
  const userType    = useUserType();
  const isPartner   = userType === 'partner';

  const [section,       setSection]       = useState('dataroom');
  const [adminOpen,     setAdminOpen]     = useState(true);
  const [activeFolder,  setActiveFolder]  = useState(null);
  const [searchVal,     setSearchVal]     = useState('');
  const [showDotMenu,   setShowDotMenu]   = useState(false);

  const handleLogout = () => {
    navigate(isPartner ? '/partner-login' : '/admin-login');
  };

  const renderContent = () => {
    switch (section) {
      case 'dataroom':    return <DataRoomScreen userType={userType} activeFolder={activeFolder} setActiveFolder={setActiveFolder} />;
      case 'starred':     return <StarredScreen />;
      case 'shared':      return <SharedFilesScreen />;
      case 'groups':      return <GroupsScreen userType={userType} />;
      case 'settings':    return <SettingsScreen />;
      case 'devices':     return <DevicesScreen />;
      case 'permissions': return <FolderPermissionsScreen userType={userType} />;
      default:            return <DataRoomScreen userType={userType} activeFolder={activeFolder} setActiveFolder={setActiveFolder} />;
    }
  };

  return (
    <div className="h-screen flex flex-col overflow-hidden bg-[#f0f4f8]">

      {/* ══ TOP BAR ══════════════════════════════════════════════════════════ */}
      <header className="bg-white border-b border-slate-200 px-5 py-2.5 flex items-center gap-3 shrink-0 z-20">
        {/* Logo */}
        <div className="flex items-center gap-2 shrink-0">
          <DcirrusLogo size={26} />
          <span className="font-bold text-[#1e3a8a] text-sm">Dipvision VDR</span>
        </div>

        {/* Project label */}
        <span className="text-xs text-slate-400 hidden lg:block truncate max-w-sm">
          Dipvision VDR Project
        </span>

        {/* Right side */}
        <div className="ml-auto flex items-center gap-2">
          {/* Search */}
          <div className="relative">
            <input
              type="text"
              value={searchVal}
              onChange={e => setSearchVal(e.target.value)}
              placeholder="Search"
              className="border border-slate-200 rounded px-3 py-1.5 text-xs w-40
                         focus:outline-none focus:border-[#1e3a8a] pl-7 bg-slate-50"
            />
            <svg className="w-3.5 h-3.5 text-slate-400 absolute left-2 top-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z"/>
            </svg>
          </div>

          {/* Bell */}
          <button className="p-1.5 hover:bg-slate-100 rounded transition-colors">
            <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11
                   a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341
                   C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436
                   L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/>
            </svg>
          </button>

          {/* 9-dot menu */}
          <div className="relative">
            <button
              onClick={() => setShowDotMenu(v => !v)}
              className="p-1.5 hover:bg-slate-100 rounded transition-colors"
            >
              <svg className="w-4 h-4 text-slate-500" fill="currentColor" viewBox="0 0 24 24">
                <circle cx="5"  cy="5"  r="1.5"/>
                <circle cx="12" cy="5"  r="1.5"/>
                <circle cx="19" cy="5"  r="1.5"/>
                <circle cx="5"  cy="12" r="1.5"/>
                <circle cx="12" cy="12" r="1.5"/>
                <circle cx="19" cy="12" r="1.5"/>
                <circle cx="5"  cy="19" r="1.5"/>
                <circle cx="12" cy="19" r="1.5"/>
                <circle cx="19" cy="19" r="1.5"/>
              </svg>
            </button>
            {showDotMenu && (
              <div className="absolute right-0 top-full mt-1 bg-white border border-slate-200
                              rounded shadow-lg z-50 w-36 py-1">
                {isPartner && (
                  <DotMenuItem label="Export Logs" />
                )}
                <DotMenuItem label="Export Index" />
                {isPartner && (
                  <DotMenuItem label="Rebuild Index" />
                )}
              </div>
            )}
          </div>

          {/* Avatar / logout */}
          <button
            onClick={handleLogout}
            title="Logout"
            className="w-8 h-8 rounded-full bg-[#1e3a8a] text-white text-xs font-bold
                       flex items-center justify-center hover:bg-blue-900 transition-colors"
          >
            {isPartner ? 'P' : 'A'}
          </button>
        </div>
      </header>

      {/* ══ BODY ═════════════════════════════════════════════════════════════ */}
      <div className="flex flex-1 overflow-hidden">

        {/* ── LEFT SIDEBAR ── */}
        <aside className="w-48 bg-white border-r border-slate-200 flex flex-col shrink-0 overflow-y-auto thin-scroll">

          <SideNavItem icon={<IconFolder />} label="Data Room"
            active={section === 'dataroom'} onClick={() => setSection('dataroom')} />

          {/* Folder tree — only visible when Data Room is active */}
          {section === 'dataroom' && (
            <div className="pb-1">
              {FOLDERS.map(f => (
                <button
                  key={f.id}
                  onClick={() => setActiveFolder(f)}
                  className={`w-full text-left flex items-center gap-1.5 pl-7 pr-3 py-1
                              text-[11px] rounded-none transition-colors
                    ${activeFolder?.id === f.id
                      ? 'bg-[#1e3a8a] text-white'
                      : 'text-slate-500 hover:bg-slate-50 hover:text-slate-700'}`}
                >
                  <svg className="w-3 h-3 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"/>
                  </svg>
                  <span className="truncate">{f.id} - {f.name}</span>
                </button>
              ))}
              <button className="text-[10px] text-[#1e3a8a] pl-7 py-1 hover:underline">
                ≡ Main Menu
              </button>
            </div>
          )}

          <SideNavItem icon={<IconStar />}  label="Starred"
            active={section === 'starred'} onClick={() => setSection('starred')} />

          <SideNavItem icon={<IconShare />} label="Shared Files"
            active={section === 'shared'}  onClick={() => setSection('shared')} />

          <SideNavItem icon={<IconVote />}  label="E-Voting"
            active={false} onClick={() => {}} badge="15" />

          {/* Admin collapsible */}
          <div className="mt-1 border-t border-slate-100">
            <button
              onClick={() => setAdminOpen(v => !v)}
              className="w-full flex items-center justify-between px-3 py-2.5
                         text-xs font-semibold text-slate-600 hover:bg-slate-50 transition-colors"
            >
              <div className="flex items-center gap-2">
                <svg className="w-3.5 h-3.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                </svg>
                Admin
              </div>
              <svg className={`w-3 h-3 text-slate-400 transition-transform ${adminOpen ? 'rotate-180' : ''}`}
                fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
              </svg>
            </button>

            {adminOpen && (
              <div>
                <SideNavItem label="Devices"
                  active={section === 'devices'}     onClick={() => setSection('devices')}     small />
                {isPartner && (
                  <SideNavItem label="Settings"
                    active={section === 'settings'}  onClick={() => setSection('settings')}    small />
                )}
                <SideNavItem label="Groups"
                  active={section === 'groups'}      onClick={() => setSection('groups')}      small />
                <SideNavItem label="Folder Access Control"
                  active={section === 'permissions'} onClick={() => setSection('permissions')} small />
              </div>
            )}
          </div>
        </aside>

        {/* ── MAIN CONTENT ── */}
        <main className="flex-1 overflow-y-auto thin-scroll bg-white">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}

/* ── Reusable sidebar nav item ─────────────────────────────────────────────── */
function SideNavItem({ icon, label, active, onClick, badge, small = false }) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center gap-2 text-left transition-colors
        ${small ? 'pl-8 pr-3 py-2 text-[11px]' : 'px-3 py-2.5 text-xs font-medium'}
        ${active
          ? 'bg-blue-50 text-[#1e3a8a] font-semibold border-r-2 border-[#1e3a8a]'
          : 'text-slate-600 hover:bg-slate-50 hover:text-slate-800'}`}
    >
      {icon && <span className="shrink-0 text-slate-400">{icon}</span>}
      <span className="flex-1 truncate">{label}</span>
      {badge && (
        <span className="bg-slate-200 text-slate-600 text-[9px] font-bold px-1.5 py-0.5 rounded-full">
          {badge}
        </span>
      )}
    </button>
  );
}

/* ── Dot menu item ─────────────────────────────────────────────────────────── */
function DotMenuItem({ label }) {
  return (
    <button className="w-full text-left px-3 py-2 text-xs text-slate-600 hover:bg-slate-50 flex items-center gap-2">
      <svg className="w-3.5 h-3.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
      </svg>
      {label}
    </button>
  );
}

/* ── Icons ─────────────────────────────────────────────────────────────────── */
function IconFolder() {
  return <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
      d="M3 7a2 2 0 012-2h4l2 2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V7z"/>
  </svg>;
}
function IconStar() {
  return <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915
         c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674
         c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888
         c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118
         l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/>
  </svg>;
}
function IconShare() {
  return <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
      d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342
         m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316
         m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684
         zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"/>
  </svg>;
}
function IconVote() {
  return <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2
         M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2
         m-6 9l2 2 4-4"/>
  </svg>;
}
