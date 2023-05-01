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
        <Header title="Hey! Your argument is a fallacy!" />
        <p className="description">
          It's a <a href="https://en.wikipedia.org/wiki/No_true_Scotsman">"no true Scottsman" informal fallacy</a>!
        </p>
    <p>
    The “No True Scotsman” fallacy is committed when the arguer satisfies the following conditions:
    <ul>
   <li> not publicly retreating from the initial, falsified assertion</li>
    <li>offering a modified assertion that definitionally excludes a targeted unwanted counterexample</li>
    <li>using rhetoric to hide the modification</li>
    </ul>
    </p>
      </main>

      <Footer />
    </div>
  )
}
