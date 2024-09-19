import Link from 'next/link'
import React from 'react'
import { lusitana } from './ui/fonts'

export default function page() {
    return (
        <div className='w-full h-screen flex flex-col gap-y-10 justify-center items-center p-5'>
            <h1 className={`${lusitana} font-semibold text-[16px] md:text-[26px]`}>QUIZ APP</h1>
            <div className='flex flex-col gap-8 p-5 border-[0.5px] border-[#2c4e67] rounded-md shadow-lg shadow-[#2c4e67] '>
                <div>
                <h4 className='text-[16px] sm:text-[26px] '>Test your knowledge on Next.js by answering a series of exciting questions.</h4>
                <p className='text-pretty font-thin text-gray-200'>Hint: Brush up on Next.js routing, components, and API routes. Good luck!</p>
                </div>
                <Link href={'/dashboard'}>
                <button 
                    className='button'
                >
                Start Quiz
                </button>
                </Link>
            </div>
        </div>
    )
}
