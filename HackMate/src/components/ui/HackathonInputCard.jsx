import React, { useState } from 'react';
import service from '../../appwrite/config';
import { useContext } from 'react'
import UserContext from '../../context/UserContext'
import { useNavigate } from 'react-router-dom'
import { Toaster, toast } from 'sonner'
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { cn } from '../../utils/cn';

import {
  IconBrandGithub,
  IconBrandGoogle,
  IconBrandOnlyfans,
} from "@tabler/icons-react";

 function HackathonInput() {
  const [mode, setMode] = useState('')
  const [location , setLocation]= useState('')
  const [hackathon , setHackathon]= useState('')
  const [date , setDate]= useState('')
  const [skills , setSkills]= useState('')
  const {authId}= useContext(UserContext)
  const{navigate} = useNavigate()
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleSubmit = async (e)=>{
    e.preventDefault()
    if (skills.trim()==='') return alert(" pehle pura from fill toh kar le bhai");
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
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
      <form className="my-8">
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="hackathon">Hackathon</Label>
            <Input id="Hackathon" placeholder="Hackathon Name" type="text" value={hackathon} onChange={(event) => setHackathon(event.target.value)} />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="Date">Date</Label>
          <Input id="Date" placeholder="" type="date" value={date} onChange={(event) => setDate(event.target.value)}/>
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="mode">Mode</Label>
          <p className="text-neutral-300 mt-4">
            <select
              className="bg-transparent border-b border-white text-white pr-8 pl-2 appearance-none outline-none"
              defaultValue="Online"
              onChange={(event) => setMode(event.target.value)}
            >
              <option value="Online" className='bg-gray-900'>Online</option>
              <option value="Offline" className='bg-gray-900'>Offline</option>
            </select>
          </p>
        </LabelInputContainer>
        {mode === 'Offline' && (
          <LabelInputContainer className="mb-4">
            <Label htmlFor="location">Location</Label>
            <Input
              id="location"
              type="text"
              value={location}
              onChange={(event) => setLocation(event.target.value)}
              placeholder="Enter location"
            />
          </LabelInputContainer>
        )}
        <LabelInputContainer className="mb-8">
          <Label htmlFor="skills">Skills</Label>
          <Input
            id="skills"
            placeholder=""
            type="skills"
            value={skills}
            onChange={(event) => setSkills(event.target.value)}
          />
        </LabelInputContainer>
        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          onClick={(e)=>{handleSubmit(e)}}
        >
          Submit &rarr;
          <BottomGradient />
        </button>
      </form>
      <Toaster position='bottom-center'/>
    </div>

  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};


 export default HackathonInput