const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `coolbean`,
	aliases: [`cool`, `cb3`, `cbean`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		let cb = new EmbedBuilder()
		.setThumbnail("https://media.discordapp.net/attachments/1044626284346605588/1106221433996181645/Carbeanite_HD.webp")
		.setTitle("Cool Bean | <:Smarty:1062502890448638022>")
		.setDescription("**- Bean Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "3 <:Strength:1062501774612779039>, 3 <:Health:1062515540712751184>, 3 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "**When played:** <:IceCube:1008531889906253937>__Freeze__ all Gravestones."
							 },
							 {
								 name: "Set-Rarity",
								value: "**Galactic - Super-Rare**"
							 },
							 {
								 name: "Flavor Text",
								 value: `"Chance of meeting Gravestones? Never tell me the odds!"`
							 })
		message.channel.send({embeds: [cb]})
	}
}