'use strict';

var git = require('../');

console.log('git.short() => ' + git.short());
// e.g. 75bf4ee

console.log('git.long() => ' + git.long());
// e.g. 75bf4eea9aa1a7fd6505d0d0aa43105feafa92ef

console.log('git.branch() => ' + git.branch());
// e.g. master

console.log('git.log() => ' + git.log());
// e.g. 
// commit 393b24d4ae3d944eb6af2008246e4e22c37e0f2d
// Author: syberpunk <syberpunk@email.com>
// Date:   Mon Dec 19 17:02:46 2016 +0200
//
//  //GIT LOG TEST

console.log('git.latestCommit() => ' + git.latestCommit());
// e.g. 
// {
//   id: 393b24d4ae3d944eb6af2008246e4e22c37e0f2d,
//   revision: 1359,
//   date: Mon Dec 19 17:02:46 2016 +0200,
//   author: syberpunk,
//   message: //GIT LOG TEST
// }
