import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import React from 'react'
import { twMerge } from 'tailwind-merge'

const TestBody = ({
    currentQuestion,
    cheatedNumbers,
    doubts,
    selectChoiceHandler,
    setDoubtHandler,
    number,
    selectedChoices,
    testId,
    data,
}) => {
    return (
        <div>
            {/* Question */}
            <div className='bg-white p-4 border rounded-md select-none'>
                <div className='prose max-w-none text-black'>
                    <p>{currentQuestion.question}</p>
                </div>
            </div>

            {/* Answer */}
            {!cheatedNumbers.includes(number) && (
                <div className='shadow shadow-gray-100 bg-white rounded-md border p-4 mt-4 space-y-2'>
                    {Object.entries(currentQuestion.choices).map(
                        ([letter, choice]) => (
                            <button
                                key={letter}
                                onClick={() => selectChoiceHandler(letter)}
                                className={twMerge(
                                    'btn btn-ghost normal-case text-left flex flex-nowrap items-center w-full justify-start rounded-md font-normal leading-normal h-auto text-base',
                                    selectedChoices[number - 1] === letter
                                        ? 'bg-blue-100 border-blue-200 hover:bg-blue-100'
                                        : 'hover:bg-gray-200'
                                )}
                            >
                                <span className='badge'>
                                    {letter.toUpperCase()}
                                </span>
                                <div className='p-2 ml-3 my-auto'>{choice}</div>
                            </button>
                        )
                    )}
                </div>
            )}

            {/* Action Buttons */}
            <div className='fixed bottom-0 left-0 w-full py-4 bg-gradient-to-t from-gray-100 to-transparent pointer-events-none'>
                <div className='container-xl bg-white p-4 rounded-md border flex justify-between shadow shadow-gray-100 pointer-events-auto'>
                    <div className='tooltip' data-tip='Soal Sebelumnya'>
                        <Link
                            href={{
                                query: {
                                    testId,
                                    number: number - 1,
                                },
                            }}
                            shallow
                            scroll
                            className={twMerge(
                                'btn btn-sm',
                                number === 1 && 'btn-disabled'
                            )}
                        >
                            <ChevronLeftIcon className='w-5' />
                        </Link>
                    </div>

                    <button
                        onClick={setDoubtHandler}
                        className={twMerge(
                            'btn btn-sm btn-warning',
                            !doubts.includes(number) && 'btn-outline'
                        )}
                        disabled={cheatedNumbers.includes(number)}
                    >
                        Ragu-Ragu
                    </button>

                    <div className='tooltip' data-tip='Soal Selanjutnya'>
                        <Link
                            href={{
                                query: {
                                    testId,
                                    number: number + 1,
                                },
                            }}
                            shallow
                            scroll
                            className={twMerge(
                                'btn btn-sm',
                                number === data.questionsLength &&
                                    'btn-disabled'
                            )}
                        >
                            <ChevronRightIcon className='w-5' />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TestBody
