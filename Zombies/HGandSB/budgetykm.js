const { EmbedBuilder } = require("discord.js");
let db = require("../../index.js");
module.exports = {
  name: `budgetykm`,
  aliases: [`ykmbudget`, `budgethg`, `hgbudget`],
  category: `Huge-Gigantacus/SuperBrainz`,
  run: async (client, message, args) => {
    let [result] = await db.query(`SELECT budgetykm FROM hgdecks`);
    let embed = new EmbedBuilder()
      .setTitle("Budget YKM")
      .setDescription(`${result[2].budgetykm}`)
      .setFooter({ text: `${result[1].budgetykm}` })
      .addFields({ name: "Deck Cost", value: `${result[0].budgetykm}` })
      .setColor("Random")
      .setImage(`${result[3].budgetykm}`);
    message.channel.send({ embeds: [embed] });
  },
};
