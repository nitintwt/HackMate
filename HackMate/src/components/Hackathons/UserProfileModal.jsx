import React from 'react';

function UserProfileModal({ isVisible, onClose, name, age, college, skills, about }) {
  if (!isVisible) return null;

  const formattedSkills = JSON.parse(skills).join(', ');

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center" onClick={onClose}>
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-md">
        <div className="font-bold text-gray-700 text-lg mb-4">{name}</div>
        <div className="text-sm text-gray-700 mb-4">{about}</div>
        <div className="text-sm text-gray-700 mb-2"><span className="font-semibold">Skills:</span> {formattedSkills}</div>
        <div className="text-sm text-gray-700 mb-2"><span className="font-semibold">Age:</span> {age}</div>
        <div className="text-sm text-gray-700"><span className="font-semibold">College:</span> {college || 'Not specified'}</div>
      </div>
    </div>
  );
}

export default UserProfileModal;

