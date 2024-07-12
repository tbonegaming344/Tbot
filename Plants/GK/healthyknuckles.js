const {EmbedBuilder} = require("discord.js");
let db = require("../../index.js")
module.exports = {
    name: `healthyknuckles`,
    aliases: [`hk`],
    category: `Grass Knuckles(GK)`,
    run: async(client,message, args)=> {
        let [result]= await db.query(`SELECT healthyknuckles from gkdecks`)
        let hknuckles = new EmbedBuilder()
        .setTitle("Healthy Knuckles")
        .setDescription(`${result[2].healthyknuckles}`)
        .setFooter({text: `${result[1].healthyknuckles}`})
        .setColor("Random")
        .addFields({name: "Deck Cost", value:`${result[0].healthyknuckles}`})
        .setImage(`${result[3].healthyknuckles}`)
        message.channel.send({embeds: [hknuckles]})
    }
}