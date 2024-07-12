const { EmbedBuilder } = require("discord.js");
let db = require("../../index.js");
module.exports = {
  name: `wrathmartin`,
  aliases: [`martinwrath`, `wmartin`],
  category: `Impfinity(IF)`,
  run: async (client, message, args) => {
    let [result] = await db.query(`SELECT wrathmartin FROM ifdecks`);
    let embed = new EmbedBuilder()
      .setTitle("Wrath Martin")
      .setDescription(`${result[2].wrathmartin}`)
      .setFooter({ text: `${result[1].wrathmartin}` })
      .addFields({ name: "Deck Cost", value: `${result[0].wrathmartin}` })
      .setColor("Random")
      .setImage(`${result[3].wrathmartin}`);
    message.channel.send({ embeds: [embed] });
  },
};
