import Footer from '@/Components/Footer'
import Nav from '@/Components/Nav'
import '@/styles/globals.css'
import { Rubik } from '@next/font/google'

const rubik= Rubik({
  subsets: ['latin'],
  weight: '400',
})

export default function App({ Component, pageProps }) {
  return (
    <main className={rubik.className}>
      <Nav/>
      <Component {...pageProps} />
      <Footer/>
    </main>
  )
}
