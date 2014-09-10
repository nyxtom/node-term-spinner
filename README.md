# spin.js [![Build Status](https://secure.travis-ci.org/nyxtom/spin.js.png?branch=master)](http://travis-ci.org/nyxtom/spin.js)

Terminal spinner for node.js (port of visionmedia's [go-spin](https://github.com/visionmedia/go-spin), since I like the spinners by default)

## Getting Started
Install the module with: `npm install spin.js`

```javascript
var spin = require('spin.js');
var spinner = spin.new();
setInterval(function () {
	spinner.next();
	process.stdout.clearLine();
	process.stdout.cursorTo(0);
	process.stdout.write([spinner.current, "Processing..."].join(" "));
}, 1000);
```
