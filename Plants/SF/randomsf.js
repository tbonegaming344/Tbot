const { EmbedBuilder } = require("discord.js");
let db = require("../../index.js");
module.exports = {
  name: `randomsf`,
  aliases: [`randomdecksf`, `ramdomizeddecksf`, `deckrandomsf`, `sfrandom`],
  category: `Solar Flare(SF)`,
  run: async (client, message, args) => {
    let [result] = await db.query(
      `SELECT * from sfdecks where deckinfo = 'image link:'`
    );
    const deck = [
      //SF TBOT DB
      `${result[0].oneone}`,
      `${result[0].aggrosf}`,
      `${result[0].ejection}`,
      `${result[0].funnyflare}`,
      `${result[0].healaggrof}`,
      `${result[0].healmidflare}`,
      `${result[0].physcopineclones}`,
      `${result[0].physcosolstice}`,
      `${result[0].rampclones}`,
      `${result[0].ramp2seedling}`,
      `${result[0].solstice}`,
      //SF WEB DB
      "https://media.discordapp.net/attachments/1044626284346605588/1061667674851131484/astroburst.jpg?width=464&height=588",
      "https://media.discordapp.net/attachments/1044626284346605588/1061667675119550545/astrocado.jpg?width=543&height=588",
      "https://media.discordapp.net/attachments/1044626284346605588/1061667675572551680/envchanged.jpg?width=544&height=588",
      "https://media.discordapp.net/attachments/1044626284346605588/1061667676130381995/ic.jpg?width=539&height=588",
      "https://media.discordapp.net/attachments/1044626284346605588/1061667676365275220/midflare.jpg?width=548&height=588",
      "https://media.discordapp.net/attachments/1044626284346605588/1061667676646277151/aggroflare.jpg?width=492&height=588",
      "https://media.discordapp.net/attachments/1044626284346605588/1061667676893745162/aggroflareramp.jpg?width=521&height=588",
      "https://media.discordapp.net/attachments/1044626284346605588/1061667677132832802/aggroflarerng.jpg?width=514&height=588",
      "https://media.discordapp.net/attachments/1044626284346605588/1061667777473167470/berrytroll.jpg?width=530&height=588",
      "https://media.discordapp.net/attachments/1044626284346605588/1061667777867415702/dandy.jpg?width=535&height=588",
      "https://media.discordapp.net/attachments/1044626284346605588/1061667778353975337/midflarefry.jpg?width=549&height=588",
      "https://media.discordapp.net/attachments/1044626284346605588/1061667778857271337/midkale.jpg?width=518&height=587",
      "https://media.discordapp.net/attachments/1044626284346605588/1061667779234779176/midramp.jpg?width=527&height=587",
      "https://media.discordapp.net/attachments/1044626284346605588/1061667779574497361/astroswarm.jpg?width=632&height=588",
      "https://media.discordapp.net/attachments/1044626284346605588/1061667839683080230/physcogloomshroom.jpg?width=532&height=588",
      "https://media.discordapp.net/attachments/1044626284346605588/1061667840102514748/physcomid.jpg?width=550&height=588",
      "https://media.discordapp.net/attachments/1044626284346605588/1061667841188835378/rampberries.jpg?width=524&height=588",
      "https://media.discordapp.net/attachments/1044626284346605588/1061667842103193640/Midrng.jpg?width=548&height=588",
      "https://media.discordapp.net/attachments/1044626284346605588/1061667842346467328/otkdandy.png?width=635&height=588",
      "https://media.discordapp.net/attachments/1044626284346605588/1061667878773981364/physcosweatclones.jpg?width=542&height=588",
      "https://media.discordapp.net/attachments/1044626284346605588/1061667879122128956/plasticpeatrollerflare.jpg?width=632&height=588",
      "https://media.discordapp.net/attachments/1044626284346605588/1061667879629619381/sfhealaggro.jpg?width=538&height=588",
      "https://media.discordapp.net/attachments/1044626284346605588/1061667879956795442/sonicmaggro.jpg?width=562&height=588",
      "https://media.discordapp.net/attachments/1044626284346605588/1061667880363622410/physcosonic.jpg?width=552&height=588",
      "https://media.discordapp.net/attachments/1044626284346605588/1061667905823051949/trollerflarenext.jpg?width=569&height=588",
      "https://media.discordapp.net/attachments/1044626284346605588/1061667906364125224/Trollerflare.jpg?width=515&height=588",
    ];
    let embed = new EmbedBuilder()
      .setTitle("Random Solar Flare Deck")
      .setDescription(
        `Here is your Random Solar Flare(SF) Deck ${message.author}`
      )
      .setColor("Random")
      .setImage(deck[Math.floor(Math.random() * deck.length)]);

    message.channel.send({ embeds: [embed] });
  },
};
