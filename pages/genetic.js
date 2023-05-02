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
<h1>Examples of the Genetic Fallacy</h1>
    <ol>
        <li>
            <p><strong>Example 1:</strong></p>
            <p>Person A: "I think the idea of universal basic income could be beneficial to society and help reduce poverty."</p>
            <p>Person B: "That idea was first proposed by Thomas Paine, who was an anarchist. Therefore, universal basic income is a terrible idea."</p>
            <p>In this example, Person B commits the genetic fallacy by dismissing the idea of universal basic income based on its origin (Thomas Paine, who was an anarchist), rather than evaluating the idea on its own merits.</p>
        </li>
        <li>
            <p><strong>Example 2:</strong></p>
            <p>Person A: "I believe in equal rights for all, regardless of gender or race."</p>
            <p>Person B: "Well, you only believe that because your parents raised you to be liberal. Your belief is invalid."</p>
            <p>In this case, Person B is committing the genetic fallacy by discrediting Person A's belief in equal rights based on the source of the belief (their liberal upbringing), rather than addressing the validity of the belief itself.</p>
        </li>
        <li>
            <p><strong>Example 3:</strong></p>
            <p>Person A: "I find yoga to be a great way to relieve stress and improve mental well-being."</p>
            <p>Person B: "Yoga has roots in Eastern mysticism, which is based on irrational beliefs. Therefore, the practice of yoga is irrational and should not be considered as a valid method for stress relief."</p>
            <p>Here, Person B commits the genetic fallacy by rejecting the benefits of yoga due to its origins in Eastern mysticism, rather than evaluating the practice's effectiveness in relieving stress and improving mental well-being.</p>
        </li>
    </ol>

      </main>

      <Footer />
    </div>
  )
}
