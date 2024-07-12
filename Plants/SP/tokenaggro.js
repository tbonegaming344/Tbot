const { EmbedBuilder } = require("discord.js");
let db = require("../../index.js");
module.exports = {
  name: `tokenaggro`,
  aliases: [`aggrotoken`, `sptokenaggro`, `tokenaggrosp`, `spclone`, `clonesp`],
  category: `Spudow(SP)`,
  run: async (client, message, args) => {
    let [result] = await db.query(`SELECT tokenaggro from spdecks`);
    let embed = new EmbedBuilder()
      .setTitle("Token Aggro")
      .setDescription(`${result[2].tokenaggro}`)
      .setFooter({ text: `${result[1].tokenaggro}` })
      .addFields({ name: "Deck Cost", value: `${result[0].tokenaggro}` })
      .setImage(`${result[3].tokenaggro}`)
      .setColor("Random");
    message.channel.send({ embeds: [embed] });
  },
};
