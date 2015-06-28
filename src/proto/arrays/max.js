import './reduce'

if (!Array.prototype.max) {
    Array.prototype.max = function() {
        return this.reduce((a, b) => {
            if (a > b) return a;
            else return b
        });
    }
}

export default Array.prototype.max;
