import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/globals.css'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Layout from '../components/Layout'
import { SWRConfig } from 'swr'
import { SSRProvider } from '@react-aria/ssr';

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url) => {
      console.log('App is changing to: ', url)
    }
    router.events.on('routeChangeStart', handleRouteChange)
    return () => {
      router.events.off('routeChangeStart', handleRouteChange)
    }
  }, [router.events])
  return (
    <SSRProvider>
      <SWRConfig value={{
        fetcher:
          async url => {
            const res = await fetch(url)
            // If the status code is not in the range 200-299,
            // we still try to parse and throw it.
            if (!res.ok) {
              const error = new Error('An error occurred while fetching the data.')
              // Attach extra info to the error object.
              error.info = await res.json()
              error.status = res.status
              throw error
            }
            return res.json()
          }
      }}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SWRConfig>
    </SSRProvider>
  )
}

export default MyApp
