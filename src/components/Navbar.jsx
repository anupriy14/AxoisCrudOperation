import React from 'react';

function Navbar({ onLoginClick }) {
  return (
    <header className="bg-white border-b border-gray-200 flex-shrink-0 z-20 shadow-sm px-6 py-3 flex flex-col sm:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-3">
        <span className="p-1.5 bg-green-700 text-white rounded font-bold text-lg shadow-sm">Web</span>
        <h1 className="text-lg font-bold text-gray-800 tracking-tight">Open Learning Platform</h1>
      </div>
      <button
        onClick={onLoginClick}
        className="text-xs font-semibold bg-zinc-100 hover:bg-zinc-200 text-zinc-700 border border-zinc-300 px-3 py-1.5 rounded-lg shadow-sm transition-all flex items-center gap-1.5"
      >
        ⚙️ Admin Login
      </button>
    </header>
  );
}

export default Navbar;