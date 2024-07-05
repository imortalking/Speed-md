//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "losrios755@gmail.com";
global.location = "Njombe,Tanzania.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Dar es salaam";
global.github = process.env.GITHUB || "https://github.com/malvinking/Speed-md";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vac8SosLY6d7CAFndv3Z";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vac8SosLY6d7CAFndv3Z";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/5b5d780eac1422ed5e14e.jpg";
global.devs = "256756210243";
global.sudo = process.env.SUDO || "256756210243";
global.owner = process.env.OWNER_NUMBER || "256756210243";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://wa.me//263780166288";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNEVkVmdFYzdzRlFhbDdmNlRrcTNjR0hoOEZtT3RGWCtrRGJvR2s4dWdYTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS3QxQnl4cWMwc3BENkgwNTMzY2pQVXpoZTlRUEwxY3NTTk5jL0ZCQm9Ydz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhT3hNU0Z2Y0xVNEFGODg0S2lYWjJnTFk0YUc4YTNkTEFWZ3d6VVg1eW1rPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIybi93TEs4c0h3b1ljNnV3TjZzK3V4ZG5ZMHBKdElwaW1nYS9KV1NNdTJjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitQVkc5M0pFMSt4OXFTUlZLZ2lnemRsYmNmcG5kNGp4QkN1eFlpSVN3MEE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkxpenNabXFKbzZpUFFqWWRQVEUzV29oWWtEVE5zazRTZUlCUFhFOUVNbDg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNk9ra3JNZndXNDdnN2c4M0pDZmJpcnliVS91aDl0OEpMblVLRWpqUkVuaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVjJvVmh3SHpzVG9tcy9adFR3VUFGc29rdDVmbi9FMlBMaUJWblR4Nnp5TT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ii9BU3lmb3ZkdkJtc2VzVWJXbmN2cUVzcWFKY2tzM2ZDdXN0ZWxtRzNncDlEaVdUQjR4QUI1S013VG0yZGZZYnRZNHQ0UHNoMEhWRm50TDQ5VGZCR2hRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NzgsImFkdlNlY3JldEtleSI6IlJxMkdoRnhobFIvOFRtR0F1c05pamNJV2E5YXZ5ZWdCQ2ZpYUlHYWMxUkE9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjYzNzgwMTY2Mjg4QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjcyMEY5ODMwOEM2MjQ4MkQ2QjQ2RTMzQ0I5RDg4ODQyIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MTk0NzM2Njh9LHsia2V5Ijp7InJlbW90ZUppZCI6IjI2Mzc4MDE2NjI4OEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI5NEQ4QUY1RTM2RTIzMzFCMkVDRkJFQjg1OUU3NERBQSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzE5NDczNjY5fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJhc2tpb0lCS1JQNjN0MjJpNVF0OUhnIiwicGhvbmVJZCI6ImQ3MjU4ZDJmLWY0YzEtNDA0ZC04OTRmLWUyYjdlZmIxYmM2MCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJoVnZZWFN6SW5uNGJnS3pMK3lOaXFMaFozZm89In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic3N3R2VjeEdRWXpXQkhHdXJjZDF1cVpCQitFPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkE1MVJBMlpXIiwibWUiOnsiaWQiOiIyNjM3ODAxNjYyODg6MjFAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi4bSN4bSAyp/htKDJqsm0LeG0jeG0hSJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSWYveER3UTlLdjBzd1lZQVNBQUtBQT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiNWg5d0IxWXllV3U2VnJvMnBjeVJlYUZIYi9SRTMxcTluTjNJTDlWcU0xdz0iLCJhY2NvdW50U2lnbmF0dXJlIjoibkJ4UnlUdUc0MTU4SFROKzVUdGJwR3lwc2NkbWREMWdhWmpWTnQzdXZPNFlFcy90SDVTN3Y3eHE4V3p0bkEvNkdObDZVTmF4QWN1MHBxUnZZcTcwQkE9PSIsImRldmljZVNpZ25hdHVyZSI6ImNWNWgwQlk2R2h2WVpHUjZyS3Y5N3hGUmVkQjVrNVZkVU1EbDRpdDhYcmJiZTQ0T3VUd3RJUTlJM283UDdxVjVwY2JkOHF1NzFOUVNrS0JHY2FEMmlBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjYzNzgwMTY2Mjg4OjIxQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmVZZmNBZFdNbmxydWxhNk5xWE1rWG1oUjIvMFJOOWF2WnpkeUMvVmFqTmMifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MTk0NzM2NjQsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBS2ExIn0="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-ꜱᴩᴇᴇᴅ-ᴍᴅ ╠════ need support then ☞ https://wa.me//256756210243 ═════╣",
  author: process.env.PACK_AUTHER || "ꜱᴩᴇᴇᴅ",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "ꜱᴩᴇᴇᴅ-ᴍᴅ",
  ownername: process.env.OWNER_NAME || "ᴍᴀʟᴠɪɴ ᴋɪɴɢ",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "ꜱᴩᴇᴇᴅ-ᴍᴅ").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
