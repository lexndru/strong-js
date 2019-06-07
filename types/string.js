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
 * Compare two strings.
 *
 * @param string  String    The string to compare with
 * @throws        Error     Provided argument is not a string
 * @return        Boolean   Whether the two strings are equal or not
 */
String.prototype.isEqualTo = function (string) {
  if (typeof string === 'string') {
    return string.toString() === this.valueOf()
  }
  throw new Error(`Provided argument is not a string: ${typeof string}`)
}

/**
 * Check if string is empty.
 *
 * A string with only whitespace IS NOT considered empty.
 *
 * @return        Boolean   Whether the string is empty or not
 */
String.prototype.isEmpty = function () {
  return 0 === this.valueOf().length
}

/**
 * Check if string is blank.
 *
 * A string with only whitespace IS considered blank.
 *
 * @return        Boolean   Whether the string is empty or not
 */
String.prototype.isEmpty = function () {
  return 0 === this.valueOf().trim().length
}
