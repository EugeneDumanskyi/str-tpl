var brackets = {
    '{{': {opened: '\\{\\{', closed: '\\}\\}'},
    '{%': {opened: '\\{%', closed: '%\\}'},
    '[[': {opened: '\\[\\[', closed: '\\]\\]'}
};

String.prototype.tpl = function(obj, bracketType) {
    var _formatted = this;
    var _bracketType = bracketType || '{{';
    var _bracket = brackets[_bracketType] || {opened: '\\{\\{', closed: '\\}\\}'};

    for (var prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            var regexp = new RegExp(_bracket.opened + '\\s*' + prop + '(\\|(\\d+)){0,1}\\s*' + _bracket.closed, 'gi');
            _formatted = _formatted.replace(regexp,
                (function(property) {
                    return function (m, p1, p2) {
                        //console.log(arguments);
                        return !p2 || isNaN(p2) || isNaN(obj[property]) ? obj[property] : (obj[property] - 0).toFixed(p2 - 0);
                    }
            })(prop));
        }
    }

    return _formatted;
};
