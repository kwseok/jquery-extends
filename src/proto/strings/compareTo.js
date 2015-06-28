if (!String.prototype.compareTo) {
    String.prototype.compareTo = function(str) {
        switch (false) {
        case !(str == null):
            return 1;
        case !(this > str):
            return 1;
        case !(this < str):
            return -1;
        default:
            return 0;
        }
    };
}

export default String.prototype.compareTo;
