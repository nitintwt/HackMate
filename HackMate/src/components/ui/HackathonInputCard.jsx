import React, { useState } from 'react';
import service from '../../appwrite/config';
import { useContext } from 'react'
import UserContext from '../../context/UserContext'
import { useNavigate } from 'react-router-dom'
import { Toaster, toast } from 'sonner'


export default function HackathonInput() {
  const [mode, setMode] = useState('')
  const [location , setLocation]= useState('')
  const [hackathon , setHackathon]= useState('')
  const [date , setDate]= useState('')
  const [skills , setSkills]= useState('')
  const {authId}= useContext(UserContext)
  const{navigate} = useNavigate()
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

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
      toast.success('Submit Successful')
      setDate('')
      setHackathon('')
      setLocation('')
      setSkills('')
      setMode("")
    } catch (error) {
      console.error("Error creating the post:", error)
    } 
  }
  return (
    <main className="px-4 py-8 sm:px-6 lg:px-8 text-white bg-gray-900 rounded-lg">
      <div className="rounded-lg shadow-lg overflow-hidden">
          <div className="p-6">
            <input
              type="text"
              value={hackathon}
              onChange={(event) => setHackathon(event.target.value)}
              className="text-2xl bg-transparent border-b border-gray-800 text-white w-full p-0 m-0 outline-none"
              placeholder="Hackathon Name"
            />
            <p className="text-neutral-300  mt-4">
              <span>
                <input
                value={date}
                onChange={(event) => setDate(event.target.value)}
                type="text" className="bg-transparent border-b border-white text-white w-full p-0 m-0 outline-none" placeholder="Date"  />  
              </span> 
            </p>
            <p className="text-neutral-300 mt-4">
              <select
                className="bg-transparent border-b border-white text-white pr-8 pl-2 appearance-none outline-none"
                defaultValue="Online"
                onChange={(event) => setMode(event.target.value)}
              >
                <option value="Online" className='bg-gray-900'>Online</option>
                <option value="Offline" className='bg-gray-900'>Offline</option>
              </select>
              {mode === 'Offline' && (
                <div className='flex flex-row items-center space-x-2 mt-4'>
                  <input
                  type="text"
                  value={location}
                  onChange={(event) => setLocation(event.target.value)}
                  className="bg-transparent border-b border-white text-white w-full p-0 m-0 outline-none mt-2"
                  placeholder="Enter location"
                  />
                </div>
              )}
            </p>
            <p className="text-neutral-300 mt-4">
              <input
              type="text"
              value={skills}
              onChange={(event) => setSkills(event.target.value)}
              className="bg-transparent border-b border-white text-white w-full p-0 m-0 outline-none"
              placeholder="Skills you need in your teammates"
              />
            </p>
            <button
              className="bg-neutral-300 hover:bg-neutral-500 text-white font-bold py-2 px-4 rounded mt-4"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
      </div>
      <Toaster position='bottom-center'/>
    </main>
  )
}

 