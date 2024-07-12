const {EmbedBuilder} = require("discord.js");
let db = require("../../index.js")
module.exports = {
    name: `floss`,
    aliases: [`fishladyofsomesize`],
    category: `Neptuna(NT)`,
    run: async(client, message, args)=> {
        let [result] = await db.query(`select floss from ntdecks`)
        let floss = new EmbedBuilder()
        .setTitle(`Floss`)
        .setDescription(`${result[2].floss}`)
        .setColor('Random')
        .addFields({name: 'Deck Cost:', value: `${result[0].floss}`})
        .setFooter({text: `${result[1].floss}`})
        .setImage(`${result[3].floss}`)
        message.channel.send({embeds: [floss]})
    }
}