import { Client } from 'discord.js'
import { logger, config } from '../utils'

export const client = new Client()

client.on(`ready`, () => {
  logger.info(`Listening for ${client.users.cache.size} users`)
  client.user.setActivity(`This guild is a prison`)
})

client.on(`message`, async msg => {
  if (msg.author.bot) return
  if (!msg.member.roles.cache.size === 1) return

  if (msg.channel.id.toString() === config.channel) {
    try {
      await msg.author.send(config.message({ client }))
    } catch (e) {
      logger.warn(e)
    }
  }
})

export default client
