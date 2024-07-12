const {EmbedBuilder} = require("discord.js")
	const wordsArray = [
			//Crazy
'Backup Dancer', 'Bungee Plumber', 'Cuckoo Zombie', 'Disco Zombie', 'Flamenco Zombie', 'Tennis Champ', 'Unlife of the Party', 'Conga Zombie', 'Newspaper Zombie', 'Cakesplosion', 'Orchestra Conductor', 'Foot Soldier Zombie', 'Loose Cannon', 'Meteor Z', 'Space Ninja', 'Mystery Egg', 'Sugary Treat', 'Trapper Territory', 'Exploding Imp', 'Jester', "Zombot's Wrath", 'The Chickening', 'Imp-Throwing Gargantuar', 'Final Mission', 'Cosmic Dancer', 'Gizzard Lizard', 'Disco Dance Floor', 'Aerobics Instructor', 'Abracadaver', 'Fireworks Zombie', 'Disco-Tron 3000', 'Disco-Naut', 'Moon Base Z', 'Gas Giant', 'Quickdraw Con Man', 'Grave Robber', "Zombie's Best Friend", 'Barrel of Deadbeards', 'Valkyrie', "Gargantuars' Feast", 'Quasar Wizard', 'Binary Stars', 'Tankylosaurus', 'Headhunter', 'Exploding Fruitcake', 'Unexpected Gifts', 'Stupid Cupid', 'Frankentuar', 'Gargantuar-Throwing Imp', 'Hippity Hop Gargantuar',
			//Brainy
'Cardboard Robot Zombie', 'Paparazzi Zombie', 'Lurch for Lunch', 'Fun-Dead Raiser', 'Drum Major', 'Chimney Sweep', 'Beam Me Up', 'Cell Phone Zombie', 'Pool Shark', 'Zombot Drone Engineer', 'Brain Vendor', 'Mountain Climber', 'Cryo-Brain', 'Medulla Nebula', 'Moonwalker', 'Copter Commando', 'Mustache Waxer', "Pirate's Booty", 'Gentleman Zombie', 'Kite Flyer', 'Gadget Scientist', 'Hail-a-Copter', 'Wizard Gargantuar', 'Cosmic Scientist', 'Triplication', 'Zom-Blob', 'Mustache Monument', 'Electrician', 'Rocket Science', 'Mad Chemist', 'Portal Technician', 'Neutron Imp', 'Transformation Station', 'Wormhole Gatekeeper', 'Evolutionary Leap', 'Parasol Zombie', 'Duckstache', 'Teleport', 'Shieldcrusher Viking', 'Trickster', 'Interdimensional Zombie', 'Teleportation Zombie', 'Gargantuar Mime', 'Zombot Dinotronic Mechasaur', 'Leprechaun Imp', 'Regifting Zombie', 'Trick-or-Treater', 'Thinking Cap', 'Kitchen Sink Zombie', 'Bad Moon Rising'
]
module.exports = {
	name: `wheelpb`,
	aliases: [`pbwheel`, `wheelbrainstrom`, `wheelpbs`, `pbswheel`, `wheelstorm`],
	category: `Professor Brainstorm(PB)`,
	run: async(client, message, args)=> {

				if(!args[0]){
			return message.reply("Please input a number format wheelpb number")
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
	.setTitle(`Wheel Professor Brainstorm Deck`)
	embed.setDescription(`Here is your wheel for Professor Brainstorm
 **${randomWords.join('\n')}**`)
		.setColor("Random")
		
		message.channel.send({embeds: [ embed ] })
		}
	}
}