/* global
  jest
*/

'use strict'

const engineMock = jest.genMockFromModule('../engine')

let result

function __setMockResult (x) {
  result = x
}

engineMock.mockImplementation(function () {
  return result
})

engineMock.__setMockResult = __setMockResult

module.exports = engineMock
