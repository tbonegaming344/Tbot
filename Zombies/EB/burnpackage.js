const { EmbedBuilder } = require("discord.js");
let db = require("../../index.js");
module.exports = {
  name: `burnpackage`,
  aliases: [`packageburn`, `bup`],
  category: `Electric Boogaloo(EB)`,
  run: async (client, message, args) => {
    let [result] = await db.query(`SELECT burnpackage FROM ebdecks`);
    let embed = new EmbedBuilder()
      .setTitle("Burn Package")
      .setDescription(`${result[2].burnpackage}`)
      .setFooter({ text: `${result[1].burnpackage}` })
      .addFields({ name: "Deck Cost", value: `${result[0].burnpackage}` })
      .setColor("Random")
      .setImage(`${result[3].burnpackage}`);
    message.channel.send({ embeds: [embed] });
  },
};
