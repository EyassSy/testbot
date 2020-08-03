module.exports = {
    name: "support",
    category: "support",
    run: async (client, message, args) => {

bot.on("message", msg => {
    if (msg.content.startsWith(prefix + "support")) {
      msg.channel.send("soon: الرابط الخاص لسيرفر الدعم الفني");
    }
  });
}
}