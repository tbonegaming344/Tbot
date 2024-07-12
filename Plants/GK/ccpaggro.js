const {EmbedBuilder} = require("discord.js");
let db = require("../../index.js")
module.exports = {
    name: `ccpaggro`,
    aliases: [`aggrogk`, `gkaggro`, `sproutaggro`, `gksproutaggro`, `aggrosprout`],
    category: `Grass Knuckles(GK)`,
    run: async(client, message,args)=> {
        let [result]= await db.query(`SELECT ccpaggro from gkdecks`)
        let cpaggro = new EmbedBuilder()
        .setTitle("CCP Aggro GK")
        .setDescription(`${result[2].ccpaggro}`)
        .setColor("Random")
        .setFooter({text: `${result[1].ccpaggro}`})
        .setImage(`${result[3].ccpaggro}`)
        .addFields({name: "Deck Cost", value:`${result[0].ccpaggro}`})
        message.channel.send({embeds: [cpaggro]})
    }
}