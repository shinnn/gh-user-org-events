'use strict';

const ghUserOrgEvents = require('.');
const test = require('tape');

process.env.GITHUB_TOKEN = '';

test('ghUserOrgEvents()', t => {
  t.plan(5);

  t.strictEqual(ghUserOrgEvents.name, 'ghUserOrgEvents', 'should have a function name.');

  ghUserOrgEvents('rvagg', 'nodejs', {token: process.env.TOKEN_FOR_TEST}).then(pushes => {
    t.deepEqual(
      pushes.map(event => event.org.login),
      new Array(pushes.length).fill('nodejs'),
      'should get the specific organization based events.'
    );
  }).catch(t.fail);

  ghUserOrgEvents('shinnn', 1).then(t.fail, err => {
    t.strictEqual(
      err.message,
      '1 is not a string. Expected a Github organization name, for example https://github.com/nodejs -> "nodejs"',
      'should be rejected when the organization name is not a string.'
    );
  }).catch(t.fail);

  ghUserOrgEvents('shinnn', '').then(t.fail, err => {
    t.strictEqual(
      err.message,
      'Expected a string of Github organization name, but received an empty string.',
      'should be rejected when the organization name is an empty string.'
    );
  }).catch(t.fail);

  ghUserOrgEvents('linus', 'npm', {token: process.env.TOKEN_FOR_TEST}).then(pushes => {
    t.deepEqual(
      pushes,
      [],
      'should be fulfilled with an empty array when the account do nothing recently.'
    );
  }).catch(t.fail);
});
