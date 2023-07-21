import Head from 'next/head'

import type { AppProps } from 'next/app'

import '@/styles/global.css'
import Layout from '@/components/Layout'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel='icon' href='/favicon.ico' />
        <meta
          name='viewport'
          content='viewport-fit=auto, width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0'
        />
        <title>wujinhjun-website</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
