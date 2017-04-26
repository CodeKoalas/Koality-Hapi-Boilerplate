import 'babel-polyfill';
import Hapi from 'hapi';
import vision from 'vision';
import inert from 'inert';
import lout from 'lout';
import routes from './routes';

const serverInit = async (port = 8000) => {
  const serverObj = new Hapi.Server();

  serverObj.connection({
    host: 'localhost',
    address: '0.0.0.0',
    port,
  });

  routes(serverObj);

  await serverObj.register([vision, inert, lout]);

  await serverObj.start();

  console.log('server running at:', serverObj.info.uri);

  return serverObj;
};

export default serverInit;
