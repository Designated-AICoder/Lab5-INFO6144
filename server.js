const express = require("express");
const fs = require("fs");
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

const app = express();
const port = process.env.PORT || 3000;

// Read URL from urls.txt
const url = fs.readFileSync("urls.txt", "utf8").trim();

// Define and invoke getJSON function (IIFE)
const getJSON = ((url) => {
  return new Promise((resolve, reject) => {
    const req = new XMLHttpRequest();
    req.onload = () => {
      if (req.status === 200) {
        resolve(req.responseText);
      } else {
        reject(req.statusText);
      }
    };

    req.onerror = () => {
      reject("Network error");
    };

    req.open("GET", url);
    req.send();
  });
})(url);

app.get("/", (req, res) => {
  getJSON
    .then((data) => {
      fs.writeFileSync("JSON.txt", data);
      const successMessage = "JSON data saved to file";
      console.log(successMessage);
      res.send(successMessage);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error retrieving JSON data: " + err);
    });
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
