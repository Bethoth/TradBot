const {RichEmbed} = require("discord.js");

const invite = new RichEmbed();
invite.setTitle("Invitation, serveur de test et GitHub du bot");
invite.setColor("FF7F50");
invite.setDescription(`Voilà quelques liens utiles à mon sujet :`);
invite.addField(`:link: Invitation du bot :`, "[TradBot](https://discordapp.com/oauth2/authorize?client_id=568948284870230016&scope=bot&permissions=2146958847)", true);
invite.addField(`:link: Serveur de test :`, "[My Bots Test](https://discord.gg/zBFhx73)", true);
invite.addField(`:link: GitHub :`, "[GitHub](https://github.com/ThePizzaDu62/TradBot)", true);

const languagesLists = new RichEmbed();
languagesLists.setTitle("Liste des langages");
languagesLists.setColor("FF7F50");
languagesLists.setDescription(`Voilà les langages pouvant être utilisés, associés à leurs raccourcis:
auto: automatique
af: afrikaans
sq: albanais
am: amharique
ar: arabe
hy: arménien
az: azerbaïdjanais
eu: basque
be: biélorusse
bn: bengali
bs: bosniaque
bg: bulgare
ca: catalan
ceb: cebuano
ny: chichewa
zh-cn: chinois simplifié
zh-tw: chinois traditionnel
co: corse
hr: croate
cs: tchèque
da: danois
nl: néerlandais
en: anglais
eo: espéranto
et: estonien
tl: philippin
fi: finlandais
fr: français
fy: frison
gl: galicien
ka: géorgien
de: allemand
el: grecq
gu: gujarati
ht: créole haïtien
ha: hausa
haw: hawaïen
iw: hébreu
hi: hindi
hmn: hmong
hu: hongrois
is: islandais
ig: igbo
id: indonésien
ga: irlandais
it: italien
ja: japonais
jw: javanais
kn: kannada
kk: kazakh
km: khmer
ko: coréen
ku: kurde (Kurmanji)
ky: kirghize
lo: lao
la: latin
lv: letton
lt: lituanien
lb: luxembourgeois
mk: macédonien
mg: malgache
ms: malais
ml: malayalam
mt: maltais
mi: maori
mr: marathi
mn: mongole
my: birman
ne: népalais
no: norvégien
ps: pachto
fa: perse
pl: polonais
pt: portugais
pa: punjabi
ro: roumain
ru: russe
sm: samoan
gd: gaélique écossais
sr: serbe
st: sesotho
sn: shona
sd: sindhi
si: cinghalais
sk: slovaque
sl: slovène
so: somalien
es: espagnol
su: soudanais
sw: swahili
sv: suèdois
tg: tadjik
ta: tamil
te: telugu
th: thaïlandais
tr: turque
uk: ukrainien
ur: ourdou
uz: ouzbek
vi: vietnamien
cy: gallois
xh: xhosa
yi: yiddish
yo: yoruba
zu: zoulou
`);

module.exports = {
    invite : invite,
    languagesLists : languagesLists
}
