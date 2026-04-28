import { useState } from 'react';

const PARTNER_GROUPS = [
  { name: 'Partner', type: 'Partner', createdBy: 'Super Admin', createdAt: '7/19/23, 3:00 PM', dataroom: '1.42 MB', users: 3, pending: 0 },
];
const MANAGED_GROUPS = [
  { name: 'User',  type: 'User',  createdBy: 'nethapa9998@gmail.com', createdAt: '7/19/23, 3:00 PM', dataroom: '0 Bytes', users: 0, pending: 6 },
  { name: 'Admin', type: 'Admin', createdBy: 'Super Admin',           createdAt: '7/19/23, 3:00 PM', dataroom: '0 Bytes', users: 1, pending: 1 },
];
const ADMIN_ONLY_GROUPS = [
  { name: 'Group Admin', type: 'Admin', createdBy: 'nethapa9998@gmail.com', createdAt: '7/20/23, 2:10 AM', dataroom: '387.35 KB', users: 3, pending: 1 },
  { name: 'Loan 98',     type: 'User',  createdBy: 'test@gmail.com',        createdAt: '7/20/23, 2:10 AM', dataroom: '0 Bytes',    users: 1, pending: 6 },
];

const PENDING_USERS = [
  { name: 'Nina Test',    login: 'Nina@gmail.com',    group: 'Admin', type: 'Admin', from: 'Nethapa9998@gmail.com' },
  { name: 'Khik Test',    login: 'Khik@gmail.com',    group: 'Admin', type: 'Admin', from: 'Nethapa9998@gmail.com' },
  { name: 'Anneal Testt', login: 'Anneal@gmail.com',  group: 'Admin', type: 'Admin', from: '' },
  { name: 'Shekhar Testt',login: 'Shekhar@gmail.com', group: 'Admin', type: 'Admin', from: '' },
  { name: 'Bhavnas Testt',login: 'Bhavnas@gmail.com', group: 'Admin', type: 'Admin', from: '' },
  { name: 'Shreya Testt', login: 'Shreya@gmail.com',  group: 'Admin', type: 'Admin', from: '' },
  { name: 'Userm Testt',  login: 'Userm@gmail.com',   group: 'Admin', type: 'Admin', from: '' },
  { name: 'Sheetal Testt',login: 'Sheetal@gmail.com', group: 'Admin', type: 'Admin', from: '' },
];

