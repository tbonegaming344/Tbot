const { EmbedBuilder } = require("discord.js");
let db = require("../../index.js");
module.exports = {
  name: `shamcontrolbc`,
  aliases: [
    `bccontrol`,
    `cbc`,
    `controlbc`,
    `bcwnbcontrol`,
    `controltina`,
    `bcshamcontrol`,
    `shamcontrol`,
  ],
  category: `Beta-Carrotina/Citron`,
  run: async (client, message, args) => {
    let [result] = await db.query("SELECT shamcontrol FROM bcdecks");
    let embed = new EmbedBuilder()
      .setTitle("Sham Control Beta Carrotina")
      .setDescription(`${result[2].shamcontrol}`)
      .setFooter({ text: `${result[1].shamcontrol}` })
      .addFields({ name: "Deck Cost", value: `${result[0].shamcontrol}` })
      .setColor("Random")
      .setImage(`${result[3].shamcontrol}`);
    message.channel.send({ embeds: [embed] });
  },
};
