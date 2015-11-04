'use strict';

if (!String.prototype.formatVariables) {
    /**
     * @param {*} arguments
     * @returns {Array<string>}
     */
    String.prototype.formatVariables = function() {
        let regex = /(''|'\{|\}'|\{(\w+)\})/g;
        let variables = [];
        let matches;
        while (matches = regex.exec(this)) {
            let match = matches[0];
            if (match !== "''" && match !== "'{" && match !== "}'") {
                variables.push(matches[2]);
            }
        }
        return variables;
    };
}

export default String.prototype.formatVariables;
