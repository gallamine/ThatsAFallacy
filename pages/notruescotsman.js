import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function NoTrueScotsman() {
  return (
    <div className="container">
      <Head>
        <title>That's A Fallacy!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Hey! Your argument is a fallacy!" />
        <p className="description">
          It's a <a href="https://en.wikipedia.org/wiki/No_true_Scotsman">"no true Scotsman" informal fallacy</a>!
        </p>
    <p>
    The “No True Scotsman” fallacy is committed when the arguer satisfies the following conditions:
    <ul>
   <li> not publicly retreating from the initial, falsified assertion</li>
    <li>offering a modified assertion that definitionally excludes a targeted unwanted counterexample</li>
    <li>using rhetoric to hide the modification</li>
    </ul>
    </p>
<h1>Examples of the "No True Scotsman" Informal Fallacy</h1>
    <ol>
        <li>
            <p><strong>Example 1:</strong></p>
            <p>Person A: "Did you hear about that Scottish guy who puts pineapple on his pizza?"</p>
            <p>Person B: "Oh, come on! No true Scotsman would ever put pineapple on their pizza."</p>
            <p>In this example, Person B commits the "no true Scotsman" fallacy by modifying the definition of a "true Scotsman" to exclude those who put pineapple on pizza, instead of acknowledging that being Scottish doesn't dictate one's pizza preferences.</p>
        </li>
        <li>
            <p><strong>Example 2:</strong></p>
            <p>Person A: "I saw a Scotsman at the beach wearing sunscreen today."</p>
            <p>Person B: "Aye, that's impossible! No true Scotsman would ever wear sunscreen. Our skin is made of steel, and we scoff at the sun's puny rays."</p>
            <p>Here, Person B uses the "no true Scotsman" fallacy by humorously suggesting that a "true Scotsman" wouldn't need sunscreen because of their "steel-like" skin, rather than recognizing that anyone, Scottish or otherwise, might want to protect their skin from sun damage.</p>
        </li>
        <li>
            <p><strong>Example 3:</strong></p>
            <p>Person A: "I met a Scottish fellow who doesn't like haggis or whiskey."</p>
            <p>Person B: "No true Scotsman would ever reject haggis and whiskey! That person must be an impostor wearing a kilt."</p>
            <p>In this instance, Person B commits the "no true Scotsman" fallacy by asserting that a genuine Scotsman must enjoy haggis and whiskey, dismissing the possibility that personal tastes can vary regardless of nationality. The witty reference to the impostor wearing a kilt adds a lighthearted touch to the example.</p>
        </li>
    </ol>
      </main>

      <Footer />
    </div>
  )
}
