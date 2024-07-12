const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `sunstrike`,
	aliases: [`strike1`, `ss13`],
	category: `Tricks Phase`,
	run: async(client, message, args)=> {
		let ss = new EmbedBuilder()
		.setThumbnail("https://media.discordapp.net/attachments/1044626284346605588/1107453235092004934/sunstrike.webp?width=384&height=384")
		.setTitle("Sun Strike | <:Solar:1062502678384607262>")
		.setDescription("**- Trick -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "4 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "All Plants get <:Strikethrough:1062502987425140806>__Strikethrough__ this turn. \n__Conjure__ a Trick."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Triassic - Super-Rare**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Each Plant is grown with the power of solar radiation. Sometimes you just have to let it out."
							 })
		message.channel.send({embeds: [ss]})
	}
}