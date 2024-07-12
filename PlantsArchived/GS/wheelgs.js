const {EmbedBuilder} = require("discord.js")
	const wordsArray = [
			//Smarty
	'Snowdrop', 'Weenie Beanie', 'Snow Pea', 'Cattail', 'Smoosh-Shroom', 'Threepeater', 'Iceberg Lettuce', 'Shellery', 'Rescue Radish', 'Spring Bean', 'Vanilla', 'Carrotillery', 'Mars Flytrap', 'Planet of the Grapes', 'Leaf Blower', 'Grave Mistake', 'Pear Pal', 'Primal Peashooter', 'Admiral Navy Bean', 'Lightning Reed', 'Chilly Pepper', 'Navy Bean', 'Jumping Bean', 'Cosmic Bean', 'Melon-Pult', 'Tricorn', 'Lily Pad', 'Sow Magic Beans', 'Bean Counter', 'Snapdragon', 'Winter Squash', 'Laser Cattail', 'Bog of Enlightenment', 'Cool Bean', 'Jelly Bean', 'Rotobaga', 'Shrinking Violet', 'Brainana', 'Winter Melon', 'The Great Zucchini', 'Shooting Starfruit', 'Dark Matter Dragonfruit', 'Lima-Pleurodon', 'Bird of Paradise', 'Spyris', 'Go-Nuts', 'Mayflower', 'Sportacus', 'Snake Grass', 'Witch Hazel', 'Jolly Holly', 'Sap-Fling',
			//Mega-Grow
	'Peashooter', 'Torchwood', 'Cabbage-Pult', 'Fertilize', 'Flourish', 'Grow-Shroom', 'Repeater', 'Bonk Choy', 'Pea Pod', 'Sweet Potato', 'Fire Peashooter', 'Skyshooter', 'Coffee Grounds', 'Sweet Pea', 'Vegetation Mutation', 'Umbrella Leaf', 'Half-Banana', 'Typical Beanstalk', 'The Podfather', 'Plant Food', 'Re-Peat Moss', 'Whipvine', 'Super-Phat Beets', 'Banana Peel', 'Cosmic Pea', 'Bamboozle', 'Pea Patch', 'Party Thyme', 'Black-Eyed Pea', 'Potted Powerhouse', 'Espresso Fiesta', 'Moonbean', 'Pod Fighter', 'The Red Plant-It', 'Split Pea', 'Grape Power', 'Savage Spinach', 'Doubled Mint', 'Muscle Sprout', 'Bananasaurus Rex', 'Captain Cucumber', 'Onion Rings', 'Gatling Pea', 'Apotatosaurus', 'Clique Peas', 'Lily of the Valley', 'Banana Split', 'Plucky Clover'
]
module.exports = {
	name: `wheelgs`,
	aliases: [`gswheel`, `wheelshadow`],
	category: `Green Shadow(GS)`,
	run: async(client, message, args)=> {
						if(!args[0]){
					return	message.reply("Please input a number format wheelgs number")
					}
		if(isNaN(args[0])) {
			return	message.reply("Must input a number")
			}
					if(args[0] > 40) {
			return	message.reply("Must input a number less than 40")
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
	.setTitle(`Wheel Green Shadow Deck`)
	embed.setDescription(`Here is your wheel for Green Shadow
 **${randomWords.join('\n')}**`)
		.setColor("Random")
		
		message.channel.send({embeds: [ embed ] })
		}
	}
}