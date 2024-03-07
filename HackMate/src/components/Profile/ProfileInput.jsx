import React, { useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { cn } from "../../utils/cn";
import { Button } from "../ui/moving-border";
import service from "../../appwrite/config";
import { useNavigate } from "react-router-dom";
import {User, useAuth0} from '@auth0/auth0-react'
import { SkillsInput } from "../ui/SkillsInput";
import { ResizableInput } from "../ui/resizeAbleInput";

export function ProfileInputBox() {
  const [name , setName]= useState('')
  const [age , setAge]=useState('')
  const [college , setCollege]=useState('')
  const [skills , setSkills]=useState([])
  const [about, setAbout]= useState('')
  const navigate= useNavigate()
  const {user}= useAuth0()

  const handleSubmit = async()=>{
    if (name.trim()==='') return alert("write your name");
    const skillsInString= JSON.stringify(skills)
    try {
       await service.createProfile({
        Name:name,
        College:college,
        Age:age,
        Skills:skillsInString,
        About:about,
        authId:user.sub,
      })

      navigate('/')
    } catch (error) {
      console.error("error submiting the form:", error)
      
    }
  }


  return (
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
        Welcome to HackMate
      </h2>
      <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
        Make Your Profile to showcase your skills
      </p>
      <form className="my-8">
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="YourName">Your Name</Label>
            <Input id="username" placeholder="Tyler" type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
          </LabelInputContainer>
        </div>
        <LabelInputContainer className='mb-4'>
            <Label htmlFor="age">Age</Label>
            <Input id="age" placeholder="18" type="text" value={age} onChange={(e)=>setAge(e.target.value)}  />
          </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="college">College</Label>
          <Input id="college" placeholder="IIT Kanpur" type="text" value={college} onChange={(e)=> setCollege(e.target.value)} />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="skills" >Skills</Label>
          <SkillsInput userSkills={skills} setUserSkills={setSkills}/>
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="about" >Tell us about your self</Label>
          <ResizableInput value={about} onChange={(e)=> setAbout(e.target.value)} placeholder='Atleast 100 words'/>
        </LabelInputContainer>
      </form>
      <Button
        borderRadius="1.75rem"
        onClick={(e) => handleSubmit()}
        className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 font-bold "
       >
        Submit
       </Button>
    </div>
  );
}


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
