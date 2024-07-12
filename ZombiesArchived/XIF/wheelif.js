const {EmbedBuilder} = require("discord.js")
	const wordsArray = [
			//crazy
'Backup Dancer', 'Bungee Plumber', 'Cuckoo Zombie', 'Disco Zombie', 'Flamenco Zombie', 'Tennis Champ', 'Unlife of the Party', 'Conga Zombie', 'Newspaper Zombie', 'Cakesplosion', 'Orchestra Conductor', 'Foot Soldier Zombie', 'Loose Cannon', 'Meteor Z', 'Space Ninja', 'Mystery Egg', 'Sugary Treat', 'Trapper Territory', 'Exploding Imp', 'Jester', "Zombot's Wrath", 'The Chickening', 'Imp-Throwing Gargantuar', 'Final Mission', 'Cosmic Dancer', 'Gizzard Lizard', 'Disco Dance Floor', 'Aerobics Instructor', 'Abracadaver', 'Fireworks Zombie', 'Disco-Tron 3000', 'Disco-Naut', 'Moon Base Z', 'Gas Giant', 'Quickdraw Con Man', 'Grave Robber', "Zombie's Best Friend", 'Barrel of Deadbeards', 'Valkyrie', "Gargantuars' Feast", 'Quasar Wizard', 'Binary Stars', 'Tankylosaurus', 'Headhunter', 'Exploding Fruitcake', 'Unexpected Gifts', 'Stupid Cupid', 'Frankentuar', 'Gargantuar-Throwing Imp', 'Hippity Hop Gargantuar',
			//Sneaky
	'Imp', 'Mini-Ninja', 'Smoke Bomb', 'Fishy Imp', 'Smelly Zombie', 'Headstone Carver', 'Zombie Chicken', 'Hot Dog Imp', 'Swashbuckler Zombie', 'Backyard Bounce', 'Stealthy Imp', 'Firefighter', 'Graveyard', 'Ice Pirate', 'Frosty Mustache', 'Swabbie', 'Barrel of Barrels', 'Monkey Smuggler', 'Imp Commander', 'Barrel Roller Zombie', 'Surprise Gargantuar', 'Walrus Rider', 'Zombot Stomp', 'Cosmic Imp', 'Space Pirate', 'Blowgun Imp', 'Buried Treasure', 'Toxic Waste Imp', 'Line Dancing Zombie', 'Pogo Bouncer', 'Tomb Raiser Zombie', 'Ducky Tube Zombie', 'Dr. Spacetime', 'Laser Base Alpha', 'Cursed Gargolith', 'Excavator Zombie', 'Unthawed Viking', 'Mixed-Up Gravedigger', 'Zombot Sharktronic Sub', 'Zombot Plank Walker', 'Space Cowboy', 'Cryo-Yeti', 'Zombot Aerostatic Gondola', 'Raiding Raptor', 'Imposter', 'Fire Rooster', 'Imp-Throwing Imp', 'Captain Flameface', 'Zombie High Diver', 'Trapper Zombie'
]
module.exports = {
	name: `wheelif`,
	aliases: [`ifwheel`, `wheelfinity`, `wheelimpfinity`],
	category: `Impfinity(IF)`,
	run: async(client, message, args)=> {
		if(!args[0]){
			return message.reply("Please input a number format wheelif number")
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
	.setTitle(`Wheel Impfinity Deck`)
	embed.setDescription(`Here is your wheel for Impfinity
 **${randomWords.join('\n')}**`)
		.setColor("Random")
		
		message.channel.send({embeds: [ embed ] })
		}
	}
}