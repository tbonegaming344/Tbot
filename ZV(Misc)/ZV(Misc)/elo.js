const {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
} = require('discord.js');

module.exports = {
  name: "elo",
	aliases: [`score`, `points`],
	category: `Miscellaneous`,
  run: async(client, message, args) => {
    const button = new ButtonBuilder()
		.setLabel('Elo Score')
		.setCustomId('elo-score')
		.setStyle(ButtonStyle.Secondary);
    const row = new ActionRowBuilder({
      components: [button],
    });
       let search = new EmbedBuilder()
      .setTitle("Elo Score")
      .setDescription("Please use the button below to check your or someone else's elo score with their discord id")
      .setColor("Random")
      await message.reply({embeds: [search], components: [row]})
  }
}