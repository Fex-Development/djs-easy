const fetch = require("node-fetch")

class Chatbot {

  constructor(options = { name: "ChatBot" }) {
    this.name = options.name ? options.name : "ChatBot"
  }

  async chat(message) {
    if(!message) {
      throw new Error("[Chatbot] Please provide some message to reply too!")
    }

    let json = await fetch(`https://api.affiliateplus.xyz/api/chatbot?message=${encodeURIComponent(message)}&botname=${encodeURIComponent(this.name)}`)
    let chat = await json.json()

    if(!chat) {
      throw new Error("[Chatbot] API Unavailable. Try again later.")
    }

    return chat.message
  }

}

module.exports = Chatbot