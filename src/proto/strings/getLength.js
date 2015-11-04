'use strict';

import '../arrays/contains'

if (!String.prototype.getLength) {
    /**
     * @param {boolean|number} [checkbyte] check byte length if true. (default is false)
     * @return {number}
     */
    String.prototype.getLength = function(checkbyte) {
        let argIndex = 0;
        let argCurr = () => arguments[argIndex];
        let argShift = () => arguments[argIndex++];

        checkbyte = ['boolean', 'number'].contains(typeof argCurr()) ? argShift() : false;
        if (checkbyte === false) return this.length;

        let length = 0;
        for (let i = 0; i < this.length; i++) {
            let c = this.charCodeAt(i);
            switch (false) {
            case !(c <= 0x00007F):
                length += 1;
                break;
            case !(typeof checkbyte === 'number' && checkbyte > 0):
                length += checkbyte;
                break;
            case !(c <= 0x0007FF):
                length += 2;
                break;
            case !(c <= 0x00FFFF):
                length += 3;
                break;
            default:
                length += 4;
            }
        }
        return length;
    };
}

export default String.prototype.getLength;
