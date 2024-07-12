const { EmbedBuilder } = require("discord.js");
let db = require("../../index.js");
module.exports = {
  name: `blobfishwrappers`,
  aliases: [
    `midimps`,
    `mi`,
    `mimps`,
    `bfishwrappers`,
    `bwrap`,
    `bwrappers`,
    `bfw`,
    `blobfish`,
    `wrappers`,
  ],
  category: `Huge-Gigantacus/SuperBrainz`,
  run: async (client, message, args) => {
    let [result] = await db.query(`SELECT blobfishwrappers FROM hgdecks`);
    let bwrappers = new EmbedBuilder()
      .setTitle("Blobfish Wrappers")
      .setDescription(`${result[2].blobfishwrappers}`)
      .setFooter({ text: `${result[1].blobfishwrappers}` })
      .addFields({ name: "Deck Cost", value: `${result[0].blobfishwrappers}` })
      .setColor("Random")
      .setImage(`${result[3].blobfishwrappers}`);
    message.channel.send({ embeds: [bwrappers] });
  },
};
