import { expect } from 'code';
import Lab from 'lab';
import serverInit from '../src/server';
const lab = (exports.lab = Lab.script());

lab.experiment('Hello world module', () => {
  let options;
  let server;
  lab.before(() =>
    serverInit(7000).then(serverObj => {
      server = serverObj;
      return serverObj;
    }),
  );
  lab.beforeEach(done => {
    options = {
      method: 'GET',
      url: '/',
    };
    done();
  });
  lab.test('GET / should return "Hello world"', done => {
    server.inject(options, res => {
      expect(res.statusCode).to.equal(200);
      expect(res.payload).to.be.a.string().and.contain(['Hello', 'World']);
      done();
    });
  });
  lab.after(done => {
    server.stop();
    done();
  });
});
