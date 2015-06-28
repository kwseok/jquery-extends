if (!String.prototype.antStylePathToRegex) {
    /**
     * @param {String} path the ant style path string
     * @return {RegExp}
     */
    String.prototype.antStylePathToRegex = function(path) {
        if (typeof path !== 'string') {
            throw new TypeError("Path must be string type : " + path);
        }
        if (!(path.length > 0)) {
            throw new RangeError("Path must not be empty.");
        }
        path = path.replace(/\/{2,}/g, '/');
        path = path.replace(/[-[\]{}()+.,\\^$|#\s]/g, '\\$&');
        let pattern = path.replace(/((\/?\*\*)|(\/?\*)|(\?)|(\/))/g, function($0) {
            switch ($0) {
            case '/**':
                return '(?:/{1,}.*)?';
            case '**':
                return '.*';
            case '/*':
                return '(?:/{1,}[^/]*)?';
            case '*':
                return '[^/]*';
            case '?':
                return '[^/]';
            case '/':
                return '/{1,}';
            }
        });
        return new RegExp('^(' + pattern + ')$');
    };
}
if (!String.prototype.a) {
    String.prototype.a = String.prototype.antStylePathToRegex;
}

export default String.prototype.antStylePathToRegex;
