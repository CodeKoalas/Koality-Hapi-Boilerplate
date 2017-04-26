export default function(server) {
  server.route({
    method: 'GET',
    path: '/',
    config: {
      auth: false,
      description: 'Hello world route',
    },
    handler(request, reply) {
      return reply('Hello World');
    },
  });
}
