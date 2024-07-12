const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `terrorformer10000`,
	aliases: [`hgsig`, `terror`, `terrorformer`, `former`, `tf1`, `tf`],
	category: `Tricks Phase`,
	run: async(client, message, args) => {
			let embed = new EmbedBuilder()
				.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/c/c9/Terror-Former_2000_card.png/revision/latest/scale-to-width-down/250?cb=20170414224508")
			.setTitle("Terror-Former 10,000 | <:Brainy:1062500939908530246><:Sneaky:1062502187781075094>")
			.setDescription("**- Science Imp Superpower Trick  -**")
			.addFields({name: "Stats", 
									value: "1 <:Brainz:1062503146745774183>"},
								 {
									 name: "Ability",  
									 value: "__Conjure__ an Environment. All cards in your hand costs 1<:Brainz:1062503146745774183> less. "
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Premium - Legendary**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `This is Huge-Gigantacus' greatest invention ever. It's also his only invention. But it's best not to point that out to him.`
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
		}
}