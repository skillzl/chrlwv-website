import React from 'react'

const Logo: React.FC = () => {
  const title: string = 'chrlwv.tech'

  return (
    <>
      <img className='separator' src='https://cdn.discordapp.com/attachments/1050110818773110855/1109097667038019735/Untitled-1_copy.png' /><h1 className="text-2xl font-bold text-gray-400 dark:text-slate-100">{title}</h1>
    </>
  )
}

export { Logo }
