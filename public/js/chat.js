const socket = io();

/**
 * Handle message event
 */
socket.on("message", message => {
  console.log(message);
})

/**
 * Handle click message event
 */
const chatForm = document.querySelector("#message-form");
const message = document.querySelector("input");

chatForm.addEventListener("submit", e => {
  e.preventDefault();
  socket.emit("sendMessage", message.value);
  message.value = "";
})

