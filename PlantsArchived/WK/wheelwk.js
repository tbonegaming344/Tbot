const {EmbedBuilder} = require("discord.js")
	const wordsArray = [
			//Solar
'Bellflower', 'Sunflower', 'Mixed Nuts', 'Squash', 'Smashing Pumpkin', 'Morning Glory', 'Fume-Shroom', 'Pepper M.D.', 'Water Balloons', 'Venus Flytrap', 'Bloomerang', 'Metal Petal Sunflower', 'Cosmoss', 'Apple-Saucer', 'Venus Flytraplanet', 'Kernel-Pult', "Lil' Buddy", 'Sunnier-Shroom', 'Sage Sage', 'Whack-a-Zombie', 'Lawnmower', 'Magnifying Grass', 'Power Flower', 'Cosmic Flower', 'Heartichoke', 'Elderberry', 'Eyespore', 'Twin Sunflower', '2nd-Best Taco of All Time', 'Chomper', 'Laser Bean', 'Solar Winds', 'Wing-Nut', 'Tactical Cuke', 'Primal Sunflower', 'Sunflower Seed', 'Sun Strike', 'Briar Rose', 'Three-Headed Chomper', 'Cornucopia', 'Astrocado', 'Astro Vera', 'Cob Cannon', 'Aloesaurus', 'Haunted Pumpking', 'Sun-Shroom', "Jack O' Lantern", 'Ketchup Mechanic', 'Toadstool',
			//Gurdian
	'Small-Nut', 'Sting Bean', 'Wall-Nut', 'Pismashio', 'Spineapple', 'Potato Mine', 'Cactus', 'Gardening Gloves', 'Sea-Shroom', 'Water Chestnut', 'Pea-Nut', 'Steel Magnolia', 'Photosynthesizer', 'Spikeweed Sector', 'Plantern', 'Grape Responsibility', 'Primal Potato Mine', 'Grizzly Pear', 'Grave Buster', 'Hibernating Beary', 'Prickly Pear', 'Smackadamia', 'Tough Beets', 'Cosmic Nut', 'Starch-Lord', 'Blockbuster', 'Pumpkin Shell', 'Jugger-Nut', 'Mirror-Nut', 'Guacodile', 'Doom-Shroom', 'Galacta-Cactus', 'Force Field', 'Gravitree', 'Three-Nut', 'Marine Bean', 'Primal Wall-Nut', "Poppin' Poppies", 'Soul Patch', 'Wall-Nut Bowling', 'Body-Gourd', 'Pecanolith', 'Tricarrotops', 'Loco Coco', 'Forget-Me-Nuts', 'Garlic', 'Corn Dog', 'Hot Date', 'Health-Nut', 'Pear Cub', 'Shamrocket', 'Red Stinger'
]
module.exports = {
	name: `wheelwk`,
	aliases: [`wkwheel`, `wheelknight`, `wheelwallknight`],
	category: `Wall Knight(WK)`,
	run: async(client, message, args)=> {
					if(!args[0]){
						return message.reply("Please input a number format wheelwk number")
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
	.setTitle(`Wheel Wall-Knight Deck`)
	embed.setDescription(`Here is your wheel for Wall-Knight
 **${randomWords.join('\n')}**`)
		.setColor("Random")
		
		message.channel.send({embeds: [ embed ] })
		}
	}
}