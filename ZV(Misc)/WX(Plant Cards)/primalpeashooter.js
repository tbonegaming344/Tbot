const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `primalpeashooter`,
	aliases: [`primalpea`, `pps`, `pp8`],
	category: `Plant Cards`,
	run: async(client, message,args)=> {
		let pp = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/f/f7/Primalpeashooterpvz2.png/revision/latest/scale-to-width-down/250?cb=20190502155146")
		.setTitle("Primal Peashooter | <:Smarty:1062502890448638022>")
		.setDescription("**- Pea Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value:"2 <:Strength:1062501774612779039>, 2 <:Health:1062515540712751184>, 1 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "When this hurts a Zombie, __Bounce__ that Zombie."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Triassic - Uncommon**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Found in groups of 3, 5, 7, 11, and 31."
							 })
		message.channel.send({embeds: [pp]})
	}
}