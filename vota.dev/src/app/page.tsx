import Head from 'next/head'
import Header from './components/Header'
export default function Home() {
  return (
    <>
      <Head>
        <title>Vota.dev</title>
        <meta name="description" content="Vota tus tecnologías favoritas" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <section className="mt-32 ">
      <h1 className="max-w-5xl mx-auto text-5xl font-extrabold text-center text-black md:text-8xl">
          Vota tus tecnologías favoritas</h1>
          <p className="max-w-lg mx-auto mt-10 text-2xl text-center text-black opacity-70">
          Decide qué stack, tenologías y frameworks han
sido los mejores del año! ¡Cada voto, cuenta!
          </p>
          <div className="max-w-4xl p-10 mx-auto my-20 bg-white border-2 border-black rounded-lg">
          <h2>Mejor framework</h2>
          <ul>
            <li>React</li>
            <li>Vue</li>
            <li>Angular</li>
            <li>React</li>
          </ul>
      </div>
      </section>
      
    </>
  )
}
