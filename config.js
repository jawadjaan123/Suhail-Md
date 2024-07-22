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
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_20_30_07_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICA3OSxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMTMsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTY0LFxuICAgICAgICA5NixcbiAgICAgICAgNTUsXG4gICAgICAgIDAsXG4gICAgICAgIDEzLFxuICAgICAgICA4OSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDQ5LFxuICAgICAgICAzMyxcbiAgICAgICAgNDcsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNDcsXG4gICAgICAgIDk1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDI5LFxuICAgICAgICAxNixcbiAgICAgICAgMTQsXG4gICAgICAgIDksXG4gICAgICAgIDU3LFxuICAgICAgICA2OSxcbiAgICAgICAgMjgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNzRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDg0LFxuICAgICAgICAyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDYsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjQzLFxuICAgICAgICA0NSxcbiAgICAgICAgNzIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMzQsXG4gICAgICAgIDI2LFxuICAgICAgICAxOTcsXG4gICAgICAgIDM5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE2LFxuICAgICAgICAxMzksXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTU2LFxuICAgICAgICA1NyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMTcsXG4gICAgICAgIDExNSxcbiAgICAgICAgODYsXG4gICAgICAgIDUsXG4gICAgICAgIDc3LFxuICAgICAgICA1MCxcbiAgICAgICAgNjRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MCxcbiAgICAgICAgOTcsXG4gICAgICAgIDI1LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgODAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTEsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjQ1LFxuICAgICAgICA4MyxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTM3LFxuICAgICAgICA4MyxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTcxLFxuICAgICAgICA1LFxuICAgICAgICAyOCxcbiAgICAgICAgMTk5LFxuICAgICAgICA5OSxcbiAgICAgICAgMjE4LFxuICAgICAgICAzMSxcbiAgICAgICAgNDYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTEwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDYyLFxuICAgICAgICA4OSxcbiAgICAgICAgMzUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTE0LFxuICAgICAgICA3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjQxLFxuICAgICAgICA1NixcbiAgICAgICAgMTIwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDk1LFxuICAgICAgICAxODAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNzMsXG4gICAgICAgIDM2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDIxLFxuICAgICAgICA5LFxuICAgICAgICAxNzksXG4gICAgICAgIDUyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjUsXG4gICAgICAgIDYsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNzYsXG4gICAgICAgIDI2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjAsXG4gICAgICAgIDIxMixcbiAgICAgICAgNTMsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTI3LFxuICAgICAgICA0MyxcbiAgICAgICAgMjMwLFxuICAgICAgICA3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDMxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTYxLFxuICAgICAgICA2MyxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTI0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDQ1LFxuICAgICAgICA5MixcbiAgICAgICAgNTcsXG4gICAgICAgIDE3LFxuICAgICAgICA4OCxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNSxcbiAgICAgICAgMTQwLFxuICAgICAgICA5MixcbiAgICAgICAgNixcbiAgICAgICAgNjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIzLFxuICAgICAgICA2MCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNTksXG4gICAgICAgIDExMCxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTgxLFxuICAgICAgICAxOTksXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjQzLFxuICAgICAgICAyNCxcbiAgICAgICAgMTYsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNzksXG4gICAgICAgIDksXG4gICAgICAgIDMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjUwLFxuICAgICAgICA4NSxcbiAgICAgICAgMjEsXG4gICAgICAgIDcwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTgzLFxuICAgICAgICAzNixcbiAgICAgICAgOCxcbiAgICAgICAgOTYsXG4gICAgICAgIDY0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDcxXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI3LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDQyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM5LFxuICAgICAgICAxMjksXG4gICAgICAgIDQ1LFxuICAgICAgICAyMDksXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjA0LFxuICAgICAgICAxODgsXG4gICAgICAgIDksXG4gICAgICAgIDIzLFxuICAgICAgICAxMTIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNDEsXG4gICAgICAgIDMxLFxuICAgICAgICA1OSxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMjUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNixcbiAgICAgICAgMjEwLFxuICAgICAgICAzMSxcbiAgICAgICAgMTE2LFxuICAgICAgICA2MSxcbiAgICAgICAgNTQsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNzEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE3LFxuICAgICAgICAzOSxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMDcsXG4gICAgICAgIDY3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgODIsXG4gICAgICAgIDI1LFxuICAgICAgICAxMixcbiAgICAgICAgMjA2LFxuICAgICAgICAyMCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgODgsXG4gICAgICAgIDU5LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEwLFxuICAgICAgICAxLFxuICAgICAgICAyMDYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTcsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMixcbiAgICAgICAgMTksXG4gICAgICAgIDQ3LFxuICAgICAgICAyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA2MSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJDSVk5M05TdmJXSTFnZGE0QllGUzJadUtmOVBMcStHeHBCM0lBRGJnU1dFPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJhOGFDWk16WlFUaTVQUnVYYnBMRlR3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjU4YzBlNjY2LWQ2MDktNGU0OS04YjdkLTVkMDA5NjAwZTkxOFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA0MCxcbiAgICAgIDc3LFxuICAgICAgMTQsXG4gICAgICAxMjgsXG4gICAgICAxODEsXG4gICAgICA4NSxcbiAgICAgIDEzOCxcbiAgICAgIDEyMyxcbiAgICAgIDE0MCxcbiAgICAgIDMzLFxuICAgICAgOTEsXG4gICAgICAxNTUsXG4gICAgICA5NCxcbiAgICAgIDQyLFxuICAgICAgMjAzLFxuICAgICAgNDUsXG4gICAgICAxNTksXG4gICAgICAxNTAsXG4gICAgICAxNzgsXG4gICAgICAxMzNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTUzLFxuICAgICAgOSxcbiAgICAgIDY1LFxuICAgICAgMTgxLFxuICAgICAgNjcsXG4gICAgICAxNDAsXG4gICAgICAyNTUsXG4gICAgICAyOCxcbiAgICAgIDEzMixcbiAgICAgIDE0MixcbiAgICAgIDc4LFxuICAgICAgMTgxLFxuICAgICAgMjQ4LFxuICAgICAgMjQ2LFxuICAgICAgMjA1LFxuICAgICAgMTY5LFxuICAgICAgMjEsXG4gICAgICAyMjEsXG4gICAgICA5LFxuICAgICAgMTkzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkJSNlFUU1BMXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMxMDI3OTI1NjA6NDRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjg0Nzg2NjgxNDQ4OTE6NDRAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTUhGenc0UStJTDd0QVlZQXlBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJRSWJ5aFJhS0JuSlAyM3JJbFA3WVZVSUt5azFmdUVkcVc2NXU5UUhNWDBrPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlFhT1h5QjR3cTRoUEp3a1lCVWRKVUVaVjRxei9qS0E0dEpXdmJhZEVTQzVMWFZPOTZZTU1laUtEbENNcnhjZEtoSEthNk11U1NDbGYyS3lWajc1bkJRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImlCVUZmVDhuN0pyZDdKVEd1TjNPOFhmL0VaMWcvZm1UQTFkbzVKeFhEcE51SUFwa0Y1Zk9heU83NFV4OEdONXNTcHhlU1UvdldMQWdhYlFsKzY4OUNBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzEwMjc5MjU2MDo0NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICA4NSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA3M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxNjgwMjUxLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQmVtXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFCZW0uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIvRC9wMDc0T3ZFVkVEZFNqb3ZDbDA1UEpjeUo0d29mM1ZBQnhNZFJvQ2c4PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjMwNjYzMzYxLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjE0MTU2NjEyNzRcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



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
