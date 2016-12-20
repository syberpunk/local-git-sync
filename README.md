local-git-sync
============

[![Build Status](https://travis-ci.org/kurttheviking/git-rev-sync.svg?branch=master)](https://travis-ci.org/kurttheviking/git-rev-sync.svg?branch=master)

Synchronously get the current git commit hash, tag, count, branch, log or commit message. Forked from [git-rev-sync](https://github.com/kurttheviking/git-rev-sync).


## Example

```js
var git = require('local-git-sync');

console.log(git.short());
// 75bf4ee

console.log(git.long());
// 75bf4eea9aa1a7fd6505d0d0aa43105feafa92ef

console.log(git.branch());
// master

console.log(git.log());
// commit 393b24d4ae3d944eb6af2008246e4e22c37e0f2d
// Author: syberpunk <syberpunk@email.com>
// Date:   Mon Dec 19 17:02:46 2016 +0200
//
//  //GIT LOG TEST

console.log('git.log() => ' + git.log());
// e.g. 
// {
//   id: 393b24d4ae3d944eb6af2008246e4e22c37e0f2d,
//   revision: 1359,
//   date: Mon Dec 19 17:02:46 2016 +0200,
//   author: syberpunk,
//   message: //GIT LOG TEST
// }

```

You can also run these examples via: `npm run examples`


## Install

`npm install local-git-sync --save`


## API

``` js
var git = require('local-git-sync');
```

#### `git.short([filePath])` &rarr; &lt;String&gt;

return the result of `git rev-parse --short HEAD`; optional `filePath` parameter can be used to run the command against a repo outside the current working directory

#### `git.long([filePath])` &rarr; &lt;String&gt;

return the result of `git rev-parse HEAD`; optional `filePath` parameter can be used to run the command against a repo outside the current working directory

#### `git.branch([filePath])` &rarr; &lt;String&gt;

return the current branch; optional `filePath` parameter can be used to run the command against a repo outside the current working directory

#### `git.tag([markDirty])` &rarr; &lt;String&gt;

return the current tag and mark as dirty if markDirty is truthful; this method will fail if the `git` command is not found in your `PATH`

#### `git.isTagDirty()` &rarr; &lt;Boolean&gt;

returns true if the current tag is dirty; this method will fail if the `git` command is not found in your `PATH`

#### `git.message()` &rarr; &lt;String&gt;

return the current commit message; this method will fail if the `git` command is not found in your `PATH`

#### `git.count()` &rarr; &lt;Number&gt;

return the count of commits across all branches; this method will fail if the `git` command is not found in your `PATH`

#### `git.log()` &rarr; &lt;String&gt;

return a list of all commits; this method will fail if the `git` command is not found in your `PATH`

#### `git.latestCommit()` &rarr; &lt;String&gt;

return the last commit as a javascript object; this method will fail if the `git` command is not found in your `PATH`

## License

[MIT](https://github.com/kurttheviking/git-rev-sync/blob/master/LICENSE)


