const { EmbedBuilder } = require("discord.js");
let db = require("../../index.js");
module.exports = {
  name: `playerremoval`,
  aliases: [`playerremovaleb`, `pr`, `maxburn`],
  category: `Electric Boogaloo(EB)`,
  run: async (client, message, args) => {
    let [result] = await db.query(`SELECT playerremoval FROM ebdecks`);
    let embed = new EmbedBuilder()
      .setTitle("Player Removal")
      .setDescription(`${result[2].playerremoval}`)
      .addFields({ name: "Deck Cost", value: `${result[0].playerremoval}` })
      .setFooter({ text: `${result[1].playerremoval}` })
      .setColor("Random")
      .setImage(`${result[3].playerremoval}`);
    message.channel.send({ embeds: [embed] });
  },
};
