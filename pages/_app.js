import '../styles/globals.css'
import Layout from '../components/Layout'

function MyApp({ Component, pageProps }) {
  return(
    <Layout>
      <head>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css" integrity="sha512-1sCRPdkRXhBV2PBLUdRb4tMg1w2YPf37qatUFeS7zlBy7jJI8Lf4VHwWfZZfpXtYSLy85pkm9GaYVYMfw5BC1A==" crossOrigin="anonymous" referrerpolicy="no-referrer" />
      </head>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
