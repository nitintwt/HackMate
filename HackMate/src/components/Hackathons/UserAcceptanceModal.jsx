
function UserAcceptanceModal({ isVisible, onClose, userName, userEmail }) {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center" onClick={onClose}>
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-md relative">
        <div className="font-bold text-lg mb-4">Accept User</div>
        <div className="text-sm text-gray-700 mb-4">You accepted {userName} as your teammate.</div>
        <div className="text-sm text-gray-700 mb-2"><span className="font-semibold">Contact:</span> {userEmail}</div>
      </div>
    </div>
  );
}

export default UserAcceptanceModal
