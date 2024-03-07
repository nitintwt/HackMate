

export default function UserProfile({Name , College , Age , Skills , About}) {
  const skillsInObject = JSON.parse(Skills).join(' , ')
  return (
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
    
      <div className="w-full max-w-3xl dark:text-white">
        <div className="space-y-6 dark:text-white">
          <div className="flex items-center space-x-6 dark:text-white">
            <div className="space-y-1 text-white">
              <h1 className="text-2xl font-bold text-white">{Name}</h1>
            </div>
          </div>
          <div className="space-y-2 dark:text-gray-400">
            <p>
              {About}
            </p>
          </div>
          <div className="grid grid-cols-1 gap-2 dark:text-gray-400">
            <div>
              <h2 className="text-sm font-semibold tracking-wide uppercase dark:text-white">Age</h2>
              <p>{Age}</p>
            </div>
            <div>
              <h2 className="text-sm font-semibold tracking-wide uppercase dark:text-white">College</h2>
              <p>{College}</p>
            </div>
            <div>
              <h2 className="text-sm font-semibold tracking-wide uppercase dark:text-white">Skills</h2>
              <p>
                {skillsInObject}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

