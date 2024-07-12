const {
  EmbedBuilder, 
  ActionRowBuilder,
  StringSelectMenuBuilder,
	ComponentType, ChannelType
} = require("discord.js")


module.exports = {
    name: "dmhelp",
    description: "Help command",
    aliases: ["helpdm", "Helpdmed", "decksdm", "decklistsdm", `helpdms`],
    category: "Zombie Cards",
 run: async (client, message, args) => {
			const { default: ms } = await import("pretty-ms")
        let commands = Array.from(client.commands.values())
        let categories = commands.reduce((acc, command) => {
            if (!acc[command.category]) {
                acc[command.category] = [];
            }
            acc[command.category].push(command);
            return acc;
        }, {});
        //console.log(slashCommandscat)
        //let testing = Arr
        //console.log(categories);
        let embed = new EmbedBuilder()
            .setColor("Random")
            .setTitle("Select category")
            .setDescription(
                'Please select a category from the select menu given below to view the commands. \n prefix is <@1043528908148052089>'
            )
        let cat = Object.keys(categories).map(category => {
            if (!category) category = `Default`;
            return {
                label: category,
                value: 'help_' + category,
            }
        })

      let menu = new ActionRowBuilder().addComponents(
           new StringSelectMenuBuilder()
                .setCustomId("help_" + message.author.id)
                .setPlaceholder(
                    "Nothing selected"
                )
                .setOptions(cat)
        )

        try {
        
            let msg = await message.reply({
                embeds: [embed],
                components: [menu],
            })
					const iFilter = i => i.user.id === message.author.id
            let collector = msg.createMessageComponentCollector({
               componentType: ComponentType.SelectMenu, filter: iFilter,
            })
            collector.on('collect', async m  => {
							if(m.customId == "help_" + message.author.id){
                
             //   console.log(client.slashcommands.values())

                let category = m.values[0].split("_")[1];
                let Ccommands = Array.from(client.commands.values())
                let commands = Ccommands.filter((command) => {
                    return command.category === category;
                })
               let embed = new EmbedBuilder()
                    .setColor("Random")
                    .setTitle("Help | " + category)

                let toBuildString = "";
                for (let i = 0; i < commands.length; i++) {
                    let command = commands[i];
                 //   console.log(commands[i])
                    toBuildString += `**${command.name}** \n`;
                }
                embed.setDescription(toBuildString)
                await m.deferUpdate()
                await m.message.edit({
                    embeds: [embed],
                })
							}
							else{
                    return m.update({
                        content: "You are not the owner of this help menu.",
                        ephemeral: true,
                    })
							}
            });
        } catch (e) {
            return console.log(e);
        } 


    }
} 