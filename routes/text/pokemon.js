module.exports = {
    path: '/text/pokemon',
    code: `
$send[200;json;{
error: false,
data: [
	{
		"id": 1,
		"name": "Bulbasaur",
		"isNfe": true,
		"types": [
			"grass",
			"poison"
		]
	},
	{
		"id": 2,
		"name": "Ivysaur",
		"isNfe": true,
		"types": [
			"grass",
			"poison"
		]
	},
	{
		"id": 3,
		"name": "Venusaur",
		"types": [
			"grass",
			"poison"
		],
		"forms": [
			{
				"name": "Venusaur",
				"types": [
					"grass",
					"poison"
				]
			},
			{
				"name": "Venusaur Mega",
				"types": [
					"grass",
					"poison"
				],
				"spriteSuffix": "mega",
				"isMega": true
			},
			{
				"name": "Venusaur Gigantamax",
				"types": [
					"grass",
					"poison"
				],
				"spriteSuffix": "gigantamax",
				"isGigantamax": true
			}
		]
	},
	{
		"id": 4,
		"name": "Charmander",
		"isNfe": true,
		"types": [
			"fire"
		]
	},
	{
		"id": 5,
		"name": "Charmeleon",
		"isNfe": true,
		"types": [
			"fire"
		]
	},
	{
		"id": 6,
		"name": "Charizard",
		"types": [
			"fire",
			"flying"
		],
		"forms": [
			{
				"name": "Charizard",
				"types": [
					"fire",
					"flying"
				]
			},
			{
				"name": "Charizard Mega X",
				"types": [
					"fire",
					"dragon"
				],
				"spriteSuffix": "mega-x",
				"isMega": true
			},
			{
				"name": "Charizard Mega Y",
				"types": [
					"fire",
					"flying"
				],
				"spriteSuffix": "mega-y",
				"isMega": true
			},
			{
				"name": "Charizard Gigantamax",
				"types": [
					"fire",
					"flying"
				],
				"spriteSuffix": "gigantamax",
				"isGigantamax": true
			}
		]
	},
	{
		"id": 7,
		"name": "Squirtle",
		"isNfe": true,
		"types": [
			"water"
		]
	},
	{
		"id": 8,
		"name": "Wartortle",
		"isNfe": true,
		"types": [
			"water"
		]
	},
	{
		"id": 9,
		"name": "Blastoise",
		"types": [
			"water"
		],
		"forms": [
			{
				"name": "Blastoise",
				"types": [
					"water"
				]
			},
			{
				"name": "Blastoise Mega",
				"types": [
					"water"
				],
				"spriteSuffix": "mega",
				"isMega": true
			},
			{
				"name": "Blastoise Gigantamax",
				"types": [
					"water"
				],
				"spriteSuffix": "gigantamax",
				"isGigantamax": true
			}
		]
	},
	{
		"id": 10,
		"name": "Caterpie",
		"isNfe": true,
		"types": [
			"bug"
		]
	},
	{
		"id": 11,
		"name": "Metapod",
		"isNfe": true,
		"types": [
			"bug"
		]
	},
	{
		"id": 12,
		"name": "Butterfree",
		"types": [
			"bug",
			"flying"
		],
		"forms": [
			{
				"name": "Butterfree",
				"types": [
					"bug",
					"flying"
				]
			},
			{
				"name": "Butterfree Gigantamax",
				"types": [
					"bug",
					"flying"
				],
				"spriteSuffix": "gigantamax",
				"isGigantamax": true
			}
		]
	},
	{
		"id": 13,
		"name": "Weedle",
		"isNfe": true,
		"types": [
			"bug",
			"poison"
		]
	},
	{
		"id": 14,
		"name": "Kakuna",
		"isNfe": true,
		"types": [
			"bug",
			"poison"
		]
	},
	{
		"id": 15,
		"name": "Beedrill",
		"types": [
			"bug",
			"poison"
		],
		"forms": [
			{
				"name": "Beedrill",
				"types": [
					"bug",
					"poison"
				]
			},
			{
				"name": "Beedrill Mega",
				"types": [
					"bug",
					"poison"
				],
				"spriteSuffix": "mega",
				"isMega": true
			}
		]
	},
	{
		"id": 16,
		"name": "Pidgey",
		"isNfe": true,
		"types": [
			"normal",
			"flying"
		]
	},
	{
		"id": 17,
		"name": "Pidgeotto",
		"isNfe": true,
		"types": [
			"normal",
			"flying"
		]
	},
	{
		"id": 18,
		"name": "Pidgeot",
		"types": [
			"normal",
			"flying"
		],
		"forms": [
			{
				"name": "Pidgeot",
				"types": [
					"normal",
					"flying"
				]
			},
			{
				"name": "Pidgeot Mega",
				"types": [
					"normal",
					"flying"
				],
				"spriteSuffix": "mega",
				"isMega": true
			}
		]
	},
	{
		"id": 19,
		"name": "Rattata",
		"isNfe": true,
		"types": [
			"normal"
		],
		"forms": [
			{
				"name": "Rattata",
				"isNfe": true,
				"types": [
					"normal"
				]
			},
			{
				"name": "Rattata Alola",
				"isNfe": true,
				"types": [
					"dark",
					"normal"
				],
				"spriteSuffix": "alola"
			}
		]
	},
	{
		"id": 20,
		"name": "Raticate",
		"types": [
			"normal"
		],
		"forms": [
			{
				"name": "Raticate",
				"types": [
					"normal"
				]
			},
			{
				"name": "Raticate Alola",
				"types": [
					"dark",
					"normal"
				],
				"spriteSuffix": "alola"
			}
		]
	},
	{
		"id": 21,
		"name": "Spearow",
		"isNfe": true,
		"types": [
			"normal",
			"flying"
		]
	},
	{
		"id": 22,
		"name": "Fearow",
		"types": [
			"normal",
			"flying"
		]
	},
	{
		"id": 23,
		"name": "Ekans",
		"isNfe": true,
		"types": [
			"poison"
		]
	},
	{
		"id": 24,
		"name": "Arbok",
		"types": [
			"poison"
		]
	},
	{
		"id": 25,
		"name": "Pikachu",
		"isNfe": true,
		"types": [
			"electric"
		],
		"forms": [
			{
				"name": "Pikachu",
				"isNfe": true,
				"types": [
					"electric"
				]
			},
			{
				"name": "Pikachu",
				"isNfe": true,
				"types": [
					"electric"
				],
				"spriteSuffix": "hat"
			},
			{
				"name": "Pikachu Gigantamax",
				"isNfe": true,
				"types": [
					"electric"
				],
				"spriteSuffix": "gigantamax",
				"isGigantamax": true
			}
		]
	},
	{
		"id": 26,
		"name": "Raichu",
		"types": [
			"electric"
		],
		"forms": [
			{
				"name": "Raichu",
				"types": [
					"electric"
				]
			},
			{
				"name": "Raichu Alola",
				"types": [
					"electric",
					"psychic"
				],
				"spriteSuffix": "alola"
			}
		]
	},
	{
		"id": 27,
		"name": "Sandshrew",
		"isNfe": true,
		"types": [
			"ground"
		],
		"forms": [
			{
				"name": "Sandshrew",
				"isNfe": true,
				"types": [
					"ground"
				]
			},
			{
				"name": "Sandshrew Alola",
				"isNfe": true,
				"types": [
					"ice",
					"steel"
				],
				"spriteSuffix": "alola"
			}
		]
	},
	{
		"id": 28,
		"name": "Sandslash",
		"types": [
			"ground"
		],
		"forms": [
			{
				"name": "Sandslash",
				"types": [
					"ground"
				]
			},
			{
				"name": "Sandslash Alola",
				"types": [
					"ice",
					"steel"
				],
				"spriteSuffix": "alola"
			}
		]
	},
	{
		"id": 29,
		"name": "Nidoran \u2640",
		"isNfe": true,
		"types": [
			"poison"
		]
	},
	{
		"id": 30,
		"name": "Nidorina",
		"isNfe": true,
		"types": [
			"poison"
		]
	},
	{
		"id": 31,
		"name": "Nidoqueen",
		"types": [
			"poison",
			"ground"
		]
	},
	{
		"id": 32,
		"name": "Nidoran \u2642",
		"isNfe": true,
		"types": [
			"poison"
		]
	},
	{
		"id": 33,
		"name": "Nidorino",
		"isNfe": true,
		"types": [
			"poison"
		]
	},
	{
		"id": 34,
		"name": "Nidoking",
		"types": [
			"poison",
			"ground"
		]
	},
	{
		"id": 35,
		"name": "Clefairy",
		"isNfe": true,
		"types": [
			"fairy"
		]
	},
	{
		"id": 36,
		"name": "Clefable",
		"types": [
			"fairy"
		]
	},
	{
		"id": 37,
		"name": "Vulpix",
		"isNfe": true,
		"types": [
			"fire"
		],
		"forms": [
			{
				"name": "Vulpix",
				"isNfe": true,
				"types": [
					"fire"
				]
			},
			{
				"name": "Vulpix Alola",
				"isNfe": true,
				"types": [
					"ice"
				],
				"spriteSuffix": "alola"
			}
		]
	},
	{
		"id": 38,
		"name": "Ninetales",
		"types": [
			"fire"
		],
		"forms": [
			{
				"name": "Ninetales",
				"types": [
					"fire"
				]
			},
			{
				"name": "Ninetales Alola",
				"types": [
					"ice",
					"fairy"
				],
				"spriteSuffix": "alola"
			}
		]
	},
	{
		"id": 39,
		"name": "Jigglypuff",
		"isNfe": true,
		"types": [
			"normal",
			"fairy"
		]
	},
	{
		"id": 40,
		"name": "Wigglytuff",
		"types": [
			"normal",
			"fairy"
		]
	},
	{
		"id": 41,
		"name": "Zubat",
		"isNfe": true,
		"types": [
			"poison",
			"flying"
		]
	},
	{
		"id": 42,
		"name": "Golbat",
		"isNfe": true,
		"types": [
			"poison",
			"flying"
		]
	},
	{
		"id": 43,
		"name": "Oddish",
		"isNfe": true,
		"types": [
			"grass",
			"poison"
		]
	},
	{
		"id": 44,
		"name": "Gloom",
		"isNfe": true,
		"types": [
			"grass",
			"poison"
		]
	},
	{
		"id": 45,
		"name": "Vileplume",
		"types": [
			"grass",
			"poison"
		]
	},
	{
		"id": 46,
		"name": "Paras",
		"isNfe": true,
		"types": [
			"bug",
			"grass"
		]
	},
	{
		"id": 47,
		"name": "Parasect",
		"types": [
			"bug",
			"grass"
		]
	},
	{
		"id": 48,
		"name": "Venonat",
		"isNfe": true,
		"types": [
			"bug",
			"poison"
		]
	},
	{
		"id": 49,
		"name": "Venomoth",
		"types": [
			"bug",
			"poison"
		]
	},
	{
		"id": 50,
		"name": "Diglett",
		"isNfe": true,
		"types": [
			"ground"
		],
		"forms": [
			{
				"name": "Diglett",
				"isNfe": true,
				"types": [
					"ground"
				]
			},
			{
				"name": "Diglett Alola",
				"isNfe": true,
				"types": [
					"ground",
					"steel"
				],
				"spriteSuffix": "alola"
			}
		]
	},
	{
		"id": 51,
		"name": "Dugtrio",
		"types": [
			"ground"
		],
		"forms": [
			{
				"name": "Dugtrio",
				"types": [
					"ground"
				]
			},
			{
				"name": "Dugtrio Alola",
				"types": [
					"ground",
					"steel"
				],
				"spriteSuffix": "alola"
			}
		]
	},
	{
		"id": 52,
		"name": "Meowth",
		"isNfe": true,
		"types": [
			"normal"
		],
		"forms": [
			{
				"name": "Meowth",
				"isNfe": true,
				"types": [
					"normal"
				]
			},
			{
				"name": "Meowth Alola",
				"isNfe": true,
				"types": [
					"dark"
				],
				"spriteSuffix": "alola"
			},
			{
				"name": "Meowth Galar",
				"isNfe": true,
				"types": [
					"steel"
				],
				"spriteSuffix": "galar"
			},
			{
				"name": "Meowth Gigantamax",
				"isNfe": true,
				"types": [
					"normal"
				],
				"spriteSuffix": "gigantamax",
				"isGigantamax": true
			}
		]
	},
	{
		"id": 53,
		"name": "Persian",
		"types": [
			"normal"
		],
		"forms": [
			{
				"name": "Persian",
				"types": [
					"normal"
				]
			},
			{
				"name": "Persian Alola",
				"types": [
					"dark"
				],
				"spriteSuffix": "alola"
			}
		]
	},
	{
		"id": 54,
		"name": "Psyduck",
		"isNfe": true,
		"types": [
			"water"
		]
	},
	{
		"id": 55,
		"name": "Golduck",
		"types": [
			"water"
		]
	},
	{
		"id": 56,
		"name": "Mankey",
		"isNfe": true,
		"types": [
			"fighting"
		]
	},
	{
		"id": 57,
		"name": "Primeape",
		"types": [
			"fighting"
		]
	},
	{
		"id": 58,
		"name": "Growlithe",
		"isNfe": true,
		"types": [
			"fire"
		],
		"forms": [
			{
				"name": "Growlithe",
				"types": [
					"fire"
				],
				"isNfe": true
			},
			{
				"name": "Growlithe Hisui",
				"types": [
					"fire",
					"rock"
				],
				"isNfe": true,
				"spriteSuffix": "hisui"
			}
		]
	},
	{
		"id": 59,
		"name": "Arcanine",
		"types": [
			"fire"
		],
		"forms": [
			{
				"name": "Arcanine",
				"types": [
					"fire"
				]
			},
			{
				"name": "Arcanine Hisui",
				"types": [
					"fire",
					"rock"
				],
				"spriteSuffix": "hisui"
			}
		]
	},
	{
		"id": 60,
		"name": "Poliwag",
		"isNfe": true,
		"types": [
			"water"
		]
	},
	{
		"id": 61,
		"name": "Poliwhirl",
		"isNfe": true,
		"types": [
			"water"
		]
	},
	{
		"id": 62,
		"name": "Poliwrath",
		"types": [
			"water",
			"fighting"
		]
	},
	{
		"id": 63,
		"name": "Abra",
		"isNfe": true,
		"types": [
			"psychic"
		]
	},
	{
		"id": 64,
		"name": "Kadabra",
		"isNfe": true,
		"types": [
			"psychic"
		]
	},
	{
		"id": 65,
		"name": "Alakazam",
		"types": [
			"psychic"
		],
		"forms": [
			{
				"name": "Alakazam",
				"types": [
					"psychic"
				]
			},
			{
				"name": "Alakazam Mega",
				"types": [
					"psychic"
				],
				"spriteSuffix": "mega",
				"isMega": true
			}
		]
	},
	{
		"id": 66,
		"name": "Machop",
		"isNfe": true,
		"types": [
			"fighting"
		]
	},
	{
		"id": 67,
		"name": "Machoke",
		"isNfe": true,
		"types": [
			"fighting"
		]
	},
	{
		"id": 68,
		"name": "Machamp",
		"types": [
			"fighting"
		],
		"forms": [
			{
				"name": "Machamp",
				"types": [
					"fighting"
				]
			},
			{
				"name": "Machamp Gigantamax",
				"types": [
					"fighting"
				],
				"spriteSuffix": "gigantamax",
				"isGigantamax": true
			}
		]
	},
	{
		"id": 69,
		"name": "Bellsprout",
		"isNfe": true,
		"types": [
			"grass",
			"poison"
		]
	},
	{
		"id": 70,
		"name": "Weepinbell",
		"isNfe": true,
		"types": [
			"grass",
			"poison"
		]
	},
	{
		"id": 71,
		"name": "Victreebel",
		"types": [
			"grass",
			"poison"
		]
	},
	{
		"id": 72,
		"name": "Tentacool",
		"isNfe": true,
		"types": [
			"water",
			"poison"
		]
	},
	{
		"id": 73,
		"name": "Tentacruel",
		"types": [
			"water",
			"poison"
		]
	},
	{
		"id": 74,
		"name": "Geodude",
		"isNfe": true,
		"types": [
			"rock",
			"ground"
		],
		"forms": [
			{
				"name": "Geodude",
				"isNfe": true,
				"types": [
					"rock",
					"ground"
				]
			},
			{
				"name": "Geodude Alola",
				"isNfe": true,
				"types": [
					"rock",
					"electric"
				],
				"spriteSuffix": "alola"
			}
		]
	},
	{
		"id": 75,
		"name": "Graveler",
		"isNfe": true,
		"types": [
			"rock",
			"ground"
		],
		"forms": [
			{
				"name": "Graveler",
				"isNfe": true,
				"types": [
					"rock",
					"ground"
				]
			},
			{
				"name": "Graveler Alola",
				"isNfe": true,
				"types": [
					"rock",
					"electric"
				],
				"spriteSuffix": "alola"
			}
		]
	},
	{
		"id": 76,
		"name": "Golem",
		"types": [
			"rock",
			"ground"
		],
		"forms": [
			{
				"name": "Golem",
				"types": [
					"rock",
					"ground"
				]
			},
			{
				"name": "Golem Alola",
				"types": [
					"rock",
					"electric"
				],
				"spriteSuffix": "alola"
			}
		]
	},
	{
		"id": 77,
		"name": "Ponyta",
		"isNfe": true,
		"types": [
			"fire"
		],
		"forms": [
			{
				"name": "Ponyta",
				"isNfe": true,
				"types": [
					"fire"
				]
			},
			{
				"name": "Ponyta Galar",
				"isNfe": true,
				"types": [
					"psychic"
				],
				"spriteSuffix": "galar"
			}
		]
	},
	{
		"id": 78,
		"name": "Rapidash",
		"types": [
			"fire"
		],
		"forms": [
			{
				"name": "Rapidash",
				"types": [
					"fire"
				]
			},
			{
				"name": "Rapidash Galar",
				"types": [
					"psychic",
					"fairy"
				],
				"spriteSuffix": "galar"
			}
		]
	},
	{
		"id": 79,
		"name": "Slowpoke",
		"isNfe": true,
		"types": [
			"water",
			"psychic"
		],
		"forms": [
			{
				"name": "Slowpoke",
				"types": [
					"water",
					"psychic"
				],
				"isNfe": true
			},
			{
				"name": "Slowpoke Galar",
				"types": [
					"water",
					"psychic"
				],
				"spriteSuffix": "galar",
				"isNfe": true
			}
		]
	},
	{
		"id": 80,
		"name": "Slowbro",
		"types": [
			"water",
			"psychic"
		],
		"forms": [
			{
				"name": "Slowbro",
				"types": [
					"water",
					"psychic"
				]
			},
			{
				"name": "Slowbro Mega",
				"types": [
					"water",
					"psychic"
				],
				"spriteSuffix": "mega",
				"isMega": true
			},
			{
				"name": "Slowbro Galar",
				"types": [
					"water",
					"psychic"
				],
				"spriteSuffix": "galar"
			}
		]
	},
	{
		"id": 81,
		"name": "Magnemite",
		"isNfe": true,
		"types": [
			"electric",
			"steel"
		]
	},
	{
		"id": 82,
		"name": "Magneton",
		"isNfe": true,
		"types": [
			"electric",
			"steel"
		]
	},
	{
		"id": 83,
		"name": "Farfetch'd",
		"types": [
			"normal",
			"flying"
		],
		"forms": [
			{
				"name": "Farfetch'd",
				"types": [
					"normal",
					"flying"
				]
			},
			{
				"name": "Farfetch'd Galar",
				"isNfe": true,
				"types": [
					"fighting"
				],
				"spriteSuffix": "galar"
			}
		]
	},
	{
		"id": 84,
		"name": "Doduo",
		"isNfe": true,
		"types": [
			"normal",
			"flying"
		]
	},
	{
		"id": 85,
		"name": "Dodrio",
		"types": [
			"normal",
			"flying"
		]
	},
	{
		"id": 86,
		"name": "Seel",
		"isNfe": true,
		"types": [
			"water"
		]
	},
	{
		"id": 87,
		"name": "Dewgong",
		"types": [
			"water",
			"ice"
		]
	},
	{
		"id": 88,
		"name": "Grimer",
		"isNfe": true,
		"types": [
			"poison"
		],
		"forms": [
			{
				"name": "Grimer",
				"isNfe": true,
				"types": [
					"poison"
				]
			},
			{
				"name": "Grimer Alola",
				"isNfe": true,
				"types": [
					"poison",
					"dark"
				],
				"spriteSuffix": "alola"
			}
		]
	},
	{
		"id": 89,
		"name": "Muk",
		"types": [
			"poison"
		],
		"forms": [
			{
				"name": "Muk",
				"types": [
					"poison"
				]
			},
			{
				"name": "Muk Alola",
				"types": [
					"poison",
					"dark"
				],
				"spriteSuffix": "alola"
			}
		]
	},
	{
		"id": 90,
		"name": "Shellder",
		"isNfe": true,
		"types": [
			"water"
		]
	},
	{
		"id": 91,
		"name": "Cloyster",
		"types": [
			"water",
			"ice"
		]
	},
	{
		"id": 92,
		"name": "Gastly",
		"isNfe": true,
		"types": [
			"ghost",
			"poison"
		]
	},
	{
		"id": 93,
		"name": "Haunter",
		"isNfe": true,
		"types": [
			"ghost",
			"poison"
		]
	},
	{
		"id": 94,
		"name": "Gengar",
		"types": [
			"ghost",
			"poison"
		],
		"forms": [
			{
				"name": "Gengar",
				"types": [
					"ghost",
					"poison"
				]
			},
			{
				"name": "Gengar Mega",
				"types": [
					"ghost",
					"poison"
				],
				"spriteSuffix": "mega",
				"isMega": true
			},
			{
				"name": "Gengar Gigantamax",
				"types": [
					"ghost",
					"poison"
				],
				"spriteSuffix": "gigantamax",
				"isGigantamax": true
			}
		]
	},
	{
		"id": 95,
		"name": "Onix",
		"isNfe": true,
		"types": [
			"rock",
			"ground"
		]
	},
	{
		"id": 96,
		"name": "Drowzee",
		"isNfe": true,
		"types": [
			"psychic"
		]
	},
	{
		"id": 97,
		"name": "Hypno",
		"types": [
			"psychic"
		]
	},
	{
		"id": 98,
		"name": "Krabby",
		"isNfe": true,
		"types": [
			"water"
		]
	},
	{
		"id": 99,
		"name": "Kingler",
		"types": [
			"water"
		],
		"forms": [
			{
				"name": "Kingler",
				"types": [
					"water"
				]
			},
			{
				"name": "Kingler Gigantamax",
				"types": [
					"water"
				],
				"spriteSuffix": "gigantamax",
				"isGigantamax": true
			}
		]
	},
	{
		"id": 100,
		"name": "Voltorb",
		"isNfe": true,
		"types": [
			"electric"
		],
		"forms": [
			{
				"name": "Voltorb",
				"types": [
					"electric"
				],
				"isNfe": true
			},
			{
				"name": "Voltorb Hisui",
				"types": [
					"electric",
					"grass"
				],
				"isNfe": true,
				"spriteSuffix": "hisui"
			}
		]
	},
	{
		"id": 101,
		"name": "Electrode",
		"types": [
			"electric"
		],
		"forms": [
			{
				"name": "Electrode",
				"types": [
					"electric"
				]
			},
			{
				"name": "Electrode Hisui",
				"types": [
					"electric",
					"grass"
				],
				"spriteSuffix": "hisui"
			}
		]
	},
	{
		"id": 102,
		"name": "Exeggcute",
		"isNfe": true,
		"types": [
			"grass",
			"psychic"
		]
	},
	{
		"id": 103,
		"name": "Exeggutor",
		"types": [
			"grass",
			"psychic"
		],
		"forms": [
			{
				"name": "Exeggutor",
				"types": [
					"grass",
					"psychic"
				]
			},
			{
				"name": "Exeggutor Alola",
				"types": [
					"grass",
					"dragon"
				],
				"spriteSuffix": "alola"
			}
		]
	},
	{
		"id": 104,
		"name": "Cubone",
		"isNfe": true,
		"types": [
			"ground"
		]
	},
	{
		"id": 105,
		"name": "Marowak",
		"types": [
			"ground"
		],
		"forms": [
			{
				"name": "Marowak",
				"types": [
					"ground"
				]
			},
			{
				"name": "Marowak Alola",
				"types": [
					"fire",
					"ghost"
				],
				"spriteSuffix": "alola"
			}
		]
	},
	{
		"id": 106,
		"name": "Hitmonlee",
		"types": [
			"fighting"
		]
	},
	{
		"id": 107,
		"name": "Hitmonchan",
		"types": [
			"fighting"
		]
	},
	{
		"id": 108,
		"name": "Lickitung",
		"isNfe": true,
		"types": [
			"normal"
		]
	},
	{
		"id": 109,
		"name": "Koffing",
		"isNfe": true,
		"types": [
			"poison"
		]
	},
	{
		"id": 110,
		"name": "Weezing",
		"types": [
			"poison"
		],
		"forms": [
			{
				"name": "Weezing",
				"types": [
					"poison"
				]
			},
			{
				"name": "Weezing Galar",
				"types": [
					"poison",
					"fairy"
				],
				"spriteSuffix": "galar"
			}
		]
	},
	{
		"id": 111,
		"name": "Rhyhorn",
		"isNfe": true,
		"types": [
			"ground",
			"rock"
		]
	},
	{
		"id": 112,
		"name": "Rhydon",
		"isNfe": true,
		"types": [
			"ground",
			"rock"
		]
	},
	{
		"id": 113,
		"name": "Chansey",
		"isNfe": true,
		"types": [
			"normal"
		]
	},
	{
		"id": 114,
		"name": "Tangela",
		"isNfe": true,
		"types": [
			"grass"
		]
	},
	{
		"id": 115,
		"name": "Kangaskhan",
		"types": [
			"normal"
		],
		"forms": [
			{
				"name": "Kangaskhan",
				"types": [
					"normal"
				]
			},
			{
				"name": "Kangaskhan Mega",
				"types": [
					"normal"
				],
				"spriteSuffix": "mega",
				"isMega": true
			}
		]
	},
	{
		"id": 116,
		"name": "Horsea",
		"isNfe": true,
		"types": [
			"water"
		]
	},
	{
		"id": 117,
		"name": "Seadra",
		"isNfe": true,
		"types": [
			"water"
		]
	},
	{
		"id": 118,
		"name": "Goldeen",
		"isNfe": true,
		"types": [
			"water"
		]
	},
	{
		"id": 119,
		"name": "Seaking",
		"types": [
			"water"
		]
	},
	{
		"id": 120,
		"name": "Staryu",
		"isNfe": true,
		"types": [
			"water"
		]
	},
	{
		"id": 121,
		"name": "Starmie",
		"types": [
			"water",
			"psychic"
		]
	},
	{
		"id": 122,
		"name": "Mr. Mime",
		"types": [
			"psychic",
			"fairy"
		],
		"forms": [
			{
				"name": "Mr. Mime",
				"types": [
					"psychic",
					"fairy"
				]
			},
			{
				"name": "Mr. Mime Galar",
				"isNfe": true,
				"types": [
					"ice",
					"psychic"
				],
				"spriteSuffix": "galar"
			}
		]
	},
	{
		"id": 123,
		"name": "Scyther",
		"isNfe": true,
		"types": [
			"bug",
			"flying"
		]
	},
	{
		"id": 124,
		"name": "Jynx",
		"types": [
			"ice",
			"psychic"
		]
	},
	{
		"id": 125,
		"name": "Electabuzz",
		"isNfe": true,
		"types": [
			"electric"
		]
	},
	{
		"id": 126,
		"name": "Magmar",
		"isNfe": true,
		"types": [
			"fire"
		]
	},
	{
		"id": 127,
		"name": "Pinsir",
		"types": [
			"bug"
		],
		"forms": [
			{
				"name": "Pinsir",
				"types": [
					"bug"
				]
			},
			{
				"name": "Pinsir Mega",
				"types": [
					"bug",
					"flying"
				],
				"spriteSuffix": "mega",
				"isMega": true
			}
		]
	},
	{
		"id": 128,
		"name": "Tauros",
		"types": [
			"normal"
		]
	},
	{
		"id": 129,
		"name": "Magikarp",
		"isNfe": true,
		"types": [
			"water"
		]
	},
	{
		"id": 130,
		"name": "Gyarados",
		"types": [
			"water",
			"flying"
		],
		"forms": [
			{
				"name": "Gyarados",
				"types": [
					"water",
					"flying"
				]
			},
			{
				"name": "Gyarados Mega",
				"types": [
					"water",
					"dark"
				],
				"spriteSuffix": "mega",
				"isMega": true
			}
		]
	},
	{
		"id": 131,
		"name": "Lapras",
		"types": [
			"water",
			"ice"
		],
		"forms": [
			{
				"name": "Lapras",
				"types": [
					"water",
					"ice"
				]
			},
			{
				"name": "Lapras Gigantamax",
				"types": [
					"water",
					"ice"
				],
				"spriteSuffix": "gigantamax",
				"isGigantamax": true
			}
		]
	},
	{
		"id": 132,
		"name": "Ditto",
		"types": [
			"normal"
		]
	},
	{
		"id": 133,
		"name": "Eevee",
		"isNfe": true,
		"types": [
			"normal"
		],
		"forms": [
			{
				"name": "Eevee",
				"isNfe": true,
				"types": [
					"normal"
				]
			},
			{
				"name": "Eevee Gigantamax",
				"isNfe": true,
				"types": [
					"normal"
				],
				"spriteSuffix": "gigantamax",
				"isGigantamax": true
			}
		]
	},
	{
		"id": 134,
		"name": "Vaporeon",
		"types": [
			"water"
		]
	},
	{
		"id": 135,
		"name": "Jolteon",
		"types": [
			"electric"
		]
	},
	{
		"id": 136,
		"name": "Flareon",
		"types": [
			"fire"
		]
	},
	{
		"id": 137,
		"name": "Porygon",
		"isNfe": true,
		"types": [
			"normal"
		]
	},
	{
		"id": 138,
		"name": "Omanyte",
		"isNfe": true,
		"types": [
			"rock",
			"water"
		]
	},
	{
		"id": 139,
		"name": "Omastar",
		"types": [
			"rock",
			"water"
		]
	},
	{
		"id": 140,
		"name": "Kabuto",
		"isNfe": true,
		"types": [
			"rock",
			"water"
		]
	},
	{
		"id": 141,
		"name": "Kabutops",
		"types": [
			"rock",
			"water"
		]
	},
	{
		"id": 142,
		"name": "Aerodactyl",
		"types": [
			"rock",
			"flying"
		],
		"forms": [
			{
				"name": "Aerodactyl",
				"types": [
					"rock",
					"flying"
				]
			},
			{
				"name": "Aerodactyl Mega",
				"types": [
					"rock",
					"flying"
				],
				"spriteSuffix": "mega",
				"isMega": true
			}
		]
	},
	{
		"id": 143,
		"name": "Snorlax",
		"types": [
			"normal"
		],
		"forms": [
			{
				"name": "Snorlax",
				"types": [
					"normal"
				]
			},
			{
				"name": "Snorlax Gigantamax",
				"types": [
					"normal"
				],
				"spriteSuffix": "gigantamax",
				"isGigantamax": true
			}
		]
	},
	{
		"id": 144,
		"name": "Articuno",
		"types": [
			"ice",
			"flying"
		],
		"forms": [
			{
				"name": "Articuno",
				"types": [
					"ice",
					"flying"
				]
			},
			{
				"name": "Articuno Galar",
				"types": [
					"psychic",
					"flying"
				],
				"spriteSuffix": "galar"
			}
		],
		"isLegendary": true
	},
	{
		"id": 145,
		"name": "Zapdos",
		"types": [
			"electric",
			"flying"
		],
		"forms": [
			{
				"name": "Zapdos",
				"types": [
					"electric",
					"flying"
				]
			},
			{
				"name": "Zapdos Galar",
				"types": [
					"fighting",
					"flying"
				],
				"spriteSuffix": "galar"
			}
		],
		"isLegendary": true
	},
	{
		"id": 146,
		"name": "Moltres",
		"types": [
			"fire",
			"flying"
		],
		"forms": [
			{
				"name": "Moltres",
				"types": [
					"fire",
					"flying"
				]
			},
			{
				"name": "Moltres Galar",
				"types": [
					"dark",
					"flying"
				],
				"spriteSuffix": "galar"
			}
		],
		"isLegendary": true
	},
	{
		"id": 147,
		"name": "Dratini",
		"isNfe": true,
		"types": [
			"dragon"
		]
	},
	{
		"id": 148,
		"name": "Dragonair",
		"isNfe": true,
		"types": [
			"dragon"
		]
	},
	{
		"id": 149,
		"name": "Dragonite",
		"types": [
			"dragon",
			"flying"
		]
	},
	{
		"id": 150,
		"name": "Mewtwo",
		"types": [
			"psychic"
		],
		"forms": [
			{
				"name": "Mewtwo",
				"types": [
					"psychic"
				]
			},
			{
				"name": "Mewtwo Mega X",
				"types": [
					"psychic",
					"fighting"
				],
				"spriteSuffix": "mega-x",
				"isMega": true
			},
			{
				"name": "Mewtwo Mega Y",
				"types": [
					"psychic"
				],
				"spriteSuffix": "mega-y",
				"isMega": true
			}
		],
		"isLegendary": true
	},
	{
		"id": 151,
		"name": "Mew",
		"types": [
			"psychic"
		],
		"isLegendary": true
	},
	{
		"id": 152,
		"name": "Chikorita",
		"isNfe": true,
		"types": [
			"grass"
		]
	},
	{
		"id": 153,
		"name": "Bayleef",
		"isNfe": true,
		"types": [
			"grass"
		]
	},
	{
		"id": 154,
		"name": "Meganium",
		"types": [
			"grass"
		]
	},
	{
		"id": 155,
		"name": "Cyndaquil",
		"isNfe": true,
		"types": [
			"fire"
		]
	},
	{
		"id": 156,
		"name": "Quilava",
		"isNfe": true,
		"types": [
			"fire"
		]
	},
	{
		"id": 157,
		"name": "Typhlosion",
		"types": [
			"fire"
		],
		"forms": [
			{
				"name": "Typhlosion",
				"types": [
					"fire"
				]
			},
			{
				"name": "Typhlosion Hisui",
				"types": [
					"fire",
					"ghost"
				],
				"spriteSuffix": "hisui"
			}
		]
	},
	{
		"id": 158,
		"name": "Totodile",
		"isNfe": true,
		"types": [
			"water"
		]
	},
	{
		"id": 159,
		"name": "Croconaw",
		"isNfe": true,
		"types": [
			"water"
		]
	},
	{
		"id": 160,
		"name": "Feraligatr",
		"types": [
			"water"
		]
	},
	{
		"id": 161,
		"name": "Sentret",
		"isNfe": true,
		"types": [
			"normal"
		]
	},
	{
		"id": 162,
		"name": "Furret",
		"types": [
			"normal"
		]
	},
	{
		"id": 163,
		"name": "Hoothoot",
		"isNfe": true,
		"types": [
			"normal",
			"flying"
		]
	},
	{
		"id": 164,
		"name": "Noctowl",
		"types": [
			"normal",
			"flying"
		]
	},
	{
		"id": 165,
		"name": "Ledyba",
		"isNfe": true,
		"types": [
			"bug",
			"flying"
		]
	},
	{
		"id": 166,
		"name": "Ledian",
		"types": [
			"bug",
			"flying"
		]
	},
	{
		"id": 167,
		"name": "Spinarak",
		"isNfe": true,
		"types": [
			"bug",
			"poison"
		]
	},
	{
		"id": 168,
		"name": "Ariados",
		"types": [
			"bug",
			"poison"
		]
	},
	{
		"id": 169,
		"name": "Crobat",
		"types": [
			"poison",
			"flying"
		]
	},
	{
		"id": 170,
		"name": "Chinchou",
		"isNfe": true,
		"types": [
			"water",
			"electric"
		]
	},
	{
		"id": 171,
		"name": "Lanturn",
		"types": [
			"water",
			"electric"
		]
	},
	{
		"id": 172,
		"name": "Pichu",
		"isNfe": true,
		"types": [
			"electric"
		]
	},
	{
		"id": 173,
		"name": "Cleffa",
		"isNfe": true,
		"types": [
			"fairy"
		]
	},
	{
		"id": 174,
		"name": "Igglybuff",
		"isNfe": true,
		"types": [
			"normal",
			"fairy"
		]
	},
	{
		"id": 175,
		"name": "Togepi",
		"isNfe": true,
		"types": [
			"fairy"
		]
	},
	{
		"id": 176,
		"name": "Togetic",
		"isNfe": true,
		"types": [
			"fairy",
			"flying"
		]
	},
	{
		"id": 177,
		"name": "Natu",
		"isNfe": true,
		"types": [
			"psychic",
			"flying"
		]
	},
	{
		"id": 178,
		"name": "Xatu",
		"types": [
			"psychic",
			"flying"
		]
	},
	{
		"id": 179,
		"name": "Mareep",
		"isNfe": true,
		"types": [
			"electric"
		]
	},
	{
		"id": 180,
		"name": "Flaaffy",
		"isNfe": true,
		"types": [
			"electric"
		]
	},
	{
		"id": 181,
		"name": "Ampharos",
		"types": [
			"electric"
		],
		"forms": [
			{
				"name": "Ampharos",
				"types": [
					"electric"
				]
			},
			{
				"name": "Ampharos Mega",
				"types": [
					"electric",
					"dragon"
				],
				"spriteSuffix": "mega",
				"isMega": true
			}
		]
	},
	{
		"id": 182,
		"name": "Bellossom",
		"types": [
			"grass"
		]
	},
	{
		"id": 183,
		"name": "Marill",
		"isNfe": true,
		"types": [
			"water",
			"fairy"
		]
	},
	{
		"id": 184,
		"name": "Azumarill",
		"types": [
			"water",
			"fairy"
		]
	},
	{
		"id": 185,
		"name": "Sudowoodo",
		"types": [
			"rock"
		]
	},
	{
		"id": 186,
		"name": "Politoed",
		"types": [
			"water"
		]
	},
	{
		"id": 187,
		"name": "Hoppip",
		"isNfe": true,
		"types": [
			"grass",
			"flying"
		]
	},
	{
		"id": 188,
		"name": "Skiploom",
		"isNfe": true,
		"types": [
			"grass",
			"flying"
		]
	},
	{
		"id": 189,
		"name": "Jumpluff",
		"types": [
			"grass",
			"flying"
		]
	},
	{
		"id": 190,
		"name": "Aipom",
		"isNfe": true,
		"types": [
			"normal"
		]
	},
	{
		"id": 191,
		"name": "Sunkern",
		"isNfe": true,
		"types": [
			"grass"
		]
	},
	{
		"id": 192,
		"name": "Sunflora",
		"types": [
			"grass"
		]
	},
	{
		"id": 193,
		"name": "Yanma",
		"isNfe": true,
		"types": [
			"bug",
			"flying"
		]
	},
	{
		"id": 194,
		"name": "Wooper",
		"isNfe": true,
		"types": [
			"water",
			"ground"
		]
	},
	{
		"id": 195,
		"name": "Quagsire",
		"types": [
			"water",
			"ground"
		]
	},
	{
		"id": 196,
		"name": "Espeon",
		"types": [
			"psychic"
		]
	},
	{
		"id": 197,
		"name": "Umbreon",
		"types": [
			"dark"
		]
	},
	{
		"id": 198,
		"name": "Murkrow",
		"isNfe": true,
		"types": [
			"dark",
			"flying"
		]
	},
	{
		"id": 199,
		"name": "Slowking",
		"types": [
			"water",
			"psychic"
		],
		"forms": [
			{
				"name": "Slowking",
				"types": [
					"water",
					"psychic"
				]
			},
			{
				"name": "Slowking Galar",
				"types": [
					"water",
					"psychic"
				],
				"spriteSuffix": "galar"
			}
		]
	},
	{
		"id": 200,
		"name": "Misdreavus",
		"isNfe": true,
		"types": [
			"ghost"
		]
	},
	{
		"id": 201,
		"name": "Unown",
		"types": [
			"psychic"
		],
		"forms": [
			{
				"name": "Unown A",
				"types": [
					"psychic"
				]
			},
			{
				"name": "Unown B",
				"types": [
					"psychic"
				],
				"spriteSuffix": "b"
			},
			{
				"name": "Unown C",
				"types": [
					"psychic"
				],
				"spriteSuffix": "c"
			},
			{
				"name": "Unown D",
				"types": [
					"psychic"
				],
				"spriteSuffix": "d"
			},
			{
				"name": "Unown E",
				"types": [
					"psychic"
				],
				"spriteSuffix": "e"
			},
			{
				"name": "Unown F",
				"types": [
					"psychic"
				],
				"spriteSuffix": "f"
			},
			{
				"name": "Unown G",
				"types": [
					"psychic"
				],
				"spriteSuffix": "g"
			},
			{
				"name": "Unown H",
				"types": [
					"psychic"
				],
				"spriteSuffix": "h"
			},
			{
				"name": "Unown I",
				"types": [
					"psychic"
				],
				"spriteSuffix": "i"
			},
			{
				"name": "Unown J",
				"types": [
					"psychic"
				],
				"spriteSuffix": "j"
			},
			{
				"name": "Unown M",
				"types": [
					"psychic"
				],
				"spriteSuffix": "m"
			},
			{
				"name": "Unown K",
				"types": [
					"psychic"
				],
				"spriteSuffix": "k"
			},
			{
				"name": "Unown L",
				"types": [
					"psychic"
				],
				"spriteSuffix": "l"
			},
			{
				"name": "Unown N",
				"types": [
					"psychic"
				],
				"spriteSuffix": "n"
			},
			{
				"name": "Unown O",
				"types": [
					"psychic"
				],
				"spriteSuffix": "o"
			},
			{
				"name": "Unown P",
				"types": [
					"psychic"
				],
				"spriteSuffix": "p"
			},
			{
				"name": "Unown Q",
				"types": [
					"psychic"
				],
				"spriteSuffix": "q"
			},
			{
				"name": "Unown R",
				"types": [
					"psychic"
				],
				"spriteSuffix": "r"
			},
			{
				"name": "Unown S",
				"types": [
					"psychic"
				],
				"spriteSuffix": "s"
			},
			{
				"name": "Unown T",
				"types": [
					"psychic"
				],
				"spriteSuffix": "t"
			},
			{
				"name": "Unown U",
				"types": [
					"psychic"
				],
				"spriteSuffix": "u"
			},
			{
				"name": "Unown V",
				"types": [
					"psychic"
				],
				"spriteSuffix": "v"
			},
			{
				"name": "Unown W",
				"types": [
					"psychic"
				],
				"spriteSuffix": "w"
			},
			{
				"name": "Unown X",
				"types": [
					"psychic"
				],
				"spriteSuffix": "x"
			},
			{
				"name": "Unown Y",
				"types": [
					"psychic"
				],
				"spriteSuffix": "y"
			},
			{
				"name": "Unown Z",
				"types": [
					"psychic"
				],
				"spriteSuffix": "z"
			},
			{
				"name": "Unown !",
				"types": [
					"psychic"
				],
				"spriteSuffix": "exclamation"
			},
			{
				"name": "Unown ?",
				"types": [
					"psychic"
				],
				"spriteSuffix": "question"
			}
		]
	},
	{
		"id": 202,
		"name": "Wobbuffet",
		"types": [
			"psychic"
		]
	},
	{
		"id": 203,
		"name": "Girafarig",
		"types": [
			"normal",
			"psychic"
		]
	},
	{
		"id": 204,
		"name": "Pineco",
		"isNfe": true,
		"types": [
			"bug"
		]
	},
	{
		"id": 205,
		"name": "Forretress",
		"types": [
			"bug",
			"steel"
		]
	},
	{
		"id": 206,
		"name": "Dunsparce",
		"types": [
			"normal"
		]
	},
	{
		"id": 207,
		"name": "Gligar",
		"isNfe": true,
		"types": [
			"ground",
			"flying"
		]
	},
	{
		"id": 208,
		"name": "Steelix",
		"types": [
			"steel",
			"ground"
		],
		"forms": [
			{
				"name": "Steelix",
				"types": [
					"steel",
					"ground"
				]
			},
			{
				"name": "Steelix Mega",
				"types": [
					"steel",
					"ground"
				],
				"spriteSuffix": "mega",
				"isMega": true
			}
		]
	},
	{
		"id": 209,
		"name": "Snubbull",
		"isNfe": true,
		"types": [
			"fairy"
		]
	},
	{
		"id": 210,
		"name": "Granbull",
		"types": [
			"fairy"
		]
	},
	{
		"id": 211,
		"name": "Qwilfish",
		"isNfe": true,
		"types": [
			"water",
			"poison"
		],
		"forms": [
			{
				"name": "Qwilfish",
				"types": [
					"water",
					"poison"
				]
			},
			{
				"name": "Qwilfish Hisui",
				"types": [
					"dark",
					"poison"
				],
				"isNfe": true,
				"spriteSuffix": "hisui"
			}
		]
	},
	{
		"id": 212,
		"name": "Scizor",
		"types": [
			"bug",
			"steel"
		],
		"forms": [
			{
				"name": "Scizor",
				"types": [
					"bug",
					"steel"
				]
			},
			{
				"name": "Scizor Mega",
				"types": [
					"bug",
					"steel"
				],
				"spriteSuffix": "mega",
				"isMega": true
			}
		]
	},
	{
		"id": 213,
		"name": "Shuckle",
		"types": [
			"bug",
			"rock"
		]
	},
	{
		"id": 214,
		"name": "Heracross",
		"types": [
			"bug",
			"fighting"
		],
		"forms": [
			{
				"name": "Heracross",
				"types": [
					"bug",
					"fighting"
				]
			},
			{
				"name": "Heracross Mega",
				"types": [
					"bug",
					"fighting"
				],
				"spriteSuffix": "mega",
				"isMega": true
			}
		]
	},
	{
		"id": 215,
		"name": "Sneasel",
		"isNfe": true,
		"types": [
			"dark",
			"ice"
		],
		"forms": [
			{
				"name": "Sneasel",
				"types": [
					"dark",
					"ice"
				],
				"isNfe": true
			},
			{
				"name": "Sneasel Hisui",
				"types": [
					"fighting",
					"poison"
				],
				"isNfe": true,
				"spriteSuffix": "hisui"
			}
		]
	},
	{
		"id": 216,
		"name": "Teddiursa",
		"isNfe": true,
		"types": [
			"normal"
		]
	},
	{
		"id": 217,
		"name": "Ursaring",
		"isNfe": true,
		"types": [
			"normal"
		]
	},
	{
		"id": 218,
		"name": "Slugma",
		"isNfe": true,
		"types": [
			"fire"
		]
	},
	{
		"id": 219,
		"name": "Magcargo",
		"types": [
			"fire",
			"rock"
		]
	},
	{
		"id": 220,
		"name": "Swinub",
		"isNfe": true,
		"types": [
			"ice",
			"ground"
		]
	},
	{
		"id": 221,
		"name": "Piloswine",
		"isNfe": true,
		"types": [
			"ice",
			"ground"
		]
	},
	{
		"id": 222,
		"name": "Corsola",
		"types": [
			"water",
			"rock"
		],
		"forms": [
			{
				"name": "Corsola",
				"types": [
					"water",
					"rock"
				]
			},
			{
				"name": "Corsola Galar",
				"isNfe": true,
				"types": [
					"ghost"
				],
				"spriteSuffix": "galar"
			}
		]
	},
	{
		"id": 223,
		"name": "Remoraid",
		"isNfe": true,
		"types": [
			"water"
		]
	},
	{
		"id": 224,
		"name": "Octillery",
		"types": [
			"water"
		]
	},
	{
		"id": 225,
		"name": "Delibird",
		"types": [
			"ice",
			"flying"
		]
	},
	{
		"id": 226,
		"name": "Mantine",
		"types": [
			"water",
			"flying"
		]
	},
	{
		"id": 227,
		"name": "Skarmory",
		"types": [
			"steel",
			"flying"
		]
	},
	{
		"id": 228,
		"name": "Houndour",
		"isNfe": true,
		"types": [
			"dark",
			"fire"
		]
	},
	{
		"id": 229,
		"name": "Houndoom",
		"types": [
			"dark",
			"fire"
		],
		"forms": [
			{
				"name": "Houndoom",
				"types": [
					"dark",
					"fire"
				]
			},
			{
				"name": "Houndoom Mega",
				"types": [
					"dark",
					"fire"
				],
				"spriteSuffix": "mega",
				"isMega": true
			}
		]
	},
	{
		"id": 230,
		"name": "Kingdra",
		"types": [
			"water",
			"dragon"
		]
	},
	{
		"id": 231,
		"name": "Phanpy",
		"isNfe": true,
		"types": [
			"ground"
		]
	},
	{
		"id": 232,
		"name": "Donphan",
		"types": [
			"ground"
		]
	},
	{
		"id": 233,
		"name": "Porygon2",
		"isNfe": true,
		"types": [
			"normal"
		]
	},
	{
		"id": 234,
		"name": "Stantler",
		"isNfe": true,
		"types": [
			"normal"
		]
	},
	{
		"id": 235,
		"name": "Smeargle",
		"types": [
			"normal"
		]
	},
	{
		"id": 236,
		"name": "Tyrogue",
		"isNfe": true,
		"types": [
			"fighting"
		]
	},
	{
		"id": 237,
		"name": "Hitmontop",
		"types": [
			"fighting"
		]
	},
	{
		"id": 238,
		"name": "Smoochum",
		"isNfe": true,
		"types": [
			"ice",
			"psychic"
		]
	},
	{
		"id": 239,
		"name": "Elekid",
		"isNfe": true,
		"types": [
			"electric"
		]
	},
	{
		"id": 240,
		"name": "Magby",
		"isNfe": true,
		"types": [
			"fire"
		]
	},
	{
		"id": 241,
		"name": "Miltank",
		"types": [
			"normal"
		]
	},
	{
		"id": 242,
		"name": "Blissey",
		"types": [
			"normal"
		]
	},
	{
		"id": 243,
		"name": "Raikou",
		"types": [
			"electric"
		],
		"isLegendary": true
	},
	{
		"id": 244,
		"name": "Entei",
		"types": [
			"fire"
		],
		"isLegendary": true
	},
	{
		"id": 245,
		"name": "Suicune",
		"types": [
			"water"
		],
		"isLegendary": true
	},
	{
		"id": 246,
		"name": "Larvitar",
		"isNfe": true,
		"types": [
			"rock",
			"ground"
		]
	},
	{
		"id": 247,
		"name": "Pupitar",
		"isNfe": true,
		"types": [
			"rock",
			"ground"
		]
	},
	{
		"id": 248,
		"name": "Tyranitar",
		"types": [
			"rock",
			"dark"
		],
		"forms": [
			{
				"name": "Tyranitar",
				"types": [
					"rock",
					"dark"
				]
			},
			{
				"name": "Tyranitar Mega",
				"types": [
					"rock",
					"dark"
				],
				"spriteSuffix": "mega",
				"isMega": true
			}
		]
	},
	{
		"id": 249,
		"name": "Lugia",
		"types": [
			"psychic",
			"flying"
		],
		"isLegendary": true
	},
	{
		"id": 250,
		"name": "Ho-oh",
		"types": [
			"fire",
			"flying"
		],
		"isLegendary": true
	},
	{
		"id": 251,
		"name": "Celebi",
		"types": [
			"psychic",
			"grass"
		],
		"isLegendary": true
	},
	{
		"id": 252,
		"name": "Treecko",
		"isNfe": true,
		"types": [
			"grass"
		]
	},
	{
		"id": 253,
		"name": "Grovyle",
		"isNfe": true,
		"types": [
			"grass"
		]
	},
	{
		"id": 254,
		"name": "Sceptile",
		"types": [
			"grass"
		],
		"forms": [
			{
				"name": "Sceptile",
				"types": [
					"grass"
				]
			},
			{
				"name": "Sceptile Mega",
				"types": [
					"grass",
					"dragon"
				],
				"spriteSuffix": "mega",
				"isMega": true
			}
		]
	},
	{
		"id": 255,
		"name": "Torchic",
		"isNfe": true,
		"types": [
			"fire"
		]
	},
	{
		"id": 256,
		"name": "Combusken",
		"isNfe": true,
		"types": [
			"fire",
			"fighting"
		]
	},
	{
		"id": 257,
		"name": "Blaziken",
		"types": [
			"fire",
			"fighting"
		],
		"forms": [
			{
				"name": "Blaziken",
				"types": [
					"fire",
					"fighting"
				]
			},
			{
				"name": "Blaziken Mega",
				"types": [
					"fire",
					"fighting"
				],
				"spriteSuffix": "mega",
				"isMega": true
			}
		]
	},
	{
		"id": 258,
		"name": "Mudkip",
		"isNfe": true,
		"types": [
			"water"
		]
	},
	{
		"id": 259,
		"name": "Marshtomp",
		"isNfe": true,
		"types": [
			"water",
			"ground"
		]
	},
	{
		"id": 260,
		"name": "Swampert",
		"types": [
			"water",
			"ground"
		],
		"forms": [
			{
				"name": "Swampert",
				"types": [
					"water",
					"ground"
				]
			},
			{
				"name": "Swampert Mega",
				"types": [
					"water",
					"ground"
				],
				"spriteSuffix": "mega",
				"isMega": true
			}
		]
	},
	{
		"id": 261,
		"name": "Poochyena",
		"isNfe": true,
		"types": [
			"dark"
		]
	},
	{
		"id": 262,
		"name": "Mightyena",
		"types": [
			"dark"
		]
	},
	{
		"id": 263,
		"name": "Zigzagoon",
		"isNfe": true,
		"types": [
			"normal"
		],
		"forms": [
			{
				"name": "Zigzagoon",
				"isNfe": true,
				"types": [
					"normal"
				]
			},
			{
				"name": "Zigzagoon Galar",
				"isNfe": true,
				"types": [
					"dark",
					"normal"
				],
				"spriteSuffix": "galar"
			}
		]
	},
	{
		"id": 264,
		"name": "Linoone",
		"types": [
			"normal"
		],
		"forms": [
			{
				"name": "Linoone",
				"types": [
					"normal"
				]
			},
			{
				"name": "Linoone Galar",
				"isNfe": true,
				"types": [
					"dark",
					"normal"
				],
				"spriteSuffix": "galar"
			}
		]
	},
	{
		"id": 265,
		"name": "Wurmple",
		"isNfe": true,
		"types": [
			"bug"
		]
	},
	{
		"id": 266,
		"name": "Silcoon",
		"isNfe": true,
		"types": [
			"bug"
		]
	},
	{
		"id": 267,
		"name": "Beautifly",
		"types": [
			"bug",
			"flying"
		]
	},
	{
		"id": 268,
		"name": "Cascoon",
		"isNfe": true,
		"types": [
			"bug"
		]
	},
	{
		"id": 269,
		"name": "Dustox",
		"types": [
			"bug",
			"poison"
		]
	},
	{
		"id": 270,
		"name": "Lotad",
		"isNfe": true,
		"types": [
			"water",
			"grass"
		]
	},
	{
		"id": 271,
		"name": "Lombre",
		"isNfe": true,
		"types": [
			"water",
			"grass"
		]
	},
	{
		"id": 272,
		"name": "Ludicolo",
		"types": [
			"water",
			"grass"
		]
	},
	{
		"id": 273,
		"name": "Seedot",
		"isNfe": true,
		"types": [
			"grass"
		]
	},
	{
		"id": 274,
		"name": "Nuzleaf",
		"isNfe": true,
		"types": [
			"grass",
			"dark"
		]
	},
	{
		"id": 275,
		"name": "Shiftry",
		"types": [
			"grass",
			"dark"
		]
	},
	{
		"id": 276,
		"name": "Taillow",
		"isNfe": true,
		"types": [
			"normal",
			"flying"
		]
	},
	{
		"id": 277,
		"name": "Swellow",
		"types": [
			"normal",
			"flying"
		]
	},
	{
		"id": 278,
		"name": "Wingull",
		"isNfe": true,
		"types": [
			"water",
			"flying"
		]
	},
	{
		"id": 279,
		"name": "Pelipper",
		"types": [
			"water",
			"flying"
		]
	},
	{
		"id": 280,
		"name": "Ralts",
		"isNfe": true,
		"types": [
			"psychic",
			"fairy"
		]
	},
	{
		"id": 281,
		"name": "Kirlia",
		"isNfe": true,
		"types": [
			"psychic",
			"fairy"
		]
	},
	{
		"id": 282,
		"name": "Gardevoir",
		"types": [
			"psychic",
			"fairy"
		],
		"forms": [
			{
				"name": "Gardevoir",
				"types": [
					"psychic",
					"fairy"
				]
			},
			{
				"name": "Gardevoir Mega",
				"types": [
					"psychic",
					"fairy"
				],
				"spriteSuffix": "mega",
				"isMega": true
			}
		]
	},
	{
		"id": 283,
		"name": "Surskit",
		"isNfe": true,
		"types": [
			"bug",
			"water"
		]
	},
	{
		"id": 284,
		"name": "Masquerain",
		"types": [
			"bug",
			"flying"
		]
	},
	{
		"id": 285,
		"name": "Shroomish",
		"isNfe": true,
		"types": [
			"grass"
		]
	},
	{
		"id": 286,
		"name": "Breloom",
		"types": [
			"grass",
			"fighting"
		]
	},
	{
		"id": 287,
		"name": "Slakoth",
		"isNfe": true,
		"types": [
			"normal"
		]
	},
	{
		"id": 288,
		"name": "Vigoroth",
		"isNfe": true,
		"types": [
			"normal"
		]
	},
	{
		"id": 289,
		"name": "Slaking",
		"types": [
			"normal"
		]
	},
	{
		"id": 290,
		"name": "Nincada",
		"isNfe": true,
		"types": [
			"bug",
			"ground"
		]
	},
	{
		"id": 291,
		"name": "Ninjask",
		"types": [
			"bug",
			"flying"
		]
	},
	{
		"id": 292,
		"name": "Shedinja",
		"types": [
			"bug",
			"ghost"
		]
	},
	{
		"id": 293,
		"name": "Whismur",
		"isNfe": true,
		"types": [
			"normal"
		]
	},
	{
		"id": 294,
		"name": "Loudred",
		"isNfe": true,
		"types": [
			"normal"
		]
	},
	{
		"id": 295,
		"name": "Exploud",
		"types": [
			"normal"
		]
	},
	{
		"id": 296,
		"name": "Makuhita",
		"isNfe": true,
		"types": [
			"fighting"
		]
	},
	{
		"id": 297,
		"name": "Hariyama",
		"types": [
			"fighting"
		]
	},
	{
		"id": 298,
		"name": "Azurill",
		"isNfe": true,
		"types": [
			"normal",
			"fairy"
		]
	},
	{
		"id": 299,
		"name": "Nosepass",
		"isNfe": true,
		"types": [
			"rock"
		]
	},
	{
		"id": 300,
		"name": "Skitty",
		"isNfe": true,
		"types": [
			"normal"
		]
	},
	{
		"id": 301,
		"name": "Delcatty",
		"types": [
			"normal"
		]
	},
	{
		"id": 302,
		"name": "Sableye",
		"types": [
			"dark",
			"ghost"
		],
		"forms": [
			{
				"name": "Sableye",
				"types": [
					"dark",
					"ghost"
				]
			},
			{
				"name": "Sableye Mega",
				"types": [
					"dark",
					"ghost"
				],
				"spriteSuffix": "mega",
				"isMega": true
			}
		]
	},
	{
		"id": 303,
		"name": "Mawile",
		"types": [
			"steel",
			"fairy"
		],
		"forms": [
			{
				"name": "Mawile",
				"types": [
					"steel",
					"fairy"
				]
			},
			{
				"name": "Mawile Mega",
				"types": [
					"steel",
					"fairy"
				],
				"spriteSuffix": "mega",
				"isMega": true
			}
		]
	},
	{
		"id": 304,
		"name": "Aron",
		"isNfe": true,
		"types": [
			"steel",
			"rock"
		]
	},
	{
		"id": 305,
		"name": "Lairon",
		"isNfe": true,
		"types": [
			"steel",
			"rock"
		]
	},
	{
		"id": 306,
		"name": "Aggron",
		"types": [
			"steel",
			"rock"
		],
		"forms": [
			{
				"name": "Aggron",
				"types": [
					"steel",
					"rock"
				]
			},
			{
				"name": "Aggron Mega",
				"types": [
					"steel"
				],
				"spriteSuffix": "mega",
				"isMega": true
			}
		]
	},
	{
		"id": 307,
		"name": "Meditite",
		"isNfe": true,
		"types": [
			"fighting",
			"psychic"
		]
	},
	{
		"id": 308,
		"name": "Medicham",
		"types": [
			"fighting",
			"psychic"
		],
		"forms": [
			{
				"name": "Medicham",
				"types": [
					"fighting",
					"psychic"
				]
			},
			{
				"name": "Medicham Mega",
				"types": [
					"fighting",
					"psychic"
				],
				"spriteSuffix": "mega",
				"isMega": true
			}
		]
	},
	{
		"id": 309,
		"name": "Electrike",
		"isNfe": true,
		"types": [
			"electric"
		]
	},
	{
		"id": 310,
		"name": "Manectric",
		"types": [
			"electric"
		],
		"forms": [
			{
				"name": "Manectric",
				"types": [
					"electric"
				]
			},
			{
				"name": "Manectric Mega",
				"types": [
					"electric"
				],
				"spriteSuffix": "mega",
				"isMega": true
			}
		]
	},
	{
		"id": 311,
		"name": "Plusle",
		"types": [
			"electric"
		]
	},
	{
		"id": 312,
		"name": "Minun",
		"types": [
			"electric"
		]
	},
	{
		"id": 313,
		"name": "Volbeat",
		"types": [
			"bug"
		]
	},
	{
		"id": 314,
		"name": "Illumise",
		"types": [
			"bug"
		]
	},
	{
		"id": 315,
		"name": "Roselia",
		"isNfe": true,
		"types": [
			"grass",
			"poison"
		]
	},
	{
		"id": 316,
		"name": "Gulpin",
		"isNfe": true,
		"types": [
			"poison"
		]
	},
	{
		"id": 317,
		"name": "Swalot",
		"types": [
			"poison"
		]
	},
	{
		"id": 318,
		"name": "Carvanha",
		"isNfe": true,
		"types": [
			"water",
			"dark"
		]
	},
	{
		"id": 319,
		"name": "Sharpedo",
		"types": [
			"water",
			"dark"
		],
		"forms": [
			{
				"name": "Sharpedo",
				"types": [
					"water",
					"dark"
				]
			},
			{
				"name": "Sharpedo Mega",
				"types": [
					"water",
					"dark"
				],
				"spriteSuffix": "mega",
				"isMega": true
			}
		]
	},
	{
		"id": 320,
		"name": "Wailmer",
		"isNfe": true,
		"types": [
			"water"
		]
	},
	{
		"id": 321,
		"name": "Wailord",
		"types": [
			"water"
		]
	},
	{
		"id": 322,
		"name": "Numel",
		"isNfe": true,
		"types": [
			"fire",
			"ground"
		]
	},
	{
		"id": 323,
		"name": "Camerupt",
		"types": [
			"fire",
			"ground"
		],
		"forms": [
			{
				"name": "Camerupt",
				"types": [
					"fire",
					"ground"
				]
			},
			{
				"name": "Camerupt Mega",
				"types": [
					"fire",
					"ground"
				],
				"spriteSuffix": "mega",
				"isMega": true
			}
		]
	},
	{
		"id": 324,
		"name": "Torkoal",
		"types": [
			"fire"
		]
	},
	{
		"id": 325,
		"name": "Spoink",
		"isNfe": true,
		"types": [
			"psychic"
		]
	},
	{
		"id": 326,
		"name": "Grumpig",
		"types": [
			"psychic"
		]
	},
	{
		"id": 327,
		"name": "Spinda",
		"types": [
			"normal"
		]
	},
	{
		"id": 328,
		"name": "Trapinch",
		"isNfe": true,
		"types": [
			"ground"
		]
	},
	{
		"id": 329,
		"name": "Vibrava",
		"isNfe": true,
		"types": [
			"ground",
			"dragon"
		]
	},
	{
		"id": 330,
		"name": "Flygon",
		"types": [
			"ground",
			"dragon"
		]
	},
	{
		"id": 331,
		"name": "Cacnea",
		"isNfe": true,
		"types": [
			"grass"
		]
	},
	{
		"id": 332,
		"name": "Cacturne",
		"types": [
			"grass",
			"dark"
		]
	},
	{
		"id": 333,
		"name": "Swablu",
		"isNfe": true,
		"types": [
			"normal",
			"flying"
		]
	},
	{
		"id": 334,
		"name": "Altaria",
		"types": [
			"dragon",
			"flying"
		],
		"forms": [
			{
				"name": "Altaria",
				"types": [
					"dragon",
					"flying"
				]
			},
			{
				"name": "Altaria Mega",
				"types": [
					"dragon",
					"fairy"
				],
				"spriteSuffix": "mega",
				"isMega": true
			}
		]
	},
	{
		"id": 335,
		"name": "Zangoose",
		"types": [
			"normal"
		]
	},
	{
		"id": 336,
		"name": "Seviper",
		"types": [
			"poison"
		]
	},
	{
		"id": 337,
		"name": "Lunatone",
		"types": [
			"rock",
			"psychic"
		]
	},
	{
		"id": 338,
		"name": "Solrock",
		"types": [
			"rock",
			"psychic"
		]
	},
	{
		"id": 339,
		"name": "Barboach",
		"isNfe": true,
		"types": [
			"water",
			"ground"
		]
	},
	{
		"id": 340,
		"name": "Whiscash",
		"types": [
			"water",
			"ground"
		]
	},
	{
		"id": 341,
		"name": "Corphish",
		"isNfe": true,
		"types": [
			"water"
		]
	},
	{
		"id": 342,
		"name": "Crawdaunt",
		"types": [
			"water",
			"dark"
		]
	},
	{
		"id": 343,
		"name": "Baltoy",
		"isNfe": true,
		"types": [
			"ground",
			"psychic"
		]
	},
	{
		"id": 344,
		"name": "Claydol",
		"types": [
			"ground",
			"psychic"
		]
	},
	{
		"id": 345,
		"name": "Lileep",
		"isNfe": true,
		"types": [
			"rock",
			"grass"
		]
	},
	{
		"id": 346,
		"name": "Cradily",
		"types": [
			"rock",
			"grass"
		]
	},
	{
		"id": 347,
		"name": "Anorith",
		"isNfe": true,
		"types": [
			"rock",
			"bug"
		]
	},
	{
		"id": 348,
		"name": "Armaldo",
		"types": [
			"rock",
			"bug"
		]
	},
	{
		"id": 349,
		"name": "Feebas",
		"isNfe": true,
		"types": [
			"water"
		]
	},
	{
		"id": 350,
		"name": "Milotic",
		"types": [
			"water"
		]
	},
	{
		"id": 351,
		"name": "Castform",
		"types": [
			"normal"
		],
		"forms": [
			{
				"name": "Castform",
				"types": [
					"normal"
				]
			},
			{
				"name": "Castform",
				"types": [
					"water"
				],
				"spriteSuffix": "rainy"
			},
			{
				"name": "Castform",
				"types": [
					"ice"
				],
				"spriteSuffix": "snowy"
			},
			{
				"name": "Castform",
				"types": [
					"fire"
				],
				"spriteSuffix": "sunny"
			}
		]
	},
	{
		"id": 352,
		"name": "Kecleon",
		"types": [
			"normal"
		]
	},
	{
		"id": 353,
		"name": "Shuppet",
		"isNfe": true,
		"types": [
			"ghost"
		]
	},
	{
		"id": 354,
		"name": "Banette",
		"types": [
			"ghost"
		],
		"forms": [
			{
				"name": "Banette",
				"types": [
					"ghost"
				]
			},
			{
				"name": "Banette Mega",
				"types": [
					"ghost"
				],
				"spriteSuffix": "mega",
				"isMega": true
			}
		]
	},
	{
		"id": 355,
		"name": "Duskull",
		"isNfe": true,
		"types": [
			"ghost"
		]
	},
	{
		"id": 356,
		"name": "Dusclops",
		"isNfe": true,
		"types": [
			"ghost"
		]
	},
	{
		"id": 357,
		"name": "Tropius",
		"types": [
			"grass",
			"flying"
		]
	},
	{
		"id": 358,
		"name": "Chimecho",
		"types": [
			"psychic"
		]
	},
	{
		"id": 359,
		"name": "Absol",
		"types": [
			"dark"
		],
		"forms": [
			{
				"name": "Absol",
				"types": [
					"dark"
				]
			},
			{
				"name": "Absol Mega",
				"types": [
					"dark"
				],
				"spriteSuffix": "mega",
				"isMega": true
			}
		]
	},
	{
		"id": 360,
		"name": "Wynaut",
		"isNfe": true,
		"types": [
			"psychic"
		]
	},
	{
		"id": 361,
		"name": "Snorunt",
		"isNfe": true,
		"types": [
			"ice"
		]
	},
	{
		"id": 362,
		"name": "Glalie",
		"types": [
			"ice"
		],
		"forms": [
			{
				"name": "Glalie",
				"types": [
					"ice"
				]
			},
			{
				"name": "Glalie Mega",
				"types": [
					"ice"
				],
				"spriteSuffix": "mega",
				"isMega": true
			}
		]
	},
	{
		"id": 363,
		"name": "Spheal",
		"isNfe": true,
		"types": [
			"ice",
			"water"
		]
	},
	{
		"id": 364,
		"name": "Sealeo",
		"isNfe": true,
		"types": [
			"ice",
			"water"
		]
	},
	{
		"id": 365,
		"name": "Walrein",
		"types": [
			"ice",
			"water"
		]
	},
	{
		"id": 366,
		"name": "Clamperl",
		"isNfe": true,
		"types": [
			"water"
		]
	},
	{
		"id": 367,
		"name": "Huntail",
		"types": [
			"water"
		]
	},
	{
		"id": 368,
		"name": "Gorebyss",
		"types": [
			"water"
		]
	},
	{
		"id": 369,
		"name": "Relicanth",
		"types": [
			"water",
			"rock"
		]
	},
	{
		"id": 370,
		"name": "Luvdisc",
		"types": [
			"water"
		]
	},
	{
		"id": 371,
		"name": "Bagon",
		"isNfe": true,
		"types": [
			"dragon"
		]
	},
	{
		"id": 372,
		"name": "Shelgon",
		"isNfe": true,
		"types": [
			"dragon"
		]
	},
	{
		"id": 373,
		"name": "Salamence",
		"types": [
			"dragon",
			"flying"
		],
		"forms": [
			{
				"name": "Salamence",
				"types": [
					"dragon",
					"flying"
				]
			},
			{
				"name": "Salamence Mega",
				"types": [
					"dragon",
					"flying"
				],
				"spriteSuffix": "mega",
				"isMega": true
			}
		]
	},
	{
		"id": 374,
		"name": "Beldum",
		"isNfe": true,
		"types": [
			"steel",
			"psychic"
		]
	},
	{
		"id": 375,
		"name": "Metang",
		"isNfe": true,
		"types": [
			"steel",
			"psychic"
		]
	},
	{
		"id": 376,
		"name": "Metagross",
		"types": [
			"steel",
			"psychic"
		],
		"forms": [
			{
				"name": "Metagross",
				"types": [
					"steel",
					"psychic"
				]
			},
			{
				"name": "Metagross Mega",
				"types": [
					"steel",
					"psychic"
				],
				"spriteSuffix": "mega",
				"isMega": true
			}
		]
	},
	{
		"id": 377,
		"name": "Regirock",
		"types": [
			"rock"
		],
		"isLegendary": true
	},
	{
		"id": 378,
		"name": "Regice",
		"types": [
			"ice"
		],
		"isLegendary": true
	},
	{
		"id": 379,
		"name": "Registeel",
		"types": [
			"steel"
		],
		"isLegendary": true
	},
	{
		"id": 380,
		"name": "Latias",
		"types": [
			"dragon",
			"psychic"
		],
		"forms": [
			{
				"name": "Latias",
				"types": [
					"dragon",
					"psychic"
				]
			},
			{
				"name": "Latias Mega",
				"types": [
					"dragon",
					"psychic"
				],
				"spriteSuffix": "mega",
				"isMega": true
			}
		],
		"isLegendary": true
	},
	{
		"id": 381,
		"name": "Latios",
		"types": [
			"dragon",
			"psychic"
		],
		"forms": [
			{
				"name": "Latios",
				"types": [
					"dragon",
					"psychic"
				]
			},
			{
				"name": "Latios Mega",
				"types": [
					"dragon",
					"psychic"
				],
				"spriteSuffix": "mega",
				"isMega": true
			}
		],
		"isLegendary": true
	},
	{
		"id": 382,
		"name": "Kyogre",
		"types": [
			"water"
		],
		"forms": [
			{
				"name": "Kyogre",
				"types": [
					"water"
				]
			},
			{
				"name": "Kyogre Primal",
				"types": [
					"water"
				],
				"spriteSuffix": "primal"
			}
		],
		"isLegendary": true
	},
	{
		"id": 383,
		"name": "Groudon",
		"types": [
			"ground"
		],
		"forms": [
			{
				"name": "Groudon",
				"types": [
					"ground"
				]
			},
			{
				"name": "Groudon Primal",
				"types": [
					"ground",
					"fire"
				],
				"spriteSuffix": "primal"
			}
		],
		"isLegendary": true
	},
	{
		"id": 384,
		"name": "Rayquaza",
		"types": [
			"dragon",
			"flying"
		],
		"forms": [
			{
				"name": "Rayquaza",
				"types": [
					"dragon",
					"flying"
				]
			},
			{
				"name": "Rayquaza Mega",
				"types": [
					"dragon",
					"flying"
				],
				"spriteSuffix": "mega",
				"isMega": true
			}
		],
		"isLegendary": true
	},
	{
		"id": 385,
		"name": "Jirachi",
		"types": [
			"steel",
			"psychic"
		],
		"isLegendary": true
	},
	{
		"id": 386,
		"name": "Deoxys",
		"types": [
			"psychic"
		],
		"forms": [
			{
				"name": "Deoxys",
				"types": [
					"psychic"
				]
			},
			{
				"name": "Deoxys Attack",
				"types": [
					"psychic"
				],
				"spriteSuffix": "attack"
			},
			{
				"name": "Deoxys Defense",
				"types": [
					"psychic"
				],
				"spriteSuffix": "defense"
			},
			{
				"name": "Deoxys Speed",
				"types": [
					"psychic"
				],
				"spriteSuffix": "speed"
			}
		],
		"isLegendary": true
	},
	{
		"id": 387,
		"name": "Turtwig",
		"isNfe": true,
		"types": [
			"grass"
		]
	},
	{
		"id": 388,
		"name": "Grotle",
		"isNfe": true,
		"types": [
			"grass"
		]
	},
	{
		"id": 389,
		"name": "Torterra",
		"types": [
			"grass",
			"ground"
		]
	},
	{
		"id": 390,
		"name": "Chimchar",
		"isNfe": true,
		"types": [
			"fire"
		]
	},
	{
		"id": 391,
		"name": "Monferno",
		"isNfe": true,
		"types": [
			"fire",
			"fighting"
		]
	},
	{
		"id": 392,
		"name": "Infernape",
		"types": [
			"fire",
			"fighting"
		]
	},
	{
		"id": 393,
		"name": "Piplup",
		"isNfe": true,
		"types": [
			"water"
		]
	},
	{
		"id": 394,
		"name": "Prinplup",
		"isNfe": true,
		"types": [
			"water"
		]
	},
	{
		"id": 395,
		"name": "Empoleon",
		"types": [
			"water",
			"steel"
		]
	},
	{
		"id": 396,
		"name": "Starly",
		"isNfe": true,
		"types": [
			"normal",
			"flying"
		]
	},
	{
		"id": 397,
		"name": "Staravia",
		"isNfe": true,
		"types": [
			"normal",
			"flying"
		]
	},
	{
		"id": 398,
		"name": "Staraptor",
		"types": [
			"normal",
			"flying"
		]
	},
	{
		"id": 399,
		"name": "Bidoof",
		"isNfe": true,
		"types": [
			"normal"
		]
	},
	{
		"id": 400,
		"name": "Bibarel",
		"types": [
			"normal",
			"water"
		]
	},
	{
		"id": 401,
		"name": "Kricketot",
		"isNfe": true,
		"types": [
			"bug"
		]
	},
	{
		"id": 402,
		"name": "Kricketune",
		"types": [
			"bug"
		]
	},
	{
		"id": 403,
		"name": "Shinx",
		"isNfe": true,
		"types": [
			"electric"
		]
	},
	{
		"id": 404,
		"name": "Luxio",
		"isNfe": true,
		"types": [
			"electric"
		]
	},
	{
		"id": 405,
		"name": "Luxray",
		"types": [
			"electric"
		]
	},
	{
		"id": 406,
		"name": "Budew",
		"isNfe": true,
		"types": [
			"grass",
			"poison"
		]
	},
	{
		"id": 407,
		"name": "Roserade",
		"types": [
			"grass",
			"poison"
		]
	},
	{
		"id": 408,
		"name": "Cranidos",
		"isNfe": true,
		"types": [
			"rock"
		]
	},
	{
		"id": 409,
		"name": "Rampardos",
		"types": [
			"rock"
		]
	},
	{
		"id": 410,
		"name": "Shieldon",
		"isNfe": true,
		"types": [
			"rock",
			"steel"
		]
	},
	{
		"id": 411,
		"name": "Bastiodon",
		"types": [
			"rock",
			"steel"
		]
	},
	{
		"id": 412,
		"name": "Burmy",
		"isNfe": true,
		"types": [
			"bug"
		],
		"forms": [
			{
				"name": "Burmy Plant",
				"isNfe": true,
				"types": [
					"bug"
				]
			},
			{
				"name": "Burmy Sandy",
				"isNfe": true,
				"types": [
					"bug"
				],
				"spriteSuffix": "sandy"
			},
			{
				"name": "Burmy Trash",
				"isNfe": true,
				"types": [
					"bug"
				],
				"spriteSuffix": "trash"
			}
		]
	},
	{
		"id": 413,
		"name": "Wormadam",
		"types": [
			"bug",
			"grass"
		],
		"forms": [
			{
				"name": "Wormadam Plant",
				"types": [
					"bug",
					"grass"
				]
			},
			{
				"name": "Wormadam Sandy",
				"types": [
					"bug",
					"ground"
				],
				"spriteSuffix": "sandy"
			},
			{
				"name": "Wormadam Trash",
				"types": [
					"bug",
					"steel"
				],
				"spriteSuffix": "trash"
			}
		]
	},
	{
		"id": 414,
		"name": "Mothim",
		"types": [
			"bug",
			"flying"
		]
	},
	{
		"id": 415,
		"name": "Combee",
		"isNfe": true,
		"types": [
			"bug",
			"flying"
		]
	},
	{
		"id": 416,
		"name": "Vespiquen",
		"types": [
			"bug",
			"flying"
		]
	},
	{
		"id": 417,
		"name": "Pachirisu",
		"types": [
			"electric"
		]
	},
	{
		"id": 418,
		"name": "Buizel",
		"isNfe": true,
		"types": [
			"water"
		]
	},
	{
		"id": 419,
		"name": "Floatzel",
		"types": [
			"water"
		]
	},
	{
		"id": 420,
		"name": "Cherubi",
		"isNfe": true,
		"types": [
			"grass"
		]
	},
	{
		"id": 421,
		"name": "Cherrim",
		"types": [
			"grass"
		],
		"forms": [
			{
				"name": "Cherrim",
				"types": [
					"grass"
				]
			},
			{
				"name": "Cherrim",
				"types": [
					"grass"
				],
				"spriteSuffix": "sunshine"
			}
		]
	},
	{
		"id": 422,
		"name": "Shellos",
		"isNfe": true,
		"types": [
			"water"
		],
		"forms": [
			{
				"name": "Shellos",
				"isNfe": true,
				"types": [
					"water"
				]
			},
			{
				"name": "Shellos",
				"isNfe": true,
				"types": [
					"water"
				],
				"spriteSuffix": "east"
			}
		]
	},
	{
		"id": 423,
		"name": "Gastrodon",
		"types": [
			"water",
			"ground"
		],
		"forms": [
			{
				"name": "Gastrodon",
				"types": [
					"water",
					"ground"
				]
			},
			{
				"name": "Gastrodon",
				"types": [
					"water",
					"ground"
				],
				"spriteSuffix": "east"
			}
		]
	},
	{
		"id": 424,
		"name": "Ambipom",
		"types": [
			"normal"
		]
	},
	{
		"id": 425,
		"name": "Drifloon",
		"isNfe": true,
		"types": [
			"ghost",
			"flying"
		]
	},
	{
		"id": 426,
		"name": "Drifblim",
		"types": [
			"ghost",
			"flying"
		]
	},
	{
		"id": 427,
		"name": "Buneary",
		"isNfe": true,
		"types": [
			"normal"
		]
	},
	{
		"id": 428,
		"name": "Lopunny",
		"types": [
			"normal"
		],
		"forms": [
			{
				"name": "Lopunny",
				"types": [
					"normal"
				]
			},
			{
				"name": "Lopunny Mega",
				"types": [
					"normal",
					"fighting"
				],
				"spriteSuffix": "mega",
				"isMega": true
			}
		]
	},
	{
		"id": 429,
		"name": "Mismagius",
		"types": [
			"ghost"
		]
	},
	{
		"id": 430,
		"name": "Honchkrow",
		"types": [
			"dark",
			"flying"
		]
	},
	{
		"id": 431,
		"name": "Glameow",
		"isNfe": true,
		"types": [
			"normal"
		]
	},
	{
		"id": 432,
		"name": "Purugly",
		"types": [
			"normal"
		]
	},
	{
		"id": 433,
		"name": "Chingling",
		"isNfe": true,
		"types": [
			"psychic"
		]
	},
	{
		"id": 434,
		"name": "Stunky",
		"isNfe": true,
		"types": [
			"poison",
			"dark"
		]
	},
	{
		"id": 435,
		"name": "Skuntank",
		"types": [
			"poison",
			"dark"
		]
	},
	{
		"id": 436,
		"name": "Bronzor",
		"isNfe": true,
		"types": [
			"steel",
			"psychic"
		]
	},
	{
		"id": 437,
		"name": "Bronzong",
		"types": [
			"steel",
			"psychic"
		]
	},
	{
		"id": 438,
		"name": "Bonsly",
		"isNfe": true,
		"types": [
			"rock"
		]
	},
	{
		"id": 439,
		"name": "Mime Jr.",
		"isNfe": true,
		"types": [
			"psychic",
			"fairy"
		]
	},
	{
		"id": 440,
		"name": "Happiny",
		"isNfe": true,
		"types": [
			"normal"
		]
	},
	{
		"id": 441,
		"name": "Chatot",
		"types": [
			"normal",
			"flying"
		]
	},
	{
		"id": 442,
		"name": "Spiritomb",
		"types": [
			"ghost",
			"dark"
		]
	},
	{
		"id": 443,
		"name": "Gible",
		"isNfe": true,
		"types": [
			"dragon",
			"ground"
		]
	},
	{
		"id": 444,
		"name": "Gabite",
		"isNfe": true,
		"types": [
			"dragon",
			"ground"
		]
	},
	{
		"id": 445,
		"name": "Garchomp",
		"types": [
			"dragon",
			"ground"
		],
		"forms": [
			{
				"name": "Garchomp",
				"types": [
					"dragon",
					"ground"
				]
			},
			{
				"name": "Garchomp Mega",
				"types": [
					"dragon",
					"ground"
				],
				"spriteSuffix": "mega",
				"isMega": true
			}
		]
	},
	{
		"id": 446,
		"name": "Munchlax",
		"isNfe": true,
		"types": [
			"normal"
		]
	},
	{
		"id": 447,
		"name": "Riolu",
		"isNfe": true,
		"types": [
			"fighting"
		]
	},
	{
		"id": 448,
		"name": "Lucario",
		"types": [
			"fighting",
			"steel"
		],
		"forms": [
			{
				"name": "Lucario",
				"types": [
					"fighting",
					"steel"
				]
			},
			{
				"name": "Lucario Mega",
				"types": [
					"fighting",
					"steel"
				],
				"spriteSuffix": "mega",
				"isMega": true
			}
		]
	},
	{
		"id": 449,
		"name": "Hippopotas",
		"isNfe": true,
		"types": [
			"ground"
		]
	},
	{
		"id": 450,
		"name": "Hippowdon",
		"types": [
			"ground"
		],
		"forms": [
			{
				"name": "Hippowdon",
				"types": [
					"ground"
				]
			},
			{
				"name": "Hippowdon",
				"types": [
					"ground"
				],
				"spriteSuffix": "f"
			}
		]
	},
	{
		"id": 451,
		"name": "Skorupi",
		"isNfe": true,
		"types": [
			"poison",
			"bug"
		]
	},
	{
		"id": 452,
		"name": "Drapion",
		"types": [
			"poison",
			"dark"
		]
	},
	{
		"id": 453,
		"name": "Croagunk",
		"isNfe": true,
		"types": [
			"poison",
			"fighting"
		]
	},
	{
		"id": 454,
		"name": "Toxicroak",
		"types": [
			"poison",
			"fighting"
		]
	},
	{
		"id": 455,
		"name": "Carnivine",
		"types": [
			"grass"
		]
	},
	{
		"id": 456,
		"name": "Finneon",
		"isNfe": true,
		"types": [
			"water"
		]
	},
	{
		"id": 457,
		"name": "Lumineon",
		"types": [
			"water"
		]
	},
	{
		"id": 458,
		"name": "Mantyke",
		"isNfe": true,
		"types": [
			"water",
			"flying"
		]
	},
	{
		"id": 459,
		"name": "Snover",
		"isNfe": true,
		"types": [
			"grass",
			"ice"
		]
	},
	{
		"id": 460,
		"name": "Abomasnow",
		"types": [
			"grass",
			"ice"
		],
		"forms": [
			{
				"name": "Abomasnow",
				"types": [
					"grass",
					"ice"
				]
			},
			{
				"name": "Abomasnow Mega",
				"types": [
					"grass",
					"ice"
				],
				"spriteSuffix": "mega",
				"isMega": true
			}
		]
	},
	{
		"id": 461,
		"name": "Weavile",
		"types": [
			"dark",
			"ice"
		]
	},
	{
		"id": 462,
		"name": "Magnezone",
		"types": [
			"electric",
			"steel"
		]
	},
	{
		"id": 463,
		"name": "Lickilicky",
		"types": [
			"normal"
		]
	},
	{
		"id": 464,
		"name": "Rhyperior",
		"types": [
			"ground",
			"rock"
		]
	},
	{
		"id": 465,
		"name": "Tangrowth",
		"types": [
			"grass"
		]
	},
	{
		"id": 466,
		"name": "Electivire",
		"types": [
			"electric"
		]
	},
	{
		"id": 467,
		"name": "Magmortar",
		"types": [
			"fire"
		]
	},
	{
		"id": 468,
		"name": "Togekiss",
		"types": [
			"fairy",
			"flying"
		]
	},
	{
		"id": 469,
		"name": "Yanmega",
		"types": [
			"bug",
			"flying"
		]
	},
	{
		"id": 470,
		"name": "Leafeon",
		"types": [
			"grass"
		]
	},
	{
		"id": 471,
		"name": "Glaceon",
		"types": [
			"ice"
		]
	},
	{
		"id": 472,
		"name": "Gliscor",
		"types": [
			"ground",
			"flying"
		]
	},
	{
		"id": 473,
		"name": "Mamoswine",
		"types": [
			"ice",
			"ground"
		]
	},
	{
		"id": 474,
		"name": "Porygon-Z",
		"types": [
			"normal"
		]
	},
	{
		"id": 475,
		"name": "Gallade",
		"types": [
			"psychic",
			"fighting"
		],
		"forms": [
			{
				"name": "Gallade",
				"types": [
					"psychic",
					"fighting"
				]
			},
			{
				"name": "Gallade Mega",
				"types": [
					"psychic",
					"fighting"
				],
				"spriteSuffix": "mega",
				"isMega": true
			}
		]
	},
	{
		"id": 476,
		"name": "Probopass",
		"types": [
			"rock",
			"steel"
		]
	},
	{
		"id": 477,
		"name": "Dusknoir",
		"types": [
			"ghost"
		]
	},
	{
		"id": 478,
		"name": "Froslass",
		"types": [
			"ice",
			"ghost"
		]
	},
	{
		"id": 479,
		"name": "Rotom",
		"types": [
			"electric",
			"ghost"
		],
		"forms": [
			{
				"name": "Rotom",
				"types": [
					"electric",
					"ghost"
				]
			},
			{
				"name": "Rotom Fan",
				"types": [
					"electric",
					"flying"
				],
				"spriteSuffix": "fan"
			},
			{
				"name": "Rotom Frost",
				"types": [
					"electric",
					"ice"
				],
				"spriteSuffix": "frost"
			},
			{
				"name": "Rotom Heat",
				"types": [
					"electric",
					"fire"
				],
				"spriteSuffix": "heat"
			},
			{
				"name": "Rotom Mow",
				"types": [
					"electric",
					"grass"
				],
				"spriteSuffix": "mow"
			},
			{
				"name": "Rotom Wash",
				"types": [
					"electric",
					"water"
				],
				"spriteSuffix": "wash"
			}
		]
	},
	{
		"id": 480,
		"name": "Uxie",
		"types": [
			"psychic"
		],
		"isLegendary": true
	},
	{
		"id": 481,
		"name": "Mesprit",
		"types": [
			"psychic"
		],
		"isLegendary": true
	},
	{
		"id": 482,
		"name": "Azelf",
		"types": [
			"psychic"
		],
		"isLegendary": true
	},
	{
		"id": 483,
		"name": "Dialga",
		"types": [
			"steel",
			"dragon"
		],
		"isLegendary": true,
		"forms": [
			{
				"name": "Dialga",
				"types": [
					"steel",
					"dragon"
				]
			},
			{
				"name": "Dialga",
				"types": [
					"steel",
					"dragon"
				],
				"spriteSuffix": "origin"
			}
		]
	},
	{
		"id": 484,
		"name": "Palkia",
		"types": [
			"water",
			"dragon"
		],
		"isLegendary": true,
		"forms": [
			{
				"name": "Palkia",
				"types": [
					"water",
					"dragon"
				]
			},
			{
				"name": "Palkia",
				"types": [
					"water",
					"dragon"
				],
				"spriteSuffix": "origin"
			}
		]
	},
	{
		"id": 485,
		"name": "Heatran",
		"types": [
			"fire",
			"steel"
		],
		"isLegendary": true
	},
	{
		"id": 486,
		"name": "Regigigas",
		"types": [
			"normal"
		],
		"isLegendary": true
	},
	{
		"id": 487,
		"name": "Giratina",
		"types": [
			"ghost",
			"dragon"
		],
		"forms": [
			{
				"name": "Giratina",
				"types": [
					"ghost",
					"dragon"
				]
			},
			{
				"name": "Giratina Origin",
				"types": [
					"ghost",
					"dragon"
				],
				"spriteSuffix": "origin"
			}
		],
		"isLegendary": true
	},
	{
		"id": 488,
		"name": "Cresselia",
		"types": [
			"psychic"
		],
		"isLegendary": true
	},
	{
		"id": 489,
		"name": "Phione",
		"isNfe": true,
		"types": [
			"water"
		],
		"isLegendary": true
	},
	{
		"id": 490,
		"name": "Manaphy",
		"types": [
			"water"
		],
		"isLegendary": true
	},
	{
		"id": 491,
		"name": "Darkrai",
		"types": [
			"dark"
		],
		"isLegendary": true
	},
	{
		"id": 492,
		"name": "Shaymin",
		"types": [
			"grass"
		],
		"forms": [
			{
				"name": "Shaymin",
				"types": [
					"grass"
				]
			},
			{
				"name": "Shaymin Sky",
				"types": [
					"grass",
					"flying"
				],
				"spriteSuffix": "sky"
			}
		],
		"isLegendary": true
	},
	{
		"id": 493,
		"name": "Arceus",
		"types": [
			"normal"
		],
		"forms": [
			{
				"name": "Arceus",
				"types": [
					"normal"
				]
			},
			{
				"name": "Arceus",
				"types": [
					"bug"
				],
				"spriteSuffix": "bug"
			},
			{
				"name": "Arceus",
				"types": [
					"dark"
				],
				"spriteSuffix": "dark"
			},
			{
				"name": "Arceus",
				"types": [
					"dragon"
				],
				"spriteSuffix": "dragon"
			},
			{
				"name": "Arceus",
				"types": [
					"electric"
				],
				"spriteSuffix": "electric"
			},
			{
				"name": "Arceus",
				"types": [
					"fairy"
				],
				"spriteSuffix": "fairy"
			},
			{
				"name": "Arceus",
				"types": [
					"fighting"
				],
				"spriteSuffix": "fighting"
			},
			{
				"name": "Arceus",
				"types": [
					"fire"
				],
				"spriteSuffix": "fire"
			},
			{
				"name": "Arceus",
				"types": [
					"flying"
				],
				"spriteSuffix": "flying"
			},
			{
				"name": "Arceus",
				"types": [
					"ghost"
				],
				"spriteSuffix": "ghost"
			},
			{
				"name": "Arceus",
				"types": [
					"grass"
				],
				"spriteSuffix": "grass"
			},
			{
				"name": "Arceus",
				"types": [
					"ground"
				],
				"spriteSuffix": "ground"
			},
			{
				"name": "Arceus",
				"types": [
					"ice"
				],
				"spriteSuffix": "ice"
			},
			{
				"name": "Arceus",
				"types": [
					"poison"
				],
				"spriteSuffix": "poison"
			},
			{
				"name": "Arceus",
				"types": [
					"psychic"
				],
				"spriteSuffix": "psychic"
			},
			{
				"name": "Arceus",
				"types": [
					"rock"
				],
				"spriteSuffix": "rock"
			},
			{
				"name": "Arceus",
				"types": [
					"steel"
				],
				"spriteSuffix": "steel"
			},
			{
				"name": "Arceus",
				"types": [
					"water"
				],
				"spriteSuffix": "water"
			}
		],
		"isLegendary": true
	},
	{
		"id": 494,
		"name": "Victini",
		"types": [
			"psychic",
			"fire"
		],
		"isLegendary": true
	},
	{
		"id": 495,
		"name": "Snivy",
		"isNfe": true,
		"types": [
			"grass"
		]
	},
	{
		"id": 496,
		"name": "Servine",
		"isNfe": true,
		"types": [
			"grass"
		]
	},
	{
		"id": 497,
		"name": "Serperior",
		"types": [
			"grass"
		]
	},
	{
		"id": 498,
		"name": "Tepig",
		"isNfe": true,
		"types": [
			"fire"
		]
	},
	{
		"id": 499,
		"name": "Pignite",
		"isNfe": true,
		"types": [
			"fire",
			"fighting"
		]
	},
	{
		"id": 500,
		"name": "Emboar",
		"types": [
			"fire",
			"fighting"
		]
	},
	{
		"id": 501,
		"name": "Oshawott",
		"isNfe": true,
		"types": [
			"water"
		]
	},
	{
		"id": 502,
		"name": "Dewott",
		"isNfe": true,
		"types": [
			"water"
		]
	},
	{
		"id": 503,
		"name": "Samurott",
		"types": [
			"water"
		],
		"forms": [
			{
				"name": "Samurott",
				"types": [
					"water"
				]
			},
			{
				"name": "Samurott Hisui",
				"types": [
					"water",
					"dark"
				],
				"spriteSuffix": "hisui"
			}
		]
	},
	{
		"id": 504,
		"name": "Patrat",
		"isNfe": true,
		"types": [
			"normal"
		]
	},
	{
		"id": 505,
		"name": "Watchog",
		"types": [
			"normal"
		]
	},
	{
		"id": 506,
		"name": "Lillipup",
		"isNfe": true,
		"types": [
			"normal"
		]
	},
	{
		"id": 507,
		"name": "Herdier",
		"isNfe": true,
		"types": [
			"normal"
		]
	},
	{
		"id": 508,
		"name": "Stoutland",
		"types": [
			"normal"
		]
	},
	{
		"id": 509,
		"name": "Purrloin",
		"isNfe": true,
		"types": [
			"dark"
		]
	},
	{
		"id": 510,
		"name": "Liepard",
		"types": [
			"dark"
		]
	},
	{
		"id": 511,
		"name": "Pansage",
		"isNfe": true,
		"types": [
			"grass"
		]
	},
	{
		"id": 512,
		"name": "Simisage",
		"types": [
			"grass"
		]
	},
	{
		"id": 513,
		"name": "Pansear",
		"isNfe": true,
		"types": [
			"fire"
		]
	},
	{
		"id": 514,
		"name": "Simisear",
		"types": [
			"fire"
		]
	},
	{
		"id": 515,
		"name": "Panpour",
		"isNfe": true,
		"types": [
			"water"
		]
	},
	{
		"id": 516,
		"name": "Simipour",
		"types": [
			"water"
		]
	},
	{
		"id": 517,
		"name": "Munna",
		"isNfe": true,
		"types": [
			"psychic"
		]
	},
	{
		"id": 518,
		"name": "Musharna",
		"types": [
			"psychic"
		]
	},
	{
		"id": 519,
		"name": "Pidove",
		"isNfe": true,
		"types": [
			"normal",
			"flying"
		]
	},
	{
		"id": 520,
		"name": "Tranquill",
		"isNfe": true,
		"types": [
			"normal",
			"flying"
		]
	},
	{
		"id": 521,
		"name": "Unfezant",
		"types": [
			"normal",
			"flying"
		]
	},
	{
		"id": 522,
		"name": "Blitzle",
		"isNfe": true,
		"types": [
			"electric"
		]
	},
	{
		"id": 523,
		"name": "Zebstrika",
		"types": [
			"electric"
		]
	},
	{
		"id": 524,
		"name": "Roggenrola",
		"isNfe": true,
		"types": [
			"rock"
		]
	},
	{
		"id": 525,
		"name": "Boldore",
		"isNfe": true,
		"types": [
			"rock"
		]
	},
	{
		"id": 526,
		"name": "Gigalith",
		"types": [
			"rock"
		]
	},
	{
		"id": 527,
		"name": "Woobat",
		"isNfe": true,
		"types": [
			"psychic",
			"flying"
		]
	},
	{
		"id": 528,
		"name": "Swoobat",
		"types": [
			"psychic",
			"flying"
		]
	},
	{
		"id": 529,
		"name": "Drilbur",
		"isNfe": true,
		"types": [
			"ground"
		]
	},
	{
		"id": 530,
		"name": "Excadrill",
		"types": [
			"ground",
			"steel"
		]
	},
	{
		"id": 531,
		"name": "Audino",
		"types": [
			"normal"
		],
		"forms": [
			{
				"name": "Audino",
				"types": [
					"normal"
				]
			},
			{
				"name": "Audino Mega",
				"types": [
					"normal",
					"fairy"
				],
				"spriteSuffix": "mega",
				"isMega": true
			}
		]
	},
	{
		"id": 532,
		"name": "Timburr",
		"isNfe": true,
		"types": [
			"fighting"
		]
	},
	{
		"id": 533,
		"name": "Gurdurr",
		"isNfe": true,
		"types": [
			"fighting"
		]
	},
	{
		"id": 534,
		"name": "Conkeldurr",
		"types": [
			"fighting"
		]
	},
	{
		"id": 535,
		"name": "Tympole",
		"isNfe": true,
		"types": [
			"water"
		]
	},
	{
		"id": 536,
		"name": "Palpitoad",
		"isNfe": true,
		"types": [
			"water",
			"ground"
		]
	},
	{
		"id": 537,
		"name": "Seismitoad",
		"types": [
			"water",
			"ground"
		]
	},
	{
		"id": 538,
		"name": "Throh",
		"types": [
			"fighting"
		]
	},
	{
		"id": 539,
		"name": "Sawk",
		"types": [
			"fighting"
		]
	},
	{
		"id": 540,
		"name": "Sewaddle",
		"isNfe": true,
		"types": [
			"bug",
			"grass"
		]
	},
	{
		"id": 541,
		"name": "Swadloon",
		"isNfe": true,
		"types": [
			"bug",
			"grass"
		]
	},
	{
		"id": 542,
		"name": "Leavanny",
		"types": [
			"bug",
			"grass"
		]
	},
	{
		"id": 543,
		"name": "Venipede",
		"isNfe": true,
		"types": [
			"bug",
			"poison"
		]
	},
	{
		"id": 544,
		"name": "Whirlipede",
		"isNfe": true,
		"types": [
			"bug",
			"poison"
		]
	},
	{
		"id": 545,
		"name": "Scolipede",
		"types": [
			"bug",
			"poison"
		]
	},
	{
		"id": 546,
		"name": "Cottonee",
		"isNfe": true,
		"types": [
			"grass",
			"fairy"
		]
	},
	{
		"id": 547,
		"name": "Whimsicott",
		"types": [
			"grass",
			"fairy"
		]
	},
	{
		"id": 548,
		"name": "Petilil",
		"isNfe": true,
		"types": [
			"grass"
		]
	},
	{
		"id": 549,
		"name": "Lilligant",
		"types": [
			"grass"
		],
		"forms": [
			{
				"name": "Lilligant",
				"types": [
					"grass"
				]
			},
			{
				"name": "Lilligant Hisui",
				"types": [
					"grass",
					"fighting"
				],
				"spriteSuffix": "hisui"
			}
		]
	},
	{
		"id": 550,
		"name": "Basculin",
		"isNfe": true,
		"types": [
			"water"
		],
		"forms": [
			{
				"name": "Basculin",
				"types": [
					"water"
				]
			},
			{
				"name": "Basculin",
				"types": [
					"water"
				],
				"spriteSuffix": "bluestriped"
			},
			{
				"name": "Basculin",
				"types": [
					"water"
				],
				"spriteSuffix": "whitestriped"
			}
		]
	},
	{
		"id": 551,
		"name": "Sandile",
		"isNfe": true,
		"types": [
			"ground",
			"dark"
		]
	},
	{
		"id": 552,
		"name": "Krokorok",
		"isNfe": true,
		"types": [
			"ground",
			"dark"
		]
	},
	{
		"id": 553,
		"name": "Krookodile",
		"types": [
			"ground",
			"dark"
		]
	},
	{
		"id": 554,
		"name": "Darumaka",
		"isNfe": true,
		"types": [
			"fire"
		],
		"forms": [
			{
				"name": "Darumaka",
				"isNfe": true,
				"types": [
					"fire"
				]
			},
			{
				"name": "Darumaka Galar",
				"isNfe": true,
				"types": [
					"ice"
				],
				"spriteSuffix": "galar"
			}
		]
	},
	{
		"id": 555,
		"name": "Darmanitan",
		"types": [
			"fire"
		],
		"forms": [
			{
				"name": "Darmanitan",
				"types": [
					"fire"
				]
			},
			{
				"name": "Darmanitan Galar",
				"types": [
					"ice"
				],
				"spriteSuffix": "galar"
			}
		]
	},
	{
		"id": 556,
		"name": "Maractus",
		"types": [
			"grass"
		]
	},
	{
		"id": 557,
		"name": "Dwebble",
		"isNfe": true,
		"types": [
			"bug",
			"rock"
		]
	},
	{
		"id": 558,
		"name": "Crustle",
		"types": [
			"bug",
			"rock"
		]
	},
	{
		"id": 559,
		"name": "Scraggy",
		"isNfe": true,
		"types": [
			"dark",
			"fighting"
		]
	},
	{
		"id": 560,
		"name": "Scrafty",
		"types": [
			"dark",
			"fighting"
		]
	},
	{
		"id": 561,
		"name": "Sigilyph",
		"types": [
			"psychic",
			"flying"
		]
	},
	{
		"id": 562,
		"name": "Yamask",
		"isNfe": true,
		"types": [
			"ghost"
		],
		"forms": [
			{
				"name": "Yamask",
				"isNfe": true,
				"types": [
					"ghost"
				]
			},
			{
				"name": "Yamask Galar",
				"isNfe": true,
				"types": [
					"ground",
					"ghost"
				],
				"spriteSuffix": "galar"
			}
		]
	},
	{
		"id": 563,
		"name": "Cofagrigus",
		"types": [
			"ghost"
		]
	},
	{
		"id": 564,
		"name": "Tirtouga",
		"isNfe": true,
		"types": [
			"water",
			"rock"
		]
	},
	{
		"id": 565,
		"name": "Carracosta",
		"types": [
			"water",
			"rock"
		]
	},
	{
		"id": 566,
		"name": "Archen",
		"isNfe": true,
		"types": [
			"rock",
			"flying"
		]
	},
	{
		"id": 567,
		"name": "Archeops",
		"types": [
			"rock",
			"flying"
		]
	},
	{
		"id": 568,
		"name": "Trubbish",
		"isNfe": true,
		"types": [
			"poison"
		]
	},
	{
		"id": 569,
		"name": "Garbodor",
		"types": [
			"poison"
		],
		"forms": [
			{
				"name": "Garbodor",
				"types": [
					"poison"
				]
			},
			{
				"name": "Garbodor Gigantamax",
				"types": [
					"poison"
				],
				"spriteSuffix": "gigantamax",
				"isGigantamax": true
			}
		]
	},
	{
		"id": 570,
		"name": "Zorua",
		"isNfe": true,
		"types": [
			"dark"
		],
		"forms": [
			{
				"name": "Zorua",
				"types": [
					"dark"
				],
				"isNfe": true
			},
			{
				"name": "Zorua Hisui",
				"types": [
					"normal",
					"ghost"
				],
				"isNfe": true,
				"spriteSuffix": "hisui"
			}
		]
	},
	{
		"id": 571,
		"name": "Zoroark",
		"types": [
			"dark"
		],
		"forms": [
			{
				"name": "Zoroark",
				"types": [
					"dark"
				]
			},
			{
				"name": "Zoroark Hisui",
				"types": [
					"normal",
					"ghost"
				],
				"spriteSuffix": "hisui"
			}
		]
	},
	{
		"id": 572,
		"name": "Minccino",
		"isNfe": true,
		"types": [
			"normal"
		]
	},
	{
		"id": 573,
		"name": "Cinccino",
		"types": [
			"normal"
		]
	},
	{
		"id": 574,
		"name": "Gothita",
		"isNfe": true,
		"types": [
			"psychic"
		]
	},
	{
		"id": 575,
		"name": "Gothorita",
		"isNfe": true,
		"types": [
			"psychic"
		]
	},
	{
		"id": 576,
		"name": "Gothitelle",
		"types": [
			"psychic"
		]
	},
	{
		"id": 577,
		"name": "Solosis",
		"isNfe": true,
		"types": [
			"psychic"
		]
	},
	{
		"id": 578,
		"name": "Duosion",
		"isNfe": true,
		"types": [
			"psychic"
		]
	},
	{
		"id": 579,
		"name": "Reuniclus",
		"types": [
			"psychic"
		]
	},
	{
		"id": 580,
		"name": "Ducklett",
		"isNfe": true,
		"types": [
			"water",
			"flying"
		]
	},
	{
		"id": 581,
		"name": "Swanna",
		"types": [
			"water",
			"flying"
		]
	},
	{
		"id": 582,
		"name": "Vanillite",
		"isNfe": true,
		"types": [
			"ice"
		]
	},
	{
		"id": 583,
		"name": "Vanillish",
		"isNfe": true,
		"types": [
			"ice"
		]
	},
	{
		"id": 584,
		"name": "Vanilluxe",
		"types": [
			"ice"
		]
	},
	{
		"id": 585,
		"name": "Deerling",
		"isNfe": true,
		"types": [
			"normal",
			"grass"
		],
		"forms": [
			{
				"name": "Deerling",
				"isNfe": true,
				"types": [
					"normal",
					"grass"
				]
			},
			{
				"name": "Deerling",
				"isNfe": true,
				"types": [
					"normal",
					"grass"
				],
				"spriteSuffix": "autumn"
			},
			{
				"name": "Deerling",
				"isNfe": true,
				"types": [
					"normal",
					"grass"
				],
				"spriteSuffix": "summer"
			},
			{
				"name": "Deerling",
				"isNfe": true,
				"types": [
					"normal",
					"grass"
				],
				"spriteSuffix": "winter"
			}
		]
	},
	{
		"id": 586,
		"name": "Sawsbuck",
		"types": [
			"normal",
			"grass"
		],
		"forms": [
			{
				"name": "Sawsbuck",
				"types": [
					"normal",
					"grass"
				]
			},
			{
				"name": "Sawsbuck",
				"types": [
					"normal",
					"grass"
				],
				"spriteSuffix": "autumn"
			},
			{
				"name": "Sawsbuck",
				"types": [
					"normal",
					"grass"
				],
				"spriteSuffix": "summer"
			},
			{
				"name": "Sawsbuck",
				"types": [
					"normal",
					"grass"
				],
				"spriteSuffix": "winter"
			}
		]
	},
	{
		"id": 587,
		"name": "Emolga",
		"types": [
			"electric",
			"flying"
		]
	},
	{
		"id": 588,
		"name": "Karrablast",
		"isNfe": true,
		"types": [
			"bug"
		]
	},
	{
		"id": 589,
		"name": "Escavalier",
		"types": [
			"bug",
			"steel"
		]
	},
	{
		"id": 590,
		"name": "Foongus",
		"isNfe": true,
		"types": [
			"grass",
			"poison"
		]
	},
	{
		"id": 591,
		"name": "Amoonguss",
		"types": [
			"grass",
			"poison"
		]
	},
	{
		"id": 592,
		"name": "Frillish",
		"isNfe": true,
		"types": [
			"water",
			"ghost"
		],
		"forms": [
			{
				"name": "Frillish",
				"isNfe": true,
				"types": [
					"water",
					"ghost"
				]
			},
			{
				"name": "Frillish",
				"isNfe": true,
				"types": [
					"water",
					"ghost"
				],
				"spriteSuffix": "f"
			}
		]
	},
	{
		"id": 593,
		"name": "Jellicent",
		"types": [
			"water",
			"ghost"
		],
		"forms": [
			{
				"name": "Jellicent",
				"types": [
					"water",
					"ghost"
				],
				"spriteSuffix": "f"
			},
			{
				"name": "Jellicent",
				"types": [
					"water",
					"ghost"
				]
			}
		]
	},
	{
		"id": 594,
		"name": "Alomomola",
		"types": [
			"water"
		]
	},
	{
		"id": 595,
		"name": "Joltik",
		"isNfe": true,
		"types": [
			"bug",
			"electric"
		]
	},
	{
		"id": 596,
		"name": "Galvantula",
		"types": [
			"bug",
			"electric"
		]
	},
	{
		"id": 597,
		"name": "Ferroseed",
		"isNfe": true,
		"types": [
			"grass",
			"steel"
		]
	},
	{
		"id": 598,
		"name": "Ferrothorn",
		"types": [
			"grass",
			"steel"
		]
	},
	{
		"id": 599,
		"name": "Klink",
		"isNfe": true,
		"types": [
			"steel"
		]
	},
	{
		"id": 600,
		"name": "Klang",
		"isNfe": true,
		"types": [
			"steel"
		]
	},
	{
		"id": 601,
		"name": "Klinklang",
		"types": [
			"steel"
		]
	},
	{
		"id": 602,
		"name": "Tynamo",
		"isNfe": true,
		"types": [
			"electric"
		]
	},
	{
		"id": 603,
		"name": "Eelektrik",
		"isNfe": true,
		"types": [
			"electric"
		]
	},
	{
		"id": 604,
		"name": "Eelektross",
		"types": [
			"electric"
		]
	},
	{
		"id": 605,
		"name": "Elgyem",
		"isNfe": true,
		"types": [
			"psychic"
		]
	},
	{
		"id": 606,
		"name": "Beheeyem",
		"types": [
			"psychic"
		]
	},
	{
		"id": 607,
		"name": "Litwick",
		"isNfe": true,
		"types": [
			"ghost",
			"fire"
		]
	},
	{
		"id": 608,
		"name": "Lampent",
		"isNfe": true,
		"types": [
			"ghost",
			"fire"
		]
	},
	{
		"id": 609,
		"name": "Chandelure",
		"types": [
			"ghost",
			"fire"
		]
	},
	{
		"id": 610,
		"name": "Axew",
		"isNfe": true,
		"types": [
			"dragon"
		]
	},
	{
		"id": 611,
		"name": "Fraxure",
		"isNfe": true,
		"types": [
			"dragon"
		]
	},
	{
		"id": 612,
		"name": "Haxorus",
		"types": [
			"dragon"
		]
	},
	{
		"id": 613,
		"name": "Cubchoo",
		"isNfe": true,
		"types": [
			"ice"
		]
	},
	{
		"id": 614,
		"name": "Beartic",
		"types": [
			"ice"
		]
	},
	{
		"id": 615,
		"name": "Cryogonal",
		"types": [
			"ice"
		]
	},
	{
		"id": 616,
		"name": "Shelmet",
		"isNfe": true,
		"types": [
			"bug"
		]
	},
	{
		"id": 617,
		"name": "Accelgor",
		"types": [
			"bug"
		]
	},
	{
		"id": 618,
		"name": "Stunfisk",
		"types": [
			"ground",
			"electric"
		],
		"forms": [
			{
				"name": "Stunfisk",
				"types": [
					"ground",
					"electric"
				]
			},
			{
				"name": "Stunfisk Galar",
				"types": [
					"ground",
					"steel"
				],
				"spriteSuffix": "galar"
			}
		]
	},
	{
		"id": 619,
		"name": "Mienfoo",
		"isNfe": true,
		"types": [
			"fighting"
		]
	},
	{
		"id": 620,
		"name": "Mienshao",
		"types": [
			"fighting"
		]
	},
	{
		"id": 621,
		"name": "Druddigon",
		"types": [
			"dragon"
		]
	},
	{
		"id": 622,
		"name": "Golett",
		"isNfe": true,
		"types": [
			"ground",
			"ghost"
		]
	},
	{
		"id": 623,
		"name": "Golurk",
		"types": [
			"ground",
			"ghost"
		]
	},
	{
		"id": 624,
		"name": "Pawniard",
		"isNfe": true,
		"types": [
			"dark",
			"steel"
		]
	},
	{
		"id": 625,
		"name": "Bisharp",
		"types": [
			"dark",
			"steel"
		]
	},
	{
		"id": 626,
		"name": "Bouffalant",
		"types": [
			"normal"
		]
	},
	{
		"id": 627,
		"name": "Rufflet",
		"isNfe": true,
		"types": [
			"normal",
			"flying"
		]
	},
	{
		"id": 628,
		"name": "Braviary",
		"types": [
			"normal",
			"flying"
		],
		"forms": [
			{
				"name": "Braviary",
				"types": [
					"normal",
					"flying"
				]
			},
			{
				"name": "Braviary Hisui",
				"types": [
					"psychic",
					"flying"
				],
				"spriteSuffix": "hisui"
			}
		]
	},
	{
		"id": 629,
		"name": "Vullaby",
		"isNfe": true,
		"types": [
			"dark",
			"flying"
		]
	},
	{
		"id": 630,
		"name": "Mandibuzz",
		"types": [
			"dark",
			"flying"
		]
	},
	{
		"id": 631,
		"name": "Heatmor",
		"types": [
			"fire"
		]
	},
	{
		"id": 632,
		"name": "Durant",
		"types": [
			"bug",
			"steel"
		]
	},
	{
		"id": 633,
		"name": "Deino",
		"isNfe": true,
		"types": [
			"dark",
			"dragon"
		]
	},
	{
		"id": 634,
		"name": "Zweilous",
		"isNfe": true,
		"types": [
			"dark",
			"dragon"
		]
	},
	{
		"id": 635,
		"name": "Hydreigon",
		"types": [
			"dark",
			"dragon"
		]
	},
	{
		"id": 636,
		"name": "Larvesta",
		"isNfe": true,
		"types": [
			"bug",
			"fire"
		]
	},
	{
		"id": 637,
		"name": "Volcarona",
		"types": [
			"bug",
			"fire"
		]
	},
	{
		"id": 638,
		"name": "Cobalion",
		"types": [
			"steel",
			"fighting"
		],
		"isLegendary": true
	},
	{
		"id": 639,
		"name": "Terrakion",
		"types": [
			"rock",
			"fighting"
		],
		"isLegendary": true
	},
	{
		"id": 640,
		"name": "Virizion",
		"types": [
			"grass",
			"fighting"
		],
		"isLegendary": true
	},
	{
		"id": 641,
		"name": "Tornadus",
		"types": [
			"flying"
		],
		"forms": [
			{
				"name": "Tornadus",
				"types": [
					"flying"
				]
			},
			{
				"name": "Tornadus Therian",
				"types": [
					"flying"
				],
				"spriteSuffix": "therian"
			}
		],
		"isLegendary": true
	},
	{
		"id": 642,
		"name": "Thundurus",
		"types": [
			"electric",
			"flying"
		],
		"forms": [
			{
				"name": "Thundurus",
				"types": [
					"electric",
					"flying"
				]
			},
			{
				"name": "Thundurus Therian",
				"types": [
					"electric",
					"flying"
				],
				"spriteSuffix": "therian"
			}
		],
		"isLegendary": true
	},
	{
		"id": 643,
		"name": "Reshiram",
		"types": [
			"dragon",
			"fire"
		],
		"isLegendary": true
	},
	{
		"id": 644,
		"name": "Zekrom",
		"types": [
			"dragon",
			"electric"
		],
		"isLegendary": true
	},
	{
		"id": 645,
		"name": "Landorus",
		"types": [
			"ground",
			"flying"
		],
		"forms": [
			{
				"name": "Landorus",
				"types": [
					"ground",
					"flying"
				]
			},
			{
				"name": "Landorus Therian",
				"types": [
					"ground",
					"flying"
				],
				"spriteSuffix": "therian"
			}
		],
		"isLegendary": true
	},
	{
		"id": 646,
		"name": "Kyurem",
		"types": [
			"dragon",
			"ice"
		],
		"forms": [
			{
				"name": "Kyurem",
				"types": [
					"dragon",
					"ice"
				]
			},
			{
				"name": "Kyurem Black",
				"types": [
					"dragon",
					"ice"
				],
				"spriteSuffix": "black"
			},
			{
				"name": "Kyurem White",
				"types": [
					"dragon",
					"ice"
				],
				"spriteSuffix": "white"
			}
		],
		"isLegendary": true
	},
	{
		"id": 647,
		"name": "Keldeo",
		"types": [
			"water",
			"fighting"
		],
		"forms": [
			{
				"name": "Keldeo",
				"types": [
					"water",
					"fighting"
				]
			},
			{
				"name": "Keldeo",
				"types": [
					"water",
					"fighting"
				],
				"spriteSuffix": "resolute"
			}
		],
		"isLegendary": true
	},
	{
		"id": 648,
		"name": "Meloetta",
		"types": [
			"normal",
			"psychic"
		],
		"forms": [
			{
				"name": "Meloetta",
				"types": [
					"normal",
					"psychic"
				]
			},
			{
				"name": "Meloetta Pirouette",
				"types": [
					"normal",
					"fighting"
				],
				"spriteSuffix": "pirouette"
			}
		],
		"isLegendary": true
	},
	{
		"id": 649,
		"name": "Genesect",
		"types": [
			"bug",
			"steel"
		],
		"forms": [
			{
				"name": "Genesect",
				"types": [
					"bug",
					"steel"
				]
			},
			{
				"name": "Genesect",
				"types": [
					"bug",
					"steel"
				],
				"spriteSuffix": "burn"
			},
			{
				"name": "Genesect",
				"types": [
					"bug",
					"steel"
				],
				"spriteSuffix": "chill"
			},
			{
				"name": "Genesect",
				"types": [
					"bug",
					"steel"
				],
				"spriteSuffix": "douse"
			},
			{
				"name": "Genesect",
				"types": [
					"bug",
					"steel"
				],
				"spriteSuffix": "shock"
			}
		],
		"isLegendary": true
	},
	{
		"id": 650,
		"name": "Chespin",
		"isNfe": true,
		"types": [
			"grass"
		]
	},
	{
		"id": 651,
		"name": "Quilladin",
		"isNfe": true,
		"types": [
			"grass"
		]
	},
	{
		"id": 652,
		"name": "Chesnaught",
		"types": [
			"grass",
			"fighting"
		]
	},
	{
		"id": 653,
		"name": "Fennekin",
		"isNfe": true,
		"types": [
			"fire"
		]
	},
	{
		"id": 654,
		"name": "Braixen",
		"isNfe": true,
		"types": [
			"fire"
		]
	},
	{
		"id": 655,
		"name": "Delphox",
		"types": [
			"fire",
			"psychic"
		]
	},
	{
		"id": 656,
		"name": "Froakie",
		"isNfe": true,
		"types": [
			"water"
		]
	},
	{
		"id": 657,
		"name": "Frogadier",
		"isNfe": true,
		"types": [
			"water"
		]
	},
	{
		"id": 658,
		"name": "Greninja",
		"types": [
			"water",
			"dark"
		],
		"forms": [
			{
				"name": "Greninja",
				"types": [
					"water",
					"dark"
				]
			},
			{
				"name": "Ash's Greninja",
				"types": [
					"water",
					"dark"
				],
				"spriteSuffix": "ash"
			}
		]
	},
	{
		"id": 659,
		"name": "Bunnelby",
		"isNfe": true,
		"types": [
			"normal"
		]
	},
	{
		"id": 660,
		"name": "Diggersby",
		"types": [
			"normal",
			"ground"
		]
	},
	{
		"id": 661,
		"name": "Fletchling",
		"isNfe": true,
		"types": [
			"normal",
			"flying"
		]
	},
	{
		"id": 662,
		"name": "Fletchinder",
		"isNfe": true,
		"types": [
			"fire",
			"flying"
		]
	},
	{
		"id": 663,
		"name": "Talonflame",
		"types": [
			"fire",
			"flying"
		]
	},
	{
		"id": 664,
		"name": "Scatterbug",
		"isNfe": true,
		"types": [
			"bug"
		]
	},
	{
		"id": 665,
		"name": "Spewpa",
		"isNfe": true,
		"types": [
			"bug"
		]
	},
	{
		"id": 666,
		"name": "Vivillon",
		"types": [
			"bug",
			"flying"
		],
		"forms": [
			{
				"name": "Vivillon",
				"types": [
					"bug",
					"flying"
				]
			},
			{
				"name": "Vivillon",
				"types": [
					"bug",
					"flying"
				],
				"spriteSuffix": "archipelago"
			},
			{
				"name": "Vivillon",
				"types": [
					"bug",
					"flying"
				],
				"spriteSuffix": "continental"
			},
			{
				"name": "Vivillon",
				"types": [
					"bug",
					"flying"
				],
				"spriteSuffix": "elegant"
			},
			{
				"name": "Vivillon",
				"types": [
					"bug",
					"flying"
				],
				"spriteSuffix": "fancy"
			},
			{
				"name": "Vivillon",
				"types": [
					"bug",
					"flying"
				],
				"spriteSuffix": "garden"
			},
			{
				"name": "Vivillon",
				"types": [
					"bug",
					"flying"
				],
				"spriteSuffix": "highplains"
			},
			{
				"name": "Vivillon",
				"types": [
					"bug",
					"flying"
				],
				"spriteSuffix": "icysnow"
			},
			{
				"name": "Vivillon",
				"types": [
					"bug",
					"flying"
				],
				"spriteSuffix": "jungle"
			},
			{
				"name": "Vivillon",
				"types": [
					"bug",
					"flying"
				],
				"spriteSuffix": "marine"
			},
			{
				"name": "Vivillon",
				"types": [
					"bug",
					"flying"
				],
				"spriteSuffix": "modern"
			},
			{
				"name": "Vivillon",
				"types": [
					"bug",
					"flying"
				],
				"spriteSuffix": "monsoon"
			},
			{
				"name": "Vivillon",
				"types": [
					"bug",
					"flying"
				],
				"spriteSuffix": "ocean"
			},
			{
				"name": "Vivillon",
				"types": [
					"bug",
					"flying"
				],
				"spriteSuffix": "pokeball"
			},
			{
				"name": "Vivillon",
				"types": [
					"bug",
					"flying"
				],
				"spriteSuffix": "polar"
			},
			{
				"name": "Vivillon",
				"types": [
					"bug",
					"flying"
				],
				"spriteSuffix": "river"
			},
			{
				"name": "Vivillon",
				"types": [
					"bug",
					"flying"
				],
				"spriteSuffix": "sandstorm"
			},
			{
				"name": "Vivillon",
				"types": [
					"bug",
					"flying"
				],
				"spriteSuffix": "savanna"
			},
			{
				"name": "Vivillon",
				"types": [
					"bug",
					"flying"
				],
				"spriteSuffix": "sun"
			},
			{
				"name": "Vivillon",
				"types": [
					"bug",
					"flying"
				],
				"spriteSuffix": "tundra"
			}
		]
	},
	{
		"id": 667,
		"name": "Litleo",
		"isNfe": true,
		"types": [
			"fire",
			"normal"
		]
	},
	{
		"id": 668,
		"name": "Pyroar",
		"types": [
			"fire",
			"normal"
		],
		"forms": [
			{
				"name": "Pyroar",
				"types": [
					"fire",
					"normal"
				],
				"spriteSuffix": "f"
			},
			{
				"name": "Pyroar",
				"types": [
					"fire",
					"normal"
				]
			}
		]
	},
	{
		"id": 669,
		"name": "Flab\u00e9b\u00e9",
		"isNfe": true,
		"types": [
			"fairy"
		],
		"forms": [
			{
				"name": "Flab\u00e9b\u00e9",
				"isNfe": true,
				"types": [
					"fairy"
				]
			},
			{
				"name": "Flab\u00e9b\u00e9",
				"isNfe": true,
				"types": [
					"fairy"
				],
				"spriteSuffix": "blue"
			},
			{
				"name": "Flab\u00e9b\u00e9",
				"isNfe": true,
				"types": [
					"fairy"
				],
				"spriteSuffix": "orange"
			},
			{
				"name": "Flab\u00e9b\u00e9",
				"isNfe": true,
				"types": [
					"fairy"
				],
				"spriteSuffix": "white"
			},
			{
				"name": "Flab\u00e9b\u00e9",
				"isNfe": true,
				"types": [
					"fairy"
				],
				"spriteSuffix": "yellow"
			}
		]
	},
	{
		"id": 670,
		"name": "Floette",
		"isNfe": true,
		"types": [
			"fairy"
		],
		"forms": [
			{
				"name": "Floette",
				"isNfe": true,
				"types": [
					"fairy"
				]
			},
			{
				"name": "Floette",
				"isNfe": true,
				"types": [
					"fairy"
				],
				"spriteSuffix": "blue"
			},
			{
				"name": "Floette",
				"isNfe": true,
				"types": [
					"fairy"
				],
				"spriteSuffix": "eternal"
			},
			{
				"name": "Floette",
				"isNfe": true,
				"types": [
					"fairy"
				],
				"spriteSuffix": "orange"
			},
			{
				"name": "Floette",
				"isNfe": true,
				"types": [
					"fairy"
				],
				"spriteSuffix": "white"
			},
			{
				"name": "Floette",
				"isNfe": true,
				"types": [
					"fairy"
				],
				"spriteSuffix": "yellow"
			}
		]
	},
	{
		"id": 671,
		"name": "Florges",
		"types": [
			"fairy"
		],
		"forms": [
			{
				"name": "Florges",
				"types": [
					"fairy"
				]
			},
			{
				"name": "Florges",
				"types": [
					"fairy"
				],
				"spriteSuffix": "blue"
			},
			{
				"name": "Florges",
				"types": [
					"fairy"
				],
				"spriteSuffix": "orange"
			},
			{
				"name": "Florges",
				"types": [
					"fairy"
				],
				"spriteSuffix": "white"
			},
			{
				"name": "Florges",
				"types": [
					"fairy"
				],
				"spriteSuffix": "yellow"
			}
		]
	},
	{
		"id": 672,
		"name": "Skiddo",
		"isNfe": true,
		"types": [
			"grass"
		]
	},
	{
		"id": 673,
		"name": "Gogoat",
		"types": [
			"grass"
		]
	},
	{
		"id": 674,
		"name": "Pancham",
		"isNfe": true,
		"types": [
			"fighting"
		]
	},
	{
		"id": 675,
		"name": "Pangoro",
		"types": [
			"fighting",
			"dark"
		]
	},
	{
		"id": 676,
		"name": "Furfrou",
		"types": [
			"normal"
		]
	},
	{
		"id": 677,
		"name": "Espurr",
		"isNfe": true,
		"types": [
			"psychic"
		]
	},
	{
		"id": 678,
		"name": "Meowstic",
		"types": [
			"psychic"
		],
		"forms": [
			{
				"name": "Meowstic",
				"types": [
					"psychic"
				]
			},
			{
				"name": "Meowstic",
				"types": [
					"psychic"
				],
				"spriteSuffix": "f"
			}
		]
	},
	{
		"id": 679,
		"name": "Honedge",
		"isNfe": true,
		"types": [
			"steel",
			"ghost"
		]
	},
	{
		"id": 680,
		"name": "Doublade",
		"isNfe": true,
		"types": [
			"steel",
			"ghost"
		]
	},
	{
		"id": 681,
		"name": "Aegislash",
		"types": [
			"steel",
			"ghost"
		],
		"forms": [
			{
				"name": "Aegislash",
				"types": [
					"steel",
					"ghost"
				]
			},
			{
				"name": "Aegislash",
				"types": [
					"steel",
					"ghost"
				],
				"spriteSuffix": "blade"
			}
		]
	},
	{
		"id": 682,
		"name": "Spritzee",
		"isNfe": true,
		"types": [
			"fairy"
		]
	},
	{
		"id": 683,
		"name": "Aromatisse",
		"types": [
			"fairy"
		]
	},
	{
		"id": 684,
		"name": "Swirlix",
		"isNfe": true,
		"types": [
			"fairy"
		]
	},
	{
		"id": 685,
		"name": "Slurpuff",
		"types": [
			"fairy"
		]
	},
	{
		"id": 686,
		"name": "Inkay",
		"isNfe": true,
		"types": [
			"dark",
			"psychic"
		]
	},
	{
		"id": 687,
		"name": "Malamar",
		"types": [
			"dark",
			"psychic"
		]
	},
	{
		"id": 688,
		"name": "Binacle",
		"isNfe": true,
		"types": [
			"rock",
			"water"
		]
	},
	{
		"id": 689,
		"name": "Barbaracle",
		"types": [
			"rock",
			"water"
		]
	},
	{
		"id": 690,
		"name": "Skrelp",
		"isNfe": true,
		"types": [
			"poison",
			"water"
		]
	},
	{
		"id": 691,
		"name": "Dragalge",
		"types": [
			"poison",
			"dragon"
		]
	},
	{
		"id": 692,
		"name": "Clauncher",
		"isNfe": true,
		"types": [
			"water"
		]
	},
	{
		"id": 693,
		"name": "Clawitzer",
		"types": [
			"water"
		]
	},
	{
		"id": 694,
		"name": "Helioptile",
		"isNfe": true,
		"types": [
			"electric",
			"normal"
		]
	},
	{
		"id": 695,
		"name": "Heliolisk",
		"types": [
			"electric",
			"normal"
		]
	},
	{
		"id": 696,
		"name": "Tyrunt",
		"isNfe": true,
		"types": [
			"rock",
			"dragon"
		]
	},
	{
		"id": 697,
		"name": "Tyrantrum",
		"types": [
			"rock",
			"dragon"
		]
	},
	{
		"id": 698,
		"name": "Amaura",
		"isNfe": true,
		"types": [
			"rock",
			"ice"
		]
	},
	{
		"id": 699,
		"name": "Aurorus",
		"types": [
			"rock",
			"ice"
		]
	},
	{
		"id": 700,
		"name": "Sylveon",
		"types": [
			"fairy"
		]
	},
	{
		"id": 701,
		"name": "Hawlucha",
		"types": [
			"fighting",
			"flying"
		]
	},
	{
		"id": 702,
		"name": "Dedenne",
		"types": [
			"electric",
			"fairy"
		]
	},
	{
		"id": 703,
		"name": "Carbink",
		"types": [
			"rock",
			"fairy"
		]
	},
	{
		"id": 704,
		"name": "Goomy",
		"isNfe": true,
		"types": [
			"dragon"
		]
	},
	{
		"id": 705,
		"name": "Sliggoo",
		"isNfe": true,
		"types": [
			"dragon"
		],
		"forms": [
			{
				"name": "Sliggoo",
				"types": [
					"dragon"
				],
				"isNfe": true
			},
			{
				"name": "Sliggoo Hisui",
				"types": [
					"steel",
					"dragon"
				],
				"isNfe": true,
				"spriteSuffix": "hisui"
			}
		]
	},
	{
		"id": 706,
		"name": "Goodra",
		"types": [
			"dragon"
		],
		"forms": [
			{
				"name": "Goodra",
				"types": [
					"dragon"
				]
			},
			{
				"name": "Goodra Hisui",
				"types": [
					"steel",
					"dragon"
				],
				"spriteSuffix": "hisui"
			}
		]
	},
	{
		"id": 707,
		"name": "Klefki",
		"types": [
			"steel",
			"fairy"
		]
	},
	{
		"id": 708,
		"name": "Phantump",
		"isNfe": true,
		"types": [
			"ghost",
			"grass"
		]
	},
	{
		"id": 709,
		"name": "Trevenant",
		"types": [
			"ghost",
			"grass"
		]
	},
	{
		"id": 710,
		"name": "Pumpkaboo",
		"isNfe": true,
		"types": [
			"ghost",
			"grass"
		],
		"forms": [
			{
				"name": "Pumpkaboo",
				"isNfe": true,
				"types": [
					"ghost",
					"grass"
				],
				"spriteSuffix": "super"
			},
			{
				"name": "Pumpkaboo",
				"isNfe": true,
				"types": [
					"ghost",
					"grass"
				],
				"spriteSuffix": "large"
			},
			{
				"name": "Pumpkaboo",
				"isNfe": true,
				"types": [
					"ghost",
					"grass"
				],
				"spriteSuffix": "small"
			}
		]
	},
	{
		"id": 711,
		"name": "Gourgeist",
		"types": [
			"ghost",
			"grass"
		],
		"forms": [
			{
				"name": "Gourgeist",
				"types": [
					"ghost",
					"grass"
				],
				"spriteSuffix": "large"
			},
			{
				"name": "Gourgeist",
				"types": [
					"ghost",
					"grass"
				],
				"spriteSuffix": "small"
			},
			{
				"name": "Gourgeist",
				"types": [
					"ghost",
					"grass"
				],
				"spriteSuffix": "super"
			}
		]
	},
	{
		"id": 712,
		"name": "Bergmite",
		"isNfe": true,
		"types": [
			"ice"
		]
	},
	{
		"id": 713,
		"name": "Avalugg",
		"types": [
			"ice"
		],
		"forms": [
			{
				"name": "Avalugg",
				"types": [
					"ice"
				]
			},
			{
				"name": "Avalugg Hisui",
				"types": [
					"ice",
					"rock"
				],
				"spriteSuffix": "hisui"
			}
		]
	},
	{
		"id": 714,
		"name": "Noibat",
		"isNfe": true,
		"types": [
			"flying",
			"dragon"
		]
	},
	{
		"id": 715,
		"name": "Noivern",
		"types": [
			"flying",
			"dragon"
		]
	},
	{
		"id": 716,
		"name": "Xerneas",
		"types": [
			"fairy"
		],
		"isLegendary": true
	},
	{
		"id": 717,
		"name": "Yveltal",
		"types": [
			"dark",
			"flying"
		],
		"isLegendary": true
	},
	{
		"id": 718,
		"name": "Zygarde",
		"types": [
			"dragon",
			"ground"
		],
		"forms": [
			{
				"name": "Zygarde Complete",
				"types": [
					"dragon",
					"ground"
				],
				"spriteSuffix": "complete"
			},
			{
				"name": "Zygarde 10%",
				"types": [
					"dragon",
					"ground"
				],
				"spriteSuffix": "10"
			},
			{
				"name": "Zygarde",
				"types": [
					"dragon",
					"ground"
				]
			}
		],
		"isLegendary": true
	},
	{
		"id": 719,
		"name": "Diancie",
		"types": [
			"rock",
			"fairy"
		],
		"forms": [
			{
				"name": "Diancie",
				"types": [
					"rock",
					"fairy"
				]
			},
			{
				"name": "Diancie Mega",
				"types": [
					"rock",
					"fairy"
				],
				"spriteSuffix": "mega",
				"isMega": true
			}
		],
		"isLegendary": true
	},
	{
		"id": 721,
		"name": "Volcanion",
		"types": [
			"fire",
			"water"
		],
		"isLegendary": true
	},
	{
		"id": 720,
		"name": "Hoopa",
		"types": [
			"psychic",
			"ghost"
		],
		"forms": [
			{
				"name": "Hoopa",
				"types": [
					"psychic",
					"ghost"
				]
			},
			{
				"name": "Hoopa Unbound",
				"types": [
					"psychic",
					"dark"
				],
				"spriteSuffix": "unbound"
			}
		],
		"isLegendary": true
	},
	{
		"id": 722,
		"name": "Rowlet",
		"isNfe": true,
		"types": [
			"grass",
			"flying"
		]
	},
	{
		"id": 723,
		"name": "Dartrix",
		"isNfe": true,
		"types": [
			"grass",
			"flying"
		]
	},
	{
		"id": 724,
		"name": "Decidueye",
		"types": [
			"grass",
			"ghost"
		],
		"forms": [
			{
				"name": "Decidueye",
				"types": [
					"grass",
					"ghost"
				]
			},
			{
				"name": "Decidueye Hisui",
				"types": [
					"grass",
					"fighting"
				],
				"spriteSuffix": "hisui"
			}
		]
	},
	{
		"id": 725,
		"name": "Litten",
		"isNfe": true,
		"types": [
			"fire"
		]
	},
	{
		"id": 726,
		"name": "Torracat",
		"isNfe": true,
		"types": [
			"fire"
		]
	},
	{
		"id": 727,
		"name": "Incineroar",
		"types": [
			"fire",
			"dark"
		]
	},
	{
		"id": 728,
		"name": "Popplio",
		"isNfe": true,
		"types": [
			"water"
		]
	},
	{
		"id": 729,
		"name": "Brionne",
		"isNfe": true,
		"types": [
			"water"
		]
	},
	{
		"id": 730,
		"name": "Primarina",
		"types": [
			"water",
			"fairy"
		]
	},
	{
		"id": 731,
		"name": "Pikipek",
		"isNfe": true,
		"types": [
			"normal",
			"flying"
		]
	},
	{
		"id": 732,
		"name": "Trumbeak",
		"isNfe": true,
		"types": [
			"normal",
			"flying"
		]
	},
	{
		"id": 733,
		"name": "Toucannon",
		"types": [
			"normal",
			"flying"
		]
	},
	{
		"id": 734,
		"name": "Yungoos",
		"isNfe": true,
		"types": [
			"normal"
		]
	},
	{
		"id": 735,
		"name": "Gumshoos",
		"types": [
			"normal"
		]
	},
	{
		"id": 736,
		"name": "Grubbin",
		"isNfe": true,
		"types": [
			"bug"
		]
	},
	{
		"id": 737,
		"name": "Charjabug",
		"isNfe": true,
		"types": [
			"bug",
			"electric"
		]
	},
	{
		"id": 738,
		"name": "Vikavolt",
		"types": [
			"bug",
			"electric"
		]
	},
	{
		"id": 739,
		"name": "Crabrawler",
		"isNfe": true,
		"types": [
			"fighting"
		]
	},
	{
		"id": 740,
		"name": "Crabominable",
		"types": [
			"fighting",
			"ice"
		]
	},
	{
		"id": 741,
		"name": "Oricorio",
		"types": [
			"fire",
			"flying"
		],
		"forms": [
			{
				"name": "Oricorio",
				"types": [
					"fire",
					"flying"
				]
			},
			{
				"name": "Oricorio",
				"types": [
					"electric",
					"flying"
				],
				"spriteSuffix": "pom-pom"
			},
			{
				"name": "Oricorio",
				"types": [
					"psychic",
					"flying"
				],
				"spriteSuffix": "pau"
			},
			{
				"name": "Oricorio",
				"types": [
					"ghost",
					"flying"
				],
				"spriteSuffix": "sensu"
			}
		]
	},
	{
		"id": 742,
		"name": "Cutiefly",
		"isNfe": true,
		"types": [
			"bug",
			"fairy"
		]
	},
	{
		"id": 743,
		"name": "Ribombee",
		"types": [
			"bug",
			"fairy"
		]
	},
	{
		"id": 744,
		"name": "Rockruff",
		"isNfe": true,
		"types": [
			"rock"
		]
	},
	{
		"id": 745,
		"name": "Lycanroc",
		"types": [
			"rock"
		],
		"forms": [
			{
				"name": "Lycanroc",
				"types": [
					"rock"
				],
				"spriteSuffix": "dusk"
			},
			{
				"name": "Lycanroc",
				"types": [
					"rock"
				]
			},
			{
				"name": "Lycanroc",
				"types": [
					"rock"
				],
				"spriteSuffix": "midnight"
			}
		]
	},
	{
		"id": 746,
		"name": "Wishiwashi",
		"types": [
			"water"
		],
		"forms": [
			{
				"name": "Wishiwashi School",
				"types": [
					"water"
				],
				"spriteSuffix": "school"
			},
			{
				"name": "Wishiwashi",
				"types": [
					"water"
				]
			}
		]
	},
	{
		"id": 747,
		"name": "Mareanie",
		"isNfe": true,
		"types": [
			"poison",
			"water"
		]
	},
	{
		"id": 748,
		"name": "Toxapex",
		"types": [
			"poison",
			"water"
		]
	},
	{
		"id": 749,
		"name": "Mudbray",
		"isNfe": true,
		"types": [
			"ground"
		]
	},
	{
		"id": 750,
		"name": "Mudsdale",
		"types": [
			"ground"
		]
	},
	{
		"id": 751,
		"name": "Dewpider",
		"isNfe": true,
		"types": [
			"water",
			"bug"
		]
	},
	{
		"id": 752,
		"name": "Araquanid",
		"types": [
			"water",
			"bug"
		]
	},
	{
		"id": 753,
		"name": "Fomantis",
		"isNfe": true,
		"types": [
			"grass"
		]
	},
	{
		"id": 754,
		"name": "Lurantis",
		"types": [
			"grass"
		]
	},
	{
		"id": 755,
		"name": "Morelull",
		"isNfe": true,
		"types": [
			"grass",
			"fairy"
		]
	},
	{
		"id": 756,
		"name": "Shiinotic",
		"types": [
			"grass",
			"fairy"
		]
	},
	{
		"id": 757,
		"name": "Salandit",
		"isNfe": true,
		"types": [
			"poison",
			"fire"
		]
	},
	{
		"id": 758,
		"name": "Salazzle",
		"types": [
			"poison",
			"fire"
		]
	},
	{
		"id": 759,
		"name": "Stufful",
		"isNfe": true,
		"types": [
			"normal",
			"fighting"
		]
	},
	{
		"id": 760,
		"name": "Bewear",
		"types": [
			"normal",
			"fighting"
		]
	},
	{
		"id": 761,
		"name": "Bounsweet",
		"isNfe": true,
		"types": [
			"grass"
		]
	},
	{
		"id": 762,
		"name": "Steenee",
		"isNfe": true,
		"types": [
			"grass"
		]
	},
	{
		"id": 763,
		"name": "Tsareena",
		"types": [
			"grass"
		]
	},
	{
		"id": 764,
		"name": "Comfey",
		"types": [
			"fairy"
		]
	},
	{
		"id": 765,
		"name": "Oranguru",
		"types": [
			"normal",
			"psychic"
		]
	},
	{
		"id": 766,
		"name": "Passimian",
		"types": [
			"fighting"
		]
	},
	{
		"id": 767,
		"name": "Wimpod",
		"isNfe": true,
		"types": [
			"bug",
			"water"
		]
	},
	{
		"id": 768,
		"name": "Golisopod",
		"types": [
			"bug",
			"water"
		]
	},
	{
		"id": 769,
		"name": "Sandygast",
		"isNfe": true,
		"types": [
			"ghost",
			"ground"
		]
	},
	{
		"id": 770,
		"name": "Palossand",
		"types": [
			"ghost",
			"ground"
		]
	},
	{
		"id": 771,
		"name": "Pyukumuku",
		"types": [
			"water"
		]
	},
	{
		"id": 772,
		"name": "Type: Null",
		"isNfe": true,
		"types": [
			"normal"
		],
		"isLegendary": true
	},
	{
		"id": 773,
		"name": "Silvally",
		"types": [
			"normal"
		],
		"forms": [
			{
				"name": "Silvally",
				"types": [
					"bug"
				],
				"spriteSuffix": "bug"
			},
			{
				"name": "Silvally",
				"types": [
					"dark"
				],
				"spriteSuffix": "dark"
			},
			{
				"name": "Silvally",
				"types": [
					"dragon"
				],
				"spriteSuffix": "dragon"
			},
			{
				"name": "Silvally",
				"types": [
					"electric"
				],
				"spriteSuffix": "electric"
			},
			{
				"name": "Silvally",
				"types": [
					"fairy"
				],
				"spriteSuffix": "fairy"
			},
			{
				"name": "Silvally",
				"types": [
					"fighting"
				],
				"spriteSuffix": "fighting"
			},
			{
				"name": "Silvally",
				"types": [
					"fire"
				],
				"spriteSuffix": "fire"
			},
			{
				"name": "Silvally",
				"types": [
					"flying"
				],
				"spriteSuffix": "flying"
			},
			{
				"name": "Silvally",
				"types": [
					"ghost"
				],
				"spriteSuffix": "ghost"
			},
			{
				"name": "Silvally",
				"types": [
					"grass"
				],
				"spriteSuffix": "grass"
			},
			{
				"name": "Silvally",
				"types": [
					"ground"
				],
				"spriteSuffix": "ground"
			},
			{
				"name": "Silvally",
				"types": [
					"ice"
				],
				"spriteSuffix": "ice"
			},
			{
				"name": "Silvally",
				"types": [
					"normal"
				]
			},
			{
				"name": "Silvally",
				"types": [
					"poison"
				],
				"spriteSuffix": "poison"
			},
			{
				"name": "Silvally",
				"types": [
					"psychic"
				],
				"spriteSuffix": "psychic"
			},
			{
				"name": "Silvally",
				"types": [
					"rock"
				],
				"spriteSuffix": "rock"
			},
			{
				"name": "Silvally",
				"types": [
					"steel"
				],
				"spriteSuffix": "steel"
			},
			{
				"name": "Silvally",
				"types": [
					"water"
				],
				"spriteSuffix": "water"
			}
		],
		"isLegendary": true
	},
	{
		"id": 774,
		"name": "Minior",
		"types": [
			"rock",
			"flying"
		],
		"forms": [
			{
				"name": "Minior Core",
				"types": [
					"rock",
					"flying"
				],
				"spriteSuffix": "blue"
			},
			{
				"name": "Minior Core",
				"types": [
					"rock",
					"flying"
				],
				"spriteSuffix": "green"
			},
			{
				"name": "Minior Core",
				"types": [
					"rock",
					"flying"
				],
				"spriteSuffix": "indigo"
			},
			{
				"name": "Minior",
				"types": [
					"rock",
					"flying"
				],
				"spriteSuffix": "meteor"
			},
			{
				"name": "Minior Core",
				"types": [
					"rock",
					"flying"
				],
				"spriteSuffix": "orange"
			},
			{
				"name": "Minior Core",
				"types": [
					"rock",
					"flying"
				]
			},
			{
				"name": "Minior Core",
				"types": [
					"rock",
					"flying"
				],
				"spriteSuffix": "violet"
			},
			{
				"name": "Minior Core",
				"types": [
					"rock",
					"flying"
				],
				"spriteSuffix": "yellow"
			}
		]
	},
	{
		"id": 775,
		"name": "Komala",
		"types": [
			"normal"
		]
	},
	{
		"id": 776,
		"name": "Turtonator",
		"types": [
			"fire",
			"dragon"
		]
	},
	{
		"id": 777,
		"name": "Togedemaru",
		"types": [
			"electric",
			"steel"
		]
	},
	{
		"id": 778,
		"name": "Mimikyu",
		"types": [
			"ghost",
			"fairy"
		]
	},
	{
		"id": 779,
		"name": "Bruxish",
		"types": [
			"water",
			"psychic"
		]
	},
	{
		"id": 780,
		"name": "Drampa",
		"types": [
			"normal",
			"dragon"
		]
	},
	{
		"id": 781,
		"name": "Dhelmise",
		"types": [
			"ghost",
			"grass"
		]
	},
	{
		"id": 782,
		"name": "Jangmo-o",
		"isNfe": true,
		"types": [
			"dragon"
		]
	},
	{
		"id": 783,
		"name": "Hakamo-o",
		"isNfe": true,
		"types": [
			"dragon",
			"fighting"
		]
	},
	{
		"id": 784,
		"name": "Kommo-o",
		"types": [
			"dragon",
			"fighting"
		]
	},
	{
		"id": 785,
		"name": "Tapu Koko",
		"types": [
			"electric",
			"fairy"
		],
		"isLegendary": true
	},
	{
		"id": 786,
		"name": "Tapu Lele",
		"types": [
			"psychic",
			"fairy"
		],
		"isLegendary": true
	},
	{
		"id": 787,
		"name": "Tapu Bulu",
		"types": [
			"grass",
			"fairy"
		],
		"isLegendary": true
	},
	{
		"id": 788,
		"name": "Tapu Fini",
		"types": [
			"water",
			"fairy"
		],
		"isLegendary": true
	},
	{
		"id": 789,
		"name": "Cosmog",
		"isNfe": true,
		"types": [
			"psychic"
		],
		"isLegendary": true
	},
	{
		"id": 790,
		"name": "Cosmoem",
		"isNfe": true,
		"types": [
			"psychic"
		],
		"isLegendary": true
	},
	{
		"id": 791,
		"name": "Solgaleo",
		"types": [
			"psychic",
			"steel"
		],
		"isLegendary": true
	},
	{
		"id": 792,
		"name": "Lunala",
		"types": [
			"psychic",
			"ghost"
		],
		"isLegendary": true
	},
	{
		"id": 793,
		"name": "Nihilego",
		"types": [
			"rock",
			"poison"
		]
	},
	{
		"id": 794,
		"name": "Buzzwole",
		"types": [
			"bug",
			"fighting"
		]
	},
	{
		"id": 795,
		"name": "Pheromosa",
		"types": [
			"bug",
			"fighting"
		]
	},
	{
		"id": 796,
		"name": "Xurkitree",
		"types": [
			"electric"
		]
	},
	{
		"id": 797,
		"name": "Celesteela",
		"types": [
			"steel",
			"flying"
		]
	},
	{
		"id": 798,
		"name": "Kartana",
		"types": [
			"grass",
			"steel"
		]
	},
	{
		"id": 799,
		"name": "Guzzlord",
		"types": [
			"dark",
			"dragon"
		]
	},
	{
		"id": 800,
		"name": "Necrozma",
		"types": [
			"psychic"
		],
		"forms": [
			{
				"name": "Necrozma",
				"types": [
					"psychic"
				]
			},
			{
				"name": "Dawn Wings Necrozma",
				"types": [
					"psychic",
					"ghost"
				],
				"spriteSuffix": "dawnwings"
			},
			{
				"name": "Dusk Mane Necrozma",
				"types": [
					"psychic",
					"steel"
				],
				"spriteSuffix": "duskmane"
			},
			{
				"name": "Ultra Necrozma",
				"types": [
					"psychic",
					"dragon"
				],
				"spriteSuffix": "ultra"
			}
		],
		"isLegendary": true
	},
	{
		"id": 801,
		"name": "Magearna",
		"types": [
			"steel",
			"fairy"
		],
		"isLegendary": true
	},
	{
		"id": 802,
		"name": "Marshadow",
		"types": [
			"fighting",
			"ghost"
		],
		"isLegendary": true
	},
	{
		"id": 803,
		"name": "Poipole",
		"isNfe": true,
		"types": [
			"poison"
		]
	},
	{
		"id": 804,
		"name": "Naganadel",
		"types": [
			"poison",
			"dragon"
		]
	},
	{
		"id": 805,
		"name": "Stakataka",
		"types": [
			"rock",
			"steel"
		]
	},
	{
		"id": 806,
		"name": "Blacephalon",
		"types": [
			"fire",
			"ghost"
		]
	},
	{
		"id": 807,
		"name": "Zeraora",
		"types": [
			"electric"
		],
		"isLegendary": true
	},
	{
		"id": 808,
		"name": "Meltan",
		"isNfe": true,
		"types": [
			"steel"
		],
		"isLegendary": true
	},
	{
		"id": 809,
		"name": "Melmetal",
		"types": [
			"steel"
		],
		"forms": [
			{
				"name": "Melmetal",
				"types": [
					"steel"
				]
			},
			{
				"name": "Melmetal Gigantamax",
				"types": [
					"steel"
				],
				"spriteSuffix": "gigantamax",
				"isGigantamax": true
			}
		],
		"isLegendary": true
	},
	{
		"id": 810,
		"name": "Grookey",
		"isNfe": true,
		"types": [
			"grass"
		]
	},
	{
		"id": 811,
		"name": "Thwackey",
		"isNfe": true,
		"types": [
			"grass"
		]
	},
	{
		"id": 812,
		"name": "Rillaboom",
		"types": [
			"grass"
		],
		"forms": [
			{
				"name": "Rillaboom",
				"types": [
					"grass"
				]
			},
			{
				"name": "Rillaboom Gigantamax",
				"types": [
					"grass"
				],
				"spriteSuffix": "gigantamax",
				"isGigantamax": true
			}
		]
	},
	{
		"id": 813,
		"name": "Scorbunny",
		"isNfe": true,
		"types": [
			"fire"
		]
	},
	{
		"id": 814,
		"name": "Raboot",
		"isNfe": true,
		"types": [
			"fire"
		]
	},
	{
		"id": 815,
		"name": "Cinderace",
		"types": [
			"fire"
		],
		"forms": [
			{
				"name": "Cinderace",
				"types": [
					"fire"
				]
			},
			{
				"name": "Cinderace Gigantamax",
				"types": [
					"fire"
				],
				"spriteSuffix": "gigantamax",
				"isGigantamax": true
			}
		]
	},
	{
		"id": 816,
		"name": "Sobble",
		"isNfe": true,
		"types": [
			"water"
		]
	},
	{
		"id": 817,
		"name": "Drizzile",
		"isNfe": true,
		"types": [
			"water"
		]
	},
	{
		"id": 818,
		"name": "Inteleon",
		"types": [
			"water"
		],
		"forms": [
			{
				"name": "Inteleon",
				"types": [
					"water"
				]
			},
			{
				"name": "Inteleon Gigantamax",
				"types": [
					"water"
				],
				"spriteSuffix": "gigantamax",
				"isGigantamax": true
			}
		]
	},
	{
		"id": 819,
		"name": "Skwovet",
		"isNfe": true,
		"types": [
			"normal"
		]
	},
	{
		"id": 820,
		"name": "Greedent",
		"types": [
			"normal"
		]
	},
	{
		"id": 821,
		"name": "Rookidee",
		"isNfe": true,
		"types": [
			"flying"
		]
	},
	{
		"id": 822,
		"name": "Corvisquire",
		"isNfe": true,
		"types": [
			"flying"
		]
	},
	{
		"id": 823,
		"name": "Corviknight",
		"types": [
			"flying",
			"steel"
		],
		"forms": [
			{
				"name": "Corviknight",
				"types": [
					"flying",
					"steel"
				]
			},
			{
				"name": "Corviknight Gigantamax",
				"types": [
					"flying",
					"steel"
				],
				"spriteSuffix": "gigantamax",
				"isGigantamax": true
			}
		]
	},
	{
		"id": 824,
		"name": "Blipbug",
		"isNfe": true,
		"types": [
			"bug"
		]
	},
	{
		"id": 825,
		"name": "Dottler",
		"isNfe": true,
		"types": [
			"bug",
			"psychic"
		]
	},
	{
		"id": 826,
		"name": "Orbeetle",
		"types": [
			"bug",
			"psychic"
		],
		"forms": [
			{
				"name": "Orbeetle",
				"types": [
					"bug",
					"psychic"
				]
			},
			{
				"name": "Orbeetle Gigantamax",
				"types": [
					"bug",
					"psychic"
				],
				"spriteSuffix": "gigantamax",
				"isGigantamax": true
			}
		]
	},
	{
		"id": 827,
		"name": "Nickit",
		"isNfe": true,
		"types": [
			"dark"
		]
	},
	{
		"id": 828,
		"name": "Thievul",
		"types": [
			"dark"
		]
	},
	{
		"id": 829,
		"name": "Gossifleur",
		"isNfe": true,
		"types": [
			"grass"
		]
	},
	{
		"id": 830,
		"name": "Eldegoss",
		"types": [
			"grass"
		]
	},
	{
		"id": 831,
		"name": "Wooloo",
		"isNfe": true,
		"types": [
			"normal"
		]
	},
	{
		"id": 832,
		"name": "Dubwool",
		"types": [
			"normal"
		]
	},
	{
		"id": 833,
		"name": "Chewtle",
		"isNfe": true,
		"types": [
			"water"
		]
	},
	{
		"id": 834,
		"name": "Drednaw",
		"types": [
			"water",
			"rock"
		],
		"forms": [
			{
				"name": "Drednaw",
				"types": [
					"water",
					"rock"
				]
			},
			{
				"name": "Drednaw Gigantamax",
				"types": [
					"water",
					"rock"
				],
				"spriteSuffix": "gigantamax",
				"isGigantamax": true
			}
		]
	},
	{
		"id": 835,
		"name": "Yamper",
		"isNfe": true,
		"types": [
			"electric"
		]
	},
	{
		"id": 836,
		"name": "Boltund",
		"types": [
			"electric"
		]
	},
	{
		"id": 837,
		"name": "Rolycoly",
		"isNfe": true,
		"types": [
			"rock"
		]
	},
	{
		"id": 838,
		"name": "Carkol",
		"isNfe": true,
		"types": [
			"rock",
			"fire"
		]
	},
	{
		"id": 839,
		"name": "Coalossal",
		"types": [
			"rock",
			"fire"
		],
		"forms": [
			{
				"name": "Coalossal",
				"types": [
					"rock",
					"fire"
				]
			},
			{
				"name": "Coalossal Gigantamax",
				"types": [
					"rock",
					"fire"
				],
				"spriteSuffix": "gigantamax",
				"isGigantamax": true
			}
		]
	},
	{
		"id": 840,
		"name": "Applin",
		"isNfe": true,
		"types": [
			"grass",
			"dragon"
		]
	},
	{
		"id": 841,
		"name": "Flapple",
		"types": [
			"grass",
			"dragon"
		],
		"forms": [
			{
				"name": "Flapple",
				"types": [
					"grass",
					"dragon"
				]
			},
			{
				"name": "Flapple Gigantamax",
				"types": [
					"grass",
					"dragon"
				],
				"spriteSuffix": "gigantamax",
				"isGigantamax": true
			}
		]
	},
	{
		"id": 842,
		"name": "Appletun",
		"types": [
			"grass",
			"dragon"
		],
		"forms": [
			{
				"name": "Appletun",
				"types": [
					"grass",
					"dragon"
				]
			},
			{
				"name": "Appletun Gigantamax",
				"types": [
					"grass",
					"dragon"
				],
				"spriteSuffix": "gigantamax",
				"isGigantamax": true
			}
		]
	},
	{
		"id": 843,
		"name": "Silicobra",
		"isNfe": true,
		"types": [
			"ground"
		]
	},
	{
		"id": 844,
		"name": "Sandaconda",
		"types": [
			"ground"
		],
		"forms": [
			{
				"name": "Sandaconda",
				"types": [
					"ground"
				]
			},
			{
				"name": "Sandaconda Gigantamax",
				"types": [
					"ground"
				],
				"spriteSuffix": "gigantamax",
				"isGigantamax": true
			}
		]
	},
	{
		"id": 845,
		"name": "Cramorant",
		"types": [
			"flying",
			"water"
		]
	},
	{
		"id": 846,
		"name": "Arrokuda",
		"isNfe": true,
		"types": [
			"water"
		]
	},
	{
		"id": 847,
		"name": "Barraskewda",
		"types": [
			"water"
		]
	},
	{
		"id": 848,
		"name": "Toxel",
		"isNfe": true,
		"types": [
			"electric",
			"poison"
		]
	},
	{
		"id": 849,
		"name": "Toxtricity",
		"types": [
			"electric",
			"poison"
		],
		"forms": [
			{
				"name": "Toxtricity",
				"types": [
					"electric",
					"poison"
				]
			},
			{
				"name": "Toxtricity",
				"types": [
					"electric",
					"poison"
				],
				"spriteSuffix": "l"
			},
			{
				"name": "Toxtricity Gigantamax",
				"types": [
					"electric",
					"poison"
				],
				"spriteSuffix": "gigantamax",
				"isGigantamax": true
			}
		]
	},
	{
		"id": 850,
		"name": "Sizzlipede",
		"isNfe": true,
		"types": [
			"fire",
			"bug"
		]
	},
	{
		"id": 851,
		"name": "Centiskorch",
		"types": [
			"fire",
			"bug"
		],
		"forms": [
			{
				"name": "Centiskorch",
				"types": [
					"fire",
					"bug"
				]
			},
			{
				"name": "Centiskorch Gigantamax",
				"types": [
					"fire",
					"bug"
				],
				"spriteSuffix": "gigantamax",
				"isGigantamax": true
			}
		]
	},
	{
		"id": 852,
		"name": "Clobbopus",
		"isNfe": true,
		"types": [
			"fighting"
		]
	},
	{
		"id": 853,
		"name": "Grapploct",
		"types": [
			"fighting"
		]
	},
	{
		"id": 854,
		"name": "Sinistea",
		"isNfe": true,
		"types": [
			"ghost"
		]
	},
	{
		"id": 855,
		"name": "Polteageist",
		"types": [
			"ghost"
		]
	},
	{
		"id": 856,
		"name": "Hatenna",
		"isNfe": true,
		"types": [
			"psychic"
		]
	},
	{
		"id": 857,
		"name": "Hattrem",
		"isNfe": true,
		"types": [
			"psychic"
		]
	},
	{
		"id": 858,
		"name": "Hatterene",
		"types": [
			"psychic",
			"fairy"
		],
		"forms": [
			{
				"name": "Hatterene",
				"types": [
					"psychic",
					"fairy"
				]
			},
			{
				"name": "Hatterene Gigantamax",
				"types": [
					"psychic",
					"fairy"
				],
				"spriteSuffix": "gigantamax",
				"isGigantamax": true
			}
		]
	},
	{
		"id": 859,
		"name": "Impidimp",
		"isNfe": true,
		"types": [
			"dark",
			"fairy"
		]
	},
	{
		"id": 860,
		"name": "Morgrem",
		"isNfe": true,
		"types": [
			"dark",
			"fairy"
		]
	},
	{
		"id": 861,
		"name": "Grimmsnarl",
		"types": [
			"dark",
			"fairy"
		],
		"forms": [
			{
				"name": "Grimmsnarl",
				"types": [
					"dark",
					"fairy"
				]
			},
			{
				"name": "Grimmsnarl Gigantamax",
				"types": [
					"dark",
					"fairy"
				],
				"spriteSuffix": "gigantamax",
				"isGigantamax": true
			}
		]
	},
	{
		"id": 862,
		"name": "Obstagoon",
		"types": [
			"dark",
			"normal"
		]
	},
	{
		"id": 863,
		"name": "Perrserker",
		"types": [
			"steel"
		]
	},
	{
		"id": 864,
		"name": "Cursola",
		"types": [
			"ghost"
		]
	},
	{
		"id": 865,
		"name": "Sirfetch'd",
		"isNfe": true,
		"types": [
			"fighting"
		]
	},
	{
		"id": 866,
		"name": "Mr. Rime",
		"types": [
			"psychic",
			"ice"
		]
	},
	{
		"id": 867,
		"name": "Runerigus",
		"types": [
			"ground",
			"ghost"
		]
	},
	{
		"id": 868,
		"name": "Milcery",
		"isNfe": true,
		"types": [
			"fairy"
		]
	},
	{
		"id": 869,
		"name": "Alcremie",
		"types": [
			"fairy"
		],
		"forms": [
			{
				"name": "Alcremie",
				"types": [
					"fairy"
				]
			},
			{
				"name": "Alcremie Gigantamax",
				"types": [
					"fairy"
				],
				"spriteSuffix": "gigantamax",
				"isGigantamax": true
			}
		]
	},
	{
		"id": 870,
		"name": "Falinks",
		"types": [
			"fighting"
		]
	},
	{
		"id": 871,
		"name": "Pincurchin",
		"types": [
			"electric"
		]
	},
	{
		"id": 872,
		"name": "Snom",
		"isNfe": true,
		"types": [
			"ice",
			"bug"
		]
	},
	{
		"id": 873,
		"name": "Frosmoth",
		"types": [
			"ice",
			"bug"
		]
	},
	{
		"id": 874,
		"name": "Stonjourner",
		"types": [
			"rock"
		]
	},
	{
		"id": 875,
		"name": "Eiscue",
		"types": [
			"ice"
		],
		"forms": [
			{
				"name": "Eiscue",
				"types": [
					"ice"
				]
			},
			{
				"name": "Eiscue",
				"types": [
					"ice"
				],
				"spriteSuffix": "n"
			}
		]
	},
	{
		"id": 876,
		"name": "Indeedee",
		"types": [
			"psychic",
			"normal"
		],
		"forms": [
			{
				"name": "Indeedee",
				"types": [
					"psychic",
					"normal"
				]
			},
			{
				"name": "Indeedee",
				"types": [
					"psychic",
					"normal"
				],
				"spriteSuffix": "f"
			}
		]
	},
	{
		"id": 877,
		"name": "Morpeko",
		"types": [
			"electric",
			"dark"
		]
	},
	{
		"id": 878,
		"name": "Cufant",
		"isNfe": true,
		"types": [
			"steel"
		]
	},
	{
		"id": 879,
		"name": "Copperajah",
		"types": [
			"steel"
		],
		"forms": [
			{
				"name": "Copperajah",
				"types": [
					"steel"
				]
			},
			{
				"name": "Copperajah Gigantamax",
				"types": [
					"steel"
				],
				"spriteSuffix": "gigantamax",
				"isGigantamax": true
			}
		]
	},
	{
		"id": 880,
		"name": "Dracozolt",
		"types": [
			"electric",
			"dragon"
		]
	},
	{
		"id": 881,
		"name": "Arctozolt",
		"types": [
			"electric",
			"ice"
		]
	},
	{
		"id": 882,
		"name": "Dracovish",
		"types": [
			"water",
			"dragon"
		]
	},
	{
		"id": 883,
		"name": "Arctovish",
		"types": [
			"water",
			"ice"
		]
	},
	{
		"id": 884,
		"name": "Duraludon",
		"types": [
			"steel",
			"dragon"
		],
		"forms": [
			{
				"name": "Duraludon",
				"types": [
					"steel",
					"dragon"
				]
			},
			{
				"name": "Duraludon Gigantamax",
				"types": [
					"steel",
					"dragon"
				],
				"spriteSuffix": "gigantamax",
				"isGigantamax": true
			}
		]
	},
	{
		"id": 885,
		"name": "Dreepy",
		"isNfe": true,
		"types": [
			"dragon",
			"ghost"
		]
	},
	{
		"id": 886,
		"name": "Drakloak",
		"isNfe": true,
		"types": [
			"dragon",
			"ghost"
		]
	},
	{
		"id": 887,
		"name": "Dragapult",
		"types": [
			"dragon",
			"ghost"
		]
	},
	{
		"id": 888,
		"name": "Zacian",
		"types": [
			"fairy"
		],
		"forms": [
			{
				"name": "Zacian",
				"types": [
					"fairy"
				]
			},
			{
				"name": "Zacian",
				"types": [
					"fairy",
					"steel"
				],
				"spriteSuffix": "c"
			}
		],
		"isLegendary": true
	},
	{
		"id": 889,
		"name": "Zamazenta",
		"types": [
			"fighting"
		],
		"forms": [
			{
				"name": "Zamazenta",
				"types": [
					"fighting"
				]
			},
			{
				"name": "Zamazenta",
				"types": [
					"fighting",
					"steel"
				],
				"spriteSuffix": "c"
			}
		],
		"isLegendary": true
	},
	{
		"id": 890,
		"name": "Eternatus",
		"types": [
			"poison",
			"dragon"
		],
		"forms": [
			{
				"name": "Eternatus",
				"types": [
					"poison",
					"dragon"
				]
			},
			{
				"name": "Eternatus Eternamax",
				"types": [
					"poison",
					"dragon"
				],
				"spriteSuffix": "eternamax"
			}
		],
		"isLegendary": true
	},
	{
		"id": 891,
		"name": "Kubfu",
		"isNfe": true,
		"types": [
			"fighting"
		],
		"isLegendary": true
	},
	{
		"id": 892,
		"name": "Urshifu",
		"types": [
			"fighting",
			"dark"
		],
		"forms": [
			{
				"name": "Urshifu Single Strike",
				"types": [
					"fighting",
					"dark"
				]
			},
			{
				"name": "Urshifu Rapid Strike",
				"types": [
					"fighting",
					"water"
				],
				"spriteSuffix": "rs"
			},
			{
				"name": "Urshifu Single Strike Gigantamax",
				"types": [
					"fighting",
					"dark"
				],
				"spriteSuffix": "ss-gigantamax",
				"isGigantamax": true
			},
			{
				"name": "Urshifu Rapid Strike Gigantamax",
				"types": [
					"fighting",
					"water"
				],
				"spriteSuffix": "rs-gigantamax",
				"isGigantamax": true
			}
		],
		"isLegendary": true
	},
	{
		"id": 893,
		"name": "Zarude",
		"types": [
			"dark",
			"grass"
		],
		"forms": [
			{
				"name": "Zarude",
				"types": [
					"dark",
					"grass"
				]
			},
			{
				"name": "Zarude Dada",
				"types": [
					"dark",
					"grass"
				],
				"spriteSuffix": "dada"
			}
		],
		"isLegendary": true
	},
	{
		"id": 894,
		"name": "Regieleki",
		"types": [
			"electric"
		],
		"isLegendary": true
	},
	{
		"id": 895,
		"name": "Regidrago",
		"types": [
			"dragon"
		],
		"isLegendary": true
	},
	{
		"id": 896,
		"name": "Glastrier",
		"types": [
			"ice"
		],
		"isLegendary": true
	},
	{
		"id": 897,
		"name": "Spectrier",
		"types": [
			"ghost"
		],
		"isLegendary": true
	},
	{
		"id": 898,
		"name": "Calyrex",
		"types": [
			"psychic",
			"grass"
		],
		"forms": [
			{
				"name": "Calyrex",
				"types": [
					"psychic",
					"grass"
				]
			},
			{
				"name": "Calyrex Ice Rider",
				"types": [
					"psychic",
					"ice"
				],
				"spriteSuffix": "ice"
			},
			{
				"name": "Calyrex Shadow Rider",
				"types": [
					"psychic",
					"shadow"
				],
				"spriteSuffix": "shadow"
			}
		],
		"isLegendary": true
	},
	{
		"id": 899,
		"name": "Wyrdeer",
		"types": [
			"normal",
			"psychic"
		]
	},
	{
		"id": 900,
		"name": "Kleavor",
		"types": [
			"bug",
			"rock"
		]
	},
	{
		"id": 901,
		"name": "Ursaluna",
		"types": [
			"ground",
			"normal"
		]
	},
	{
		"id": 902,
		"name": "Basculegion",
		"types": [
			"water",
			"ghost"
		],
		"forms": [
			{
				"name": "Basculegion",
				"types": [
					"water",
					"ghost"
				]
			},
			{
				"name": "Basculegion",
				"types": [
					"water",
					"ghost"
				],
				"spriteSuffix": "f"
			}
		]
	},
	{
		"id": 903,
		"name": "Sneasler",
		"types": [
			"fighting",
			"poison"
		]
	},
	{
		"id": 904,
		"name": "Overqwil",
		"types": [
			"dark",
			"poison"
		]
	},
	{
		"id": 905,
		"name": "Enamorus",
		"types": [
			"fairy",
			"flying"
		],
		"forms": [
			{
				"name": "Enamorus",
				"types": [
					"fairy",
					"flying"
				]
			},
			{
				"name": "Enamorus Therian",
				"types": [
					"fairy",
					"flying"
				],
				"spriteSuffix": "therian"
			}
		],
		"isLegendary": true
	}
]
}]
`
}