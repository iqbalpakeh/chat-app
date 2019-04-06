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
document.querySelector("#message-form").addEventListener("submit", e => {
  e.preventDefault();
  const message = e.target.elements.message.value;
  socket.emit("sendMessage", message);
  e.target.elements.message.value = "";
})

