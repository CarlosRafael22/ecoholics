import { CssBaseline, Grid, ThemeProvider, Typography } from '@material-ui/core'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import Header from '../components/Header'
import PropertyList from '../components/PropertyList'
import ApartmentFilters from '../components/ApartmentFilters'
import { greenTheme, lightTheme } from '../components/theme'

const APARTMENT_FILTER_OPTIONS = ['Sustainable Heating Source',
  'Water (Rain Water harvesting)',
  'Insulation',
  'Roof Solar system/Eco-friendly energy',
  'Recycling in property',
  'Waste separation',
  'Garden area',
  'Plastic free products',
  'Ecological cleaning products',
  'bicycle availability at the apartment',
  'Homegrown/Homemade products'
];

const AREA_FILTER_OPTIONS = [
  'Bikes stations nearby',
  'Bus/Metro Stations',
  'Scooter availability nearby',
  'If reachable only by plane',
  'Bio shop nearby',
  'Attractions in walking distance'
];

export async function getStaticProps() {
  const data = await fetch('http://localhost:3000/api/properties')
  const properties = await data.json()

  return {
    props: {
      properties: properties.result,
      greenProperties: properties.result.filter(p => p.eco_friendly)
    }
  }
}

const Home = ({ properties, greenProperties }) => {
  const [isGreenTheme, setIsGreenTheme] = useState(null);
  const toggleTheme = () => {
    setIsGreenTheme(!isGreenTheme);
  };

  useEffect(() => {
    setIsGreenTheme(false);
  }, []);

  return (
    <div>
      <Head>
        <title>EcoHolics</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <ThemeProvider theme={isGreenTheme ? greenTheme : lightTheme}>
          <CssBaseline />
          <Header isGreenTheme={isGreenTheme} toggleTheme={toggleTheme} />
          <Grid container>
            <Grid item md={3}>
              <ApartmentFilters label="Apartment filters" filters={APARTMENT_FILTER_OPTIONS} />
              <ApartmentFilters label="Area filters" filters={AREA_FILTER_OPTIONS} />

            </Grid>
            <Grid item md={9}>
              <PropertyList data={isGreenTheme ? greenProperties : properties} />
            </Grid>
          </Grid>
        </ThemeProvider>
      </main>
    </div>
  )
}

export default Home
