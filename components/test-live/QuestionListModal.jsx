import { XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { Modal } from 'react-daisyui'
import { twMerge } from 'tailwind-merge'

const QuestionListModal = ({
    open,
    onClose,
    questions,
    testId,
    currentNumber,
    selectedChoices,
    doubts,
    cheatedNumbers,
}) => {
    return (
        <Modal open={open} onClickBackdrop={onClose}>
            <Modal.Header className='font-bold flex justify-between items-center'>
                <div>Daftar Soal</div>
                <button
                    onClick={onClose}
                    className='btn btn-error btn-xs btn-circle text-white'
                >
                    <XMarkIcon className='w-5' />
                </button>
            </Modal.Header>

            <Modal.Body className='flex flex-wrap gap-4'>
                {questions.map((_, index) => {
                    const number = index + 1
                    return (
                        <Link
                            key={index}
                            href={{
                                query: {
                                    testId,
                                    number,
                                },
                            }}
                            shallow
                            scroll
                            onClick={onClose}
                        >
                            <div className='indicator'>
                                {cheatedNumbers.includes(number) && (
                                    <span className='indicator-item'>🔒</span>
                                )}
                                <div
                                    className={twMerge(
                                        'px-5 py-3 border-2 rounded-md',
                                        selectedChoices[index] &&
                                            'bg-blue-100 border-blue-200',
                                        doubts.includes(number) &&
                                            'bg-warning border-warning',
                                        currentNumber === number &&
                                            'border-gray-600'
                                    )}
                                >
                                    {number}
                                </div>
                            </div>
                        </Link>
                    )
                })}
            </Modal.Body>
        </Modal>
    )
}

export default QuestionListModal
