const {EmbedBuilder} = require("discord.js")
	const wordsArray = [
			//Beastly
'Skunk Punk', 'Pied Piper', 'Zookeeper', 'Dolphin Rider', 'Locust Swarm', 'Dog Walker', 'Nibble', 'Snorkel Zombie', 'Yeti Lunchbox', 'Haunting Zombie', 'Loudmouth', 'B-flat', 'Total Eclipse', 'Alien Ooze', 'Surfer Zombie', 'Haunting Ghost', 'Goat', 'Vengeful Cyborg', 'Squirrel Herder', 'Vimpire', 'Vitamin Z', 'Kangaroo Rider', 'Smashing Gargantuar', 'Biodome Botanist', 'Cosmic Yeti', 'Primordial Cheese Shover', 'Killer Whale', 'Cat Lady', 'Zombie Yeti', 'Deep Sea Gargantuar', 'Maniacal Laugh', 'Cheese Cutter', 'Cyborg Zombie', 'Area 22', 'Extinction Event', 'Ancient Vimpire', 'Hunting Grounds', 'Nurse Gargantuar', 'Octo Zombie', 'Zombot 1000', 'Interstellar Bounty Hunter', 'Supernova Gargantuar', 'Mondo Bronto', 'Gargantuar-Throwing Gargantuar', 'Fraidy Cat', 'Secret Agent', 'Energy Drink Zombie', 'Synchronized Swimmer', 'Hover-Goat 3000', 'Overstuffed Zombie', 'Sneezing Zombie', 'King of the Grill',
			//Brainy
	'Cardboard Robot Zombie', 'Paparazzi Zombie', 'Lurch for Lunch', 'Fun-Dead Raiser', 'Drum Major', 'Chimney Sweep', 'Beam Me Up', 'Cell Phone Zombie', 'Pool Shark', 'Zombot Drone Engineer', 'Brain Vendor', 'Mountain Climber', 'Cryo-Brain', 'Medulla Nebula', 'Moonwalker', 'Copter Commando', 'Mustache Waxer', "Pirate's Booty", 'Gentleman Zombie', 'Kite Flyer', 'Gadget Scientist', 'Hail-a-Copter', 'Wizard Gargantuar', 'Cosmic Scientist', 'Triplication', 'Zom-Blob', 'Mustache Monument', 'Electrician', 'Rocket Science', 'Mad Chemist', 'Portal Technician', 'Neutron Imp', 'Transformation Station', 'Wormhole Gatekeeper', 'Evolutionary Leap', 'Parasol Zombie', 'Duckstache', 'Teleport', 'Shieldcrusher Viking', 'Trickster', 'Interdimensional Zombie', 'Teleportation Zombie', 'Gargantuar Mime', 'Zombot Dinotronic Mechasaur', 'Leprechaun Imp', 'Regifting Zombie', 'Trick-or-Treater', 'Thinking Cap', 'Kitchen Sink Zombie', 'Bad Moon Rising'
]
module.exports = {
	name: `wheelim`,
	aliases: [`imwheel`, `wheelticia`, `wheelimmorticia`],
	category: `Immorticia(IM)`,
	run: async(client, message, args)=> {
				if(!args[0]){
			return message.reply("Please input a number format wheelim number")
		}
		if(isNaN(args[0])) {
			return message.reply("Must input a number")
		}
				if(args[0] > 40) {
		return	message.reply("Must input a number less than 40")
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
	.setTitle(`Wheel Immorticia Deck`)
	embed.setDescription(`Here is your wheel for Immorticia
 **${randomWords.join('\n')}**`)
		.setColor("Random")
		
		message.channel.send({embeds: [ embed ] })
		}
	}
}