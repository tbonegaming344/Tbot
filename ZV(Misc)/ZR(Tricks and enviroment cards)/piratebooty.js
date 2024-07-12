const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `piratesbooty`,
	aliases: [`booty`, `potofsilver`],
	category: `Tricks Phase`, 
	run: async(client, message, args) => {
			let embed = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/a/ae/Pot_of_Silver_cardface.png/revision/latest?cb=20170701060324")
			.setTitle("Pirate's Booty | <:Brainy:1062500939908530246>")
			.setDescription("**- Pirate Barrel Trick  -**")
			.addFields({name: "Stats", 
									value: "5 <:Brainz:1062503146745774183>"},
								 {
									name: "Ability",  
									value: "Draw a card for each Zombie. " 
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Triassic - Uncommon**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `Zombie Pirates kick a lot of booty. Maybe someday they'll figure out to spend it.`
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
		}
}