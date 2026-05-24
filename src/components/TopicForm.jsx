import React, { useState, useEffect } from 'react';

function TopicForm({ isEditing, initialData, currentTrack, onCancel, onSubmit }) {
  // Form Local Input States
  const [targetTrack, setTargetTrack] = useState('html');
  const [title, setTitle] = useState('');
  const [code, setCode] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (isEditing && initialData) {
      setTargetTrack(currentTrack);
      setTitle(initialData.name || '');
      setCode(initialData.code || '');
      setDescription(initialData.description || initialData.newdescription || '');
    } else {
      setTargetTrack(currentTrack);
      setTitle('');
      setCode('');
      setDescription('');
    }
  }, [isEditing, initialData, currentTrack]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      track: targetTrack,
      payload: { name: title, code, description }
    });
     setTitle('');
      setCode('');
      setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white border border-gray-200 rounded-xl shadow-sm 
    h-full flex flex-col overflow-hidden text-left">
      
      <div className="bg-gray-50 border-b border-gray-200 px-6 py-4 flex-shrink-0 flex items-center justify-between">
        <div>
          <h2 className="text-lg font-bold text-gray-800 tracking-tight">
            {isEditing ? " Edit Course Topic " : " Add New Course Topic"}
          </h2>
        </div>
        {isEditing && (
          <button 
            type="button" 
            onClick={onCancel}
            className="px-3 py-1 bg-gray-200 hover:bg-gray-300 text-gray-700 text-xs font-bold rounded-lg transition-colors"
          >
            Cancel Edit
          </button>
        )}
      </div>

      <div className="p-6 flex-1 overflow-y-auto space-y-4">
        
        <div className="w-full">
          <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-1.5">Select Topic</label>
          <select
            disabled={isEditing} 
            value={targetTrack}
            onChange={(e) => setTargetTrack(e.target.value)}
            className="w-full sm:w-64 border border-gray-300 px-3 py-2 text-xs rounded-lg font-medium bg-white focus:outline-none focus:border-indigo-500 disabled:bg-gray-100 disabled:text-gray-400 transition-colors"
          >
            <option value="html">HTML</option>
            <option value="css">CSS</option>
            <option value="bootstrap">Bootstrap</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-1.5">Title</label>
          <input 
            type="text" 
            required
            placeholder="e.g., Flexbox Alignments"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border border-gray-300 p-2.5 text-xs rounded-lg font-medium bg-white focus:outline-none focus:border-indigo-500 transition-colors"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-1.5">Description</label>
          <textarea 
            placeholder="• CSS Flexbox allows easy container layout axis alignment."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full h-24 p-3 text-xs border border-gray-300 rounded-lg bg-white focus:outline-none focus:border-indigo-500 resize-none font-medium leading-relaxed transition-colors"
          />
        </div>

        <div className="flex-1 flex flex-col min-h-[220px]">
          <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-1.5">Example</label>
          <textarea 
            required 
            spellCheck="false"
            placeholder="<div class='bg-blue-500 p-4 text-white'></div>"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="w-full flex-1 p-4 font-mono text-xs border border-slate-950 bg-slate-900 text-emerald-400 rounded-lg focus:outline-none resize-none leading-relaxed overflow-y-auto shadow-inner"
          />
        </div>
      </div>

      <div className="bg-gray-50 border-t border-gray-200 px-6 py-4 flex justify-end flex-shrink-0">
        <button
          type="submit"
          className={`w-full sm:w-auto px-8 py-2.5 rounded-xl font-bold text-xs text-white transition-all shadow-md ${isEditing ? 'bg-amber-600 hover:bg-amber-700' : 'bg-indigo-600 hover:bg-indigo-700'}`}
        >
          {isEditing ? "Edit Topic" : "Add Topic"}
        </button>
      </div>

    </form>
  );
}

export default TopicForm;