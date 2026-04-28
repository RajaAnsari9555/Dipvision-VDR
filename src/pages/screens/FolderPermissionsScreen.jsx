import { useState } from 'react';

const PERM_COLS = ['View', 'Download', 'Download Original', 'Share', 'Upload', 'Delete', 'Copy', 'Move'];

const PARTNER_GROUPS = [
  { name: 'User',        sub: '1 Users',  type: 'user' },
  { name: 'Admin',       sub: '0 Users',  type: 'admin' },
  { name: 'User2',       sub: '0 Users',  type: 'user' },
  { name: 'Admin',       sub: '0 Users',  type: 'admin' },
  { name: 'Group Admin', sub: '1 Users',  type: 'admin' },
  { name: 'Loan 98',     sub: '1 Users',  type: 'user' },
];

const ADMIN_GROUPS = [
  { name: 'Group Admin', sub: '1 Users', type: 'admin' },
  { name: 'Loan 98',     sub: '1 Users', type: 'user' },
];

const FOLDERS = [
  { id: 2,  name: 'folder66' },
  { id: 4,  name: 'folder44' },
  { id: 5,  name: 'dipvision folder files - Copy' },
  { id: 7,  name: 'folder1', active: true },
  { id: 8,  name: 'folder1SS' },
  { id: 10, name: 'folder16' },
  { id: 11, name: 'folder555' },
  { id: 12, name: 'create folder' },
  { id: 13, name: 'folder4444' },
];

function PermRow({ group }) {
  const [perms, setPerms] = useState(
    PERM_COLS.reduce((acc, col) => ({ ...acc, [col]: true }), {})
  );
  return (
    <tr className="border-b border-slate-50 hover:bg-slate-50 transition-colors">
      <td className="px-3 py-2 text-center">
        <input type="checkbox" defaultChecked className="w-3 h-3 accent-[#1e3a8a]"/>
      </td>
      <td className="px-3 py-2">
        <div className="text-xs font-medium text-slate-700">{group.name}</div>
        <div className="text-[10px] text-blue-500 hover:underline cursor-pointer">{group.sub}</div>
      </td>
      {PERM_COLS.map(col => (
        <td key={col} className="px-2 py-2 text-center">
          <input
            type="checkbox"
            checked={perms[col]}
            onChange={() => setPerms(p => ({ ...p, [col]: !p[col] }))}
            className="w-3 h-3 accent-[#1e3a8a]"
          />
        </td>
      ))}
      <td className="px-3 py-2 text-center">
        <button
          onClick={() => setPerms(PERM_COLS.reduce((a, c) => ({ ...a, [c]: true }), {}))}
          className="text-[10px] text-blue-500 hover:underline"
        >
          Reset
        </button>
      </td>
    </tr>
  );
}

export default function FolderPermissionsScreen({ userType }) {
  const isPartner = userType === 'partner';
  const [activeFolder, setActiveFolder] = useState(FOLDERS.find(f => f.active));
  const [applyOpen, setApplyOpen]       = useState(false);
  const groups = isPartner ? PARTNER_GROUPS : ADMIN_GROUPS;

  return (
    <div className="flex h-full">
      {/* Folder list */}
      <div className="w-44 border-r border-slate-100 bg-slate-50 p-2 shrink-0 overflow-y-auto thin-scroll">
        <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wide px-2 mb-2">Folders</p>
        {FOLDERS.map(f => (
          <button
            key={f.id}
            onClick={() => setActiveFolder(f)}
            className={`w-full text-left flex items-center gap-1.5 px-2 py-1.5 rounded text-xs transition-colors mb-0.5
              ${activeFolder?.id === f.id ? 'bg-[#1e3a8a] text-white' : 'text-slate-500 hover:bg-slate-100 hover:text-slate-700'}`}
          >
            <svg className="w-3 h-3 shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"/>
            </svg>
            <span className="truncate">{f.id} - {f.name}</span>
          </button>
        ))}
      </div>

      {/* Permissions table */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Toolbar */}
        <div className="flex items-center justify-between px-4 py-2.5 border-b border-slate-100 shrink-0">
          <div className="flex items-center gap-1.5 text-xs text-slate-500">
            <span>Root</span>
            <span className="text-slate-300">›</span>
            <span className="font-medium text-slate-700">{activeFolder?.name}</span>
          </div>
          <div className="flex items-center gap-2">
            <button className="text-xs px-3 py-1.5 border border-slate-200 rounded text-slate-600 hover:bg-slate-50 transition-colors">
              Refresh
            </button>
            <button className="text-xs px-3 py-1.5 border border-slate-200 rounded text-slate-600 hover:bg-slate-50 transition-colors">
              Reset All
            </button>
            {/* Apply dropdown */}
            <div className="relative">
              <button
                onClick={() => setApplyOpen(!applyOpen)}
                className="text-xs px-3 py-1.5 bg-[#1e3a8a] text-white rounded hover:bg-blue-900 font-medium flex items-center gap-1"
              >
                Apply
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                </svg>
              </button>
              {applyOpen && (
                <div className="absolute right-0 top-full mt-1 bg-white border border-slate-200 rounded shadow-lg z-20 w-44 py-1">
                  <button
                    onClick={() => setApplyOpen(false)}
                    className="w-full text-left px-3 py-2 text-xs text-slate-600 hover:bg-slate-50"
                  >
                    Apply to All Subfolder
                  </button>
                  <button
                    onClick={() => setApplyOpen(false)}
                    className="w-full text-left px-3 py-2 text-xs text-slate-600 hover:bg-slate-50"
                  >
                    Apply to Selected folder
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="flex-1 overflow-auto thin-scroll">
          <table className="w-full text-xs min-w-max">
            <thead className="sticky top-0 bg-slate-50 z-10">
              <tr className="border-b border-slate-200">
                <th className="w-8 px-3 py-2.5">
                  <input type="checkbox" className="w-3 h-3 accent-[#1e3a8a]"/>
                </th>
                <th className="text-left px-3 py-2.5 text-slate-500 font-semibold min-w-32">Group Name</th>
                {PERM_COLS.map(col => (
                  <th key={col} className="px-2 py-2.5 text-slate-500 font-semibold text-center whitespace-nowrap">
                    {col}
                  </th>
                ))}
                <th className="px-3 py-2.5 text-slate-500 font-semibold">Reset</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-blue-50 border-b border-blue-100">
                <td colSpan={PERM_COLS.length + 3} className="px-3 py-1.5 text-xs font-semibold text-[#1e3a8a]">
                  ▸ {isPartner ? 'Partner Managed Groups' : 'Group Admin'}
                </td>
              </tr>
              {groups.map((g, i) => (
                <PermRow key={i} group={g} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
