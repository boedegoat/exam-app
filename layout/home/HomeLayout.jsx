import Head from 'next/head'
import { BookOpenIcon, CheckCircleIcon } from '@heroicons/react/24/outline'
import { useEffect, useState } from 'react'

import HomeNavbar from './HomeNavbar'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { twMerge } from 'tailwind-merge'

const HomeLayout = ({ children }) => {
    const [activeTab, setActiveTab] = useState('')
    const router = useRouter()

    useEffect(() => {
        const path = router.pathname
        if (path !== '/') {
            setActiveTab(path.replace('/', ''))
        } else {
            setActiveTab('active-test')
        }
    }, [])

    return (
        <main>
            <Head>
                <title>Exam App</title>
            </Head>
            <HomeNavbar />
            <div className='container-xl mt-10 mb-8'>
                <div className='tabs !flex-nowrap overflow-x-auto mb-8'>
                    <Link
                        href='/'
                        className={twMerge(
                            'tab w-full !flex-nowrap whitespace-nowrap tab-bordered',
                            activeTab === 'active-test' && 'tab-active'
                        )}
                    >
                        <BookOpenIcon className='w-5 mr-2' />
                        Active Test
                    </Link>
                    <Link
                        href='/completed-test'
                        className={twMerge(
                            'tab w-full !flex-nowrap whitespace-nowrap tab-bordered',
                            activeTab === 'completed-test' && 'tab-active'
                        )}
                    >
                        <CheckCircleIcon className='w-5 mr-2' />
                        Completed Test
                    </Link>
                </div>
                {children}
            </div>
        </main>
    )
}

export default HomeLayout
