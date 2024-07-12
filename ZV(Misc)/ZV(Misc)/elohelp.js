const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `elohelp`,
	aliases: [`helpelo`, `elocommands`, `commandselo`,],
	category: `Miscellaneous`,
		run: async(client, message, args) => {
		let embed = new EmbedBuilder()
		.setTitle("Help Elo")
		.setDescription("My Elo commands are \n <@1043528908148052089> elo \n Returns user score <@1043528908148052089> elo @user \n **Must ping someone like the example above to check players elo scores** \n <@1043528908148052089> eloequation \n shows the equation used for elo \n <@1043528908148052089> eloreport \n reports elo games <@1043528908148052089> eloreport @user score @user \n example <@1043528908148052089> eloreport @user 3-2 @user \n **Opponent must react in order to get points** \n make sure you got points afterwards if not we could always try rereporting \n <@1043528908148052089> eloreset \n resets the elo leaderboard reverting everyone back to 1000 points which is now the minium points balance. \n  **Only works for tbone** \n **Current plan is to do this every 3 months** \n <@1043528908148052089> leaderboard \n shows the elo leaderboard in order to get on there you must play elo in order to be registered into the database. \n **Top 10 players on leaderboard** \n <@1043528908148052089> remove \n removes users points \n **This command only works for tbone**")
		.setColor("Random")

	message.channel.send({embeds: [ embed ] } )
	}
}