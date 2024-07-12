const {EmbedBuilder} = require("discord.js")
	const wordsArray = [
			//Hearty
'Baseball Zombie', 'Rolling Stone', 'Conehead', 'Team Mascot', 'Medic', 'Arm Wrestler', 'Camel Crossing', 'Flag Zombie', 'Terrify', 'Trash Can Zombie', 'Buckethead', 'Ra Zombie', 'Cone Zone', 'Celestial Custodian', 'Screen Door Zombie', 'Healthy Treat', 'Zombie Middle Manager', 'Leftovers', 'Sumo Wrestler', 'Zombie Coach', 'Monster Mash', 'Knight of the Living Dead', 'Rodeo Gargantuar', 'Escape through Time', 'Cosmic Sports Star', 'Primeval Yeti', 'Lost Colosseum', 'Landscaper', 'Weed Spray', 'All-Star Zombie', 'Coffee Zombie', 'Black Hole', 'Genetic Experiment', 'Planetary Gladiator', 'Jurassic Fossilhead', 'Knockout', 'Turquoise Skull Zombie', 'Zombie King', 'Undying Pharaoh', 'Wannabe Hero', 'Intergalactic Warlord', 'Zombot Battlecruiser 5000', 'Stompadon', 'Chum Champion', 'Zombology Teacher', 'Gargologist', 'Turkey Rider', 'Going Viral', 'Bonus Track Buckethead', 'Defensive End',
			//Brainy
'Cardboard Robot Zombie', 'Paparazzi Zombie', 'Lurch for Lunch', 'Fun-Dead Raiser', 'Drum Major', 'Chimney Sweep', 'Beam Me Up', 'Cell Phone Zombie', 'Pool Shark', 'Zombot Drone Engineer', 'Brain Vendor', 'Mountain Climber', 'Cryo-Brain', 'Medulla Nebula', 'Moonwalker', 'Copter Commando', 'Mustache Waxer', "Pirate's Booty", 'Gentleman Zombie', 'Kite Flyer', 'Gadget Scientist', 'Hail-a-Copter', 'Wizard Gargantuar', 'Cosmic Scientist', 'Triplication', 'Zom-Blob', 'Mustache Monument', 'Electrician', 'Rocket Science', 'Mad Chemist', 'Portal Technician', 'Neutron Imp', 'Transformation Station', 'Wormhole Gatekeeper', 'Evolutionary Leap', 'Parasol Zombie', 'Duckstache', 'Teleport', 'Shieldcrusher Viking', 'Trickster', 'Interdimensional Zombie', 'Teleportation Zombie', 'Gargantuar Mime', 'Zombot Dinotronic Mechasaur', 'Leprechaun Imp', 'Regifting Zombie', 'Trick-or-Treater', 'Thinking Cap', 'Kitchen Sink Zombie', 'Bad Moon Rising'
]
module.exports = {
	name: `wheelrb`,
	aliases: [`rbwheel`, `wheelbolt`, `wheelrust`, `wheelrustbolt`,],
	category: `Rustbolt(RB)`,
	run: async(client, message, args)=> {
		if(!args[0]){
		return message.reply("Please input a number format wheelrb number")
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
	.setTitle(`Wheel Rustbolt Deck`)
	embed.setDescription(`Here is your wheel for Rustbolt
 **${randomWords.join('\n')}**`)
		.setColor("Random")
		
		message.channel.send({embeds: [ embed ] })
		}
	}
}