import React from 'react'
import { AllHackathon } from './AllHackathons'
import { Input } from '../ui/input'
import { Button, MovingBorder } from '../ui/moving-border'

function Main() {
  return (
    <div className='bg-black flex justify-center flex-col '>
      <div className='pt-20  w-full mx-auto max-w-5xl'>
        <Input/>
      </div>
      <div className='mt-8'>
        <Button>Add Your Hackathon</Button>
      </div>
      <div className='pt-'>
      <AllHackathon/>
      </div>
    </div>
  )
}

export default Main
