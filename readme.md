# About

TinyJSTemplate is a very simple template engine. Well, actually, not a real *engine* but more of some methods which apply replacements on a given string.

# Examples

## Simple replacement

```javascript
var text = 'This is a ${kind_of} test for ${target}.';
var replacementData = { kind_of: 'simple', target: 'TJST' };
var tjstEngine = new TJST();
var replacedText = tjstEngine.replace(text, replacementData);
// result is: 'This is a simple test for TJST.'
```

## Lookup function

```javascript
var text = 'This is a ${kind_of} test for ${target}.';
var replacementFunction = function(matchStr, index) {
    if (matchStr === 'kind_of') {
        return 'nice';
    }
    if (matchStr === 'target') {
        return 'dynamic replacement';
    }
    return null;
};
var tjstEngine = new TJST();
var replacedText = tjstEngine.replace(text, replacementFunction);
// result is: 'This is a nice test for dynamic replacement.'
```

# License

TinyJSTemplate is provided under MIT License, see http://opensource.org/licenses/MIT

The MIT License (MIT)

Copyright (c) 2015 NilsCoding

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
