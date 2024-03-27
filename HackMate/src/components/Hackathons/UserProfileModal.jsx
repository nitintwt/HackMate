import React from 'react'

function UserProfileModal({isvisible , onClose , name , age , college , skills , about}) {
  if (!isvisible) return null
  const skillsModified = JSON?.parse(skills).join(' , ')
  return (
    <div className='fiexed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center' onClick={onClose} >
      <div className='w-[500px] flex flex-col'>
        <button className='text-white text-xl place-self-end ' onClick={()=> onClose()}>X</button>
      </div>
      <div>
        <div className="w-[90vw] max-w-sm">
          <div>
            <div className="flex items-center gap-4">
              <div className="grid gap-1.5">
                <div className="font-bold text-lg">{name}</div>
              </div>
            </div>
            <div className="grid gap-1.5 mt-4">
              <div className="grid gap-1.5">
                <div className="font-semibold">About</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  {about}
                </div>
              </div>
              <div className="grid gap-1.5">
                <div className="font-semibold">Skills</div>
                <div className="flex flex-wrap gap-2">
                  {skillsModified}
                </div>
              </div>
              <div className="grid gap-1.5">
                <div className="font-semibold">Age</div>
                <div>{age}</div>
              </div>
              <div className="grid gap-1.5">
                <div className="font-semibold">College</div>
                <div>{college}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserProfileModal
