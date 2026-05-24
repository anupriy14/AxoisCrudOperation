import React from 'react';

function AuthModal({ isOpen, onClose, onSubmit, password, setPassword, error }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-6 w-80 shadow-2xl border border-gray-100">
        <h3 className="text-lg font-bold text-gray-800 mb-1">🔒 Security Gateway</h3>
        <p className="text-xs text-gray-400 mb-4 font-medium">Please enter your workspace authorization key.</p>
        
        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <input 
              type="password"
              placeholder="Enter Admin Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 font-mono"
              autoFocus
              required
            />
            {error && <p className="text-red-500 text-[11px] font-semibold mt-1.5">{error}</p>}
          </div>
          <div className="flex gap-2 pt-2">
            <button type="submit" className="flex-1 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs rounded-lg transition-colors">
              Verify Access
            </button>
            <button type="button" onClick={onClose} className="px-3 py-2 bg-gray-100 hover:bg-gray-200 text-gray-500 font-semibold text-xs rounded-lg transition-colors">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AuthModal;