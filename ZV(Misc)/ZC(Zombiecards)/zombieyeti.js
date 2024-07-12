const { ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder } = require('discord.js');
module.exports = {
	name: `zombieyeti`,
	aliases: [`zy`, `Zombieyeti`, `yeti`, `boomeryeti`,],
	category: `Zombie Cards`,
	run: async(client, message, args) => {
		const row = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('lunch')
                    .setLabel('Lunchbox')
                    .setStyle(ButtonStyle.Primary )
										.setEmoji('<:lunchbox:1089227004450181240>')
            );
		let embed = new EmbedBuilder()
      .setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/3/3c/Full_HD_Zombie_Yeti.png/revision/latest/scale-to-width-down/1200?cb=20220910010512")
			.setTitle("Zombie Yeti | <:Beastly:1062500894744264714>")
			.setDescription("**- Pet Monster Zombie  -**")
			.addFields({name: "Stats", 
                  value: "3 <:Strength:1062501774612779039>, 3 <:Health:1062515540712751184>, 3 <:Brainz:1062503146745774183>"
                 },
                 {
                   name: "Ability", 
                   value: "**When played**: Gain a Yeti Lunchbox. \n **End of turn**: __Bounce__ this Yeti."
                 },
                 {
                   name: "Set-Rarity", 
                   value: "**Premium - Super-Rare**"
                 },
                 {
                   name: "Flavor Text", 
                   value: "Enjoys warm hugs."
                 })
		.setColor("Random")			
	
		let lunch = new EmbedBuilder()
      .setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/e/e5/Yeti%27s_Lunchbox_PvZH.png/revision/latest/scale-to-width-down/250?cb=20170830134119")
			.setTitle("Yeti Lunchbox | <:Beastly:1062500894744264714>")
			.setDescription("**- Gourmet Pet Trick  -**")
			.addFields({name: "Stats", 
                  value: "1 <:Brainz:1062503146745774183>"
                 },
                 {
                   name: "Ability", 
                   value: "A Zombie gets +1<:Strength:1062501774612779039>/+1<:Health:1062515540712751184>."
                 },
                 {
                   name: "Set-Rarity", 
                   value: "**Premium - Uncommon**"
                 },
                 {
                   name: "Flavor Text", 
                   value: `What's inside? A peanut butter and brains sandwich... with the crusts cut off.`
                 })
		.setColor("Random")			
	
	const m = await	message.channel.send({embeds: [ embed ], components: [row] } )
			const collector = m.createMessageComponentCollector()
		collector.on('collect', async i  => {
			if (i.customId == 'lunch')  {
				await i.reply({embeds: [lunch], ephemeral: true } )
			}
		})
	}
}