/*!
 * gh-user-org-events | MIT (c) Shinnosuke Watanabe
 * https://github.com/shinnn/gh-user-org-events
*/
'use strict';

const arrFilter = require('arr-filter');
const ghUserEvents = require('gh-user-events');

module.exports = function ghUserOrgEvents(user, org, options) {
  if (typeof org !== 'string') {
    return Promise.reject(new TypeError(
      String(org) +
      ' is not a string. Expected a Github organization name, for example' +
      ' https://github.com/nodejs -> "nodejs"'
    ));
  }

  if (org === '') {
    return Promise.reject(new Error(
      'Expected a string of Github organization name, but received an empty string.'
    ));
  }

  options = options || {};
  options.headers = Object.assign({
    'user-agent': 'https://github.com/shinnn/github-user-org-events'
  }, options.headers);

  return ghUserEvents(user, options).then(function excludeNonOrgEvents(events) {
    return arrFilter(events, event => event.org && event.org.login === org);
  });
};
