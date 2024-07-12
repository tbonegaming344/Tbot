const {EmbedBuilder} = require("discord.js")
	const wordsArray = [
			//Solar
	'Bellflower', 'Sunflower', 'Mixed Nuts', 'Squash', 'Smashing Pumpkin', 'Morning Glory', 'Fume-Shroom', 'Pepper M.D.', 'Water Balloons', 'Venus Flytrap', 'Bloomerang', 'Metal Petal Sunflower', 'Cosmoss', 'Apple-Saucer', 'Venus Flytraplanet', 'Kernel-Pult', "Lil' Buddy", 'Sunnier-Shroom', 'Sage Sage', 'Whack-a-Zombie', 'Lawnmower', 'Magnifying Grass', 'Power Flower', 'Cosmic Flower', 'Heartichoke', 'Elderberry', 'Eyespore', 'Twin Sunflower', '2nd-Best Taco of All Time', 'Chomper', 'Laser Bean', 'Solar Winds', 'Wing-Nut', 'Tactical Cuke', 'Primal Sunflower', 'Sunflower Seed', 'Sun Strike', 'Briar Rose', 'Three-Headed Chomper', 'Cornucopia', 'Astrocado', 'Astro Vera', 'Cob Cannon', 'Aloesaurus', 'Haunted Pumpking', 'Sun-Shroom', "Jack O' Lantern", 'Ketchup Mechanic', 'Toadstool',
			//Mega-Grow
	'Peashooter', 'Torchwood', 'Cabbage-Pult', 'Fertilize', 'Flourish', 'Grow-Shroom', 'Repeater', 'Bonk Choy', 'Pea Pod', 'Sweet Potato', 'Fire Peashooter', 'Skyshooter', 'Coffee Grounds', 'Sweet Pea', 'Vegetation Mutation', 'Umbrella Leaf', 'Half-Banana', 'Typical Beanstalk', 'The Podfather', 'Plant Food', 'Re-Peat Moss', 'Whipvine', 'Super-Phat Beets', 'Banana Peel', 'Cosmic Pea', 'Bamboozle', 'Pea Patch', 'Party Thyme', 'Black-Eyed Pea', 'Potted Powerhouse', 'Espresso Fiesta', 'Moonbean', 'Pod Fighter', 'The Red Plant-It', 'Split Pea', 'Grape Power', 'Savage Spinach', 'Doubled Mint', 'Muscle Sprout', 'Bananasaurus Rex', 'Captain Cucumber', 'Onion Rings', 'Gatling Pea', 'Apotatosaurus', 'Clique Peas', 'Lily of the Valley', 'Banana Split', 'Plucky Clover'
]
module.exports = {
	name: `wheelcz`,
	aliases: [`czwheel`, `wheelzilla`],
	category: `Chompzilla(CZ)`,
	run: async(client, message, args)=> {
		if(!args[0]){
		return message.reply("Please input a number format <@1043528908148052089> wheelcz number")
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
	.setTitle(`Wheel Chompzilla Deck`)
	embed.setDescription(`Here is your wheel for Chompzila
 **${randomWords.join('\n')}**`)
		.setColor("Random")
		
		message.channel.send({embeds: [ embed ] })
		}
	}
}