'use strict'

const engine = require('./lib/engine')

const VERB = {
  '0': 'ties',
  'Rock': 'smashes',
  'Scissors': 'cut',
  'Paper': 'covers'
}

module.exports = function (a, b) {
  const result = engine(a, b)
  let S

  if (result === 0) {
    S = [a, VERB[result], b]
  } else if (result === -1) {
    S = [a, VERB[a], b]
  } else {
    S = [b, VERB[b], a]
  }

  return S.join(' ')
}
