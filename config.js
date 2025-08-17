const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ARSLAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUpxdkVwQnVpY2s1T09PNlZUd2lvZnN4NG04TUFnTEVXeDlMcnlrWUNGTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlduS0RlUytGYXdEL1B3TnB4S0RNMEZldFQ0VlBDazI1Z1RCZ3dHSUFWZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxS1orWnVlVkx2RnAyMkdBQjkwdWZ6S1VxMFJhdUZTY1k3QVAxS3R1bTFvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJSZVB0OFY5YVhITWFiWTFON1l3Qno5QkhNdHhhVDI2TStRWVdqS2c0Q0JRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndMZmJVV1A1Qi9WMU9vMDVjNUFsdllVTFFiNWlaTEUzcldJRkhRUGFyRUU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkxxUlR4M2dxMHRxZno4NDFwTjU4bE45U2lOeTZSa08rejk1NXlBczBBaG89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNk1PSXlNWDk4SkVROUpodlBBSUFuSy9oZ0I3NHl5d2NJMGZPYU54YVJYOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTmF3S2tuNDNhTURQVHppV2M5OFFUVyswKzJ5Z0NaRW5sUHR0TGI1WFUyRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IisyOE5BcHV0cTRDaGFSUmJiaG1wb2c5WGlvNlVTTjB4M2I2L0RGTjRNVVZOMDJCeUlFc3FSZmFmd21UdSszRG9ud09SNkRPUFpzMXRmSHRmOFZxMWhnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OTgsImFkdlNlY3JldEtleSI6IkZiVEFwTm5pZlFRZWpLcXFuc2VQVWM1em8wZ3BkVUs0N2FkdkZ6S3hZQmM9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IkxRMkU2OVI1IiwibWUiOnsiaWQiOiI5NDc3NDM2NzYzOToxN0BzLndoYXRzYXBwLm5ldCIsImxpZCI6IjIxOTcxMzQ4MTIxNjEzNzoxN0BsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ01tSDVjb0JFUFhtaDhVR0dEY2dBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InFOeHFCYUVFUkhVd0hRay9sckMyR1FDenJadWNwNTlkaWJNeFFVdHArRG89IiwiYWNjb3VudFNpZ25hdHVyZSI6IlJyR1FlWUprOVRoNnpFQTlFWVZvV2l3bTduVjEreGlUMnBudkU4VjZHVmtzaThrbVBnUWNoRzZySEdoOHgwVHBycE5ONEYrSm9wUkJYLy9jOG1yQ0RnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiIxR2pQZ0NrYS8vUkRlb0ExbTV2T1VJQ2p0aWlYMzR4VS9TWi9CWVNtcCt0N29XWGprVXYzeGtNakI4dkNDdW84QVdVUWF4T0JTdFlZVTZJZFlYL0Rndz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0Nzc0MzY3NjM5OjE3QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmFqY2FnV2hCRVIxTUIwSlA1YXd0aGtBczYyYm5LZWZYWW16TVVGTGFmZzYifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNCSUlBZz09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1NTQ0NDA5MCwibGFzdFByb3BIYXNoIjoiM1I5WjM5In0=",
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
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/5x29np.jpg",
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
LIVE_MSG: process.env.LIVE_MSG || "> Zinda Hun Yar ⚡",
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
