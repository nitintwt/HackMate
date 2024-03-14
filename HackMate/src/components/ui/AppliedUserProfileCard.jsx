import { Link } from "react-router-dom"


export default function Component({userName , userBio , userId}) {
  return (
    <div className="w-full max-w-sm">
      <div className="p-6">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-3">
            <div className="text-lg font-semibold">Alex Campbell</div>
          </div>
        </div>
        <div className="mt-4 text-sm leading-loose">Frontend Engineer at Vercel. I turn coffee into code.</div>
      </div>
      <div className="p-4 flex justify-end">
        <Link className="inline-block w-full sm:w-auto" to="/userProfile">
          View Profile
        </Link>
      </div>
    </div>
  )
}

