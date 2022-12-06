import { useEffect } from 'react'

import '@/styles/globals.css'

const MyApp = ({ Component, pageProps }) => {
    useEffect(() => {
        // init socket io
        fetch('/api/socket')
    }, [])

    return <Component {...pageProps} />
}

export default MyApp
