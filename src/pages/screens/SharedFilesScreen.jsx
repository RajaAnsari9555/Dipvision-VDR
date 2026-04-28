const SHARED = [
  { name: 'folder44',          type: 'folder', sharedWith: 'Admin Group',   perms: 'View, Download',        date: 'Jul 19, 2023' },
  { name: 'Q3 Report.pdf',     type: 'file',   sharedWith: 'User Group',    perms: 'View',                  date: 'Jul 18, 2023' },
  { name: 'folder555',         type: 'folder', sharedWith: 'Partner Group', perms: 'View, Download, Upload', date: 'Jul 17, 2023' },
  { name: 'Contract_Final.docx', type: 'file', sharedWith: 'Admin Group',   perms: 'View, Download',        date: 'Jul 15, 2023' },
];

export default function SharedFilesScreen() {
  return (
    <div className="p-5">
      <div className="mb-4">
        <h2 className="text-base font-bold text-slate-700">Shared Files</h2>
        <p className="text-xs text-slate-400 mt-0.5">Files and folders shared with groups</p>
      </div>

      <div className="border border-slate-200 rounded-lg overflow-hidden">
        <table className="w-full text-xs">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200">
              <th className="text-left px-4 py-2.5 text-slate-500 font-semibold">Name</th>
              <th className="text-left px-4 py-2.5 text-slate-500 font-semibold">Shared With</th>
              <th className="text-left px-4 py-2.5 text-slate-500 font-semibold">Permissions</th>
              <th className="text-left px-4 py-2.5 text-slate-500 font-semibold">Date</th>
              <th className="px-4 py-2.5"></th>
            </tr>
          </thead>
          <tbody>
            {SHARED.map((f, i) => (
              <tr key={i} className="border-b border-slate-50 hover:bg-slate-50 transition-colors cursor-pointer">
                <td className="px-4 py-2.5 flex items-center gap-2 font-medium text-slate-700">
                  {f.type === 'folder' ? (
                    <svg className="w-4 h-4 text-[#1e3a8a] shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"/>
                    </svg>
                  ) : (
                    <svg className="w-4 h-4 text-slate-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                    </svg>
                  )}
                  {f.name}
                </td>
                <td className="px-4 py-2.5">
                  <span className="bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full text-[10px] font-medium">
                    {f.sharedWith}
                  </span>
                </td>
                <td className="px-4 py-2.5 text-slate-500">{f.perms}</td>
                <td className="px-4 py-2.5 text-slate-500">{f.date}</td>
                <td className="px-4 py-2.5 text-slate-300 text-center">
                  <button className="hover:text-slate-500">⋮</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
