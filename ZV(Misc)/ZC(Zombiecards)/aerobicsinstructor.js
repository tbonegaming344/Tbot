const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `aerobicsinstructor`,
	aliases: [`aerobics`, `richardsimmons`, `ai`],
	category: `Zombie Cards`,
	run: async(client, message, args) => {
		let embed = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/1/1c/Aerobics_InstructorH.png/revision/latest?cb=20171223132003")
			.setTitle("Aerobics Instructor | <:Crazy:1062502046474973224>")
			.setDescription("**- Dancing Zombie  -**")
			.addFields({name: "Stats", value: "2 <:Strength:1062501774612779039>, 3 <:Health:1062515540712751184>, 2 <:Brainz:1062503146745774183>"},
								 {
									name: "Ability",  value: "**Start of Turn**: All Dancing Zombies get +2<:Strength:1062501774612779039>. " 
								 },
								 {
									name: "Set-Rarity", value: "**Premium - Super-Rare**"
								 }, 
								 {
									name: "Flavor Text", value: `Aerobics really bring the dead to life.`
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
	}
}