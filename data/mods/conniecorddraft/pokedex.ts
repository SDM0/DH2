export const Pokedex: {[speciesid: string]: SpeciesData} = {
	//Draft season 1 custom mons
	vaporeon: {
		inherit: true,
		otherFormes: ["Vaporeon-Mega-X"], 
		formeOrder: ["Vaporeon", "Vaporeon-Mega-X"], 
	},
	vaporeonmegax: {
		num: 134,
		name: "Vaporeon-Mega-X",
		baseSpecies: "Vaporeon",
		forme: "Mega-X", 
		types: ["Water", "Dragon"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 130, atk: 105, def: 70, spa: 160, spd: 65, spe: 95},
		abilities: {0: "Swift Swim"},
		heightm: 1.1,
		weightkg: 26.2,
		color: "Blue",
		eggGroups: ["Field"],
		requiredItem: "Vaporeonite X", 
		battleOnly: "Vaporeon",
	},
	drampa: {
		inherit: true,
		otherFormes: ["Drampa-Mega"],
		formeOrder: ["Drampa", "Drampa-Mega"],
	},
	drampamega: {
		num: 780,
		name: "Drampa-Mega",
		baseSpecies: "Drampa",
		forme: "Mega",
		types: ["Normal", "Dragon"],
		baseStats: {hp: 78, atk: 89, def: 101, spa: 155, spd: 101, spe: 61},
		abilities: {0: "Grampandemonium"},
		heightm: 4.6,
		weightkg: 104.5,
		color: "White",
		eggGroups: ["Monster", "Dragon"],
		requiredItem: "Drampite",
		battleOnly: "Drampa", 
	},
	sceptile: {
		inherit: true,
		otherFormes: ["Sceptile-Mega", "Sceptile-Mega-Sword"],
		formeOrder: ["Sceptile", "Sceptile-Mega", "Sceptile-Mega-Sword"],
	},
	sceptilemegasword: {
		num: 254,
		name: "Sceptile-Mega-Sword",
		baseSpecies: "Sceptile",
		forme: "Mega-Sword",
		types: ["Grass", "Rock"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 70, atk: 135, def: 85, spa: 105, spd: 85, spe: 150},
		abilities: {0: "Stonilate"},
		heightm: 2,
		weightkg: 75,
		color: "Green",
		eggGroups: ["Monster", "Dragon"],
		requiredItem: "Sceptilite Sword",
		battleOnly: "Sceptile",
	},
	chandelure: {
		inherit: true,
		otherFormes: ["Chandelure-Galaponea"],
		formeOrder: ["Chandelure", "Chandelure-Galaponea"],
	},
	chandeluregalaponea: {
		num: 609,
		name: "Chandelure-Galaponea",
		baseSpecies: "Chandelure",
		forme: "Galaponea",
		types: ["Ice", "Fairy"],
		baseStats: {hp: 70, atk: 65, def: 80, spa: 145, spd: 80, spe: 85},
		abilities: {0: "Frozen Power", 1: "Permafrost"},
		heightm: 2.1,
		weightkg: 30.8,
		color: "White",
		eggGroups: ["Amorphous"],
	},
	nihilego: {
		inherit: true,
		otherFormes: ["Nihilego-Galar"],
		formeOrder: ["Nihilego", "Nihilego-Galar"],
	},
	nihilegogalar: {
		num: 793,
		name: "Nihilego-Galar",
		baseSpecies: "Nihilego",
		forme: "Galar",
		types: ["Ice", "Rock"],
		gender: "N",
		//these are the amended stats from hema/shinesprite,
		//technically hasnt been approved by gum yet :x
		baseStats: {hp: 83, atk: 97, def: 59, spa: 139, spd: 71, spe: 121},
		abilities: {0: "Beast Boost"},
		heightm: 1.3,
		weightkg: 34.6,
		color: "White",
		eggGroups: ["Undiscovered"],
	},
	boohawk: {
		num: -1001,
		name: "Boohawk",
		types: ["Ghost", "Flying"],
		baseStats: {hp: 85, atk: 70, def: 100, spa: 55, spd: 170, spe: 50},
		abilities: {0: "Dialogue"},
		heightm: 1.2,
		weightkg: 24.9,
		color: "Gray",
		eggGroups: ["Flying"],
	},
	buzzstacian: {
		num: -1002,
		name: "Buzzstacian",
		types: ["Grass", "Electric"],
		baseStats: {hp: 117, atk: 49, def: 84, spa: 101, spd: 106, spe: 63},
		abilities: {0: "Natural Cure", 1: "Leaf Guard", H: "Marvel Scale"},
		heightm: 1.4,
		weightkg: 54,
		color: "Green",
		eggGroups: ["Water 3"],
	},
	neuroboxin: {
		num: -1003,
		name: "Neuroboxin",
		types: ["Poison", "Fighting"],
		baseStats: {hp: 114, atk: 72, def: 96, spa: 85, spd: 81, spe: 109},
		abilities: {0: "Infiltrator", 1: "Sticky Hold", H: "Trace"},
		heightm: 1.6,
		weightkg: 39,
		color: "Purple",
		eggGroups: ["Water 1", "Water 2"],
	},
	poultergeist: {
		num: -1004,
		name: "Poultergeist",
		types: ["Fire", "Flying"],
		baseStats: {hp: 105, atk: 65, def: 85, spa: 105, spd: 85, spe: 73},
		abilities: {0: "Chicken Out"},
		heightm: .7,
		weightkg: 2.6,
		color: "Red",
		eggGroups: ["Flying"],
		otherFormes: ["Poultergeist-Headless"],
		formeOrder: ["Poultergeist", "Poultergeist-Headless"],
	},
	poultergeistheadless: {
		num: -1004,
		name: "Poultergeist-Headless",
		baseSpecies: "Poultergeist",
		forme: "Headless",
		types: ["Fire", "Ghost"],
		baseStats: {hp: 1, atk: 65, def: 85, spa: 105, spd: 85, spe: 113},
		abilities: {0: "Wonder Guard"},
		heightm: .6,
		weightkg: 2.2,
		color: "Red",
		eggGroups: ["Flying"],
		battleOnly: "Poultergeist", 
	},
	regiyehehe: {
		num: -1005,
		name: "Regiyehehe",
		types: ["Electric"],
		gender: "N",
		baseStats: {hp: 80, atk: 60, def: 50, spa: 100, spd: 50, spe: 255},
		abilities: {0: "Shpeed Force"},
		heightm: 1.9,
		weightkg: 47.6,
		color: "Yellow",
		eggGroups: ["Undiscovered"],
	},
	scout: {
		num: -1006,
		name: "Scout",
		types: ["Normal", "Dark"],
		gender: "M",
		baseStats: {hp: 79, atk: 130, def: 100, spa: 60, spd: 100, spe: 111},
		abilities: {0: "Vicious Jaw", 1: "Fluffy", H: "Playtime"},
		heightm: 0.6,
		weightkg: 29.5,
		color: "Black",
		eggGroups: ["Undiscovered"],
	},
	stamizer: {
		num: -1007,
		name: "Stamizer",
		types: ["Psychic", "Dark"],
		gender: "N",
		baseStats: {hp: 50, atk: 100, def:59 , spa: 100, spd: 95, spe: 131},
		abilities: {0: "Inversion Warp", 1: "Damage Warp", H: "Levitate"},
		heightm: 0.6,
		weightkg: 523,
		color: "Black",
		eggGroups: ["Undiscovered"],
	},
	tatsunami: {
		num: -1008,
		name: "Tatsunami",
		types: ["Dragon", "Water"],
		gender: "N",
		baseStats: {hp: 111, atk: 88, def: 77, spa: 121, spd: 77, spe: 101},
		abilities: {0: "Epipelagic Deity", 1: "Bathypelagic Deity", H: "Mesopelagic Deity"},
		heightm: 17.8,
		weightkg: 178,
		color: "Blue",
		eggGroups: ["Undiscovered"],
	},
	venonator: {
		num: -1009,
		name: "Venonator",
		types: ["Poison", "Dragon"],
		baseStats: {hp: 120, atk: 135, def: 100, spa: 79, spd: 60, spe: 106},
		abilities: {0: "Swift Swim", 1: "Strong Jaw", H: "Venom Drain"},
		heightm: 3.2,
		weightkg: 315,
		color: "Purple",
		eggGroups: ["Monster", "Dragon"],
	},
	
	//Side league mons
	haullequin: {
		num: -3001,
		name: "Haull\u2019equin",
		types: ["Dark", "Ghost"],
		baseStats: {hp: 76, atk: 125, def: 105, spa: 58, spd: 100, spe: 72},
		abilities: {0: "Jester", 1: "Prankster", H: "Emergency Exit"},
		weightkg: 54.5,
	},
	batana: {
		num: -3002,
		name: "Batana",
		types: ["Grass", "Flying"],
		baseStats: {hp: 90, atk: 90, def: 90, spa: 90, spd: 90, spe: 90},
		abilities: {0: "Prankster", 1: "Trickster", H: "Banana Trap"},
		weightkg: 0.86,
	},
	teslafly: {
		num: -3003, 
		name: "Teslafly",
		types: ["Fire", "Electric"],
		baseStats: {hp: 60, atk: 90, def: 65, spa: 90, spd: 65, spe: 90},
		abilities: {0: "Shield Dust", H: "Motor Drive"},
		weightkg: 0.5,
	},
	surge: {
		num: -3004,
		name: "Surge",
		types: ["Electric", "Steel"],
		baseStats: {hp: 100, atk: 50, def: 70, spa: 100, spd: 70, spe: 60},
		abilities: {0: "Water Absorb", 1: "Volt Absorb", H: "Heavy Metal"},
		weightkg: 105.2,
		otherFormes: ["Surge-Upgrade-1", "Surge-Upgrade-2", "Surge-Upgrade-3"],
		formeOrder: ["Surge", "Surge-Upgrade-1", "Surge-Upgrade-2", "Surge-Upgrade-3"],
	},
	surgeupgrade1: {
		num: -3004,
		name: "Surge-Upgrade-1",
		baseSpecies: "Surge",
		forme: "Upgrade-2",
		types: ["Electric", "Steel"],
		baseStats: {hp: 100, atk: 50, def: 70, spa: 100, spd: 70, spe: 110},
		abilities: {0: "Water Absorb", 1: "Volt Absorb", H: "Heavy Metal"},
		weightkg: 155.2,
		battleOnly: "Surge",
	},
	surgeupgrade2: {
		num: -3004,
		name: "Surge-Upgrade-2",
		baseSpecies: "Surge",
		forme: "Upgrade-1",
		types: ["Electric", "Steel"],
		baseStats: {hp: 100, atk: 70, def: 75, spa: 115, spd: 75, spe: 115},
		abilities: {0: "Water Absorb", 1: "Volt Absorb", H: "Heavy Metal"},
		weightkg: 205.2,
		battleOnly: "Surge",
	},
	surgeupgrade3: {
		num: -3004,
		name: "Surge-Upgrade-3",
		baseSpecies: "Surge",
		forme: "Upgrade-3",
		types: ["Electric", "Steel"],
		baseStats: {hp: 100, atk: 80, def: 100, spa: 115, spd: 100, spe: 115},
		abilities: {0: "Water Absorb", 1: "Volt Absorb", H: "Heavy Metal"},
		weightkg: 255.2,
		battleOnly: "Surge",
	},
	cobroom: {
		num: -3005,
		name: "Cobroom",
		baseForme: "Alchemist",
		types: ["Poison", "Fairy"],
		baseStats: {hp: 75, atk: 65, def: 115, spa: 70, spd: 115, spe: 60},
		abilities: {0: "Arcane Switch"},
		weightkg: 670,
		otherFormes: ["Cobroom-Sorcerer"],
		formeOrder: ["Cobroom", "Cobroom-Sorcerer"],
	},
	cobroomsorcerer: {
		num: -3005,
		name: "Cobroom-Sorcerer",
		baseSpecies: "Cobroom",
		forme: "Sorcerer",
		types: ["Dark", "Fairy"],
		baseStats: {hp: 75, atk: 135, def: 65, spa: 65, spd: 65, spe: 95},
		abilities: {0: "Arcane Switch"},
		weightkg: 670,
		battleOnly: "Cobroom",
	},
	escargoop: {
		num: -3006,
		name: "Escargoop",
		types: ["Poison", "Dark"],
		baseStats: {hp: 95, atk: 75, def: 102, spa: 70, spd: 101, spe: 74},
		abilities: {0: "Poison Point", 1: "Shell Armor", H: "Merciless"},
		weightkg: 29.9,
	},
	luneur: {
		num: -3007,
		name: "Luneur",
		types: ["Electric", "Psychic"],
		baseStats: {hp: 88, atk: 65, def: 55, spa: 120, spd: 109, spe: 88},
		abilities: {0: "Lightning Rod", 1: "Magic Guard", H: "Water Bubble"},
		weightkg: 0.5,
	},
	toxpear: {
		num: -3008,
		name: "Toxpear",
		types: ["Poison", "Steel"],
		baseStats: {hp: 80, atk: 90, def: 110, spa: 90, spd: 85, spe: 80},
		abilities: {0: "Corrosion", H: "Poison Point"},
		weightkg: 127,
	},
	ophalgalim: {
		num: -3009,
		gender: "N",
		name: "Ophalgalim",
		types: ["Ground", "Fairy"],
		baseStats: {hp: 87, atk: 77, def: 87, spa: 107, spd: 87, spe: 107},
		abilities: {0: "Forewarn", 1: "Gale Wings", H: "Flame Body"},
		weightkg: 125.9,
	},
	devioth: {
		num: -3010,
		name: "Devioth",
		types: ["Dark", "Bug"],
		baseStats: {hp: 65, atk: 105, def: 65, spa: 105, spd: 70, spe: 120},
		abilities: {0: "Infiltrator", H: "Swarm"},
		weightkg: 16.7,
	},
	crabulon: {
		num: -3011,
		name: "Crabulon",
		genderRatio: {M: 0.75, F: 0.25},
		types: ["Water", "Bug"],
		baseStats: {hp: 100, atk: 120, def: 80, spa: 70, spd: 80, spe: 90},
		abilities: {0: "Regenerator", 1: "Hyper Cutter", H: "Intimidate"},
		weightkg: 220,
	},
	dracalloy: {
		num: -3012,
		name: "Dracalloy",
		types: ["Steel", "Dragon"],
		baseStats: {hp: 96, atk: 115, def: 85, spa: 75, spd: 110, spe: 84},
		abilities: {0: "Levitate", H: "Lightning Rod"},
		weightkg: 250,
	},
	cozminea: {
		num: -3013,
		name: "Cozminea",
		baseForme: "Mini",
		types: ["Normal", "Psychic"],
		baseStats: {hp: 125, atk: 32, def: 72, spa: 58, spd: 73, spe: 111},
		abilities: {0: "Levitate", 1: "Cheek Pouch", H: "True Growth"},
		weightkg: 3,
		otherFormes: ["Cozminea-True"],
		formeOrder: ["Cozminea", "Cozminea-True"],
	},
	cozmineatrue: {
		num: -3013,
		name: "Cozminea-True",
		baseSpecies: "Cozminea",
		forme: "True",
		types: ["Dark", "Psychic"],
		baseStats: {hp: 125, atk: 118, def: 92, spa: 142, spd: 92, spe: 81},
		abilities: {0: "True Growth"},
		weightkg: 999.9,
		battleOnly: "Cozminea",
		requiredAbility: "True Growth",
	},
	fauxrend: {
		num: -3014,
		name: "Fauxrend",
		baseForme: "Daydream",
		types: ["Fairy", "Dark"],
		baseStats: {hp: 100, atk: 85, def: 125, spa: 85, spd: 125, spe: 80},
		abilities: {0: "Tinted Lens", 1: "Neuroforce", H: "Befriend"},
		weightkg: 2.5,
		otherFormes: ["Fauxrend-Nightmare"],
		formeOrder: ["Fauxrend", "Fauxrend-Nightmare"],
	},
	fauxrendnightmare: {
		num: -3014,
		name: "Fauxrend-Nightmare",
		baseSpecies: "Fauxrend",
		forme: "Nightmare",
		types: ["Dark", "Fairy"],
		baseStats: {hp: 100, atk: 125, def: 65, spa: 125, spd: 65, spe: 120},
		abilities: {0: "Tinted Lens", 1: "Neuroforce", H: "Befriend"},
		weightkg: 2.5,
		changesFrom: "Fauxrend",
	},
	
	
	//Other customs
	marabastion: {
		num: -2001,
		name: "Marabastion",
		types: ["Bug", "Steel"],
		baseStats: {hp: 85, atk: 120, def: 165, spa: 50, spd: 90, spe: 20},
		abilities: {0: "Skill Link", 1: "Heavy Metal", H: "Return Fire"},
		heightm: 3.9,
		weightkg: 375,
		color: "Gray",
		eggGroups: ["Mineral", "Bug"],
	},
	lurantis: {
		inherit: true,
		otherFormes: ["Lurantis-Totem", "Lurantis-Sinnoh"],
		formeOrder: ["Lurantis", "Lurantis-Totem", "Lurantis-Sinnoh"],
	},
	lurantissinnoh: {
		num: 754,
		name: "Lurantis-Sinnoh",
		baseSpecies: "Lurantis",
		forme: "Sinnoh",
		types: ["Fire", "Rock"],
		baseStats: {hp: 70, atk: 95, def: 90, spa: 90, spd: 90, spe: 45},
		abilities: {0: "Figurehead", H: "Dancer"},
		heightm: 0.9,
		weightkg: 18.5,
		color: "Red",
		eggGroups: ["Grass"],
	},
	wormuddle: {
		num: -2002,
		name: "Wormuddle",
		types: ["Ground", "Bug"],
		baseStats: {hp: 65, atk: 60, def: 130, spa: 85, spd: 135, spe: 35},
		abilities: {0: "Iron Barbs", 1: "Unaware", H: "Simple"},
		heightm: 0.3,
		weightkg: 0.4,
		color: "Brown",
		eggGroups: ["Bug", "Amorphous"],
	},
	shamaiai: {
		num: -2003,
		name: "Shamai-ai",
		types: ["Grass", "Fairy"],
		baseStats: {hp: 70, atk: 60, def: 90, spa: 105, spd: 125, spe: 110},
		abilities: {0: "Thorn Growth"},
		heightm: 0.5,
		weightkg: 32,
		color: "Green",
		eggGroups: ["Field", "Fairy"],
	},
	millibark: {
		num: -2004,
		name: "Millibark",
		types: ["Bug", "Grass"],
		baseStats: {hp: 90, atk: 125, def: 155, spa: 60, spd: 75, spe: 45},
		abilities: {0: "Weak Armor", 1: "Mold Breaker", H: "Arborous"},
		heightm: 2.6,
		weightkg: 515,
		color: "Brown",
		eggGroups: ["Bug", "Grass"],
	},
	graciflame: {
		num: -2005,
		name: "Graciflame",
		types: ["Fire", "Fairy"],
		baseStats: {hp: 65, atk: 65, def: 73, spa: 120, spd: 115, spe: 92},
		abilities: {0: "Competitive", 1: "Early Bird", H: "Dazzling"},
		heightm: 1.2,
		weightkg: 36,
		color: "Red",
		eggGroups: ["Flying"],
	},
	flufnir: {
		num: -2006,
		name: "Flufnir",
		types: ["Normal", "Dragon"],
		baseStats: {hp: 128, atk: 136, def: 64, spa: 80, spd: 64, spe: 63},
		abilities: {0: "Fluffy", 1: "Hustle", H: "Natural Cure"},
		heightm: 2.4,
		weightkg: 175,
		color: "Purple",
		eggGroups: ["Monster", "Dragon"],
	},
	sligneus: {
		num: -2007,
		name: "Sligneus",
		types: ["Fire"],
		baseStats: {hp: 58, atk: 75, def: 63, spa: 130, spd: 60, spe: 124},
		abilities: {0: "Flash Fire", 1: "Magma Armor", H: "Flame Body"},
		heightm: 0.7,
		weightkg: 131.3,
		color: "Red",
		eggGroups: ["Amorphous", "Water 1"],
	},
	toxitoad: {
		num: -2008,
		name: "Toxitoad",
		types: ["Poison"],
		baseStats: {hp: 105, atk: 55, def: 55, spa: 105, spd: 77, spe: 77},
		abilities: {0: "Clear Body", 1: "Saturation", H: "Filter"},
		heightm: 0.8,
		weightkg: 17,
		color: "Black",
		eggGroups: ["Water 1"],
	},
	locustab: {
		num: -2009,
		name: "Locustab",
		types: ["Bug", "Dark"],
		baseStats: {hp: 65, atk: 133, def: 72, spa: 69, spd: 62, spe: 104},
		abilities: {0: "Tough Claws", 1: "Sand Veil", H: "Sand Rush"},
		heightm: 1.2,
		weightkg: 23.2,
		color: "Green",
		eggGroups: ["Bug", "Human-Like"],
	},
	terrobeak: {
		num: -2010,
		name: "Terrobeak",
		types: ["Fighting", "Ground"],
		baseStats: {hp: 90, atk: 140, def: 76, spa: 40, spd: 50, spe: 99},
		abilities: {0: "Big Pecks", 1: "Sand Force", H: "Reckless"},
		heightm: 2.1,
		weightkg: 61,
		color: "Brown",
		eggGroups: ["Flying", "Field"],
	},
	faerosion: {
		num: -2011,
		name: "Faerosion",
		types: ["Fairy", "Ground"],
		baseStats: {hp: 50, atk: 50, def: 130, spa: 110, spd: 85, spe: 85},
		abilities: {0: "Stamina", H: "Drought"},
		heightm: 0.68,
		weightkg: 26.7,
		color: "Gray",
		eggGroups: ["Fairy", "Mineral"],
	},
	ubpocketwatch: {
		num: -2012,
		name: "UB Pocketwatch",
		gender: "N",
		types: ["Psychic", "Fighting"],
		baseStats: {hp: 71, atk: 127, def: 127, spa: 23, spd: 23, spe: 199},
		abilities: {0: "Beast Boost"},
		heightm: 1,
		weightkg: 34.5,
		color: "Brown",
	},
	finneon: {
		inherit: true,
		otherFormes: ["Finneon-Alola"],
		formeOrder: ["Finneon", "Finneon-Alola"],
	},
	finneonalola: {
		num: 456,
		name: "Finneon-Alola",
		baseSpecies: "Finneon",
		forme: "Alola",
		types: ["Water", "Fairy"],
		baseStats: {hp: 49, atk: 49, def: 56, spa: 49, spd: 61, spe: 66},
		abilities: {0: "Swift Swim", 1: "Storm Drain", H: "Pastel Veil"},
		heightm: 0.4,
		weightkg: 7,
		color: "Blue",
		evos: ["Lumineon-Alola"],
		eggGroups: ["Water 2", "Fairy"],
	},
	lumineon: {
		inherit: true,
		otherFormes: ["Lumineon-Alola"],
		formeOrder: ["Lumineon", "Lumineon-Alola"],
	},
	lumineonalola: {
		num: 457,
		name: "Lumineon-Alola",
		baseSpecies: "Lumineon",
		forme: "Alola",
		types: ["Water", "Fairy"],
		baseStats: {hp: 69, atk: 69, def: 76, spa: 69, spd: 86, spe: 91},
		abilities: {0: "Swift Swim", 1: "Storm Drain", H: "Pastel Veil"},
		heightm: 1.2,
		weightkg: 24,
		color: "Blue",
		prevo: "Finneon-Alola",
		evoLevel: 31,
		eggGroups: ["Water 2", "Fairy"],
	},
	teravole: {
		num: -2013,
		name: "Teravole", 
		types: ["Electric"],
		baseStats: {hp: 79, atk: 42, def: 94, spa: 89, spd: 124, spe: 67},
		abilities: {0: "Regenerator", 1: "Static", H: "Triage"},
		heightm: 0.5,
		weightkg: 7.9,
		color: "Yellow",
		eggGroups: ["Field", "Fairy"],
	},
	emblob: {
		num: -2014,
		name: "Emblob", 
		gender: "N",
		types: ["Fire"],
		baseStats: {hp: 55, atk: 75, def: 100, spa: 75, spd: 100, spe: 70},
		abilities: {0: "Innards Out"},
		heightm: 0.3,
		weightkg: 4,
		color: "Red",
		eggGroups: ["Mineral"],
	},
	wiwoxin: {
		num: -2015,
		name: "Wiwoxin", 
		types: ["Steel", "Poison"],
		baseStats: {hp: 55, atk: 75, def: 100, spa: 75, spd: 100, spe: 70},
		abilities: {0: "Shell Armor", 1: "Poison Point", H: "Iron Barbs"},
		heightm: 0.1,
		weightkg: 7.9,
		color: "Gray",
		eggGroups: ["Water 1"],
	},
	phantomaw: {
		num: -2016,
		name: "Phantomaw", 
		types: ["Ghost", "Flying"],
		baseStats: {hp: 70, atk: 55, def: 73, spa: 122, spd: 110, spe: 85},
		abilities: {0: "Limber", 1: "Frisk", H: "Bad Dreams"},
		heightm: 1.4,
		weightkg: 36.2,
		color: "Purple",
		eggGroups: ["Water 1", "Amorphous"],
	},
	pidodo: {
		num: -2017,
		name: "Pidodo", 
		types: ["Ground"],
		baseStats: {hp: 93, atk: 124, def: 85, spa: 57, spd: 75, spe: 55},
		abilities: {0: "Big Pecks", 1: "Unaware", H: "Oblivious"},
		heightm: 1.1,
		weightkg: 42,
		color: "Brown",
		eggGroups: ["Flying", "Field"],
	},
	mangroar: {
		num: -2018,
		name: "Mangroar", 
		types: ["Grass", "Water"],
		baseStats: {hp: 98, atk: 106, def: 75, spa: 108, spd: 75, spe: 73},
		abilities: {0: "Tangled Feet", 1: "Storm Drain", H: "Intimidate"},
		heightm: 1.4,
		weightkg: 68,
		color: "Green",
		eggGroups: ["Grass", "Field"],
	},
	abysseel: {
		num: -2019,
		name: "Abysseel", 
		types: ["Water", "Ghost"],
		baseStats: {hp: 116, atk: 71, def: 85, spa: 82, spd: 70, spe: 108},
		abilities: {0: "Gulp Missile"},
		heightm: 1.3,
		weightkg: 6.3,
		color: "Black",
		eggGroups: ["Water 1", "Amorphous"],
		otherFormes: ["Abysseel-Gulping", "Abysseel-Gorging"],
		formeOrder: ["Abysseel", "Abysseel-Gulping", "Abysseel-Gorging"],
	},
	abysseelgulping: {
		num: -2019,
		name: "Abysseel-Gulping", 
		baseSpecies: "Abysseel",
		forme: "Gulping",
		types: ["Water", "Ghost"],
		baseStats: {hp: 116, atk: 71, def: 85, spa: 82, spd: 70, spe: 108},
		abilities: {0: "Gulp Missile"},
		heightm: 1.3,
		weightkg: 6.3,
		color: "Black",
		eggGroups: ["Water 1", "Amorphous"],
		requiredAbility: "Gulp Missile",
		battleOnly: "Abysseel",
	},
	abysseelgorging: {
		num: -2019,
		name: "Abysseel-Gorging", 
		baseSpecies: "Abysseel",
		forme: "Gorging",
		types: ["Water", "Ghost"],
		baseStats: {hp: 116, atk: 71, def: 85, spa: 82, spd: 70, spe: 108},
		abilities: {0: "Gulp Missile"},
		heightm: 1.3,
		weightkg: 6.3,
		color: "Black",
		eggGroups: ["Water 1", "Amorphous"],
		requiredAbility: "Gulp Missile",
		battleOnly: "Abysseel",
	},
};
