const {EmbedBuilder} = require("discord.js")
	const wordsArray = [
			//Kabloom
	'Button Mushroom', 'Berry Blast', 'Buff-Shroom', 'Seedling', 'Zapricot', 'Poison Mushroom', 'Berry Angry', 'Mushroom Ringleader', 'Poison Ivy', 'Pair of Pears', 'Bluesberry', 'Sizzle', 'Banana Bomb', 'Mushroom Grotto', 'Invasive Species', 'Puff-Shroom', 'Veloci-Radish Hatchling', 'Hot Lava', 'Shroom for Two', 'Wild Berry', 'Petal-Morphosis', 'Sour Grapes', 'Poison Oak', 'Cosmic Mushroom', 'Lava Guava', 'Cro-Magnolia', 'Shelf Mushroom', 'Punish-Shroom', 'Sergeant Strongberry', 'Cherry Bomb', 'Grapes of Wrath', 'Astro-Shroom', 'Banana Launcher', 'Pair Pearadise', 'Fireweed', 'Imitater', 'Strawberrian', 'Pineclone', 'Dandy Lion King', 'Kernel Corn', 'Reincarnation', 'Molekale', 'Gloom-Shroom', 'Veloci-Radish Hunter', 'Blooming Heart', 'High-Voltage Currant', 'Sonic Bloom', 'Transfiguration', 'Atomic Bombegranate', 'Electric Blueberry',
			//Solar
	'Bellflower', 'Sunflower', 'Mixed Nuts', 'Squash', 'Smashing Pumpkin', 'Morning Glory', 'Fume-Shroom', 'Pepper M.D.', 'Water Balloons', 'Venus Flytrap', 'Bloomerang', 'Metal Petal Sunflower', 'Cosmoss', 'Apple-Saucer', 'Venus Flytraplanet', 'Kernel-Pult', "Lil' Buddy", 'Sunnier-Shroom', 'Sage Sage', 'Whack-a-Zombie', 'Lawnmower', 'Magnifying Grass', 'Power Flower', 'Cosmic Flower', 'Heartichoke', 'Elderberry', 'Eyespore', 'Twin Sunflower', '2nd-Best Taco of All Time', 'Chomper', 'Laser Bean', 'Solar Winds', 'Wing-Nut', 'Tactical Cuke', 'Primal Sunflower', 'Sunflower Seed', 'Sun Strike', 'Briar Rose', 'Three-Headed Chomper', 'Cornucopia', 'Astrocado', 'Astro Vera', 'Cob Cannon', 'Aloesaurus', 'Haunted Pumpking', 'Sun-Shroom', "Jack O' Lantern", 'Ketchup Mechanic', 'Toadstool'
]
module.exports = {
	name: `wheelsf`,
	aliases: [`sfwheel`, `wheelflare`],
	category: `Solar Flare(SF)`,
	run: async(client, message, args)=> {
		if(!args[0]){
			return message.reply("Please input a number format wheelsf number")
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
	.setTitle(`Wheel Solar Flare Deck`)
	embed.setDescription(`Here is your wheel for Solar Flare
 **${randomWords.join('\n')}**`)
		.setColor("Random")
		
		message.channel.send({embeds: [ embed ] })
		}
	}
}