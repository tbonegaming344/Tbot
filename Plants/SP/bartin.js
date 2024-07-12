const { EmbedBuilder } = require("discord.js");
let db = require("../../index.js");
module.exports = {
  name: `bartin`,
  aliases: [
    `bartindb`,
    `dbbartin`,
    `burstmartin`,
    `boredtin`,
    `bmartin`,
    `bartinburst`,
    `bartburst`,
  ],
  category: `Spudow(SP)`,
  run: async (client, message, args) => {
    let [result] = await db.query(`SELECT bartin from spdecks`);
    let embed = new EmbedBuilder()
      .setTitle("Burst Martin")
      .setDescription(`${result[2].bartin}`)
      .setFooter({ text: `${result[1].bartin}` })
      .addFields({ name: "Deck Cost", value: `${result[0].bartin}` })
      .setColor("Random")
      .setImage(`${result[3].bartin}`);
    message.channel.send({ embeds: [embed] });
  },
};
