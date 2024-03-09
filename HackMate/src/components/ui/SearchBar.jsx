import React from 'react'

export function SearchBar() {
  return (
    <div className="max-w-4xl mx-auto p-4 bg-white rounded-lg shadow flex items-center">
      <div className="flex-grow flex items-center space-x-3 border rounded-lg px-4 py-2">
        <input
          className="flex-grow text-sm placeholder-gray-400 border-none focus:ring-0"
          placeholder="Type to begin search, or use the global shortcut"
          type="text"
        />
      </div>
    </div>
  )
}