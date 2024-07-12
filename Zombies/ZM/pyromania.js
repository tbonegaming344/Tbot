let {EmbedBuilder} = require("discord.js")
let db = require("../../index.js");
module.exports = {
    name: `pyromania`,
    aliases: [`pyro`],
    category: `Zmech(ZM)`,
    run: async(client, message, args)=> {
        let [result] = await db.query(`select pyromania from zmdecks`)
        let pyromania = new EmbedBuilder()
        .setTitle("Pyromania")
        .setDescription(`${result[2].pyromania}`)
        .setColor("Random")
        .setFooter({text: `${result[1].pyromania}`})
        .addFields({name: "Deck Cost", value: `${result[0].pyromania}`})
        .setImage(`${result[3].pyromania}`)
        message.channel.send({embeds: [pyromania]})
    }
}