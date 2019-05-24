const {RichEmbed} = require(`discord.js`);

function result(sourceText, translatedText, sourceLanguage, translatedLanguage) {
    let embed = new RichEmbed();
    embed.setTitle(`Traduction:`);
    embed.setColor(`10DA5A`);
    embed.setDescription(`
    **${sourceLanguage}**
    
    ${sourceText}
    
    **${translatedLanguage}**
    
    ${translatedText}
    `);

    return embed;
}

module.exports = {
    result : result
}
