import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Genetic() {
  return (
    <div className="container">
      <Head>
        <title>That's A Fallacy!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Hey! Your argument is a fallacy!" />
        <p className="description">
          It's a <a href="https://en.wikipedia.org/wiki/Genetic_fallacy">genetic informal fallacy</a>!
        </p>

      </main>

      <Footer />
    </div>
  )
}
