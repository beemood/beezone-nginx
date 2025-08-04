const express = require("express");

const app = express();

app.get("/api", (req, res) => {
  res.send({ message: "Hello" });
});

app.listen(3000, undefined, () => {
  console.log("App is up and running at port 3000");
});
