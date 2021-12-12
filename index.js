// const http = require("http");

// const PORT = 8081;

// const requestHandler = (req, res) => {
//   if (req.url.indexOf("/home") >= 0) {
//     res.writeHead(200, { "Content-Type": "text/json" });
//     return res.end('{ "url": "homepage"}');
//   }
//   res.writeHead(200, { "Content-Type": "text/json" });
//   return res.end('{ "url": "other"}');
// };

// const server = http.createServer(requestHandler);

// server.listen(PORT, (err) => {
//   if (err) {
//     console.error("Error at server launch:", err);
//   }
//   console.log(`Server works at port ${PORT}!`);
// });
//=================================================================================================
const express = require("express");
const morgan = require("morgan");
const app = express();

const PORT = 8081;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(morgan("tiny"));

// app.use((req, res, next) => {
//   console.log(`${req.method} ${req.originalUrl}, ${new Date().toISOString()}`);
//   next();
// });

app.post("/home", (req, res) => {
  if (!req.body.goit) {
    return res.status(400).json({ status: "goit parameter is reqiured" });
  }
  res.json({ j1235456: "object", body: req.body });
});

// app.post("/home", (req, res) => {
//   res.send("Post request");
// });

// app.delete("/home", (req, res) => {
//   res.send("Delete request");
// });

app.listen(PORT, (err) => {
  if (err) {
    console.error("Error at server launch:", err);
  }
  console.log(`Server works at port ${PORT}!`);
});
