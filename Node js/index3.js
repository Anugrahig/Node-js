const fs = require("fs");

// Read file
/*
fs.readFile("./test.txt", "utf-8", (err, data) => {
  if (err) {
    console.error();
  }
  console.log(data);
});
*/

// Create file
/*
fs.writeFile(".new.txt", "This is new file crated by node", (err) => {
  if (err) {
    console.log(err);
  }
  console.log("File Crated");
});
*/
/*
fs.appendFile(".new1.txt", "This is new file crated by node /n", (err) => {
  if (err) {
    console.log(err);
  }
  console.log("File Crated");
});
*/

// Rename Files
/*
fs.rename("test.txt", "sample.txt", (err) => {
  if (err) {
    console.log(err);
  }
  console.log("File Renamed");
});

*/

//Delete Files
/*
fs.unlink("./.new1.txt", (err) => {
  if (err) {
    console.log(err);
  }
  console.log("File Deleted");
});
*/
