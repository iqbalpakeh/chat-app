const path = require("path");
const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

const publicDirectoryPath = path.join(__dirname, "../public");
app.use(express.static(publicDirectoryPath));

app.listen(port, () => {
  console.log(`Server is up at port ${port} on ${new Date()}`);
});

// test submit
// Test submit from iqbal