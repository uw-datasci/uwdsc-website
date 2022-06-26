import '../styles/globals.scss'
import Layout from '../components/Layout'
import Head from 'next/head'


function MyApp({ Component, pageProps }) {

  return (
    
    <Layout>
      <meta name="theme-color" media="(prefers-color-scheme: light)" content="#F8EEE6"></meta>
      <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#203B46"></meta>
      <Component {...pageProps} />
    </Layout>
  )
  
}

export default MyApp


