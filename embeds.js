const {RichEmbed} = require("discord.js");

const invite = new RichEmbed();
invite.setTitle("Invitation, serveur de test et GitHub du bot");
invite.setColor("FF7F50");
invite.setDescription(`Voilà quelques liens utiles à mon sujet :`);
invite.addField(`:link: Invitation du bot :`, "[TradBot](https://discordapp.com/oauth2/authorize?client_id=568948284870230016&scope=bot&permissions=2146958847)", true);
invite.addField(`:link: Serveur de test :`, "[My Bots Test](https://discord.gg/zBFhx73)", true);
invite.addField(`:link: GitHub :`, "[GitHub](https://github.com/ThePizzaDu62/TradBot)", true);

module.exports = {
    invite : invite
}
