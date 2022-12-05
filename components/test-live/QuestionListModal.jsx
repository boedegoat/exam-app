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
}) => {
    const selectedChoices = localStorage.selectedChoices
        ? JSON.parse(localStorage.selectedChoices)
        : []
    const doubts = localStorage.doubts ? JSON.parse(localStorage.doubts) : []
    const cheatedNumbers = localStorage.cheatedNumbers
        ? JSON.parse(localStorage.cheatedNumbers)
        : []

    return (
        <Modal open={open}>
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
                            className={twMerge(
                                'px-5 py-3 border-2 rounded-md',
                                selectedChoices[index] &&
                                    'bg-blue-100 border-blue-200',
                                doubts.includes(number) &&
                                    'bg-warning border-warning',
                                currentNumber === number && 'border-gray-600'
                            )}
                        >
                            {number} {cheatedNumbers.includes(number) && '🔒'}
                        </Link>
                    )
                })}
            </Modal.Body>
        </Modal>
    )
}

export default QuestionListModal
