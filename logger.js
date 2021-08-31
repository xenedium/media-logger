import Discord from 'discord.js-selfbot';
import fs from 'fs';
import { exec } from 'child_process';
import config from './config.json';

var nlinks = 0;
var nloop = 0;

const client = new Discord.Client( { intents: new Discord.Intents(0x7fff) } );

const ignore = ["welcome.png", "card.webp", "card.png", "levelup.png", "Welcome.png", "rank.png", "Level.png", "Profile.png", "profile.png", "captcha.png", "level.png",
                "Rank.png", ];

const IsClean = (url) =>
{
    for (let i = 0; i < ignore.length; i++)
        if ( url.includes(ignore[i]))
            return false;
    return true;
}

const regex = new RegExp(/https:\/\/cdn.discordapp.com\/attachments\/\d\d\d\d\d\d\d\d\d\d\d\d\d\d\d\d\d\d\/\d\d\d\d\d\d\d\d\d\d\d\d\d\d\d\d\d\d\/[^]*/g);

client.on('ready', ()=>{
    console.log(`Connected as ${client.user.tag}`);
});

client.on('message', (message) => {
    if (nloop === 30)
    {
        exec('./retrieve.sh');
        nloop = 0;
    } 
    if (message.attachments.first()?.url)
    {
        if ( IsClean(message.attachments.first().url) )
        {
            nloop++;
            fs.appendFileSync('links.txt', message.attachments.first().url + '\n');
            process.stdout.clearLine();
            process.stdout.cursorTo(0);
            process.stdout.write(`${++nlinks}`);
        }
            
    }
    else if (message.content.includes('https://cdn.discordapp.com/attachments/'))
    {
        let match;
        if (match = regex.exec(message.content))
        {
            nloop++;
            fs.appendFileSync('links.txt', match[0] + '\n');
            process.stdout.clearLine();
            process.stdout.cursorTo(0);
            process.stdout.write(`${++nlinks}`);
        } 
    }
})


client.login(config.token);