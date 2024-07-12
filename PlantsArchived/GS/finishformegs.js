const Discord = require("discord.js");
const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `finishformeGS`, 
	aliases: [`gsfinish`, `GSfinish`, `finishgs`, `finishGS`, `finishformegs`, `gsfinishforme`, `GSfinishforme`, `ffmgs`], 
	category: `Green Shadow(GS)`,
	run: async(client, message, args) => {
		const gs = ["https://media.discordapp.net/attachments/1044626284346605588/1055887618279223306/Screenshot_20221223-122416_PvZ_Heroes.jpg?width=608&height=604", "https://media.discordapp.net/attachments/1044626284346605588/1055698378090094632/IMG_9939.png?width=588&height=604", "https://media.discordapp.net/attachments/1044626284346605588/1055698378396287046/IMG_9938.png?width=530&height=604", "https://media.discordapp.net/attachments/1044626284346605588/1055698378656329728/IMG_9937.png?width=559&height=604", "https://media.discordapp.net/attachments/1044626284346605588/1055698378861846659/IMG_9936.png?width=534&height=604", "https://media.discordapp.net/attachments/1044626284346605588/1055698379147067472/IMG_9934.png?width=551&height=604", "https://media.discordapp.net/attachments/1044626284346605588/1055698379482607706/IMG_9933.png?width=537&height=604", "https://media.discordapp.net/attachments/1044626284346605588/1055698379709095966/IMG_9932.png?width=564&height=604", "https://media.discordapp.net/attachments/1044626284346605588/1055698379935596544/IMG_9931.png?width=584&height=604", "https://media.discordapp.net/attachments/1044626284346605588/1055698380191445013/IMG_9930.png?width=548&height=604", "https://media.discordapp.net/attachments/1044626284346605588/1055698380631842816/IMG_9929.png?width=570&height=604", "https://media.discordapp.net/attachments/1044626284346605588/1055698400693198878/IMG_9928.png?width=569&height=604", "https://media.discordapp.net/attachments/1044626284346605588/1055698401041330216/IMG_9927.png?width=540&height=604", "https://media.discordapp.net/attachments/1044626284346605588/1055698401322344538/IMG_9926.png?width=563&height=604", "https://media.discordapp.net/attachments/1044626284346605588/1055698401674678352/IMG_9924.png?width=544&height=604", "https://media.discordapp.net/attachments/1044626284346605588/1055698402110877706/IMG_9923.png?width=559&height=604", "https://media.discordapp.net/attachments/1044626284346605588/1055698402459000862/IMG_9922.png?width=580&height=604", "https://media.discordapp.net/attachments/1044626284346605588/1055698403050410004/IMG_9921.png?width=566&height=604", "https://media.discordapp.net/attachments/1044626284346605588/1055698403348197426/IMG_9919.png?width=548&height=604"]
			let embed = new EmbedBuilder()
	.setTitle("Green Shadow(GS) Finish for me deck")
	.setDescription("Your Green Shadow(GS) finish for me deck")
		.setColor("Random")
.setImage(gs[Math.floor(Math.random() * gs.length)])
	
	message.channel.send({embeds: [ embed ] } ) 
	}
}