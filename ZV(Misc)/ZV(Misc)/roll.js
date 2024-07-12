module.exports = {
	name: `roll`, 
	aliases: [`diceroll`, `rolldice`, `dice`],
	category: `Miscellaneous`,
	run: async(client, message, args) => {
		const roll = ["You rolled a 1", "You rolled a 2", "You rolled a 3", "You rolled a 4", "You rolled a 5", "you rolled a 6"]
		message.channel.send(roll[Math.floor(Math.random() * roll.length)]);
	}
}