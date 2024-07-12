const { ActionRowBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");
module.exports = {
  name: `tourneys`,
  aliases: [
    `touraments`,
    `pvzhtourneys`,
    `tourneyspvzh`,
    `tourney`,
    `tournamentspvzh`,
    `pvzhtournaments`,
    `tournamentsforpvzh`,
  ],
  category: `Miscellaneous`,
  run: async (client, message, args) => {
    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setLabel("Garden Games")
        .setStyle(ButtonStyle.Link)
        .setURL("https://discord.gg/DAHxzP6WN7")
        .setEmoji("<:gardengames:1122172343670804600>"),
      new ButtonBuilder()
        .setLabel("Pvzhtwj Tourney")
        .setStyle(ButtonStyle.Link)
        .setURL("https://discord.gg/eHH5ZsQhPQ")
        .setEmoji("<:pvzhtwj:1124761893907746957>"),
      new ButtonBuilder()
        .setLabel("Elo Tourney")
        .setStyle(ButtonStyle.Link)
        .setURL("https://discord.gg/7X5scdcNb7")
        .setEmoji("<:elo:1250275676745896059>")

    );
    message.channel.send({
      content:
        "PVZH players are you looking for tourneys! Below you can click on the buttons to join servers for pvzh tournaments!",
      components: [row],
    });
  },
};
