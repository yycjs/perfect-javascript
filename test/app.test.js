import assert from 'assert';
import request from 'request';
import app from '../lib/app';

describe('Application test', () => {

  before(done => {
    var server = app.listen('3030');
    server.on('listening', done);
  });

  it('does print hello world', done => {
    request('http://localhost:3030/public/index.html', (error, res, html) => {
      assert.ok(/Hello World/.test(html));
      done();
    });
  });

});
