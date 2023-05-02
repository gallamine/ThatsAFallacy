import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function StrawMan() {
  return (
    <div className="container">
      <Head>
        <title>That's A Fallacy!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Hey! Your argument is a fallacy!" />
        <p className="description">
          It's an <a href="https://en.wikipedia.org/wiki/Straw_man">straw man informal fallacy</a>!
        </p>
<h1>Examples of the Straw Man Fallacy</h1>
    <p>The straw man fallacy occurs when someone misrepresents an opponent's argument or position, making it weaker or more extreme, and then attacks the distorted version instead of the original argument. Here are three examples:</p>
    <ol>
        <li>
            <p><strong>Example 1:</strong></p>
            <p>Person A: "I think we should have stricter gun control laws to help reduce gun violence."</p>
            <p>Person B: "Oh, so you want to take away everyone's guns and leave us all defenseless? That's ridiculous."</p>
            <p>In this example, Person B misrepresents Person A's argument for stricter gun control by suggesting that Person A wants to take away all guns, making the argument appear more extreme.</p>
        </li>
        <li>
            <p><strong>Example 2:</strong></p>
            <p>Person A: "I think we need to invest more in public education to improve the quality of our schools."</p>
            <p>Person B: "So you just want to throw money at the problem and hope it goes away? That's not a practical solution."</p>
            <p>Here, Person B distorts Person A's argument about investing in public education by accusing them of wanting to "throw money at the problem," instead of addressing the merits of increased funding for education.</p>
        </li>
        <li>
            <p><strong>Example 3:</strong></p>
            <p>Person A: "I believe that companies should be held accountable for their environmental impact and work towards sustainable practices."</p>
            <p>Person B: "You're saying we should shut down all businesses that aren't perfectly eco-friendly? That would destroy the economy!"</p>
            <p>In this instance, Person B misrepresents Person A's argument for corporate environmental responsibility by exaggerating it to imply that all non-eco-friendly businesses should be shut down, making the argument seem more extreme and impractical.</p>
        </li>
    </ol>

      </main>

      <Footer />
    </div>
  )
}
