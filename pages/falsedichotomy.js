import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function FalseDichotomy() {
  return (
    <div className="container">
      <Head>
        <title>That's A Fallacy!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Hey! Your argument is a fallacy!" />
        <p className="description">
          It's an <a href="https://en.wikipedia.org/wiki/False_dilemma">false dichotomy informal fallacy</a>!
        </p>
<h1>Examples of the False Dichotomy/Dilemma</h1>
    <p>The false dichotomy fallacy occurs when an argument presents two opposing options as the only possible choices, ignoring other alternatives. Here are three examples:</p>
    <ol>
        <li>
            <p><strong>Example 1:</strong></p>
            <p>Person A: "I think we should explore renewable energy sources to address climate change."</p>
            <p>Person B: "So you want to completely abandon fossil fuels and ruin the economy? There’s no middle ground."</p>
            <p>In this example, Person B falsely presents the choice between completely abandoning fossil fuels and doing nothing, ignoring other possibilities like transitioning to renewable energy gradually.</p>
        </li>
        <li>
            <p><strong>Example 2:</strong></p>
            <p>Person A: "We should consider providing universal healthcare to ensure everyone gets the medical attention they need."</p>
            <p>Person B: "Either we have a government-run healthcare system, or people will be left to die in the streets. There’s no other option."</p>
            <p>Here, Person B frames the issue as if the only two choices are a government-run system or no healthcare at all, ignoring the possibility of hybrid systems or private-sector involvement in healthcare.</p>
        </li>
        <li>
            <p><strong>Example 3:</strong></p>
            <p>Person A: "I think we should regulate tech companies more to protect user privacy."</p>
            <p>Person B: "So you want to completely control the internet and shut down innovation? That’s not going to work."</p>
            <p>In this instance, Person B presents the false dichotomy that regulating tech companies must either mean complete control over the internet or no regulation at all, ignoring the range of balanced regulatory approaches.</p>
        </li>
    </ol>


      </main>

      <Footer />
    </div>
  )
}
