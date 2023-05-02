import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function AdHominem() {
  return (
    <div className="container">
      <Head>
        <title>That's A Fallacy!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Hey! Your argument is a fallacy!" />
        <p className="description">
          It's a <a href="https://en.wikipedia.org/wiki/Ad_hominem">genetic informal fallacy</a>!
        </p>
<h1>Examples of the Ad Hominem Fallacy</h1>
    <ol>
        <li>
            <p><strong>Example 1:</strong></p>
            <p>Person A: "I think we should invest more in renewable energy to reduce our dependence on fossil fuels."</p>
            <p>Person B: "Oh, please! You're just saying that because you own a solar panel company. Your opinion is obviously biased and worthless."</p>
            <p>In this example, Person B attacks Person A's character (their ownership of a solar panel company) instead of discussing the merits of investing in renewable energy.</p>
        </li>
        <li>
            <p><strong>Example 2:</strong></p>
            <p>Person A: "I believe that a plant-based diet can be more environmentally sustainable."</p>
            <p>Person B: "You're only saying that because you're a vegan. You vegans always try to push your agenda on everyone else!"</p>
            <p>Here, Person B uses the ad hominem fallacy by attacking Person A's veganism rather than addressing the argument about the environmental sustainability of a plant-based diet.</p>
        </li>
        <li>
            <p><strong>Example 3:</strong></p>
            <p>Person A: "I think we should promote cycling as a healthy and eco-friendly transportation option."</p>
            <p>Person B: "Well, you're just a spandex-clad cycling enthusiast. No wonder you want to fill the streets with bikes!"</p>
            <p>In this instance, Person B commits the ad hominem fallacy by making a witty remark about Person A's enthusiasm for cycling and their attire, rather than focusing on the potential benefits of promoting cycling as a transportation option.</p>
        </li>
    </ol>

      </main>

      <Footer />
    </div>
  )
}
