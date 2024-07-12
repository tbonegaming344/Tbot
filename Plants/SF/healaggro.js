const { EmbedBuilder } = require("discord.js");
let db = require("../../index.js");
module.exports = {
  name: `healaggrosf`,
  aliases: [
    `hasf`,
    `sfhealaggro`,
    `aggrohealsf`,
    `sfaggroheal`,
    `aggrohealingsf`,
    `healingaggrosf`,
	`sfhealingaggro`,
	`sfhealggro`
  ],
  category: `Solar Flare(SF)`,
  run: async (client, message, args) => {
    let [result] = await db.query(`SELECT healaggrosf from sfdecks`);
    let ha = new EmbedBuilder()
      .setTitle("Heal Aggro")
      .setDescription(`${result[2].healaggrosf}`)
      .setFooter({ text: `${result[1].healaggrosf}` })
      .setColor("Random")
      .addFields({ name: "Deck Cost", value: `${result[0].healaggrosf}` })
      .setImage(`${result[3].healaggrosf}`);
    message.channel.send({ embeds: [ha] });
  },
};
