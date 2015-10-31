/* global
  describe
  expect
  jest
  it
*/

'use strict'

const FILE = '../'

jest.dontMock(FILE)

describe([
  'Rock, Paper, Scissors'
].join(' '), function () {
  it([
    'should return a string',
    'representing the result',
    'of a game of Rock, Paper,',
    'Scissors'
  ].join(' '), function () {
    const ƒ = require(FILE)
    const engine = require('../lib/engine')

    engine.__setMockResult(-1)

    expect(ƒ('Rock', 'Scissors'))
      .toBe('Rock smashes Scissors')

    engine.__setMockResult(1)

    expect(ƒ('Paper', 'Scissors'))
      .toBe('Scissors cut Paper')

    expect(ƒ('Rock', 'Paper'))
      .toBe('Paper covers Rock')

    engine.__setMockResult(0)

    expect(ƒ('Rock', 'Rock'))
      .toBe('Rock ties Rock')
  })
})
