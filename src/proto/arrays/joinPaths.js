'use strict';

if (!Array.prototype.joinPaths) {
    Array.prototype.joinPaths = function() {
        let path = '';
        for (let i = 0; i < this.length; i++) {
            if (this[i]) {
                if (path.length > 0 && path.charAt(path.length - 1) !== '/')
                    path += '/';

                path += this[i].toString();
            }
        }
        return path;
    };
}

export default Array.prototype.joinPaths;
