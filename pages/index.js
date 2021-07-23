import { Typography } from '@material-ui/core'
import Head from 'next/head'

const Property = ({name, image, score, ...filters }) => {

  return (
      <a
        href="https://nextjs.org/docs"
        className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
      >
        <div className="flex justify-between text-center mb-2">
          <h3 className="text-2xl font-bold">{name}</h3>
          <h6>{`Score ${score}/10`}</h6>
        </div>
        <img src="https://th.bing.com/th/id/R.df35fd7c3e7b4d60720d6e176df9af3d?rik=vkdA8LddOImMqA&pid=ImgRaw" height="200" width="400" />
        <p className="mt-4 text-xl">{filters.areaFilters.bikesStationNearby ? 'Bike station nearby' : 'No bike station nearby'}</p>
    </a>
  )
}

export async function getStaticProps() {
  const data = await fetch('http://localhost:3000/api/properties')
  const properties = await data.json()

  return {
    props: {
      properties
    }
  }
}

const Home = ({properties}) => {

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>EcoHolics</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <Typography variant="h6" color="primary">Holidu</Typography>

        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
          {properties?.map((property, index) => <Property key={index} {...property} />)}
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

export default Home
