const {EmbedBuilder} = require("discord.js")
	const wordsArray = [
			//Hearty
'Baseball Zombie', 'Rolling Stone', 'Conehead', 'Team Mascot', 'Medic', 'Arm Wrestler', 'Camel Crossing', 'Flag Zombie', 'Terrify', 'Trash Can Zombie', 'Buckethead', 'Ra Zombie', 'Cone Zone', 'Celestial Custodian', 'Screen Door Zombie', 'Healthy Treat', 'Zombie Middle Manager', 'Leftovers', 'Sumo Wrestler', 'Zombie Coach', 'Monster Mash', 'Knight of the Living Dead', 'Rodeo Gargantuar', 'Escape through Time', 'Cosmic Sports Star', 'Primeval Yeti', 'Lost Colosseum', 'Landscaper', 'Weed Spray', 'All-Star Zombie', 'Coffee Zombie', 'Black Hole', 'Genetic Experiment', 'Planetary Gladiator', 'Jurassic Fossilhead', 'Knockout', 'Turquoise Skull Zombie', 'Zombie King', 'Undying Pharaoh', 'Wannabe Hero', 'Intergalactic Warlord', 'Zombot Battlecruiser 5000', 'Stompadon', 'Chum Champion', 'Zombology Teacher', 'Gargologist', 'Turkey Rider', 'Going Viral', 'Bonus Track Buckethead', 'Defensive End',
			//Sneaky
	'Imp', 'Mini-Ninja', 'Smoke Bomb', 'Fishy Imp', 'Smelly Zombie', 'Headstone Carver', 'Zombie Chicken', 'Hot Dog Imp', 'Swashbuckler Zombie', 'Backyard Bounce', 'Stealthy Imp', 'Firefighter', 'Graveyard', 'Ice Pirate', 'Frosty Mustache', 'Swabbie', 'Barrel of Barrels', 'Monkey Smuggler', 'Imp Commander', 'Barrel Roller Zombie', 'Surprise Gargantuar', 'Walrus Rider', 'Zombot Stomp', 'Cosmic Imp', 'Space Pirate', 'Blowgun Imp', 'Buried Treasure', 'Toxic Waste Imp', 'Line Dancing Zombie', 'Pogo Bouncer', 'Tomb Raiser Zombie', 'Ducky Tube Zombie', 'Dr. Spacetime', 'Laser Base Alpha', 'Cursed Gargolith', 'Excavator Zombie', 'Unthawed Viking', 'Mixed-Up Gravedigger', 'Zombot Sharktronic Sub', 'Zombot Plank Walker', 'Space Cowboy', 'Cryo-Yeti', 'Zombot Aerostatic Gondola', 'Raiding Raptor', 'Imposter', 'Fire Rooster', 'Imp-Throwing Imp', 'Captain Flameface', 'Zombie High Diver', 'Trapper Zombie'
]
module.exports = {
	name: `wheelnt`,
	aliases: [`ntwheel`, `wheeltuna`, `wheelneptuna`],
	category: `Neptuna(NT)`,
	run: async(client, message, args)=> {
		if(!args[0]){
			return message.reply("Please input a number format wheelnt number")
		}
		if(isNaN(args[0])) {
			return message.reply("Must input a number")
		}
				if(args[0] > 40) {
			return message.reply("Must input a number less than 40")
		}
		else{
			let randomWords = [];
			let remainingWords = [...wordsArray]; 
							for (let i = 0; i != args[0]; i++) {
						const randomIndex = Math.floor(Math.random() * remainingWords.length);
				const selectedWord = remainingWords.splice(randomIndex, 1)[0]; // Remove the word from the remainingWords array
				randomWords.push(selectedWord);
							}
			let embed = new EmbedBuilder()
	.setTitle(`WheelNeptuna Deck`)
	embed.setDescription(`Here is your wheel for Neptuna
 **${randomWords.join('\n')}**`)
		.setColor("Random")
		
		message.channel.send({embeds: [ embed ] })
		}
	}
}