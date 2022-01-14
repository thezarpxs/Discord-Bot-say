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
    if (message.content.startsWith(prefix+"say"))
    message.channel.send("(Insert your message)");
});


client.login(config.token);    
