# About

TinyJSTemplate is a very simple template engine. Well, actually, not a real *engine* but more of some methods which apply replacements on a given string.

# Examples

## Simple replacement

`replacementData` can be a simple JavaScript object. Nested objects are basically supported.

```javascript
var text = 'This is a ${kind_of} test for ${target.engine}.';
var replacementData = { kind_of: 'simple', target: { id: '1', engine: 'TJST'} };
var tjstEngine = new TJST();
var replacedText = tjstEngine.replace(text, replacementData);
// result is: 'This is a simple test for TJST.'
```

## Lookup function

Instead of a JavaScript object a lookup function can be provided. The first parameter is the matched replacement name, e.g. `kind_of`, the second parameter is the replacement index, starting with `0`.

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


# Limitations

 - TinyJSTemplate used regular expressions to replace the template matches, so the text should not be too long.
 - There is no minified version (yet) because the file is currently just 2kB. If you need one, please compress the original version yourself (you can also shorten the licence header).
 - Nested/recursive replacements like `${ab.${cd}}` are not supported and due to the complexity needed to implement that I highly doubt it will be supported any time soon.

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
