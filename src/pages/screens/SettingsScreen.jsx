import { useState } from 'react';

const COLORS = ['#1e3a8a','#2563eb','#7c3aed','#dc2626','#b45309','#15803d','#0e7490','#ca8a04','#f97316'];

export default function SettingsScreen() {
  const [tab, setTab]             = useState('Watermark');
  const [wmEnabled, setWmEnabled] = useState(true);
  const [allowView, setView]      = useState(true);
  const [allowDl, setDl]          = useState(true);
  const [wmContent, setContent]   = useState('');
  const [color, setColor]         = useState('#1e3a8a');
  const [posType, setPosType]     = useState('Across');
  const [singleLine, setSingle]   = useState(false);
  const [multiLine, setMulti]     = useState(true);

  const tabs = ['Company Details', 'Watermark', 'Advanced', 'Others'];

  return (
    <div className="p-5">
      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="text-[11px] text-slate-400">Admin</p>
          <h2 className="text-base font-bold text-slate-700">Settings</h2>
        </div>
        <div className="flex gap-2">
          <button className="text-xs px-4 py-1.5 bg-[#1e3a8a] text-white rounded hover:bg-blue-900 font-medium">Save</button>
          <button className="text-xs px-4 py-1.5 border border-slate-200 rounded text-slate-600 hover:bg-slate-50">Cancel ×</button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-slate-200 mb-5">
        {tabs.map(t => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`px-4 py-2.5 text-xs font-medium border-b-2 transition-colors -mb-px
              ${tab === t ? 'border-[#1e3a8a] text-[#1e3a8a]' : 'border-transparent text-slate-500 hover:text-slate-700'}`}
          >
            {t}
          </button>
        ))}
      </div>

      {tab === 'Watermark' && (
        <div className="grid grid-cols-2 gap-8">
          {/* Left controls */}
          <div className="space-y-5">
            {/* Enabled toggle */}
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-slate-700">Enabled</span>
              <button
                onClick={() => setWmEnabled(!wmEnabled)}
                className={`relative w-10 h-5 rounded-full transition-colors ${wmEnabled ? 'bg-[#1e3a8a]' : 'bg-slate-300'}`}
              >
                <span className={`absolute top-0.5 w-4 h-4 bg-white rounded-full shadow transition-transform ${wmEnabled ? 'translate-x-5' : 'translate-x-0.5'}`}/>
              </button>
            </div>

            {/* View / Download */}
            <div>
              <p className="text-xs text-slate-500 font-medium mb-2">Permissions</p>
              <div className="flex gap-4">
                <label className="flex items-center gap-2 text-sm text-slate-600 cursor-pointer">
                  <input type="checkbox" checked={allowView} onChange={e => setView(e.target.checked)} className="w-3.5 h-3.5 accent-[#1e3a8a]"/>
                  View
                </label>
                <label className="flex items-center gap-2 text-sm text-slate-600 cursor-pointer">
                  <input type="checkbox" checked={allowDl} onChange={e => setDl(e.target.checked)} className="w-3.5 h-3.5 accent-[#1e3a8a]"/>
                  Download
                </label>
              </div>
            </div>

            {/* Content */}
            <div>
              <p className="text-xs text-slate-500 font-medium mb-1">In authenticator</p>
              <p className="text-[10px] text-slate-400 mb-2 leading-relaxed">
                Enter options from here (username, email, password), or add actual values to watermark.
                Date formats: MM/DD/YYYY or MM-DD-YYYY.
              </p>
              <textarea
                rows={3}
                value={wmContent}
                onChange={e => setContent(e.target.value)}
                placeholder="Enter watermark content..."
                className="w-full border border-slate-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-[#1e3a8a] resize-none"
              />
            </div>

            {/* Color */}
            <div>
              <p className="text-xs text-slate-500 font-medium mb-2">Color</p>
              <div className="flex gap-2 flex-wrap">
                {COLORS.map(c => (
                  <button
                    key={c}
                    onClick={() => setColor(c)}
                    style={{ backgroundColor: c }}
                    className={`w-5 h-5 rounded-full transition-transform hover:scale-110
                      ${color === c ? 'ring-2 ring-offset-1 ring-slate-400 scale-110' : ''}`}
                  />
                ))}
              </div>
            </div>

            {/* Position Type */}
            <div>
              <p className="text-xs text-slate-500 font-medium mb-2">Position Type</p>
              <div className="flex gap-4">
                {['Straight', 'Across'].map(pt => (
                  <label key={pt} className="flex items-center gap-2 text-sm text-slate-600 cursor-pointer">
                    <input
                      type="radio"
                      name="posType"
                      checked={posType === pt}
                      onChange={() => setPosType(pt)}
                      className="accent-[#1e3a8a]"
                    />
                    {pt}
                  </label>
                ))}
              </div>
            </div>

            {/* Position */}
            <div>
              <p className="text-xs text-slate-500 font-medium mb-2">Position</p>
              <div className="flex gap-4">
                <label className="flex items-center gap-2 text-sm text-slate-600 cursor-pointer">
                  <input type="checkbox" checked={singleLine} onChange={e => setSingle(e.target.checked)} className="w-3.5 h-3.5 accent-[#1e3a8a]"/>
                  Single Line
                </label>
                <label className="flex items-center gap-2 text-sm text-slate-600 cursor-pointer">
                  <input type="checkbox" checked={multiLine} onChange={e => setMulti(e.target.checked)} className="w-3.5 h-3.5 accent-[#1e3a8a]"/>
                  Multiple Lines
                </label>
              </div>
            </div>
          </div>

          {/* Right: Preview */}
          <div>
            <p className="text-xs text-slate-500 font-medium mb-2 text-right">Watermark Preview</p>
            <div className="border-2 border-dashed border-slate-200 rounded-lg h-64 relative overflow-hidden bg-slate-50 flex items-center justify-center">
              {/* Watermark overlay */}
              <div className={`absolute inset-0 flex items-center justify-center pointer-events-none select-none
                ${posType === 'Across' ? '-rotate-45' : ''}`}>
                {multiLine ? (
                  <div className="space-y-6">
                    {[...Array(4)].map((_, i) => (
                      <p key={i} style={{ color, opacity: 0.3 }} className="text-sm font-bold tracking-widest whitespace-nowrap">
                        DIPVISION VDR
                      </p>
                    ))}
                  </div>
                ) : (
                  <p style={{ color, opacity: 0.3 }} className="text-sm font-bold tracking-widest">
                    DIPVISION VDR
                  </p>
                )}
              </div>
              <div className="relative z-10 bg-white/70 rounded px-3 py-2 text-center">
                <p className="text-xs text-slate-400">Document Preview</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {tab === 'Company Details' && (
        <div className="space-y-4 max-w-lg">
          {['Company Name','Company Email','Company Phone','Company Address'].map(field => (
            <div key={field}>
              <label className="block text-xs text-slate-500 font-medium mb-1">{field}</label>
              <input type="text" className="w-full border border-slate-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-[#1e3a8a]" placeholder={`Enter ${field}`}/>
            </div>
          ))}
        </div>
      )}

      {(tab === 'Advanced' || tab === 'Others') && (
        <div className="flex items-center justify-center h-40 text-slate-400 text-sm">
          {tab} settings coming soon
        </div>
      )}
    </div>
  );
}
