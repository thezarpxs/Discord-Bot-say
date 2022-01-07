const Discord = require("discord.js");
const intents = new Discord.Intents(32509);
const client = new Discord.Client({ intents })
const config = require("./config.json");
const { MessageEmbed, DiscordApiError, PermissionOverwrites} = require("discord.js");


client.on("ready", () => {
    console.log("Estoy listo!");
});

client.on('messageCreate', async (message) => {
    console.log(message.content)
})

var prefix = config.prefix;

client.on("message", (message) => {
if (message.author.bot) return; 
if (message.content.startsWith(prefix+"ping")) {
if(!message.member.hasPermisions("ADMINISTRATOR"))return message.channel.send("No tienes permisos")
message.channel.send("pong!");

} else

    if (message.content.startsWith(prefix+"hola")) {
message.channel.send("Utiliza el siguiente enlace para fichar!\nhttps://www.opentimeclock.com/app/index.html");
    }
    

});


client.login(config.token);    