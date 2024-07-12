const {
  ActionRowBuilder,
  EmbedBuilder,
  InteractionType,
  ModalBuilder,
  TextInputBuilder,
  ButtonBuilder,
  ButtonStyle,
  TextInputStyle,
} = require("discord.js");
const { ascii, hangmanGuesses } = require("../Utilities/hangman");
var FuzzySearch = require("fuzzy-search");
const discord = new ActionRowBuilder().addComponents(
  new ButtonBuilder()
    .setLabel("Discord server")
    .setStyle(ButtonStyle.Link)
    .setURL("https://discord.gg/2NSwt96vmS")
    .setEmoji("<:pumpkingswabbie:1157764192649105540>")
);
module.exports = {
  name: "interactionCreate",
  async run(interaction) {
    let client = interaction.client;
    if (interaction.type === InteractionType.ModalSubmit) {
      if (interaction.customId === "dSugg") {
        await interaction.deferUpdate();

        const dName = interaction.fields.getTextInputValue("deckName");
        const dHero = interaction.fields.getTextInputValue("deckHero");
        const dDesc = interaction.fields.getTextInputValue("deckDesc");
        const dCred = interaction.fields.getTextInputValue("deckCred");
        const dLink = interaction.fields.getTextInputValue("deckLink");
        if (
          dLink.includes(".png") ||
          dLink.includes(".jpg") ||
          dLink.includes(".webp") ||
          dLink.includes(".jpeg")
        ) {
          try {
            const dSuggestion = new EmbedBuilder()
              .setTitle(dName)
              .setDescription(dDesc)
              .setImage(dLink)
              .setFooter({
                text: `Created by ${dCred} & Suggested by ${interaction.user.tag}`,
              });
            const forum = interaction.client.channels.cache.get(
              "1100160031128830104"
            );
            console.log(forum.availableTags);
            const test = forum.availableTags.find(({ name }) => name === dHero);
            // Create a new forum post
            const tester = await forum.threads.create({
              name: dName,
              message: {
                embeds: [dSuggestion],
              },
              reason: "New Deck Suggestion",
              appliedTags: [test.id],
            });

            tester.messages.react(tester.id, "<:upvote:1081953853903220876>");
            tester.messages.react(tester.id, "<:downvote:1081953860534403102>");
            await interaction.followUp({
              content:
                "Your suggestion has been sent!, Please joined the discord linked below to defend and check in on your suggestion",
              components: [discord],
              ephemeral: true,
            });
          } catch (err) {
            await interaction.followUp({
              content:
                "Oops, something went wrong.\nUnable to send suggestion.\n Please contact tbone for help! (PS: Please provide image of what was typed in the fourm)",
              ephemeral: true,
            });
            console.log(err);
          }
        } else {
          await interaction.followUp({
            content:
              "Oops, something went wrong.\nUnable to send suggestion \n incorrect image link please contact tbone for help! \n (PS: the correct link should contain .png, .jpg, .jpeg, or .webp)",
            ephemeral: true,
          });
        }
      }
      if (interaction.customId === "dUps") {
        await interaction.deferUpdate();

        const uName = interaction.fields.getTextInputValue("upName");
        const uHero = interaction.fields.getTextInputValue("upHero");
        const uDesc = interaction.fields.getTextInputValue("upDesc");
        const uLink = interaction.fields.getTextInputValue("upLink");
        const uCreds = interaction.fields.getTextInputValue("upCredits");
        if (
          uLink.includes(".png") ||
          uLink.includes(".jpg") ||
          uLink.includes(".webp") ||
          uLink.includes(".jpeg")
        ) {
          try {
            const uSuggestion = new EmbedBuilder()
              .setTitle(uName)
              .setDescription(uDesc)
              .setImage(uLink)
              .setFooter({
                text: `Created By ${uCreds} & Suggested by ${interaction.user.tag}`,
              });
            const forum = interaction.client.channels.cache.get(
              "1100160031128830104"
            );
            console.log(forum.availableTags);
            const testing = forum.availableTags.find(
              ({ name }) => name === uHero
            );
            // Create a new forum post
            const jerry = await forum.threads.create({
              name: `${uName} needs an update`,
              message: {
                embeds: [uSuggestion],
              },
              reason: "New Deck Update",
              appliedTags: [testing.id],
            });

            jerry.messages.react(jerry.id, "<:upvote:1081953853903220876");
            jerry.messages.react(jerry.id, "<:downvote:1081953860534403102>");
            await interaction.followUp({
              content:
                "Your suggestion has been sent!, Please joined the discord linked below to defend and check in on your suggestion",
              components: [discord],
              ephemeral: true,
            });
          } catch (err) {
            await interaction.followUp({
              content:
                "Oops, something went wrong.\nUnable to send suggestion.\n Please contact tbone for help! (PS: Please provide image of what was typed in the fourm)",
              ephemeral: true,
            });
            console.log(err);
          }
        } else {
          await interaction.followUp({
            content:
              "Oops, something went wrong.\nUnable to send suggestion \n incorrect image link please contact tbone for help! \n (PS: the correct link should contain .png, .jpg, .jpeg, or .webp)",
            ephemeral: true,
          });
        }
      }
      if (interaction.customId === "bug-report-modal") {
        await interaction.deferUpdate();

        const input = interaction.fields.getTextInputValue("bug-report-input");

        const owner = await interaction.client.users.fetch(
          "625172218120372225"
        );

        const embed = new EmbedBuilder()
          .setTitle("Bug Report")
          .setColor("Random")
          .setAuthor({
            name: interaction.user.tag,
            iconURL: interaction.user.avatarURL({
              dynamic: true,
            }),
          })
          .setDescription(input);

        try {
          await owner.send({ embeds: [embed] });
        } catch (e) {
          await interaction.followUp({
            content: "Oops, something went wrong.\nUnable to send bug report",
            ephemeral: true,
          });
        }

        await interaction.followUp({
          content: "Successfully sent the report!",
          ephemeral: true,
        });
      }
      //Deck Search
      if (interaction.customId === "Deck-search-modal") {
        await interaction.deferUpdate();
        const reason =
          interaction.fields.getTextInputValue("deck-search-input");
        let Ccommands = Array.from(client.commands.values());
        let commands = Ccommands.filter((command) => {
          if (
            command.category != "Miscellaneous" &&
            command.category != "DeckBuilders" &&
            command.category != "Zombie Cards" &&
            command.category != "Tricks Phase" &&
            command.category != "Plant Cards" &&
            !command.name.includes("help") &&
            !command.name.includes("wheel") &&
            !command.name.includes("random")
          ) {
            return command.name;
          }
        });
        let decks = [];
        for (let i = 0; i < commands.length; i++) {
          let command = commands[i];
          decks.push(command.name);
        }
        decks.sort();
        const searcher = new FuzzySearch(decks, {
          caseSensitive: false,
        });
        const result = searcher.search(reason);
        try {
          let toBuildString = "";
          for (let i = 0; i < result.length; i++) {
            let command = result[i];
            toBuildString += `\n<@1043528908148052089> **${command}**`;
          }
          let embed = new EmbedBuilder()
            .setTitle(`you searched for ${reason} decks`)
            .setDescription(
              `Your search for ${reason} decks came back with ${toBuildString}
              Note: There are ${result.length} total results for ${reason} in Tbot`
            )
            .setColor("Random");
          if (!toBuildString) {
            embed.setDescription(
              `Your search for ${reason} decks came back blank`
            );
          }
          return interaction.followUp({ embeds: [embed], ephemeral: true });
        } catch (err) {
          const errEmbed = new EmbedBuilder()
            .setTitle("❌ | Error")
            .setColor("Red")
            .setDescription(`Too many search results, please be more specific
              Note: There are ${result.length} total results for ${reason} in Tbot`);
          return interaction.followUp({ embeds: [errEmbed], ephemeral: true });
        }
      }
      //Card Search
      if (interaction.customId === "Card-search-modal") {
        await interaction.deferUpdate();
        let Ccommands = Array.from(client.commands.values());
        let commands = Ccommands.filter((command) => {
          if (
            command.category == "Zombie Cards" ||
            command.category == "Tricks Phase" ||
            command.category == "Plant Cards"
          ) {
            return command.name;
          }
        });
        let words = [];
        for (let i = 0; i < commands.length; i++) {
          let command = commands[i];
          words.push(command.name);
        }
        words.sort();
        const searcher = new FuzzySearch(words, {
          caseSensitive: false,
        });
        let reason = await interaction.fields.getTextInputValue(
          "card-search-input"
        );
        const result = searcher.search(reason);
        let toBuildString = "";
        for (let i = 0; i < result.length; i++) {
          let command = result[i];
          //   console.log(commands[i])
          toBuildString += `\n<@1043528908148052089> **${command}**`;
        }
        try {
          let embed = new EmbedBuilder()
            .setTitle(`you searched for ${reason} cards`)
            .setDescription(
              `Your search for ${reason} cards came back with ${toBuildString}`
            )
            .setColor("Random");

          if (!toBuildString) {
            embed.setDescription(
              `Your search for ${reason} cards came back blank`
            );
          }
          return interaction.followUp({ embeds: [embed], ephemeral: true });
        } catch (e) {
          const errEmbed = new EmbedBuilder()
            .setTitle("❌ | Error")
            .setColor("Red")
            .setDescription(`Too many search results, please be more specific`);
          return interaction.followUp({ embeds: [errEmbed], ephemeral: true });
        }
      }
      //8 Ball
      if (interaction.customId === "8ball-modal") {
        await interaction.deferUpdate();
        const ball = [
          "It is certain",
          "Without a doubt",
          "You may rely on it",
          "Yes definitely",
          "It is decidedly so",
          "As I see it, yes",
          "Most likely",
          "Yes",
          "Outlook good",
          "Signs point to yes",
          "Better not tell you now",
          "Ask again later",
          "Cannot predict now",
          "Don't count on it",
          "Outlook not so good",
          "My sources say no",
          "Very doubtful",
          "no",
          "maybe",
          "never",
        ];
        let reason = await interaction.fields.getTextInputValue("8ball-input");
        let embed = new EmbedBuilder()
          .setTitle(`:8ball: ${reason}`)
          .setDescription(
            `:8ball: says  ${ball[Math.floor(Math.random() * ball.length)]}`
          )
          .setColor("Random");

        return interaction.followUp({ embeds: [embed], ephemeral: true });
      }
      //wheel modal
      if (interaction.customId === "wheel-modal") {
        await interaction.deferUpdate();
        let hero = await interaction.fields.getTextInputValue("wheel-input");
        let number = await interaction.fields.getTextInputValue("number-input");
        if (number < 1 || number > 40) {
          return interaction.followUp({
            content: "Please input a number between 1-40",
            ephemeral: true,
          });
        }
        if(isNaN(number)) {
          return interaction.followUp({content: "please input a number", ephemeral: true})
        }
        if (
          hero == "betacarrotina" ||
          hero == "bc" ||
          hero == "beta" ||
          hero == "carrotina" ||
          hero == "carrot" ||
          hero == "beta carrotina"
        ) {
          const wordsArray = [
            //Guardian
            "Small-Nut",
            "Sting Bean",
            "Wall-Nut",
            "Pismashio",
            "Spineapple",
            "Potato Mine",
            "Cactus",
            "Gardening Gloves",
            "Sea-Shroom",
            "Water Chestnut",
            "Pea-Nut",
            "Steel Magnolia",
            "Photosynthesizer",
            "Spikeweed Sector",
            "Plantern",
            "Grape Responsibility",
            "Primal Potato Mine",
            "Grizzly Pear",
            "Grave Buster",
            "Hibernating Beary",
            "Prickly Pear",
            "Smackadamia",
            "Tough Beets",
            "Cosmic Nut",
            "Starch-Lord",
            "Blockbuster",
            "Pumpkin Shell",
            "Jugger-Nut",
            "Mirror-Nut",
            "Guacodile",
            "Doom-Shroom",
            "Galacta-Cactus",
            "Force Field",
            "Gravitree",
            "Three-Nut",
            "Marine Bean",
            "Primal Wall-Nut",
            "Poppin' Poppies",
            "Soul Patch",
            "Wall-Nut Bowling",
            "Body-Gourd",
            "Pecanolith",
            "Tricarrotops",
            "Loco Coco",
            "Forget-Me-Nuts",
            "Garlic",
            "Corn Dog",
            "Hot Date",
            "Health-Nut",
            "Pear Cub",
            "Shamrocket",
            "Red Stinger",
            //Smarty
            "Snowdrop",
            "Weenie Beanie",
            "Snow Pea",
            "Cattail",
            "Smoosh-Shroom",
            "Threepeater",
            "Iceberg Lettuce",
            "Shellery",
            "Rescue Radish",
            "Spring Bean",
            "Vanilla",
            "Carrotillery",
            "Mars Flytrap",
            "Planet of the Grapes",
            "Leaf Blower",
            "Grave Mistake",
            "Pear Pal",
            "Primal Peashooter",
            "Admiral Navy Bean",
            "Lightning Reed",
            "Chilly Pepper",
            "Navy Bean",
            "Jumping Bean",
            "Cosmic Bean",
            "Melon-Pult",
            "Tricorn",
            "Lily Pad",
            "Sow Magic Beans",
            "Bean Counter",
            "Snapdragon",
            "Winter Squash",
            "Laser Cattail",
            "Bog of Enlightenment",
            "Cool Bean",
            "Jelly Bean",
            "Rotobaga",
            "Shrinking Violet",
            "Brainana",
            "Winter Melon",
            "The Great Zucchini",
            "Shooting Starfruit",
            "Dark Matter Dragonfruit",
            "Lima-Pleurodon",
            "Bird of Paradise",
            "Spyris",
            "Go-Nuts",
            "Mayflower",
            "Sportacus",
            "Snake Grass",
            "Witch Hazel",
            "Jolly Holly",
            "Sap-Fling",
          ];
          let randomWords = [];
          let remainingWords = [...wordsArray];
          for (let i = 0; i != number; i++) {
            const randomIndex = Math.floor(
              Math.random() * remainingWords.length
            );
            const selectedWord = remainingWords.splice(randomIndex, 1)[0]; // Remove the word from the remainingWords array
            randomWords.push(selectedWord);
          }
          let embed = new EmbedBuilder()
            .setTitle(`Wheel BC Deck`)
            .setDescription(
              `Here is your wheel for bc \n **${randomWords.join("\n")}**`
            )
            .setColor("Random");
          await interaction.followUp({ embeds: [embed], ephemeral: true });
        }
        if (hero == "citron" || hero == "ct") {
          const wordsArray = [
            //Guardian
            "Small-Nut",
            "Sting Bean",
            "Wall-Nut",
            "Pismashio",
            "Spineapple",
            "Potato Mine",
            "Cactus",
            "Gardening Gloves",
            "Sea-Shroom",
            "Water Chestnut",
            "Pea-Nut",
            "Steel Magnolia",
            "Photosynthesizer",
            "Spikeweed Sector",
            "Plantern",
            "Grape Responsibility",
            "Primal Potato Mine",
            "Grizzly Pear",
            "Grave Buster",
            "Hibernating Beary",
            "Prickly Pear",
            "Smackadamia",
            "Tough Beets",
            "Cosmic Nut",
            "Starch-Lord",
            "Blockbuster",
            "Pumpkin Shell",
            "Jugger-Nut",
            "Mirror-Nut",
            "Guacodile",
            "Doom-Shroom",
            "Galacta-Cactus",
            "Force Field",
            "Gravitree",
            "Three-Nut",
            "Marine Bean",
            "Primal Wall-Nut",
            "Poppin' Poppies",
            "Soul Patch",
            "Wall-Nut Bowling",
            "Body-Gourd",
            "Pecanolith",
            "Tricarrotops",
            "Loco Coco",
            "Forget-Me-Nuts",
            "Garlic",
            "Corn Dog",
            "Hot Date",
            "Health-Nut",
            "Pear Cub",
            "Shamrocket",
            "Red Stinger",
            //Smarty
            "Snowdrop",
            "Weenie Beanie",
            "Snow Pea",
            "Cattail",
            "Smoosh-Shroom",
            "Threepeater",
            "Iceberg Lettuce",
            "Shellery",
            "Rescue Radish",
            "Spring Bean",
            "Vanilla",
            "Carrotillery",
            "Mars Flytrap",
            "Planet of the Grapes",
            "Leaf Blower",
            "Grave Mistake",
            "Pear Pal",
            "Primal Peashooter",
            "Admiral Navy Bean",
            "Lightning Reed",
            "Chilly Pepper",
            "Navy Bean",
            "Jumping Bean",
            "Cosmic Bean",
            "Melon-Pult",
            "Tricorn",
            "Lily Pad",
            "Sow Magic Beans",
            "Bean Counter",
            "Snapdragon",
            "Winter Squash",
            "Laser Cattail",
            "Bog of Enlightenment",
            "Cool Bean",
            "Jelly Bean",
            "Rotobaga",
            "Shrinking Violet",
            "Brainana",
            "Winter Melon",
            "The Great Zucchini",
            "Shooting Starfruit",
            "Dark Matter Dragonfruit",
            "Lima-Pleurodon",
            "Bird of Paradise",
            "Spyris",
            "Go-Nuts",
            "Mayflower",
            "Sportacus",
            "Snake Grass",
            "Witch Hazel",
            "Jolly Holly",
            "Sap-Fling",
          ];
          let randomWords = [];
          let remainingWords = [...wordsArray];
          for (let i = 0; i != number; i++) {
            const randomIndex = Math.floor(
              Math.random() * remainingWords.length
            );
            const selectedWord = remainingWords.splice(randomIndex, 1)[0]; // Remove the word from the remainingWords array
            randomWords.push(selectedWord);
          }
          let embed = new EmbedBuilder()
            .setTitle(`Wheel Citron Deck`)
            .setDescription(
              `Here is your wheel for Citron \n **${randomWords.join("\n")}**`
            )
            .setColor("Random");
          return interaction.followUp({ embeds: [embed], ephemeral: true });
        }
        if (
          hero == "captain combustible" ||
          hero == "cc" ||
          hero == "captain" ||
          hero == "combustible" ||
          hero == "captaincombustible"
        ) {
          const wordsArray = [
            //Kabloom
            "Button Mushroom",
            "Berry Blast",
            "Buff-Shroom",
            "Seedling",
            "Zapricot",
            "Poison Mushroom",
            "Berry Angry",
            "Mushroom Ringleader",
            "Poison Ivy",
            "Pair of Pears",
            "Bluesberry",
            "Sizzle",
            "Banana Bomb",
            "Mushroom Grotto",
            "Invasive Species",
            "Puff-Shroom",
            "Veloci-Radish Hatchling",
            "Hot Lava",
            "Shroom for Two",
            "Wild Berry",
            "Petal-Morphosis",
            "Sour Grapes",
            "Poison Oak",
            "Cosmic Mushroom",
            "Lava Guava",
            "Cro-Magnolia",
            "Shelf Mushroom",
            "Punish-Shroom",
            "Sergeant Strongberry",
            "Cherry Bomb",
            "Grapes of Wrath",
            "Astro-Shroom",
            "Banana Launcher",
            "Pair Pearadise",
            "Fireweed",
            "Imitater",
            "Strawberrian",
            "Pineclone",
            "Dandy Lion King",
            "Kernel Corn",
            "Reincarnation",
            "Molekale",
            "Gloom-Shroom",
            "Veloci-Radish Hunter",
            "Blooming Heart",
            "High-Voltage Currant",
            "Sonic Bloom",
            "Transfiguration",
            "Atomic Bombegranate",
            "Electric Blueberry",
            //Mega-Grow
            "Peashooter",
            "Torchwood",
            "Cabbage-Pult",
            "Fertilize",
            "Flourish",
            "Grow-Shroom",
            "Repeater",
            "Bonk Choy",
            "Pea Pod",
            "Sweet Potato",
            "Fire Peashooter",
            "Skyshooter",
            "Coffee Grounds",
            "Sweet Pea",
            "Vegetation Mutation",
            "Umbrella Leaf",
            "Half-Banana",
            "Typical Beanstalk",
            "The Podfather",
            "Plant Food",
            "Re-Peat Moss",
            "Whipvine",
            "Super-Phat Beets",
            "Banana Peel",
            "Cosmic Pea",
            "Bamboozle",
            "Pea Patch",
            "Party Thyme",
            "Black-Eyed Pea",
            "Potted Powerhouse",
            "Espresso Fiesta",
            "Moonbean",
            "Pod Fighter",
            "The Red Plant-It",
            "Split Pea",
            "Grape Power",
            "Savage Spinach",
            "Doubled Mint",
            "Muscle Sprout",
            "Bananasaurus Rex",
            "Captain Cucumber",
            "Onion Rings",
            "Gatling Pea",
            "Apotatosaurus",
            "Clique Peas",
            "Lily of the Valley",
            "Banana Split",
            "Plucky Clover",
          ];
          let randomWords = [];
          let remainingWords = [...wordsArray];
          for (let i = 0; i != number; i++) {
            const randomIndex = Math.floor(
              Math.random() * remainingWords.length
            );
            const selectedWord = remainingWords.splice(randomIndex, 1)[0]; // Remove the word from the remainingWords array
            randomWords.push(selectedWord);
          }
          let embed = new EmbedBuilder()
            .setTitle(`Wheel Captain Combustible Deck`)
            .setDescription(
              `Here is your wheel for Captain Combustible
 **${randomWords.join("\n")}**`
            )
            .setColor("Random");
          await interaction.followUp({ embeds: [embed], ephemeral: true });
        }
        if (
          hero == "chompzilla" ||
          hero == "cz" ||
          hero == "chomp" ||
          hero == "zilla"
        ) {
          const wordsArray = [
            //Solar
            "Bellflower",
            "Sunflower",
            "Mixed Nuts",
            "Squash",
            "Smashing Pumpkin",
            "Morning Glory",
            "Fume-Shroom",
            "Pepper M.D.",
            "Water Balloons",
            "Venus Flytrap",
            "Bloomerang",
            "Metal Petal Sunflower",
            "Cosmoss",
            "Apple-Saucer",
            "Venus Flytraplanet",
            "Kernel-Pult",
            "Lil' Buddy",
            "Sunnier-Shroom",
            "Sage Sage",
            "Whack-a-Zombie",
            "Lawnmower",
            "Magnifying Grass",
            "Power Flower",
            "Cosmic Flower",
            "Heartichoke",
            "Elderberry",
            "Eyespore",
            "Twin Sunflower",
            "2nd-Best Taco of All Time",
            "Chomper",
            "Laser Bean",
            "Solar Winds",
            "Wing-Nut",
            "Tactical Cuke",
            "Primal Sunflower",
            "Sunflower Seed",
            "Sun Strike",
            "Briar Rose",
            "Three-Headed Chomper",
            "Cornucopia",
            "Astrocado",
            "Astro Vera",
            "Cob Cannon",
            "Aloesaurus",
            "Haunted Pumpking",
            "Sun-Shroom",
            "Jack O' Lantern",
            "Ketchup Mechanic",
            "Toadstool",
            //Mega-Grow
            "Peashooter",
            "Torchwood",
            "Cabbage-Pult",
            "Fertilize",
            "Flourish",
            "Grow-Shroom",
            "Repeater",
            "Bonk Choy",
            "Pea Pod",
            "Sweet Potato",
            "Fire Peashooter",
            "Skyshooter",
            "Coffee Grounds",
            "Sweet Pea",
            "Vegetation Mutation",
            "Umbrella Leaf",
            "Half-Banana",
            "Typical Beanstalk",
            "The Podfather",
            "Plant Food",
            "Re-Peat Moss",
            "Whipvine",
            "Super-Phat Beets",
            "Banana Peel",
            "Cosmic Pea",
            "Bamboozle",
            "Pea Patch",
            "Party Thyme",
            "Black-Eyed Pea",
            "Potted Powerhouse",
            "Espresso Fiesta",
            "Moonbean",
            "Pod Fighter",
            "The Red Plant-It",
            "Split Pea",
            "Grape Power",
            "Savage Spinach",
            "Doubled Mint",
            "Muscle Sprout",
            "Bananasaurus Rex",
            "Captain Cucumber",
            "Onion Rings",
            "Gatling Pea",
            "Apotatosaurus",
            "Clique Peas",
            "Lily of the Valley",
            "Banana Split",
            "Plucky Clover",
          ];
          let randomWords = [];
          let remainingWords = [...wordsArray];
          for (let i = 0; i != number; i++) {
            const randomIndex = Math.floor(
              Math.random() * remainingWords.length
            );
            const selectedWord = remainingWords.splice(randomIndex, 1)[0]; // Remove the word from the remainingWords array
            randomWords.push(selectedWord);
          }
          let embed = new EmbedBuilder()
            .setTitle(`Wheel Chompzilla Deck`)
            .setDescription(
              `Here is your wheel for Chompzila
                 **${randomWords.join("\n")}**`
            )
            .setColor("Random");
          await interaction.followUp({ embeds: [embed], ephemeral: true });
        }
        if (
          hero == "gk" ||
          hero == "grass knuckles" ||
          hero == "grass" ||
          hero == "knuckles"
        ) {
          const wordsArray = [
            //Gurdian
            "Small-Nut",
            "Sting Bean",
            "Wall-Nut",
            "Pismashio",
            "Spineapple",
            "Potato Mine",
            "Cactus",
            "Gardening Gloves",
            "Sea-Shroom",
            "Water Chestnut",
            "Pea-Nut",
            "Steel Magnolia",
            "Photosynthesizer",
            "Spikeweed Sector",
            "Plantern",
            "Grape Responsibility",
            "Primal Potato Mine",
            "Grizzly Pear",
            "Grave Buster",
            "Hibernating Beary",
            "Prickly Pear",
            "Smackadamia",
            "Tough Beets",
            "Cosmic Nut",
            "Starch-Lord",
            "Blockbuster",
            "Pumpkin Shell",
            "Jugger-Nut",
            "Mirror-Nut",
            "Guacodile",
            "Doom-Shroom",
            "Galacta-Cactus",
            "Force Field",
            "Gravitree",
            "Three-Nut",
            "Marine Bean",
            "Primal Wall-Nut",
            "Poppin' Poppies",
            "Soul Patch",
            "Wall-Nut Bowling",
            "Body-Gourd",
            "Pecanolith",
            "Tricarrotops",
            "Loco Coco",
            "Forget-Me-Nuts",
            "Garlic",
            "Corn Dog",
            "Hot Date",
            "Health-Nut",
            "Pear Cub",
            "Shamrocket",
            "Red Stinger",
            //Mega-Grow
            "Peashooter",
            "Torchwood",
            "Cabbage-Pult",
            "Fertilize",
            "Flourish",
            "Grow-Shroom",
            "Repeater",
            "Bonk Choy",
            "Pea Pod",
            "Sweet Potato",
            "Fire Peashooter",
            "Skyshooter",
            "Coffee Grounds",
            "Sweet Pea",
            "Vegetation Mutation",
            "Umbrella Leaf",
            "Half-Banana",
            "Typical Beanstalk",
            "The Podfather",
            "Plant Food",
            "Re-Peat Moss",
            "Whipvine",
            "Super-Phat Beets",
            "Banana Peel",
            "Cosmic Pea",
            "Bamboozle",
            "Pea Patch",
            "Party Thyme",
            "Black-Eyed Pea",
            "Potted Powerhouse",
            "Espresso Fiesta",
            "Moonbean",
            "Pod Fighter",
            "The Red Plant-It",
            "Split Pea",
            "Grape Power",
            "Savage Spinach",
            "Doubled Mint",
            "Muscle Sprout",
            "Bananasaurus Rex",
            "Captain Cucumber",
            "Onion Rings",
            "Gatling Pea",
            "Apotatosaurus",
            "Clique Peas",
            "Lily of the Valley",
            "Banana Split",
            "Plucky Clover",
          ];
          let randomWords = [];
          let remainingWords = [...wordsArray];
          for (let i = 0; i != number; i++) {
            const randomIndex = Math.floor(
              Math.random() * remainingWords.length
            );
            const selectedWord = remainingWords.splice(randomIndex, 1)[0]; // Remove the word from the remainingWords array
            randomWords.push(selectedWord);
          }
          let embed = new EmbedBuilder()
            .setTitle(`Wheel Grass Knuckles Deck`)
            .setDescription(
              `Here is your wheel for Grass Knuckles
 **${randomWords.join("\n")}**`
            )
            .setColor("Random");
          await interaction.followUp({ embeds: [embed], ephemeral: true });
        }
        if (
          hero == "gs" ||
          hero == "green shadow" ||
          hero == "green" ||
          hero == "shadow"
        ) {
          const wordsArray = [
            //Smarty
            "Snowdrop",
            "Weenie Beanie",
            "Snow Pea",
            "Cattail",
            "Smoosh-Shroom",
            "Threepeater",
            "Iceberg Lettuce",
            "Shellery",
            "Rescue Radish",
            "Spring Bean",
            "Vanilla",
            "Carrotillery",
            "Mars Flytrap",
            "Planet of the Grapes",
            "Leaf Blower",
            "Grave Mistake",
            "Pear Pal",
            "Primal Peashooter",
            "Admiral Navy Bean",
            "Lightning Reed",
            "Chilly Pepper",
            "Navy Bean",
            "Jumping Bean",
            "Cosmic Bean",
            "Melon-Pult",
            "Tricorn",
            "Lily Pad",
            "Sow Magic Beans",
            "Bean Counter",
            "Snapdragon",
            "Winter Squash",
            "Laser Cattail",
            "Bog of Enlightenment",
            "Cool Bean",
            "Jelly Bean",
            "Rotobaga",
            "Shrinking Violet",
            "Brainana",
            "Winter Melon",
            "The Great Zucchini",
            "Shooting Starfruit",
            "Dark Matter Dragonfruit",
            "Lima-Pleurodon",
            "Bird of Paradise",
            "Spyris",
            "Go-Nuts",
            "Mayflower",
            "Sportacus",
            "Snake Grass",
            "Witch Hazel",
            "Jolly Holly",
            "Sap-Fling",
            //Mega-Grow
            "Peashooter",
            "Torchwood",
            "Cabbage-Pult",
            "Fertilize",
            "Flourish",
            "Grow-Shroom",
            "Repeater",
            "Bonk Choy",
            "Pea Pod",
            "Sweet Potato",
            "Fire Peashooter",
            "Skyshooter",
            "Coffee Grounds",
            "Sweet Pea",
            "Vegetation Mutation",
            "Umbrella Leaf",
            "Half-Banana",
            "Typical Beanstalk",
            "The Podfather",
            "Plant Food",
            "Re-Peat Moss",
            "Whipvine",
            "Super-Phat Beets",
            "Banana Peel",
            "Cosmic Pea",
            "Bamboozle",
            "Pea Patch",
            "Party Thyme",
            "Black-Eyed Pea",
            "Potted Powerhouse",
            "Espresso Fiesta",
            "Moonbean",
            "Pod Fighter",
            "The Red Plant-It",
            "Split Pea",
            "Grape Power",
            "Savage Spinach",
            "Doubled Mint",
            "Muscle Sprout",
            "Bananasaurus Rex",
            "Captain Cucumber",
            "Onion Rings",
            "Gatling Pea",
            "Apotatosaurus",
            "Clique Peas",
            "Lily of the Valley",
            "Banana Split",
            "Plucky Clover",
          ];
          let randomWords = [];
          let remainingWords = [...wordsArray];
          for (let i = 0; i != number; i++) {
            const randomIndex = Math.floor(
              Math.random() * remainingWords.length
            );
            const selectedWord = remainingWords.splice(randomIndex, 1)[0]; // Remove the word from the remainingWords array
            randomWords.push(selectedWord);
          }
          let embed = new EmbedBuilder()
            .setTitle(`Wheel Green Shadow Deck`)
            .setDescription(
              `Here is your wheel for Green Shadow
     **${randomWords.join("\n")}**`
            )
            .setColor("Random");
          await interaction.followUp({ embeds: [embed], ephemeral: true });
        }
        if (
          hero == "nightcap" ||
          hero == "nc" ||
          hero == "cap" ||
          hero == "night"
        ) {
          const wordsArray = [
            //Smarty
            "Snowdrop",
            "Weenie Beanie",
            "Snow Pea",
            "Cattail",
            "Smoosh-Shroom",
            "Threepeater",
            "Iceberg Lettuce",
            "Shellery",
            "Rescue Radish",
            "Spring Bean",
            "Vanilla",
            "Carrotillery",
            "Mars Flytrap",
            "Planet of the Grapes",
            "Leaf Blower",
            "Grave Mistake",
            "Pear Pal",
            "Primal Peashooter",
            "Admiral Navy Bean",
            "Lightning Reed",
            "Chilly Pepper",
            "Navy Bean",
            "Jumping Bean",
            "Cosmic Bean",
            "Melon-Pult",
            "Tricorn",
            "Lily Pad",
            "Sow Magic Beans",
            "Bean Counter",
            "Snapdragon",
            "Winter Squash",
            "Laser Cattail",
            "Bog of Enlightenment",
            "Cool Bean",
            "Jelly Bean",
            "Rotobaga",
            "Shrinking Violet",
            "Brainana",
            "Winter Melon",
            "The Great Zucchini",
            "Shooting Starfruit",
            "Dark Matter Dragonfruit",
            "Lima-Pleurodon",
            "Bird of Paradise",
            "Spyris",
            "Go-Nuts",
            "Mayflower",
            "Sportacus",
            "Snake Grass",
            "Witch Hazel",
            "Jolly Holly",
            "Sap-Fling",
            //Kabloom
            "Button Mushroom",
            "Berry Blast",
            "Buff-Shroom",
            "Seedling",
            "Zapricot",
            "Poison Mushroom",
            "Berry Angry",
            "Mushroom Ringleader",
            "Poison Ivy",
            "Pair of Pears",
            "Bluesberry",
            "Sizzle",
            "Banana Bomb",
            "Mushroom Grotto",
            "Invasive Species",
            "Puff-Shroom",
            "Veloci-Radish Hatchling",
            "Hot Lava",
            "Shroom for Two",
            "Wild Berry",
            "Petal-Morphosis",
            "Sour Grapes",
            "Poison Oak",
            "Cosmic Mushroom",
            "Lava Guava",
            "Cro-Magnolia",
            "Shelf Mushroom",
            "Punish-Shroom",
            "Sergeant Strongberry",
            "Cherry Bomb",
            "Grapes of Wrath",
            "Astro-Shroom",
            "Banana Launcher",
            "Pair Pearadise",
            "Fireweed",
            "Imitater",
            "Strawberrian",
            "Pineclone",
            "Dandy Lion King",
            "Kernel Corn",
            "Reincarnation",
            "Molekale",
            "Gloom-Shroom",
            "Veloci-Radish Hunter",
            "Blooming Heart",
            "High-Voltage Currant",
            "Sonic Bloom",
            "Transfiguration",
            "Atomic Bombegranate",
            "Electric Blueberry",
          ];
          let randomWords = [];
          let remainingWords = [...wordsArray];
          for (let i = 0; i != number; i++) {
            const randomIndex = Math.floor(
              Math.random() * remainingWords.length
            );
            const selectedWord = remainingWords.splice(randomIndex, 1)[0]; // Remove the word from the remainingWords array
            randomWords.push(selectedWord);
          }
          let embed = new EmbedBuilder()
            .setTitle(`Wheel Nightcap Deck`)
            .setDescription(
              `Here is your wheel for Nightcap
     **${randomWords.join("\n")}**`
            )
            .setColor("Random");
          await interaction.followUp({ embeds: [embed], ephemeral: true });
        }
        if (hero == "rose" || hero == "ro") {
          const wordsArray = [
            //Smarty
            "Snowdrop",
            "Weenie Beanie",
            "Snow Pea",
            "Cattail",
            "Smoosh-Shroom",
            "Threepeater",
            "Iceberg Lettuce",
            "Shellery",
            "Rescue Radish",
            "Spring Bean",
            "Vanilla",
            "Carrotillery",
            "Mars Flytrap",
            "Planet of the Grapes",
            "Leaf Blower",
            "Grave Mistake",
            "Pear Pal",
            "Primal Peashooter",
            "Admiral Navy Bean",
            "Lightning Reed",
            "Chilly Pepper",
            "Navy Bean",
            "Jumping Bean",
            "Cosmic Bean",
            "Melon-Pult",
            "Tricorn",
            "Lily Pad",
            "Sow Magic Beans",
            "Bean Counter",
            "Snapdragon",
            "Winter Squash",
            "Laser Cattail",
            "Bog of Enlightenment",
            "Cool Bean",
            "Jelly Bean",
            "Rotobaga",
            "Shrinking Violet",
            "Brainana",
            "Winter Melon",
            "The Great Zucchini",
            "Shooting Starfruit",
            "Dark Matter Dragonfruit",
            "Lima-Pleurodon",
            "Bird of Paradise",
            "Spyris",
            "Go-Nuts",
            "Mayflower",
            "Sportacus",
            "Snake Grass",
            "Witch Hazel",
            "Jolly Holly",
            "Sap-Fling",
            //Solar
            "Bellflower",
            "Sunflower",
            "Mixed Nuts",
            "Squash",
            "Smashing Pumpkin",
            "Morning Glory",
            "Fume-Shroom",
            "Pepper M.D.",
            "Water Balloons",
            "Venus Flytrap",
            "Bloomerang",
            "Metal Petal Sunflower",
            "Cosmoss",
            "Apple-Saucer",
            "Venus Flytraplanet",
            "Kernel-Pult",
            "Lil' Buddy",
            "Sunnier-Shroom",
            "Sage Sage",
            "Whack-a-Zombie",
            "Lawnmower",
            "Magnifying Grass",
            "Power Flower",
            "Cosmic Flower",
            "Heartichoke",
            "Elderberry",
            "Eyespore",
            "Twin Sunflower",
            "2nd-Best Taco of All Time",
            "Chomper",
            "Laser Bean",
            "Solar Winds",
            "Wing-Nut",
            "Tactical Cuke",
            "Primal Sunflower",
            "Sunflower Seed",
            "Sun Strike",
            "Briar Rose",
            "Three-Headed Chomper",
            "Cornucopia",
            "Astrocado",
            "Astro Vera",
            "Cob Cannon",
            "Aloesaurus",
            "Haunted Pumpking",
            "Sun-Shroom",
            "Jack O' Lantern",
            "Ketchup Mechanic",
            "Toadstool",
          ];
          let randomWords = [];
          let remainingWords = [...wordsArray];
          for (let i = 0; i != number; i++) {
            const randomIndex = Math.floor(
              Math.random() * remainingWords.length
            );
            const selectedWord = remainingWords.splice(randomIndex, 1)[0]; // Remove the word from the remainingWords array
            randomWords.push(selectedWord);
          }
          let embed = new EmbedBuilder()
            .setTitle(`Wheel Rose Deck`)
            .setDescription(
              `Here is your wheel for Rose
     **${randomWords.join("\n")}**`
            )
            .setColor("Random");
          await interaction.followUp({ embeds: [embed], ephemeral: true });
        }
        if (
          hero == "solar flare" ||
          hero == "sf" ||
          hero == "solar" ||
          hero == "flare"
        ) {
          const wordsArray = [
            //Kabloom
            "Button Mushroom",
            "Berry Blast",
            "Buff-Shroom",
            "Seedling",
            "Zapricot",
            "Poison Mushroom",
            "Berry Angry",
            "Mushroom Ringleader",
            "Poison Ivy",
            "Pair of Pears",
            "Bluesberry",
            "Sizzle",
            "Banana Bomb",
            "Mushroom Grotto",
            "Invasive Species",
            "Puff-Shroom",
            "Veloci-Radish Hatchling",
            "Hot Lava",
            "Shroom for Two",
            "Wild Berry",
            "Petal-Morphosis",
            "Sour Grapes",
            "Poison Oak",
            "Cosmic Mushroom",
            "Lava Guava",
            "Cro-Magnolia",
            "Shelf Mushroom",
            "Punish-Shroom",
            "Sergeant Strongberry",
            "Cherry Bomb",
            "Grapes of Wrath",
            "Astro-Shroom",
            "Banana Launcher",
            "Pair Pearadise",
            "Fireweed",
            "Imitater",
            "Strawberrian",
            "Pineclone",
            "Dandy Lion King",
            "Kernel Corn",
            "Reincarnation",
            "Molekale",
            "Gloom-Shroom",
            "Veloci-Radish Hunter",
            "Blooming Heart",
            "High-Voltage Currant",
            "Sonic Bloom",
            "Transfiguration",
            "Atomic Bombegranate",
            "Electric Blueberry",
            //Solar
            "Bellflower",
            "Sunflower",
            "Mixed Nuts",
            "Squash",
            "Smashing Pumpkin",
            "Morning Glory",
            "Fume-Shroom",
            "Pepper M.D.",
            "Water Balloons",
            "Venus Flytrap",
            "Bloomerang",
            "Metal Petal Sunflower",
            "Cosmoss",
            "Apple-Saucer",
            "Venus Flytraplanet",
            "Kernel-Pult",
            "Lil' Buddy",
            "Sunnier-Shroom",
            "Sage Sage",
            "Whack-a-Zombie",
            "Lawnmower",
            "Magnifying Grass",
            "Power Flower",
            "Cosmic Flower",
            "Heartichoke",
            "Elderberry",
            "Eyespore",
            "Twin Sunflower",
            "2nd-Best Taco of All Time",
            "Chomper",
            "Laser Bean",
            "Solar Winds",
            "Wing-Nut",
            "Tactical Cuke",
            "Primal Sunflower",
            "Sunflower Seed",
            "Sun Strike",
            "Briar Rose",
            "Three-Headed Chomper",
            "Cornucopia",
            "Astrocado",
            "Astro Vera",
            "Cob Cannon",
            "Aloesaurus",
            "Haunted Pumpking",
            "Sun-Shroom",
            "Jack O' Lantern",
            "Ketchup Mechanic",
            "Toadstool",
          ];
          let randomWords = [];
          let remainingWords = [...wordsArray];
          for (let i = 0; i != number; i++) {
            const randomIndex = Math.floor(
              Math.random() * remainingWords.length
            );
            const selectedWord = remainingWords.splice(randomIndex, 1)[0]; // Remove the word from the remainingWords array
            randomWords.push(selectedWord);
          }
          let embed = new EmbedBuilder()
            .setTitle(`Wheel Solar Flare Deck`)
            .setDescription(
              `Here is your wheel for Solar Flare
 **${randomWords.join("\n")}**`
            )
            .setColor("Random");
          await interaction.followUp({ embeds: [embed], ephemeral: true });
        }
        if (
          hero == "spudow" ||
          hero == "sp" ||
          hero == "spud" ||
          hero == "dow"
        ) {
          const wordsArray = [
            //Kabloom
            "Button Mushroom",
            "Berry Blast",
            "Buff-Shroom",
            "Seedling",
            "Zapricot",
            "Poison Mushroom",
            "Berry Angry",
            "Mushroom Ringleader",
            "Poison Ivy",
            "Pair of Pears",
            "Bluesberry",
            "Sizzle",
            "Banana Bomb",
            "Mushroom Grotto",
            "Invasive Species",
            "Puff-Shroom",
            "Veloci-Radish Hatchling",
            "Hot Lava",
            "Shroom for Two",
            "Wild Berry",
            "Petal-Morphosis",
            "Sour Grapes",
            "Poison Oak",
            "Cosmic Mushroom",
            "Lava Guava",
            "Cro-Magnolia",
            "Shelf Mushroom",
            "Punish-Shroom",
            "Sergeant Strongberry",
            "Cherry Bomb",
            "Grapes of Wrath",
            "Astro-Shroom",
            "Banana Launcher",
            "Pair Pearadise",
            "Fireweed",
            "Imitater",
            "Strawberrian",
            "Pineclone",
            "Dandy Lion King",
            "Kernel Corn",
            "Reincarnation",
            "Molekale",
            "Gloom-Shroom",
            "Veloci-Radish Hunter",
            "Blooming Heart",
            "High-Voltage Currant",
            "Sonic Bloom",
            "Transfiguration",
            "Atomic Bombegranate",
            "Electric Blueberry",
            //Gurdian
            "Small-Nut",
            "Sting Bean",
            "Wall-Nut",
            "Pismashio",
            "Spineapple",
            "Potato Mine",
            "Cactus",
            "Gardening Gloves",
            "Sea-Shroom",
            "Water Chestnut",
            "Pea-Nut",
            "Steel Magnolia",
            "Photosynthesizer",
            "Spikeweed Sector",
            "Plantern",
            "Grape Responsibility",
            "Primal Potato Mine",
            "Grizzly Pear",
            "Grave Buster",
            "Hibernating Beary",
            "Prickly Pear",
            "Smackadamia",
            "Tough Beets",
            "Cosmic Nut",
            "Starch-Lord",
            "Blockbuster",
            "Pumpkin Shell",
            "Jugger-Nut",
            "Mirror-Nut",
            "Guacodile",
            "Doom-Shroom",
            "Galacta-Cactus",
            "Force Field",
            "Gravitree",
            "Three-Nut",
            "Marine Bean",
            "Primal Wall-Nut",
            "Poppin' Poppies",
            "Soul Patch",
            "Wall-Nut Bowling",
            "Body-Gourd",
            "Pecanolith",
            "Tricarrotops",
            "Loco Coco",
            "Forget-Me-Nuts",
            "Garlic",
            "Corn Dog",
            "Hot Date",
            "Health-Nut",
            "Pear Cub",
            "Shamrocket",
            "Red Stinger",
          ];
          let randomWords = [];
          let remainingWords = [...wordsArray];
          for (let i = 0; i != number; i++) {
            const randomIndex = Math.floor(
              Math.random() * remainingWords.length
            );
            const selectedWord = remainingWords.splice(randomIndex, 1)[0]; // Remove the word from the remainingWords array
            randomWords.push(selectedWord);
          }
          let embed = new EmbedBuilder()
            .setTitle(`Wheel Spudow Deck`)
            .setDescription(
              `Here is your wheel for Spudow 
        **${randomWords.join("\n")}**`
            )
            .setColor("Random");
          await interaction.followUp({ embeds: [embed], ephemeral: true });
        }
        if (
          hero == "wall-knight" ||
          hero == "wk" ||
          hero == "wall" ||
          hero == "knight" ||
          hero == "wallknight" ||
          hero == "wall knight"
        ) {
          const wordsArray = [
            //Solar
            "Bellflower",
            "Sunflower",
            "Mixed Nuts",
            "Squash",
            "Smashing Pumpkin",
            "Morning Glory",
            "Fume-Shroom",
            "Pepper M.D.",
            "Water Balloons",
            "Venus Flytrap",
            "Bloomerang",
            "Metal Petal Sunflower",
            "Cosmoss",
            "Apple-Saucer",
            "Venus Flytraplanet",
            "Kernel-Pult",
            "Lil' Buddy",
            "Sunnier-Shroom",
            "Sage Sage",
            "Whack-a-Zombie",
            "Lawnmower",
            "Magnifying Grass",
            "Power Flower",
            "Cosmic Flower",
            "Heartichoke",
            "Elderberry",
            "Eyespore",
            "Twin Sunflower",
            "2nd-Best Taco of All Time",
            "Chomper",
            "Laser Bean",
            "Solar Winds",
            "Wing-Nut",
            "Tactical Cuke",
            "Primal Sunflower",
            "Sunflower Seed",
            "Sun Strike",
            "Briar Rose",
            "Three-Headed Chomper",
            "Cornucopia",
            "Astrocado",
            "Astro Vera",
            "Cob Cannon",
            "Aloesaurus",
            "Haunted Pumpking",
            "Sun-Shroom",
            "Jack O' Lantern",
            "Ketchup Mechanic",
            "Toadstool",
            //Gurdian
            "Small-Nut",
            "Sting Bean",
            "Wall-Nut",
            "Pismashio",
            "Spineapple",
            "Potato Mine",
            "Cactus",
            "Gardening Gloves",
            "Sea-Shroom",
            "Water Chestnut",
            "Pea-Nut",
            "Steel Magnolia",
            "Photosynthesizer",
            "Spikeweed Sector",
            "Plantern",
            "Grape Responsibility",
            "Primal Potato Mine",
            "Grizzly Pear",
            "Grave Buster",
            "Hibernating Beary",
            "Prickly Pear",
            "Smackadamia",
            "Tough Beets",
            "Cosmic Nut",
            "Starch-Lord",
            "Blockbuster",
            "Pumpkin Shell",
            "Jugger-Nut",
            "Mirror-Nut",
            "Guacodile",
            "Doom-Shroom",
            "Galacta-Cactus",
            "Force Field",
            "Gravitree",
            "Three-Nut",
            "Marine Bean",
            "Primal Wall-Nut",
            "Poppin' Poppies",
            "Soul Patch",
            "Wall-Nut Bowling",
            "Body-Gourd",
            "Pecanolith",
            "Tricarrotops",
            "Loco Coco",
            "Forget-Me-Nuts",
            "Garlic",
            "Corn Dog",
            "Hot Date",
            "Health-Nut",
            "Pear Cub",
            "Shamrocket",
            "Red Stinger",
          ];
          let randomWords = [];
          let remainingWords = [...wordsArray];
          for (let i = 0; i != number; i++) {
            const randomIndex = Math.floor(
              Math.random() * remainingWords.length
            );
            const selectedWord = remainingWords.splice(randomIndex, 1)[0]; // Remove the word from the remainingWords array
            randomWords.push(selectedWord);
          }
          let embed = new EmbedBuilder()
            .setTitle(`Wheel Wall-Knight Deck`)
            .setDescription(
              `Here is your wheel for Wall-Knight
         **${randomWords.join("\n")}**`
            )
            .setColor("Random");
          await interaction.followUp({ embeds: [embed], ephemeral: true });
        }
        if (
          hero == "bf" ||
          hero == "brain freeze" ||
          hero == "brain" ||
          hero == "freeze"
        ) {
          const wordsArray = [
            //Sneaky
            "Imp",
            "Mini-Ninja",
            "Smoke Bomb",
            "Fishy Imp",
            "Smelly Zombie",
            "Headstone Carver",
            "Zombie Chicken",
            "Hot Dog Imp",
            "Swashbuckler Zombie",
            "Backyard Bounce",
            "Stealthy Imp",
            "Firefighter",
            "Graveyard",
            "Ice Pirate",
            "Frosty Mustache",
            "Swabbie",
            "Barrel of Barrels",
            "Monkey Smuggler",
            "Imp Commander",
            "Barrel Roller Zombie",
            "Surprise Gargantuar",
            "Walrus Rider",
            "Zombot Stomp",
            "Cosmic Imp",
            "Space Pirate",
            "Blowgun Imp",
            "Buried Treasure",
            "Toxic Waste Imp",
            "Line Dancing Zombie",
            "Pogo Bouncer",
            "Tomb Raiser Zombie",
            "Ducky Tube Zombie",
            "Dr. Spacetime",
            "Laser Base Alpha",
            "Cursed Gargolith",
            "Excavator Zombie",
            "Unthawed Viking",
            "Mixed-Up Gravedigger",
            "Zombot Sharktronic Sub",
            "Zombot Plank Walker",
            "Space Cowboy",
            "Cryo-Yeti",
            "Zombot Aerostatic Gondola",
            "Raiding Raptor",
            "Imposter",
            "Fire Rooster",
            "Imp-Throwing Imp",
            "Captain Flameface",
            "Zombie High Diver",
            "Trapper Zombie",
            //Beastly
            "Skunk Punk",
            "Pied Piper",
            "Zookeeper",
            "Dolphin Rider",
            "Locust Swarm",
            "Dog Walker",
            "Nibble",
            "Snorkel Zombie",
            "Yeti Lunchbox",
            "Haunting Zombie",
            "Loudmouth",
            "B-flat",
            "Total Eclipse",
            "Alien Ooze",
            "Surfer Zombie",
            "Haunting Ghost",
            "Goat",
            "Vengeful Cyborg",
            "Squirrel Herder",
            "Vimpire",
            "Vitamin Z",
            "Kangaroo Rider",
            "Smashing Gargantuar",
            "Biodome Botanist",
            "Cosmic Yeti",
            "Primordial Cheese Shover",
            "Killer Whale",
            "Cat Lady",
            "Zombie Yeti",
            "Deep Sea Gargantuar",
            "Maniacal Laugh",
            "Cheese Cutter",
            "Cyborg Zombie",
            "Area 22",
            "Extinction Event",
            "Ancient Vimpire",
            "Hunting Grounds",
            "Nurse Gargantuar",
            "Octo Zombie",
            "Zombot 1000",
            "Interstellar Bounty Hunter",
            "Supernova Gargantuar",
            "Mondo Bronto",
            "Gargantuar-Throwing Gargantuar",
            "Fraidy Cat",
            "Secret Agent",
            "Energy Drink Zombie",
            "Synchronized Swimmer",
            "Hover-Goat 3000",
            "Overstuffed Zombie",
            "Sneezing Zombie",
            "King of the Grill",
          ];
          let randomWords = [];
          let remainingWords = [...wordsArray];
          for (let i = 0; i != number; i++) {
            const randomIndex = Math.floor(
              Math.random() * remainingWords.length
            );
            const selectedWord = remainingWords.splice(randomIndex, 1)[0]; // Remove the word from the remainingWords array
            randomWords.push(selectedWord);
          }
          let embed = new EmbedBuilder()
            .setTitle(`Wheel Brain Freeze Deck`)
            .setDescription(
              `Here is your wheel for Brain Freeze
 **${randomWords.join("\n")}**`
            )
            .setColor("Random");
          await interaction.followUp({ embeds: [embed], ephemeral: true });
        }
        if (
          hero == "eb" ||
          hero == "electric" ||
          hero == "boogaloo" ||
          hero == "electric boogaloo"
        ) {
          const wordsArray = [
            //Crazy
            "Backup Dancer",
            "Bungee Plumber",
            "Cuckoo Zombie",
            "Disco Zombie",
            "Flamenco Zombie",
            "Tennis Champ",
            "Unlife of the Party",
            "Conga Zombie",
            "Newspaper Zombie",
            "Cakesplosion",
            "Orchestra Conductor",
            "Foot Soldier Zombie",
            "Loose Cannon",
            "Meteor Z",
            "Space Ninja",
            "Mystery Egg",
            "Sugary Treat",
            "Trapper Territory",
            "Exploding Imp",
            "Jester",
            "Zombot's Wrath",
            "The Chickening",
            "Imp-Throwing Gargantuar",
            "Final Mission",
            "Cosmic Dancer",
            "Gizzard Lizard",
            "Disco Dance Floor",
            "Aerobics Instructor",
            "Abracadaver",
            "Fireworks Zombie",
            "Disco-Tron 3000",
            "Disco-Naut",
            "Moon Base Z",
            "Gas Giant",
            "Quickdraw Con Man",
            "Grave Robber",
            "Zombie's Best Friend",
            "Barrel of Deadbeards",
            "Valkyrie",
            "Gargantuars' Feast",
            "Quasar Wizard",
            "Binary Stars",
            "Tankylosaurus",
            "Headhunter",
            "Exploding Fruitcake",
            "Unexpected Gifts",
            "Stupid Cupid",
            "Frankentuar",
            "Gargantuar-Throwing Imp",
            "Hippity Hop Gargantuar",
            //Beastly
            "Skunk Punk",
            "Pied Piper",
            "Zookeeper",
            "Dolphin Rider",
            "Locust Swarm",
            "Dog Walker",
            "Nibble",
            "Snorkel Zombie",
            "Yeti Lunchbox",
            "Haunting Zombie",
            "Loudmouth",
            "B-flat",
            "Total Eclipse",
            "Alien Ooze",
            "Surfer Zombie",
            "Haunting Ghost",
            "Goat",
            "Vengeful Cyborg",
            "Squirrel Herder",
            "Vimpire",
            "Vitamin Z",
            "Kangaroo Rider",
            "Smashing Gargantuar",
            "Biodome Botanist",
            "Cosmic Yeti",
            "Primordial Cheese Shover",
            "Killer Whale",
            "Cat Lady",
            "Zombie Yeti",
            "Deep Sea Gargantuar",
            "Maniacal Laugh",
            "Cheese Cutter",
            "Cyborg Zombie",
            "Area 22",
            "Extinction Event",
            "Ancient Vimpire",
            "Hunting Grounds",
            "Nurse Gargantuar",
            "Octo Zombie",
            "Zombot 1000",
            "Interstellar Bounty Hunter",
            "Supernova Gargantuar",
            "Mondo Bronto",
            "Gargantuar-Throwing Gargantuar",
            "Fraidy Cat",
            "Secret Agent",
            "Energy Drink Zombie",
            "Synchronized Swimmer",
            "Hover-Goat 3000",
            "Overstuffed Zombie",
            "Sneezing Zombie",
            "King of the Grill",
          ];
          let randomWords = [];
          let remainingWords = [...wordsArray];
          for (let i = 0; i != number; i++) {
            const randomIndex = Math.floor(
              Math.random() * remainingWords.length
            );
            const selectedWord = remainingWords.splice(randomIndex, 1)[0]; // Remove the word from the remainingWords array
            randomWords.push(selectedWord);
          }
          let embed = new EmbedBuilder()
            .setTitle(`Wheel Electric Boogaloo(EB) Deck`)
            .setDescription(
              `Here is your wheel for Electric Boogaloo(EB)
         **${randomWords.join("\n")}**`
            )
            .setColor("Random");
          await interaction.followUp({ embeds: [embed], ephemeral: true });
        }
        if (
          hero == "hg" ||
          hero == "huge" ||
          hero == "huge giganticus" ||
          hero == "giganticus" ||
          hero == "huge-giganticus"
        ) {
          const wordsArray = [
            //Brainy
            "Cardboard Robot Zombie",
            "Paparazzi Zombie",
            "Lurch for Lunch",
            "Fun-Dead Raiser",
            "Drum Major",
            "Chimney Sweep",
            "Beam Me Up",
            "Cell Phone Zombie",
            "Pool Shark",
            "Zombot Drone Engineer",
            "Brain Vendor",
            "Mountain Climber",
            "Cryo-Brain",
            "Medulla Nebula",
            "Moonwalker",
            "Copter Commando",
            "Mustache Waxer",
            "Pirate's Booty",
            "Gentleman Zombie",
            "Kite Flyer",
            "Gadget Scientist",
            "Hail-a-Copter",
            "Wizard Gargantuar",
            "Cosmic Scientist",
            "Triplication",
            "Zom-Blob",
            "Mustache Monument",
            "Electrician",
            "Rocket Science",
            "Mad Chemist",
            "Portal Technician",
            "Neutron Imp",
            "Transformation Station",
            "Wormhole Gatekeeper",
            "Evolutionary Leap",
            "Parasol Zombie",
            "Duckstache",
            "Teleport",
            "Shieldcrusher Viking",
            "Trickster",
            "Interdimensional Zombie",
            "Teleportation Zombie",
            "Gargantuar Mime",
            "Zombot Dinotronic Mechasaur",
            "Leprechaun Imp",
            "Regifting Zombie",
            "Trick-or-Treater",
            "Thinking Cap",
            "Kitchen Sink Zombie",
            "Bad Moon Rising",
            //Sneaky
            "Imp",
            "Mini-Ninja",
            "Smoke Bomb",
            "Fishy Imp",
            "Smelly Zombie",
            "Headstone Carver",
            "Zombie Chicken",
            "Hot Dog Imp",
            "Swashbuckler Zombie",
            "Backyard Bounce",
            "Stealthy Imp",
            "Firefighter",
            "Graveyard",
            "Ice Pirate",
            "Frosty Mustache",
            "Swabbie",
            "Barrel of Barrels",
            "Monkey Smuggler",
            "Imp Commander",
            "Barrel Roller Zombie",
            "Surprise Gargantuar",
            "Walrus Rider",
            "Zombot Stomp",
            "Cosmic Imp",
            "Space Pirate",
            "Blowgun Imp",
            "Buried Treasure",
            "Toxic Waste Imp",
            "Line Dancing Zombie",
            "Pogo Bouncer",
            "Tomb Raiser Zombie",
            "Ducky Tube Zombie",
            "Dr. Spacetime",
            "Laser Base Alpha",
            "Cursed Gargolith",
            "Excavator Zombie",
            "Unthawed Viking",
            "Mixed-Up Gravedigger",
            "Zombot Sharktronic Sub",
            "Zombot Plank Walker",
            "Space Cowboy",
            "Cryo-Yeti",
            "Zombot Aerostatic Gondola",
            "Raiding Raptor",
            "Imposter",
            "Fire Rooster",
            "Imp-Throwing Imp",
            "Captain Flameface",
            "Zombie High Diver",
            "Trapper Zombie",
          ];
          let randomWords = [];
          let remainingWords = [...wordsArray];
          for (let i = 0; i != number; i++) {
            const randomIndex = Math.floor(
              Math.random() * remainingWords.length
            );
            const selectedWord = remainingWords.splice(randomIndex, 1)[0]; // Remove the word from the remainingWords array
            randomWords.push(selectedWord);
          }
          let embed = new EmbedBuilder()
            .setTitle(`Wheel Huge-Gigantacus(HG) Deck`)
            .setDescription(
              `Here is your wheel for Huge-Gigantacus(HG)
         **${randomWords.join("\n")}**`
            )
            .setColor("Random");
          await interaction.followUp({ embeds: [embed], ephemeral: true });
        }
        if (
          hero == "sb" ||
          hero == "super" ||
          hero == "brainz" ||
          hero == "super brainz" ||
          hero == "superbrainz"
        ) {
          const wordsArray = [
            //Brainy
            "Cardboard Robot Zombie",
            "Paparazzi Zombie",
            "Lurch for Lunch",
            "Fun-Dead Raiser",
            "Drum Major",
            "Chimney Sweep",
            "Beam Me Up",
            "Cell Phone Zombie",
            "Pool Shark",
            "Zombot Drone Engineer",
            "Brain Vendor",
            "Mountain Climber",
            "Cryo-Brain",
            "Medulla Nebula",
            "Moonwalker",
            "Copter Commando",
            "Mustache Waxer",
            "Pirate's Booty",
            "Gentleman Zombie",
            "Kite Flyer",
            "Gadget Scientist",
            "Hail-a-Copter",
            "Wizard Gargantuar",
            "Cosmic Scientist",
            "Triplication",
            "Zom-Blob",
            "Mustache Monument",
            "Electrician",
            "Rocket Science",
            "Mad Chemist",
            "Portal Technician",
            "Neutron Imp",
            "Transformation Station",
            "Wormhole Gatekeeper",
            "Evolutionary Leap",
            "Parasol Zombie",
            "Duckstache",
            "Teleport",
            "Shieldcrusher Viking",
            "Trickster",
            "Interdimensional Zombie",
            "Teleportation Zombie",
            "Gargantuar Mime",
            "Zombot Dinotronic Mechasaur",
            "Leprechaun Imp",
            "Regifting Zombie",
            "Trick-or-Treater",
            "Thinking Cap",
            "Kitchen Sink Zombie",
            "Bad Moon Rising",
            //Sneaky
            "Imp",
            "Mini-Ninja",
            "Smoke Bomb",
            "Fishy Imp",
            "Smelly Zombie",
            "Headstone Carver",
            "Zombie Chicken",
            "Hot Dog Imp",
            "Swashbuckler Zombie",
            "Backyard Bounce",
            "Stealthy Imp",
            "Firefighter",
            "Graveyard",
            "Ice Pirate",
            "Frosty Mustache",
            "Swabbie",
            "Barrel of Barrels",
            "Monkey Smuggler",
            "Imp Commander",
            "Barrel Roller Zombie",
            "Surprise Gargantuar",
            "Walrus Rider",
            "Zombot Stomp",
            "Cosmic Imp",
            "Space Pirate",
            "Blowgun Imp",
            "Buried Treasure",
            "Toxic Waste Imp",
            "Line Dancing Zombie",
            "Pogo Bouncer",
            "Tomb Raiser Zombie",
            "Ducky Tube Zombie",
            "Dr. Spacetime",
            "Laser Base Alpha",
            "Cursed Gargolith",
            "Excavator Zombie",
            "Unthawed Viking",
            "Mixed-Up Gravedigger",
            "Zombot Sharktronic Sub",
            "Zombot Plank Walker",
            "Space Cowboy",
            "Cryo-Yeti",
            "Zombot Aerostatic Gondola",
            "Raiding Raptor",
            "Imposter",
            "Fire Rooster",
            "Imp-Throwing Imp",
            "Captain Flameface",
            "Zombie High Diver",
            "Trapper Zombie",
          ];
          let randomWords = [];
          let remainingWords = [...wordsArray];
          for (let i = 0; i != number; i++) {
            const randomIndex = Math.floor(
              Math.random() * remainingWords.length
            );
            const selectedWord = remainingWords.splice(randomIndex, 1)[0]; // Remove the word from the remainingWords array
            randomWords.push(selectedWord);
          }
          let embed = new EmbedBuilder()
            .setTitle(`Wheel Super Brainz Deck`)
            .setDescription(
              `Here is your wheel for Super Brainz
     **${randomWords.join("\n")}**`
            )
            .setColor("Random");
          await interaction.followUp({ embeds: [embed], ephemeral: true });
        }
        if (
          hero == "if" ||
          hero == "impfinity" ||
          hero == "imp" ||
          hero == "finity"
        ) {
          const wordsArray = [
            //crazy
            "Backup Dancer",
            "Bungee Plumber",
            "Cuckoo Zombie",
            "Disco Zombie",
            "Flamenco Zombie",
            "Tennis Champ",
            "Unlife of the Party",
            "Conga Zombie",
            "Newspaper Zombie",
            "Cakesplosion",
            "Orchestra Conductor",
            "Foot Soldier Zombie",
            "Loose Cannon",
            "Meteor Z",
            "Space Ninja",
            "Mystery Egg",
            "Sugary Treat",
            "Trapper Territory",
            "Exploding Imp",
            "Jester",
            "Zombot's Wrath",
            "The Chickening",
            "Imp-Throwing Gargantuar",
            "Final Mission",
            "Cosmic Dancer",
            "Gizzard Lizard",
            "Disco Dance Floor",
            "Aerobics Instructor",
            "Abracadaver",
            "Fireworks Zombie",
            "Disco-Tron 3000",
            "Disco-Naut",
            "Moon Base Z",
            "Gas Giant",
            "Quickdraw Con Man",
            "Grave Robber",
            "Zombie's Best Friend",
            "Barrel of Deadbeards",
            "Valkyrie",
            "Gargantuars' Feast",
            "Quasar Wizard",
            "Binary Stars",
            "Tankylosaurus",
            "Headhunter",
            "Exploding Fruitcake",
            "Unexpected Gifts",
            "Stupid Cupid",
            "Frankentuar",
            "Gargantuar-Throwing Imp",
            "Hippity Hop Gargantuar",
            //Sneaky
            "Imp",
            "Mini-Ninja",
            "Smoke Bomb",
            "Fishy Imp",
            "Smelly Zombie",
            "Headstone Carver",
            "Zombie Chicken",
            "Hot Dog Imp",
            "Swashbuckler Zombie",
            "Backyard Bounce",
            "Stealthy Imp",
            "Firefighter",
            "Graveyard",
            "Ice Pirate",
            "Frosty Mustache",
            "Swabbie",
            "Barrel of Barrels",
            "Monkey Smuggler",
            "Imp Commander",
            "Barrel Roller Zombie",
            "Surprise Gargantuar",
            "Walrus Rider",
            "Zombot Stomp",
            "Cosmic Imp",
            "Space Pirate",
            "Blowgun Imp",
            "Buried Treasure",
            "Toxic Waste Imp",
            "Line Dancing Zombie",
            "Pogo Bouncer",
            "Tomb Raiser Zombie",
            "Ducky Tube Zombie",
            "Dr. Spacetime",
            "Laser Base Alpha",
            "Cursed Gargolith",
            "Excavator Zombie",
            "Unthawed Viking",
            "Mixed-Up Gravedigger",
            "Zombot Sharktronic Sub",
            "Zombot Plank Walker",
            "Space Cowboy",
            "Cryo-Yeti",
            "Zombot Aerostatic Gondola",
            "Raiding Raptor",
            "Imposter",
            "Fire Rooster",
            "Imp-Throwing Imp",
            "Captain Flameface",
            "Zombie High Diver",
            "Trapper Zombie",
          ];
          let randomWords = [];
          let remainingWords = [...wordsArray];
          for (let i = 0; i != number; i++) {
            const randomIndex = Math.floor(
              Math.random() * remainingWords.length
            );
            const selectedWord = remainingWords.splice(randomIndex, 1)[0]; // Remove the word from the remainingWords array
            randomWords.push(selectedWord);
          }
          let embed = new EmbedBuilder()
            .setTitle(`Wheel Impfinity Deck`)
            .setDescription(
              `Here is your wheel for Impfinity
         **${randomWords.join("\n")}**`
            )
            .setColor("Random");
          await interaction.followUp({ embeds: [embed], ephemeral: true });
        }
        if (
          hero == "immorticia" ||
          hero == "immort" ||
          hero == "immor" ||
          hero == "ticia" ||
          hero == "im"
        ) {
          const wordsArray = [
            //Beastly
            "Skunk Punk",
            "Pied Piper",
            "Zookeeper",
            "Dolphin Rider",
            "Locust Swarm",
            "Dog Walker",
            "Nibble",
            "Snorkel Zombie",
            "Yeti Lunchbox",
            "Haunting Zombie",
            "Loudmouth",
            "B-flat",
            "Total Eclipse",
            "Alien Ooze",
            "Surfer Zombie",
            "Haunting Ghost",
            "Goat",
            "Vengeful Cyborg",
            "Squirrel Herder",
            "Vimpire",
            "Vitamin Z",
            "Kangaroo Rider",
            "Smashing Gargantuar",
            "Biodome Botanist",
            "Cosmic Yeti",
            "Primordial Cheese Shover",
            "Killer Whale",
            "Cat Lady",
            "Zombie Yeti",
            "Deep Sea Gargantuar",
            "Maniacal Laugh",
            "Cheese Cutter",
            "Cyborg Zombie",
            "Area 22",
            "Extinction Event",
            "Ancient Vimpire",
            "Hunting Grounds",
            "Nurse Gargantuar",
            "Octo Zombie",
            "Zombot 1000",
            "Interstellar Bounty Hunter",
            "Supernova Gargantuar",
            "Mondo Bronto",
            "Gargantuar-Throwing Gargantuar",
            "Fraidy Cat",
            "Secret Agent",
            "Energy Drink Zombie",
            "Synchronized Swimmer",
            "Hover-Goat 3000",
            "Overstuffed Zombie",
            "Sneezing Zombie",
            "King of the Grill",
            //Brainy
            "Cardboard Robot Zombie",
            "Paparazzi Zombie",
            "Lurch for Lunch",
            "Fun-Dead Raiser",
            "Drum Major",
            "Chimney Sweep",
            "Beam Me Up",
            "Cell Phone Zombie",
            "Pool Shark",
            "Zombot Drone Engineer",
            "Brain Vendor",
            "Mountain Climber",
            "Cryo-Brain",
            "Medulla Nebula",
            "Moonwalker",
            "Copter Commando",
            "Mustache Waxer",
            "Pirate's Booty",
            "Gentleman Zombie",
            "Kite Flyer",
            "Gadget Scientist",
            "Hail-a-Copter",
            "Wizard Gargantuar",
            "Cosmic Scientist",
            "Triplication",
            "Zom-Blob",
            "Mustache Monument",
            "Electrician",
            "Rocket Science",
            "Mad Chemist",
            "Portal Technician",
            "Neutron Imp",
            "Transformation Station",
            "Wormhole Gatekeeper",
            "Evolutionary Leap",
            "Parasol Zombie",
            "Duckstache",
            "Teleport",
            "Shieldcrusher Viking",
            "Trickster",
            "Interdimensional Zombie",
            "Teleportation Zombie",
            "Gargantuar Mime",
            "Zombot Dinotronic Mechasaur",
            "Leprechaun Imp",
            "Regifting Zombie",
            "Trick-or-Treater",
            "Thinking Cap",
            "Kitchen Sink Zombie",
            "Bad Moon Rising",
          ];
          let randomWords = [];
          let remainingWords = [...wordsArray];
          for (let i = 0; i != number; i++) {
            const randomIndex = Math.floor(
              Math.random() * remainingWords.length
            );
            const selectedWord = remainingWords.splice(randomIndex, 1)[0]; // Remove the word from the remainingWords array
            randomWords.push(selectedWord);
          }
          let embed = new EmbedBuilder()
            .setTitle(`Wheel Immorticia Deck`)
            .setDescription(
              `Here is your wheel for Immorticia
         **${randomWords.join("\n")}**`
            )
            .setColor("Random");
          await interaction.followUp({ embeds: [embed], ephemeral: true });
        }
        if (
          hero == "nt" ||
          hero == "neptuna" ||
          hero == "nept" ||
          hero == "tuna"
        ) {
          const wordsArray = [
            //Hearty
            "Baseball Zombie",
            "Rolling Stone",
            "Conehead",
            "Team Mascot",
            "Medic",
            "Arm Wrestler",
            "Camel Crossing",
            "Flag Zombie",
            "Terrify",
            "Trash Can Zombie",
            "Buckethead",
            "Ra Zombie",
            "Cone Zone",
            "Celestial Custodian",
            "Screen Door Zombie",
            "Healthy Treat",
            "Zombie Middle Manager",
            "Leftovers",
            "Sumo Wrestler",
            "Zombie Coach",
            "Monster Mash",
            "Knight of the Living Dead",
            "Rodeo Gargantuar",
            "Escape through Time",
            "Cosmic Sports Star",
            "Primeval Yeti",
            "Lost Colosseum",
            "Landscaper",
            "Weed Spray",
            "All-Star Zombie",
            "Coffee Zombie",
            "Black Hole",
            "Genetic Experiment",
            "Planetary Gladiator",
            "Jurassic Fossilhead",
            "Knockout",
            "Turquoise Skull Zombie",
            "Zombie King",
            "Undying Pharaoh",
            "Wannabe Hero",
            "Intergalactic Warlord",
            "Zombot Battlecruiser 5000",
            "Stompadon",
            "Chum Champion",
            "Zombology Teacher",
            "Gargologist",
            "Turkey Rider",
            "Going Viral",
            "Bonus Track Buckethead",
            "Defensive End",
            //Sneaky
            "Imp",
            "Mini-Ninja",
            "Smoke Bomb",
            "Fishy Imp",
            "Smelly Zombie",
            "Headstone Carver",
            "Zombie Chicken",
            "Hot Dog Imp",
            "Swashbuckler Zombie",
            "Backyard Bounce",
            "Stealthy Imp",
            "Firefighter",
            "Graveyard",
            "Ice Pirate",
            "Frosty Mustache",
            "Swabbie",
            "Barrel of Barrels",
            "Monkey Smuggler",
            "Imp Commander",
            "Barrel Roller Zombie",
            "Surprise Gargantuar",
            "Walrus Rider",
            "Zombot Stomp",
            "Cosmic Imp",
            "Space Pirate",
            "Blowgun Imp",
            "Buried Treasure",
            "Toxic Waste Imp",
            "Line Dancing Zombie",
            "Pogo Bouncer",
            "Tomb Raiser Zombie",
            "Ducky Tube Zombie",
            "Dr. Spacetime",
            "Laser Base Alpha",
            "Cursed Gargolith",
            "Excavator Zombie",
            "Unthawed Viking",
            "Mixed-Up Gravedigger",
            "Zombot Sharktronic Sub",
            "Zombot Plank Walker",
            "Space Cowboy",
            "Cryo-Yeti",
            "Zombot Aerostatic Gondola",
            "Raiding Raptor",
            "Imposter",
            "Fire Rooster",
            "Imp-Throwing Imp",
            "Captain Flameface",
            "Zombie High Diver",
            "Trapper Zombie",
          ];
          let randomWords = [];
          let remainingWords = [...wordsArray];
          for (let i = 0; i != number; i++) {
            const randomIndex = Math.floor(
              Math.random() * remainingWords.length
            );
            const selectedWord = remainingWords.splice(randomIndex, 1)[0]; // Remove the word from the remainingWords array
            randomWords.push(selectedWord);
          }
          let embed = new EmbedBuilder()
            .setTitle(`WheelNeptuna Deck`)
            .setDescription(
              `Here is your wheel for Neptuna
 **${randomWords.join("\n")}**`
            )
            .setColor("Random");
          await interaction.followUp({ embeds: [embed], ephemeral: true });
        }
        if (
          hero == "pb" ||
          hero == "professor" ||
          hero == "brainstorm" ||
          hero == "professor brainstorm" ||
          hero == "professorbrainstorm"
        ) {
          const wordsArray = [
            //Crazy
            "Backup Dancer",
            "Bungee Plumber",
            "Cuckoo Zombie",
            "Disco Zombie",
            "Flamenco Zombie",
            "Tennis Champ",
            "Unlife of the Party",
            "Conga Zombie",
            "Newspaper Zombie",
            "Cakesplosion",
            "Orchestra Conductor",
            "Foot Soldier Zombie",
            "Loose Cannon",
            "Meteor Z",
            "Space Ninja",
            "Mystery Egg",
            "Sugary Treat",
            "Trapper Territory",
            "Exploding Imp",
            "Jester",
            "Zombot's Wrath",
            "The Chickening",
            "Imp-Throwing Gargantuar",
            "Final Mission",
            "Cosmic Dancer",
            "Gizzard Lizard",
            "Disco Dance Floor",
            "Aerobics Instructor",
            "Abracadaver",
            "Fireworks Zombie",
            "Disco-Tron 3000",
            "Disco-Naut",
            "Moon Base Z",
            "Gas Giant",
            "Quickdraw Con Man",
            "Grave Robber",
            "Zombie's Best Friend",
            "Barrel of Deadbeards",
            "Valkyrie",
            "Gargantuars' Feast",
            "Quasar Wizard",
            "Binary Stars",
            "Tankylosaurus",
            "Headhunter",
            "Exploding Fruitcake",
            "Unexpected Gifts",
            "Stupid Cupid",
            "Frankentuar",
            "Gargantuar-Throwing Imp",
            "Hippity Hop Gargantuar",
            //Brainy
            "Cardboard Robot Zombie",
            "Paparazzi Zombie",
            "Lurch for Lunch",
            "Fun-Dead Raiser",
            "Drum Major",
            "Chimney Sweep",
            "Beam Me Up",
            "Cell Phone Zombie",
            "Pool Shark",
            "Zombot Drone Engineer",
            "Brain Vendor",
            "Mountain Climber",
            "Cryo-Brain",
            "Medulla Nebula",
            "Moonwalker",
            "Copter Commando",
            "Mustache Waxer",
            "Pirate's Booty",
            "Gentleman Zombie",
            "Kite Flyer",
            "Gadget Scientist",
            "Hail-a-Copter",
            "Wizard Gargantuar",
            "Cosmic Scientist",
            "Triplication",
            "Zom-Blob",
            "Mustache Monument",
            "Electrician",
            "Rocket Science",
            "Mad Chemist",
            "Portal Technician",
            "Neutron Imp",
            "Transformation Station",
            "Wormhole Gatekeeper",
            "Evolutionary Leap",
            "Parasol Zombie",
            "Duckstache",
            "Teleport",
            "Shieldcrusher Viking",
            "Trickster",
            "Interdimensional Zombie",
            "Teleportation Zombie",
            "Gargantuar Mime",
            "Zombot Dinotronic Mechasaur",
            "Leprechaun Imp",
            "Regifting Zombie",
            "Trick-or-Treater",
            "Thinking Cap",
            "Kitchen Sink Zombie",
            "Bad Moon Rising",
          ];
          let randomWords = [];
          let remainingWords = [...wordsArray];
          for (let i = 0; i != number; i++) {
            const randomIndex = Math.floor(
              Math.random() * remainingWords.length
            );
            const selectedWord = remainingWords.splice(randomIndex, 1)[0]; // Remove the word from the remainingWords array
            randomWords.push(selectedWord);
          }
          let embed = new EmbedBuilder()
            .setTitle(`Wheel Professor Brainstorm Deck`)
            .setDescription(
              `Here is your wheel for Professor Brainstorm
 **${randomWords.join("\n")}**`
            )
            .setColor("Random");
          await interaction.followUp({ embeds: [embed], ephemeral: true });
        }
        if (
          hero == "rb" ||
          hero == "rustbolt" ||
          hero == "rust" ||
          hero == "bolt" ||
          hero == "rusty" ||
          hero == "rust bolt"
        ) {
          const wordsArray = [
            //Hearty
            "Baseball Zombie",
            "Rolling Stone",
            "Conehead",
            "Team Mascot",
            "Medic",
            "Arm Wrestler",
            "Camel Crossing",
            "Flag Zombie",
            "Terrify",
            "Trash Can Zombie",
            "Buckethead",
            "Ra Zombie",
            "Cone Zone",
            "Celestial Custodian",
            "Screen Door Zombie",
            "Healthy Treat",
            "Zombie Middle Manager",
            "Leftovers",
            "Sumo Wrestler",
            "Zombie Coach",
            "Monster Mash",
            "Knight of the Living Dead",
            "Rodeo Gargantuar",
            "Escape through Time",
            "Cosmic Sports Star",
            "Primeval Yeti",
            "Lost Colosseum",
            "Landscaper",
            "Weed Spray",
            "All-Star Zombie",
            "Coffee Zombie",
            "Black Hole",
            "Genetic Experiment",
            "Planetary Gladiator",
            "Jurassic Fossilhead",
            "Knockout",
            "Turquoise Skull Zombie",
            "Zombie King",
            "Undying Pharaoh",
            "Wannabe Hero",
            "Intergalactic Warlord",
            "Zombot Battlecruiser 5000",
            "Stompadon",
            "Chum Champion",
            "Zombology Teacher",
            "Gargologist",
            "Turkey Rider",
            "Going Viral",
            "Bonus Track Buckethead",
            "Defensive End",
            //Brainy
            "Cardboard Robot Zombie",
            "Paparazzi Zombie",
            "Lurch for Lunch",
            "Fun-Dead Raiser",
            "Drum Major",
            "Chimney Sweep",
            "Beam Me Up",
            "Cell Phone Zombie",
            "Pool Shark",
            "Zombot Drone Engineer",
            "Brain Vendor",
            "Mountain Climber",
            "Cryo-Brain",
            "Medulla Nebula",
            "Moonwalker",
            "Copter Commando",
            "Mustache Waxer",
            "Pirate's Booty",
            "Gentleman Zombie",
            "Kite Flyer",
            "Gadget Scientist",
            "Hail-a-Copter",
            "Wizard Gargantuar",
            "Cosmic Scientist",
            "Triplication",
            "Zom-Blob",
            "Mustache Monument",
            "Electrician",
            "Rocket Science",
            "Mad Chemist",
            "Portal Technician",
            "Neutron Imp",
            "Transformation Station",
            "Wormhole Gatekeeper",
            "Evolutionary Leap",
            "Parasol Zombie",
            "Duckstache",
            "Teleport",
            "Shieldcrusher Viking",
            "Trickster",
            "Interdimensional Zombie",
            "Teleportation Zombie",
            "Gargantuar Mime",
            "Zombot Dinotronic Mechasaur",
            "Leprechaun Imp",
            "Regifting Zombie",
            "Trick-or-Treater",
            "Thinking Cap",
            "Kitchen Sink Zombie",
            "Bad Moon Rising",
          ];
          let randomWords = [];
          let remainingWords = [...wordsArray];
          for (let i = 0; i != number; i++) {
            const randomIndex = Math.floor(
              Math.random() * remainingWords.length
            );
            const selectedWord = remainingWords.splice(randomIndex, 1)[0]; // Remove the word from the remainingWords array
            randomWords.push(selectedWord);
          }
          let embed = new EmbedBuilder()
            .setTitle(`Wheel Rustbolt Deck`)
            .setDescription(
              `Here is your wheel for Rustbolt
         **${randomWords.join("\n")}**`
            )
            .setColor("Random");
          await interaction.followUp({ embeds: [embed], ephemeral: true });
        }
        if (
          hero == "sm" ||
          hero == "smash" ||
          hero == "smash" ||
          hero == "the smash" ||
          hero == "thesmash"
        ) {
          const wordsArray = [
            //Hearty
            "Baseball Zombie",
            "Rolling Stone",
            "Conehead",
            "Team Mascot",
            "Medic",
            "Arm Wrestler",
            "Camel Crossing",
            "Flag Zombie",
            "Terrify",
            "Trash Can Zombie",
            "Buckethead",
            "Ra Zombie",
            "Cone Zone",
            "Celestial Custodian",
            "Screen Door Zombie",
            "Healthy Treat",
            "Zombie Middle Manager",
            "Leftovers",
            "Sumo Wrestler",
            "Zombie Coach",
            "Monster Mash",
            "Knight of the Living Dead",
            "Rodeo Gargantuar",
            "Escape through Time",
            "Cosmic Sports Star",
            "Primeval Yeti",
            "Lost Colosseum",
            "Landscaper",
            "Weed Spray",
            "All-Star Zombie",
            "Coffee Zombie",
            "Black Hole",
            "Genetic Experiment",
            "Planetary Gladiator",
            "Jurassic Fossilhead",
            "Knockout",
            "Turquoise Skull Zombie",
            "Zombie King",
            "Undying Pharaoh",
            "Wannabe Hero",
            "Intergalactic Warlord",
            "Zombot Battlecruiser 5000",
            "Stompadon",
            "Chum Champion",
            "Zombology Teacher",
            "Gargologist",
            "Turkey Rider",
            "Going Viral",
            "Bonus Track Buckethead",
            "Defensive End",
            //Beastly
            "Skunk Punk",
            "Pied Piper",
            "Zookeeper",
            "Dolphin Rider",
            "Locust Swarm",
            "Dog Walker",
            "Nibble",
            "Snorkel Zombie",
            "Yeti Lunchbox",
            "Haunting Zombie",
            "Loudmouth",
            "B-flat",
            "Total Eclipse",
            "Alien Ooze",
            "Surfer Zombie",
            "Haunting Ghost",
            "Goat",
            "Vengeful Cyborg",
            "Squirrel Herder",
            "Vimpire",
            "Vitamin Z",
            "Kangaroo Rider",
            "Smashing Gargantuar",
            "Biodome Botanist",
            "Cosmic Yeti",
            "Primordial Cheese Shover",
            "Killer Whale",
            "Cat Lady",
            "Zombie Yeti",
            "Deep Sea Gargantuar",
            "Maniacal Laugh",
            "Cheese Cutter",
            "Cyborg Zombie",
            "Area 22",
            "Extinction Event",
            "Ancient Vimpire",
            "Hunting Grounds",
            "Nurse Gargantuar",
            "Octo Zombie",
            "Zombot 1000",
            "Interstellar Bounty Hunter",
            "Supernova Gargantuar",
            "Mondo Bronto",
            "Gargantuar-Throwing Gargantuar",
            "Fraidy Cat",
            "Secret Agent",
            "Energy Drink Zombie",
            "Synchronized Swimmer",
            "Hover-Goat 3000",
            "Overstuffed Zombie",
            "Sneezing Zombie",
            "King of the Grill",
          ];
          let randomWords = [];
          let remainingWords = [...wordsArray];
          for (let i = 0; i != number; i++) {
            const randomIndex = Math.floor(
              Math.random() * remainingWords.length
            );
            const selectedWord = remainingWords.splice(randomIndex, 1)[0]; // Remove the word from the remainingWords array
            randomWords.push(selectedWord);
          }
          let embed = new EmbedBuilder()
            .setTitle(`Wheel Smash Deck`)
            .setDescription(
              `Here is your wheel for Smash
         **${randomWords.join("\n")}**`
            )
            .setColor("Random");
          await interaction.followUp({ embeds: [embed], ephemeral: true });
        }
        if (
          hero == "zm" ||
          hero == "zmech" ||
          hero == "mech" ||
          hero == "z-mech"
        ) {
          const wordsArray = [
            //Hearty
            "Baseball Zombie",
            "Rolling Stone",
            "Conehead",
            "Team Mascot",
            "Medic",
            "Arm Wrestler",
            "Camel Crossing",
            "Flag Zombie",
            "Terrify",
            "Trash Can Zombie",
            "Buckethead",
            "Ra Zombie",
            "Cone Zone",
            "Celestial Custodian",
            "Screen Door Zombie",
            "Healthy Treat",
            "Zombie Middle Manager",
            "Leftovers",
            "Sumo Wrestler",
            "Zombie Coach",
            "Monster Mash",
            "Knight of the Living Dead",
            "Rodeo Gargantuar",
            "Escape through Time",
            "Cosmic Sports Star",
            "Primeval Yeti",
            "Lost Colosseum",
            "Landscaper",
            "Weed Spray",
            "All-Star Zombie",
            "Coffee Zombie",
            "Black Hole",
            "Genetic Experiment",
            "Planetary Gladiator",
            "Jurassic Fossilhead",
            "Knockout",
            "Turquoise Skull Zombie",
            "Zombie King",
            "Undying Pharaoh",
            "Wannabe Hero",
            "Intergalactic Warlord",
            "Zombot Battlecruiser 5000",
            "Stompadon",
            "Chum Champion",
            "Zombology Teacher",
            "Gargologist",
            "Turkey Rider",
            "Going Viral",
            "Bonus Track Buckethead",
            "Defensive End",
            //Crazy
            "Backup Dancer",
            "Bungee Plumber",
            "Cuckoo Zombie",
            "Disco Zombie",
            "Flamenco Zombie",
            "Tennis Champ",
            "Unlife of the Party",
            "Conga Zombie",
            "Newspaper Zombie",
            "Cakesplosion",
            "Orchestra Conductor",
            "Foot Soldier Zombie",
            "Loose Cannon",
            "Meteor Z",
            "Space Ninja",
            "Mystery Egg",
            "Sugary Treat",
            "Trapper Territory",
            "Exploding Imp",
            "Jester",
            "Zombot's Wrath",
            "The Chickening",
            "Imp-Throwing Gargantuar",
            "Final Mission",
            "Cosmic Dancer",
            "Gizzard Lizard",
            "Disco Dance Floor",
            "Aerobics Instructor",
            "Abracadaver",
            "Fireworks Zombie",
            "Disco-Tron 3000",
            "Disco-Naut",
            "Moon Base Z",
            "Gas Giant",
            "Quickdraw Con Man",
            "Grave Robber",
            "Zombie's Best Friend",
            "Barrel of Deadbeards",
            "Valkyrie",
            "Gargantuars' Feast",
            "Quasar Wizard",
            "Binary Stars",
            "Tankylosaurus",
            "Headhunter",
            "Exploding Fruitcake",
            "Unexpected Gifts",
            "Stupid Cupid",
            "Frankentuar",
            "Gargantuar-Throwing Imp",
            "Hippity Hop Gargantuar",
          ];
          let randomWords = [];
          let remainingWords = [...wordsArray];
          for (let i = 0; i != number; i++) {
            const randomIndex = Math.floor(
              Math.random() * remainingWords.length
            );
            const selectedWord = remainingWords.splice(randomIndex, 1)[0]; // Remove the word from the remainingWords array
            randomWords.push(selectedWord);
          }
          let embed = new EmbedBuilder()
            .setTitle(`Wheel Zmech Deck`)
            .setDescription(
              `Here is your wheel for Zmech
         **${randomWords.join("\n")}**`
            )
            .setColor("Random");
          await interaction.followUp({ embeds: [embed], ephemeral: true });
        }
      }
      //Elo Score 
      if(interaction.customId === "elo-score-modal") {
        await interaction.deferUpdate();
        let m = interaction.fields.getTextInputValue("elo-input");
        try{
          const playerone = await client.users.fetch(m)
        }
        catch(err) {
          console.log(err)
          return interaction.followUp({content: "Please input user Ids only", ephemeral: true})
        }
        let db = new (require("quick.db")).QuickDB();
        await interaction.followUp({content:`<@${m}> has ${(await db.get(`points_${m}`)) ? (await db.get(`points_${m}`)) : 1000} points.`, ephemeral: true})
      }
      //Elo Report 
      if (interaction.customId === "elo-report-modal") {
        await interaction.deferUpdate();
        const player1 = interaction.fields.getTextInputValue("player1");
        const player2 = interaction.fields.getTextInputValue("player2");
        const player1Elo = interaction.fields.getTextInputValue("player1Score");
        const player2Elo = interaction.fields.getTextInputValue("player2Score");
        const games = interaction.fields.getTextInputValue("games");

        if(player1 == "297073686916366336"|| player2 == "297073686916366336" || 
          player1 == "235148962103951360" || player2 == "235148962103951360" || 
          player1 == "591922988832653313" || player2 == "591922988832653313" || 
          player1 == "837345172105723985" || player2 == "837345172105723985" || 
          player1 == "634059474012995594" || player2 == "634059474012995594" || 
          player1 == "559426966151757824" || player2 == "559426966151757824" || 
          player1 == "282286160494067712" || player2 == "282286160494067712" || 
          player1 == "252128902418268161" || player2 == "252128902418268161" || 
          player1 == "375805687529209857" || player2 == "375805687529209857" || 
          player1 == "172002275412279296" || player2 == "172002275412279296" || 
          player1 == "882491278581977179" || player2 == "882491278581977179" || 
          player1 == "456633518882160642" || player2 == "456633518882160642"){
            await interaction.followUp({content: "You can't play a bot!", ephemeral: true})
          }
          if(isNaN(player1Elo)|| isNaN(player2Elo)) {
            return interaction.followUp({content: "please input a number for the scores", ephemeral: true})
          }
          try{
            const playerone = await client.users.fetch(player1)
            const playertwo = await client.users.fetch(player2)
          }
          catch(err) {
            console.log(err)
            return interaction.followUp({content: "Please input user Ids only", ephemeral: true})
          }
        console.log(player1, player2); //for debug ig
        if (player1 == player2)
          await interaction.followUp({content: "You can't report two same users", ephemeral: true})
        let win1 = player1Elo
        let win2 = player2Elo
        let db = new (require("quick.db").QuickDB)();
  
        if (win1 > win2) {
          let points1 = (await db.get(`points_${player1}`)) ?? 0;
          let points2 = (await db.get(`points_${player2}`)) ?? 0;
          let equ = Math.round(
            30 * (1 - 1 / (1 + 2 ** ((points2 - points1) / 30)))
          );
         await interaction.followUp({content:`It's ${win1}-${win2}. Do you agree <@${player2}>?`})
            .then((msg) => {
              msg.react("👍");
              let filter = (r, u) => u == player2;
              let collector = msg.createReactionCollector({
                filter,
                max: 3,
                time: 60000,
              });
              collector.on("collect", async (col) => {
                console.log(col);
                console.log("mogus");
                interaction.channel.send("Got it!");
                const channel = client.channels.cache.get("1260783370141569034")
                await channel.send({content: `<@${player1}> ${win1}-${win2} <@${player2}>
${games}`})
                if (await db.get(`points_${player1}`))
                  await db.add(`points_${player1}`, equ);
                else await db.set(`points_${player1}`, 1000 + equ);
                if (await db.get(`points_${player2}`))
                  await db.sub(`points_${player2}`, equ);
                else await db.set(`points_${player2}`, 1000 - equ);
                collector.stop();
              });
              collector.on("end", async()=> {
                await interaction.followUp({content:"Done!", ephemeral: true});
              });
            });
        }
        if (win2 > win1) {
          let points1 = (await db.get(`points_${player2}`)) ?? 0;
          let points2 = (await db.get(`points_${player1}`)) ?? 0;
          let equ = Math.round(
            30 * (1 - 1 / (1 + 2 ** ((points2 - points1) / 30)))
          );
         await interaction.followUp({content: `It's ${win2}-${win1}. Do you agree <@${player1}>?`})
            .then((msg) => {
              msg.react("👍");
              let filter = (r, u) => u == player1;
              let collec = msg.createReactionCollector({
                filter,
                max: 3,
                time: 60000,
              });
              collec.on("collect", async (col) => {
                console.log("mogus");
                console.log(col);
                interaction.channel.send("Got it!");
                const channel = client.channels.cache.get("1260783370141569034")
                await channel.send({content: `<@${player1}> ${win1}-${win2} <@${player2}>
${games}`})
                if (await db.get(`points_${player2}`))
                  await db.add(`points_${player2}`, equ);
                else await db.set(`points_${player2}`, 1000 + equ);
                if (await db.get(`points_${player1}`))
                  await db.sub(`points_${player1}`, equ);
                else await db.set(`points_${player1}`, 1000 - equ); //wasnt lyin
              });
              collec.on("end", async(m) => {
                console.log(m);
                await interaction.followUp({content:"Done!", ephemeral: true});
              });
            });

        }
      }
      if (interaction.customId.startsWith("hangman-")) {
        await interaction.deferUpdate();

        const game = hangmanGuesses.get(interaction.message.id);

        if (!game || game.guesses === 7) {
          return interaction.followUp({
            content: "Sorry, this game is no longer active.",
            ephemeral: true,
          });
        }

        const type = interaction.customId.split("-").at(-1);
        const guess = interaction.fields
          .getTextInputValue(`hangman-${type}-input-field`)
          .toLowerCase();

        if (guess.length === 1 && !guess.match(/[a-z]/i)) {
          return interaction.followUp({
            content: "You can only guess a letter.",
            ephemeral: true,
          });
        }

        if (game.letters.includes(guess)) {
          return interaction.followUp({
            content: "This letter has already been guessed.",
            ephemeral: true,
          });
        }

        if (guess.length > 1 && guess === game.word) {
          const embed = new EmbedBuilder()
            .setTitle("Hangman - Game Over")
            .setColor("Green")
            .setDescription(
              `<@${interaction.user.id}> won!\nThe correct word was: \`${game.word}\``
            );

          interaction.message.edit({
            embeds: [embed],
            components: [],
          });

          return interaction.followUp({
            content: "You win!",
            ephemeral: true,
          });
        }

        if (guess.length > 1) {
          const { embeds } = interaction.message;

          const fields = embeds[0].fields.map(({ name }) => ({
            name,
            value:
              name === "Guessed Words"
                ? [...game.words, guess].map((v) => `\`${v}\``).join(", ")
                : game.letters.length
                ? game.letters
                    .map((v) => `\`${v}\``)
                    .sort()
                    .join(", ")
                : "`N/A`",
          }));

          const embed = EmbedBuilder.from(embeds[0])
            .setDescription(
              `\`\`\`${ascii[game.guesses + 1]}${game.text}\n\`\`\``
            )
            .setFields(fields);

          await interaction.message.edit({ embeds: [embed] });
        }

        if (guess.length === 1) {
          const { embeds } = interaction.message;

          const fields = embeds[0].fields.map(({ name }) => ({
            name,
            value:
              name === "Guessed Letters"
                ? [...game.letters, guess]
                    .map((v) => `\`${v}\``)
                    .sort()
                    .join(", ")
                : game.words.length
                ? game.words.map((v) => `\`${v}\``).join(", ")
                : "`N/A`",
          }));

          game.unguessed.delete(guess);

          if (!game.unguessed.size) {
            const embed = new EmbedBuilder()
              .setTitle("Hangman - Game Over")
              .setColor("Green")
              .setDescription(
                `<@${interaction.user.id}> won!\nThe correct word was: \`${game.word}\``
              );

            interaction.message.edit({
              embeds: [embed],
              components: [],
            });

            return interaction.followUp({
              content: "You win!",
              ephemeral: true,
            });
          }

          const art = game.word.includes(guess)
            ? ascii[game.guesses]
            : ascii[game.guesses + 1];
          const text = [...game.word]
            .map((c) => (game.unguessed.has(c) ? "_" : c))
            .join(" ");

          const embed = EmbedBuilder.from(embeds[0])
            .setDescription(`\`\`\`${art}${text}\n\`\`\``)
            .setFields(fields);

          await interaction.message.edit({ embeds: [embed] });
        }

        if (game.guesses === 6) {
          const embed = new EmbedBuilder()
            .setTitle("Hangman - Game Over")
            .setColor("Red")
            .setDescription(
              `Nobody won this game! \n The correct word was: \`${game.word}\``
            );
          return interaction.message.edit({
            embeds: [embed],
            components: [],
          });
        }

        hangmanGuesses.set(interaction.message.id, {
          word: game.word,
          unguessed: game.unguessed,
          guesses:
            guess.length === 1
              ? game.word.includes(guess)
                ? game.guesses
                : game.guesses + 1
              : game.guesses + 1,

          letters:
            guess.length === 1 ? [...game.letters, guess].sort() : game.letters,
          words: guess.length === 1 ? game.words : [...game.words, guess],
          text:
            guess.length === 1
              ? [...game.word]
                  .map((c) => (game.unguessed.has(c) ? "_" : c))
                  .join(" ")
              : game.text,
        });
      }
    }

    if (interaction.type === InteractionType.MessageComponent) {
      if (interaction.customId === "bug-report") {
        const modalInput = new TextInputBuilder()
          .setCustomId("bug-report-input")
          .setLabel("Describe the bug")
          .setStyle(TextInputStyle.Paragraph);

        const row = new ActionRowBuilder({
          components: [modalInput],
        });

        const modal = new ModalBuilder()
          .setTitle("Bug Report")
          .setCustomId("bug-report-modal")
          .addComponents(row);

        await interaction.showModal(modal);
      }
      //Deck Search
      if (interaction.customId === "deck-search") {
        const modalInput = new TextInputBuilder()
          .setCustomId("deck-search-input")
          .setLabel("input search term")
          .setStyle(TextInputStyle.Short);

        const row = new ActionRowBuilder({
          components: [modalInput],
        });
        const modal = new ModalBuilder()
          .setTitle("Deck Search")
          .setCustomId("Deck-search-modal")
          .addComponents(row);
        await interaction.showModal(modal);
      }
      //Card Search
      if (interaction.customId === "card-search") {
        const modalInput = new TextInputBuilder()
          .setCustomId("card-search-input")
          .setLabel("input search term")
          .setStyle(TextInputStyle.Short);

        const row = new ActionRowBuilder({
          components: [modalInput],
        });
        const modal = new ModalBuilder()
          .setTitle("Card Search")
          .setCustomId("Card-search-modal")
          .addComponents(row);
        await interaction.showModal(modal);
      }
      //8 Ball
      if (interaction.customId === "8-ball") {
        const modalInput = new TextInputBuilder()
          .setCustomId("8ball-input")
          .setLabel("input question")
          .setStyle(TextInputStyle.Short);

        const row = new ActionRowBuilder({
          components: [modalInput],
        });
        const modal = new ModalBuilder()
          .setTitle("8 Ball")
          .setCustomId("8ball-modal")
          .addComponents(row);
        await interaction.showModal(modal);
      }
      //Wheel
      if (interaction.customId === "wheel-spin") {
        const modalInput = new TextInputBuilder()
          .setCustomId("wheel-input")
          .setLabel("input Hero")
          .setStyle(TextInputStyle.Short);
        const wheelInput = new TextInputBuilder()
          .setCustomId("number-input")
          .setLabel("input number in range 1-40")
          .setStyle(TextInputStyle.Short);
        const row = new ActionRowBuilder({
          components: [modalInput],
        });
        const row2 = new ActionRowBuilder({
          components: [wheelInput],
        });
        const modal = new ModalBuilder()
          .setTitle("Wheel Spin")
          .setCustomId("wheel-modal")
          .addComponents(row, row2);
        await interaction.showModal(modal);
      }
      //elo score 
      if (interaction.customId === "elo-score") {
        const modalInput = new TextInputBuilder()
          .setCustomId("elo-input")
          .setLabel("input user ID")
          .setStyle(TextInputStyle.Short);

        const row = new ActionRowBuilder({
          components: [modalInput],
        });
        const modal = new ModalBuilder()
          .setTitle("Elo Score")
          .setCustomId("elo-score-modal")
          .addComponents(row);
        await interaction.showModal(modal);
      }
      //elo report 
      if (interaction.customId === "elo-report") {
        const Player1= new TextInputBuilder()
        .setCustomId("player1")
        .setLabel("Player 1 Discord ID")
        .setStyle(TextInputStyle.Short);
        const player1Score= new TextInputBuilder()
        .setCustomId("player1Score")
        .setLabel("Player 1 Score")
        .setStyle(TextInputStyle.Short);
        const Player2= new TextInputBuilder()
        .setCustomId("player2")
        .setLabel("Player 2 Discord ID")
        .setStyle(TextInputStyle.Short);
        const player2Score= new TextInputBuilder()
        .setCustomId("player2Score")
        .setLabel("Player 2 Score")
        .setStyle(TextInputStyle.Short);
        const games = new TextInputBuilder()
        .setCustomId("games")
        .setLabel("Decks Used")
        .setStyle(TextInputStyle.Paragraph);
        const row1 = new ActionRowBuilder({
          components: [Player1],
        });
        const row2 = new ActionRowBuilder({
          components: [player1Score],
        });
        const row3 = new ActionRowBuilder({
          components: [Player2],
        });
        const row4 = new ActionRowBuilder({
          components: [player2Score],
        });
        const row5 = new ActionRowBuilder({
          components: [games],
        });
        const report = new ModalBuilder()
          .setTitle("Elo Report")
          .setCustomId("elo-report-modal")
          .addComponents(row1, row2, row3, row4, row5);
        await interaction.showModal(report);
      }
      if (interaction.customId === "suggestnew") {
        const deckName = new TextInputBuilder()
          .setCustomId("deckName")
          .setLabel("Deck name")
          .setStyle(TextInputStyle.Short);
        const deckHero = new TextInputBuilder()
          .setCustomId("deckHero")
          .setLabel("Deck hero")
          .setStyle(TextInputStyle.Short);
        const deckDesc = new TextInputBuilder()
          .setCustomId("deckDesc")
          .setLabel("Deck Description/Aliases and Deck Cost")
          .setStyle(TextInputStyle.Paragraph);
        const deckCred = new TextInputBuilder()
          .setCustomId("deckCred")
          .setLabel("Creators Name: Put Names Only")
          .setStyle(TextInputStyle.Short);
        const deckLink = new TextInputBuilder()
          .setCustomId("deckLink")
          .setLabel("Deck Image Please Input a link/url")
          .setStyle(TextInputStyle.Short);
        const dNames = new ActionRowBuilder({
          components: [deckName],
        });
        const dHeroes = new ActionRowBuilder({
          components: [deckHero],
        });
        const dDescs = new ActionRowBuilder({
          components: [deckDesc],
        });
        const dCreds = new ActionRowBuilder({
          components: [deckCred],
        });
        const dLinks = new ActionRowBuilder({
          components: [deckLink],
        });
        const deckSuggest = new ModalBuilder()
          .setTitle("Deck Suggestions")
          .setCustomId("dSugg")
          .addComponents(dNames, dHeroes, dDescs, dCreds, dLinks);

        await interaction.showModal(deckSuggest);
      }
      if (interaction.customId === "suggestup") {
        const upName = new TextInputBuilder()
          .setCustomId("upName")
          .setLabel("Deck name")
          .setStyle(TextInputStyle.Short);
        const upHero = new TextInputBuilder()
          .setCustomId("upHero")
          .setLabel("Deck hero")
          .setStyle(TextInputStyle.Short);
        const upDesc = new TextInputBuilder()
          .setCustomId("upDesc")
          .setLabel("Deck Description and Updated Deck Cost")
          .setStyle(TextInputStyle.Paragraph);
        const upCreds = new TextInputBuilder()
          .setCustomId("upCredits")
          .setLabel("Deck Creator Name")
          .setStyle(TextInputStyle.Short);
        const upLink = new TextInputBuilder()
          .setCustomId("upLink")
          .setLabel("Deck Image Please Input a link/url")
          .setStyle(TextInputStyle.Short);
        const upNames = new ActionRowBuilder({
          components: [upName],
        });
        const upHeroes = new ActionRowBuilder({
          components: [upHero],
        });
        const upDescs = new ActionRowBuilder({
          components: [upDesc],
        });
        const upLinks = new ActionRowBuilder({
          components: [upLink],
        });
        const upCredits = new ActionRowBuilder({
          components: [upCreds],
        });
        const upSugg = new ModalBuilder()
          .setTitle("Deck Updates")
          .setCustomId("dUps")
          .addComponents(upNames, upHeroes, upDescs, upCredits, upLinks);

        await interaction.showModal(upSugg);
      }

      if (!interaction.customId.startsWith("hangman-")) return;

      const type = interaction.customId.split("-").at(-1);

      const modal = new ModalBuilder()
        .setTitle(`Guess a ${type}`)
        .setCustomId(`hangman-guess-modal-${type}`);

      const modalInput = new TextInputBuilder()
        .setCustomId(`hangman-${type}-input-field`)
        .setLabel(`What ${type} would you like to guess?`)
        .setMinLength(type === "letter" ? 1 : 2)
        .setMaxLength(type === "letter" ? 1 : 25)
        .setStyle(TextInputStyle.Short);

      const row = new ActionRowBuilder({
        components: [modalInput],
      });

      modal.addComponents(row);

      await interaction.showModal(modal);
    }
  },
};
