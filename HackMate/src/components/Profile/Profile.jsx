import React from 'react'
import { ProfileInputBox } from './ProfileInput'
import { SkillsInput } from '../ui/SkillsInput'
import { ResizableInput } from '../ui/resizeAbleInput'

function Profile() {
  return (
    <div className='bg-black min-h-screen pt-40'>
      <ProfileInputBox/>
    </div>
  )
}

export default Profile

