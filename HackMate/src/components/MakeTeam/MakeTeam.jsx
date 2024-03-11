import React from 'react'
import TeamInput from './TeamInput'
import HackathonInput from '../ui/HackathonInputCard'

function MakeTeam() {
  return (
    <div className='bg-black w-full h-dvh rounded-md flex flex-col items-center relative overflow-hidden mx-auto py-10  md:py-0 '>
      <div>
        <div className='pt-24 p-4 relative z-10 w-full text-center'>
          <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">Make Your own Team</h1>
        </div>
        <div className='mt-5'>
          <p className="mt- font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto text-center">
            Discover synergy in coding excellence! Create your dream team, conquer challenges, and redefine success. Start building your powerhouse squad now!
          </p>
        </div>
      </div>
      <div className='mt-10'>
        <div>
          <HackathonInput />
        </div>
      </div>
    </div>
  )
}

export default MakeTeam
