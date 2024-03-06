require("dotenv").config();
const express = require("express");
const cors = require("cors"); // cors
const { add } = require("./arithmetica");
const app = express();
app.use(cors()); // cors

// if (!process.env.PORT) {
//   throw new Error(
//     "Please specify the port number for the HTTP server with the environment variable PORT."
//   );
// }

// const port = 3000; // ??
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Arithmetic service - last updated 3/4/2022");
  // res.sendFile(__dirname + '/index.html'); // without cors
});

// app.get('/add/:n/:m', (req, res) => {
//     res.json(Number(req.params.n) + Number(req.params.m));
// });

app.get("/add/:n/:m", (req, res) => {
  let n = Number(req.params.n);
  let m = Number(req.params.m);
  let sum = add(n, m);
  res.json(sum);
});

app.get("/subtract/:n/:m", (req, res) => {
  res.json(Number(req.params.n) - Number(req.params.m));
});

app.get("/multiply/:n/:m", (req, res) => {
  res.json(Number(req.params.n) * Number(req.params.m));
});

app.get("/divide/:n/:m", (req, res) => {
  res.json(Number(req.params.n) / Number(req.params.m));
});

app.listen(port);
