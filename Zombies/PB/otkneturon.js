let {EmbedBuilder} = require("discord.js");
let db = require("../../index.js")
module.exports = {
    name: `otkneutron`,
    aliases: [`otkn`],
    category: `Professor Brainstorm(PB)`,
    run: async(client, message, args) => {
        let [result] = await db.query(`SELECT otkneturon FROM pbdecks`)
        let embed = new EmbedBuilder()
        .setTitle("OTK Neutron")
        .setDescription(`${result[2].otkneturon}`)
        .setFooter({text: `${result[1].otkneturon}`})
        .addFields({name: "Deck Cost", value: `${result[0].otkneturon}`})
        .setColor("Random")
        .setImage(`${result[3].otkneturon}`)
        message.channel.send({embeds: [ embed ] } )
    }
}