'use strict';

if (!String.prototype.antStylePathToRegex) {
    /**
     * @return {RegExp}
     */
    String.prototype.antStylePathToRegex = function() {
        if (this.length === 0) {
            throw new RangeError("Path must not be empty.");
        }
        let path = this.replace(/\/{2,}/g, '/').replace(/[-[\]{}()+.,\\^$|#\s]/g, '\\$&');
        let pattern = path.replace(/((\/?\*\*)|(\/?\*)|(\?)|(\/))/g, ($0) => {
            switch ($0) {
            case '/**': return '(?:/{1,}.*)?';
            case '**': return '.*';
            case '/*': return '(?:/{1,}[^/]*)?';
            case '*': return '[^/]*';
            case '?': return '[^/]';
            case '/': return '/{1,}';
            }
        });
        return new RegExp('^(' + pattern + ')$');
    };
}
if (!String.prototype.a) {
    String.prototype.a = String.prototype.antStylePathToRegex;
}

export default String.prototype.antStylePathToRegex;
