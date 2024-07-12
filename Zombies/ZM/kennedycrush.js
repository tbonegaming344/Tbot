const { EmbedBuilder } = require("discord.js");
let db = require("../../index.js");
module.exports = {
  name: `kendycrush`,
  aliases: [`crushkendy`, `kc`, `kcrush`],
  category: `Zmech(ZM)`,
  run: async (client, message, args) => {
    let [result] = await db.query(`SELECT kendycrush FROM zmdecks`);
    let embed = new EmbedBuilder()
      .setTitle("Kendy Crush")
      .setDescription(`${result[2].kendycrush}`)
      .setFooter({ text: `${result[1].kendycrush}` })
      .addFields({ name: "Deck Cost", value: `${result[0].kendycrush}` })
      .setColor("Random")
      .setImage(`${result[3].kendycrush}`);
    message.channel.send({ embeds: [embed] });
  },
};
