import Head from 'next/head'

const Property = () => (
    <a
      href="https://nextjs.org/docs"
      className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
    >
      <div className="flex justify-between text-center mb-2">
        <h3 className="text-2xl font-bold">La Casa Verde</h3>
        <h6>Score 9/10</h6>
      </div>
      <img src="https://th.bing.com/th/id/R.df35fd7c3e7b4d60720d6e176df9af3d?rik=vkdA8LddOImMqA&pid=ImgRaw" height="200" width="400" />
      <p className="mt-4 text-xl">
        Find in-depth information about Next.js features and API.
      </p>
  </a>
)

export default function Home() {
  const properties = new Array(4)

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to{' '}
          <a className="text-blue-600" href="https://nextjs.org">
            EcoHolics!
          </a>
        </h1>

        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
          {new Array(4).fill(0).map(prop => <Property />)}
        </div>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" />
        </a>
      </footer>
    </div>
  )
}
