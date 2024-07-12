const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `regiftingzombie`,
	aliases: [`regifting`, `rz`, `regifter`],
	category: `Zombie Cards`,
	run: async(client, message, args) => {
			let embed = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/5/51/REgift.png/revision/latest/scale-to-width-down/250?cb=20180325231534")
			.setTitle("Regifting Zombie | <:Brainy:1062500939908530246>")
			.setDescription("**- Party Pirate Zombie  -**")
			.addFields({name: "Stats", 
									value: "3 <:Strength:1062501774612779039>, 2 <:Health:1062515540712751184>, 3 <:Brainz:1062503146745774183>"},
								 {
									 name: "Ability",  
									 value: "**When played:** Each player draws two cards."
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Event**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `Regifting: Is it really an embarrassing social faux pas? Or is it just good ol' recycling?`
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
		}
}