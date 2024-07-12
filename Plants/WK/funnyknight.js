const { EmbedBuilder } = require("discord.js");
let db = require("../../index.js");
module.exports = {
  name: `funnyknight`,
  aliases: [
    `knightfunny`,
    `wkfunny`,
    `funnywk`,
    `fk`,
    `funnierknight`,
    `funnier`,
    `funny`,
    `fknight`,
  ],
  category: `Wall Knight(WK)`,
  run: async (client, message, args) => {
    let [result] = await db.query(`SELECT funnyknight from wkdecks`);
    let embed = new EmbedBuilder()
      .setTitle("Funny Knight")
      .setDescription(`${result[2].funnyknight}`)
      .setFooter({ text: `${result[1].funnyknight}` })
      .addFields({ name: "Deck Cost", value: `${result[0].funnyknight}` })
      .setColor("Random")
      .setImage(`${result[3].funnyknight}`);
    message.channel.send({ embeds: [embed] });
  },
};
