const {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
} = require("discord.js");
module.exports = {
  name: `adddeck`,
  aliases: [
    `deckadd`,
    `deckaddition`,
    `canyouaddmydeck`,
    `addmydecktothebot`,
    `deckadditionsforthebot`,
    `deckaddrequirements`,
    `adddecks`,
	  `submit`,
	  `submitdeck`,
	  `submitdecks`,
    `addeck`,
    `addecks`,
  ],
  category: `Miscellaneous`,
  run: async (client, message, args) => {
    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setLabel("Discord server")
        .setStyle(ButtonStyle.Link)
        .setURL("https://discord.gg/2NSwt96vmS")
        .setEmoji("<:pumpkingswabbie:1157764192649105540>")
    );
    const suggestnew = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setLabel("Suggest New Deck")
        .setStyle(ButtonStyle.Primary)
        .setCustomId("suggestnew")
        .setEmoji("🆕")
    );
    const suggestup = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setLabel("Suggest Updated Deck")
        .setStyle(ButtonStyle.Primary)
        .setCustomId("suggestup")
        .setEmoji("🔄")
    );
    const vids = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setLabel("Tbot Suggestions playlist")
        .setStyle(ButtonStyle.Link)
        .setURL(
          "https://www.youtube.com/playlist?list=PLb1Bl8XSFJ_W2MihyL9FyExH2ZKK-W9H6"
        )
        .setEmoji("🎥")
    );
    let deck = new EmbedBuilder()
      .setTitle("Deck Additions for tbot")
      .addFields(
        {
          name: "Deck Guidelines/Requirements before sumbitting",
          value: `1. Deck must be decent, have a gameplan or at least a theme, no random 1x, cards that don’t fit. 
2. Deck must not be hacked can't run cards not included in hero and can't run more than 4 copies of a card. Do not sumbit pvzh decks made in modded versions of the game. Tbot is solely for pvzh decks only not for pvzh mods like syndrome and others.
3. Deck is unique with a meaningful difference from ones currently posted, for example: don’t make another Valkster 
4. You may still submit and replace a similar deck if you think yours is significantly better with your argument of why it's better. 
5. The goal of Tbot decks is to compile relatively optimized versions of decks of all types.`,
        },
        {
          name: "Format For Deck Suggestions",
          value: `1. Deck name - Put your decks name 
2. Deck Hero - **Make sure you have the hero typed the same way as showen in the image attached below**
3. Deck Description - describe your deck and how it works. **We do not want or need long descriptions** just a few sentences should suffice. 
include aliases(extra names/commands for the deck) if needed(not required), and **Dont Forget to Include the Deck Cost in the description also!**
4. Deck creator - Just put the creators name **dont put created by**
5. deck image - must contain an image link (**.jpg, .jpeg, .webp or .png must be in the link**) 
6. Fill out the fourm below and join the discord server for information on suggestion and to defend your suggestion`,
        },
        {
          name: "Deck Updates Format",
          value: `1. Deck name - Put the deck name to be updated
2. Deck Hero - **Make sure you have the hero typed the same way as showen in the image attached below**
3. Updated Deck Description -  Include an updated description if the current one on Tbot no longer works and **Dont Forget to Include the Deck Cost in the description** also (Put N/A if no changes are needed to the description)
**If you are replacing a Deck Include Reasoning here in your description**
4. deck image - must contain an image link (**.jpg, .jpeg, .webp or .png must be in the link**)`,
        },
        {
          name: "Other",
          value: `If you get an error while attemping to submit your suggestion, please contact <@625172218120372225> with an image of what was typed in the fourm
There is also a link attached onto one of the buttons if you need help`,
        }
      )
      .setFooter({
        text: `Please Read Guidlines and Format before Suggesting! 
Afterwards interact with the buttons below to suggest a deck or to suggest a deck update`,
      })
      .setColor("Random")
      .setImage(
        "https://media.discordapp.net/attachments/1152624944262414436/1237412377427968142/image.png?ex=663b8d94&is=663a3c14&hm=a4acee0e703c00ad5654019a1a102f25b5d5141150bd67a753dd35664881ce4b&=&format=webp&quality=lossless"
      );
    const m = await message.channel.send({
      embeds: [deck],
      components: [row, suggestnew, suggestup, vids],
    });
  },
};
