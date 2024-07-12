const { EmbedBuilder } = require("discord.js");
let db = require("../../index.js");
module.exports = {
  name: `spacestars`,
  aliases: [`ifspacestars`, `sps`, `spacestar`, `rapstars`],
  category: `Impfinity(IF)`,
  run: async (client, message, args) => {
    let [result] = await db.query(`SELECT spacestars FROM ifdecks`);
    let embed = new EmbedBuilder()
      .setTitle("Spacestars")
      .setDescription(`${result[2].spacestars}`)
      .setFooter({ text: `${result[1].spacestars}` })
      .addFields({ name: "Deck Cost", value: `${result[0].spacestars}` })
      .setColor("Random")
      .setImage(`${result[3].spacestars}`);
    message.channel.send({ embeds: [embed] });
  },
};
