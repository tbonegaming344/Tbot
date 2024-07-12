const {EmbedBuilder} = require("discord.js")
	const wordsArray = [
			//Sneaky
'Imp', 'Mini-Ninja', 'Smoke Bomb', 'Fishy Imp', 'Smelly Zombie', 'Headstone Carver', 'Zombie Chicken', 'Hot Dog Imp', 'Swashbuckler Zombie', 'Backyard Bounce', 'Stealthy Imp', 'Firefighter', 'Graveyard', 'Ice Pirate', 'Frosty Mustache', 'Swabbie', 'Barrel of Barrels', 'Monkey Smuggler', 'Imp Commander', 'Barrel Roller Zombie', 'Surprise Gargantuar', 'Walrus Rider', 'Zombot Stomp', 'Cosmic Imp', 'Space Pirate', 'Blowgun Imp', 'Buried Treasure', 'Toxic Waste Imp', 'Line Dancing Zombie', 'Pogo Bouncer', 'Tomb Raiser Zombie', 'Ducky Tube Zombie', 'Dr. Spacetime', 'Laser Base Alpha', 'Cursed Gargolith', 'Excavator Zombie', 'Unthawed Viking', 'Mixed-Up Gravedigger', 'Zombot Sharktronic Sub', 'Zombot Plank Walker', 'Space Cowboy', 'Cryo-Yeti', 'Zombot Aerostatic Gondola', 'Raiding Raptor', 'Imposter', 'Fire Rooster', 'Imp-Throwing Imp', 'Captain Flameface', 'Zombie High Diver', 'Trapper Zombie',
			//Beastly
	'Skunk Punk', 'Pied Piper', 'Zookeeper', 'Dolphin Rider', 'Locust Swarm', 'Dog Walker', 'Nibble', 'Snorkel Zombie', 'Yeti Lunchbox', 'Haunting Zombie', 'Loudmouth', 'B-flat', 'Total Eclipse', 'Alien Ooze', 'Surfer Zombie', 'Haunting Ghost', 'Goat', 'Vengeful Cyborg', 'Squirrel Herder', 'Vimpire', 'Vitamin Z', 'Kangaroo Rider', 'Smashing Gargantuar', 'Biodome Botanist', 'Cosmic Yeti', 'Primordial Cheese Shover', 'Killer Whale', 'Cat Lady', 'Zombie Yeti', 'Deep Sea Gargantuar', 'Maniacal Laugh', 'Cheese Cutter', 'Cyborg Zombie', 'Area 22', 'Extinction Event', 'Ancient Vimpire', 'Hunting Grounds', 'Nurse Gargantuar', 'Octo Zombie', 'Zombot 1000', 'Interstellar Bounty Hunter', 'Supernova Gargantuar', 'Mondo Bronto', 'Gargantuar-Throwing Gargantuar', 'Fraidy Cat', 'Secret Agent', 'Energy Drink Zombie', 'Synchronized Swimmer', 'Hover-Goat 3000', 'Overstuffed Zombie', 'Sneezing Zombie', 'King of the Grill'
]
module.exports = {
	name: `wheelbf`,
	aliases: [`bfwheel`, `wheelfreeze`, `wheelbrainfreeze`],
	category: `Brain Freeze(BF)`,
	run: async(client, message, args)=> {
					if(!args[0]){
						return message.reply("Please input a number format wheelbf number")
					}
		if(isNaN(args[0])) {
			return message.reply("Must input a number")
		}
				if(args[0] > 40) {
			return message.reply("Must input a number less than 40")
		}
		else {
			let randomWords = [];
			let remainingWords = [...wordsArray]; 
							for (let i = 0; i != args[0]; i++) {
						const randomIndex = Math.floor(Math.random() * remainingWords.length);
				const selectedWord = remainingWords.splice(randomIndex, 1)[0]; // Remove the word from the remainingWords array
				randomWords.push(selectedWord);
							}
			let embed = new EmbedBuilder()
	.setTitle(`Wheel Brain Freeze Deck`)
	embed.setDescription(`Here is your wheel for Brain Freeze
 **${randomWords.join('\n')}**`)
		.setColor("Random")
		
		message.channel.send({embeds: [ embed ] })
		}
	}
}