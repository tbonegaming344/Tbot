const {EmbedBuilder} = require("discord.js")
	const wordsArray = [
			//Kabloom
	'Button Mushroom', 'Berry Blast', 'Buff-Shroom', 'Seedling', 'Zapricot', 'Poison Mushroom', 'Berry Angry', 'Mushroom Ringleader', 'Poison Ivy', 'Pair of Pears', 'Bluesberry', 'Sizzle', 'Banana Bomb', 'Mushroom Grotto', 'Invasive Species', 'Puff-Shroom', 'Veloci-Radish Hatchling', 'Hot Lava', 'Shroom for Two', 'Wild Berry', 'Petal-Morphosis', 'Sour Grapes', 'Poison Oak', 'Cosmic Mushroom', 'Lava Guava', 'Cro-Magnolia', 'Shelf Mushroom', 'Punish-Shroom', 'Sergeant Strongberry', 'Cherry Bomb', 'Grapes of Wrath', 'Astro-Shroom', 'Banana Launcher', 'Pair Pearadise', 'Fireweed', 'Imitater', 'Strawberrian', 'Pineclone', 'Dandy Lion King', 'Kernel Corn', 'Reincarnation', 'Molekale', 'Gloom-Shroom', 'Veloci-Radish Hunter', 'Blooming Heart', 'High-Voltage Currant', 'Sonic Bloom', 'Transfiguration', 'Atomic Bombegranate', 'Electric Blueberry',
			//Mega-Grow
	'Peashooter', 'Torchwood', 'Cabbage-Pult', 'Fertilize', 'Flourish', 'Grow-Shroom', 'Repeater', 'Bonk Choy', 'Pea Pod', 'Sweet Potato', 'Fire Peashooter', 'Skyshooter', 'Coffee Grounds', 'Sweet Pea', 'Vegetation Mutation', 'Umbrella Leaf', 'Half-Banana', 'Typical Beanstalk', 'The Podfather', 'Plant Food', 'Re-Peat Moss', 'Whipvine', 'Super-Phat Beets', 'Banana Peel', 'Cosmic Pea', 'Bamboozle', 'Pea Patch', 'Party Thyme', 'Black-Eyed Pea', 'Potted Powerhouse', 'Espresso Fiesta', 'Moonbean', 'Pod Fighter', 'The Red Plant-It', 'Split Pea', 'Grape Power', 'Savage Spinach', 'Doubled Mint', 'Muscle Sprout', 'Bananasaurus Rex', 'Captain Cucumber', 'Onion Rings', 'Gatling Pea', 'Apotatosaurus', 'Clique Peas', 'Lily of the Valley', 'Banana Split', 'Plucky Clover'
]
module.exports = {
	name: `wheelcc`,
	aliases: [`ccwheel`],
	category: `Captain Combustible(CC)`,
	run: async(client, message, args)=> {
		if(!args[0]){
			return	message.reply("Please input a number format wheelcc number")
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
	.setTitle(`Wheel Captain Combustible Deck`)
	embed.setDescription(`Here is your wheel for Captain Combustible
 **${randomWords.join('\n')}**`)
		.setColor("Random")
		
		message.channel.send({embeds: [ embed ] })
		}
	}
}