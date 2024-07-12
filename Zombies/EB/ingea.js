const {EmbedBuilder} = require("discord.js");
let db = require("../../index.js");
module.exports = {
    name:  `ingea`,
    aliases: [`swarmfun`, `funswarm`, `igneaeb`, `ebignea`, `ignea`],
    category: `Electric Boogaloo(EB)`,
    run: async(client, message, args) => {
        let [result] = await db.query(`SELECT ignea FROM ebdecks`)
            let ignea = new EmbedBuilder()
            .setTitle("Ingea")
            .setDescription(`${result[2].ignea}`)
            .setFooter({text: `${result[1].ignea}`})
            .setImage(`${result[3].ignea}`)
            .addFields({name: "Deck Cost", value: `${result[0].ignea}`})
            .setColor("Random")
            message.channel.send({embeds: [ ignea ]})
    }           
}