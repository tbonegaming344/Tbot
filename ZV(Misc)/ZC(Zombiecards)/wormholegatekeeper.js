const {EmbedBuilder} = require("discord.js");
module.exports = {
	name: `wormholegatekeeper`,
	aliases: [`wormhole`, `gatekeeper`, `wgk`],
	category: `Zombie Cards`,
	run: async(client, message, args) => {
			let embed = new EmbedBuilder()
      .setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/3/3c/Wormhole_Gatekeeper.png/revision/latest/scale-to-width-down/250?cb=20161019181010")
			.setTitle("Wormhole Gatekeeper | <:Brainy:1062500939908530246>")
			.setDescription("**- History Science Zombie  -**")
			.addFields({name: "Stats", 
                  value: "2 <:Bullseye:1062501003313819678>, 5 <:Health:1062515540712751184>, 3 <:Brainz:1062503146745774183>"
                 },
                 {
                   name: "Trait", 
                   value: "<:Bullseye:1062501003313819678>__Bullseye__"
                 },
                 {
                   name: "Ability", 
                   value: "Each player draws an extra card each turn."
                 },
                 {
                   name: "Set-Rarity", 
                   value: "**Galactic - Super-Rare**"
                 },
                 {
                   name: "Flavor Text", 
                   value: `"Stand here and guard this gate with your unlife," she was told. And that's what she's been doing ever since.`
                 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
		}
}