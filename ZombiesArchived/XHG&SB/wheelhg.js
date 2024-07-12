const {EmbedBuilder} = require("discord.js")
	const wordsArray = [
			//Brainy
'Cardboard Robot Zombie', 'Paparazzi Zombie', 'Lurch for Lunch', 'Fun-Dead Raiser', 'Drum Major', 'Chimney Sweep', 'Beam Me Up', 'Cell Phone Zombie', 'Pool Shark', 'Zombot Drone Engineer', 'Brain Vendor', 'Mountain Climber', 'Cryo-Brain', 'Medulla Nebula', 'Moonwalker', 'Copter Commando', 'Mustache Waxer', "Pirate's Booty", 'Gentleman Zombie', 'Kite Flyer', 'Gadget Scientist', 'Hail-a-Copter', 'Wizard Gargantuar', 'Cosmic Scientist', 'Triplication', 'Zom-Blob', 'Mustache Monument', 'Electrician', 'Rocket Science', 'Mad Chemist', 'Portal Technician', 'Neutron Imp', 'Transformation Station', 'Wormhole Gatekeeper', 'Evolutionary Leap', 'Parasol Zombie', 'Duckstache', 'Teleport', 'Shieldcrusher Viking', 'Trickster', 'Interdimensional Zombie', 'Teleportation Zombie', 'Gargantuar Mime', 'Zombot Dinotronic Mechasaur', 'Leprechaun Imp', 'Regifting Zombie', 'Trick-or-Treater', 'Thinking Cap', 'Kitchen Sink Zombie', 'Bad Moon Rising',
			//Sneaky
	'Imp', 'Mini-Ninja', 'Smoke Bomb', 'Fishy Imp', 'Smelly Zombie', 'Headstone Carver', 'Zombie Chicken', 'Hot Dog Imp', 'Swashbuckler Zombie', 'Backyard Bounce', 'Stealthy Imp', 'Firefighter', 'Graveyard', 'Ice Pirate', 'Frosty Mustache', 'Swabbie', 'Barrel of Barrels', 'Monkey Smuggler', 'Imp Commander', 'Barrel Roller Zombie', 'Surprise Gargantuar', 'Walrus Rider', 'Zombot Stomp', 'Cosmic Imp', 'Space Pirate', 'Blowgun Imp', 'Buried Treasure', 'Toxic Waste Imp', 'Line Dancing Zombie', 'Pogo Bouncer', 'Tomb Raiser Zombie', 'Ducky Tube Zombie', 'Dr. Spacetime', 'Laser Base Alpha', 'Cursed Gargolith', 'Excavator Zombie', 'Unthawed Viking', 'Mixed-Up Gravedigger', 'Zombot Sharktronic Sub', 'Zombot Plank Walker', 'Space Cowboy', 'Cryo-Yeti', 'Zombot Aerostatic Gondola', 'Raiding Raptor', 'Imposter', 'Fire Rooster', 'Imp-Throwing Imp', 'Captain Flameface', 'Zombie High Diver', 'Trapper Zombie'
]
module.exports = {
	name: `wheelhg`,
	aliases: [`hgwheel`, `wheelgigantacus`, `wheelhugegigantacus`],
	category: `Huge-Gigantacus/SuperBrainz`,
	run: async(client, message, args)=> {
		if(!args[0]){
			return message.reply("Please input a number format wheelhg number")
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
	.setTitle(`Wheel Huge-Gigantacus(HG) Deck`)
	embed.setDescription(`Here is your wheel for Huge-Gigantacus(HG)
 **${randomWords.join('\n')}**`)
		.setColor("Random")
		
		message.channel.send({embeds: [ embed ] })
		}
	}
}