export const Pokedex: {[speciesid: string]: SpeciesData} = {
	arcanine: {
		inherit: true,
		otherFormes: ["Arcanine-Alola"],
		formeOrder: ["Arcanine", "Arcanine-Alola"],
	},
	arcaninealola: {
		num: 59,
		name: "Arcanine-Alola",
		baseSpecies: "Arcanine",
		forme: "Alola",
		types: ["Water", "Dragon"],
		baseStats: {hp: 90, atk: 85, def: 105, spa: 85, spd: 95, spe: 95},
		abilities: {0: "Intimidate", 1: "Water Absorb", H: "Water Veil"},
		weightkg: 155,
		prevo: "Growlithe-Alola",
		evoType: "useItem",
		evoItem: "Water Stone",
		eggGroups: ["Field"],
	},
	arceus: {
		inherit: true,
		otherFormes: null,
		formeOrder: null,
	},
	arceusground: {
		inherit: true,
		baseStats: {hp: 95, atk: 95, def: 95, spa: 95, spd: 95, spe: 95},
		requiredItem: "Earth Plate",
		otherFormes: null,
		formeOrder: null,
		baseSpecies: null,
		changesFrom: null,
	},
	arctozolt: {
		inherit: true,
		baseStats: {hp: 90, atk: 90, def: 90, spa: 90, spd: 90, spe: 55},
		abilities: {0: "Slush Rush"},
	},
	catastroform: {
		num: 351,
		name: "Catastroform",
		types: ["Normal"],
		baseStats: {hp: 103, atk: 103, def: 85, spa: 103, spd: 85, spe: 121},
		abilities: {0: "Forecast"},
		heightm: 0.3,
		weightkg: 0.8,
		eggGroups: ["Fairy", "Amorphous"],
	},
	chesnaught: {
		inherit: true,
		baseStats: {hp: 88, atk: 107, def: 122, spa: 74, spd: 75, spe: 74},
		abilities: {0: "Rough Skin", H: "Bulletproof"},
	},
	cramorant: {
		inherit: true,
		types: ["Flying"],
		baseStats: {hp: 120, atk: 90, def: 90, spa: 90, spd: 90, spe: 90},
		abilities: {0: "Mold Breaker"},
		heightm: 0.8,
		weightkg: 18,
		eggGroups: ["Water 1", "Flying"],
	},
	cramorantswimmer: {
		num: 845,
		name: "Cramorant-Swimmer",
		types: ["Flying", "Water"],
		baseStats: {hp: 120, atk: 108, def: 85, spa: 85, spd: 75, spe: 111},
		abilities: {0: "As One (Arrokuda)"},
		heightm: 0.8,
		weightkg: 18,
		eggGroups: ["Water 1", "Flying"],
	},
	crobat: {
		inherit: true,
		types: ["Poison", "Flying"],
		baseStats: {hp: 95, atk: 95, def: 80, spa: 70, spd: 80, spe: 130},
		abilities: {0: "Overcoat", H: "Infiltrator"},
	},
	dugtrioalola: {
		inherit: true,
		baseStats: {hp: 65, atk: 110, def: 150, spa: 55, spd: 60, spe: 105},
		abilities: {0: "Sand Force", 1: "Iron Barbs", H: "Tangling Hair"},
	},
	farfetchd: {
		inherit: true,
		types: ["Grass", "Flying"],
		baseStats: {hp: 92, atk: 110, def: 85, spa: 38, spd: 92, spe: 110},
		abilities: {0: "Super Luck", H: "Defiant"},
	},
	genesect: {
		inherit: true,
		baseStats: {hp: 71, atk: 90, def: 95, spa: 90, spd: 95, spe: 89},
		otherFormes: ["Genesect-Douse", "Genesect-Freezer", "Genesect-Shock", "Genesect-Burn", "Genesect-Chill"],
		formeOrder: ["Genesect", "Genesect-Douse", "Genesect-Freezer", "Genesect-Shock", "Genesect-Burn", "Genesect-Chill"],
	},
	genesectdouse: {
		inherit: true,
		baseStats: {hp: 71, atk: 90, def: 95, spa: 90, spd: 95, spe: 89},
	},
	genesectshock: {
		inherit: true,
		baseStats: {hp: 71, atk: 90, def: 95, spa: 90, spd: 95, spe: 89},
	},
	genesectburn: {
		inherit: true,
		baseStats: {hp: 71, atk: 90, def: 95, spa: 90, spd: 95, spe: 89},
	},
	genesectchill: {
		inherit: true,
		baseStats: {hp: 71, atk: 90, def: 95, spa: 90, spd: 95, spe: 89},
	},
	genesectfreezer: {
		num: 649,
		name: "Genesect-Freezer",
		baseSpecies: "Genesect",
		forme: "Freezer",
		types: ["Bug", "Ice"],
		gender: "N",
		baseStats: {hp: 100, atk: 115, def: 75, spa: 60, spd: 75, spe: 115},
		abilities: {0: "Mountaineer"},
		heightm: 1.5,
		weightkg: 82.5,
		eggGroups: ["Undiscovered"],
	},
	girafarig: {
		inherit: true,
		types: ["Normal", "Ghost"],
		baseStats: {hp: 82, atk: 93, def: 82, spa: 93, spd: 82, spe: 98},
		abilities: {0: "Limber", H: "Synchronize"},
	},
	giratina: {
		inherit: true,
		abilities: {0: "Pressure", H: "Persistent"},
		baseStats: {hp: 100, atk: 90, def: 100, spa: 90, spd: 100, spe: 90},
		otherFormes: ["Giratina-Origin", "Giratina-Shadow"],
		formeOrder: ["Giratina", "Giratina-Origin", "Giratina-Shadow"],
	},
	giratinaorigin: {
		inherit: true,
		abilities: {0: "Levitate", H: "Infiltrator"},
		baseStats: {hp: 100, atk: 115, def: 70, spa: 115, spd: 70, spe: 100},
	},
	giratinashadow: {
		num: 487,
		name: "Giratina-Shadow",
		baseSpecies: "Giratina",
		forme: "Shadow",
		types: ["Ghost", "Dragon"],
		gender: "N",
		baseStats: {hp: 100, atk: 100, def: 100, spa: 100, spd: 100, spe: 100},
		abilities: {0: "Levitate", H: "Shadow World"},
		heightm: 6.9,
		weightkg: 650,
		eggGroups: ["Undiscovered"],
	},
	gliscor: {
		inherit: true,
		abilities: {0: "Hyper Cutter", H: "Sand Veil"},
	},
	golurk: {
		inherit: true,
		baseStats: {hp: 100, atk: 125, def: 80, spa: 55, spd: 80, spe: 55},
		abilities: {0: "Pressure", H: "Sand Veil"},
	},
	kyogre: {
		inherit: true,
		otherFormes: null,
		formeOrder: null,
	},
	kyogreprimal: {
		inherit: true,
		types: ["Water", "Ice"],
		baseStats: {hp: 110, atk: 100, def: 100, spa: 125, spd: 100, spe: 65},
		baseSpecies: null,
		forme: null,
		requiredItem: null,
		otherFormes: null,
		formeOrder: null,
		changesFrom: null,
	},
	groudon: {
		inherit: true,
		otherFormes: null,
		formeOrder: null,
	},
	groudonprimal: {
		inherit: true,
		types: ["Fire", "Rock"],
		baseStats: {hp: 110, atk: 125, def: 110, spa: 125, spd: 65, spe: 65},
		baseSpecies: null,
		forme: null,
		requiredItem: null,
		otherFormes: null,
		formeOrder: null,
		changesFrom: null,
	},
	landorus: {
		inherit: true,
		baseStats: {hp: 89, atk: 105, def: 80, spa: 85, spd: 80, spe: 101},
	},
	metagross: {
		inherit: true,
		abilities: {0: "Clear Body", 1: "Filter", H: "Light Metal"},
	},
	mewtwo: {
		inherit: true,
		abilities: {0: "Pressure", H: "Neuroforce"},
		baseStats: {hp: 106, atk: 110, def: 85, spa: 124, spd: 85, spe: 90},
	},
	pidgeot: {
		inherit: true,
		evos: ["Pidgeastroph"],
	},
	pidgeastroph: {
		num: 1001,
		name: "Pidgeastroph",
		types: ["Fire","Flying"],
		baseStats: {hp: 83, atk: 75, def: 75, spa: 110, spd: 75, spe: 121},
		abilities: {0: "No Guard", 1: "Tangled Feet", H: "Gale Wings"},
		heightm: 2.2,
		weightkg: 50.5,
		prevo: "pidgeot",
	},
	plubia: {
		num: 1002,
		name: "Plubia",
		types: ["Normal", "Ghost"],
		gender: "N",
		baseStats: {hp: 103, atk: 113, def: 41, spa: 127, spd: 97, spe: 89},
		abilities: {0: "Beast Boost"},
		heightm: 0.4,
		weightkg: 32.0,
		color: "Brown",
		eggGroups: ["Undiscovered"],
	},
	rotom: {
		inherit: true,
		otherFormes: ["Rotom-Heat", "Rotom-Fan"],
		formeOrder: ["Rotom", "Rotom-Heat", "Rotom-Fan"],
	},
	rotomheat: {
		inherit: true,
		baseStats: {hp: 50, atk: 65, def: 107, spa: 115, spd: 107, spe: 91},
		changesFrom: null,
	},
	rotomfan: {
		inherit: true,
		types: ["Flying", "Steel"],
		baseStats: {hp: 100, atk: 65, def: 80, spa: 105, spd: 80, spe: 90},
		abilities: {0: "Delta Stream"},
		changesFrom: null,
	},
	sawsbuck: {
		inherit: true,
		otherFormes: ["Sawsbuck-Mega", "Sawsbuck-Summer-Mega", "Sawsbuck-Autumn-Mega", "Sawsbuck-Winter-Mega"],
		formeOrder: ["Sawsbuck", "Sawsbuck-Summer", "Sawsbuck-Autumn", "Sawsbuck-Winter", "Sawsbuck-Mega", "Sawsbuck-Summer-Mega", "Sawsbuck-Autumn-Mega", "Sawsbuck-Winter-Mega"],
		movepoolAdditions: ["moonblast", "petalblizzard", "playrough", "flameburst", "flamethrower", "growth", "leafstorm", "overheat", "poltergeist", "shadowsneak", "strengthsap", "trickortreat", "highhorsepower", "iceshard", "iciclecrash", "tripleaxel"],
	},
	sawsbuckmega: {
		num: 586,
		name: "Sawsbuck-Mega",
		baseSpecies: "Sawsbuck",
		forme: "Mega",
		types: ["Fairy", "Grass"],
		baseStats: {hp: 80, atk: 120, def: 80, spa: 100, spd: 80, spe: 115},
		abilities: {0: "Spring Fever"},
		heightm: 1.9,
		weightkg: 92.5,
		color: "Brown",
		eggGroups: ["Field"],
		requiredItem: "Sawsbuckite",
	},
	sawsbucksummermega: {
		num: 586,
		name: "Sawsbuck-Summer-Mega",
		baseSpecies: "Sawsbuck",
		forme: "Mega-Summer",
		types: ["Fire", "Grass"],
		baseStats: {hp: 80, atk: 100, def: 70, spa: 135, spd: 70, spe: 120},
		abilities: {0: "Summer Days"},
		heightm: 1.9,
		weightkg: 92.5,
		color: "Brown",
		eggGroups: ["Field"],
		requiredItem: "Sawsbuckite",
		battleOnly: "Sawsbuck-Summer",
	},
	sawsbuckautumnmega: {
		num: 586,
		name: "Sawsbuck-Autumn-Mega",
		baseSpecies: "Sawsbuck",
		forme: "Mega-Autumn",
		types: ["Ghost", "Grass"],
		baseStats: {hp: 80, atk: 110, def: 115, spa: 60, spd: 115, spe: 95},
		abilities: {0: "Autumn Leaves"},
		heightm: 1.9,
		weightkg: 92.5,
		color: "Brown",
		eggGroups: ["Field"],
		requiredItem: "Sawsbuckite",
		battleOnly: "Sawsbuck-Autumn",
	},
	sawsbuckwintermega: {
		num: 586,
		name: "Sawsbuck-Winter-Mega",
		baseSpecies: "Sawsbuck",
		forme: "Mega-Winter",
		types: ["Ice", "Grass"],
		baseStats: {hp: 80, atk: 130, def: 105, spa: 60, spd: 85, spe: 115},
		abilities: {0: "Winter's Tale"},
		heightm: 1.9,
		weightkg: 92.5,
		color: "Brown",
		eggGroups: ["Field"],
		requiredItem: "Sawsbuckite",
		battleOnly: "Sawsbuck-Winter",
	},
	silvally: {
		inherit: true,
		otherFormes: null,
		formeOrder: null,
	},
	silvallyfairy: {
		inherit: true,
		baseStats: {hp: 100, atk: 115, def: 95, spa: 100, spd: 95, spe: 95},
		otherFormes: null,
		formeOrder: null,
		baseSpecies: null,
		changesFrom: null,
	},
	slowbro: {
		inherit: true,
		baseStats: {hp: 95, atk: 75, def: 120, spa: 115, spd: 80, spe: 30},
		abilities: {0: "Oblivious", H: "Own Tempo"},
	},
	slowbrogalar: {
		inherit: true,
		baseStats: {hp: 95, atk: 110, def: 95, spa: 110, spd: 70, spe: 30},
		abilities: {0: "Regenerator", 1: "Merciless", H: "Quick Draw"},
	},
	slowking: {
		inherit: true,
		baseStats: {hp: 95, atk: 75, def: 80, spa: 115, spd: 120, spe: 30},
		abilities: {0: "Oblivious", H: "Own Tempo"},
	},
	stoutland: {
		inherit: true,
		baseStats: {hp: 85, atk: 120, def: 90, spa: 45, spd: 90, spe: 80},
	},
	supergeist: {
		num: 711,
		name: "Supergeist",
		types: ["Ghost", "Grass"],
		baseStats: {hp: 60, atk: 104, def: 117, spa: 104, spd: 117, spe: 98},
		abilities: {0: "Pressure", 1: "Frisk", H: "Perish Body"},
		heightm: 1.7,
		weightkg: 39,
		eggGroups: ["Amorphous"],
	},
	swordeo: {
		num: 647,
		name: "Swordeo",
		types: ["Rock", "Fighting"],
		gender: "N",
		baseStats: {hp: 91, atk: 62, def: 90, spa: 118, spd: 90, spe: 99},
		abilities: {0: "Intrepid Sword", 1: "Sand Force", H: "Victory Star"},
		heightm: 1.4,
		weightkg: 48.5,
		eggGroups: ["Undiscovered"],
	},
	tapufini: {
		inherit: true,
		baseStats: {hp: 70, atk: 75, def: 125, spa: 95, spd: 100, spe: 85},
		abilities: {0: "Misty Surge"},
		otherFormes: ["Tapu Fini-Kinolau"],
		formeOrder: ["Tapu Fini", "Tapu Fini-Kinolau"],
	},
	tapufinikinolau: {
		num: 788,
		name: "Tapu Fini-Kinolau",
		baseSpecies: "Tapu Fini",
		forme: "Kinolau",
		types: ["Water", "Steel"],
		gender: "N",
		baseStats: {hp: 70, atk: 75, def: 105, spa: 105, spd: 140, spe: 75},
		abilities: {0: "Swift Swim"},
		heightm: 1.3,
		weightkg: 21.2,
		color: "Purple",
		eggGroups: ["Undiscovered"],
		changesFrom: "Tapu Fini",
	},
	tapukoko: {
		inherit: true,
		abilities: {0: "Electric Surge"},
		otherFormes: ["Tapu Koko-Kinolau"],
		formeOrder: ["Tapu Koko", "Tapu Koko-Kinolau"],
	},
	tapukokokinolau: {
		num: 785,
		name: "Tapu Koko-Kinolau",
		baseSpecies: "Tapu Koko",
		forme: "Kinolau",
		types: ["Electric", "Flying"],
		gender: "N",
		baseStats: {hp: 70, atk: 110, def: 75, spa: 90, spd: 75, spe: 150},
		abilities: {0: "Tough Claws"},
		heightm: 1.8,
		weightkg: 20.5,
		color: "Yellow",
		eggGroups: ["Undiscovered"],
		changesFrom: "Tapu Koko",
	},
	venuroar: {
		fusion: ['Venusaur', 'Incineroar'],
		num: 1005,
		name: "Venuroar",
		types: ["Grass", "Fire"],
		baseStats: {hp: 100, atk: 100, def: 90, spa: 90, spd: 100, spe: 70},
		abilities: {0: "Sink or Swim"},
		weightkg: 91.5,
	},
	venuroarmega: {
		fusion: ['Venusaur', 'Incineroar'],
		num: 1005,
		name: "Venuroar-Mega",
		baseSpecies: "Venuroar",
		forme: "Mega",
		types: ["Grass", "Fire"],
		baseStats: {hp: 100, atk: 118, def: 130, spa: 112, spd: 120, spe: 70},
		abilities: {0: "Thick Fat"},
		weightkg: 147,
		requiredItem: "Venusaurite",
		battleOnly: "Venuroar",
	},
	vivillonfancy: {
		num: 666,
		name: "Vivillon-Fancy",
		types: ["Bug", "Flying"],
		baseStats: {hp: 85, atk: 70, def: 80, spa: 125, spd: 80, spe: 100},
		abilities: {0: "Protean"},
		heightm: 1.2,
		weightkg: 17,
		eggGroups: ["Bug"],
		baseSpecies: null,
		cosmeticFormes: null,
		forme: null,
		formeOrder: null,
		changesFrom: null,
	},
	zarapex: {
		fusion: ['Zarude', 'Toxapex'],
		num: 1006,
		name: "Zarapex",
		types: ["Grass", "Poison"],
		baseStats: {hp: 77, atk: 106, def: 128, spa: 61, spd: 118, spe: 70},
		abilities: {0: "Natural Cure"},
		weightkg: 91.2,
	},
	
	//NFE Pokemon
	ivycat: {
		fusion: ['Ivysaur', 'Torracat'],
		num: 1004,
		name: "Ivycat",
		types: ["Grass", "Fire"],
		baseStats: {hp: 75, atk: 75, def: 60, spa: 80, spd: 70, spe: 75},
		abilities: {0: "Sink or Swim"},
		weightkg: 19,
		evos: ["Venuroar"],
	},
	
	//LC Pokemon
	growlithe: {
		inherit: true,
		otherFormes: ["Growlithe-Alola"],
		formeOrder: ["Growlithe", "Growlithe-Alola"],
	},
	growlithealola: {
		num: 58,
		name: "Growlithe-Alola",
		baseSpecies: "Growlithe",
		forme: "Alola",
		types: ["Water"],
		baseStats: {hp: 55, atk: 45, def: 70, spa: 50, spd: 70, spe: 60},
		abilities: {0: "Intimidate", 1: "Water Absorb", H: "Water Veil"},
		weightkg: 19,
		evos: ["Arcanine-Alola"],
		eggGroups: ["Field"],
	},
	bulbalit: {
		fusion: ['Bulbasaur', 'Litten'],
		num: 1003,
		name: "Bulbalit",
		types: ["Grass", "Fire"],
		baseStats: {hp: 58, atk: 59, def: 48, spa: 62, spd: 57, spe: 57},
		abilities: {0: "Sink or Swim"},
		weightkg: 5.6,
		evos: ["Ivycat"],
	},
};