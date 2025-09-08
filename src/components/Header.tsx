import React from 'react'

const Header = () => {
  return (
    <main className="flex flex-col gap-[32px] row-start-2 justify-center items-center sm:items-start min-h-screen">
    <header className="text-5xl font-semibold " >Hi, <span className="bg-gradient-to-bl from-blue-400 from-10% via-sky-500 via-30% to-fuchsia-500 bg-clip-text text-transparent">Whats Up?</span></header>
    
  </main>
  )
}

export default Header