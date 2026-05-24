import React, { useState, useEffect } from 'react';

function CodeCanvas({ activeTrack, selectedTopic }) {
  const [liveCode, setLiveCode] = useState('');
  const [iframeSrc, setIframeSrc] = useState('');

  useEffect(() => {
    if (selectedTopic && selectedTopic.code) {
      setLiveCode(selectedTopic.code);
    } else {
      setLiveCode('');
    }
  }, [selectedTopic]);

  useEffect(() => {
    if (!liveCode) return;

    const blob = new Blob([liveCode], { type: 'text/html' });
    const blobUrl = URL.createObjectURL(blob);
    
    setIframeSrc(blobUrl);
    return () => URL.revokeObjectURL(blobUrl);
  }, [liveCode]);

  if (!selectedTopic) {
    return (
      <div className="p-8 text-center text-zinc-400 bg-white border border-gray-200 rounded-xl shadow-sm">
        Select a lesson...
      </div>
    );
  }

  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden flex-1 flex flex-col h-full w-full min-h-[550px] lg:min-h-0">
      
      <div className="bg-zinc-50 px-6 py-3.5 border-b border-gray-100 flex items-center justify-between flex-shrink-0">
        <div>
          {/* <span className="text-[10px] font-bold text-emerald-700 tracking-wider bg-emerald-50 px-2 py-0.5 rounded uppercase font-mono">
            {activeTrack} Practice Lab
          </span> */}
          <h2 className="text-md font-bold text-gray-800 mt-0.5">{selectedTopic.name}</h2>
        </div>
        <button 
          onClick={() => setLiveCode(selectedTopic.code)}
          className="text-xs bg-zinc-200 hover:bg-zinc-300 text-zinc-700 px-3 py-1.5 rounded-lg transition-colors font-bold shadow-sm"
        >
          🔄 Reset Code
        </button>
      </div>

      <div className="flex-1 flex flex-col lg:flex-row p-4 gap-4 bg-zinc-100 h-full min-h-0 overflow-y-auto lg:overflow-hidden">
        
        <div className="flex-1 flex flex-col min-h-[280px] lg:min-h-0 h-full">
          <div className="bg-slate-800 text-slate-400 px-4 py-2 text-xs font-mono rounded-t-xl font-bold shadow-sm flex-shrink-0">
          Source Editor
          </div>
          <textarea
            value={liveCode}
            onChange={(e) => setLiveCode(e.target.value)}
            className="w-full flex-1 p-4 bg-slate-900 text-emerald-400 font-mono text-xs rounded-b-xl focus:outline-none resize-none leading-relaxed overflow-y-auto shadow-inner border border-slate-950"
            spellCheck="false"
          />
        </div>

        <div className="flex-1 flex flex-col min-h-[280px] lg:min-h-0 h-full">
          <div className="bg-zinc-700 text-zinc-300 px-4 py-2 text-xs font-mono rounded-t-xl font-bold shadow-sm flex-shrink-0">
            Live View Output
          </div>
          <iframe
            src={iframeSrc || 'about:blank'}
            title="W3Schools Execution Sandbox"
            sandbox="allow-scripts"
            className="w-full h-full flex-1 bg-white border border-zinc-300 rounded-b-xl shadow-inner overflow-auto block min-h-[280px] lg:min-h-0"
            style={{ minHeight: '280px' }}
          />
        </div>

      </div>
    </div>
  );
}

export default CodeCanvas;