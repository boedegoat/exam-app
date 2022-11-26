import HomeLayout from '@/layout/home/HomeLayout'
import TestItem from '@/components/home/TestItem'
import { tests } from '@/dummy/tests'

const HomePage = () => {
    return (
        <HomeLayout>
            <div className='space-y-5'>
                {tests.map((data) => (
                    <TestItem key={data.id} data={data} />
                ))}
            </div>
        </HomeLayout>
    )
}

export default HomePage
