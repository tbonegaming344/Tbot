module.exports = {
	name: `flip`,
	aliases: [`coinflip`, `coin`, `flipacoin`],
	category: `Miscellaneous`,
	run: async(client, message, args) => {
		const flip = ["Heads", "Tails"]
		 message.channel.send(flip[Math.floor(Math.random() * flip.length)]);
	}
}