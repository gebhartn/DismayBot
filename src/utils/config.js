const value = `Hello, my name is Sphil. I am the RL and GM. Your application is received and we will review it. Thank you for your interest! We will contact you for a quick chat once we have had time to review your application.`

export default {
  token: process.env.TOKEN,
  channel: process.env.CHANNEL,
  message: ({ client }) => ({
    embed: {
      color: 3447003,
      author: {
        name: client.user.username,
        icon_url: client.user.avatarURL(),
      },
      title: `Thanks for your application!`,
      description: value,
      fields: [],
      timestamp: new Date(),
    },
  }),
}
