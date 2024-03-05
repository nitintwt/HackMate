import React from 'react'
import { Button } from '../ui/moving-border'
import { Link } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'

function HeroSection() {
  const { loginWithRedirect, user, isAuthenticated, logout } = useAuth0();
  return (
    <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10  md:py-0">
      <div className="p-4 relative z-10 w-full text-center">
        <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">Hack Stronger, Hack Smarter – Assemble Your Dream Team!</h1>
        <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
          In the realm of coding challenges, unite with like-minded minds.
          HackMate: Where your coding aspirations meet their perfect match.
        </p>
      </div>
      <div>
      
       <Button
        borderRadius="1.75rem"
        onClick={(e) => loginWithRedirect()}
        className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 font-bold"
       >
        Login
       </Button>
      
    </div>
    </div> 
  )
}

export default HeroSection
