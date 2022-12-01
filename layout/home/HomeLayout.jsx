import Head from 'next/head'
import { BookOpenIcon, CheckCircleIcon } from '@heroicons/react/24/outline'
import { useEffect, useState } from 'react'

import HomeNavbar from './HomeNavbar'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { twMerge } from 'tailwind-merge'
import { makeSlug } from '@/utils'

const tabs = [
    {
        name: 'Active Test',
        icon: BookOpenIcon,
    },
    {
        name: 'Completed Test',
        icon: CheckCircleIcon,
    },
]

const HomeLayout = ({ children, home = true, centerText, title }) => {
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
                <title>{title ? `${title} - Exam App` : 'Exam App'}</title>
            </Head>
            <HomeNavbar home={home} centerText={centerText} />
            <div className='container-xl mt-10 mb-8'>
                {home && (
                    <div className='tabs flex-nowrap overflow-x-auto mb-8'>
                        {tabs.map((tab, index) => {
                            const tabSlug = makeSlug(tab.name)

                            return (
                                <Link
                                    key={index}
                                    href={index === 0 ? '/' : `/${tabSlug}`}
                                    className={twMerge(
                                        'tab w-full flex-nowrap whitespace-nowrap tab-bordered',
                                        activeTab === tabSlug && 'tab-active'
                                    )}
                                >
                                    <tab.icon className='w-5 mr-2' />
                                    {tab.name}
                                </Link>
                            )
                        })}
                    </div>
                )}
                {children}
            </div>
        </main>
    )
}

export default HomeLayout
