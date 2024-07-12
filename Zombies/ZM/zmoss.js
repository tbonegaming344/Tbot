let {EmbedBuilder} = require("discord.js");
let db = require("../../index.js");
module.exports = {
    name: `zmoss`,
    aliases: [`stompamech`, `zmechofsomesize`, `nonbinary`],
    category: `Zmech(ZM)`,
    run: async(client, message, args) => {
        let [result] = await db.query(`SELECT zmoss FROM zmdecks`);
        let zmoss = new EmbedBuilder()
        .setTitle("Z-Moss")
        .setDescription(`${result[2].zmoss}`)
        .setColor("Random")
        .setFooter({text: `${result[1].zmoss}`})
        .addFields({name: "Deck Cost", value:`${result[0].zmoss}`})
        .setImage(`${result[3].zmoss}`)
        message.channel.send({embeds: [zmoss]})
    }
}