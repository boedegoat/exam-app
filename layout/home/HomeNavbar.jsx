import { ArrowLongLeftIcon, BellIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

const HomeNavbar = ({ home, centerText }) => {
    return (
        <div className='sticky top-0 shadow-lg shadow-gray-100 bg-white'>
            <div className='container'>
                <div className='navbar'>
                    <div>
                        {home ? (
                            <Link href='/' className='text-lg font-semibold'>
                                Exam App
                            </Link>
                        ) : (
                            <Link href='/' className='text-lg font-semibold'>
                                <ArrowLongLeftIcon className='w-6' />
                            </Link>
                        )}
                    </div>
                    {!home && centerText && (
                        <div className='mx-auto max-w-[20ch] sm:max-w-none'>
                            <p className='font-medium truncate'>{centerText}</p>
                        </div>
                    )}
                    {home && (
                        <div className='flex-none ml-auto'>
                            <div className='dropdown dropdown-end'>
                                <label
                                    tabIndex={0}
                                    className='btn btn-ghost btn-circle'
                                >
                                    <div className='indicator'>
                                        <BellIcon className='w-5 sm:w-6' />
                                        <span className='badge badge-xs sm:badge-sm indicator-item'>
                                            8
                                        </span>
                                    </div>
                                </label>
                                <div
                                    tabIndex={0}
                                    className='mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow'
                                >
                                    <div className='card-body'>
                                        <span className='font-bold text-lg'>
                                            8 Items
                                        </span>
                                        <span className='text-info'>
                                            Subtotal: $999
                                        </span>
                                        <div className='card-actions'>
                                            <button className='btn btn-primary btn-block'>
                                                View cart
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='dropdown dropdown-end'>
                                <label
                                    tabIndex={0}
                                    className='btn btn-ghost btn-circle avatar'
                                >
                                    <div className='w-6 sm:w-8 rounded-full'>
                                        <img src='https://placeimg.com/80/80/people' />
                                    </div>
                                </label>
                                <ul
                                    tabIndex={0}
                                    className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'
                                >
                                    <li>
                                        <a className='justify-between'>
                                            Profile
                                            <span className='badge'>New</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a>Settings</a>
                                    </li>
                                    <li>
                                        <a>Logout</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default HomeNavbar
