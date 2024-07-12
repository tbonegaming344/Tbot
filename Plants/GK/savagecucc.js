const { EmbedBuilder } = require("discord.js");
let db = require("../../index.js");
module.exports = {
  name: `savagecucumber`,
  aliases: [`savagecucc`, `sc`],
  category: `Grass Knuckles(GK)`,
  run: async (client, message, args) => {
    let [result] = await db.query(`SELECT savagecucumber FROM gkdecks`);
    let embed = new EmbedBuilder()
      .setTitle("Savage Cucumber")
      .setDescription(`${result[2].savagecucumber}`)
      .setFooter({ text: `${result[1].savagecucumber}` })
      .addFields({ name: "Deck Cost", value: `${result[0].savagecucumber}` })
      .setColor("Random")
      .setImage(`${result[3].savagecucumber}`);
    message.channel.send({ embeds: [embed] });
  },
};
