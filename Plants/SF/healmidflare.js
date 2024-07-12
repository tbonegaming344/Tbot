const { EmbedBuilder } = require("discord.js");
let db = require("../../index.js");
module.exports = {
  name: `healmidflare`,
  aliases: [
    `midhealflare`,
    `sfmidheal`,
    `midhealsf`,
    `hmf`,
    `hmfsf`,
    `hmsf`,
    `healmidsf`,
    `hmflare`,
    `ogname`,
    `originalname`,
  ],
  category: `Solar Flare(SF)`,
  run: async (client, message, args) => {
    let [result] = await db.query(`SELECT healmidflare from sfdecks`);
    let embed = new EmbedBuilder()
      .setTitle("Heal Mid Flare")
      .setDescription(`${result[2].healmidflare}`)
      .setFooter({ text: `${result[1].healmidflare}` })
      .addFields({ name: "Deck Cost", value: `${result[0].healmidflare}` })
      .setColor("Random")
      .setImage(`${result[3].healmidflare}`);
    message.channel.send({ embeds: [embed] });
  },
};
