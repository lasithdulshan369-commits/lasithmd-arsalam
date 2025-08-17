const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ARSLAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0Q1aU5OY3J1UVRKZDhUSU9ZY1hVdEVOdktGMFk1WVNPM2FiRXJ1ZVVFUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOFZqWTFTOHIyQU9jcUd1SU5nVFNRcU5BVTJ1UWJTbUJQbWd4T3VER0xYbz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxS3FJWHp0TDFPekExUlhaSHVQejltTDdOSDJTOVhOOFRtV3YvTHN4MEhzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ6TTl2SlNNdVZXL3dBMEZ4NHU1OElTNGl3ZFdjbGtqTWlPeGlZb09sbVNvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJCNHNtbWIxNlR3dmhwSWdhU2FGMlcxVmRHOUhpeTFud2ZLQyt3NEh2a0E9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBXTEowWFlQdFBGVHpyUDZaTU93L3RRRVFINDRaKzZtT0VJUHNDUGpuQms9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkozTjY2VllvbTBWb3RRSHlnSUgyQ2cvTHBVQVdMV3BMUk9XdTMvOW5YOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMFhhSFdhOEMxSURhZG9sRUZwK0drcVozd28veXJuNGNpZXl0VklqbWNpZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkpBK2lTMUpUUnJxK3ptRk5rcjZQNTZ5T2NpMWNUMHh4SjdnUEkyVFplanRTYnlMb1lsZzVZQ3hYdGJyVFRvUTFGYVNkR2NmMkNrNUlaU2RyNW1tQ0NnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NDgsImFkdlNlY3JldEtleSI6IlJxeXAxRUtzSi9jQnQ0aGVaTFR6RG1SRldEaTNPS0VSU3lqRmN6MFdRVDg9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IkpYWE1GR1FOIiwibWUiOnsiaWQiOiI5NDc3NDM2NzYzOToxNkBzLndoYXRzYXBwLm5ldCIsImxpZCI6IjIxOTcxMzQ4MTIxNjEzNzoxNkBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ01tSDVjb0JFTTNqaDhVR0dEWWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InFOeHFCYUVFUkhVd0hRay9sckMyR1FDenJadWNwNTlkaWJNeFFVdHArRG89IiwiYWNjb3VudFNpZ25hdHVyZSI6Im5oSkZEdlZ5aWFyNWlrbnFiK0s4aTFad2ZvMnNiMkVJUGo0RndTTG9EMjNDcjNFRkpZVlNnVU9TVFdQWldJYlQreDI2WkQva2hRODZkSmI1Qi94YURnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJKNFM5N1ZLRSs0eVVnQ0pwWDQ0TUdRYVgxamhkWFRaVzhVSEJ6WmdESDg2OWdHdXZZRXRVcU5YQUc2VGRHQ2hkK1JONkNKbUVLampuY1dXcklsYjlBUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0Nzc0MzY3NjM5OjE2QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmFqY2FnV2hCRVIxTUIwSlA1YXd0aGtBczYyYm5LZWZYWW16TVVGTGFmZzYifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNCSUlBZz09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1NTQ0MzY2NiwibGFzdFByb3BIYXNoIjoiM1I5WjM5In0=",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY LASITH-MD 🤍*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "true",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/qpnazl.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "LASITH-MD",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "LASITH-MD",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "94774367639",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "*LASITH DULSHAN*",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ LASITH DULSHAN ❣️*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/5x29np.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> HI I AM LASITH-MD⚡",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923237045919",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
