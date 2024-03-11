import React, { useState } from 'react';
import service from '../../appwrite/config';
import { Button } from './moving-border';
import { useContext } from 'react'
import UserContext from '../../context/UserContext'

export default function HackathonInput() {
  const [mode, setMode] = useState('')
  const [location , setLocation]= useState('')
  const [hackathon , setHackathon]= useState('')
  const [date , setDate]= useState('')
  const [skills , setSkills]= useState('')
  const {authId}= useContext(UserContext)

  const handleSubmit = async ()=>{
    try {
      service.createHackathon({
        mode: mode,
        Name:hackathon,
        location:location,
        date:date,
        Skills:skills,
        authId: authId,
      })
    } catch (error) {
      console.error("Error creating the post:", error)
      
    }
  }
  return (
    <div className="text-white bg-gray-900 rounded-xl">
    <div className='p-8'>
      <div className="space-y-1">
      <input
          type="text"
          value={hackathon}
          onChange={(event) => setHackathon(event.target.value)}
          className="text-2xl bg-transparent border-b border-gray-800 text-white w-full p-0 m-0 outline-none"
          placeholder="Vercel Web Development Hackathon"
        />
        <div>
          <div className="flex flex-row items-center space-x-2 mt-5">
            <CalenderImage className="w-4 h-4 " />
            <span>
            <input
              value={date}
              onChange={(event) => setDate(event.target.value)}
            type="text" className="bg-transparent border-b border-white text-white w-full p-0 m-0 outline-none" placeholder="June 1 - June 30, 2023"  />  
          </span>
          </div>
          <div className="flex flex-row items-center space-x-2 mt-5">
            <GlobeImage className="w-4 h-4" />
            <span>
              <select
                className="bg-transparent border-b border-white text-white pr-8 pl-2 appearance-none outline-none"
                defaultValue="Online"
                onChange={(event) => setMode(event.target.value)}
              >
                <option value="Online" className='bg-gray-900'>Online</option>
                <option value="Offline" className='bg-gray-900'>Offline</option>
              </select>
              {mode === 'Offline' && (
                <div className='flex flex-row items-center space-x-2 mt-5'>
                <input
                  type="text"
                  value={location}
                  onChange={(event) => setLocation(event.target.value)}
                  className="bg-transparent border-b border-white text-white w-full p-0 m-0 outline-none mt-2"
                  placeholder="Enter location"
                />
                </div>
              )}
            </span>
          </div>
        </div>
      </div>
    </div>
    <div className="grid gap-2 p-6">
      <div className="grid gap-2">
        <h3 className="font-semibold">Required Skills</h3>
        <p className="text-sm">
        <input
              type="text"
              value={skills}
              onChange={(event) => setSkills(event.target.value)}
              className="bg-transparent border-b border-white text-white w-full p-0 m-0 outline-none"
              placeholder="HTML"

            />
        </p>
      </div>
    </div>
    <button
          type="button"
          onClick={handleSubmit}
          className="bg-transparent border border-white text-white px-4 py-2 rounded-xl hover:bg-white hover:text-gray-900 transition duration-300 m-5"
        >
          Submit
        </button>
  </div>


  )
}

    
function CalenderImage(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
    </svg>
  );
}

function GlobeImage(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="2" x2="22" y1="12" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

function LocationImage(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="2" x2="5" y1="12" y2="12" />
      <line x1="19" x2="22" y1="12" y2="12" />
      <line x1="12" x2="12" y1="2" y2="5" />
      <line x1="12" x2="12" y1="19" y2="22" />
      <circle cx="12" cy="12" r="7" />
    </svg>
  );
}
 