const { EmbedBuilder } = require("discord.js");
let db = require("../../index.js");
module.exports = {
  name: `reliablemolekale`,
  aliases: [
    `reliablemolekalesp`,
    `reliablekale`,
    `rmsp`,
    `molecontrol`,
    `molekalecontrol`,
    `reliable`,
    `relikale`,
    `reliakale`,
    `rmk`,
    `rmkale`,
  ],
  category: `Spudow(SP)`,
  run: async (client, message, args) => {
    let [result] = await db.query(`SELECT reliablemolekale from spdecks`);
    let embed = new EmbedBuilder()
      .setTitle("Reliable Molekale")
      .setDescription(`${result[2].reliablemolekale}`)
      .setFooter({ text: `${result[1].reliablemolekale}` })
      .addFields({ name: "Deck Cost", value: `${result[0].reliablemolekale}` })
      .setColor("Random")
      .setImage(`${result[3].reliablemolekale}`);
    message.channel.send({ embeds: [embed] });
  },
};
