const { EmbedBuilder } = require("discord.js");
let db = require("../../index.js");
module.exports = {
  name: `aggroramppeas`,
  aliases: [
    `rampaggropeas`,
    `peasaggroramp`,
    `peasrampaggro`,
    `arp`,
    `agrampea`,
    `agramppea`,
    `aggrorampeas`,
    `agrampeas`,
  ],
  category: `Chompzilla(CZ)`,
  run: async (client, message, args) => {
    let [result] = await db.query(`SELECT aggroramppeas from czdecks`);
    let embed = new EmbedBuilder()
      .setTitle("Aggro Ramp Peas")
      .setDescription(`${result[2].aggroramppeas}`)
      .setFooter({ text: `${result[1].aggroramppeas}` })
      .addFields({ name: "Deck Cost", value: `${result[0].aggroramppeas}` })
      .setColor("Random")
      .setImage(`${result[3].aggroramppeas}`);
    message.channel.send({ embeds: [embed] });
  },
};
