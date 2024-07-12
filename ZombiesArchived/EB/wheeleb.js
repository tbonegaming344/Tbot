const {EmbedBuilder} = require("discord.js")
	const wordsArray = [
			//Crazy
'Backup Dancer', 'Bungee Plumber', 'Cuckoo Zombie', 'Disco Zombie', 'Flamenco Zombie', 'Tennis Champ', 'Unlife of the Party', 'Conga Zombie', 'Newspaper Zombie', 'Cakesplosion', 'Orchestra Conductor', 'Foot Soldier Zombie', 'Loose Cannon', 'Meteor Z', 'Space Ninja', 'Mystery Egg', 'Sugary Treat', 'Trapper Territory', 'Exploding Imp', 'Jester', "Zombot's Wrath", 'The Chickening', 'Imp-Throwing Gargantuar', 'Final Mission', 'Cosmic Dancer', 'Gizzard Lizard', 'Disco Dance Floor', 'Aerobics Instructor', 'Abracadaver', 'Fireworks Zombie', 'Disco-Tron 3000', 'Disco-Naut', 'Moon Base Z', 'Gas Giant', 'Quickdraw Con Man', 'Grave Robber', "Zombie's Best Friend", 'Barrel of Deadbeards', 'Valkyrie', "Gargantuars' Feast", 'Quasar Wizard', 'Binary Stars', 'Tankylosaurus', 'Headhunter', 'Exploding Fruitcake', 'Unexpected Gifts', 'Stupid Cupid', 'Frankentuar', 'Gargantuar-Throwing Imp', 'Hippity Hop Gargantuar',
			//Beastly
	'Skunk Punk', 'Pied Piper', 'Zookeeper', 'Dolphin Rider', 'Locust Swarm', 'Dog Walker', 'Nibble', 'Snorkel Zombie', 'Yeti Lunchbox', 'Haunting Zombie', 'Loudmouth', 'B-flat', 'Total Eclipse', 'Alien Ooze', 'Surfer Zombie', 'Haunting Ghost', 'Goat', 'Vengeful Cyborg', 'Squirrel Herder', 'Vimpire', 'Vitamin Z', 'Kangaroo Rider', 'Smashing Gargantuar', 'Biodome Botanist', 'Cosmic Yeti', 'Primordial Cheese Shover', 'Killer Whale', 'Cat Lady', 'Zombie Yeti', 'Deep Sea Gargantuar', 'Maniacal Laugh', 'Cheese Cutter', 'Cyborg Zombie', 'Area 22', 'Extinction Event', 'Ancient Vimpire', 'Hunting Grounds', 'Nurse Gargantuar', 'Octo Zombie', 'Zombot 1000', 'Interstellar Bounty Hunter', 'Supernova Gargantuar', 'Mondo Bronto', 'Gargantuar-Throwing Gargantuar', 'Fraidy Cat', 'Secret Agent', 'Energy Drink Zombie', 'Synchronized Swimmer', 'Hover-Goat 3000', 'Overstuffed Zombie', 'Sneezing Zombie', 'King of the Grill'
]
module.exports = {
	name: `wheeleb`,
	aliases: [`ebwheel`, `wheelboog`, `wheelboogaloo`],
	category: `Electric Boogaloo(EB)`,
	run: async(client, message, args)=> {
		if(!args[0]){
			return message.reply("Please input a number format wheeleb number")
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
	.setTitle(`Wheel Electric Boogaloo(EB) Deck`)
	embed.setDescription(`Here is your wheel for Electric Boogaloo(EB)
 **${randomWords.join('\n')}**`)
		.setColor("Random")
		
		message.channel.send({embeds: [ embed ] })
		}
	}
}