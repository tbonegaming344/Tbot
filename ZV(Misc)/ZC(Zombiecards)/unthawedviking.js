const {EmbedBuilder} = require("discord.js");
module.exports = {
	name: `unthawedviking`,
	aliases: [`unthawed`, `instead`, `uv`],
	category: `Zombie Cards`,
	run: async(client, message, args) => {
			let embed = new EmbedBuilder()
      .setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/3/33/Unthawed_Viking.png/revision/latest/scale-to-width-down/250?cb=20180510073852")
			.setTitle("Unthawed Viking | <:Sneaky:1062502187781075094>")
			.setDescription("**- Pirate Zombie   -**")
			.addFields({name: "Stats", 
                  value: "4 <:Strength:1062501774612779039>, 4 <:Health:1062515540712751184>, 4 <:Brainz:1062503146745774183>"
                 },
                 {
                   name: "Trait", 
                   value: "__Amphibious__"
                 },
                 {
                   name: "Ability", 
                   value: "**When played:** <:IceCube:1008531889906253937>__Freeze__ all Plants in the Water. \n __**Pirate Evolution**__: Instead, <:IceCube:1008531889906253937>__Freeze__ all Plants. "
                 },
                 {
                   name: "Set-Rarity", 
                   value: "**Triassic - Super-Rare**"
                 },
                 {
                   name: "Flavor Text", 
                   value: `What's the best way to cross the ocean? Freeze it first. How hard could it be?`
                 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
		}
}