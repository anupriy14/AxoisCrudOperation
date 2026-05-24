import React from 'react';

function AdminNavbar({ onLogout }) {
  return (
    <div className="bg-indigo-900 text-white px-6 py-2 flex justify-between items-center text-xs font-mono">
      <span>⚡ Live Session: Connected as System Administrator</span>
      <button 
        onClick={onLogout}
        className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded transition-colors font-sans font-bold"
      >
        Exit Admin Panel (Logout)
      </button>
    </div>
  );
}

export default AdminNavbar;