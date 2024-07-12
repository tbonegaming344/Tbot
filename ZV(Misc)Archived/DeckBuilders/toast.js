const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `toastdecks`,
	aliases: [`toast`, `decksmadebytoast`, `toasthelp`, `helptoast`],
	category: `Miscellaneous`,
	run: async(client, message, args) => {
		let embed = new EmbedBuilder()
		.setTitle("Toast Decks")
		.setDescription("My commands for decks made by Toast are \n <@1043528908148052089> jerry")
		.setFooter({text: "Decks Made By Toast", iconURL: "https://images-ext-2.discordapp.net/external/kmGFPpqdqiMgDkEt0V35UMMJCZVVL8lyFoLBD5XsR4c/%3Fsize%3D1024/https/cdn.discordapp.com/avatars/681709454747893795/cfe579874d150c70a4d152e8445d172f.png"})
		.setColor("Random")
			
	message.channel.send({embeds: [ embed ] } )
	}
}