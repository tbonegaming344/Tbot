const {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
} = require('discord.js');
module.exports = {
  name: "eloreport",
  aliases: [
    `reportelo`,
    `report`,
    `reportmatches`,
    `reportset`,
    `setreport`,
    `reportgames`,
    `reportmatch`,
    `reportgame`,
  ],
  category: `Miscellaneous`,
  run: async (client, message, args) => {
    if (message.guild.id == "840248484145266748" || message.guild.id == "1067545812994895882" ||  message.guild.id == "804872373236662293") {
      const button = new ButtonBuilder()
      .setLabel('Elo Report')
      .setCustomId('elo-report')
      .setStyle(ButtonStyle.Secondary);
  
  const row = new ActionRowBuilder({
      components: [button],
  });
     let search = new EmbedBuilder()
      .setTitle("Elo Report")
      .setDescription("Please use the button below to report your games")
      .setColor("Random")
      await message.reply({embeds: [search], components: [row]})
    } else {
      return message.channel.send(
        "Elo has been restricted to just the elo please go report your games in the elo server"
      );
    }
    //message.channel.send("done");
  },
};
