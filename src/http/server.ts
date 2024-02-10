import Fastify from 'fastify'
import { createPoll } from './routes/create-poll'

const app = Fastify()

app.register(createPoll)

app.listen({ port: 3333 }).then(() => {
  console.log('HTTP server running')
})
