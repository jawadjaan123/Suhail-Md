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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_06_01_07_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAzMSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTMsXG4gICAgICAgIDQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjE2LFxuICAgICAgICAzMixcbiAgICAgICAgMjYsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTk2LFxuICAgICAgICA2LFxuICAgICAgICA1MCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxODMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTQzLFxuICAgICAgICA0OSxcbiAgICAgICAgMjksXG4gICAgICAgIDQzLFxuICAgICAgICAzNyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMSxcbiAgICAgICAgNDYsXG4gICAgICAgIDEwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDQ1LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTEyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3OSxcbiAgICAgICAgNjUsXG4gICAgICAgIDExOSxcbiAgICAgICAgODgsXG4gICAgICAgIDU1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjE2LFxuICAgICAgICA2NSxcbiAgICAgICAgMTI5LFxuICAgICAgICA3NSxcbiAgICAgICAgMjEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNDUsXG4gICAgICAgIDI5LFxuICAgICAgICA2NSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNDksXG4gICAgICAgIDE1MSxcbiAgICAgICAgMzUsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNzYsXG4gICAgICAgIDExMixcbiAgICAgICAgNzAsXG4gICAgICAgIDEwLFxuICAgICAgICAxMTksXG4gICAgICAgIDIxNyxcbiAgICAgICAgOTgsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMzZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTYsXG4gICAgICAgIDg1LFxuICAgICAgICAzNixcbiAgICAgICAgNTQsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTUsXG4gICAgICAgIDY1LFxuICAgICAgICAxNCxcbiAgICAgICAgNzgsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTg1LFxuICAgICAgICA3OSxcbiAgICAgICAgOTksXG4gICAgICAgIDExNCxcbiAgICAgICAgMTE4LFxuICAgICAgICA5LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTE2LFxuICAgICAgICA3OSxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDI0NCxcbiAgICAgICAgOTMsXG4gICAgICAgIDUwLFxuICAgICAgICAyOCxcbiAgICAgICAgODIsXG4gICAgICAgIDUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMzIsXG4gICAgICAgIDg4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTczLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE3LFxuICAgICAgICAzOSxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMTIsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDY0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTEyLFxuICAgICAgICA4NyxcbiAgICAgICAgMjUyLFxuICAgICAgICA0NixcbiAgICAgICAgMTQ4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDY0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjE5LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTUsXG4gICAgICAgIDEwMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNTksXG4gICAgICAgIDE5NixcbiAgICAgICAgMjUxLFxuICAgICAgICA2NyxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDkzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDYxLFxuICAgICAgICA2LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTgxLFxuICAgICAgICA5NSxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIyLFxuICAgICAgICAyNyxcbiAgICAgICAgMTg0LFxuICAgICAgICAzNixcbiAgICAgICAgMTcwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjM5LFxuICAgICAgICA0NixcbiAgICAgICAgMTYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMzMsXG4gICAgICAgIDg2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4MixcbiAgICAgICAgMjM1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDEyLFxuICAgICAgICAyNDQsXG4gICAgICAgIDM3LFxuICAgICAgICAyNDUsXG4gICAgICAgIDQ3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDcxLFxuICAgICAgICA4OSxcbiAgICAgICAgMzMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgODksXG4gICAgICAgIDgyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNjksXG4gICAgICAgIDE5LFxuICAgICAgICA3NSxcbiAgICAgICAgNjEsXG4gICAgICAgIDkzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNzgsXG4gICAgICAgIDIxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDcyLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA5NlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDQ4LFxuICAgICAgICAyNSxcbiAgICAgICAgODksXG4gICAgICAgIDM5LFxuICAgICAgICAyNDUsXG4gICAgICAgIDM1LFxuICAgICAgICA3NyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDY2LFxuICAgICAgICA1NSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMzYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgOTAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTMyLFxuICAgICAgICA2LFxuICAgICAgICA4MixcbiAgICAgICAgMTA2LFxuICAgICAgICAxOTcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDQ3LFxuICAgICAgICAyNTUsXG4gICAgICAgIDI4LFxuICAgICAgICAyNyxcbiAgICAgICAgMTk0LFxuICAgICAgICA1OSxcbiAgICAgICAgMTg5LFxuICAgICAgICAyOCxcbiAgICAgICAgNDYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjE1LFxuICAgICAgICA3NCxcbiAgICAgICAgMTI3LFxuICAgICAgICA1MCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDI1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTMxLFxuICAgICAgICAxODMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTkyLFxuICAgICAgICAxODUsXG4gICAgICAgIDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDExMCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJTS1FoL0hSK0cyMlplZ2l3b0FWSllaQndTTVFTVDRiS25nSU9uZHI0RjYwPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJLeEQ2UGpsMVFHdTNLMXZrbDNDTThnXCIsXG4gIFwicGhvbmVJZFwiOiBcImY3Zjc0YWRlLTc3ODMtNDNiOC05YTZjLWM2NDhjMjBlOTUwNVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNzAsXG4gICAgICA3NSxcbiAgICAgIDI0MyxcbiAgICAgIDY4LFxuICAgICAgMjcsXG4gICAgICAxMDksXG4gICAgICAyMzcsXG4gICAgICAzOSxcbiAgICAgIDI1NCxcbiAgICAgIDE2LFxuICAgICAgMTUsXG4gICAgICAxMDIsXG4gICAgICAzLFxuICAgICAgODgsXG4gICAgICA3LFxuICAgICAgMTc3LFxuICAgICAgMjI5LFxuICAgICAgMjU1LFxuICAgICAgMyxcbiAgICAgIDEwM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAzNSxcbiAgICAgIDIwNixcbiAgICAgIDExLFxuICAgICAgNDIsXG4gICAgICA2LFxuICAgICAgODgsXG4gICAgICAyNyxcbiAgICAgIDExMSxcbiAgICAgIDE2MyxcbiAgICAgIDIxNyxcbiAgICAgIDE5NyxcbiAgICAgIDE2MixcbiAgICAgIDQwLFxuICAgICAgMjAxLFxuICAgICAgMjE2LFxuICAgICAgMjE3LFxuICAgICAgNDksXG4gICAgICAxNDEsXG4gICAgICAxNTEsXG4gICAgICAxNjRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiS1A5MlBaTVFcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzAyMzkzOTg1Mzo2MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIs6eIPCdmY/MpPCdmZ0n2Lkg8J2Zhc2i8J2YvPCdmZLwnZi8zaLwnZi/ICBcXG4gIFxcblxcbiBcXG4gIFxcblxcbiAgIFxcblxcbiAgXFxuXFxuXFxuXFxuIFxcblxcbiBcXG4gIFxcblxcbiBcXG4gIFxcblxcbiAgXFxuXFxuXFxuXFxuICBcXG4gIFxcblxcbiBcXG5cXG4gIFxcbiDwlqSNXCIsXG4gICAgXCJsaWRcIjogXCIyMzMyODExODIyNDkxMzg6NjFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT3o1aXRFRkVKZnI5N1FHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJzcVpBMGNOREI5NE8zUGppVG1sNHJyZWRNQnZBQ2NzbHlkOTF4VGJteUd3PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImc1N0RHcTBQeUlFdnYydjRSdVEzbTc4c3ZtcnlrL1dHa010bHZaTjRsdnJXdWRaSCs4NEdpZ0VDYklwKytoRGlGYVRTUUZyOXVBRVJnc2R6RzZXYkN3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInNlTjlMdk5QUldZZnBoUCtWenhCdERpTlpDbW1XcklOalZ1aEkxZ2VUQ25UV2NKQTFDc1laVlJLNU5vYUhNeGxRY0NNNGZsa0tOSzZWTjllQ09udkJnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzAyMzkzOTg1Mzo2MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICA5LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxMDhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTYyODA1OSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUk2S1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSTZLLmpzb24iOiAie1wia2V5RGF0YVwiOlwiYW9OamozOFIxQUxXU1JuY0NoOXZVelBFb0VxbEF3eDNHRHNUVUtIMEpBRT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNTEyMjI2MDI2LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


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
