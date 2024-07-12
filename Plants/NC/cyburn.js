const { EmbedBuilder } = require("discord.js");
let db = require("../../index.js");
module.exports = {
  name: `cyburn`,
  aliases: [`nccyburn`, `cyburnnc`, `cycleburn`, `cyclecap`, `cburn`],
  category: `NightCap(NC)`,
  run: async (client, message, args) => {
    let [result] = await db.query(`SELECT cyburn from ncdecks`);
    let embed = new EmbedBuilder()
      .setTitle("Cyburn")
      .setDescription(`${result[2].cyburn}`)
      .setFooter({ text: `${result[1].cyburn}` })
      .addFields({ name: "Deck Cost", value: `${result[0].cyburn}` })
      .setColor("Random")
      .setImage(`${result[3].cyburn}`);
    message.channel.send({ embeds: [embed] });
  },
};
