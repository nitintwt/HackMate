import React from 'react'
import { ProfileInputBox } from './ProfileInput'
import { SkillsInput } from '../ui/SkillsInput'

function Profile() {
  return (
    <div className='bg-black min-h-screen pt-40'>
      <ProfileInputBox/>
      <SkillsInput/>
    </div>
  )
}

export default Profile

