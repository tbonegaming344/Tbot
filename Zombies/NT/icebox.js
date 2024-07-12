const {EmbedBuilder} = require("discord.js");
let db = require("../../index.js")
module.exports = {
    name: `icebox`,
    aliases: [`boxofice`, `boxice`, `icemid`, `midice`, `midbox`, `boxmid`],
    category: `Neptuna(NT)`,
    run: async(client, message, args)=> {
        let [result] = await db.query(`select icebox from ntdecks`)
        let iceBox = new EmbedBuilder()
        .setTitle("IceBox")
        .setDescription(`${result[2].icebox}`)
        .setFooter({text: `${result[1].icebox}`})
        .setColor("Random")
        .addFields({name: "Deck Cost", value: `${result[0].icebox}`})
        .setImage(`${result[3].icebox}`)
        message.channel.send({embeds: [iceBox]})
    }
}