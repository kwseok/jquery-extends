import '../arrays/isArray'

if (!String.prototype.format) {
    String.prototype.format = function() {
        return this.replace(/(''|'\{|\}'|\{(\w+)\})/g, (function(args) {
            return function($0, $1, $2) {
                switch ($1) {
                case "''":
                    return "'";
                case "'{":
                    return '{';
                case "}'":
                    return '}';
                default:
                    return (!/^\d+$/g.test($2) ? args[0] || {} : Array.isArray(args[0]) ? args[0] : args)[$2];
                }
            };
        })(arguments));
    }
}

export default String.prototype.format;
