// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const data = {
	"result":[
    {
		"id" : "01000",
		"Name" : "Summit Lodges Pfunds",
		"Description" : "In the Tyrolean Oberland lies the Austrian village Pfunds with the Summit Lodges in its center. Enjoy a relaxing time out between Swiss stone pine forests and alpine pastures with authentic farmhouses. The log cabins of the Summit Lodges spoil you with a convincing mixture of alpine cabin feeling and modern luxury. Relax in the spacious living rooms or during an extended stay in the in-house sauna.",
		"latitude" : 46.96748251194084,
		"longitude" : 10.544552011582045,
		"no_of_stars" : 4.5,
		"reference_price" : 229,
		"currency" : "EUR",
		"country" : "Austria",
		"street" : "Dorf 797",
		"city" : "Fam. Spiss",
		"postCode" : 12345,
		"pictures" : [{
			"url": "https://blankathibaud.com/wp-content/uploads/2021/06/green-homes-eco-friendly-sustainable-homes-FEATURED.jpg",
			"height": 200,
			"width" : 100 
		},
		{
			"url": "https://www.ellidavis.com/wp-content/uploads/2017/11/2017-11-01-1024x751.png",
			"height": 200,
			"width" : 100 
		}],
		"facility_list" : [{
			"pool" : true,
			"parking" : true,
			"garden" : true,
			"kitchen" : true,
			"fridge" : true,
			"jacuzzi" : true
		}],
		"eco_friendly" : false,
		"eco_friendly_score" : 3,
		"sust_facility_list" : [{
			"sustainable_heating_source" : {
				"review_from_guests" : 3,
				"supports" : [{
					"heat_pumps" : true,
					"infrared_panels" : false,
					"geothermal_energy" : true,
					"wood_stove" : true,
					"biomass" : false
				}]
			},
			"conserves_water" : {
				"review_from_guests" : 5,
				"list" : [{
					"water_saving_showers" : true,
					"water_saving_taps" : true,
					"water_saving_toilets" : true,
					"rainwater_treatment" : false
				}]
			},
			"insulation" : {
				"review_from_guests" : 1,
				"list" : [{
					"high_performance_glass" : false,
					"green_roof" : true,
					"roof_insulation" : false,
					"wall_insulation" : false,
					"floor_insulation" : false
				}]
			},
			"electricity" : {
				"review_from_guests" : 5,
				"list" : [{
					"led_lighting" : true,
					"solar_panels" : true,
					"green_energy" : true
				}]
			},
			"recycle" : {
				"review_from_guests" : 3.5,
				"list" : [{
					"waste_separation" : true,
					"organic_compost" : true,
					"plastic_free" : false,
					"ecological_cleaning_products" : true
				}]
			},
			"homegrown_products" : true
		}],
		"sust_amenity_nearby_list" : [{
			"bikes_stations" : [{
				"latitude" : 46.97467740692258,
				"longitude" : 10.545270401523618,
				"distance_from_property" : 700 
			},{
				"latitude" : 46.96659494695901,
				"longitude" : 10.538403947026525,
				"distance_from_property" : 600
			}],
			"bus_stop" : [{
				"latitude" : 46.97151485065885,
				"longitude" : 10.53754564021439,
				"name" : "Stuben Straße",
				"distance_from_property" : 800
			}],
			"metro_stop" : [{
				"latitude" : 46.97151485065885,
				"longitude" : 10.535657365227687,
				"name" : "Stuben Straße 293",
				"distance_from_property" : 1200
			}],
			"sustainable_shop":[{
				"latitude" : 46.96764925013471,
				"longitude" : 10.540807206100506,
				"name" : "Bio Shop",
				"distance_from_property" : 400
			},{
				"latitude" : 46.9683521073739, 
				"longitude" : 10.53239579934157,
				"name" : "Bio Shop",
				"distance_from_property" : 1200
			}],
			"walkable_attractions": []
		}]
	},{
		"id" : "01001",
		"Name" : "Gutshaus Stellshagen",
		"Description" : "A warm welcome awaits you in Gutshaus Stellshagen! A natural swimming pool, and the large park will make your holiday perfect!A charming and stylish building in a mellow landscape awaits you in Stellshagen, in northern Germany.The hotel itself is situated in Northwest Mecklenburg, atop a small rise, near the town of Klut, with the Baltic sea only 10 km away. It's located in the center of a wonderful large park where you can find cozy hidden corners with hosting hammocks or deck-chairs under the trees: just perfect for a afternoon of relax!",
		"latitude" : 53.946539939400346,
		"longitude" : 11.141562184737552,
		"no_of_stars" : 4.5,
		"reference_price" : 213,
		"currency" : "EUR",
		"country" : "Germany",
		"street" : "Lindenstraße. 1 - Stellshagen - 23948 Damshagen",
		"city" : "Nordwestmecklenburg",
		"postCode" : 123457,
		"pictures" : [{
			"url": "https://img.ecobnb.net/media/cache/wide_8/media/uploads/ff1130d25b751f4acc8195cb9586ec0586677144.jpeg",
			"height": 200,
			"width" : 100 
		},
		{
			"url": "https://img.ecobnb.net/media/cache/wide_8/media/uploads/10745db616aba59b08d2207636fcd2ddafa7068b.jpeg",
			"height": 200,
			"width" : 100 
		}],
		"facility_list" : [{
			"pool" : true,
			"parking" : true,
			"garden" : true,
			"kitchen" : true,
			"fridge" : true,
			"jacuzzi" : true
		}],
		"eco_friendly" : true,
		"eco_friendly_score" : 7,
		"sust_facility_list" : [{
			"sustainable_heating_source" : {
				"review_from_guests" : 4,
				"supports" : [{
					"heat_pumps" : true,
					"infrared_panels" : false,
					"geothermal_energy" : true,
					"wood_stove" : false,
					"biomass" : false
				}]
			},
			"conserves_water" : {
				"review_from_guests" : 4,
				"list" : [{
					"water_saving_showers" : true,
					"water_saving_taps" : false,
					"water_saving_toilets" : true,
					"rainwater_treatment" : false
				}]
			},
			"insulation" : {
				"review_from_guests" : 1,
				"list" : [{
					"high_performance_glass" : false,
					"green_roof" : true,
					"roof_insulation" : true,
					"wall_insulation" : false,
					"floor_insulation" : false
				}]
			},
			"electricity" : {
				"review_from_guests" : 3,
				"list" : [{
					"led_lighting" : true,
					"solar_panels" : false,
					"green_energy" : false
				}]
			},
			"recycle" : {
				"review_from_guests" : 3.5,
				"list" : [{
					"waste_separation" : true,
					"organic_compost" : true,
					"plastic_free" : false,
					"ecological_cleaning_products" : true
				}]
			},
			"homegrown_products" : true
		}],
		"sust_amenity_nearby_list" : [{
			"bikes_stations" : [{
				"latitude" : 53.94563582206529, 
				"longitude" : 11.142422268037244,
				"distance_from_property" : 100 
			}],
			"bus_stop" : [{
				"latitude" : 53.9472702815586, 
				"longitude" : 11.143676459079101,
				"name" : "LindenStraße",
				"distance_from_property" : 300
			}],
			"metro_stop" : [{
				"latitude" : 53.947832661412335,
				"longitude" :  11.144572309823287,
				"name" : "DamShagen",
				"distance_from_property" : 400
			}],
			"sustainable_shop":[{
				"latitude" : 53.94488008258169,
				"longitude" : 11.141078491920968,
				"name" : "All Things Green",
				"distance_from_property" : 300
			},{
				"latitude" : 53.94488008258169, 
				"longitude" : 11.141078491920968,
				"name" : "Bio Shop",
				"distance_from_property" : 300
			}],
			"walkable_attractions": []
		}]
	},{
		"id" : "01002",
		"Name" : "Kremna housholding Ivanovic",
		"Description" : "Kremna is the place in the eponymous valley that separates the two famous mountains in Western Serbia, Zlatibor and Tara. Kremna belongs to the municipality of Uzice. The village because of its natural beauty, rich tradition and hospitable hosts, attracts large numbers of tourists, and is one of the villages that can be said to have ideal conditions for the development of rural tourism. Height Kremna is between 750 and 850 m. This perfect climate regarding adding flower meadows, mountain slopes conifer trees, clear springs and mountain streams that defined Kremna at the beginning of the twentieth century declared the air banjom. After World War here has gone through railway and Sarganska massif is overcome Technical solutions Šargan. The greatest popularity has made the famous cream-Tarabica prophecy recorded by the priest Zacharias Zaharic. Kremna today consists of about 800 households with about 2 500 inhabitants. ",
		"latitude" : 43.84837655865065, 
		"longitude" : 19.581899157505184,
		"no_of_stars" : 4.9,
		"reference_price" : 300,
		"currency" : "EUR",
		"country" : "Serbia",
		"street" : "31242 Kremna - Zlatibor District",
		"city" : "Kremna",
		"postCode" : 123457,
		"pictures" : [{
			"url": "https://img.ecobnb.net/media/cache/wide_8/media/uploads/55b3984c68925ee545d4804092805df946873635.jpeg",
			"height": 200,
			"width" : 100 
		},
		{
			"url": "https://img.ecobnb.net/media/cache/wide_8/media/uploads/4103d07ff8010b763bb743683bbcf3ca092d3051.jpeg",
			"height": 200,
			"width" : 100 
		},
		{
			"url": "https://img.ecobnb.net/media/cache/wide_8/media/uploads/44557d11e7e09163ecd3e4c7562287bb1eda82b2.jpeg",
			"height": 200,
			"width" : 100 
		}],
		"facility_list" : [{
			"pool" : false,
			"parking" : true,
			"garden" : true,
			"kitchen" : true,
			"fridge" : true,
			"jacuzzi" : false
		}],
		"eco_friendly" : true,
		"eco_friendly_score" : 8.6,
		"sust_facility_list" : [{
			"sustainable_heating_source" : {
				"review_from_guests" : 5,
				"supports" : [{
					"heat_pumps" : true,
					"infrared_panels" : false,
					"geothermal_energy" : true,
					"wood_stove" : false,
					"biomass" : false
				}]
			},
			"conserves_water" : {
				"review_from_guests" : 4,
				"list" : [{
					"water_saving_showers" : true,
					"water_saving_taps" : false,
					"water_saving_toilets" : true,
					"rainwater_treatment" : false
				}]
			},
			"insulation" : {
				"review_from_guests" : 2,
				"list" : [{
					"high_performance_glass" : false,
					"green_roof" : true,
					"roof_insulation" : false,
					"wall_insulation" : false,
					"floor_insulation" : false
				}]
			},
			"electricity" : {
				"review_from_guests" : 4,
				"list" : [{
					"led_lighting" : true,
					"solar_panels" : false,
					"green_energy" : true
				}]
			},
			"recycle" : {
				"review_from_guests" : 5,
				"list" : [{
					"waste_separation" : true,
					"organic_compost" : true,
					"plastic_free" : true,
					"ecological_cleaning_products" : true
				}]
			},
			"homegrown_products" : true
		}],
		"sust_amenity_nearby_list" : [{
			"bikes_stations" : [{
				"latitude" : 43.852461752398995,
				"longitude" : 19.577264300719648,
				"distance_from_property" : 300 
			}],
			"bus_stop" : [{
				"latitude" : 43.86360176768668,
				"longitude" : 19.577264300719648,
				"name" : "Route 170",
				"distance_from_property" : 1800
			}],
			"metro_stop" : [{
				"latitude" : 43.86360176768668,
				"longitude" :  19.577264300719648,
				"name" : "Route 170",
				"distance_from_property" : 1800
			}],
			"sustainable_shop":[{
				"latitude" : 43.84998591080304,
				"longitude" : 19.5800108825184838,
				"name" : "KremnaGreen",
				"distance_from_property" : 200
			}],
			"walkable_attractions": []
		}]
	},{
		"id" : "01003",
		"Name" : "Kremna housholding Ivanovic",
		"Description" : "Kremna is the place in the eponymous valley that separates the two famous mountains in Western Serbia, Zlatibor and Tara. Kremna belongs to the municipality of Uzice. The village because of its natural beauty, rich tradition and hospitable hosts, attracts large numbers of tourists, and is one of the villages that can be said to have ideal conditions for the development of rural tourism. Height Kremna is between 750 and 850 m. This perfect climate regarding adding flower meadows, mountain slopes conifer trees, clear springs and mountain streams that defined Kremna at the beginning of the twentieth century declared the air banjom. After World War here has gone through railway and Sarganska massif is overcome Technical solutions Šargan. The greatest popularity has made the famous cream-Tarabica prophecy recorded by the priest Zacharias Zaharic. Kremna today consists of about 800 households with about 2 500 inhabitants. ",
		"latitude" : 43.84837655865065, 
		"longitude" : 19.581899157505184,
		"no_of_stars" : 4.9,
		"reference_price" : 300,
		"currency" : "EUR",
		"country" : "Serbia",
		"street" : "31242 Kremna - Zlatibor District",
		"city" : "Kremna",
		"postCode" : 123457,
		"pictures" : [{
			"url": "https://img.ecobnb.net/media/cache/wide_8/media/uploads/55b3984c68925ee545d4804092805df946873635.jpeg",
			"height": 200,
			"width" : 100 
		},
		{
			"url": "https://img.ecobnb.net/media/cache/wide_8/media/uploads/4103d07ff8010b763bb743683bbcf3ca092d3051.jpeg",
			"height": 200,
			"width" : 100 
		},
		{
			"url": "https://img.ecobnb.net/media/cache/wide_8/media/uploads/44557d11e7e09163ecd3e4c7562287bb1eda82b2.jpeg",
			"height": 200,
			"width" : 100 
		}],
		"facility_list" : [{
			"pool" : false,
			"parking" : true,
			"garden" : true,
			"kitchen" : true,
			"fridge" : true,
			"jacuzzi" : false
		}],
		"eco_friendly" : true,
		"eco_friendly_score" : 8.6,
		"sust_facility_list" : [{
			"sustainable_heating_source" : {
				"review_from_guests" : 5,
				"supports" : [{
					"heat_pumps" : true,
					"infrared_panels" : false,
					"geothermal_energy" : true,
					"wood_stove" : false,
					"biomass" : false
				}]
			},
			"conserves_water" : {
				"review_from_guests" : 4,
				"list" : [{
					"water_saving_showers" : true,
					"water_saving_taps" : false,
					"water_saving_toilets" : true,
					"rainwater_treatment" : false
				}]
			},
			"insulation" : {
				"review_from_guests" : 4,
				"list" : [{
					"high_performance_glass" : false,
					"green_roof" : true,
					"roof_insulation" : false,
					"wall_insulation" : true,
					"floor_insulation" : true
				}]
			},
			"electricity" : {
				"review_from_guests" : 4,
				"list" : [{
					"led_lighting" : true,
					"solar_panels" : false,
					"green_energy" : true
				}]
			},
			"recycle" : {
				"review_from_guests" : 3,
				"list" : [{
					"waste_separation" : false,
					"organic_compost" : false,
					"plastic_free" : true,
					"ecological_cleaning_products" : true
				}]
			},
			"homegrown_products" : true
		}],
		"sust_amenity_nearby_list" : [{
			"bikes_stations" : [{
				"latitude" : 43.852461752398995,
				"longitude" : 19.577264300719648,
				"distance_from_property" : 300 
			}],
			"bus_stop" : [{
				"latitude" : 43.86360176768668,
				"longitude" : 19.577264300719648,
				"name" : "Route 170",
				"distance_from_property" : 1800
			}],
			"metro_stop" : [{
				"latitude" : 43.86360176768668,
				"longitude" :  19.577264300719648,
				"name" : "Route 170",
				"distance_from_property" : 1800
			}],
			"sustainable_shop":[{
				"latitude" : 43.84998591080304,
				"longitude" : 19.5800108825184838,
				"name" : "KremnaGreen",
				"distance_from_property" : 200
			}],
			"walkable_attractions": []
		}]
	},
  {
		"id" : "123123",
		"Name" : "Bela Vista",
		"Description" : "In the Tyrolean Oberland lies the Austrian village Pfunds with the Summit Lodges in its center. Enjoy a relaxing time out between Swiss stone pine forests and alpine pastures with authentic farmhouses. The log cabins of the Summit Lodges spoil you with a convincing mixture of alpine cabin feeling and modern luxury. Relax in the spacious living rooms or during an extended stay in the in-house sauna.",
		"latitude" : 46.96748251194084,
		"longitude" : 10.544552011582045,
		"no_of_stars" : 4.5,
		"reference_price" : 229,
		"currency" : "EUR",
		"country" : "Austria",
		"street" : "Dorf 797",
		"city" : "Hunn",
		"postCode" : 12345,
		"pictures" : [{
			"url": "https://blankathibaud.com/wp-content/uploads/2021/06/green-homes-eco-friendly-sustainable-homes-FEATURED.jpg",
			"height": 200,
			"width" : 100 
		},
		{
			"url": "https://www.ellidavis.com/wp-content/uploads/2017/11/2017-11-01-1024x751.png",
			"height": 200,
			"width" : 100 
		}],
		"facility_list" : [{
			"pool" : true,
			"parking" : true,
			"garden" : true,
			"kitchen" : true,
			"fridge" : true,
			"jacuzzi" : true
		}],
		"eco_friendly" : false,
		"eco_friendly_score" : 5,
		"sust_facility_list" : [{
			"sustainable_heating_source" : {
				"review_from_guests" : 3,
				"supports" : [{
					"heat_pumps" : true,
					"infrared_panels" : false,
					"geothermal_energy" : true,
					"wood_stove" : true,
					"biomass" : false
				}]
			},
			"conserves_water" : {
				"review_from_guests" : 5,
				"list" : [{
					"water_saving_showers" : true,
					"water_saving_taps" : true,
					"water_saving_toilets" : true,
					"rainwater_treatment" : false
				}]
			},
			"insulation" : {
				"review_from_guests" : 1,
				"list" : [{
					"high_performance_glass" : false,
					"green_roof" : true,
					"roof_insulation" : false,
					"wall_insulation" : false,
					"floor_insulation" : false
				}]
			},
			"electricity" : {
				"review_from_guests" : 5,
				"list" : [{
					"led_lighting" : true,
					"solar_panels" : true,
					"green_energy" : true
				}]
			},
			"recycle" : {
				"review_from_guests" : 3.5,
				"list" : [{
					"waste_separation" : true,
					"organic_compost" : true,
					"plastic_free" : false,
					"ecological_cleaning_products" : true
				}]
			},
			"homegrown_products" : true
		}],
		"sust_amenity_nearby_list" : [{
			"bikes_stations" : [{
				"latitude" : 46.97467740692258,
				"longitude" : 10.545270401523618,
				"distance_from_property" : 700 
			},{
				"latitude" : 46.96659494695901,
				"longitude" : 10.538403947026525,
				"distance_from_property" : 600
			}],
			"bus_stop" : [{
				"latitude" : 46.97151485065885,
				"longitude" : 10.53754564021439,
				"name" : "Stuben Straße",
				"distance_from_property" : 800
			}],
			"metro_stop" : [{
				"latitude" : 46.97151485065885,
				"longitude" : 10.535657365227687,
				"name" : "Stuben Straße 293",
				"distance_from_property" : 1200
			}],
			"sustainable_shop":[{
				"latitude" : 46.96764925013471,
				"longitude" : 10.540807206100506,
				"name" : "Bio Shop",
				"distance_from_property" : 400
			},{
				"latitude" : 46.9683521073739, 
				"longitude" : 10.53239579934157,
				"name" : "Bio Shop",
				"distance_from_property" : 1200
			}],
			"walkable_attractions": []
		}]
	}]
};

export default function propertiesAPI(req, res) {
  res.status(200).json(data);
};
