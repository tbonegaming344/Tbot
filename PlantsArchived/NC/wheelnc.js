 const {EmbedBuilder} = require("discord.js")
	const wordsArray = [
			//Smarty
	'Snowdrop', 'Weenie Beanie', 'Snow Pea', 'Cattail', 'Smoosh-Shroom', 'Threepeater', 'Iceberg Lettuce', 'Shellery', 'Rescue Radish', 'Spring Bean', 'Vanilla', 'Carrotillery', 'Mars Flytrap', 'Planet of the Grapes', 'Leaf Blower', 'Grave Mistake', 'Pear Pal', 'Primal Peashooter', 'Admiral Navy Bean', 'Lightning Reed', 'Chilly Pepper', 'Navy Bean', 'Jumping Bean', 'Cosmic Bean', 'Melon-Pult', 'Tricorn', 'Lily Pad', 'Sow Magic Beans', 'Bean Counter', 'Snapdragon', 'Winter Squash', 'Laser Cattail', 'Bog of Enlightenment', 'Cool Bean', 'Jelly Bean', 'Rotobaga', 'Shrinking Violet', 'Brainana', 'Winter Melon', 'The Great Zucchini', 'Shooting Starfruit', 'Dark Matter Dragonfruit', 'Lima-Pleurodon', 'Bird of Paradise', 'Spyris', 'Go-Nuts', 'Mayflower', 'Sportacus', 'Snake Grass', 'Witch Hazel', 'Jolly Holly', 'Sap-Fling',
			//Kabloom
	'Button Mushroom', 'Berry Blast', 'Buff-Shroom', 'Seedling', 'Zapricot', 'Poison Mushroom', 'Berry Angry', 'Mushroom Ringleader', 'Poison Ivy', 'Pair of Pears', 'Bluesberry', 'Sizzle', 'Banana Bomb', 'Mushroom Grotto', 'Invasive Species', 'Puff-Shroom', 'Veloci-Radish Hatchling', 'Hot Lava', 'Shroom for Two', 'Wild Berry', 'Petal-Morphosis', 'Sour Grapes', 'Poison Oak', 'Cosmic Mushroom', 'Lava Guava', 'Cro-Magnolia', 'Shelf Mushroom', 'Punish-Shroom', 'Sergeant Strongberry', 'Cherry Bomb', 'Grapes of Wrath', 'Astro-Shroom', 'Banana Launcher', 'Pair Pearadise', 'Fireweed', 'Imitater', 'Strawberrian', 'Pineclone', 'Dandy Lion King', 'Kernel Corn', 'Reincarnation', 'Molekale', 'Gloom-Shroom', 'Veloci-Radish Hunter', 'Blooming Heart', 'High-Voltage Currant', 'Sonic Bloom', 'Transfiguration', 'Atomic Bombegranate', 'Electric Blueberry'
]
module.exports = {
	name: `wheelnc`,
	aliases: [`ncwheel`, `wheelcap`],
	category: `NightCap(NC)`,
	run: async(client, message, args)=> {
		if(!args[0]){
			return message.reply("Please input a number format wheelnc number")
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
	.setTitle(`Wheel Nightcap Deck`)
	embed.setDescription(`Here is your wheel for Nightcap
 **${randomWords.join('\n')}**`)
		.setColor("Random")
		
		message.channel.send({embeds: [ embed ] })
		}
	}
}