export default function GroupsScreen({ userType }) {
  const isPartner = userType === 'partner';
  const [showNewGroup, setShowNewGroup] = useState(false);
  const [groupName, setGroupName]       = useState('');
  const [groupType, setGroupType]       = useState('Admin');
  const [activeTab, setActiveTab]       = useState('all'); // all | active | pending
  const [search, setSearch]             = useState('');

  const groups = isPartner
    ? [...PARTNER_GROUPS, ...MANAGED_GROUPS]
    : ADMIN_ONLY_GROUPS;

  const totalUsers = groups.reduce((s, g) => s + g.users, 0);

  return (
    <div className="p-5">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="text-[11px] text-slate-400">Admin</p>
          <h2 className="text-base font-bold text-slate-700">Manage Groups</h2>
        </div>
        <div className="flex items-center gap-2">
          {/* Search */}
          <div className="relative">
            <input
              type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search group or login..."
              className="border border-slate-200 rounded px-3 py-1.5 text-xs w-44 focus:outline-none focus:border-[#1e3a8a] pl-7"
            />
            <svg className="w-3.5 h-3.5 text-slate-400 absolute left-2 top-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z"/>
            </svg>
          </div>
          {/* Export */}
          <button className="p-1.5 border border-slate-200 rounded hover:bg-slate-50 transition-colors" title="Export Groups">
            <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
            </svg>
          </button>
          {/* Refresh */}
          <button className="p-1.5 border border-slate-200 rounded hover:bg-slate-50 transition-colors">
            <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
            </svg>
          </button>
          {/* New Group — only partners */}
          {isPartner && (
            <button
              onClick={() => setShowNewGroup(true)}
              className="flex items-center gap-1.5 bg-[#1e3a8a] text-white text-xs px-3 py-1.5 rounded hover:bg-blue-900 transition-colors font-medium"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4"/>
              </svg>
              New Group
            </button>
          )}
        </div>
      </div>

      {/* Groups table */}
      <div className="border border-slate-200 rounded-lg overflow-hidden mb-6">
        <table className="w-full text-xs">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200">
              <th className="text-left px-4 py-2.5 text-slate-500 font-semibold">
                Group Name ({groups.length} Groups, {totalUsers} Users)
              </th>
              <th className="text-left px-4 py-2.5 text-slate-500 font-semibold">Group Type</th>
              <th className="text-left px-4 py-2.5 text-slate-500 font-semibold">Created By</th>
              <th className="text-left px-4 py-2.5 text-slate-500 font-semibold">Dataroom</th>
              <th className="px-4 py-2.5 text-slate-500 font-semibold">More</th>
            </tr>
          </thead>
          <tbody>
            {isPartner && (
              <>
                {/* Partner row */}
                {PARTNER_GROUPS.map((g, i) => (
                  <GroupRow key={i} group={g} isPartner={isPartner} />
                ))}
                {/* Partner Managed Groups sub-header */}
                <tr className="bg-slate-50 border-y border-slate-100">
                  <td colSpan={5} className="px-4 py-1.5 text-[11px] font-semibold text-slate-500">
                    → Partner Managed Groups
                  </td>
                </tr>
                <tr className="bg-slate-50 border-b border-slate-100">
                  <th className="text-left px-4 py-1.5 text-[10px] text-slate-400 font-medium">Group Name</th>
                  <th className="text-left px-4 py-1.5 text-[10px] text-slate-400 font-medium">Group Type</th>
                  <th className="text-left px-4 py-1.5 text-[10px] text-slate-400 font-medium">Created By</th>
                  <th className="text-left px-4 py-1.5 text-[10px] text-slate-400 font-medium">Dataroom</th>
                  <th className="px-4 py-1.5 text-[10px] text-slate-400 font-medium">More</th>
                </tr>
                {MANAGED_GROUPS.map((g, i) => (
                  <GroupRow key={i} group={g} isPartner={isPartner} />
                ))}
              </>
            )}
            {!isPartner && (
              <>
                <tr className="bg-slate-50 border-b border-slate-100">
                  <td colSpan={5} className="px-4 py-1.5 text-[11px] font-semibold text-slate-500">
                    → Group Admin
                  </td>
                </tr>
                {ADMIN_ONLY_GROUPS.map((g, i) => (
                  <GroupRow key={i} group={g} isPartner={false} />
                ))}
              </>
            )}
          </tbody>
        </table>
      </div>

      {/* Pending Users section (partner only) */}
      {isPartner && (
        <div>
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-bold text-slate-700">Pending Users</h3>
            <div className="flex items-center gap-1.5">
              {['All Users', 'Active Users', 'Pending Approvals', 'New +'].map((tab, i) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(['all','active','pending','new'][i])}
                  className={`text-xs px-2.5 py-1 rounded border transition-colors
                    ${activeTab === ['all','active','pending','new'][i]
                      ? 'bg-[#1e3a8a] text-white border-[#1e3a8a]'
                      : 'border-slate-200 text-slate-600 hover:bg-slate-50'}`}
                >
                  {tab}
                </button>
              ))}
              <button className="p-1.5 border border-slate-200 rounded hover:bg-slate-50">
                <svg className="w-3.5 h-3.5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
                </svg>
              </button>
              <button className="p-1.5 border border-slate-200 rounded hover:bg-slate-50">
                <svg className="w-3.5 h-3.5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
                </svg>
              </button>
            </div>
          </div>
          <div className="border border-slate-200 rounded-lg overflow-hidden">
            <table className="w-full text-xs">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="w-8 px-3 py-2.5"><input type="checkbox" className="w-3 h-3"/></th>
                  <th className="text-left px-3 py-2.5 text-slate-500 font-semibold">Name</th>
                  <th className="text-left px-3 py-2.5 text-slate-500 font-semibold">Login Id</th>
                  <th className="text-left px-3 py-2.5 text-slate-500 font-semibold">Group Name</th>
                  <th className="text-left px-3 py-2.5 text-slate-500 font-semibold">Group Type</th>
                  <th className="text-left px-3 py-2.5 text-slate-500 font-semibold">Requested From</th>
                  <th className="px-3 py-2.5"></th>
                </tr>
              </thead>
              <tbody>
                {PENDING_USERS.map((u, i) => (
                  <tr key={i} className="border-b border-slate-50 hover:bg-slate-50 transition-colors">
                    <td className="px-3 py-2 text-center"><input type="checkbox" className="w-3 h-3"/></td>
                    <td className="px-3 py-2 font-medium text-slate-700">{u.name}</td>
                    <td className="px-3 py-2 text-slate-500">{u.login}</td>
                    <td className="px-3 py-2 text-slate-500">{u.group}</td>
                    <td className="px-3 py-2">
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-medium
                        ${u.type === 'Admin' ? 'bg-purple-100 text-purple-700' : 'bg-green-100 text-green-700'}`}>
                        {u.type}
                      </span>
                    </td>
                    <td className="px-3 py-2 text-slate-400">{u.from}</td>
                    <td className="px-3 py-2 text-slate-300 text-center">
                      <button className="hover:text-slate-500">⋮</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* New Group Modal */}
      {showNewGroup && (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl w-96 overflow-hidden">
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-slate-100">
              <h3 className="text-sm font-semibold text-slate-700">New Group</h3>
              <button onClick={() => setShowNewGroup(false)} className="text-slate-400 hover:text-slate-600">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </button>
            </div>
            <div className="p-5 grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs text-slate-500 font-medium mb-1.5">Group Name <span className="text-red-400">*</span></label>
                <input
                  autoFocus
                  type="text"
                  value={groupName}
                  onChange={e => setGroupName(e.target.value)}
                  placeholder="Admin"
                  className="w-full border border-slate-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-[#1e3a8a]"
                />
              </div>
              <div>
                <label className="block text-xs text-slate-500 font-medium mb-1.5">Group Type <span className="text-red-400">*</span></label>
                <select
                  value={groupType}
                  onChange={e => setGroupType(e.target.value)}
                  className="w-full border border-slate-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-[#1e3a8a] bg-white"
                >
                  <option>Admin</option>
                  <option>User</option>
                  <option>Partner</option>
                </select>
              </div>
            </div>
            <div className="flex justify-end gap-2 px-5 pb-5">
              <button onClick={() => setShowNewGroup(false)} className="text-xs px-4 py-2 border border-slate-200 rounded text-slate-600 hover:bg-slate-50">
                Close
              </button>
              <button
                onClick={() => setShowNewGroup(false)}
                className="text-xs px-4 py-2 bg-[#1e3a8a] text-white rounded hover:bg-blue-900 font-medium"
              >
                Create
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function GroupRow({ group, isPartner }) {
  return (
    <tr className="border-b border-slate-50 hover:bg-slate-50 transition-colors">
      <td className="px-4 py-2.5">
        <div className="font-medium text-slate-700">{group.name}</div>
        <div className="text-[10px] text-blue-500 mt-0.5">
          {group.users} Users | {group.pending} Pending
        </div>
      </td>
      <td className="px-4 py-2.5">
        <span className={`px-2 py-0.5 rounded-full text-[10px] font-medium
          ${group.type === 'Partner' ? 'bg-blue-100 text-blue-700'
          : group.type === 'Admin'   ? 'bg-purple-100 text-purple-700'
          : 'bg-green-100 text-green-700'}`}>
          {group.type}
        </span>
      </td>
      <td className="px-4 py-2.5 text-slate-500">
        <div>{group.createdBy}</div>
        <div className="text-[10px] text-slate-400">{group.createdAt}</div>
      </td>
      <td className="px-4 py-2.5 text-slate-500">{group.dataroom}</td>
      <td className="px-4 py-2.5 text-center">
        {isPartner && (
          <button className="text-slate-300 hover:text-slate-500">⋮⋮⋮</button>
        )}
      </td>
    </tr>
  );
}
