import React from 'react'

function HackathonCard({Hackathon , date , location , mode , skills}) {
  return (
    <div className="text-white bg-gray-900 rounded-xl w-full max-w-md m-10">
    <div className="p-6">
      <div className="space-y-1">
        <div className="text-2xl">{Hackathon} </div>
        <div>
          <div className="flex flex-row items-center space-x-2">
            <CalenderImage className="w-4 h-4 " />
            <span>{date}</span>
          </div>
          <div className="flex flex-row items-center space-x-2">
            <GlobeImage className="w-4 h-4" />
            <span>{mode}</span>
          </div>
        </div>
      </div>
    </div>
    <div className="grid gap-2 p-6">
      <div className="flex flex-row items-center space-x-2">
        <LocationImage className="w-4 h-4" />
        <span>{location}</span>
      </div>
      <div className="grid gap-2">
        <h3 className="font-semibold">Required Skills</h3>
        <p className="text-sm">
          {skills}
        </p>
      </div>
    </div>
  </div>
  )
}

export default HackathonCard
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