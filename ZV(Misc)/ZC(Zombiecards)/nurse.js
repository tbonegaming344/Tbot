const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `nursegarg`,
	aliases: [`nurse`, `gargnurse`, `nursegargantuar`, `Nursegargantuar`, `Nursegarg`, `ng`],
	category: `Zombie Cards`,
		run: async(client, message, args) => {
			let embed = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/pvzcc/images/a/a2/NurseGargatuar_PvZ2.png/revision/latest?cb=20180804101947")
			.setTitle("Nurse Gargantuar | <:Beastly:1062500894744264714>")	
			.setDescription("**- Professional Gargantuar Zombie -**") 
				.addFields({name: "Stats", 
										value: "6 <:Strength:1062501774612779039>, 6 <:Health:1062515540712751184>, 7 <:Brainz:1062503146745774183>"},
									 {
										 name:"Ability",  
										 value: "When this does damage, heal your Hero that much."
									 },
									 {
										 name: "Set-Rarity", 
										 value: "**Premium - Legendary**"
									 },
									 {
										 name: "Flavor Text", 
										 value: "Their bedside manner could use some work."
									 }) 
				.setColor("Random")
				 
	message.channel.send({embeds: [ embed ] } )
		}
}