import { BellIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

const HomeNavbar = () => {
    return (
        <div className='shadow-lg shadow-gray-100 bg-white'>
            <div className='container'>
                <div className='navbar sticky top-0'>
                    <div className='flex-1'>
                        <Link href='/' className='text-lg font-semibold'>
                            Exam App
                        </Link>
                    </div>
                    <div className='flex-none'>
                        <div className='dropdown dropdown-end'>
                            <label
                                tabIndex={0}
                                className='btn btn-ghost btn-circle'
                            >
                                <div className='indicator'>
                                    <BellIcon className='w-6' />
                                    <span className='badge badge-sm indicator-item'>
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
                                <div className='w-8 rounded-full'>
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
                </div>
            </div>
        </div>
    )
}

export default HomeNavbar
