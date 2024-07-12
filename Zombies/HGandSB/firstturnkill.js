let {EmbedBuilder}= require("discord.js");
let db = require("../../index.js");
module.exports = {
    name: `firstturnkill`,
    aliases: [`ftk`, `ftl`, `firstturnlethal`],
    category: `Huge-Gigantacus/SuperBrainz`,
    run: async(client, message, args) => {
        let [result] = await db.query(`SELECT ftk FROM hgdecks`);
      let ftk = new EmbedBuilder() 
        .setTitle("First Turn Kill")
        .setDescription(`${result[2].ftk}`)
        .setColor("Random")
        .setFooter({text: `${result[1].ftk}`})
        .addFields({name: "Deck Cost", value:`${result[0].ftk}`})
        .setImage(`${result[3].ftk}`)
        message.channel.send({embeds: [ftk]})
    }
}