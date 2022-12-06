import { useRouter } from 'next/router'

import { tests } from '@/dummy/tests'
import HomeLayout from '@/layout/home/HomeLayout'
import TestItem from '@/components/home/TestItem'
import Link from 'next/link'
import { twMerge } from 'tailwind-merge'

const TestDetailsPage = () => {
    const router = useRouter()
    const { testId } = router.query
    const data = tests.find((test) => test.id === testId)

    if (!data) return null

    return (
        <HomeLayout title={data.title} home={false} centerText={data.title}>
            <TestItem data={data} />
            <div className='p-4 border bg-white rounded-md'>
                <div className='prose'>
                    <h4>Ditugaskan oleh</h4>
                    <div className='flex mt-2'>
                        <img
                            className='rounded-full w-10 m-0 mr-2'
                            src='https://placeimg.com/80/80/people'
                        />
                        <div className='text-sm'>
                            <h5 className='font-semibold'>Otong</h5>
                            <div className=''>Guru apakek</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='p-4 border bg-white rounded-md'>
                <div className='prose'>
                    <h4>Introduksi Test</h4>
                    <p>Halo Semuanya 👋</p>
                    <p>
                        Peserta tidak diperbolehkan untuk melakukan aktivitas
                        yang mencurigakan yang tertera di bawah ini :
                    </p>
                    <ul>
                        <li>Berpindah tab</li>
                        <li>Membuka aplikasi lain</li>
                        <li>
                            Pindah aplikasi dengan <kbd>alt</kbd> +{' '}
                            <kbd>tab</kbd>
                        </li>
                        <li>Mengklik area diluar area tes</li>
                    </ul>
                    <p>
                        Jika peserta terdeteksi melakukan aktivitas tersebut,
                        maka peserta{' '}
                        <strong>akan otomatis di diskualifikasi</strong> dan
                        tidak dibolehkan untuk melanjutkan tes ini.
                    </p>
                    <p>
                        Untuk itu, tes ini akan berlangsung secara fullscreen
                        agar peserta dapat fokus mengerjakan tes ini.
                    </p>
                    <p>
                        Itu saja peringatannya. Kerjakan dengan jujur dan Good
                        Luck 😄
                    </p>
                </div>
            </div>
            <div className='mt-5'>
                <Link
                    href={'/test-live/' + data.id + '?number=1'}
                    className={twMerge(
                        'btn btn-primary w-full',
                        data.status !== 'live' && 'btn-disabled'
                    )}
                    onClick={() => document.documentElement.requestFullscreen()}
                >
                    Kerjakan Sekarang
                </Link>
            </div>
        </HomeLayout>
    )
}

export default TestDetailsPage
