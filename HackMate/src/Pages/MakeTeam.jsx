import React from 'react'
import HackathonInput from '../components/MakeTeam/HackathonInputCard'

function MakeTeam() {
  return (
    <div className='bg-black w-full h-dvh rounded-md flex flex-col items-center relative overflow-hidden mx-auto py-10  md:py-0 '>
      <div className='w-full max-w-5xl mt-20'>
        <div  className="mt-2 md:mt-0 p-5 text-center text-2xl pb- font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          <p>
            Discover synergy in coding excellence! Create your dream team, conquer challenges, and redefine success.
            Start building your powerhouse squad now!
          </p>
        </div>
      </div>
      <div className='w-full max-w-5xl'>
        <div>
          <HackathonInput />
        </div>
      </div>
    </div>
  )
}

export default MakeTeam
