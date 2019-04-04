const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send({
    message: "Hello World"
  });
});

app.listen(port, () => {
  console.log(`Server is up at port ${port} on ${new Date()}`);
});
