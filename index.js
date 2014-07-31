
String.prototype.tpl = function(obj) {
    var formatted = this;

    for (var prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            var regexp = new RegExp('\\{\\{\\s*' + prop + '(\\|(\\d+)){0,1}\\s*\\}\\}', 'gi');
            formatted = formatted.replace(regexp,
                (function(property) {
                    return function (m, p1, p2) {
                        //console.log(arguments);
                        return !p2 || isNaN(p2) || isNaN(obj[property]) ? obj[property] : (obj[property] - 0).toFixed(p2 - 0);
                    }
            })(prop));
        }
    }

    return formatted;
};
