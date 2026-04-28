const DEVICES = [
  { id: 1, name: 'Chrome on Windows', ip: '192.168.1.10', lastSeen: '2 mins ago',  status: 'active' },
  { id: 2, name: 'Firefox on MacOS',  ip: '192.168.1.22', lastSeen: '1 hour ago',  status: 'active' },
  { id: 3, name: 'Safari on iPhone',  ip: '10.0.0.5',     lastSeen: '3 hours ago', status: 'idle' },
  { id: 4, name: 'Edge on Windows',   ip: '192.168.1.45', lastSeen: '1 day ago',   status: 'inactive' },
];

export default function DevicesScreen() {
  return (
    <div className="p-5">
      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="text-[11px] text-slate-400">Admin</p>
          <h2 className="text-base font-bold text-slate-700">Devices</h2>
        </div>
        <button className="p-1.5 border border-slate-200 rounded hover:bg-slate-50 transition-colors">
          <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
          </svg>
        </button>
      </div>

      <div className="border border-slate-200 rounded-lg overflow-hidden">
        <table className="w-full text-xs">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200">
              <th className="text-left px-4 py-2.5 text-slate-500 font-semibold">Device</th>
              <th className="text-left px-4 py-2.5 text-slate-500 font-semibold">IP Address</th>
              <th className="text-left px-4 py-2.5 text-slate-500 font-semibold">Last Seen</th>
              <th className="text-left px-4 py-2.5 text-slate-500 font-semibold">Status</th>
              <th className="px-4 py-2.5 text-slate-500 font-semibold">Action</th>
            </tr>
          </thead>
          <tbody>
            {DEVICES.map(d => (
              <tr key={d.id} className="border-b border-slate-50 hover:bg-slate-50 transition-colors">
                <td className="px-4 py-3 font-medium text-slate-700">{d.name}</td>
                <td className="px-4 py-3 text-slate-500 font-mono">{d.ip}</td>
                <td className="px-4 py-3 text-slate-500">{d.lastSeen}</td>
                <td className="px-4 py-3">
                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-medium
                    ${d.status === 'active'   ? 'bg-green-100 text-green-700'
                    : d.status === 'idle'     ? 'bg-yellow-100 text-yellow-700'
                    : 'bg-slate-100 text-slate-500'}`}>
                    {d.status}
                  </span>
                </td>
                <td className="px-4 py-3 text-center">
                  <button className="text-xs text-red-500 hover:text-red-700 hover:underline font-medium">
                    Disconnect
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
