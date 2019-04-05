const path = require("path");
const http = require("http");
const express = require("express");
const socketio = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketio(server);

const port = process.env.PORT || 3000;
const publicDirectoryPath = path.join(__dirname, "../public");

app.use(express.static(publicDirectoryPath));

io.on("connection", socket => {

  // Log new connection
  console.log("New WebSocket connection!");

  // Send welcome message to new connected client
  socket.emit("message", "Welcome!");

  // Send message back to all client
  socket.on("clientMessage", message => {
    io.emit("message", message);
  })
})

server.listen(port, () => {
  console.log(`Server is up at port ${port} on ${new Date()}`);
});