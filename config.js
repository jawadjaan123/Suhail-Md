const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𝙺𝙷𝙴𝙼𝙸" 


global.devs = "2348063961342" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348063961342";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/94c5a65a45e7a5afec68c.mp4" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_04_07_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDMwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjU1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDYzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTYzLFxuICAgICAgICA4NSxcbiAgICAgICAgMTczLFxuICAgICAgICA3MyxcbiAgICAgICAgMTk5LFxuICAgICAgICAyNDIsXG4gICAgICAgIDQyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTE0LFxuICAgICAgICAzMSxcbiAgICAgICAgNTksXG4gICAgICAgIDExOSxcbiAgICAgICAgMTAyLFxuICAgICAgICA4MCxcbiAgICAgICAgMzMsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxODEsXG4gICAgICAgIDI0LFxuICAgICAgICA4MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjksXG4gICAgICAgIDEwNixcbiAgICAgICAgMTE5LFxuICAgICAgICAxODksXG4gICAgICAgIDExMixcbiAgICAgICAgODksXG4gICAgICAgIDUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDQyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNjMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgOTQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgOTcsXG4gICAgICAgIDc2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTMzLFxuICAgICAgICA1NixcbiAgICAgICAgMTYxLFxuICAgICAgICAyM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMyxcbiAgICAgICAgMTMwLFxuICAgICAgICAzOSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxOCxcbiAgICAgICAgMzMsXG4gICAgICAgIDExMyxcbiAgICAgICAgNCxcbiAgICAgICAgNTYsXG4gICAgICAgIDE0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNjYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxODcsXG4gICAgICAgIDEyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDI0NixcbiAgICAgICAgNTIsXG4gICAgICAgIDkyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDYwLFxuICAgICAgICAxMSxcbiAgICAgICAgMzAsXG4gICAgICAgIDkyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjAxLFxuICAgICAgICA4MyxcbiAgICAgICAgMTE4LFxuICAgICAgICAyNCxcbiAgICAgICAgMTQzLFxuICAgICAgICA2NCxcbiAgICAgICAgMTEsXG4gICAgICAgIDExMixcbiAgICAgICAgMTY4LFxuICAgICAgICAzNSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNjksXG4gICAgICAgIDU2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIyLFxuICAgICAgICAyNSxcbiAgICAgICAgMjIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMzksXG4gICAgICAgIDQ5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDUzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDQ1LFxuICAgICAgICA5M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDk2LFxuICAgICAgICA5MCxcbiAgICAgICAgMjQzLFxuICAgICAgICA3MCxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMTksXG4gICAgICAgIDY5LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgOTEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTM5LFxuICAgICAgICA5OCxcbiAgICAgICAgMTEyLFxuICAgICAgICA5MixcbiAgICAgICAgNDksXG4gICAgICAgIDQ0LFxuICAgICAgICAxODAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNjIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNzYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDEyMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDUsXG4gICAgICAgIDU5LFxuICAgICAgICAxNzMsXG4gICAgICAgIDYzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDEzNixcbiAgICAgICAgNDIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjYsXG4gICAgICAgIDI1MixcbiAgICAgICAgNTUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgOTIsXG4gICAgICAgIDMzLFxuICAgICAgICA3MyxcbiAgICAgICAgMTI2LFxuICAgICAgICAxODgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTgyLFxuICAgICAgICAyOCxcbiAgICAgICAgMjYsXG4gICAgICAgIDUzLFxuICAgICAgICAxMTIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNjEsXG4gICAgICAgIDEzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDIwMixcbiAgICAgICAgODAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgOTQsXG4gICAgICAgIDUzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICA5N1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTEzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDg3LFxuICAgICAgICA1LFxuICAgICAgICA0OCxcbiAgICAgICAgOTUsXG4gICAgICAgIDUyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgOCxcbiAgICAgICAgMjAsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNDcsXG4gICAgICAgIDEsXG4gICAgICAgIDExNSxcbiAgICAgICAgNDMsXG4gICAgICAgIDE5MixcbiAgICAgICAgNDgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMCxcbiAgICAgICAgMTUyLFxuICAgICAgICA5NSxcbiAgICAgICAgMTcyLFxuICAgICAgICA3NixcbiAgICAgICAgMjAzLFxuICAgICAgICA0NixcbiAgICAgICAgMTk0LFxuICAgICAgICAxOTksXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDI1LFxuICAgICAgICAzMixcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMTcsXG4gICAgICAgIDc0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTgzLFxuICAgICAgICA4MixcbiAgICAgICAgMTIsXG4gICAgICAgIDExLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDM5LFxuICAgICAgICA0NSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDY2LFxuICAgICAgICAzNixcbiAgICAgICAgMTMyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNDEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiK29qVDBCTDZDRndXcXlkK3VjZXlMQUpoWmxJRkVxRnR1Qk1iUitDeENxbz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwidVJiWHlGalVRdTZKMmdsYUZ0TC1fZ1wiLFxuICBcInBob25lSWRcIjogXCI2ZDZiNGZkYS0yZTg0LTQ4MzMtOTY1Yy0zZWJiMDUwM2JmNGRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjQyLFxuICAgICAgMTg2LFxuICAgICAgMTIsXG4gICAgICAyMjMsXG4gICAgICAyNDAsXG4gICAgICA1MixcbiAgICAgIDcxLFxuICAgICAgMTQ3LFxuICAgICAgMjM2LFxuICAgICAgMjUxLFxuICAgICAgMTQwLFxuICAgICAgMTA3LFxuICAgICAgMTIyLFxuICAgICAgMjI5LFxuICAgICAgMjM0LFxuICAgICAgMTIwLFxuICAgICAgMjAxLFxuICAgICAgMjIxLFxuICAgICAgMjEyLFxuICAgICAgMjlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEyNixcbiAgICAgIDI0LFxuICAgICAgMTY5LFxuICAgICAgMTQzLFxuICAgICAgMjA0LFxuICAgICAgMTY2LFxuICAgICAgMTgxLFxuICAgICAgMjMsXG4gICAgICAxMjQsXG4gICAgICAyNTMsXG4gICAgICAyMDUsXG4gICAgICAyMjIsXG4gICAgICAyNDQsXG4gICAgICAxNyxcbiAgICAgIDE3MixcbiAgICAgIDEzMSxcbiAgICAgIDE2NCxcbiAgICAgIDI0NixcbiAgICAgIDIzNCxcbiAgICAgIDM3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUG5xMVBzSEVPL04rYlFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJxUWhkcVcrb3VxSklaM1RxYVBOcGliZGVuNzNzOEh2OXBwcktXT1c0VFFNPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImszSlUxbFd4RlVPNU1Kb0J0NFBUVGNWd3JWNjRYRXlsZllYNTJFMDBNYjU3SlIwMVhadmVNaGNta0wwc1JkVTRRSkZ6THN1UG0zS25CRTZibmVVdURBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlNhMTRkeW5KUkNwTjNMSEMwdWxFMUZwWlFvNyszVmhrZC9PYjhXckRFVTc3dHVjNEdFcUVyYnd0MSs2OTVoSjJmbWlVMWprQjdHVTVJUmxwTmZueGpBPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODA2Mzk2MTM0Mjo2OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTc1Njk0NTI5MjEyNjQ5OjY5QGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODA2Mzk2MTM0Mjo2OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTY1NzA3NVxufSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ",",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𝓚𝓗𝓔𝓜𝓘 』```", //
 
  author : process.env.PACK_AUTHER|| "𝙆𝙃𝙀𝙈𝙄",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "꧁✬◦°⋆⋆°◦. 𝒦ℋℰℳℐ ◦°⋆⋆°◦✬꧂",
  ownername:process.env.OWNER_NAME|| "𝑲𝑯𝑬𝑴𝑰ᴳʳᵉʸ",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "𒋝𒇲𒀼𒌨"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
