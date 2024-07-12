const {EmbedBuilder} = require("discord.js")
	const wordsArray = [
			//Kabloom
	'Button Mushroom', 'Berry Blast', 'Buff-Shroom', 'Seedling', 'Zapricot', 'Poison Mushroom', 'Berry Angry', 'Mushroom Ringleader', 'Poison Ivy', 'Pair of Pears', 'Bluesberry', 'Sizzle', 'Banana Bomb', 'Mushroom Grotto', 'Invasive Species', 'Puff-Shroom', 'Veloci-Radish Hatchling', 'Hot Lava', 'Shroom for Two', 'Wild Berry', 'Petal-Morphosis', 'Sour Grapes', 'Poison Oak', 'Cosmic Mushroom', 'Lava Guava', 'Cro-Magnolia', 'Shelf Mushroom', 'Punish-Shroom', 'Sergeant Strongberry', 'Cherry Bomb', 'Grapes of Wrath', 'Astro-Shroom', 'Banana Launcher', 'Pair Pearadise', 'Fireweed', 'Imitater', 'Strawberrian', 'Pineclone', 'Dandy Lion King', 'Kernel Corn', 'Reincarnation', 'Molekale', 'Gloom-Shroom', 'Veloci-Radish Hunter', 'Blooming Heart', 'High-Voltage Currant', 'Sonic Bloom', 'Transfiguration', 'Atomic Bombegranate', 'Electric Blueberry',
			//Gurdian
	'Small-Nut', 'Sting Bean', 'Wall-Nut', 'Pismashio', 'Spineapple', 'Potato Mine', 'Cactus', 'Gardening Gloves', 'Sea-Shroom', 'Water Chestnut', 'Pea-Nut', 'Steel Magnolia', 'Photosynthesizer', 'Spikeweed Sector', 'Plantern', 'Grape Responsibility', 'Primal Potato Mine', 'Grizzly Pear', 'Grave Buster', 'Hibernating Beary', 'Prickly Pear', 'Smackadamia', 'Tough Beets', 'Cosmic Nut', 'Starch-Lord', 'Blockbuster', 'Pumpkin Shell', 'Jugger-Nut', 'Mirror-Nut', 'Guacodile', 'Doom-Shroom', 'Galacta-Cactus', 'Force Field', 'Gravitree', 'Three-Nut', 'Marine Bean', 'Primal Wall-Nut', "Poppin' Poppies", 'Soul Patch', 'Wall-Nut Bowling', 'Body-Gourd', 'Pecanolith', 'Tricarrotops', 'Loco Coco', 'Forget-Me-Nuts', 'Garlic', 'Corn Dog', 'Hot Date', 'Health-Nut', 'Pear Cub', 'Shamrocket', 'Red Stinger'
]
module.exports = {
	name: `wheelsp`,
	aliases: [`spwheel`, `wheeldow`, `wheelspudow`],
	category: `Spudow(SP)`,
	run: async(client, message, args)=> {
		if(!args[0]){
			return message.reply("Please input a number format wheelsp number")
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
	.setTitle(`Wheel Spudow Deck`)
	embed.setDescription(`Here is your wheel for Spudow 
**${randomWords.join('\n')}**`)
		.setColor("Random")
		
		message.channel.send({embeds: [ embed ] })
		}
	}
}