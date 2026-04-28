const STARRED = [
  { name: 'Q3 Report.pdf',        folder: 'folder44',    size: '2.3 MB',  date: 'Jul 19, 2023' },
  { name: 'Contract_Final.docx',  folder: 'folder1',     size: '450 KB',  date: 'Jul 18, 2023' },
  { name: 'Presentation.pptx',    folder: 'folder555',   size: '8.1 MB',  date: 'Jul 17, 2023' },
  { name: 'Budget_2023.xlsx',     folder: 'create folder', size: '1.2 MB', date: 'Jul 15, 2023' },
];

export default function StarredScreen() {
  return (
    <div className="p-5">
      <div className="mb-4">
        <h2 className="text-base font-bold text-slate-700">Starred</h2>
        <p className="text-xs text-slate-400 mt-0.5">Files and folders you've marked as starred</p>
      </div>

      {STARRED.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-48 text-slate-400">
          <svg className="w-12 h-12 mb-3 text-slate-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/>
          </svg>
          <p className="text-sm">No starred items yet</p>
        </div>
      ) : (
        <div className="border border-slate-200 rounded-lg overflow-hidden">
          <table className="w-full text-xs">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200">
                <th className="text-left px-4 py-2.5 text-slate-500 font-semibold">Name</th>
                <th className="text-left px-4 py-2.5 text-slate-500 font-semibold">Location</th>
                <th className="text-left px-4 py-2.5 text-slate-500 font-semibold">Size</th>
                <th className="text-left px-4 py-2.5 text-slate-500 font-semibold">Date</th>
                <th className="px-4 py-2.5"></th>
              </tr>
            </thead>
            <tbody>
              {STARRED.map((f, i) => (
                <tr key={i} className="border-b border-slate-50 hover:bg-slate-50 transition-colors cursor-pointer">
                  <td className="px-4 py-2.5 flex items-center gap-2 font-medium text-slate-700">
                    <svg className="w-4 h-4 text-yellow-400 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/>
                    </svg>
                    {f.name}
                  </td>
                  <td className="px-4 py-2.5 text-slate-500">{f.folder}</td>
                  <td className="px-4 py-2.5 text-slate-500">{f.size}</td>
                  <td className="px-4 py-2.5 text-slate-500">{f.date}</td>
                  <td className="px-4 py-2.5 text-slate-300 text-center">
                    <button className="hover:text-slate-500">⋮</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
