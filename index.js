const discord = require(`discord.js`);
const translate = require('@k3rn31p4nic/google-translate-api');

const client = new discord.Client();

const constants = require(`./constants`);
const embeds = require(`./embeds`);
const utilFunctions = require(`./utilFunctions`);

client.on(`ready`, () => {
    console.log(`I'm ready !`);
    client.user.setActivity(`Préfixe : ` + constants.lPrefix);
});

client.on(`message`, (message) => {
    if(message.content.startsWith(constants.lPrefix) || message.content.startsWith(constants.uPrefix)) {
        const args = message.content.slice(constants.lPrefix.length).trim().split(` `);
        const command = args.shift().toLowerCase();

        if(command === `invite`) {
            message.channel.send(embeds.invite);
        }

        else if(command === "t") {
            const targetLanguage = args[0];
            const sourceLanguage = args[1];
            const word = args[2];
            
            translate(word, {from: sourceLanguage, to: targetLanguage})
            .then(res => message.channel.send(utilFunctions.result(word, res.text, sourceLanguage, targetLanguage)))
            .catch(err => console.error(err));
        }

        else if(command === "list") {
            message.channel.send(embeds.languagesLists);
        }
    }
});
