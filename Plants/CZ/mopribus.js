const { EmbedBuilder } = require("discord.js");
let db = require("../../index.js");
module.exports = {
  name: `moprbius`,
  aliases: [
    `mothwhowpkantxrwarbeatiiunitedstates`,
    `mothwh`,
    `mopzilla`,
    `czmop`,
    `mopcz`,
    `zillamop`,
    `chompzillamop`,
    `mopchompzilla`,
	`mopbrius`,
    `healmop`,
    `mopheal`,
    `moprings`,
    `mopringzilla`,
    `ringsmop`,
  ],
  category: `Chompzilla(CZ)`,
  run: async (client, message, args) => {
    let [result] = await db.query(`SELECT mopribus from czdecks`);
    let mop = new EmbedBuilder()
      .setTitle("Moprbius")
      .setDescription(`${result[2].mopribus}`)
      .setColor("Random")
      .addFields({ name: "Deck Cost", value: `${result[0].mopribus}` })
      .setFooter({ text: `${result[1].mopribus}` })
      .setImage(`${result[3].mopribus}`);
    message.channel.send({ embeds: [mop] });
  },
};
