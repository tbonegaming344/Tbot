const {EmbedBuilder} = require("discord.js")
	const wordsArray = [
			//Guardian
		'Small-Nut', 'Sting Bean', 'Wall-Nut', 'Pismashio', 'Spineapple', 'Potato Mine', 'Cactus', 'Gardening Gloves', 'Sea-Shroom', 'Water Chestnut', 'Pea-Nut', 'Steel Magnolia', 'Photosynthesizer', 'Spikeweed Sector', 'Plantern', 'Grape Responsibility', 'Primal Potato Mine', 'Grizzly Pear', 'Grave Buster', 'Hibernating Beary', 'Prickly Pear', 'Smackadamia', 'Tough Beets', 'Cosmic Nut', 'Starch-Lord', 'Blockbuster', 'Pumpkin Shell', 'Jugger-Nut', 'Mirror-Nut', 'Guacodile', 'Doom-Shroom', 'Galacta-Cactus', 'Force Field', 'Gravitree', 'Three-Nut', 'Marine Bean', 'Primal Wall-Nut', "Poppin' Poppies", 'Soul Patch', 'Wall-Nut Bowling', 'Body-Gourd', 'Pecanolith', 'Tricarrotops', 'Loco Coco', 'Forget-Me-Nuts', 'Garlic', 'Corn Dog', 'Hot Date', 'Health-Nut', 'Pear Cub', 'Shamrocket', 'Red Stinger',
			//Smarty
			'Snowdrop', 'Weenie Beanie', 'Snow Pea', 'Cattail', 'Smoosh-Shroom', 'Threepeater', 'Iceberg Lettuce', 'Shellery', 'Rescue Radish', 'Spring Bean', 'Vanilla', 'Carrotillery', 'Mars Flytrap', 'Planet of the Grapes', 'Leaf Blower', 'Grave Mistake', 'Pear Pal', 'Primal Peashooter', 'Admiral Navy Bean', 'Lightning Reed', 'Chilly Pepper', 'Navy Bean', 'Jumping Bean', 'Cosmic Bean', 'Melon-Pult', 'Tricorn', 'Lily Pad', 'Sow Magic Beans', 'Bean Counter', 'Snapdragon', 'Winter Squash', 'Laser Cattail', 'Bog of Enlightenment', 'Cool Bean', 'Jelly Bean', 'Rotobaga', 'Shrinking Violet', 'Brainana', 'Winter Melon', 'The Great Zucchini', 'Shooting Starfruit', 'Dark Matter Dragonfruit', 'Lima-Pleurodon', 'Bird of Paradise', 'Spyris', 'Go-Nuts', 'Mayflower', 'Sportacus', 'Snake Grass', 'Witch Hazel', 'Jolly Holly', 'Sap-Fling'
]
module.exports = {
	name: `wheelct`,
	aliases: [`ctwheel`],
	category: `Beta-Carrotina/Citron`,
	run: async(client, message, args)=> {
		if(!args[0]){
			return message.reply("Please input a number format <@1043528908148052089> wheelct number")
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
	.setTitle(`Wheel Citron Deck`)
	embed.setDescription(`Here is your wheel for Citron \n **${randomWords.join('\n')}**`)
		.setColor("Random")
		
		message.channel.send({embeds: [ embed ] })
		}
	}
}