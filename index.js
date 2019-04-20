const discord = require("discord.js");
const {translate, detectLanguage, wordAlternatives, translateWithAlternatives} = require("deepl-translator");

const client = new discord.Client();

const constants = require("./constants");
const embeds = require("./embeds");

client.on("ready", () => {
    console.log("I'm ready !");
    client.user.setActivity("Préfixe : " + constants.lPrefix);
});

client.on("message", (message) => {
    if(message.content.startsWith(constants.lPrefix) || message.content.startsWith(constants.uPrefix)) {
        const args = message.content.slice(constants.lPrefix.length).trim().split(";");
        const command = args.shift().toLowerCase();

        if(command === "invite") {
            message.channel.send(embeds.invite);
        }

        else if(command === "translate") {
            const stringToTranslate = args[0];
            const sourceLanguage = args[1];
            const targetLanguage = args[2];
        }
    }
})
