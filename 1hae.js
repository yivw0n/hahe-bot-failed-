const Discord = require("discord.js")

require("dotenv").config()

const client = new Discord.Client({
    intents: ["GUILDS"]
})

let bot = {
    client
}

client.on("ready", () => {
    console.log('Logged in as ${client.user.tag}')
})

client.slashcommands = new Discord.Collection()

client.loadSlashcommands = (bot, reload) => require("./handlers/slashcommands")(bot, reload)
client.loadSlashcommands(bot, false)



client.login(process.env.TOKEN)