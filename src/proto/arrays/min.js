import './reduce'

if (!Array.prototype.min) {
    Array.prototype.min = function() {
        return this.reduce((a, b) => {
            if (a < b) return a;
            else return b;
        });
    }
}

export default Array.prototype.min;
