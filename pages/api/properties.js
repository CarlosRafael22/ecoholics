// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function propertiesAPI(req, res) {
  res.status(200).json([
    {
      name: 'La Casa Verde',
      image: 'https://th.bing.com/th/id/R.df35fd7c3e7b4d60720d6e176df9af3d?rik=vkdA8LddOImMqA&pid=ImgRaw',
      apartmentFilters: {
        sustainableWaterSources: true,
        gardenArea: false
      },
      areaFilters: {
        bikesStationNearby: true,
        publicTransportStationNearby: false
      },
      score: 5
    },
    {
      name: 'La Casa de Concrete',
      image: 'https://th.bing.com/th/id/R.df35fd7c3e7b4d60720d6e176df9af3d?rik=vkdA8LddOImMqA&pid=ImgRaw',
      apartmentFilters: {
        sustainableWaterSources: true,
        gardenArea: true
      },
      areaFilters: {
        bikesStationNearby: false,
        publicTransportStationNearby: true
      },
      score: 10
    }
  ])
}