const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

const CatFactRouter = require("./routes/catfact");

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/catfact", CatFactRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
