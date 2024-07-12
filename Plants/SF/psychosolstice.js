const { EmbedBuilder } = require("discord.js");
let db = require("../../index.js");
module.exports = {
  name: `psychosolstice`,
  aliases: [
    `healclones`,
    `pineclonesheal`,
    `healpineclones`,
    `cloneheal`,
    `pineheal`,
    `healpine`,
	`psystice`,
    `suvkoengjthub`,
  ],
  category: `Solar Flare(SF)`,
  run: async (client, message, args) => {
    let [result] = await db.query(`SELECT psychosolstice from sfdecks`);
    let pys = new EmbedBuilder()
      .setTitle("Psycho Solstice")
      .setDescription(`${result[2].psychosolstice}`)
      .setColor("Random")
      .setFooter({ text: `${result[1].psychosolstice}` })
      .addFields({ name: "Deck Cost", value: `${result[0].psychosolstice}` })
      .setImage(`${result[3].psychosolstice}`);
    message.channel.send({ embeds: [pys] });
  },
};
