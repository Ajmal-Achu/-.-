let fs = require('fs')
 let handler  = async (m, { conn, usedPrefix: _p }) => {
const {
    MessageType,
    Mimetype
} = require("@adiwajshing/baileys");
 const anu = {
	key : {
                          participant : '0@s.whatsapp.net',
    remoteJid: 'status@broadcast'
    
                        },
       message: {
                    orderMessage: {
                            itemCount : 2729,
                            itemCoun : 2729,
                            surface : 2729,
                            message: 'ᴍᴀᴅᴀʀᴀ.ᴜᴄʜɪʜᴀ⁴̅⁰͍³〆',
                            orderTitle: 'B',
                            thumbnail: fs.readFileSync('./icon.jpeg'), 
                            sellerJid: '0@s.whatsapp.net'
          
                          }
                        }
                      }
conn.sendMessage(m.chat, 'ᴀʟɪᴠᴇ ᴀɴɴ.....!',
MessageType.text, {quoted: anu, contextInfo:{"forwardingScore":999, "isForwarded": true}})
}


handler.help = ['ALIVE']

handler.tags = ['ᴍᴀᴅᴀʀᴀ.ᴜᴄʜɪʜᴀ⁴̅⁰͍³〆⁩']

handler.command = /^test$/i
handler.owner = false
handler.mods = false

module.exports = handler