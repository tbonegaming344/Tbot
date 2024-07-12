const { EmbedBuilder } = require("discord.js");
let db = require("../../index.js");
module.exports = {
  name: `professorpackage`,
  aliases: [`pbpackage`, `packagepb`, `packagebrainstorm`, `packpb`, `pbpack`],
  category: `Professor Brainstorm(PB)`,
  run: async (client, message, args) => {
    let [result] = await db.query(`SELECT professorpackage FROM pbdecks`);
    let embed = new EmbedBuilder()
      .setTitle("Professor Package")
      .setDescription(`${result[2].professorpackage}`)
      .setFooter({ text: `${result[1].professorpackage}` })
      .setColor("Random")
      .setImage(`${result[3].professorpackage}`)
      .addFields({ name: "Deck Cost", value: `${result[0].professorpackage}` });
    message.channel.send({ embeds: [embed] });
  },
};
