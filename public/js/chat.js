const socket = io();

/**
 * Elements
 */
const $messageForm = document.querySelector("#message-form");
const $messageFormInput = $messageForm.querySelector("input");
const $messageFormButton = $messageForm.querySelector("button");

/**
 * Handle message coming from server
 */
socket.on("message", message => {
  console.log(message);
})

/**
 * Handle submit event to send message
 */
$messageForm.addEventListener("submit", e => {
  e.preventDefault();

  // disable button after press button
  $messageFormButton.setAttribute("disabled", "disabled");

  // send message to server
  const message = e.target.elements.message.value;
  socket.emit("sendMessage", message, error => {
    if (error) {
      return console.log(error);
    }
    console.log("Message delivered!");
  });

  // clear edit text box
  e.target.elements.message.value = "";
})

/**
 * Handle send location to server event
 */
document.querySelector("#send-location").addEventListener("click", e => {

  // Check if geolocatino supported by browser
  if (!navigator.geolocation) {
    return alert("Geolocation is not supported by your browser");
  }

  // Get current position 
  navigator.geolocation.getCurrentPosition(position => {
    socket.emit("sendLocation", {
      latitude: position.coords.latitude,
      longitude: position.coords.longitude
    }, ack => {
      console.log(ack);
    });
  })
})