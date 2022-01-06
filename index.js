const Discord = require("discord.js")
const intents = new Discord.Intents(32509)
const client = new Discord.Client({ intents })

//Logs Chat
client.on('messageCreate', async (message) => {
    console.log(message.content)
})


//say comando
client.on('messageCreate', async (message) => {
    
    let prefix = '.'

    if(message.channel.type === 'dm') return;
    if(message.author.bot) return;

    if(!message.content.startsWith(prefix)) return;
    
    const args = message.content.slice(prefix.length).trim().split(/ + /g);
    const command = args.shift().toLocaleLowerCase()
    
    if(command === 'say'){
        message.channel.send(message)
    }
})


client.login("OTI4NDMyNzg4NDc3MTk0MzAw.YdYsag.cRVR3x8mFLwxjwgyqwY_7bD_hD4")