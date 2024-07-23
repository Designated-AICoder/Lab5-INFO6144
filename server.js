// Group 7 Members:

// 1. Hettiarachchi, Rithika Dinethmin
// 2. Batheegama Gammacharige, Kasun Nirmala

const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const fs = require("fs");
let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

var url;

url = fs.readFileSync("urls.txt", "utf8").trim();
app.use(express.static("public"));

var getJSON = ((url) => {
  return new Promise((resolve, reject) => {
    let req = new XMLHttpRequest();
    req.onload = function () {
      if (req.status === 200) {
        resolve(req.responseText);
      } else {
        reject(req.statusText);
      }
    };

    req.onerror = function () {
      reject("network error");
    };

    req.open("GET", url);
    req.send();
  });
})(url);

app.get("/", (req, res) => {
  getJSON
    .then((data) => {
      fs.writeFileSync("JSON.txt", data);
      console.log("JSON data saved to file");
      res.send("JSON data saved to file");
    })
    .catch((err) => {
      console.log(err);
      res.send(err);
    });
});

app.listen(port, () => {
  console.log(`app running on port ${port}`);
});