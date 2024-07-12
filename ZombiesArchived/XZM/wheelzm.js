const {EmbedBuilder} = require("discord.js")
	const wordsArray = [
			//Hearty
'Baseball Zombie', 'Rolling Stone', 'Conehead', 'Team Mascot', 'Medic', 'Arm Wrestler', 'Camel Crossing', 'Flag Zombie', 'Terrify', 'Trash Can Zombie', 'Buckethead', 'Ra Zombie', 'Cone Zone', 'Celestial Custodian', 'Screen Door Zombie', 'Healthy Treat', 'Zombie Middle Manager', 'Leftovers', 'Sumo Wrestler', 'Zombie Coach', 'Monster Mash', 'Knight of the Living Dead', 'Rodeo Gargantuar', 'Escape through Time', 'Cosmic Sports Star', 'Primeval Yeti', 'Lost Colosseum', 'Landscaper', 'Weed Spray', 'All-Star Zombie', 'Coffee Zombie', 'Black Hole', 'Genetic Experiment', 'Planetary Gladiator', 'Jurassic Fossilhead', 'Knockout', 'Turquoise Skull Zombie', 'Zombie King', 'Undying Pharaoh', 'Wannabe Hero', 'Intergalactic Warlord', 'Zombot Battlecruiser 5000', 'Stompadon', 'Chum Champion', 'Zombology Teacher', 'Gargologist', 'Turkey Rider', 'Going Viral', 'Bonus Track Buckethead', 'Defensive End',
			//Crazy
'Backup Dancer', 'Bungee Plumber', 'Cuckoo Zombie', 'Disco Zombie', 'Flamenco Zombie', 'Tennis Champ', 'Unlife of the Party', 'Conga Zombie', 'Newspaper Zombie', 'Cakesplosion', 'Orchestra Conductor', 'Foot Soldier Zombie', 'Loose Cannon', 'Meteor Z', 'Space Ninja', 'Mystery Egg', 'Sugary Treat', 'Trapper Territory', 'Exploding Imp', 'Jester', "Zombot's Wrath", 'The Chickening', 'Imp-Throwing Gargantuar', 'Final Mission', 'Cosmic Dancer', 'Gizzard Lizard', 'Disco Dance Floor', 'Aerobics Instructor', 'Abracadaver', 'Fireworks Zombie', 'Disco-Tron 3000', 'Disco-Naut', 'Moon Base Z', 'Gas Giant', 'Quickdraw Con Man', 'Grave Robber', "Zombie's Best Friend", 'Barrel of Deadbeards', 'Valkyrie', "Gargantuars' Feast", 'Quasar Wizard', 'Binary Stars', 'Tankylosaurus', 'Headhunter', 'Exploding Fruitcake', 'Unexpected Gifts', 'Stupid Cupid', 'Frankentuar', 'Gargantuar-Throwing Imp', 'Hippity Hop Gargantuar'
]
module.exports = {
	name: `wheelzm`,
	aliases: [`zmwheel`, `wheelzmech`, `zmechwheel`, `wheelmech`],
	category: `Zmech(ZM)`,
	run: async(client, message, args)=> {
		if(!args[0]){
		return message.reply("Please input a number format wheelzm number")
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
	.setTitle(`Wheel Zmech Deck`)
	embed.setDescription(`Here is your wheel for Zmech
 **${randomWords.join('\n')}**`)
		.setColor("Random")
		
		message.channel.send({embeds: [ embed ] })
		}
	}
}