const {EmbedBuilder} = require("discord.js")
	const wordsArray = [
			//Hearty
'Baseball Zombie', 'Rolling Stone', 'Conehead', 'Team Mascot', 'Medic', 'Arm Wrestler', 'Camel Crossing', 'Flag Zombie', 'Terrify', 'Trash Can Zombie', 'Buckethead', 'Ra Zombie', 'Cone Zone', 'Celestial Custodian', 'Screen Door Zombie', 'Healthy Treat', 'Zombie Middle Manager', 'Leftovers', 'Sumo Wrestler', 'Zombie Coach', 'Monster Mash', 'Knight of the Living Dead', 'Rodeo Gargantuar', 'Escape through Time', 'Cosmic Sports Star', 'Primeval Yeti', 'Lost Colosseum', 'Landscaper', 'Weed Spray', 'All-Star Zombie', 'Coffee Zombie', 'Black Hole', 'Genetic Experiment', 'Planetary Gladiator', 'Jurassic Fossilhead', 'Knockout', 'Turquoise Skull Zombie', 'Zombie King', 'Undying Pharaoh', 'Wannabe Hero', 'Intergalactic Warlord', 'Zombot Battlecruiser 5000', 'Stompadon', 'Chum Champion', 'Zombology Teacher', 'Gargologist', 'Turkey Rider', 'Going Viral', 'Bonus Track Buckethead', 'Defensive End',
			//Beastly
'Skunk Punk', 'Pied Piper', 'Zookeeper', 'Dolphin Rider', 'Locust Swarm', 'Dog Walker', 'Nibble', 'Snorkel Zombie', 'Yeti Lunchbox', 'Haunting Zombie', 'Loudmouth', 'B-flat', 'Total Eclipse', 'Alien Ooze', 'Surfer Zombie', 'Haunting Ghost', 'Goat', 'Vengeful Cyborg', 'Squirrel Herder', 'Vimpire', 'Vitamin Z', 'Kangaroo Rider', 'Smashing Gargantuar', 'Biodome Botanist', 'Cosmic Yeti', 'Primordial Cheese Shover', 'Killer Whale', 'Cat Lady', 'Zombie Yeti', 'Deep Sea Gargantuar', 'Maniacal Laugh', 'Cheese Cutter', 'Cyborg Zombie', 'Area 22', 'Extinction Event', 'Ancient Vimpire', 'Hunting Grounds', 'Nurse Gargantuar', 'Octo Zombie', 'Zombot 1000', 'Interstellar Bounty Hunter', 'Supernova Gargantuar', 'Mondo Bronto', 'Gargantuar-Throwing Gargantuar', 'Fraidy Cat', 'Secret Agent', 'Energy Drink Zombie', 'Synchronized Swimmer', 'Hover-Goat 3000', 'Overstuffed Zombie', 'Sneezing Zombie', 'King of the Grill'
]
module.exports = {
	name: `wheelsm`,
	aliases: [`smwheel`, `wheelsmash`, `smashwheel`,],
	category: `Smash(SM)`,
	run: async(client, message, args)=> {
		if(!args[0]){
		return	message.reply("Please input a number format wheelsm number")
		}
		if(isNaN(args[0])) {
		return	message.reply("Must input a number")
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
	.setTitle(`Wheel Smash Deck`)
	embed.setDescription(`Here is your wheel for Smash
 **${randomWords.join('\n')}**`)
		.setColor("Random")
		
		message.channel.send({embeds: [ embed ] })
		}
	}
}