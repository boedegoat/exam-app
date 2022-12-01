import {
    ArrowUpTrayIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
    DocumentTextIcon,
} from '@heroicons/react/24/outline'
import { useEffect, useMemo, useState } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { twMerge } from 'tailwind-merge'
import Link from 'next/link'
import { useLocalStorage } from 'usehooks-ts'

import TestLiveNavbar from '@/layout/test-live/TestLiveNavbar'
import { tests } from '@/dummy/tests'
import QuestionListModal from '@/components/test-live/QuestionListModal'

const TestLivePage = () => {
    const router = useRouter()
    const { testId, number } = router.query
    const [loading, setLoading] = useState(true)
    const [selectedChoices, setSelectedChoice] = useLocalStorage(
        'selectedChoices',
        []
    )
    const [doubts, setDoubts] = useLocalStorage('doubts', [])
    const data = useMemo(
        () => tests.find((test) => test.id === testId),
        [testId]
    )
    const [openQuestionList, setOpenQuestionList] = useState(false)

    useEffect(() => {
        setLoading(true)
        if (!data) return
        // error handling
        if (isNaN(number) || +number < 1 || +number > data.questionsLength) {
            router.push({ query: { testId, number: 1 } }, null, {
                shallow: true,
            })
            return
        }
        setLoading(false)
    }, [router, data, number, testId])

    useEffect(() => {
        if (typeof document.hidden === 'undefined') {
            alert("Your browser doesn't support running test")
            return
        }

        const onPageHidden = () => {
            if (document.hidden) {
                // alert('Hayo kamu mau ngapain')
            }
        }

        document.addEventListener('visibilitychange', onPageHidden)

        return () =>
            document.removeEventListener('visibilitychange', onPageHidden)
    }, [])

    if (loading) return null

    const setDoubtHandler = () => {
        setDoubts((prevs) => {
            if (prevs.includes(+number)) {
                const index = prevs.indexOf(+number)
                return [...prevs.slice(0, index), ...prevs.slice(index + 1)]
            } else {
                return [...prevs, +number]
            }
        })
    }

    const selectChoiceHandler = (letter) => {
        setSelectedChoice((prevs) => [
            ...prevs.slice(0, number - 1),
            letter,
            ...prevs.slice(number),
        ])
    }

    const toggleQuestionList = () => setOpenQuestionList(!openQuestionList)

    const currentQuestion = data.questions[number - 1]

    return (
        <main>
            <Head>
                <title>{data.title}</title>
            </Head>
            <TestLiveNavbar title={data.title} />
            <div className='container max-w-4xl pb-28'>
                {/* Test Info */}
                <div className='py-5 flex justify-between items-center'>
                    <div className='flex items-center space-x-3 font-semibold'>
                        <span className='badge badge-lg'>
                            Soal {number}/{data.questionsLength}
                            {doubts.includes(+number) && (
                                <span className='badge-warning badge-sm rounded-full ml-2'>
                                    ragu-ragu
                                </span>
                            )}
                        </span>
                        <span className='badge badge-primary'>
                            <span>{selectedChoices.length} terjawab</span>
                        </span>
                        {doubts.length > 0 && (
                            <span className='badge badge-warning'>
                                <span>{doubts.length} ragu-ragu</span>
                            </span>
                        )}
                    </div>
                    <div className='flex space-x-2'>
                        <button className='btn btn-sm btn-success text-white'>
                            <ArrowUpTrayIcon className='w-4 mr-1' />
                            Kumpulkan
                        </button>
                        <button
                            className='btn btn-sm'
                            onClick={toggleQuestionList}
                        >
                            <DocumentTextIcon className='w-4 mr-1' />
                            Daftar Soal
                        </button>
                        <QuestionListModal
                            open={openQuestionList}
                            onClose={toggleQuestionList}
                            questions={data.questions}
                            testId={testId}
                            currentNumber={+number}
                        />
                    </div>
                </div>
                {/* Body Test */}
                <div className=''>
                    {/* Question */}
                    <div className='bg-white p-4 border rounded-md select-none'>
                        <div className='prose max-w-none text-black'>
                            <p>{currentQuestion.question}</p>
                        </div>
                    </div>

                    {/* Answer */}
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
                                    <div className='p-2 ml-3 my-auto'>
                                        {choice}
                                    </div>
                                </button>
                            )
                        )}
                    </div>

                    {/* Action Buttons */}
                    <div className='fixed bottom-0 left-0 w-full py-4 bg-gradient-to-t from-gray-100 to-transparent pointer-events-none'>
                        <div className='container-xl bg-white p-4 rounded-md border flex justify-between shadow shadow-gray-100 pointer-events-auto'>
                            <div className='tooltip' data-tip='Soal Sebelumnya'>
                                <Link
                                    href={{
                                        query: {
                                            testId,
                                            number: +number - 1,
                                        },
                                    }}
                                    shallow
                                    scroll
                                    className={twMerge(
                                        'btn btn-sm',
                                        +number === 1 && 'btn-disabled'
                                    )}
                                >
                                    <ChevronLeftIcon className='w-5' />
                                </Link>
                            </div>

                            <button
                                onClick={setDoubtHandler}
                                className={twMerge(
                                    'btn btn-sm btn-warning',
                                    !doubts.includes(+number) && 'btn-outline'
                                )}
                            >
                                Ragu-Ragu
                            </button>

                            <div
                                className='tooltip'
                                data-tip='Soal Selanjutnya'
                            >
                                <Link
                                    href={{
                                        query: {
                                            testId,
                                            number: +number + 1,
                                        },
                                    }}
                                    shallow
                                    scroll
                                    className={twMerge(
                                        'btn btn-sm',
                                        +number === data.questionsLength &&
                                            'btn-disabled'
                                    )}
                                >
                                    <ChevronRightIcon className='w-5' />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default TestLivePage
