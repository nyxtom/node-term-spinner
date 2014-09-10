# node-term-spinner

Terminal spinner for node.js (port of visionmedia's [go-spin](https://github.com/visionmedia/go-spin), since I like the spinners by default)

## Getting Started
Install the module with: `npm install node-term-spinner`

```javascript
var spin = require('node-term-spinner');
var spinner = spin.new();
setInterval(function () {
	spinner.next();
	process.stdout.clearLine();
	process.stdout.cursorTo(0);
	process.stdout.write([spinner.current, "Processing..."].join(" "));
}, 1000);
```
