'use strict'

const sprintf = require('sprintf-js').sprintf
// Rock smashes scissors
// Scissors cut paper
// Paper covers rock
const RPS = ['Rock', 'Scissors', 'Paper']
const e = require('./error')

function rightOf (i, array) {
  return i + 1 === array.length
    ? 0
    : i + 1
}

module.exports = function (a, b) {
  a = RPS.indexOf(a)
  b = RPS.indexOf(b)

  if (a === -1 || b === -1) {
    throw new Error(sprintf(e, arguments[a === -1 ? 0 : 1]))
  }

  if (a === b) {
    return 0
  } else if (b === rightOf(a, RPS)) {
    return -1
  }
  return 1
}
