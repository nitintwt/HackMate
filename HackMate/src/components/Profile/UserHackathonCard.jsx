import React from 'react'
import { Link } from 'react-router-dom';

 function UserHackathonCard({Hackathon , date , location , mode , skills , $id}) {
  return (
    <main className="px-4 py-8 sm:px-6 lg:px-8 text-white bg-gray-900 rounded-lg">
    <div className="rounded-lg shadow-lg overflow-hidden">
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{Hackathon}</h3>
        <p className="text-neutral-300 mb-2">
          <span className="font-semibold">Date:</span> {date}
        </p>
        <p className="text-neutral-300 mb-2">
          <span className="font-semibold">Location:</span> {location}
        </p>
        <p className="text-neutral-300 mb-2">
          <span className="font-semibold">Mode:</span> {mode}
        </p>
        <p className="text-neutral-300">
          <span className="font-semibold">Skills:</span> {skills}
        </p>
      </div>
       <div>
       <Link
          className="bg-neutral-300 hover:bg-neutral-500 text-white font-bold py-2 px-4 rounded mt-4"
          to={`hackathon/${$id}`}
        >
          Open
        </Link>
       </div>
    </div>
  </main>
  );
}
 export default UserHackathonCard