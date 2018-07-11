const { ServiceBroker } = require('moleculer');

const broker = new ServiceBroker({
  logLevel: 'info',
  namespace: 'stream-test',
  transporter: 'amqp://localhost:5672',
});

broker.start()
  .then(() => broker.repl());