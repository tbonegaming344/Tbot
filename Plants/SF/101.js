const { EmbedBuilder } = require("discord.js");
let db = require("../../index.js");
module.exports = {
  name: `101`,
  aliases: [
    `oneoone`,
    `101.1`,
    `1011`,
    `101.1wr`,
    `101.1%`,
    `cyclesf`,
    `cycleflare`,
    `sfcycle`,
    `101wr`,
  ],
  category: `Solar Flare(SF)`,
  run: async (client, message, args) => {
    let [result] = await db.query(`SELECT oneone from sfdecks`);
    let embed = new EmbedBuilder()
      .setTitle("101.1")
      .setDescription(`${result[2].oneone}`)
      .setFooter({ text: `${result[1].oneone}` })
      .setColor("Random")
      .setImage(`${result[3].oneone}`)
      .addFields({ name: "Deck Cost", value: `${result[0].oneone}` });
    message.channel.send({ embeds: [embed] });
  },
};
