const { EmbedBuilder } = require("discord.js");
let db = require("../../index.js");
module.exports = {
  name: `youngeggmartin`,
  aliases: [`yem`, `youngeggm`, `em`, `yemartin`, `eggmartin`],
  category: `Professor Brainstorm(PB)`,
  run: async (client, message, args) => {
    let [result] = await db.query(`select youngeggmartin from pbdecks`);
    let youngeggmartin = new EmbedBuilder()
      .setTitle("Young Egg Martin")
      .setDescription(`${result[2].youngeggmartin}`)
      .setColor("Random")
      .setFooter({ text: `${result[1].youngeggmartin}` })
      .addFields({ name: "Deck Cost", value: `${result[0].youngeggmartin}` })
      .setImage(`${result[3].youngeggmartin}`);
    message.channel.send({ embeds: [youngeggmartin] });
  },
};
