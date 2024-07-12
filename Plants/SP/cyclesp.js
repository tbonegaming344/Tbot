const { EmbedBuilder } = require("discord.js");
let db = require("../../index.js");
module.exports = {
  name: `cyclesp`,
  aliases: [
    `spcycle`,
    `cyclespudow`,
    `spudowcycle`,
    `csp`,
    `cyclespud`,
    `cycledow`,
    `cspudow`,
    `cdow`,
  ],
  category: `Spudow(SP)`,
  run: async (client, message, args) => {
    let [result] = await db.query(`SELECT cyclesp from spdecks`);
    let embed = new EmbedBuilder()
      .setTitle("Cycle Spudow")
      .setDescription(`${result[2].cyclesp}`)
      .setFooter({ text: `${result[1].cyclesp}` })
      .addFields({ name: "Deck Cost", value: `${result[0].cyclesp}` })
      .setColor("Random")
      .setImage(`${result[3].cyclesp}`);
    message.channel.send({ embeds: [embed] });
  },
};
