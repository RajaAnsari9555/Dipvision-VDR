import { useState } from 'react';

const ROOT_FOLDERS = [
  { id: 1,  name: 'folder4',        size: '0 Bytes' },
  { id: 2,  name: 'folder555',      size: '99.99 KB' },
  { id: 3,  name: 'create folder',  size: '3 Bytes' },
  { id: 4,  name: 'folder4444',     size: '99.99 KB' },
  { id: 5,  name: 'folder1n',       size: '0 Bytes' },
  { id: 6,  name: 'mouse',          size: '14.33 KB' },
  { id: 7,  name: 'folder3',        size: '32.02 KB' },
  { id: 8,  name: 'folder44',       size: '473.47 KB' },
  { id: 9,  name: 'folder',         size: '427.67 KB' },
  { id: 10, name: 'folder597',      size: '0 Bytes' },
  { id: 11, name: 'SUBFOLDER-003',  size: '43.60 KB' },
  { id: 12, name: 'folder 01',      size: '77.67 KB' },
  { id: 13, name: 'folder 02',      size: '77.47 KB' },
  { id: 14, name: 'folder 03',      size: '77.47 KB' },
  { id: 15, name: 'folder 04',      size: '77.47 KB' },
  { id: 16, name: 'folder 13',      size: '77.47 KB' },
  { id: 17, name: 'folder66',       size: '77.47 KB' },
  { id: 18, name: 'folder44',       size: '77.47 KB' },
  { id: 19, name: 'dipvision folder files - Copy', size: '—' },
];

