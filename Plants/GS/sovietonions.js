const {EmbedBuilder}= require("discord.js");
let db = require("../../index.js");
module.exports = {
    name: `sovietonion`,
    aliases: [`tso`, `thesovietonion`],
    category: `Green Shadow(GS)`,
    run: async(client, message, args)=> {
        let [result] = await db.query(`SELECT sovietonion from gsdecks`);
        let tsunion = new EmbedBuilder()
        .setTitle("The Soviet Onion")
        .setDescription(`${result[2].sovietonion}`)
        .setFooter({text: `${result[1].sovietonion}`})
        .addFields({name: "Deck Cost", value: `${result[0].sovietonion}`})
        .setColor("Random")
        .setImage(`${result[3].sovietonion}`)
        message.channel.send({embeds: [tsunion]})
    }
}