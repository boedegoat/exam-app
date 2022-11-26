import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import { useEffect } from 'react'

import TestLiveNavbar from '@/layout/test-live/TestLiveNavbar'
import Head from 'next/head'

const TestLivePage = () => {
    useEffect(() => {
        if (typeof document.hidden === 'undefined') {
            alert("Your browser doesn't support running test")
            return
        }

        const onPageHidden = () => {
            if (document.hidden) {
                // alert('Hayo kamu mau ngapain')
            }
        }

        document.addEventListener('visibilitychange', onPageHidden)

        return () =>
            document.removeEventListener('visibilitychange', onPageHidden)
    }, [])

    return (
        <main>
            <Head>
                <title>apakek</title>
            </Head>
            <TestLiveNavbar title='apakek' />
            <div className='container mb-8'>
                <div className='py-5 flex items-center space-x-4'>
                    <div
                        className='tooltip tooltip-bottom flex-[1]'
                        data-tip='Buka Daftar Soal'
                    >
                        <button className='btn btn-ghost w-full !flex !flex-nowrap !items-center !space-x-4'>
                            <span className='whitespace-nowrap'>
                                Soal No. 5
                            </span>
                            <progress
                                className='progress w-full'
                                value='4'
                                max='30'
                            ></progress>
                            <ChevronRightIcon className='w-5' />
                        </button>
                    </div>
                    <div className='flex whitespace-nowrap space-x-2 text-sm'>
                        <span className='bg-primary px-1.5 rounded-md font-medium py-0.5 text-white'>
                            4 terjawab
                        </span>
                        <span className='bg-warning px-1.5 rounded-md font-medium py-0.5'>
                            1 ragu-ragu
                        </span>
                    </div>
                </div>
                <div className='flex items-start space-x-8'>
                    <div className='flex-[1]'>
                        <div className='prose bg-white p-4 border rounded-md select-none'>
                            <p>
                                Berbagai penelitian telah membuktikan manfaat
                                kopi bagi tubuh, mulai dari meningkatkan suasana
                                hati dan metabolisme tubuh hingga menurunkan
                                risiko terjadinya penyakit kardiovaskular,
                                diabetes tipe 2, penyakit Parkinson, asam urat,
                                dan kanker. Jika dikonsumsi dalam jumlah yang
                                sesuai, yaitu tidak lebih dari 2–3 cangkir per
                                hari, kopi umumnya aman bagi orang dewasa dan
                                tidak merugikan kesehatan. Namun, efek samping
                                kopi dapat muncul saat kopi dikonsumsi dalam
                                jumlah yang berlebih, yaitu lebih dari 4 cangkir
                                kopi per hari. sumber: alodokter.com
                            </p>
                            <p>Mana kesimpulan yang paling benar?</p>
                        </div>
                    </div>
                    <div className='flex-[1]'>
                        <div className='shadow shadow-gray-100 bg-white rounded-md border p-1'>
                            <div className='navbar justify-between'>
                                <div className='space-x-2 flex items-center'>
                                    <button className='btn btn-sm btn-outline btn-circle'>
                                        <ChevronLeftIcon className='w-5' />
                                    </button>
                                    <button className='btn btn-sm btn-warning btn-outline'>
                                        Ragu-Ragu
                                    </button>
                                    <button className='btn btn-sm btn-outline btn-circle'>
                                        <ChevronRightIcon className='w-5' />
                                    </button>
                                </div>
                                <div>
                                    <button className='btn btn-success btn-sm btn-disabled'>
                                        Kumpulkan
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className='space-y-4 mt-4'>
                            <button className='btn btn-ghost !normal-case !text-left !flex !flex-nowrap !items-stretch w-full !bg-blue-100 !justify-start !border !border-blue-200 !rounded-md !font-normal !leading-normal !h-auto hover:bg-gray-200/50'>
                                <div className='mr-2 flex items-center text-blue-500 p-2 pr-5 border-r border-blue-200'>
                                    A
                                </div>
                                <div className='p-2 my-auto'>
                                    Banyak remaja yang sudah mulai mengonsumsi
                                    kopi secara rutin
                                </div>
                            </button>
                            <button className='btn btn-ghost !normal-case !text-left !flex !flex-nowrap !items-stretch w-full !bg-white !justify-start !border !border-gray-200 !rounded-md !font-normal !leading-normal !h-auto hover:!bg-gray-200/50'>
                                <div className='mr-2 flex items-center text-gray-400 p-2 pr-5 border-r'>
                                    B
                                </div>
                                <div className='p-2 my-auto'>
                                    Kopi menjadi minuman favorit banyak orang
                                    karena khasiatnya
                                </div>
                            </button>
                            <button className='btn btn-ghost !normal-case !text-left !flex !flex-nowrap !items-stretch w-full !bg-white !justify-start !border !border-gray-200 !rounded-md !font-normal !leading-normal !h-auto hover:!bg-gray-200/50'>
                                <div className='mr-2 flex items-center text-gray-400 p-2 pr-5 border-r'>
                                    C
                                </div>
                                <div className='p-2 my-auto'>
                                    Efek samping kopi yang negatif dapat muncul
                                    walaupun dikonsumsi tidak lebih dari 4
                                    cangkir kopi per hari
                                </div>
                            </button>
                            <button className='btn btn-ghost !normal-case !text-left !flex !flex-nowrap !items-stretch w-full !bg-white !justify-start !border !border-gray-200 !rounded-md !font-normal !leading-normal !h-auto hover:!bg-gray-200/50'>
                                <div className='mr-2 flex items-center text-gray-400 p-2 pr-5 border-r'>
                                    D
                                </div>
                                <div className='p-2 my-auto'>
                                    Minum kopi itu aman dan tidak merugikan
                                    kesehatan apabila diminum 1 cangkir saja per
                                    harinya
                                </div>
                            </button>
                            <button className='btn btn-ghost !normal-case !text-left !flex !flex-nowrap !items-stretch w-full !bg-white !justify-start !border !border-gray-200 !rounded-md !font-normal !leading-normal !h-auto hover:!bg-gray-200/50'>
                                <div className='mr-2 flex items-center text-gray-400 p-2 pr-5 border-r'>
                                    E
                                </div>
                                <div className='p-2 my-auto'>
                                    Kalau sistem kekebalan mengenal dan
                                    mengingat suatu antigen, berarti antigen itu
                                    disuntikkan ke dalam tubuh
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default TestLivePage
