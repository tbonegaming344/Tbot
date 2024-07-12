const {
	ActionRowBuilder,
	ButtonBuilder,
	ButtonStyle,
	EmbedBuilder,
  } = require('discord.js');
module.exports = {
	name: `8ball`,
	aliases: [`ball8`],
	category: `Miscellaneous`,
	run: async(client, message, args) => {
		const button = new ButtonBuilder()
		.setLabel('🎱 8 ball')
		.setCustomId('8-ball')
		.setStyle(ButtonStyle.Secondary);
	
	const row = new ActionRowBuilder({
		components: [button],
	});
	   let search = new EmbedBuilder()
		.setTitle("8 ball")
		.setDescription("Please use the button below to use the 8ball")
		.setColor("Random")
		await message.reply({embeds: [search], components: [row]})
	}
}