export default function DataRoomScreen({ userType, activeFolder, setActiveFolder }) {
  const [view, setView]             = useState('grid'); // 'grid' | 'list'
  const [showNewFolder, setShowNew] = useState(false);
  const [showUpload, setShowUpload] = useState(false);
  const [newFolderName, setNewName] = useState('');
  const [folders, setFolders]       = useState(ROOT_FOLDERS);
  const [sortOpen, setSortOpen]     = useState(false);

  const breadcrumb = activeFolder
    ? ['Data Room', activeFolder.name]
    : ['Data Room'];

  const createFolder = () => {
    if (!newFolderName.trim()) return;
    setFolders(prev => [...prev, { id: Date.now(), name: newFolderName.trim(), size: '0 Bytes' }]);
    setNewName('');
    setShowNew(false);
  };

  return (
    <div className="flex flex-col h-full">
      {/* ── Toolbar ── */}
      <div className="flex items-center justify-between px-5 py-3 border-b border-slate-100 shrink-0">
        {/* Breadcrumb */}
        <div className="flex items-center gap-1.5 text-sm">
          {breadcrumb.map((crumb, i) => (
            <span key={i} className="flex items-center gap-1.5">
              {i > 0 && <span className="text-slate-300">›</span>}
              <button
                onClick={() => i === 0 && setActiveFolder(null)}
                className={i === breadcrumb.length - 1
                  ? 'font-semibold text-slate-700'
                  : 'text-slate-400 hover:text-slate-600'}
              >
                {crumb}
              </button>
            </span>
          ))}
        </div>

        <div className="flex items-center gap-2">
          {/* Refresh */}
          <button className="p-1.5 hover:bg-slate-100 rounded transition-colors">
            <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
            </svg>
          </button>

          {/* New Folder */}
          <button
            onClick={() => setShowNew(true)}
            className="flex items-center gap-1.5 bg-[#1e3a8a] text-white text-xs px-3 py-1.5 rounded hover:bg-blue-900 transition-colors font-medium"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4"/>
            </svg>
            New Folder
          </button>

          {/* Upload */}
          <div className="relative">
            <button
              onClick={() => setShowUpload(!showUpload)}
              className="flex items-center gap-1.5 bg-[#1e3a8a] text-white text-xs px-3 py-1.5 rounded hover:bg-blue-900 transition-colors font-medium"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"/>
              </svg>
              Upload
            </button>
            {showUpload && (
              <div className="absolute right-0 top-full mt-1 bg-white border border-slate-200 rounded shadow-lg z-30 w-32 py-1">
                <button className="w-full text-left px-3 py-2 text-xs text-slate-600 hover:bg-slate-50 flex items-center gap-2">
                  <svg className="w-3.5 h-3.5 text-slate-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"/>
                  </svg>
                  Folder
                </button>
                {activeFolder && (
                  <button className="w-full text-left px-3 py-2 text-xs text-slate-600 hover:bg-slate-50 flex items-center gap-2">
                    <svg className="w-3.5 h-3.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                    </svg>
                    Files
                  </button>
                )}
              </div>
            )}
          </div>

          {/* View toggle */}
          <div className="flex border border-slate-200 rounded overflow-hidden">
            <button
              onClick={() => setView('grid')}
              className={`p-1.5 transition-colors ${view === 'grid' ? 'bg-[#1e3a8a] text-white' : 'bg-white text-slate-500 hover:bg-slate-50'}`}
              title="Grid view"
            >
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/>
                <rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>
              </svg>
            </button>
            <button
              onClick={() => setView('list')}
              className={`p-1.5 transition-colors ${view === 'list' ? 'bg-[#1e3a8a] text-white' : 'bg-white text-slate-500 hover:bg-slate-50'}`}
              title="List view"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* ── Folder section header ── */}
      <div className="flex items-center justify-between px-5 py-2 shrink-0">
        <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Folders</span>
        <div className="relative">
          <button
            onClick={() => setSortOpen(!sortOpen)}
            className="text-xs text-slate-500 hover:text-slate-700 flex items-center gap-1"
          >
            folders
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
            </svg>
          </button>
          {sortOpen && (
            <div className="absolute right-0 top-full mt-1 bg-white border border-slate-200 rounded shadow-lg z-30 w-28 py-1">
              {['Name','Date','Size'].map(s => (
                <button key={s} className="w-full text-left px-3 py-1.5 text-xs text-slate-600 hover:bg-slate-50">{s}</button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* ── Folder grid / list ── */}
      <div className="flex-1 overflow-y-auto thin-scroll px-5 pb-5">
        {activeFolder ? (
          /* Inside a folder — show drop zone */
          <div className="flex flex-col items-center justify-center h-64 border-2 border-dashed border-slate-200 rounded-lg mt-4">
            <svg className="w-12 h-12 text-slate-300 mb-3" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"/>
            </svg>
            <p className="text-sm text-slate-400 font-medium">Drop Files Here</p>
            <p className="text-xs text-slate-300 mt-1">or use 'New Folder' Button</p>
          </div>
        ) : view === 'grid' ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 mt-1">
            {folders.map(f => (
              <FolderCard key={f.id} folder={f} onClick={() => setActiveFolder(f)} />
            ))}
          </div>
        ) : (
          <table className="w-full text-xs mt-1">
            <thead>
              <tr className="border-b border-slate-100">
                <th className="text-left py-2 px-2 text-slate-400 font-medium">Name</th>
                <th className="text-left py-2 px-2 text-slate-400 font-medium">Size</th>
                <th className="py-2 px-2"></th>
              </tr>
            </thead>
            <tbody>
              {folders.map(f => (
                <tr key={f.id} className="border-b border-slate-50 hover:bg-slate-50 cursor-pointer" onClick={() => setActiveFolder(f)}>
                  <td className="py-2 px-2 flex items-center gap-2">
                    <svg className="w-4 h-4 text-[#1e3a8a]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"/>
                    </svg>
                    {f.name}
                  </td>
                  <td className="py-2 px-2 text-slate-400">{f.size}</td>
                  <td className="py-2 px-2 text-slate-300 text-right">
                    <button className="hover:text-slate-500">⋮</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* ── New Folder Modal ── */}
      {showNewFolder && (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl w-80 overflow-hidden">
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-slate-100">
              <h3 className="text-sm font-semibold text-slate-700">Create New Folder</h3>
              <button onClick={() => setShowNew(false)} className="text-slate-400 hover:text-slate-600">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </button>
            </div>
            <div className="p-5">
              <label className="block text-xs text-slate-500 font-medium mb-1.5">
                Folder Name <span className="text-red-400">*</span>
              </label>
              <input
                autoFocus
                type="text"
                value={newFolderName}
                onChange={e => setNewName(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && createFolder()}
                placeholder="Folder01"
                className="w-full border-2 border-[#1e3a8a] rounded px-3 py-2 text-sm focus:outline-none"
              />
            </div>
            <div className="flex justify-end gap-2 px-5 pb-5">
              <button onClick={() => setShowNew(false)} className="text-xs px-4 py-2 border border-slate-200 rounded text-slate-600 hover:bg-slate-50">
                Cancel
              </button>
              <button onClick={createFolder} className="text-xs px-4 py-2 bg-[#1e3a8a] text-white rounded hover:bg-blue-900 font-medium">
                Create Folder
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function FolderCard({ folder, onClick }) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div
      className="border border-slate-200 rounded-lg p-3 hover:border-[#1e3a8a] hover:shadow-sm cursor-pointer transition-all group relative"
      onClick={onClick}
    >
      <div className="flex items-start justify-between mb-2">
        <svg className="w-8 h-8 text-[#1e3a8a]" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"/>
        </svg>
        <button
          onClick={e => { e.stopPropagation(); setMenuOpen(!menuOpen); }}
          className="opacity-0 group-hover:opacity-100 text-slate-400 hover:text-slate-600 transition-opacity"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <circle cx="12" cy="5" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="12" cy="19" r="1.5"/>
          </svg>
        </button>
        {menuOpen && (
          <div className="absolute right-2 top-8 bg-white border border-slate-200 rounded shadow-lg z-20 w-28 py-1" onClick={e => e.stopPropagation()}>
            {['Rename','Move','Copy','Delete'].map(a => (
              <button key={a} className="w-full text-left px-3 py-1.5 text-xs text-slate-600 hover:bg-slate-50">{a}</button>
            ))}
          </div>
        )}
      </div>
      <p className="text-xs font-medium text-slate-700 truncate group-hover:text-[#1e3a8a]">{folder.name}</p>
      <p className="text-[10px] text-slate-400 mt-0.5">{folder.size}</p>
    </div>
  );
}
