const { EmbedBuilder } = require("discord.js");
let db = require("../../index.js");
module.exports = {
  name: `trickmech`,
  aliases: [`trickzmech`, `trm`],
  category: `Zmech(ZM)`,
  run: async (client, message, args) => {
    let [result] = await db.query(`SELECT trickmech FROM zmdecks`);
    let embed = new EmbedBuilder()
      .setTitle("Trick Mech")
      .setDescription(`${result[2].trickmech}`)
      .setFooter({ text: `${result[1].trickmech}` })
      .addFields({ name: "Deck Cost", value: `${result[0].trickmech}` })
      .setColor("Random")
      .setImage(`${result[3].trickmech}`);
    message.channel.send({ embeds: [embed] });
  },
};
