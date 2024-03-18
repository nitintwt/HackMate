import React, { useContext , useState, useEffect } from 'react'
import service from '../../appwrite/config'
import UserContext from '../../context/UserContext'
import {useAuth0} from '@auth0/auth0-react'

function HackathonCard({Hackathon , date , location , mode , skills , hackId}) {
  const {authId}= useContext(UserContext)
  const [applied, setApplied] = useState(false)
  const {user}= useAuth0()

  useEffect(() => {
    const checkAppliedStatus = async () => {
      if (authId) {
        try {
          const data = await service.getAppliedUserId(hackId);
          if (data?.documents[0]?.UserAppliedId === user?.sub) {
            setApplied(true);
          }
          
        } catch (error) {
          setError('Error checking application status');
        }
      }
    }
    console.log('applied already')
    checkAppliedStatus()
  })

  const handleApply= async ()=>{
    try {
      await service.createApply({
        HackId: hackId,
        UserAppliedId: authId,
      })
      setApplied(true)
    } catch (error) {
      console.error("error while applying:" , error)
    }
  }

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
          {!applied ? (
            <button
              className="bg-neutral-300 hover:bg-neutral-500 text-white font-bold py-2 px-4 rounded mt-4"
              onClick={handleApply}
            >
              Apply
            </button>
          ) : (
            <button
              className="bg-neutral-800 text-white font-bold py-2 px-4 rounded cursor-not-allowed mt-4"
              disabled
            >
              Applied
            </button>
          )}
        </div>
      </div>
    </main>
  )
}

export default HackathonCard