import React from 'react';

function OutlineSidebar({ activeTrack, topics, selectedTopic, onTopicSelect, loading }) {
  return (
    <aside className="w-64 bg-zinc-50 border-r border-gray-200 flex flex-col flex-shrink-0 overflow-y-auto">
      <div className="p-4 border-b border-gray-200 bg-zinc-100/50">
        <h3 className="text-xs font-bold text-zinc-400 uppercase tracking-widest">
          {activeTrack.toUpperCase()} Outline
        </h3>
      </div>
      <nav className="flex-1 py-2 px-2 space-y-0.5">
        {loading ? (
          <div className="p-4 text-xs text-gray-400 font-medium">Loading topics...</div>
        ) : topics.length === 0 ? (
          <div className="p-4 text-xs text-gray-400 italic">No topics found.</div>
        ) : (
          topics.map((topic) => (
            <button
              key={topic.id}
              onClick={() => onTopicSelect(topic)}
              className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-all truncate block ${selectedTopic?.id === topic.id ? 'bg-green-700 text-white font-semibold shadow-sm' : 'text-zinc-700 hover:bg-zinc-200 hover:text-zinc-900'}`}
            >
              {topic.name}
            </button>
          ))
        )}
      </nav>
    </aside>
  );
}

export default OutlineSidebar;