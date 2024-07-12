const {EmbedBuilder} = require("discord.js")
	const wordsArray = [
			//Smarty
	'Snowdrop', 'Weenie Beanie', 'Snow Pea', 'Cattail', 'Smoosh-Shroom', 'Threepeater', 'Iceberg Lettuce', 'Shellery', 'Rescue Radish', 'Spring Bean', 'Vanilla', 'Carrotillery', 'Mars Flytrap', 'Planet of the Grapes', 'Leaf Blower', 'Grave Mistake', 'Pear Pal', 'Primal Peashooter', 'Admiral Navy Bean', 'Lightning Reed', 'Chilly Pepper', 'Navy Bean', 'Jumping Bean', 'Cosmic Bean', 'Melon-Pult', 'Tricorn', 'Lily Pad', 'Sow Magic Beans', 'Bean Counter', 'Snapdragon', 'Winter Squash', 'Laser Cattail', 'Bog of Enlightenment', 'Cool Bean', 'Jelly Bean', 'Rotobaga', 'Shrinking Violet', 'Brainana', 'Winter Melon', 'The Great Zucchini', 'Shooting Starfruit', 'Dark Matter Dragonfruit', 'Lima-Pleurodon', 'Bird of Paradise', 'Spyris', 'Go-Nuts', 'Mayflower', 'Sportacus', 'Snake Grass', 'Witch Hazel', 'Jolly Holly', 'Sap-Fling',
			//Solar
	'Bellflower', 'Sunflower', 'Mixed Nuts', 'Squash', 'Smashing Pumpkin', 'Morning Glory', 'Fume-Shroom', 'Pepper M.D.', 'Water Balloons', 'Venus Flytrap', 'Bloomerang', 'Metal Petal Sunflower', 'Cosmoss', 'Apple-Saucer', 'Venus Flytraplanet', 'Kernel-Pult', "Lil' Buddy", 'Sunnier-Shroom', 'Sage Sage', 'Whack-a-Zombie', 'Lawnmower', 'Magnifying Grass', 'Power Flower', 'Cosmic Flower', 'Heartichoke', 'Elderberry', 'Eyespore', 'Twin Sunflower', '2nd-Best Taco of All Time', 'Chomper', 'Laser Bean', 'Solar Winds', 'Wing-Nut', 'Tactical Cuke', 'Primal Sunflower', 'Sunflower Seed', 'Sun Strike', 'Briar Rose', 'Three-Headed Chomper', 'Cornucopia', 'Astrocado', 'Astro Vera', 'Cob Cannon', 'Aloesaurus', 'Haunted Pumpking', 'Sun-Shroom', "Jack O' Lantern", 'Ketchup Mechanic', 'Toadstool'
]
module.exports = {
	name: `wheelro`,
	aliases: [`rowheel`, `wheelrose`],
	category: `Rose(RO)`,
	run: async(client, message, args)=> {
					if(!args[0]){
					return 	message.reply("Please input a number format wheelro number")
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
	.setTitle(`Wheel Rose Deck`)
	embed.setDescription(`Here is your wheel for Rose
 **${randomWords.join('\n')}**`)
		.setColor("Random")
		
		message.channel.send({embeds: [ embed ] })
		}
	}
}