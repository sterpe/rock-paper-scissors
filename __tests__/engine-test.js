/* global
  describe
  expect
  jest
  it
*/

'use strict'

const FILE = '../lib/engine'

jest.dontMock(FILE)
jest.dontMock('../lib/error')
jest.dontMock('sprintf-js')

describe([
  'engine'
].join(' '), function () {
  it([
    'should return -1',
    'if the victor of a',
    'game of Rock, Paper,',
    'Scissors was the first',
    'argument'
  ].join(' '), function () {
    const ƒ = require(FILE)

    const A = ['Rock', 'Paper', 'Scissors']
    const B = ['Scissors', 'Rock', 'Paper']

    let i = 0

    for (; i < A.length; ++i) {
      expect(ƒ(A[i], B[i])).toBe(-1)
    }
  })

  it([
    'should return 1',
    'if the victor of a',
    'game of Rock, Paper,',
    'Scissors was the second',
    'argument'
  ].join(' '), function () {
    const ƒ = require(FILE)

    const A = ['Rock', 'Paper', 'Scissors']
    const B = ['Scissors', 'Rock', 'Paper']

    let i = 0

    for (; i < A.length; ++i) {
      expect(ƒ(B[i], A[i])).toBe(1)
    }
  })

  it([
    'should return 0',
    'if there was a tie'
  ].join(' '), function () {
    const ƒ = require(FILE)

    const A = ['Rock', 'Paper', 'Scissors']

    let i = 0

    for (; i < A.length; ++i) {
      expect(ƒ(A[i], A[i])).toBe(0)
    }
  })
  it([
    'should throw an error',
    'if unknown arguments are',
    'provided for either argument'
  ].join(' '), function () {
    const ƒ = require(FILE)
    const sprintf = require.requireActual('sprintf-js')
      .sprintf
    const e = require.requireActual('../lib/error')

    const badArgument = 'foo'
    const anotherBadArgument = 'quux'
    const goodArgument = 'Rock'

    expect(function () {
      ƒ(badArgument, goodArgument)
    }).toThrow(new Error(sprintf(e, badArgument)))

    expect(function () {
      ƒ(goodArgument, badArgument)
    }).toThrow(new Error(sprintf(e, badArgument)))

    expect(function () {
      ƒ(badArgument, anotherBadArgument)
    }).toThrow(new Error(sprintf(e, badArgument)))
  })
})
