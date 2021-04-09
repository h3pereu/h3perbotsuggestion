module.exports = {
  name: 'suggestion',
  description: 'creates a suggestion!',
  execute(message, args, client, discord){
      const channel = message.guild.channels.cache.find(c => c.name === 'suggestion');
      if(!channel) return message.channel.send('suggestions channel does not exist!');

      let messageArgs = args.join(' ');
      const embed = new discord.MessageEmbed()
      .setColor('FADF2E')
      .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
      .setDescription(messageArgs);

      channel.send(embed).then((msg) =>{
          msg.react('👍');
          msg.react('👎');
          message.delete();
      }).catch((err)=>{
          throw err;
      });
  }
}