import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>That's A Fallacy!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Hey! You're statement is a fallacy!" />
        <p className="description">
          It's probably <a href="https://en.wikipedia.org/wiki/List_of_fallacies">one of these</a>.
        </p>
      </main>

      <Footer />
    </div>
  )
}
