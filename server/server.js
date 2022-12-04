const express = require("express");
var bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

const port = 3001;

app.get("/send_bet", (req, res) => {
  console.log(req.query);

  res.end();
});

app.post("/send_bet", (req, res) => {
  console.log(req.body);

  res.end();
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
