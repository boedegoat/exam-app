import { ClockIcon, DocumentTextIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { twMerge } from 'tailwind-merge'

const TestItem = ({ data }) => {
    const statusStyle = {
        upcoming: 'bg-yellow-200 text-yellow-600',
        live: 'bg-red-200 text-red-600',
        completed: 'bg-green-200 text-green-600',
    }

    return (
        <Link
            href={'/test-details/' + data.id}
            className='block border bg-white rounded-md p-4'
        >
            <div className='prose'>
                <span
                    className={twMerge(
                        'text-sm font-semibold px-2 py-1 rounded-md',
                        statusStyle[data.status]
                    )}
                >
                    {data.status}
                </span>
                <h3 className='!mt-1 !mb-2'>{data.title}</h3>
                <div className='flex items-center space-x-3 text-sm'>
                    <div className='flex items-center'>
                        <ClockIcon className='w-4 mr-1' />
                        {data.duration}
                    </div>
                    <div className='flex items-center'>
                        <DocumentTextIcon className='w-4 mr-1' />
                        {data.questionsLength} Soal
                    </div>
                </div>
                <div className='text-sm'>{data.time}</div>
            </div>
        </Link>
    )
}

export default TestItem
