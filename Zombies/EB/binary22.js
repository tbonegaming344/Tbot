const { EmbedBuilder } = require("discord.js");
let db = require("../../index.js");
module.exports = {
  name: `binary22`,
  aliases: [`binaryarea22`, `ebbinary22`, `binary22eb`, `b22`],
  category: `Electric Boogaloo(EB)`,
  run: async (client, message, args) => {
    let [result] = await db.query(`SELECT binary22 FROM ebdecks`);
    let embed = new EmbedBuilder()
      .setTitle("Binary 22")
      .setDescription(`${result[2].binary22}`)
      .setFooter({ text: `${result[1].binary22}` })
      .setColor("Random")
      .addFields({ name: "Deck Cost", value: `${result[0].binary22}` })
      .setImage(`${result[3].binary22}`);
    message.channel.send({ embeds: [embed] });
  },
};
