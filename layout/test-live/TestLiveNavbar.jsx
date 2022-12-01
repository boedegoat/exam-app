import { Bars3BottomLeftIcon } from '@heroicons/react/24/outline'
import { useEffect, useState } from 'react'

const TestLiveNavbar = ({ title }) => {
    const [countdown, setCountdown] = useState(2 * 60 * 60 * 1000)

    useEffect(() => {
        let interval = setInterval(() => {
            setCountdown((prev) => prev - 1000)
        }, 1000)

        return () => clearInterval(interval)
    }, [])

    const [hours, minutes, seconds] = new Date(countdown)
        .toISOString()
        .slice(11, 19)
        .split(':')

    return (
        <>
            <div className='sticky top-0 z-[999] shadow-lg shadow-gray-100 bg-white'>
                <div className='container'>
                    <div className='navbar'>
                        <div className='dropdown'>
                            <label
                                tabIndex={0}
                                className='btn btn-ghost btn-circle'
                            >
                                <Bars3BottomLeftIcon className='w-6' />
                            </label>
                            <ul
                                tabIndex={0}
                                className='dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52'
                            >
                                <li>
                                    <button
                                        onClick={() => {
                                            location.reload()
                                        }}
                                    >
                                        Refresh
                                    </button>
                                </li>
                                <li>
                                    <button
                                        onClick={() => {
                                            document.documentElement.requestFullscreen()
                                        }}
                                    >
                                        Go Fullscreen
                                    </button>
                                </li>
                                <li>
                                    <button>Lapor Masalah</button>
                                </li>
                            </ul>
                        </div>
                        <div className='mx-auto max-w-[20ch] sm:max-w-none'>
                            <p className='font-medium truncate'>{title}</p>
                        </div>
                        <div className='flex items-center space-x-2'>
                            <div
                                className='tooltip tooltip-bottom'
                                data-tip='Sistem beroperasi normal'
                            >
                                <div className='w-3 h-3 bg-success rounded-full'></div>
                            </div>
                            <button className='btn btn-xs btn-ghost'>
                                <span className='countdown font-mono text-lg'>
                                    <span
                                        style={{
                                            '--value': hours,
                                        }}
                                    ></span>
                                    :
                                    <span
                                        style={{
                                            '--value': minutes,
                                        }}
                                    ></span>
                                    :
                                    <span
                                        style={{
                                            '--value': seconds,
                                        }}
                                    ></span>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TestLiveNavbar
