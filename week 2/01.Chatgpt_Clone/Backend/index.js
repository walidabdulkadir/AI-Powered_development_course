import express from "express";
const app = express();

function logger(req, res) {
  const url = req.url;
  const method = req.method;
  console.log(url, method);
  res.send("from logger middleware");
}

app.get("/", logger, (req, res) => {
  res.send("hello world");
});

app.get("/about", (req, res) => {
  res.send("hello world from about");
});

app.get("/api/chat", (req, res) => {
  res.send("hello world from about");
});

app.get("/conservation", (req, res) => {
  res.send("hello world from about");
});

app.listen(5500, () => {
  console.log("Server is running at http://localhost:5500");
});
