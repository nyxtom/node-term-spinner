var spin = require('./');
var spinner = spin.new();
setInterval(function () {
    spinner.next();
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write([spinner.current, "Processing..."].join(" "));
}, 1000);
