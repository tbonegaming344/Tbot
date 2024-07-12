const {EmbedBuilder} = require("discord.js");
let db = require("../../index.js");
module.exports = {
	name: `budgetwkmidheal`,
	aliases: [`wkbudget`,`bwk`, `budgetwallknight`, `budgethealmidwk`, `budgetmidwk`, `budgetmidrandgewk`, `budgetmidrangewallknight`, `wkbudgethealmid`, `wkbudgetmidheal`, `budgetwk`, `budgetmidknight`],
	category: `Wall Knight(WK)`,
		run: async(client, message, args) => {
			let [result] = await db.query(`SELECT budgetwkmidheal from wkdecks`);
					let budgetwk = new EmbedBuilder()
	.setTitle("WallKnight Budget MidHeal")
	.setDescription(`${result[2].budgetwkmidheal}`)
	.setFooter({text: `${result[1].budgetwkmidheal}`})
			.addFields({name: "Deck Cost", value: `${result[0].budgetwkmidheal}`})
		.setColor("Random")
.setImage(`${result[3].budgetwkmidheal}`)
	message.channel.send({embeds: [ budgetwk ] } ) 
		}
}