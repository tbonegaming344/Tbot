const {EmbedBuilder} = require("discord.js")
	const wordsArray = [
			//Gurdian
	'Small-Nut', 'Sting Bean', 'Wall-Nut', 'Pismashio', 'Spineapple', 'Potato Mine', 'Cactus', 'Gardening Gloves', 'Sea-Shroom', 'Water Chestnut', 'Pea-Nut', 'Steel Magnolia', 'Photosynthesizer', 'Spikeweed Sector', 'Plantern', 'Grape Responsibility', 'Primal Potato Mine', 'Grizzly Pear', 'Grave Buster', 'Hibernating Beary', 'Prickly Pear', 'Smackadamia', 'Tough Beets', 'Cosmic Nut', 'Starch-Lord', 'Blockbuster', 'Pumpkin Shell', 'Jugger-Nut', 'Mirror-Nut', 'Guacodile', 'Doom-Shroom', 'Galacta-Cactus', 'Force Field', 'Gravitree', 'Three-Nut', 'Marine Bean', 'Primal Wall-Nut', "Poppin' Poppies", 'Soul Patch', 'Wall-Nut Bowling', 'Body-Gourd', 'Pecanolith', 'Tricarrotops', 'Loco Coco', 'Forget-Me-Nuts', 'Garlic', 'Corn Dog', 'Hot Date', 'Health-Nut', 'Pear Cub', 'Shamrocket', 'Red Stinger',
			//Mega-Grow
	'Peashooter', 'Torchwood', 'Cabbage-Pult', 'Fertilize', 'Flourish', 'Grow-Shroom', 'Repeater', 'Bonk Choy', 'Pea Pod', 'Sweet Potato', 'Fire Peashooter', 'Skyshooter', 'Coffee Grounds', 'Sweet Pea', 'Vegetation Mutation', 'Umbrella Leaf', 'Half-Banana', 'Typical Beanstalk', 'The Podfather', 'Plant Food', 'Re-Peat Moss', 'Whipvine', 'Super-Phat Beets', 'Banana Peel', 'Cosmic Pea', 'Bamboozle', 'Pea Patch', 'Party Thyme', 'Black-Eyed Pea', 'Potted Powerhouse', 'Espresso Fiesta', 'Moonbean', 'Pod Fighter', 'The Red Plant-It', 'Split Pea', 'Grape Power', 'Savage Spinach', 'Doubled Mint', 'Muscle Sprout', 'Bananasaurus Rex', 'Captain Cucumber', 'Onion Rings', 'Gatling Pea', 'Apotatosaurus', 'Clique Peas', 'Lily of the Valley', 'Banana Split', 'Plucky Clover'
]
module.exports = {
	name: `wheelgk`,
	aliases: [`gkwheel`, `wheelkncukles`],
	category: `Grass Knuckles(GK)`,
	run: async(client, message, args)=> {
		if(!args[0]){
			return message.reply("Please input a number format <@1043528908148052089> wheelgk number")
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
	.setTitle(`Wheel Grass Knuckles Deck`)
	embed.setDescription(`Here is your wheel for Grass Knuckles
 **${randomWords.join('\n')}**`)
		.setColor("Random")
		
		message.channel.send({embeds: [ embed ] })
		}
	}
}