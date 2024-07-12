const { EmbedBuilder } = require("discord.js");
let db = require("../../index.js");
module.exports = {
  name: `yuletide`,
  aliases: [
    `gsfreeze`,
    `freezegreenshadow`,
    `greenshadowfreeze`,
    `freezegs`,
    `alyra`,
    `alyrafreeze`,
    `yule`,
  ],
  category: `Green Shadow(GS)`,
  run: async (client, message, args) => {
    let [result] = await db.query(`SELECT yuletide from gsdecks`);
    let embed = new EmbedBuilder()
      .setTitle("Yuletide")
      .setDescription(`${result[2].yuletide}`)
      .setFooter({ text: `${result[1].yuletide}` })
      .addFields({ name: "Deck Cost", value: `${result[0].yuletide}` })
      .setColor("Random")
      .setImage(`${result[3].yuletide}`);
    message.channel.send({ embeds: [embed] });
  },
};
