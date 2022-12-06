import { ArrowUpTrayIcon, DocumentTextIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'

import QuestionListModal from './QuestionListModal'

const TestInfo = ({
    data,
    number,
    testId,
    cheatedNumbers,
    doubts,
    selectedChoices,
}) => {
    const [openQuestionList, setOpenQuestionList] = useState(false)

    const toggleQuestionList = () => setOpenQuestionList(!openQuestionList)

    return (
        <div className='py-5 flex justify-between items-center'>
            <div className='flex items-center space-x-3 font-semibold'>
                <span className='badge badge-lg'>
                    Soal {number}/{data.questionsLength}
                    {cheatedNumbers.includes(+number) && (
                        <div
                            className='tooltip tooltip-bottom'
                            data-tip='Soal dikunci karena Anda telah melakukan aktivitas yang mencurigakan'
                        >
                            <span className='badge bg-gray-500 badge-sm rounded-full ml-2'>
                                dikunci 🔒
                            </span>
                        </div>
                    )}
                    {doubts.includes(+number) && (
                        <span className='badge-warning badge-sm rounded-full ml-2'>
                            ragu-ragu
                        </span>
                    )}
                </span>
                <span className='badge badge-primary'>
                    <span>
                        {
                            selectedChoices.filter((letter) => letter !== '')
                                .length
                        }{' '}
                        terjawab
                    </span>
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
                    htmlFor='question-list-modal'
                >
                    <DocumentTextIcon className='w-4 mr-1' />
                    Daftar Soal
                </button>

                <QuestionListModal
                    open={openQuestionList}
                    onClose={toggleQuestionList}
                    questions={data.questions}
                    testId={testId}
                    currentNumber={number}
                    selectedChoices={selectedChoices}
                    doubts={doubts}
                    cheatedNumbers={cheatedNumbers}
                />
            </div>
        </div>
    )
}

export default TestInfo
