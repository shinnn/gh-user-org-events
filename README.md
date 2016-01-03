# gh-user-org-events

[![NPM version](https://img.shields.io/npm/v/gh-user-org-events.svg)](https://www.npmjs.com/package/gh-user-org-events)
[![Build Status](https://travis-ci.org/shinnn/gh-user-org-events.svg?branch=master)](https://travis-ci.org/shinnn/gh-user-org-events)
[![Coverage Status](https://img.shields.io/coveralls/shinnn/gh-user-org-events.svg)](https://coveralls.io/github/shinnn/is-gist-starred?branch=master)
[![Dependency Status](https://david-dm.org/shinnn/gh-user-org-events.svg)](https://david-dm.org/shinnn/gh-user-org-events)
[![devDependency Status](https://david-dm.org/shinnn/gh-user-org-events/dev-status.svg)](https://david-dm.org/shinnn/gh-user-org-events#info=devDependencies)

Get the list of [events](https://developer.github.com/v3/activity/events/#events) related to the specific [Github](https://github.com/) [organization](https://help.github.com/articles/creating-a-new-organization-account/) performed by a user

```javascript
const ghUserOrgEvents = require('gh-user-org-events');

ghUserOrgEvents('shinnn', 'imagemin', orgEvents => console.log(orgEvents));
```

```javascript
[
  {
    id: '3494270483',
    type: 'IssueCommentEvent',
    actor: {login: 'shinnn', ...},
    repo: {id: 19068515, name: 'imagemin/imagemin-pngquant', ...},
    payload: {action: 'created', issue: {...}, ...},
    public: true,
    created_at: '2016-01-05T09:32:57Z',
    org: {
      id: 7868808,
      login: 'imagemin',
      gravatar_id: '',
      url: 'https://api.github.com/orgs/imagemin',
      avatar_url: 'https://avatars.githubusercontent.com/u/7868808?'
    }
  },
  {
    id: '3494270483',
    type: 'IssueCommentEvent',
    actor: {login: 'shinnn', ...},
    repo: {id: 19068515, name: 'imagemin/imagemin-pngquant', ...},
    payload: {action: 'created', issue: {...}, ...},
    public: true,
    created_at: '2016-01-05T09:32:57Z',
    org: {
      id: 7868808,
      login: 'imagemin',
      gravatar_id: '',
      url: 'https://api.github.com/orgs/imagemin',
      avatar_url: 'https://avatars.githubusercontent.com/u/7868808?'
    }
  },
  {
    id: '3494210472',
    type: 'PushEvent',
    actor: {login: 'shinnn', ...},
    repo: {id: 19068515, name: 'imagemin/imagemin-pngquant', ...},
    payload: {push_id: 922716391, size: 1, ...},
    public: true,
    created_at: '2016-01-05T09:11:21Z',
    org: {
      id: 7868808,
      login: 'imagemin',
      gravatar_id: '',
      url: 'https://api.github.com/orgs/imagemin',
      avatar_url: 'https://avatars.githubusercontent.com/u/7868808?'
    }
  },
  // ...
]
```

## Installation

[Use npm.](https://docs.npmjs.com/cli/install)

```
npm install gh-user-org-events
```

## API

```javascript
const ghUserEvents = require('gh-user-org-events');
```

### ghUserOrgEvents(*user*, *org* [, *options*])

*user*: `String` (a Github username, for example <https://github.com/shinnn> → `'shinnn'`)  
*org*: `String` (a Github organization username, for example <https://github.com/nodejs> → `'nodejs'`)  
*options*: `Object` ([gh-user-events](https://github.com/shinnn/gh-user-events#api) options)  
Return: [`Promise`](http://www.ecma-international.org/ecma-262/6.0/#sec-promise-constructor) instance

It has almost the same API as [gh-user-events](https://github.com/shinnn/gh-user-events)'s, except that it only gets items related to a specific organization.

## License

Copyright (c) 2016 [Shinnosuke Watanabe](https://github.com/shinnn)

Licensed under [the MIT License](./LICENSE).
