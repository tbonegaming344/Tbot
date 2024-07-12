const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `rustache`,
	aliases: [`rbstache`, `rs`],
	category: `Rustbolt(RB)`,
	run: async(client, message, args) =>	{
	let embed = new EmbedBuilder()
	.setTitle("Rustache")
	.setDescription("Rustache plays out as a value-oriented deck which intends to stay one step ahead of your opponent’s tempo through mana-cheating board progression with Teacher & Waxer to help discount your resources. Duckstache, Fossilhead, & Warlord all follow the approach of increasing board prevalence by upscaling your minions into becoming active threats that provide additional incentives like conjures or the inability to be affected by opposing tricks that makes ignoring them even more troublesome for your opponent to handle. Your primary win condition is to overwhelm in the first few turns with growing your entire board all at once, or by exhausting heavily into a singular minion which can threaten lethal damage. ")
	.setFooter({text: "Created By Knabbs"})
			.addFields({name: "Deck Cost", value: "Cost: 52,500 Sparks <:spar:1057791557387956274>"})
		.setColor("Random")
.setImage("https://media.discordapp.net/attachments/923709467751772210/1122624584802381967/IMG_6169.png?width=640&height=625")
	
	message.channel.send({embeds: [ embed ] } )
	}
}