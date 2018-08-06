Use the `fail` function to print an error and exit.

Usage
=====
```js
const http = require("http");
const fail = require("@zingle/fail");

// exits with 100 exit status on timeout
http
    .request("http://www.example.com/foo")
    .on("timeout", () => fail(new Error("took too long"), 100));
```
