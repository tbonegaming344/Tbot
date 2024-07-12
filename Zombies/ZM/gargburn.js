const { EmbedBuilder } = require("discord.js");
let db = require("../../index.js");
module.exports = {
  name: `gargburn`,
  aliases: [`burngargs`, `gargburnzm`, `gburn`, `gargmech`, `gmech`],
  category: `Zmech(ZM)`,
  run: async (client, message, args) => {
    let [result] = await db.query(`SELECT gargburn FROM zmdecks`);
    let embed = new EmbedBuilder()
      .setTitle("Garg Burn")
      .setDescription(`${result[2].gargburn}`)
      .setFooter({ text: `${result[1].gargburn}` })
      .addFields({ name: "Deck Cost", value: `${result[0].gargburn}` })
      .setColor("Random")
      .setImage(`${result[3].gargburn}`);
    message.channel.send({ embeds: [embed] });
  },
};
