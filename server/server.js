Meteor.startup(function() {
	Restivus.configure({
		useAuth: true,
		prettyJson: true
	});
	Restivus.addCollection(Teams);
	Restivus.addCollection(Pokemons);
	
	if (Pokemons.find().count() === 0) {
		var properties = [
		    {
		        id: 1,
		        name: 'Bulbasaur',
		        types: [
		          'Grass',
		          'Poison'
		        ],
		        HP: 45,
		        Atk: 49,
		        Def: 49,
		        SpAtk: 65,
		        SpDef: 65,
		        Spd: 45,
		        Total: 318,
		        abilities: [
		            'Overgrow',
		            'Chlorophyll'
		        ],
		        image: 'http://cdn.bulbagarden.net/upload/thumb/2/21/001Bulbasaur.png/250px-001Bulbasaur.png'
		    },
		    {
		        id: 2,
		        name: 'Ivysaur',
		        types: [
		          'Grass',
		          'Poison'
		        ],
		        HP: 60,
		        Atk: 62,
		        Def: 63,
		        SpAtk: 80,
		        SpDef: 80,
		        Spd: 60,
		        Total: 405,
		        abilities: [
		            'Overgrow',
		            'Chlorophyll'
		        ],
		        image: 'http://cdn.bulbagarden.net/upload/7/73/002Ivysaur.png'
		    },
		    {
		        id: 3,
		        name: 'Venusaur',
		        types: [
		          'Grass',
		          'Poison'
		        ],
		        HP: 80,
		        Atk: 82,
		        Def: 83,
		        SpAtk: 100,
		        SpDef: 100,
		        Spd: 80,
		        Total: 525,
		        abilities: [
		            'Overgrow',
		            'Chlorophyll'
		        ],
		        image: 'http://cdn.bulbagarden.net/upload/a/ae/003Venusaur.png'
		    },
		    {
		        id: 4,
		        name: 'Charmander',
		        types: [
		          'Fire'
		        ],
		        HP: 39,
		        Atk: 52,
		        Def: 43,
		        SpAtk: 60,
		        SpDef: 50,
		        Spd: 65,
		        Total: 309,
		        abilities: [
		            'Blaze',
		            'Solar Power'
		        ],
		        image: 'http://cdn.bulbagarden.net/upload/7/73/004Charmander.png'
		    },
		    {
		        id: 5,
		        name: 'Charmeleon',
		        types: [
		          'Fire'
		        ],
		        HP: 58,
		        Atk: 64,
		        Def: 58,
		        SpAtk: 80,
		        SpDef: 65,
		        Spd: 80,
		        Total: 405,
		        abilities: [
		            'Blaze',
		            'Solar Power'
		        ],
		        image: 'http://cdn.bulbagarden.net/upload/4/4a/005Charmeleon.png'
		    },
		    {
		        id: 6,
		        name: 'Charizard',
		        types: [
		          'Fire',
		          'Flying'
		        ],
		        HP: 78,
		        Atk: 84,
		        Def: 78,
		        SpAtk: 109,
		        SpDef: 85,
		        Spd: 100,
		        Total: 534,
		        abilities: [
		            'Blaze',
		            'Solar Power'
		        ],
		        image: 'http://cdn.bulbagarden.net/upload/7/7e/006Charizard.png'
		    },
		    {
		        id: 7,
		        name: 'Squirtle',
		        types: [
		            'Water'
		        ],
		        HP: 44,
		        Atk: 48,
		        Def: 65,
		        SpAtk: 50,
		        SpDef: 64,
		        Spd: 43,
		        Total: 314,
		        abilities: [
		            'Torrent',
		            'Rain Dish'
		        ],
		        image: 'http://cdn.bulbagarden.net/upload/3/39/007Squirtle.png'
		    },
		    {
		        id: 8,
		        name: 'Wartortle',
		        types: [
		            'Water'
		        ],
		        HP: 59,
		        Atk: 63,
		        Def: 80,
		        SpAtk: 65,
		        SpDef: 80,
		        Spd: 58,
		        Total: 405,
		        abilities: [
		            'Torrent',
		            'Rain Dish'
		        ],
		        image: 'http://cdn.bulbagarden.net/upload/0/0c/008Wartortle.png'
		    },
		    {
		        id: 9,
		        name: 'Blastoise',
		        types: [
		            'Water'
		        ],
		        HP: 79,
		        Atk: 83,
		        Def: 100,
		        SpAtk: 85,
		        SpDef: 105,
		        Spd: 78,
		        Total: 530,
		        abilities: [
		            'Torrent',
		            'Rain Dish'
		        ],
		        image: 'http://cdn.bulbagarden.net/upload/0/02/009Blastoise.png'
		    },
		    {
		        id: 10,
		        name: 'Caterpie',
		        types: [
		            'Bug'
		        ],
		        HP: 45,
		        Atk: 30,
		        Def: 35,
		        SpAtk: 20,
		        SpDef: 20,
		        Spd: 45,
		        Total: 195,
		        abilities: [
		            'Shield Dust',
		            'Run Away'
		        ],
		        image: 'http://cdn.bulbagarden.net/upload/5/5d/010Caterpie.png'
		    },
		    {
		        id: 11,
		        name: 'Metapod',
		        types: [
		            'Bug'
		        ],
		        HP: 50,
		        Atk: 20,
		        Def: 55,
		        SpAtk: 25,
		        SpDef: 25,
		        Spd: 30,
		        Total: 205,
		        abilities: [
		            'Shed Skin'
		        ],
		        image: 'http://cdn.bulbagarden.net/upload/c/cd/011Metapod.png'
		    },
		    {
		        id: 12,
		        name: 'Butterfree',
		        types: [
		            'Bug',
		            'Flying'
		        ],
		        HP: 60,
		        Atk: 45,
		        Def: 50,
		        SpAtk: 90,
		        SpDef: 80,
		        Spd: 70,
		        Total: 395,
		        abilities: [
		            'Compound Eyes',
		            'Tinted Lens'
		        ],
		        image: 'http://cdn.bulbagarden.net/upload/d/d1/012Butterfree.png'
		    },
		    {
		        id: 13,
		        name: 'Weedle',
		        types: [
		            'Bug',
		            'Poison'
		        ],
		        HP: 40,
		        Atk: 35,
		        Def: 30,
		        SpAtk: 20,
		        SpDef: 20,
		        Spd: 50,
		        Total: 195,
		        abilities: [
		            'Shield Dust',
		            'Run Away'
		        ],
		        image: 'http://cdn.bulbagarden.net/upload/d/df/013Weedle.png'
		    },
		    {
		        id: 14,
		        name: 'Kakuna',
		        types: [
		            'Bug',
		            'Poison'
		        ],
		        HP: 45,
		        Atk: 25,
		        Def: 50,
		        SpAtk: 25,
		        SpDef: 25,
		        Spd: 35,
		        Total: 205,
		        abilities: [
		            'Shed Skin'
		        ],
		        image: 'http://cdn.bulbagarden.net/upload/f/f0/014Kakuna.png'
		    },
		    {
		        id: 15,
		        name: 'Beedrill',
		        types: [
		            'Bug',
		            'Poison'
		        ],
		        HP: 65,
		        Atk: 90,
		        Def: 40,
		        SpAtk: 45,
		        SpDef: 80,
		        Spd: 75,
		        Total: 395,
		        abilities: [
		            'Swarm',
		            'Sniper'
		        ],
		        image: 'http://cdn.bulbagarden.net/upload/6/61/015Beedrill.png'
		    },
		    {
		        id: 16,
		        name: 'Pidgey',
		        types: [
		            'Normal',
		            'Flying'
		        ],
		        HP: 40,
		        Atk: 45,
		        Def: 40,
		        SpAtk: 35,
		        SpDef: 35,
		        Spd: 56,
		        Total: 251,
		        abilities: [
		            'Keen Eye',
		            'Tangled Feet',
		            'Big Pecks'
		        ],
		        image: 'http://cdn.bulbagarden.net/upload/5/55/016Pidgey.png'
		    },
		    {
		        id: 17,
		        name: 'Pidgeotto',
		        types: [
		            'Normal',
		            'Flying'
		        ],
		        HP: 63,
		        Atk: 60,
		        Def: 55,
		        SpAtk: 50,
		        SpDef: 50,
		        Spd: 71,
		        Total: 349,
		        abilities: [
		            'Keen Eye',
		            'Tangled Feet',
		            'Big Pecks'
		        ],
		        image: 'http://cdn.bulbagarden.net/upload/7/7a/017Pidgeotto.png'
		    },
		    {
		        id: 18,
		        name: 'Pidgeot',
		        types: [
		            'Normal',
		            'Flying'
		        ],
		        HP: 83,
		        Atk: 80,
		        Def: 75,
		        SpAtk: 70,
		        SpDef: 70,
		        Spd: 101,
		        Total: 479,
		        abilities: [
		            'Keen Eye',
		            'Tangled Feet',
		            'Big Pecks'
		        ],
		        image: 'http://cdn.bulbagarden.net/upload/5/57/018Pidgeot.png'
		    },
		    {
		        id: 19,
		        name: 'Rattata',
		        types: [
		            'Normal'
		        ],
		        HP: 30,
		        Atk: 56,
		        Def: 35,
		        SpAtk: 25,
		        SpDef: 35,
		        Spd: 72,
		        Total: 253,
		        abilities: [
		            'Run Away',
		            'Guts',
		            'Hustle'
		        ],
		        image: 'http://cdn.bulbagarden.net/upload/4/46/019Rattata.png'
		    },
		    {
		        id: 20,
		        name: 'Raticate',
		        types: [
		            'Normal'
		        ],
		        HP: 55,
		        Atk: 81,
		        Def: 60,
		        SpAtk: 50,
		        SpDef: 70,
		        Spd: 97,
		        Total: 413,
		        abilities: [
		            'Run Away',
		            'Guts',
		            'Hustle'
		        ],
		        image: 'http://cdn.bulbagarden.net/upload/f/f4/020Raticate.png'
		    },
		    {
		        id: 21,
		        name: 'Spearow',
		        types: [
		            'Normal',
		            'Flying'
		        ],
		        HP: 40,
		        Atk: 60,
		        Def: 30,
		        SpAtk: 31,
		        SpDef: 31,
		        Spd: 70,
		        Total: 262,
		        abilities: [
		            'Keen Eye',
		            'Sniper'
		        ],
		        image: 'http://cdn.bulbagarden.net/upload/8/8b/021Spearow.png'
		    },
		    {
		        id: 22,
		        name: 'Fearow',
		        types: [
		            'Normal',
		            'Flying'
		        ],
		        HP: 65,
		        Atk: 90,
		        Def: 65,
		        SpAtk: 61,
		        SpDef: 61,
		        Spd: 100,
		        Total: 442,
		        abilities: [
		            'Keen Eye',
		            'Sniper'
		        ],
		        image: 'http://cdn.bulbagarden.net/upload/a/a0/022Fearow.png'
		    },
		    {
		        id: 23,
		        name: 'Ekans',
		        types: [
		            'Poison'
		        ],
		        HP: 35,
		        Atk: 60,
		        Def: 44,
		        SpAtk: 40,
		        SpDef: 54,
		        Spd: 55,
		        Total: 288,
		        abilities: [
		            'Intimidate',
		            'Shed Skin',
		            'Unnerve'
		        ],
		        image: 'http://cdn.bulbagarden.net/upload/f/fa/023Ekans.png'
		    },
		    {
		        id: 24,
		        name: 'Arbok',
		        types: [
		            'Poison'
		        ],
		        HP: 60,
		        Atk: 85,
		        Def: 69,
		        SpAtk: 65,
		        SpDef: 79,
		        Spd: 80,
		        Total: 438,
		        abilities: [
		            'Intimidate',
		            'Shed Skin',
		            'Unnerve'
		        ],
		        image: 'http://cdn.bulbagarden.net/upload/c/cd/024Arbok.png'
		    },
		    {
		        id: 25,
		        name: 'Pikachu',
		        types: [
		            'Electric'
		        ],
		        HP: 35,
		        Atk: 55,
		        Def: 40,
		        SpAtk: 50,
		        SpDef: 50,
		        Spd: 90,
		        Total: 320,
		        abilities: [
		            'Static',
		            'Lightning Rod'
		        ],
		        image: 'http://cdn.bulbagarden.net/upload/0/0d/025Pikachu.png'
		    },
		    {
		        id: 26,
		        name: 'Raichu',
		        types: [
		            'Electric'
		        ],
		        HP: 60,
		        Atk: 90,
		        Def: 55,
		        SpAtk: 90,
		        SpDef: 80,
		        Spd: 110,
		        Total: 485,
		        abilities: [
		            'Static',
		            'Lightning Rod'
		        ],
		        image: 'http://cdn.bulbagarden.net/upload/8/88/026Raichu.png'
		    },
		    {
		        id: 27,
		        name: 'Sandshrew',
		        types: [
		            'Ground'
		        ],
		        HP: 50,
		        Atk: 75,
		        Def: 85,
		        SpAtk: 20,
		        SpDef: 30,
		        Spd: 40,
		        Total: 300,
		        abilities: [
		            'Sand Veil',
		            'Sand Rush'
		        ],
		        image: 'http://cdn.bulbagarden.net/upload/9/9e/027Sandshrew.png'
		    },
		    {
		        id: 28,
		        name: 'Sandslash',
		        types: [
		            'Ground'
		        ],
		        HP: 75,
		        Atk: 100,
		        Def: 110,
		        SpAtk: 45,
		        SpDef: 55,
		        Spd: 65,
		        Total: 450,
		        abilities: [
		            'Sand Veil',
		            'Sand Rush'
		        ],
		        image: 'http://cdn.bulbagarden.net/upload/0/0b/028Sandslash.png'
		    },
		    {
		        id: 29,
		        name: 'Nidoran \u2640',
		        types: [
		            'Poison'
		        ],
		        HP: 55,
		        Atk: 47,
		        Def: 52,
		        SpAtk: 40,
		        SpDef: 40,
		        Spd: 41,
		        Total: 275,
		        abilities: [
		            'Poison Point',
		            'Rivalry',
		            'Hustle'
		        ],
		        image: 'http://cdn.bulbagarden.net/upload/8/81/029Nidoran.png'
		    },
		    {
		        id: 30,
		        name: 'Nidorina',
		        types: [
		            'Poison'
		        ],
		        HP: 70,
		        Atk: 62,
		        Def: 67,
		        SpAtk: 55,
		        SpDef: 55,
		        Spd: 56,
		        Total: 365,
		        abilities: [
		            'Poison Point',
		            'Rivalry',
		            'Hustle'
		        ],
		        image: 'http://cdn.bulbagarden.net/upload/c/cd/030Nidorina.png'
		    },
		    {
		        id: 31,
		        name: 'Nidoqueen',
		        types: [
		            'Poison',
		            'Ground'
		        ],
		        HP: 90,
		        Atk: 92,
		        Def: 87,
		        SpAtk: 75,
		        SpDef: 85,
		        Spd: 76,
		        Total: 505,
		        abilities: [
		            'Poison Point',
		            'Rivalry',
		            'Sheer Force'
		        ],
		        image: 'http://cdn.bulbagarden.net/upload/b/bf/031Nidoqueen.png'
		    },
		    {
		        id: 32,
		        name: 'Nidoran \u2642',
		        types: [
		            'Poison'
		        ],
		        HP: 46,
		        Atk: 57,
		        Def: 40,
		        SpAtk: 40,
		        SpDef: 40,
		        Spd: 50,
		        Total: 273,
		        abilities: [
		            'Poison Point',
		            'Rivalry',
		            'Hustle'
		        ],
		        image: 'http://cdn.bulbagarden.net/upload/4/4a/032Nidoran.png'
		    },
		    {
		        id: 33,
		        name: 'Nidorino',
		        types: [
		            'Poison'
		        ],
		        HP: 61,
		        Atk: 72,
		        Def: 57,
		        SpAtk: 55,
		        SpDef: 55,
		        Spd: 65,
		        Total: 365,
		        abilities: [
		            'Poison Point',
		            'Rivalry',
		            'Hustle'
		        ],
		        image: 'http://cdn.bulbagarden.net/upload/9/9f/033Nidorino.png'
		    },
		    {
		        id: 34,
		        name: 'Nidoking',
		        types: [
		            'Poison',
		            'Ground'
		        ],
		        abilities: [
		            'Poison Point',
		            'Rivalry',
		            'Sheer Force'
		        ],
		        HP: 81,
		        Atk: 102,
		        Def: 77,
		        SpAtk: 85,
		        SpDef: 75,
		        Spd: 85,
		        Total: 505,
		        image: 'http://cdn.bulbagarden.net/upload/c/c6/034Nidoking.png'
		    },
		    {
		        id: 35,
		        name: 'Clefairy',
		        types: [
		            'Fairy'
		        ],
		        HP: 70,
		        Atk: 45,
		        Def: 48,
		        SpAtk: 60,
		        SpDef: 65,
		        Spd: 35,
		        Total: 323,
		        abilities: [
		            'Cute Charm',
		            'Magic Guard',
		            'Friend Guard'
		        ],
		        image: 'http://cdn.bulbagarden.net/upload/f/f4/035Clefairy.png'
		    },
		    {
		        id: 36,
		        name: 'Clefable',
		        types: [
		            'Fairy'
		        ],
		        HP: 95,
		        Atk: 70,
		        Def: 73,
		        SpAtk: 95,
		        SpDef: 90,
		        Spd: 60,
		        Total: 483,
		        abilities: [
		            'Cute Charm',
		            'Magic Guard',
		            'Unaware'
		        ],
		        image: 'http://cdn.bulbagarden.net/upload/a/a9/036Clefable.png'
		    },
		    {
		        id: 37,
		        name: 'Vulpix',
		        types: [
		            'Fire'
		        ],
		        HP: 38,
		        Atk: 41,
		        Def: 40,
		        SpAtk: 50,
		        SpDef: 65,
		        Spd: 65,
		        Total: 299,
		        abilities: [
		            'Flash Fire',
		            'Drought'
		        ],
		        image: 'http://cdn.bulbagarden.net/upload/6/60/037Vulpix.png'
		    },
		    {
		        id: 38,
		        name: 'Ninetales',
		        types: [
		            'Fire'
		        ],
		        HP: 73,
		        Atk: 76,
		        Def: 75,
		        SpAtk: 81,
		        SpDef: 100,
		        Spd: 100,
		        Total: 505,
		        abilities: [
		            'Flash Fire',
		            'Drought'
		        ],
		        image: 'http://cdn.bulbagarden.net/upload/0/05/038Ninetales.png'
		    },
		    {
		        id: 39,
		        name: 'Jigglypuff',
		        types: [
		            'Normal',
		            'Fairy'
		        ],
		        abilities: [
		            'Cute Charm',
		            'Competitive',
		            'Friend Guard'
		        ],
		        HP: 115,
		        Atk: 45,
		        Def: 20,
		        SpAtk: 45,
		        SpDef: 25,
		        Spd: 20,
		        Total: 270,
		        image: 'http://cdn.bulbagarden.net/upload/3/3e/039Jigglypuff.png'
		    },
		    {
		        id: 40,
		        name: 'Wigglytuff',
		        types: [
		            'Normal',
		            'Fairy'
		        ],
		        HP: 140,
		        Atk: 70,
		        Def: 45,
		        SpAtk: 85,
		        SpDef: 50,
		        Spd: 45,
		        Total: 435,
		        abilities: [
		            'Cute Charm',
		            'Competitive',
		            'Frisk'
		        ],
		        image: 'http://cdn.bulbagarden.net/upload/9/92/040Wigglytuff.png'
		    },
		    {
		        id: 41,
		        name: 'Zubat',
		        types: [
		            'Poison',
		            'Flying'
		        ],
		        HP: 40,
		        Atk: 45,
		        Def: 35,
		        SpAtk: 30,
		        SpDef: 40,
		        Spd: 55,
		        Total: 245,
		        abilities: [
		            'Inner Focus',
		            'Infiltrator'
		        ],
		        image: 'http://cdn.bulbagarden.net/upload/d/da/041Zubat.png'
		    },
		    {
		        id: 42,
		        name: 'Golbat',
		        types: [
		            'Poison',
		            'Flying'
		        ],
		        HP: 75,
		        Atk: 80,
		        Def: 70,
		        SpAtk: 65,
		        SpDef: 75,
		        Spd: 90,
		        Total: 455,
		        abilities: [
		            'Inner Focus',
		            'Infiltrator'
		        ],
		        image: 'http://cdn.bulbagarden.net/upload/0/0c/042Golbat.png'
		    },
		    {
		        id: 43,
		        name: 'Oddish',
		        types: [
		            'Grass',
		            'Poison'
		        ],
		        HP: 45,
		        Atk: 50,
		        Def: 55,
		        SpAtk: 75,
		        SpDef: 65,
		        Spd: 30,
		        Total: 320,
		        abilities: [
		            'Chlorophyll',
		            'Run Away'
		        ],
		        image: 'http://cdn.bulbagarden.net/upload/4/43/043Oddish.png'
		    },
		    {
		        id: 44,
		        name: 'Gloom',
		        types: [
		            'Grass',
		            'Poison'
		        ],
		        abilities: [
		            'Chlorophyll',
		            'Stench'
		        ],
		        HP: 60,
		        Atk: 65,
		        Def: 70,
		        SpAtk: 85,
		        SpDef: 75,
		        Spd: 40,
		        Total: 395,
		        image: 'http://cdn.bulbagarden.net/upload/2/2a/044Gloom.png'
		    },
		    {
		        id: 45,
		        name: 'Vileplume',
		        types: [
		            'Grass',
		            'Poison'
		        ],
		        HP: 75,
		        Atk: 80,
		        Def: 85,
		        SpAtk: 110,
		        SpDef: 90,
		        Spd: 50,
		        Total: 490,
		        abilities: [
		            'Chlorophyll',
		            'Effect Spore'
		        ],
		        image: 'http://cdn.bulbagarden.net/upload/6/6a/045Vileplume.png'
		    },
		    {
		        id: 46,
		        name: 'Paras',
		        types: [
		            'Bug',
		            'Grass'
		        ],
		        HP: 35,
		        Atk: 70,
		        Def: 55,
		        SpAtk: 45,
		        SpDef: 55,
		        Spd: 25,
		        Total: 285,
		        abilities: [
		            'Effect Spore',
		            'Dry Skin',
		            'Damp'
		        ],
		        image: 'http://cdn.bulbagarden.net/upload/d/d4/046Paras.png'
		    },
		    {
		        id: 47,
		        name: 'Parasect',
		        types: [
		            'Bug',
		            'Grass'
		        ],
		        HP: 60,
		        Atk: 95,
		        Def: 80,
		        SpAtk: 60,
		        SpDef: 80,
		        Spd: 30,
		        Total: 405,
		        abilities: [
		            'Effect Spore',
		            'Dry Skin',
		            'Damp'
		        ],
		        image: 'http://cdn.bulbagarden.net/upload/8/80/047Parasect.png'
		    },
		    {
		        id: 48,
		        name: 'Venonat',
		        types: [
		            'Bug',
		            'Poison'
		        ],
		        HP: 60,
		        Atk: 55,
		        Def: 50,
		        SpAtk: 40,
		        SpDef: 55,
		        Spd: 45,
		        Total: 305,
		        abilities: [
		            'Compound Eyes',
		            'Tinted Lens',
		            'Run Away'
		        ],
		        image: 'http://cdn.bulbagarden.net/upload/a/ad/048Venonat.png'
		    },
		    {
		        id: 49,
		        name: 'Venomoth',
		        types: [
		            'Bug',
		            'Poison'
		        ],
		        HP: 70,
		        Atk: 65,
		        Def: 60,
		        SpAtk: 90,
		        SpDef: 75,
		        Spd: 90,
		        Total: 450,
		        abilities: [
		            'Shield Dust',
		            'Tinted Lens',
		            'Wonder Skin'
		        ],
		        image: 'http://cdn.bulbagarden.net/upload/d/d3/049Venomoth.png'
		    },
		    {
		        id: 50,
		        name: 'Diglett',
		        types: [
		            'Ground'
		        ],
		        HP: 10,
		        Atk: 55,
		        Def: 25,
		        SpAtk: 35,
		        SpDef: 45,
		        Spd: 95,
		        Total: 265,
		        abilities: [
		            'Sand Veil',
		            'Arena Trap',
		            'Sand Force'
		        ],
		        image: 'http://cdn.bulbagarden.net/upload/3/31/050Diglett.png'
		    },
		    {
		        id: 51,
		        name: 'Dugtrio',
		        types: [
		            'Ground'
		        ],
		        HP: 35,
		        Atk: 80,
		        Def: 50,
		        SpAtk: 50,
		        SpDef: 70,
		        Spd: 120,
		        Total: 405,
		        abilities: [
		            'Sand Veil',
		            'Arena Trap',
		            'Sand Force'
		        ],
		        image: 'http://cdn.bulbagarden.net/upload/e/e5/051Dugtrio.png'
		    },
		    {
		        id: 52,
		        name: 'Meowth',
		        types: [
		            'Normal'
		        ],
		        HP: 40,
		        Atk: 45,
		        Def: 35,
		        SpAtk: 40,
		        SpDef: 40,
		        Spd: 90,
		        Total: 290,
		        abilities: [
		            'Pickup',
		            'Technician',
		            'Unnerve'
		        ],
		        image: 'http://cdn.bulbagarden.net/upload/d/d6/052Meowth.png'
		    },
		    {
		        id: 53,
		        name: 'Persian',
		        types: [
		            'Normal'
		        ],
		        abilities: [
		            'Limber',
		            'Technician',
		            'Unnerve'
		        ],
		        HP: 65,
		        Atk: 70,
		        Def: 60,
		        SpAtk: 65,
		        SpDef: 65,
		        Spd: 115,
		        Total: 440,
		        image: 'http://cdn.bulbagarden.net/upload/1/13/053Persian.png'
		    },
		    {
		        id: 54,
		        name: 'Psyduck',
		        types: [
		            'Water'
		        ],
		        abilities: [
		            'Damp',
		            'Cloud Nine',
		            'Swift Swim'
		        ],
		        HP: 50,
		        Atk: 52,
		        Def: 48,
		        SpAtk: 65,
		        SpDef: 50,
		        Spd: 55,
		        Total: 320,
		        image: 'http://cdn.bulbagarden.net/upload/5/53/054Psyduck.png'
		    },
		    {
		        id: 55,
		        name: 'Golduck',
		        types: [
		            'Water'
		        ],
		        abilities: [
		            'Damp',
		            'Cloud Nine',
		            'Swift Swim'
		        ],
		        HP: 80,
		        Atk: 82,
		        Def: 78,
		        SpAtk: 95,
		        SpDef: 80,
		        Spd: 85,
		        Total: 500,
		        image: 'http://cdn.bulbagarden.net/upload/f/fe/055Golduck.png'
		    },
		    {
		        id: 56,
		        name: 'Mankey',
		        types: [
		            'Fighting'
		        ],
		        HP: 40,
		        Atk: 80,
		        Def: 35,
		        SpAtk: 35,
		        SpDef: 45,
		        Spd: 70,
		        Total: 305,
		        abilities: [
		            'Vital Spirit',
		            'Anger Point',
		            'Defiant'
		        ],
		        image: 'http://cdn.bulbagarden.net/upload/4/41/056Mankey.png'
		    },
		    {
		        id: 57,
		        name: 'Primeape',
		        types: [
		            'Fighting'
		        ],
		        HP: 65,
		        Atk: 105,
		        Def: 60,
		        SpAtk: 60,
		        SpDef: 70,
		        Spd: 95,
		        Total: 455,
		        abilities: [
		            'Vital Spirit',
		            'Anger Point',
		            'Defiant'
		        ],
		        image: 'http://cdn.bulbagarden.net/upload/9/9a/057Primeape.png'
		    },
		    {
		        id: 58,
		        name: 'Growlithe',
		        types: [
		            'Fire'
		        ],
		        HP: 55,
		        Atk: 70,
		        Def: 45,
		        SpAtk: 70,
		        SpDef: 50,
		        Spd: 60,
		        Total: 350,
		        abilities: [
		            'Intimidate',
		            'Flash Fire',
		            'Justified'
		        ],
		        image: 'http://cdn.bulbagarden.net/upload/3/3d/058Growlithe.png'
		    },
		    {
		        id: 59,
		        name: 'Arcanine',
		        types: [
		            'Fire'
		        ],
		        abilities: [
		            'Intimidate',
		            'Flash Fire',
		            'Justified'
		        ],
		        HP: 90,
		        Atk: 110,
		        Def: 80,
		        SpAtk: 100,
		        SpDef: 80,
		        Spd: 95,
		        Total: 555,
		        image: 'http://cdn.bulbagarden.net/upload/b/b8/059Arcanine.png'
		    },
		    {
		        id: 60,
		        name: 'Poliwag',
		        types: [
		            'Water'
		        ],
		        abilities: [
		            'Water Absorb',
		            'Damp',
		            'Swift Swim'
		        ],
		        HP: 40,
		        Atk: 50,
		        Def: 40,
		        SpAtk: 40,
		        SpDef: 40,
		        Spd: 90,
		        Total: 300,
		        image: 'http://cdn.bulbagarden.net/upload/4/49/060Poliwag.png'
		    },
		    {
		        id: 61,
		        name: 'Poliwhirl',
		        types: [
		            'Water'
		        ],
		        HP: 65,
		        Atk: 65,
		        Def: 65,
		        SpAtk: 50,
		        SpDef: 50,
		        Spd: 90,
		        Total: 385,
		        abilities: [
		            'Water Absorb',
		            'Damp',
		            'Swift Swim'
		        ],
		        image: 'http://cdn.bulbagarden.net/upload/a/a9/061Poliwhirl.png'
		    },
		    {
		        id: 62,
		        name: 'Poliwrath',
		        types: [
		            'Water',
		            'Fighting'
		        ],
		        HP: 90,
		        Atk: 95,
		        Def: 95,
		        SpAtk: 70,
		        SpDef: 90,
		        Spd: 70,
		        Total: 510,
		        abilities: [
		            'Water Absorb',
		            'Damp',
		            'Swift Swim'
		        ],
		        image: 'http://cdn.bulbagarden.net/upload/2/2d/062Poliwrath.png'
		    },
		    {
		        id: 63,
		        name: 'Abra',
		        types: [
		            'Psychic'
		        ],
		        HP: 25,
		        Atk: 20,
		        Def: 15,
		        SpAtk: 105,
		        SpDef: 55,
		        Spd: 90,
		        Total: 310,
		        abilities: [
		            'Synchronize',
		            'Inner Focus',
		            'Magic Guard'
		        ],
		        image: 'http://cdn.bulbagarden.net/upload/6/62/063Abra.png'
		    },
		    {
		        id: 64,
		        name: 'Kadabra',
		        types: [
		            'Psychic'
		        ],
		        HP: 40,
		        Atk: 35,
		        Def: 30,
		        SpAtk: 120,
		        SpDef: 70,
		        Spd: 105,
		        Total: 400,
		        abilities: [
		            'Synchronize',
		            'Inner Focus',
		            'Magic Guard'
		        ],
		        image: 'http://cdn.bulbagarden.net/upload/9/97/064Kadabra.png'
		    },
		    {
		        id: 65,
		        name: 'Alakazam',
		        types: [
		            'Psychic'
		        ],
		        HP: 55,
		        Atk: 50,
		        Def: 45,
		        SpAtk: 135,
		        SpDef: 95,
		        Spd: 120,
		        Total: 500,
		        abilities: [
		            'Synchronize',
		            'Inner Focus',
		            'Magic Guard'
		        ],
		        image: 'http://cdn.bulbagarden.net/upload/c/cc/065Alakazam.png'
		    },
		    {
		        id: 66,
		        name: 'Machop',
		        types: [
		            'Fighting'
		        ],
		        HP: 70,
		        Atk: 80,
		        Def: 50,
		        SpAtk: 35,
		        SpDef: 35,
		        Spd: 35,
		        Total: 305,
		        abilities: [
		            'Guts',
		            'No Guard',
		            'Steadfast'
		        ],
		        image: 'http://cdn.bulbagarden.net/upload/8/85/066Machop.png'
		    },
		    {
		        id: 67,
		        name: 'Machoke',
		        types: [
		            'Fighting'
		        ],
		        HP: 80,
		        Atk: 100,
		        Def: 70,
		        SpAtk: 50,
		        SpDef: 60,
		        Spd: 45,
		        Total: 405,
		        abilities: [
		            'Guts',
		            'No Guard',
		            'Steadfast'
		        ],
		        image: 'http://cdn.bulbagarden.net/upload/8/8e/067Machoke.png'
		    },
		    {
		        id: 68,
		        name: 'Machamp',
		        types: [
		            'Fighting'
		        ],
		        HP: 90,
		        Atk: 130,
		        Def: 80,
		        SpAtk: 65,
		        SpDef: 85,
		        Spd: 55,
		        Total: 505,
		        abilities: [
		            'Guts',
		            'No Guard',
		            'Steadfast'
		        ],
		        image: 'http://cdn.bulbagarden.net/upload/8/8f/068Machamp.png'
		    },
		    {
		        id: 69,
		        name: 'Bellsprout',
		        types: [
		            'Grass',
		            'Poison'
		        ],
		        HP: 50,
		        Atk: 75,
		        Def: 35,
		        SpAtk: 70,
		        SpDef: 30,
		        Spd: 40,
		        Total: 300,
		        abilities: [
		            'Chlorophyll',
		            'Gluttony'
		        ],
		        image: 'http://cdn.bulbagarden.net/upload/a/a2/069Bellsprout.png'
		    },
		    {
		        id: 70,
		        name: 'Weepinbell',
		        types: [
		            'Grass',
		            'Poison'
		        ],
		        HP: 65,
		        Atk: 90,
		        Def: 50,
		        SpAtk: 85,
		        SpDef: 45,
		        Spd: 55,
		        Total: 390,
		        abilities: [
		            'Chlorophyll',
		            'Gluttony'
		        ],
		        image: 'http://cdn.bulbagarden.net/upload/9/9f/070Weepinbell.png'
		    },
		    {
		        id: 71,
		        name: 'Victreebel',
		        types: [
		            'Grass',
		            'Poison'
		        ],
		        HP: 80,
		        Atk: 105,
		        Def: 65,
		        SpAtk: 100,
		        SpDef: 60,
		        Spd: 70,
		        Total: 480,
		        abilities: [
		            'Chlorophyll',
		            'Gluttony'
		        ],
		        image: 'http://cdn.bulbagarden.net/upload/b/be/071Victreebel.png'
		    },
		    {
		        id: 72,
		        name: 'Tentacool',
		        types: [
		            'Water',
		            'Poison'
		        ],
		        HP: 40,
		        Atk: 40,
		        Def: 35,
		        SpAtk: 50,
		        SpDef: 100,
		        Spd: 70,
		        Total: 335,
		        abilities: [
		            'Clear Body',
		            'Liquid Ooze',
		            'Rain Dish'
		        ],
		        image: 'http://cdn.bulbagarden.net/upload/4/4e/072Tentacool.png'
		    },
		    {
		        id: 73,
		        name: 'Tentacruel',
		        types: [
		            'Water',
		            'Poison'
		        ],
		        HP: 80,
		        Atk: 70,
		        Def: 65,
		        SpAtk: 80,
		        SpDef: 120,
		        Spd: 100,
		        Total: 515,
		        abilities: [
		            'Clear Body',
		            'Liquid Ooze',
		            'Rain Dish'
		        ],
		        image: 'http://cdn.bulbagarden.net/upload/f/f6/073Tentacruel.png'
		    },
		    {
		        id: 74,
		        name: 'Geodude',
		        types: [
		            'Rock',
		            'Ground'
		        ],
		        HP: 40,
		        Atk: 80,
		        Def: 100,
		        SpAtk: 30,
		        SpDef: 30,
		        Spd: 20,
		        Total: 300,
		        abilities: [
		            'Rock Head',
		            'Sturdy',
		            'Sand Veil'
		        ],
		        image: 'http://cdn.bulbagarden.net/upload/9/98/074Geodude.png'
		    },
		    {
		        id: 75,
		        name: 'Graveler',
		        types: [
		            'Rock',
		            'Ground'
		        ],
		        HP: 55,
		        Atk: 95,
		        Def: 115,
		        SpAtk: 45,
		        SpDef: 45,
		        Spd: 35,
		        Total: 390,
		        abilities: [
		            'Rock Head',
		            'Sturdy',
		            'Sand Veil'
		        ],
		        image: 'http://cdn.bulbagarden.net/upload/7/75/075Graveler.png'
		    },
		    {
		        id: 76,
		        name: 'Golem',
		        types: [
		            'Rock',
		            'Ground'
		        ],
		        HP: 80,
		        Atk: 110,
		        Def: 130,
		        SpAtk: 55,
		        SpDef: 65,
		        Spd: 45,
		        Total: 485,
		        abilities: [
		            'Rock Head',
		            'Sturdy',
		            'Sand Veil'
		        ],
		        image: 'http://cdn.bulbagarden.net/upload/f/f2/076Golem.png'
		    },
		    {
		        id: 77,
		        name: 'Ponyta',
		        types: [
		            'Fire'
		        ],
		        HP: 50,
		        Atk: 85,
		        Def: 55,
		        SpAtk: 65,
		        SpDef: 65,
		        Spd: 90,
		        Total: 410,
		        abilities: [
		            'Run Away',
		            'Flash Fire',
		            'Flame Body'
		        ],
		        image: 'http://cdn.bulbagarden.net/upload/3/3b/077Ponyta.png'
		    },
		    {
		        id: 78,
		        name: 'Rapidash',
		        types: [
		            'Fire'
		        ],
		        HP: 65,
		        Atk: 100,
		        Def: 70,
		        SpAtk: 80,
		        SpDef: 80,
		        Spd: 105,
		        Total: 500,
		        abilities: [
		            'Run Away',
		            'Flash Fire',
		            'Flame Body'
		        ],
		        image: 'http://cdn.bulbagarden.net/upload/3/3f/078Rapidash.png'
		    },
		    {
		        id: 79,
		        name: 'Slowpoke',
		        types: [
		            'Water',
		            'Psychic'
		        ],
		        HP: 90,
		        Atk: 65,
		        Def: 65,
		        SpAtk: 40,
		        SpDef: 40,
		        Spd: 15,
		        Total: 315,
		        abilities: [
		            'Oblivious',
		            'Own Tempo',
		            'Regenerator'
		        ],
		        image: 'http://cdn.bulbagarden.net/upload/7/70/079Slowpoke.png'
		    },
		    {
		        id: 80,
		        name: 'Slowbro',
		        types: [
		            'Water',
		            'Psychic'
		        ],
		        HP: 95,
		        Atk: 75,
		        Def: 110,
		        SpAtk: 100,
		        SpDef: 80,
		        Spd: 30,
		        Total: 490,
		        abilities: [
		            'Oblivious',
		            'Own Tempo',
		            'Regenerator'
		        ],
		        image: 'http://cdn.bulbagarden.net/upload/8/80/080Slowbro.png'
		    },
		    {
		        id: 81,
		        name: 'Magnemite',
		        types: [
		            'Electric',
		            'Steel'
		        ],
		        HP: 25,
		        Atk: 35,
		        Def: 70,
		        SpAtk: 95,
		        SpDef: 55,
		        Spd: 45,
		        Total: 325,
		        abilities: [
		            'Magnet Pull',
		            'Sturdy',
		            'Analytic'
		        ],
		        image: 'http://cdn.bulbagarden.net/upload/6/6c/081Magnemite.png'
		    },
		    {
		        id: 82,
		        name: 'Magneton',
		        types: [
		            'Electric',
		            'Steel'
		        ],
		        HP: 50,
		        Atk: 60,
		        Def: 95,
		        SpAtk: 120,
		        SpDef: 70,
		        Spd: 70,
		        Total: 465,
		        abilities: [
		            'Magnet Pull',
		            'Sturdy',
		            'Analytic'
		        ],
		        image: 'http://cdn.bulbagarden.net/upload/7/72/082Magneton.png'
		    },
		    {
		        id: 83,
		        name: 'Farfetch\'d',
		        types: [
		            'Normal',
		            'Flying'
		        ],
		        HP: 52,
		        Atk: 65,
		        Def: 55,
		        SpAtk: 58,
		        SpDef: 62,
		        Spd: 60,
		        Total: 352,
		        abilities: [
		            'Keen Eye',
		            'Inner Focus',
		            'Defiant'
		        ],
		        image: 'http://cdn.bulbagarden.net/upload/f/f8/083Farfetch%27d.png'
		    },
		    {
		        id: 84,
		        name: 'Doduo',
		        types: [
		            'Normal',
		            'Flying'
		        ],
		        HP: 35,
		        Atk: 85,
		        Def: 45,
		        SpAtk: 35,
		        SpDef: 35,
		        Spd: 75,
		        Total: 310,
		        abilities: [
		            'Run Away',
		            'Early Bird',
		            'Tangled Feet'
		        ],
		        image: 'http://cdn.bulbagarden.net/upload/5/54/084Doduo.png'
		    },
		    {
		        id: 85,
		        name: 'Dodrio',
		        types: [
		            'Normal',
		            'Flying'
		        ],
		        HP: 60,
		        Atk: 110,
		        Def: 70,
		        SpAtk: 60,
		        SpDef: 60,
		        Spd: 100,
		        Total: 460,
		        abilities: [
		            'Run Away',
		            'Early Bird',
		            'Tangled Feet'
		        ],
		        image: 'http://cdn.bulbagarden.net/upload/9/93/085Dodrio.png'
		    },
		    {
		        id: 86,
		        name: 'Seel',
		        types: [
		            'Water'
		        ],
		        HP: 65,
		        Atk: 45,
		        Def: 55,
		        SpAtk: 45,
		        SpDef: 70,
		        Spd: 45,
		        Total: 325,
		        abilities: [
		            'Thick Fat',
		            'Hydration',
		            'Ice Body'
		        ],
		        image: 'http://cdn.bulbagarden.net/upload/1/1f/086Seel.png'
		    },
		    {
		        id: 87,
		        name: 'Dewgong',
		        types: [
		            'Water',
		            'Ice'
		        ],
		        HP: 90,
		        Atk: 70,
		        Def: 80,
		        SpAtk: 70,
		        SpDef: 95,
		        Spd: 70,
		        Total: 475,
		        abilities: [
		            'Water',
		            'Ice',
		        ],
		        image: 'http://cdn.bulbagarden.net/upload/c/c7/087Dewgong.png'
		    },
		    {
		        id: 88,
		        name: 'Grimer',
		        types: [
		            'Poison'
		        ],
		        HP: 80,
		        Atk: 80,
		        Def: 50,
		        SpAtk: 40,
		        SpDef: 50,
		        Spd: 25,
		        Total: 325,
		        abilities: [
		            'Stench',
		            'Sticky Hold',
		            'Poison Touch'
		        ],
		        image: 'http://cdn.bulbagarden.net/upload/a/a0/088Grimer.png'
		    },
		    {
		        id: 89,
		        name: 'Muk',
		        types: [
		            'Poison'
		        ],
		        HP: 105,
		        Atk: 105,
		        Def: 75,
		        SpAtk: 65,
		        SpDef: 100,
		        Spd: 50,
		        Total: 500,
		        abilities: [
		            'Stench',
		            'Sticky Hold',
		            'Poison Touch'
		        ],
		        image: 'http://cdn.bulbagarden.net/upload/7/7c/089Muk.png'
		    },
		    {
		        id: 90,
		        name: 'Shellder',
		        types: [
		            'Water'
		        ],
		        HP: 30,
		        Atk: 65,
		        Def: 100,
		        SpAtk: 45,
		        SpDef: 25,
		        Spd: 40,
		        Total: 305,
		        abilities: [
		            'Shell Armor',
		            'Skill Link',
		            'Overcoat'
		        ],
		        image: 'http://cdn.bulbagarden.net/upload/4/40/090Shellder.png'
		    },
		    {
		        id: 91,
		        name: 'Cloyster',
		        types: [
		            'Water',
		            'Ice'
		        ],
		        HP: 50,
		        Atk: 95,
		        Def: 180,
		        SpAtk: 85,
		        SpDef: 45,
		        Spd: 70,
		        Total: 525,
		        abilities: [
		            'Shell Armor',
		            'Skill Link',
		            'Overcoat'
		        ],
		        image: 'http://cdn.bulbagarden.net/upload/1/1d/091Cloyster.png'
		    },
		    {
		        id: 92,
		        name: 'Ghastly',
		        types: [
		            'Ghost',
		            'Poison'
		        ],
		        HP: 30,
		        Atk: 35,
		        Def: 30,
		        SpAtk: 100,
		        SpDef: 35,
		        Spd: 80,
		        Total: 310,
		        abilities: [
		            'Levitate'
		        ],
		        image: 'http://cdn.bulbagarden.net/upload/c/ca/092Gastly.png'
		    },
		    {
		        id: 93,
		        name: 'Haunter',
		        types: [
		            'Ghost',
		            'Poison'
		        ],
		        HP: 45,
		        Atk: 50,
		        Def: 45,
		        SpAtk: 115,
		        SpDef: 55,
		        Spd: 95,
		        Total: 405,
		        abilities: [
		            'Levitate'
		        ],
		        image: 'http://cdn.bulbagarden.net/upload/6/62/093Haunter.png'
		    },
		    {
		        id: 94,
		        name: 'Gengar',
		        types: [
		            'Ghost',
		            'Poison'
		        ],
		        HP: 60,
		        Atk: 65,
		        Def: 60,
		        SpAtk: 130,
		        SpDef: 75,
		        Spd: 110,
		        Total: 500,
		        abilities: [
		            'Levitate'
		        ],
		        image: 'http://cdn.bulbagarden.net/upload/c/c6/094Gengar.png'
		    },
		    {
		        id: 95,
		        name: 'Onix',
		        types: [
		            'Rock',
		            'Ground'
		        ],
		        HP: 35,
		        Atk: 45,
		        Def: 160,
		        SpAtk: 30,
		        SpDef: 45,
		        Spd: 70,
		        Total: 385,
		        abilities: [
		            'Rock Head',
		            'Sturdy',
		            'Weak Armor'
		        ],
		        image: 'http://cdn.bulbagarden.net/upload/9/9a/095Onix.png'
		    },
		    {
		        id: 96,
		        name: 'Drowzee',
		        types: [
		            'Psychic'
		        ],
		        HP: 60,
		        Atk: 48,
		        Def: 45,
		        SpAtk: 43,
		        SpDef: 90,
		        Spd: 42,
		        Total: 328,
		        abilities: [
		            'Insomnia',
		            'Forewarn',
		            'Inner Focus'
		        ],
		        image: 'http://cdn.bulbagarden.net/upload/3/3e/096Drowzee.png'
		    },
		    {
		        id: 97,
		        name: 'Hypno',
		        types: [
		            'Psychic'
		        ],
		        HP: 85,
		        Atk: 73,
		        Def: 70,
		        SpAtk: 73,
		        SpDef: 115,
		        Spd: 67,
		        Total: 483,
		        abilities: [
		            'Insomnia',
		            'Forewarn',
		            'Inner Focus'
		        ],
		        image: 'http://cdn.bulbagarden.net/upload/0/0a/097Hypno.png'
		    },
		    {
		        id: 98,
		        name: 'Krabby',
		        types: [
		            'Water'
		        ],
		        HP: 30,
		        Atk: 105,
		        Def: 90,
		        SpAtk: 25,
		        SpDef: 25,
		        Spd: 50,
		        Total: 325,
		        abilities: [
		            'Hyper Cutter',
		            'Shell Armor',
		            'Sheer Force'
		        ],
		        image: 'http://cdn.bulbagarden.net/upload/a/a7/098Krabby.png'
		    },
		    {
		        id: 99,
		        name: 'Kingler',
		        types: [
		            'Water'
		        ],
		        HP: 55,
		        Atk: 130,
		        Def: 115,
		        SpAtk: 50,
		        SpDef: 50,
		        Spd: 75,
		        Total: 475,
		        abilities: [
		            'Hyper Cutter',
		            'Shell Armor',
		            'Sheer Force'
		        ],
		        image: 'http://cdn.bulbagarden.net/upload/7/71/099Kingler.png'
		    },
		    {
		        id: 100,
		        name: 'Voltorb',
		        types: [
		            'Electric'
		        ],
		        HP: 40,
		        Atk: 30,
		        Def: 50,
		        SpAtk: 55,
		        SpDef: 55,
		        Spd: 100,
		        Total: 330,
		        abilities: [
		            'Soundproof',
		            'Static',
		            'Aftermath'
		        ],
		        image: 'http://cdn.bulbagarden.net/upload/d/da/100Voltorb.png'
		    },
		    {
		        id: 101,
		        name: 'Electrode',
		        types: [
		            'Electric'
		        ],
		        HP: 60,
		        Atk: 50,
		        Def: 70,
		        SpAtk: 80,
		        SpDef: 80,
		        Spd: 140,
		        Total: 480,
		        abilities: [
		            'Soundproof',
		            'Static',
		            'Aftermath'
		        ],
		        image: 'http://cdn.bulbagarden.net/upload/8/84/101Electrode.png'
		    },
		    {
		        id: 102,
		        name: 'Exeggcute',
		        types: [
		            'Grass',
		            'Psychic'
		        ],
		        HP: 60,
		        Atk: 40,
		        Def: 80,
		        SpAtk: 60,
		        SpDef: 45,
		        Spd: 40,
		        Total: 325,
		        abilities: [
		            'Chlorophyll',
		            'Harvest'
		        ],
		        image: 'http://cdn.bulbagarden.net/upload/a/af/102Exeggcute.png'
		    },
		    {
		        id: 103,
		        name: 'Exeggutor',
		        types: [
		            'Grass',
		            'Psychic'
		        ],
		        HP: 95,
		        Atk: 95,
		        Def: 85,
		        SpAtk: 125,
		        SpDef: 65,
		        Spd: 55,
		        Total: 520,
		        abilities: [
		            'Chlorophyll',
		            'Harvest'
		        ],
		        image: 'http://cdn.bulbagarden.net/upload/2/24/103Exeggutor.png'
		    },
		    {
		        id: 104,
		        name: 'Cubone',
		        types: [
		            'Ground'
		        ],
		        HP: 50,
		        Atk: 50,
		        Def: 95,
		        SpAtk: 40,
		        SpDef: 50,
		        Spd: 35,
		        Total: 320,
		        abilities: [
		            'Rock Head',
		            'Lightning Rod',
		            'Battle Armor'
		        ],
		        image: 'http://cdn.bulbagarden.net/upload/2/2a/104Cubone.png'
		    },
		    {
		        id: 105,
		        name: 'Marowak',
		        types: [
		            'Ground'
		        ],
		        HP: 60,
		        Atk: 80,
		        Def: 110,
		        SpAtk: 50,
		        SpDef: 80,
		        Spd: 45,
		        Total: 425,
		        abilities: [
		            'Rock Head',
		            'Lightning Rod',
		            'Battle Armor'
		        ],
		        image: 'http://cdn.bulbagarden.net/upload/9/98/105Marowak.png'
		    },
		    {
		        id: 106,
		        name: 'Hitmonlee',
		        types: [
		            'Fighting'
		        ],
		        HP: 50,
		        Atk: 120,
		        Def: 53,
		        SpAtk: 35,
		        SpDef: 110,
		        Spd: 87,
		        Total: 455,
		        abilities: [
		            'Limber',
		            'Reckless',
		            'Unburden'
		        ],
		        image: 'http://cdn.bulbagarden.net/upload/3/32/106Hitmonlee.png'
		    },
		    {
		        id: 107,
		        name: 'Hitmonchan',
		        types: [
		            'Fighting'
		        ],
		        HP: 50,
		        Atk: 105,
		        Def: 79,
		        SpAtk: 35,
		        SpDef: 110,
		        Spd: 76,
		        Total: 455,
		        abilities: [
		            'Keen Eye',
		            'Iron Fist',
		            'Inner Focus'
		        ],
		        image: 'http://cdn.bulbagarden.net/upload/a/a3/107Hitmonchan.png'
		    },
		    {
		        id: 108,
		        name: 'Lickitung',
		        types: [
		            'Normal'
		        ],
		        HP: 90,
		        Atk: 55,
		        Def: 75,
		        SpAtk: 60,
		        SpDef: 75,
		        Spd: 30,
		        Total: 385,
		        abilities: [
		            'Own Tempo',
		            'Oblivious',
		            'Cloud Nine'
		        ],
		        image: 'http://cdn.bulbagarden.net/upload/0/00/108Lickitung.png'
		    },
		    {
		        id: 109,
		        name: 'Koffing',
		        types: [
		            'Poison'
		        ],
		        HP: 40,
		        Atk: 65,
		        Def: 95,
		        SpAtk: 60,
		        SpDef: 45,
		        Spd: 35,
		        Total: 340,
		        abilities: [
		            'Levitate'
		        ],
		        image: 'http://cdn.bulbagarden.net/upload/1/17/109Koffing.png'
		    },
		    {
		        id: 110,
		        name: 'Weezing',
		        types: [
		            'Poison'
		        ],
		        HP: 65,
		        Atk: 90,
		        Def: 120,
		        SpAtk: 85,
		        SpDef: 70,
		        Spd: 60,
		        Total: 490,
		        abilities: [
		            'Levitate'
		        ],
		        image: 'http://cdn.bulbagarden.net/upload/4/42/110Weezing.png'
		    },
		    {
		        id: 111,
		        name: 'Rhyhorn',
		        types: [
		            'Ground',
		            'Rock'
		        ],
		        HP: 80,
		        Atk: 85,
		        Def: 95,
		        SpAtk: 30,
		        SpDef: 30,
		        Spd: 25,
		        Total: 345,
		        abilities: [
		            'Lightning Rod',
		            'Rock Head',
		            'Reckless'
		        ],
		        image: 'http://cdn.bulbagarden.net/upload/9/9b/111Rhyhorn.png'
		    },
		    {
		        id: 112,
		        name: 'Rhydon',
		        types: [
		            'Ground',
		            'Rock'
		        ],
		        HP: 105,
		        Atk: 130,
		        Def: 120,
		        SpAtk: 45,
		        SpDef: 45,
		        Spd: 40,
		        Total: 485,
		        abilities: [
		            'Lightning Rod',
		            'Rock Head',
		            'Reckless'
		        ],
		        image: 'http://cdn.bulbagarden.net/upload/4/47/112Rhydon.png'
		    },
		    {
		        id: 113,
		        name: 'Chansey',
		        types: [
		            'Normal'
		        ],
		        HP: 250,
		        Atk: 5,
		        Def: 5,
		        SpAtk: 35,
		        SpDef: 105,
		        Spd: 50,
		        Total: 450,
		        abilities: [
		            'Natural Cure',
		            'Serene Grace',
		            'Healer'
		        ],
		        image: 'http://cdn.bulbagarden.net/upload/c/cd/113Chansey.png'
		    },
		    {
		        id: 114,
		        name: 'Tangela',
		        types: [
		            'Grass'
		        ],
		        HP: 65,
		        Atk: 55,
		        Def: 115,
		        SpAtk: 100,
		        SpDef: 40,
		        Spd: 60,
		        Total: 435,
		        abilities: [
		            'Chlorophyll',
		            'Leaf Guard',
		            'Regenerator'
		        ],
		        image: 'http://cdn.bulbagarden.net/upload/3/3e/114Tangela.png'
		    },
		    {
		        id: 115,
		        name: 'Kangaskhan',
		        types: [
		            'Normal'
		        ],
		        HP: 105,
		        Atk: 95,
		        Def: 80,
		        SpAtk: 40,
		        SpDef: 80,
		        Spd: 90,
		        Total: 490,
		        abilities: [
		            'Early Bird',
		            'Scrappy',
		            'Inner Focus'
		        ],
		        image: 'http://cdn.bulbagarden.net/upload/4/4e/115Kangaskhan.png'
		    },
		    {
		        id: 116,
		        name: 'Horsea',
		        types: [
		            'Water'
		        ],
		        HP: 30,
		        Atk: 40,
		        Def: 70,
		        SpAtk: 70,
		        SpDef: 25,
		        Spd: 60,
		        Total: 295,
		        abilities: [
		            'Swift Swim',
		            'Sniper',
		            'Damp'
		        ],
		        image: 'http://cdn.bulbagarden.net/upload/5/5a/116Horsea.png'
		    },
		    {
		        id: 117,
		        name: 'Seadra',
		        types: [
		            'Water'
		        ],
		        HP: 55,
		        Atk: 65,
		        Def: 95,
		        SpAtk: 95,
		        SpDef: 45,
		        Spd: 85,
		        Total: 440,
		        abilities: [
		            'Poison Point',
		            'Sniper',
		            'Damp'
		        ],
		        image: 'http://cdn.bulbagarden.net/upload/2/26/117Seadra.png'
		    },
		    {
		        id: 118,
		        name: 'Goldeen',
		        types: [
		            'Water'
		        ],
		        HP: 45,
		        Atk: 67,
		        Def: 60,
		        SpAtk: 35,
		        SpDef: 50,
		        Spd: 63,
		        Total: 320,
		        abilities: [
		            'Swift Swim',
		            'Water Veil',
		            'Lightning Rod'
		        ],
		        image: 'http://cdn.bulbagarden.net/upload/7/7b/118Goldeen.png'
		    },
		    {
		        id: 119,
		        name: 'Seaking',
		        types: [
		            'Water'
		        ],
		        HP: 80,
		        Atk: 92,
		        Def: 65,
		        SpAtk: 65,
		        SpDef: 80,
		        Spd: 68,
		        Total: 450,
		        abilities: [
		            'Swift Swim',
		            'Water Veil',
		            'Lightning Rod'
		        ],
		        image: 'http://cdn.bulbagarden.net/upload/6/6a/119Seaking.png'
		    },
		    {
		        id: 120,
		        name: 'Staryu',
		        types: [
		            'Water'
		        ],
		        HP: 30,
		        Atk: 45,
		        Def: 55,
		        SpAtk: 70,
		        SpDef: 55,
		        Spd: 85,
		        Total: 340,
		        abilities: [
		            'Illuminate',
		            'Natural Cure',
		            'Analytic'
		        ],
		        image: 'http://cdn.bulbagarden.net/upload/4/4f/120Staryu.png'
		    },
		    {
		        id: 121,
		        name: 'Starmie',
		        types: [
		            'Water',
		            'Psychic'
		        ],
		        HP: 60,
		        Atk: 75,
		        Def: 85,
		        SpAtk: 100,
		        SpDef: 85,
		        Spd: 115,
		        Total: 520,
		        abilities: [
		            'Illuminate',
		            'Natural Cure',
		            'Analytic'
		        ],
		        image: 'http://cdn.bulbagarden.net/upload/c/cd/121Starmie.png'
		    },
		    {
		        id: 122,
		        name: 'Mr. Mime',
		        types: [
		            'Psychic',
		            'Fairy'
		        ],
		        HP: 40,
		        Atk: 45,
		        Def: 65,
		        SpAtk: 100,
		        SpDef: 120,
		        Spd: 90,
		        Total: 460,
		        abilities: [
		            'Soundproof',
		            'Filter',
		            'Technician'
		        ],
		        image: 'http://cdn.bulbagarden.net/upload/e/ec/122Mr._Mime.png'
		    },
		    {
		        id: 123,
		        name: 'Scyther',
		        types: [
		            'Bug',
		            'Flying'
		        ],
		        HP: 70,
		        Atk: 110,
		        Def: 80,
		        SpAtk: 55,
		        SpDef: 80,
		        Spd: 105,
		        Total: 500,
		        abilities: [
		            'Swarm',
		            'Technician',
		            'Steadfast'
		        ],
		        image: 'http://cdn.bulbagarden.net/upload/b/ba/123Scyther.png'
		    },
		    {
		        id: 124,
		        name: 'Jynx',
		        types: [
		            'Ice',
		            'Psychic'
		        ],
		        HP: 65,
		        Atk: 50,
		        Def: 35,
		        SpAtk: 115,
		        SpDef: 95,
		        Spd: 95,
		        Total: 455,
		        abilities: [
		            'Oblivious',
		            'Forewarn',
		            'Dry Skin'
		        ],
		        image: 'http://cdn.bulbagarden.net/upload/7/7c/124Jynx.png'
		    },
		    {
		        id: 125,
		        name: 'Electabuzz',
		        types: [
		            'Electric'
		        ],
		        HP: 65,
		        Atk: 83,
		        Def: 57,
		        SpAtk: 95,
		        SpDef: 85,
		        Spd: 105,
		        Total: 490,
		        abilities: [
		            'Static',
		            'Vital Spirit'
		        ],
		        image: 'http://cdn.bulbagarden.net/upload/d/de/125Electabuzz.png'
		    },
		    {
		        id: 126,
		        name: 'Magmar',
		        types: [
		            'Fire'
		        ],
		        HP: 65,
		        Atk: 95,
		        Def: 57,
		        SpAtk: 100,
		        SpDef: 85,
		        Spd: 93,
		        Total: 495,
		        abilities: [
		            'Flame Body',
		            'Vital Spirit'
		        ],
		        image: 'http://cdn.bulbagarden.net/upload/8/8c/126Magmar.png'
		    },
		    {
		        id: 127,
		        name: 'Pinsir',
		        types: [
		            'Bug'
		        ],
		        HP: 65,
		        Atk: 155,
		        Def: 120,
		        SpAtk: 65,
		        SpDef: 90,
		        Spd: 105,
		        Total: 600,
		        abilities: [
		            'Hyper Cutter',
		            'Mold Breaker',
		            'Moxie'
		        ],
		        image: 'http://cdn.bulbagarden.net/upload/7/71/127Pinsir.png'
		    },
		    {
		        id: 128,
		        name: 'Tauros',
		        types: [
		            'Normal'
		        ],
		        HP: 75,
		        Atk: 100,
		        Def: 95,
		        SpAtk: 40,
		        SpDef: 70,
		        Spd: 110,
		        Total: 490,
		        abilities: [
		            'Intimidate',
		            'Anger Point',
		            'Sheer Force'
		        ],
		        image: 'http://cdn.bulbagarden.net/upload/b/b8/128Tauros.png'
		    },
		    {
		        id: 129,
		        name: 'Magikarp',
		        types: [
		            'Water'
		        ],
		        HP: 20,
		        Atk: 10,
		        Def: 55,
		        SpAtk: 15,
		        SpDef: 20,
		        Spd: 80,
		        Total: 200,
		        abilities: [
		            'Swift Swim',
		            'Rattled'
		        ],
		        image: 'http://cdn.bulbagarden.net/upload/0/02/129Magikarp.png'
		    },
		    {
		        id: 130,
		        name: 'Gyarados',
		        types: [
		            'Water',
		            'Flying'
		        ],
		        HP: 95,
		        Atk: 125,
		        Def: 79,
		        SpAtk: 60,
		        SpDef: 100,
		        Spd: 81,
		        Total: 540,
		        abilities: [
		            'Intimidate',
		            'Moxie'
		        ],
		        image: 'http://cdn.bulbagarden.net/upload/4/41/130Gyarados.png'
		    },
		    {
		        id: 131,
		        name: 'Lapras',
		        types: [
		            'Water',
		            'Ice'
		        ],
		        HP: 130,
		        Atk: 85,
		        Def: 80,
		        SpAtk: 85,
		        SpDef: 95,
		        Spd: 60,
		        Total: 535,
		        abilities: [
		            'Water Absorb',
		            'Shell Armor',
		            'Hydration'
		        ],
		        image: 'http://cdn.bulbagarden.net/upload/a/ab/131Lapras.png'
		    },
		    {
		        id: 132,
		        name: 'Ditto',
		        types: [
		            'Normal'
		        ],
		        HP: 48,
		        Atk: 48,
		        Def: 48,
		        SpAtk: 48,
		        SpDef: 48,
		        Spd: 48,
		        Total: 288,
		        abilities: [
		            'Limber',
		            'Imposter'
		        ],
		        image: 'http://cdn.bulbagarden.net/upload/3/36/132Ditto.png'
		    },
		    {
		        id: 133,
		        name: 'Eevee',
		        types: [
		            'Normal'
		        ],
		        HP: 55,
		        Atk: 55,
		        Def: 50,
		        SpAtk: 45,
		        SpDef: 65,
		        Spd: 55,
		        Total: 325,
		        abilities: [
		            'Run Away',
		            'Adaptability',
		            'Anticipation'
		        ],
		        image: 'http://cdn.bulbagarden.net/upload/e/e2/133Eevee.png'
		    },
		    {
		        id: 134,
		        name: 'Vaporoen',
		        types: [
		            'Water'
		        ],
		        HP: 130,
		        Atk: 65,
		        Def: 60,
		        SpAtk: 110,
		        SpDef: 95,
		        Spd: 65,
		        Total: 525,
		        abilities: [
		            'Water Absorb',
		            'Hydration',
		        ],
		        image: 'http://cdn.bulbagarden.net/upload/f/fd/134Vaporeon.png'
		    },
		    {
		        id: 135,
		        name: 'Jolteon',
		        types: [
		            'Electric'
		        ],
		        HP: 65,
		        Atk: 65,
		        Def: 60,
		        SpAtk: 110,
		        SpDef: 95,
		        Spd: 130,
		        Total: 525,
		        abilities: [
		            'Volt Absorb',
		            'Quick Feet'
		        ],
		        image: 'http://cdn.bulbagarden.net/upload/b/bb/135Jolteon.png'
		    },
		    {
		        id: 136,
		        name: 'Flareon',
		        types: [
		            'Fire'
		        ],
		        HP: 65,
		        Atk: 130,
		        Def: 60,
		        SpAtk: 95,
		        SpDef: 110,
		        Spd: 65,
		        Total: 525,
		        abilities: [
		            'Flash Fire',
		            'Guts'
		        ],
		        image: 'http://cdn.bulbagarden.net/upload/d/dd/136Flareon.png'
		    },
		    {
		        id: 137,
		        name: 'Porygon',
		        types: [
		            'Normal'
		        ],
		        HP: 65,
		        Atk: 60,
		        Def: 70,
		        SpAtk: 85,
		        SpDef: 75,
		        Spd: 40,
		        Total: 395,
		        abilities: [
		            'Trace',
		            'Download',
		            'Analytic'
		        ],
		        image: 'http://cdn.bulbagarden.net/upload/6/6b/137Porygon.png'
		    },
		    {
		        id: 138,
		        name: 'Omanyte',
		        types: [
		            'Rock',
		            'Water'
		        ],
		        HP: 35,
		        Atk: 40,
		        Def: 100,
		        SpAtk: 90,
		        SpDef: 55,
		        Spd: 35,
		        Total: 355,
		        abilities: [
		            'Swift Swim',
		            'Shell Armor',
		            'Weak Armor'
		        ],
		        image: 'http://cdn.bulbagarden.net/upload/7/79/138Omanyte.png'
		    },
		    {
		        id: 139,
		        name: 'Omastar',
		        types: [
		            'Rock',
		            'Water'
		        ],
		        HP: 70,
		        Atk: 60,
		        Def: 125,
		        SpAtk: 115,
		        SpDef: 70,
		        Spd: 55,
		        Total: 495,
		        abilities: [
		            'Swift Swim',
		            'Shell Armor',
		            'Weak Armor'
		        ],
		        image: 'http://cdn.bulbagarden.net/upload/4/43/139Omastar.png'
		    },
		    {
		        id: 140,
		        name: 'Kabuto',
		        types: [
		            'Rock',
		            'Water'
		        ],
		        HP: 30,
		        Atk: 80,
		        Def: 90,
		        SpAtk: 55,
		        SpDef: 45,
		        Spd: 55,
		        Total: 355,
		        abilities: [
		            'Swift Swim',
		            'Battle Armor',
		            'Weak Armor'
		        ],
		        image: 'http://cdn.bulbagarden.net/upload/f/f9/140Kabuto.png'
		    },
		    {
		        id: 141,
		        name: 'Kabutops',
		        types: [
		            'Rock',
		            'Water'
		        ],
		        HP: 60,
		        Atk: 115,
		        Def: 105,
		        SpAtk: 65,
		        SpDef: 70,
		        Spd: 80,
		        Total: 495,
		        abilities: [
		            'Swift Swim',
		            'Battle Armor',
		            'Weak Armor'
		        ],
		        image: 'http://cdn.bulbagarden.net/upload/2/29/141Kabutops.png'
		    },
		    {
		        id: 142,
		        name: 'Aerodactyl',
		        types: [
		            'Rock',
		            'Flying'
		        ],
		        HP: 80,
		        Atk: 105,
		        Def: 65,
		        SpAtk: 60,
		        SpDef: 75,
		        Spd: 130,
		        Total: 515,
		        abilities: [
		            'Rock Head',
		            'Pressure',
		            'Unnverve'
		        ],
		        image: 'http://cdn.bulbagarden.net/upload/e/e8/142Aerodactyl.png'
		    },
		    {
		        id: 143,
		        name: 'Snorlax',
		        types: [
		            'Normal'
		        ],
		        HP: 160,
		        Atk: 110,
		        Def: 65,
		        SpAtk: 65,
		        SpDef: 110,
		        Spd: 30,
		        Total: 540,
		        abilities: [
		            'Immunity',
		            'Thick Fat',
		            'Gluttony'
		        ],
		        image: 'http://cdn.bulbagarden.net/upload/f/fb/143Snorlax.png'
		    },
		    {
		        id: 144,
		        name: 'Articuno',
		        types: [
		            'Ice',
		            'Flying'
		        ],
		        HP: 90,
		        Atk: 85,
		        Def: 100,
		        SpAtk: 95,
		        SpDef: 125,
		        Spd: 85,
		        Total: 580,
		        abilities: [
		            'Pressure',
		            'Snow Cloak'
		        ],
		        image: 'http://cdn.bulbagarden.net/upload/4/4e/144Articuno.png'
		    },
		    {
		        id: 145,
		        name: 'Zapdos',
		        types: [
		            'Electric',
		            'Flying'
		        ],
		        HP: 90,
		        Atk: 90,
		        Def: 85,
		        SpAtk: 125,
		        SpDef: 90,
		        Spd: 100,
		        Total: 580,
		        abilities: [
		            'Pressure',
		            'Static'
		        ],
		        image: 'http://cdn.bulbagarden.net/upload/e/e3/145Zapdos.png'
		    },
		    {
		        id: 146,
		        name: 'Moltres',
		        types: [
		            'Fire',
		            'Flying'
		        ],
		        HP: 90,
		        Atk: 100,
		        Def: 90,
		        SpAtk: 125,
		        SpDef: 85,
		        Spd: 90,
		        Total: 580,
		        abilities: [
		            'Pressure',
		            'Flame Body'
		        ],
		        image: 'http://cdn.bulbagarden.net/upload/1/1b/146Moltres.png'
		    },
		    {
		        id: 147,
		        name: 'Dratini',
		        types: [
		            'Dragon'
		        ],
		        HP: 41,
		        Atk: 64,
		        Def: 45,
		        SpAtk: 50,
		        SpDef: 50,
		        Spd: 50,
		        Total: 300,
		        abilities: [
		            'Shed Skin',
		            'Marvel Scale'
		        ],
		        image: 'http://cdn.bulbagarden.net/upload/c/cc/147Dratini.png'
		    },
		    {
		        id: 148,
		        name: 'Dragonair',
		        types: [
		            'Dragon'
		        ],
		        HP: 61,
		        Atk: 84,
		        Def: 65,
		        SpAtk: 70,
		        SpDef: 70,
		        Spd: 70,
		        Total: 420,
		        abilities: [
		            'Shed Skin',
		            'Marvel Scale'
		        ],
		        image: 'http://cdn.bulbagarden.net/upload/9/93/148Dragonair.png'
		    },
		    {
		        id: 149,
		        name: 'Dragonite',
		        types: [
		            'Dragon',
		            'Flying'
		        ],
		        HP: 91,
		        Atk: 134,
		        Def: 95,
		        SpAtk: 100,
		        SpDef: 100,
		        Spd: 80,
		        Total: 600,
		        abilities: [
		            'Inner Focus',
		            'Multiscale'
		        ],
		        image: 'http://cdn.bulbagarden.net/upload/8/8b/149Dragonite.png'
		    },
		    {
		        id: 150,
		        name: 'Mewtwo',
		        types: [
		            'Psychic'
		        ],
		        HP: 106,
		        Atk: 110,
		        Def: 90,
		        SpAtk: 154,
		        SpDef: 90,
		        Spd: 130,
		        Total: 680,
		        abilities: [
		            'Pressure',
		            'Unnerve'
		        ],
		        image: 'http://cdn.bulbagarden.net/upload/7/78/150Mewtwo.png'
		    },
		    {
		        id: 151,
		        name: 'Mew',
		        types: [
		            'Psychic'
		        ],
		        HP: 100,
		        Atk: 100,
		        Def: 100,
		        SpAtk: 100,
		        SpDef: 100,
		        Spd: 100,
		        Total: 600,
		        abilities: [
		            'Synchronize'
		        ],
		        image: 'http://cdn.bulbagarden.net/upload/b/b1/151Mew.png'
		    }
		];
		for (var i = 0; i <= properties.length; i++) {
			var id;
			var name;
			var types;
			var HP;
			var Atk;
			var Def;
			var SpAtk;
			var SpDef;
			var Spd;
			var Total;
			var abilities;
			var image;
			Pokemons.insert({
				id: properties[i].id,
				name: properties[i].name,
				types: properties[i].types,
				HP: properties[i].HP,
				Atk: properties[i].Atk,
				Def: properties[i].Def,
				SpAtk: properties[i].SpAtk,
				SpDef: properties[i].SpDef,
				Spd: properties[i].Spd,
				Total: properties[i].Total,
				abilities: properties[i].abilities,
				image: properties[i].image
			});
		};
	}
});