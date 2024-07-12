const { EmbedBuilder } = require("discord.js");
let db = require("../../index.js");
module.exports = {
  name: `pepegasmash`,
  aliases: [`smashpepega`, `pepega`, `ps`],
  category: `Smash(SM)`,
  run: async (client, message, args) => {
    let [result] = await db.query(`SELECT pepegasmash FROM smdecks`);
    let embed = new EmbedBuilder()
      .setTitle("Pepega Smash")
      .setDescription(`${result[2].pepegasmash}`)
      .setFooter({ text: `${result[1].pepegasmash}` })
      .addFields({ name: "Deck Cost", value: `${result[0].pepegasmash}` })
      .setColor("Random")
      .setImage(`${result[3].pepegasmash}`);
    message.channel.send({ embeds: [embed] });
  },
};
