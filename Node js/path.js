const path = require("path");

const p = "/home/tutorial/node/sample.txt";

// console.log(path.basename(p));
// console.log(path.dirname(p));
// console.log(path.extname(p));
// console.log(path.join("/home", "js", "tutorial", "index.js"));
console.log(path.parse(p));
