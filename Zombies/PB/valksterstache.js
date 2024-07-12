const {EmbedBuilder} = require("discord.js");
let db = require("../../index.js");
module.exports = {
    name: `valksterstache`,
    aliases: [`vss`, `valkstache`, `valktrickstache` ],
    category: `Professor Brainstorm(PB)`,
    run: async(client, message, args) => {
        let [result] = await db.query(`select valksterstache from pbdecks`)
        let valkstache = new EmbedBuilder()
        .setTitle("Valksterstache")
        .setDescription(`${result[2].valksterstache}`)
        .setFooter({text: `${result[1].valksterstache}`})
        .addFields({name: "Deck Cost", value:`${result[0].valksterstache}`})
        .setColor("Random")
        .setImage(`${result[3].valksterstache}`)
        message.channel.send({embeds: [ valkstache ] })
    }
}