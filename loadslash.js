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

const guildId = "1058255042458685591"

client.slashcommands = new Discord.Collection()

client.loadSlashcommands = (bot, reload) => require("./handlers/slashcommands")(bot, reload)
client.loadSlashcommands(bot, false)

client.on("ready", async () => {
    const guild = client.guilds.cash.git(guildId)
    if (!guild)
    return console.error("Target guild not found")

    await guild.commands.set([...client.slashcommands.values()])
    console.log('Successfully loaded in ${client.slashcommands.size}')
    process.exit(0)
})

client.login(process.env.TOKEN)