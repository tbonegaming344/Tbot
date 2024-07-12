const {EmbedBuilder}= require("discord.js");
let db = require("../../index.js");
module.exports = {
    name: `budgetcyburn`,
    aliases: [`cyburnbudget`, `nccheap`, `cheapnc`],
    category: `NightCap(NC)`,
        run: async(client, message, args) => {
            let [result] = await db.query(`SELECT budgetcyburn from ncdecks`);
                let budgetcyburn = new EmbedBuilder()
                .setTitle("NC Budget Cyburn")
                .setDescription(`${result[2].budgetcyburn}`)
                .setFooter({text: `${result[1].budgetcyburn}`})
                .addFields({name: "Deck Cost", value: `${result[0].budgetcyburn}`})
                .setColor("Random")
                .setImage(`${result[3].budgetcyburn}`)
                message.channel.send({embeds: [ budgetcyburn] } )
        }
    }