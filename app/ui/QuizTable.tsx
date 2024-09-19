'use client'

import React, { useEffect, useState } from 'react'
import {quiz} from '../../lib/data'
import clsx from 'clsx'
import { lusitana } from './fonts'
import Image from 'next/image'
import image from '../../public/video/2991-removebg-preview.png'

export default function QuizTable() {

    const [ activeQuestion , setActiveQuestion ] = useState(0)
    const [selectedAnswer, setSelectedAnswer] = useState('')
    const [ checked , setChecked] = useState(false)
    const [ selectedAnsweIndex, setSelectedAnsweIndex] = useState(null)
    const [ showResult,setShowResult] = useState(false)
    const [ error,setError] = useState('')
    const [ result , setResult] = useState({
        score:0,
        correctAnswer:0,
        wrongAnswer:0
    })

    const question = quiz.questions[activeQuestion]

    useEffect(() => {
        setTimeout(() => {
            setError('')
        },3000)
    },[error])


    const onAnswerSelected = (anwer,id) => {
    setChecked(true)
    setSelectedAnswer(anwer)
    setSelectedAnsweIndex(id)
    }

    const nexQuestion = () => {
        setSelectedAnsweIndex(null)
        setResult((prev) => 
            selectedAnswer === question.correctAnswer ? {
                ...prev,
                score:prev.score + 1,
                correctAnswer:prev.correctAnswer + 1
            } : {
                ...prev,
                wrongAnswer:prev.wrongAnswer + 1
            }
        )
        if(activeQuestion !== quiz.totalQuestions -1){
            setActiveQuestion((prev) => prev + 1)
        }else{
            setActiveQuestion(0)
            setShowResult(true)
        }
        setChecked(false)
    }

    return (
    <div>
        {showResult ? (
        <div className='flex flex-col justify-center items-center'>
            <Image
                src={image}
                width={400}
                height={280}
                className="md:block"
                alt="Screenshots of the dashboard project showing desktop version"
            />
            <div className='flex flex-col sm:flex-auto sm:flex-nowrap items-center justify-around'>
                <p className={`p-2 text-{${lusitana.className}} `}>Score: <span className='p-2 border border-[#2c4e67] shadow-md shadow-[#2c4e67] rounded-md'>{result.score}</span></p>
                <p className={`p-2 text-{${lusitana.className}}`}>Wrong answers :<span className='p-2 border border-[#2c4e67] shadow-md shadow-[#2c4e67] rounded-md'>{result.wrongAnswer}</span> </p> 
                <p className={`p-2 text-{${lusitana.className}}`}>correct Answer :<span className='p-2 border border-[#2c4e67] shadow-md shadow-[#2c4e67] rounded-md'>{result.correctAnswer}</span></p> 
            </div>
            <button className='button mt-6'>Go Home</button>
            
        </div>
        ) : (
        <div className='flex flex-col items-center justify-center gap-7'>
            <div>
            <p className='text-gray-500'>
                <span className='text-white'>{activeQuestion + 1}</span> / {quiz.totalQuestions}
            </p>
            </div>
            <div className='w-full h-2'>
            <p className='text-red-500 w-full text-center text-[80%]'>
                {error ? error : ''}
            </p>
            </div>

            <div className='flex flex-col gap-6'>
                <h1 className={`${lusitana.className} text-[16px] md:text-[26px]`}><span className='pr-4'>{question.id} </span> {question.question}</h1>
                <div>
                <ul className='gap-1 flex flex-col'>
                {question.answers.map((answer,id) => (
                    <li
                        key={id}
                        onClick={() => onAnswerSelected(answer,id)}
                        className={clsx(
                            `p-3 cursor-pointer rounded-md text-[14px] md:text-[20px] ${lusitana.className}`,
                            {'border-[#2c4e67] border-2':id === selectedAnsweIndex,
                                'hover:border-[0.5px] border-[#29648e]':id !== selectedAnsweIndex
                            }
                        )}
                        >
                        <span className='pr-6'>{String.fromCharCode(65 + id)}</span>
                        {answer}</li>
                ))}
                </ul>
                </div>
                {!checked ? (<button className='bg-[#008fee24] p-3 rounded-md text-[#ffffff48]'>Select a option</button> ) : (<button onClick={nexQuestion} className='p-2 rounded-md bg-[#0070c0]'>{activeQuestion === quiz.totalQuestions -1 ? 'Finish' :'Next'}</button>)}
            </div>
        </div>
    )}
    </div>
    );
}
