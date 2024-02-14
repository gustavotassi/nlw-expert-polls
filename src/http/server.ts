import Fastify from 'fastify'
import { createPoll } from './routes/create-poll'
import { getPoll } from './routes/get-poll'
import { voteOnPoll } from './routes/vote-on-poll'
import { pollResults } from './ws/poll-results'
import cookie from '@fastify/cookie'
import websocket from '@fastify/websocket'

const app = Fastify()

app.register(cookie, {
  secret: 'polls-app-nlw',
  hook: 'onRequest',
})

app.register(websocket)

app.register(getPoll)
app.register(createPoll)
app.register(voteOnPoll)

app.register(pollResults)

app.listen({ port: 3333 }).then(() => {
  console.log('HTTP server running')
})
