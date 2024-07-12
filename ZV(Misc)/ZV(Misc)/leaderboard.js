module.exports = {
  name: "leaderboard",
	aliases: [`lb`, `elolb`, `eloleaderboard`],
	category: `Miscellaneous`,
  run: async (client, message, args) => {
    let db = new (require("quick.db")).QuickDB();
    db.all().then(async items => {
      items = items.filter(a => a.id.startsWith("points"))
      let sortd = items.sort((e, b) => b.value - e.value);
      let amogus = "";
      sortd.slice(0, 10);
      sortd.forEach(async (m, i) => {
        if(i < 10) amogus += `${`<@${m.id.split("_")[1]}`}> with ${m.value}\n`;
      });
      message.channel.send({embeds: [{description: `${amogus != "" ? amogus : "No players on leaderboard Elo has been reset."}`}]});
      
    })
  }
} 