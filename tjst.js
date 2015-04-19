/**
 * TinyJSTemplate - a tiny JavaScript template engine
 * provided under MIT Licence
 * project home: https://github.com/NilsCoding/TinyJSTemplate
 */

function TJST() {
}

TJST.prototype.replace = function(str, data) {
    var _this = this;
    if ((str == null) || (str.length == 0) || (data == null)) {
        return str;
    }
    var tmpStr = str;
    var replaceIndex = 0;
    tmpStr = tmpStr.replace(/\${(.*?)}/g, function(completeMatch, p1) {
        var resolvedPart = _this._resolveMatch(p1, data, replaceIndex++);
        if (resolvedPart != null) {
            return resolvedPart;
        } else {
            return '';
        }
    });
    return tmpStr;
}

TJST.prototype._resolveMatch = function(matchStr, data, replaceIndex) {
    if ((matchStr == null) || (matchStr.length == 0)) {
        return null;
    }
    if (data == null) {
        return null;
    }
    if (typeof(data) === 'function') {
        var resolved = data.call(this, matchStr, replaceIndex);       
        if (typeof(resolved) != 'string') {
            return null;
        }
        return resolved;
    }
    if (typeof(data) === 'object') {
        var resolved = matchStr.split(".").reduce(function(obj, idx) { return obj[idx] }, data);
        return resolved;
    }
    return null;
}
