import Fastify from 'fastify'

const fastify = Fastify({
  logger: true,
})

fastify.get('/', (request, reply) => {
  reply.send({ hello: 'world' })
})

fastify.listen({ port: 3000 }, (err, address) => {
  if (err) throw err
})
