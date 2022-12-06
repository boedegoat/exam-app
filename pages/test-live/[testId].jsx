import { useEffect, useState } from 'react'
import Head from 'next/head'
import { useLocalStorage } from 'usehooks-ts'
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'

import TestLiveNavbar from '@/layout/test-live/TestLiveNavbar'
import { tests } from '@/dummy/tests'

const TestBody = dynamic(() => import('@/components/test-live/TestBody'), {
    ssr: false,
})
const TestInfo = dynamic(() => import('@/components/test-live/TestInfo'), {
    ssr: false,
})

const TestLivePage = ({ data }) => {
    const { query } = useRouter()
    const number = Number(query.number)
    const testId = query.testId

    const [isPageHidden, setIsPageHidden] = useState(false)
    const [selectedChoices, setSelectedChoice] = useLocalStorage(
        'selectedChoices',
        Array(data.questionsLength).fill('')
    )
    const [doubts, setDoubts] = useLocalStorage('doubts', [])
    const [cheatedNumbers, setCheatedNumbers] = useLocalStorage(
        'cheatedNumbers',
        []
    )

    // this will re-run on each user change question number
    useEffect(() => {
        if (typeof document.visibilityState === 'undefined') {
            alert("Your browser doesn't support running test")
            return
        }

        const onPageHidden = () => {
            setTimeout(() => {
                if (document.visibilityState == 'hidden') {
                    setIsPageHidden(true)
                    setCheatedNumbers((prevs) => {
                        if (prevs.includes(number)) return prevs
                        setDoubts((prevs) => {
                            const index = prevs.indexOf(number)
                            const updated = [...prevs]
                            updated.splice(index, 1)
                            return updated
                        })
                        setSelectedChoice((prevs) => {
                            const updated = [...prevs]
                            updated[number - 1] = ''
                            return updated
                        })
                        setTimeout(() => {
                            alert(
                                'Maaf, Soal ini dikunci dan tidak bisa Anda jawab karena Anda telah melakukan aktivitas yang mencurigakan 😶'
                            )
                        })
                        return [...prevs, number]
                    })
                } else {
                    setIsPageHidden(false)
                }
            })
        }

        document.addEventListener('visibilitychange', onPageHidden)

        return () =>
            document.removeEventListener('visibilitychange', onPageHidden)
    }, [number])

    const setDoubtHandler = () => {
        setDoubts((prevs) => {
            if (prevs.includes(number)) {
                const index = prevs.indexOf(number)
                return [...prevs.slice(0, index), ...prevs.slice(index + 1)]
            } else {
                return [...prevs, number]
            }
        })
    }

    const selectChoiceHandler = (letter) => {
        setSelectedChoice((prevs) => {
            const updated = [...prevs]
            updated[number - 1] = letter
            return updated
        })
    }

    const currentQuestion = data.questions[number - 1]

    return (
        <main>
            <Head>
                <title>{isPageHidden ? 'Hayo mau ngapain' : data.title}</title>
            </Head>
            <TestLiveNavbar title={data.title} />
            <div className='container max-w-4xl pb-28'>
                <TestInfo
                    data={data}
                    number={number}
                    testId={testId}
                    selectedChoices={selectedChoices}
                    doubts={doubts}
                    cheatedNumbers={cheatedNumbers}
                />
                <TestBody
                    data={data}
                    currentQuestion={currentQuestion}
                    cheatedNumbers={cheatedNumbers}
                    selectedChoices={selectedChoices}
                    doubts={doubts}
                    selectChoiceHandler={selectChoiceHandler}
                    setDoubtHandler={setDoubtHandler}
                    number={number}
                    testId={testId}
                />
            </div>
        </main>
    )
}

export default TestLivePage

export const getServerSideProps = ({ query }) => {
    const data = tests.find((test) => test.id === query.testId)

    if (
        isNaN(query.number) ||
        Number(query.number) < 1 ||
        Number(query.number) > data.questionsLength
    ) {
        return {
            redirect: {
                permanent: false,
                destination: `/test-live/${query.testId}?number=1`,
            },
        }
    }

    return {
        props: {
            data,
        },
    }
}
