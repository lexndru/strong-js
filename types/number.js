// Copyright (c) 2019 Alexandru Catrina
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.
'use strict'

/**
 * Test if two numbers are equal.
 *
 * @param number  Number    The number to test
 * @throws        Error     Provided argument is not a number
 * @return        Boolean   Whether the two numbers are equal or not
 */
Number.prototype.isEqualTo = function (number) {
  if (typeof number === 'number') {
    return number === this.valueOf()
  }
  throw new Error(`Provided argument is not a number: ${typeof number}`)
}

/**
 * Compare two numbers.
 *
 * @param number  Number    The number to compare with
 * @throws        Error     Provided argument is not a number
 * @return        Integer   The comparation result as -1 (lt), 0 (eq) or 1 (gt)
 */
Number.prototype.compareTo = function (number) {
  if (typeof number === 'number') {
    if (this.valueOf() === number) {
      return 0
    } else if (this.valueOf() > number) {
      return 1
    } else if (this.valueOf() < number) {
      return -1
    }
  }
  throw new Error(`Provided argument is not a number: ${typeof number}`)
}
