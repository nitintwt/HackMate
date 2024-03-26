import React from 'react'

function CardSkeleton() {
  return (
    <div className="animate-pulse p-6">
      <div className="bg-gray-700 h-6 w-2/3 mb-4 rounded"></div>
      <div className="flex flex-col space-y-2">
        <div className="bg-gray-700 h-4 w-1/2 rounded"></div>
        <div className="bg-gray-700 h-4 w-1/3 rounded"></div>
        <div className="bg-gray-700 h-4 w-2/4 rounded"></div>
        <div className="bg-gray-700 h-4 w-3/4 rounded"></div>
      </div>
      <button className="bg-gray-800 text-white font-bold py-2 px-4 rounded cursor-not-allowed mt-2" disabled>
        Loading
      </button>
    </div>
)
}

export default CardSkeleton
