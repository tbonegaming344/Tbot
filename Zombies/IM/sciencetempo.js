const { EmbedBuilder } = require("discord.js");
let db = require("../../index.js");
module.exports = {
  name: `scimmort`,
  aliases: [
    `temposcience`,
    `scienceimmorticia`,
    `scienceticia`,
    `scimmorttempo`,
    `scit`,
    `tempsci`,
    `scitemp`,
    `telescope`,
    `sciencetempo`,
    `scienceim`,
    `imscience`,
  ],
  category: `Immorticia(IM)`,
  run: async (client, message, args) => {
    let [result] = await db.query(`SELECT scimmort FROM imdecks`);
    let embed = new EmbedBuilder()
      .setTitle("Scimmort")
      .setDescription(`${result[2].scimmort}`)
      .setFooter({ text: `${result[1].scimmort}` })
      .addFields({ name: "Deck Cost", value: `${result[0].scimmort}` })
      .setColor("Random")
      .setImage(`	${result[3].scimmort}`);
    message.channel.send({ embeds: [embed] });
  },
};
