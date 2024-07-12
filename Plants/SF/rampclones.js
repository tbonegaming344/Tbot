const { EmbedBuilder } = require("discord.js");
let db = require("../../index.js");
module.exports = {
  name: `rampclones`,
  aliases: [`ramppineclones`, `rampclonessf`, `rc`],
  category: `Solar Flare(SF)`,
  run: async (client, message, args) => {
    let [result] = await db.query(`SELECT rampclones from sfdecks`);
    let embed = new EmbedBuilder()
      .setTitle("Rampclones")
      .setDescription(`${result[2].rampclones}`)
      .setFooter({ text: `${result[1].rampclones}` })
      .setColor("Random")
      .setImage(`${result[3].rampclones}`)
      .addFields({ name: "Deck Cost", value: `${result[0].rampclones}` });
    message.channel.send({ embeds: [embed] });
  },
};
